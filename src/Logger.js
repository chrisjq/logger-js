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

function pad2Digit(n) {
  return n < 10 ? "0" + n : n;
}

function pad3Digit(n) {
  if (n < 10) {
    return "00" + n;
  } else if (n < 100) {
    return "0" + n;
  }
  return n;
}

class Logger {
  constructor(customWriter) {
    this.customWriter = customWriter ? customWriter : null;
    this.logLevel = ALL;
    this.loggingEnabled = true;
    this.prettyJSON = true;
    this.writeLevel = true;
    this.includeTimestamp = true;
    this.traverseCyclicJSON = true;
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
    this.logLevel = number;
  };

  setLoggingEnabled = (bool) => {
    this.loggingEnabled = bool;
  };

  setPrettyJSON = (bool) => {
    this.prettyJSON = bool;
  };

  setWriteLevel = (bool) => {
    this.writeLevel = bool;
  };

  setIncludeTimestamp = (bool) => {
    this.includeTimestamp = bool;
  };

  setTraverseCyclicJSON = (bool) => {
    this.traverseCyclicJSON = bool;
  };

  getJSONString = (pretty, val) => {
    let errorOccured = false;
    let errorMessage = "";

    try {
      return pretty ? JSON.stringify(val, null, 2) : JSON.stringify(val);
    } catch (e) {
      if (!this.traverseCyclicJSON) {
        errorOccured = true;
        errorMessage = e.message;
      } else {
        try {
          return this.getCyclicJSONString(pretty, val);
        } catch (e) {
          errorOccured = true;
          errorMessage = e.message;
        }
      }
    }

    if (errorOccured) {
      return 'Error Occurred "' + errorMessage + '" Object Key Set: ' + Object.keys(val);
    }
  };

  getCyclicJSONString = (pretty, object) => {
    let seenNodes = [];

    let isArray = Array.isArray(object);
    let newObject = null;

    if (isArray) {
      newObject = [];
    } else {
      newObject = {};
    }

    let error = null;

    try {
      this.putSeenNode(seenNodes, object, "root");
      this.processObject(seenNodes, 0, "root", "root", object, newObject);
    } catch (e) {
      error = e;
    }

    for (let i = 0; i < seenNodes.length; i++) {
      let current = seenNodes[i];
      let parentNode = current.parentNode;
      let cA = Array.isArray(parentNode);

      if (cA) {
        delete parentNode[0];
      } else {
        delete parentNode["_seenNode"];
      }
    }

    if (error) {
      throw error;
    }

    try {
      return pretty ? JSON.stringify(newObject, null, 2) : JSON.stringify(newObject);
    } catch (e) {
      return 'Error Occurred "' + e.message + '" Object Key Set: ' + Object.keys(newObject);
    }
  };

  processObject = (seenNodes, depth, currentNodePath, currentNodeName, origObj, newObj) => {
    //Go through all the objects
    if (Array.isArray(origObj)) {
      let currentIndex = 0;

      for (let i = 0; i < origObj.length; i++) {
        let cVal = origObj[i];

        let seenNode = this.getSeenNode(cVal);
        let hasSeenNode = seenNode ? true : false;
        let isSeenNode = seenNode && seenNode.isSeenNode ? true : false;

        if (!hasSeenNode) {
          if (cVal !== Object(cVal)) {
            newObj[currentIndex] = cVal;
            currentIndex++;
          } else if (Array.isArray(cVal)) {
            if (!isSeenNode) {
              let newArray = [];
              newObj[currentIndex] = newArray;
              let cName = "" + (currentIndex + 1);
              let cPath = currentNodePath + "." + cName;
              this.putSeenNode(seenNodes, cVal, cPath);
              this.processObject(seenNodes, depth + 1, cPath, cName, cVal, newArray);
            } else {
              newObj[currentIndex] = "REFERENCES => " + seenNode.path;
            }
            currentIndex++;
          } else {
            if (!isSeenNode) {
              let newObject = {};
              newObj[currentIndex] = newObject;
              let cName = "" + (currentIndex + 1);
              let cPath = currentNodePath + "." + cName;
              this.putSeenNode(seenNodes, cVal, cPath);
              this.processObject(seenNodes, depth + 1, cPath, cName, cVal, newObject);
            } else {
              newObj[currentIndex] = "REFERENCES => " + seenNode.path;
            }
            currentIndex++;
          }
        } else {
          if (!isSeenNode) {
            newObj[currentIndex] = "REFERENCES => " + seenNode.path;
            currentIndex++;
          }
        }
      }
    } else {
      let keyS = Object.keys(origObj);

      for (let i = 0; i < keyS.length; i++) {
        let cKey = keyS[i];
        let cVal = origObj[cKey];
        let seenNode = this.getSeenNode(cVal);
        let hasSeenNode = seenNode ? true : false;
        let isSeenNode = seenNode && seenNode.isSeenNode ? true : false;

        if (!hasSeenNode) {
          if (cVal !== Object(cVal)) {
            newObj[cKey] = cVal;
          } else if (Array.isArray(cVal)) {
            if (!isSeenNode) {
              let newArray = [];
              newObj[cKey] = newArray;
              let cPath = currentNodePath + "." + cKey;
              this.putSeenNode(seenNodes, cVal, cPath);
              this.processObject(seenNodes, depth + 1, cPath, cKey, cVal, newArray);
            } else {
              newObj[cKey] = "REFERENCES => " + seenNode.path;
            }
          } else {
            if (!isSeenNode) {
              let newObject = {};
              newObj[cKey] = newObject;
              let cPath = currentNodePath + "." + cKey;
              this.putSeenNode(seenNodes, cVal, cPath);
              this.processObject(seenNodes, depth + 1, cPath, cKey, cVal, newObject);
            } else {
              newObj[cKey] = "REFERENCES => " + seenNode.path;
            }
          }
        } else {
          if (!isSeenNode) {
            newObj[cKey] = "REFERENCES => " + seenNode.path;
          }
        }
      }
    }
  };

  getSeenNode = (obj) => {
    if (Array.isArray(obj)) {
      let ret = null;

      if (obj.length > 0) {
        let cO = obj[0];

        if (cO == Object(cO)) {
          if (cO._hasSeenNode) {
            return cO;
          }
        }
      }
    } else {
      if (obj._hasSeenNode) {
        return {
          isSeenNode: true,
        };
      }
      return obj["_seenNode"];
    }
  };

  putSeenNode(seenNodes, obj, path) {
    if (Object.isFrozen(obj) || Object.isSealed(obj) || Object.isExtensible()) {
      throw { message: "Object at " + path + " read only." };
    }

    let cSeenObj = {
      _hasSeenNode: true,
      path: path,
      parentNode: obj,
    };

    seenNodes.push(cSeenObj);

    if (Array.isArray(obj)) {
      obj.splice(0, 0, cSeenObj);
    } else {
      obj._seenNode = cSeenObj;
    }
  }

  logInternal = (level, label, instanceEnable, ...oObj) => {
    if (this.loggingEnabled && level >= this.logLevel && instanceEnable ? instanceEnable : false) {
      let logText = null;

      if (label) {
        logText = label;

        if (oObj) {
          let i = 0;
          for (let val of oObj) {
            let replaceS = "{" + i + "}";

            let replaceW = "";
            if (val !== Object(val)) {
              replaceW = val;
            } else {
              replaceW = this.getJSONString(this.prettyJSON, val);
            }

            logText = logText.replace(replaceS, replaceW);

            i++;
          }
        }

        if (this.writeLevel) {
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
          if (this.customWriter) {
            this.customWriter(logText);
          } else {
            console.log(logText);
          }
        }
      }
    }
  };
}

export default Logger;
