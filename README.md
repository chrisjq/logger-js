# logger-js

Java style logger for es6/node.js/react native

Parameter {0}, {1}, {2} ... {number} replaced with strings of values of objects(JSON output) or variables passed to function.

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

- **Log.setCustomLogger(customFunction)** - Write a function to log the text in a custom way e.g. write to file
- **Log.setLogLevel(number)** - The maximum log level to output to log
- **Log.setLoggingEnabled(bool)** - Enable logging
- **Log.setPrettyJSON(bool)** - Pretty print JSON
- **Log.setWriteLevel(bool)** - Include the write level in output e.g. INFO:
- **Log.setIncludeTimestamp(bool)** - Include timestame in output

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
