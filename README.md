# logger-js
Java style logger for node.js
Parameter {0}, {1} ... replaced with strings of values.

#Usage
##Import default logger:
import { Log } from "logger-js"; //For constant instance
import { Logger } from "logger-js"; //For class

##Log

To log:
Log.log("{0} componentDidMount - Props: {1}", this.constructor.name, this.props);

To log in class passing class instance variable:
const DEBUG_CLASS = true;
...
Log.iLog("{0} componentDidMount - Props: {1}", DEBUG_CLASS, this.constructor.name, this.props);

##Constant Log Levels
OFF, SEVERE, WARNING, INFO, CONFIG, FINE, FINER, FINEST, ALL

#Functions

##Configuration
Log.setCustomLogger(customFunction); //Write a function to log the text in a custom way e.g. write to file
Log.setLogLevel(number); //The maximum log level to output to log
Log.setLoggingEnabled(bool); //Enable logging
Log.setPrettyJSON(bool); //Pretty print JSON
Log.setWriteLevel(number); //Include the write level in output e.g. INFO: 
Log.setIncludeTimestamp(bool); //Include timestame in output

##Instance Logging:
Log.functionName(label, instanceEnable, ...oObj);
Log.iSevere()
Log.iWarning()
Log.iInfo()
Log.iConfig()
Log.iFine()
Log.iFiner()
Log.iFinest()
Log.iLog() //Same as iInfo

##Logging:
Log.functionName(label, instanceEnable, ...oObj);
Log.severe()
Log.warning()
Log.info()
Log.config()
Log.fine()
Log.finer()
Log.finest()
Log.log() //Same as info

