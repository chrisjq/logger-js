"use strict";

import { Log } from "../index.js";
import {
  OFF,
  SEVERE,
  WARNING,
  INFO,
  CONFIG,
  FINE,
  FINER,
  FINEST,
  ALL
} from "../src/Logger.js";

//Standard methods
test("Check basic log INFO", () => {
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'INFO: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.log("This is some test JSON {0}", testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check basic log SEVERE", () => {
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'SEVERE: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.severe("This is some test JSON {0}", testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check basic log WARNING", () => {
  const testJSON = {
    Test: "Testing"
  };

  const testResult =
    'WARNING: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.warning("This is some test JSON {0}", testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check basic log INFO", () => {
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'INFO: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.info("This is some test JSON {0}", testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check basic log CONFIG", () => {
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'CONFIG: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.config("This is some test JSON {0}", testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check basic log FINE", () => {
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'FINE: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.fine("This is some test JSON {0}", testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check basic log FINER", () => {
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'FINER: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.finer("This is some test JSON {0}", testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check basic log FINEST", () => {
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'FINEST: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.finest("This is some test JSON {0}", testJSON);

  expect(gotResult).toBe(testResult);
});

//instance test methods
test("Check instance log INFO", () => {
  const DEBUG = true;
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'INFO: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.iLog("This is some test JSON {0}", DEBUG, testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check instance log SEVERE", () => {
  const DEBUG = true;
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'SEVERE: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.iSevere("This is some test JSON {0}", DEBUG, testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check instance log WARNING", () => {
  const DEBUG = true;
  const testJSON = {
    Test: "Testing"
  };

  const testResult =
    'WARNING: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.iWarning("This is some test JSON {0}", DEBUG, testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check instance log INFO", () => {
  const DEBUG = true;
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'INFO: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.iInfo("This is some test JSON {0}", DEBUG, testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check instance log CONFIG", () => {
  const DEBUG = true;
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'CONFIG: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.iConfig("This is some test JSON {0}", DEBUG, testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check instance log FINE", () => {
  const DEBUG = true;
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'FINE: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.iFine("This is some test JSON {0}", DEBUG, testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check instance log FINER", () => {
  const DEBUG = true;
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'FINER: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.iFiner("This is some test JSON {0}", DEBUG, testJSON);

  expect(gotResult).toBe(testResult);
});

test("Check instance log FINEST", () => {
  const DEBUG = true;
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'FINEST: This is some test JSON {\n  "Test": "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.iFinest("This is some test JSON {0}", DEBUG, testJSON);

  expect(gotResult).toBe(testResult);
});

//Other tests
test("Check varable", () => {
  const testVariable = true;

  const testResult = "INFO: This is some test JSON true";
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.log("This is some test JSON {0}", testVariable);

  expect(gotResult).toBe(testResult);
});

test("Check not whiting log level", () => {
  const testVariable = true;

  const testResult = "This is some test JSON true";
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setWriteLevel(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.log("This is some test JSON {0}", testVariable);

  Log.setWriteLevel(true);
  expect(gotResult).toBe(testResult);
});

test("Check logging disabled", () => {
  const testVariable = true;

  const testResult = null;
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setLoggingEnabled(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.log("This is some test JSON {0}", testVariable);

  Log.setLoggingEnabled(true);

  expect(gotResult).toBe(testResult);
});

test("Check non-pretty json", () => {
  const testJSON = {
    Test: "Testing"
  };

  const testResult = 'INFO: This is some test JSON {"Test":"Testing"}';
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setPrettyJSON(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.log("This is some test JSON {0}", testJSON);

  Log.setPrettyJSON(true);

  expect(gotResult).toBe(testResult);
});

test("Check log level fine", () => {
  const testJSON = {
    Test: "Testing"
  };

  const testResult1 = 'INFO: This is some test JSON {"Test":"Testing"}';
  const testResult2 = 'FINE: This is some test JSON {"Test":"Testing"}';
  var gotResult1 = null;
  var gotResult2 = null;

  const customerTestLogger1 = text => {
    gotResult1 = text;

    console.log(text);
  };

  const customerTestLogger2 = text => {
    gotResult2 = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setPrettyJSON(false);
  Log.setLogLevel(FINE);

  //Test
  Log.setCustomLogger(customerTestLogger1);
  Log.log("This is some test JSON {0}", testJSON);
  Log.setCustomLogger(customerTestLogger2);
  Log.fine("This is some test JSON {0}", testJSON);

  Log.setLogLevel(ALL);
  Log.setPrettyJSON(true);

  expect(gotResult1).toBe(testResult1);
  expect(gotResult2).toBe(testResult2);
});

test("Check log level info", () => {
  const testJSON = {
    Test: "Testing"
  };

  const testResult1 = 'INFO: This is some test JSON {"Test":"Testing"}';
  const testResult2 = null;
  var gotResult1 = null;
  var gotResult2 = null;

  const customerTestLogger1 = text => {
    gotResult1 = text;

    console.log(text);
  };

  const customerTestLogger2 = text => {
    gotResult2 = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setPrettyJSON(false);
  Log.setLogLevel(INFO);

  //Test
  Log.setCustomLogger(customerTestLogger1);
  Log.log("This is some test JSON {0}", testJSON);
  Log.setCustomLogger(customerTestLogger2);
  Log.fine("This is some test JSON {0}", testJSON);

  Log.setLogLevel(ALL);
  Log.setPrettyJSON(true);

  expect(gotResult1).toBe(testResult1);
  expect(gotResult2).toBe(testResult2);
});

test("Check no objects passed log INFO", () => {
  const testResult = "INFO: This is some test JSON";
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.log("This is some test JSON");

  expect(gotResult).toBe(testResult);
});

test("Check cyclic JSON", () => {
  const testObject = {
    name: "World",
    regions: []
  };

  testObject.regions.push({
    name: "North America",
    parent: "America"
  });

  testObject.regions.push({
    name: "Asia",
    parent: testObject
  });

  const testResult = "Error Occurred";
  var gotResult = null;

  const customerTestLogger = text => {
    gotResult = text.includes(testResult);

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.log("This is some test JSON [{0}]", testObject);

  expect(gotResult).toBe(true);
});
