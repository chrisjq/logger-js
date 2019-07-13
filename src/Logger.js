/*
Copyright (c) 2019 Chris Quin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

"use strict";

export const OFF = 50000;
export const SEVERE = 1000;
export const WARNING = 900;
export const INFO = 800;
export const CONFIG = 700;
export const FINE = 500;
export const FINER = 400;
export const FINEST = 300;
export const ALL = 0;

const NEWLINE = "\n"; //Default newline character
const DEFAULT_PRETTY_PADDING_COUNT = 2; //Default padding for pretty print.

/**
Pad 2 digit number
*/
function pad2Digit(n) {
  return n < 10 ? "0" + n : n;
}

/**
Pad 3 digit number
*/
function pad3Digit(n) {
  if (n < 10) {
    return "00" + n;
  } else if (n < 100) {
    return "0" + n;
  }
  return n;
}

/**
Creates padding with entered number of spaces.
*/
function getSpacePadding(number) {
  let ret = "";

  for (let i = 0; i < number; i++) {
    ret += " ";
  }

  return ret;
}

/**
Sorter for Array.sort to sort alphabetically case insensitive.
*/
function sortArrayCaseInsensitve(a, b) {
  return a.toUpperCase().localeCompare(b.toUpperCase());
}

/**
Sorter for Array.sort to sort inex objects
*/
function indexSorter(a, b) {
  return a.index - b.index;
}

/**
Get a raw string value for logging in the logger.
*/
function getReplaceString(config, val) {
  if (val === undefined) {
    return "undefined";
  } else if (val === null) {
    return "null";
  } else if (val !== Object(val)) {
    return val;
  }
  if (typeof val === "function") {
    return "[function]";
  } else {
    return getJSONString(config, val);
  }
  return "";
}

/**
Get a JSON string.
*/
function getJSONString(config, val) {
  let errorOccured = false;
  let errorMessage = "";

  try {
    const sb = {
      pretty: config.prettyJSON,
      newLine: config.prettyNewLine,
      nextLevelAddition: config.prettyPadding,
      seenNodes: new WeakMap(),
      sortKeys: config.sortObjectKeys,
      sortCaseInsensitive: config.sortObjectKeysCaseInsensitive,
      ret: "",
    };

    let nodePath = "/";
    putSeenNode(sb.seenNodes, nodePath, val);
    createObjectString("", sb.pretty ? "" : null, sb, val);
    return sb.ret;
  } catch (e) {
    errorOccured = true;
    errorMessage = e.message;
  }

  if (errorOccured) {
    return 'Error Occurred "' + errorMessage + '" Object Key Set: ' + Object.keys(val);
  }
}

/**
Create a string for an object.
*/
function createObjectString(nodePath, startLine, sb, object) {
  if (Array.isArray(object)) {
    if (object.length == 0) {
      sb.ret += "[]";
    } else {
      sb.ret += "[";

      let currentLevelStart = sb.pretty ? startLine + sb.nextLevelAddition : null;

      if (sb.pretty) {
        sb.ret += sb.newLine;
      } else {
        sb.ret += " ";
      }

      for (let i = 0; i < object.length; i++) {
        let cVal = object[i];

        createKeyValuePair(nodePath + "/[" + i + "]", currentLevelStart, sb, null, cVal);

        if (i < object.length - 1) {
          sb.ret += ",";
        }

        if (sb.pretty) {
          sb.ret += sb.newLine;
        } else {
          sb.ret += " ";
        }
      }

      if (sb.pretty) {
        sb.ret += startLine;
      }

      sb.ret += "]";
    }
  } else {
    let keySet = Object.keys(object);

    if (keySet.length == 0) {
      sb.ret += "{}";
    } else {
      if (sb.sortKeys) {
        if (sb.sortCaseInsensitive) {
          keySet.sort(sortArrayCaseInsensitve);
        } else {
          keySet.sort();
        }
      }

      sb.ret += "{";

      let currentLevelStart = sb.pretty ? startLine + sb.nextLevelAddition : null;

      if (sb.pretty) {
        sb.ret += sb.newLine;
      } else {
        sb.ret += " ";
      }

      for (let i = 0; i < keySet.length; i++) {
        let cKey = keySet[i];
        let cVal = object[cKey];
        let currentNodePath = nodePath + "/" + cKey;

        createKeyValuePair(currentNodePath, currentLevelStart, sb, cKey, cVal);

        if (i < keySet.length - 1) {
          sb.ret += ",";
        }

        if (sb.pretty) {
          sb.ret += sb.newLine;
        } else {
          sb.ret += " ";
        }
      }

      if (sb.pretty) {
        sb.ret += startLine;
      }

      sb.ret += "}";
    }
  }
}

/**
Create a string an object item.
*/
function createKeyValuePair(nodePath, lineStart, sb, key, val) {
  let nextLineStart = null;

  if (sb.pretty) {
    sb.ret += lineStart;
  }

  if (key) {
    let keyString = key + ": ";
    sb.ret += keyString;

    let space = "";

    for (let i = 0; i < keyString.length; i++) {
      space += " ";
    }

    if (sb.pretty) {
      nextLineStart = lineStart ? lineStart + space : null;
    }
  } else if (sb.pretty) {
    nextLineStart = lineStart ? lineStart : null;
  }

  if (val === undefined) {
    sb.ret += "undefined";
  } else if (val === null) {
    sb.ret += "null";
  } else if (val === String(val)) {
    sb.ret += '"' + val + '"';
  } else if (val !== Object(val)) {
    sb.ret += val;
  } else {
    if (typeof val === "function") {
      sb.ret += "[function]";
    } else {
      let seenNode = getSeenNode(sb.seenNodes, val);

      if (seenNode) {
        sb.ret += '"@ref:' + seenNode.path + '"';
      } else {
        putSeenNode(sb.seenNodes, nodePath, val);

        if (Array.isArray(val)) {
          if (val.length == 0) {
            sb.ret += "[]";
          } else {
            createObjectString(nodePath, nextLineStart, sb, val);
          }
        } else {
          let keys = Object.keys(val);
          if (keys.length == 0) {
            sb.ret += "{}";
          } else {
            createObjectString(nodePath, nextLineStart, sb, val);
          }
        }
      }
    }
  }
}

/**
Get a seen node from the WeakMap
*/
function getSeenNode(seenNodes, obj) {
  return seenNodes.get(obj);
}

/**
Put a seen node into the WeakMap
*/
function putSeenNode(seenNodes, path, originalObject) {
  let cSeenObj = {
    path: path,
  };

  seenNodes.set(originalObject, cSeenObj);
}

/**
Main Logger class.
*/
class Logger {
  constructor(customWriter) {
    this.customWriter = customWriter ? customWriter : null;
    this.cfg = {
      logLevel: ALL,
      loggingEnabled: true,
      prettyJSON: true,
      writeLevel: true,
      includeTimestamp: true,
      splitLogCharSize: null,
      prettyNewLine: NEWLINE,
      prettyPadding: getSpacePadding(DEFAULT_PRETTY_PADDING_COUNT),
      sortObjectKeys: true,
      sortObjectKeysCaseInsensitive: false,
    };
  }

  //Instance logging, to enable or disable at the instace level
  iSevere = (label, instanceEnable, ...oObj) => {
    this.logInternal(SEVERE, label, instanceEnable, ...oObj);
  };

  iWarning = (label, instanceEnable, ...oObj) => {
    this.logInternal(WARNING, label, instanceEnable, ...oObj);
  };

  iInfo = (label, instanceEnable, ...oObj) => {
    this.logInternal(INFO, label, instanceEnable, ...oObj);
  };

  iConfig = (label, instanceEnable, ...oObj) => {
    this.logInternal(CONFIG, label, instanceEnable, ...oObj);
  };

  iFine = (label, instanceEnable, ...oObj) => {
    this.logInternal(FINE, label, instanceEnable, ...oObj);
  };

  iFiner = (label, instanceEnable, ...oObj) => {
    this.logInternal(FINER, label, instanceEnable, ...oObj);
  };

  iFinest = (label, instanceEnable, ...oObj) => {
    this.logInternal(FINEST, label, instanceEnable, ...oObj);
  };

  //General log method
  iLog = (label, instanceEnable, ...oObj) => {
    this.logInternal(INFO, label, instanceEnable, ...oObj);
  };

  //General logging
  severe = (label, ...oObj) => {
    this.logInternal(SEVERE, label, true, ...oObj);
  };

  warning = (label, ...oObj) => {
    this.logInternal(WARNING, label, true, ...oObj);
  };

  info = (label, ...oObj) => {
    this.logInternal(INFO, label, true, ...oObj);
  };

  config = (label, ...oObj) => {
    this.logInternal(CONFIG, label, true, ...oObj);
  };

  fine = (label, ...oObj) => {
    this.logInternal(FINE, label, true, ...oObj);
  };

  finer = (label, ...oObj) => {
    this.logInternal(FINER, label, true, ...oObj);
  };

  finest = (label, ...oObj) => {
    this.logInternal(FINEST, label, true, ...oObj);
  };

  //General log method
  log = (label, ...oObj) => {
    this.logInternal(INFO, label, true, ...oObj);
  };

  setCustomLogger = (customWriter) => {
    this.customWriter = customWriter;
  };

  setLogLevel = (number) => {
    this.cfg.logLevel = number;
  };

  setLoggingEnabled = (bool) => {
    this.cfg.loggingEnabled = bool;
  };

  setPrettyJSON = (bool) => {
    this.cfg.prettyJSON = bool;
  };

  setWriteLevel = (bool) => {
    this.cfg.writeLevel = bool;
  };

  setIncludeTimestamp = (bool) => {
    this.cfg.includeTimestamp = bool;
  };

  setSplitLogCharSize = (number) => {
    this.cfg.splitLogCharSize = number;
  };

  setPrettyNewLine = (newLine) => {
    if (newLine) {
      this.cfg.prettyNewLine = newLine;
    } else {
      this.cfg.prettyNewLine = NEWLINE;
    }
  };

  setPrettyPaddingCount = (number) => {
    if (number) {
      this.cfg.prettyPadding = getSpacePadding(number);
    } else {
      this.cfg.prettyPadding = getSpacePadding(DEFAULT_PRETTY_PADDING_COUNT);
    }
  };

  setSortObjectKeys = (sortEnabledBool, caseInsensitiveBool) => {
    this.cfg.sortObjectKeys = sortEnabledBool;
    this.cfg.sortObjectKeysCaseInsensitive = caseInsensitiveBool;
  };

  /**
Main logging method to create the log string.
*/
  logInternal = (level, label, instanceEnable, ...oObj) => {
    if (this.cfg.loggingEnabled && level >= this.cfg.logLevel && instanceEnable ? instanceEnable : false) {
      let logText = null;

      if (label) {
        if (oObj && oObj.length > 0) {
          //Find the inices of the replace logText
          let indices = [];
          let currentIndex = 0;

          //Go throught the objects and create an array index
          for (let val of oObj) {
            let replaceS = "{" + currentIndex + "}";
            let index = label.indexOf(replaceS);

            if (index >= 0) {
              indices.push({
                id: replaceS,
                index: index,
                val: val,
              });
            }

            currentIndex++;
          }

          //If we have indices sort them in the order they were used in the label
          if (indices.length > 0) {
            let subString = [];
            indices.sort(indexSorter); //Sort the index objects in the order they were used in the label

            let startIndex = 0;

            //Split the original label into substrings minus the replacement labels.
            for (let index of indices) {
              if (startIndex == 0 && index.index == 0) {
                subString.push("");
              } else {
                subString.push(label.substring(startIndex, index.index));
              }

              startIndex = index.index + index.id.length;
            }

            if (startIndex < label.length) {
              subString.push(label.substring(startIndex));
            }

            logText = "";

            let indexPos = -1; //Skip the first

            //Append the substrings and values to the log entry.
            for (let s of subString) {
              if (indexPos >= 0 && indexPos < indices.length) {
                let index = indices[indexPos];
                logText += getReplaceString(this.cfg, index.val);
              }

              logText += s;
              indexPos++;
            }

            //Add the last indexed item if we have one
            if (indexPos >= 0 && indexPos < indices.length) {
              let index = indices[indexPos];
              logText += getReplaceString(this.cfg, index.val);
            }
          }
        } else {
          logText = label;
        }

        if (this.cfg.writeLevel) {
          switch (level) {
            case SEVERE:
              logText = "SEVERE: " + logText;
              break;
            case WARNING:
              logText = "WARNING: " + logText;
              break;
            case INFO:
              logText = "INFO: " + logText;
              break;
            case CONFIG:
              logText = "CONFIG: " + logText;
              break;
            case FINE:
              logText = "FINE: " + logText;
              break;
            case FINER:
              logText = "FINER: " + logText;
              break;
            case FINEST:
              logText = "FINEST: " + logText;
              break;
            default:
              logText = "LOG_" + level + ": " + logText;
              break;
          }
        }

        if (this.includeTimestamp) {
          let now = new Date();
          logText =
            now.getFullYear() +
            "-" +
            pad2Digit(now.getMonth() + 1) +
            "-" +
            pad2Digit(now.getDate()) +
            " " +
            pad2Digit(now.getHours()) +
            ":" +
            pad2Digit(now.getMinutes()) +
            ":" +
            pad2Digit(now.getSeconds()) +
            "." +
            pad3Digit(now.getMilliseconds()) +
            " - " +
            logText;
        }

        if (logText) {
          if (this.cfg.splitLogCharSize && logText.length > this.cfg.splitLogCharSize) {
            let charsLeft = logText.length;
            let printArray = [];
            let currentStart = 0;
            let currentEnd = this.cfg.splitLogCharSize;

            while (charsLeft > 0) {
              printArray.push(logText.substring(currentStart, currentEnd));
              currentStart = currentEnd;

              if (charsLeft > this.cfg.splitLogCharSize) {
                currentEnd += this.cfg.splitLogCharSize;
              } else {
                currentEnd += charsLeft;
              }

              charsLeft -= this.cfg.splitLogCharSize;
            }

            for (let i = 0; i < printArray.length; i++) {
              if (this.customWriter) {
                this.customWriter(printArray[i]);
              } else {
                console.log(printArray[i]);
              }
            }
          } else {
            if (this.customWriter) {
              this.customWriter(logText);
            } else {
              console.log(logText);
            }
          }
        }
      }
    }
  };
}

export default Logger;
