# logger-js

Java style logger for easy es6/node.js/react native logging.

Parameter {0}, {1}, {2} ... {number} replaced with strings of values of objects(JSON output) or variables passed to function.

By passing objects to the logger when disabled the logging variables are not serialized to strings for logging thus increasing performance while keeping your logging code in place.

For multiple object references to prevent circular printing issues the reference to the first seen object is printed as a quoted string value @ref:/path/to/object or @ref:/path/to/object/array/item/[index]

Prints functions as "[function]", null as "null", undefined as "undefined" unquoted.
Text is only quoted if part of a JSON object value.

(https://github.com/chrisjq/logger-js.git)

# Usage

## Import default logger:

**import { Log } from "@chrisq/logger-js";** //For constant instance

**import { Logger } from "@chrisq/logger-js";** //For class

## Logging

### To log

**Log.log("{0} componentDidMount - Props: {1}", this.constructor.name, this.props);**

### To log in class passing class instance variable

**const DEBUG_CLASS = true;**

...

**Log.iLog("{0} componentDidMount - Props: {1}", DEBUG_CLASS, this.constructor.name, this.props);**

## Constant Log Levels

**OFF, SEVERE, WARNING, INFO, CONFIG, FINE, FINER, FINEST, ALL**

# Functions

## Configuration

- **Log.setCustomLogger(customFunction)** - Write a function to log the text in a custom way e.g. write to file. Default is null.
- **Log.setLogLevel(number)** - The maximum log level to output to log. Default is ALL(0).
- **Log.setLoggingEnabled(bool)** - Enable logging. Default is true.
- **Log.setPrettyJSON(bool)** - Pretty print JSON. Default is true.
- **Log.setWriteLevel(bool)** - Include the write level in output e.g. INFO:. Default is true.
- **Log.setIncludeTimestamp(bool)** - Include timestame in output. Default is true.
- **Log.setSplitLogCharSize(number)** - Set to split a very large log at the specified character count. e.g. Log.setSplitLogCharSize(4000); //Useful for adb logcat so the log isn't truncated. Default is null.
- **Log.setSplitLogCheckNewlineSize(number)** - Split on a neline if it is within the character count threshold given. Default is 200 characters.
- **Log.setPrettyNewLine(string)** - The newline string to use for pretty JSON. Default is neline character.
- **Log.setPrettyPaddingCount(number)** - The pretty printed JSON padding to be added to each level. Default 2
- **Log.setSortObjectKeys(sortEnabledBool, caseInsensitiveBool)** - Whether to sort the JSON keys alphabetically and if enabled whether the sort is case sensitive. Default sortEnabledBool = true, caseInsensitiveBool = false
- **Log.setPrettyPrintFunctions(bool)** - Pretty print JSON functions as [function]. Default is true.
- **Log.setPrettyPrintNull(bool)** - Pretty print JSON nulls as null. Default is true.
- **Log.setPrettyPrintUndefined(bool)** - Pretty print JSON undefined as undefined. Default is true.
- **Log.setPrettyPrintIncludeKeyLengthInPadding(bool)** - Pretty print JSON, include key length in padding. Default is false.
- **Log.setReplaceSpecialCharacterInJSONString(bool)** - Pretty print JSON, replace newline and carriage return with \n and \r. Default is false.

## Instance Logging:

- **Log.functionName(label, instanceEnable, ...oObj)**
- **Log.iSevere()**
- **Log.iWarning()**
- **Log.iInfo()**
- **Log.iConfig()**
- **Log.iFine()**
- **Log.iFiner()**
- **Log.iFinest()**
- **Log.iLog()** - Same as iInfo

## Logging:

- **Log.functionName(label, ...oObj)**
- **Log.severe()**
- **Log.warning()**
- **Log.info()**
- **Log.config()**
- **Log.fine()**
- **Log.finer()**
- **Log.finest()**
- **Log.log()** - Same as info
