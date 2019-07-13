"use strict";

import { Log } from "../index.js";
import { OFF, SEVERE, WARNING, INFO, CONFIG, FINE, FINER, FINEST, ALL } from "../src/Logger.js";

//Standard methods
test("Check basic log INFO", () => {
  const testJSON = {
    Test: "Testing",
  };

  const testResult = 'INFO: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'SEVERE: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'WARNING: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'INFO: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'CONFIG: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'FINE: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'FINER: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'FINEST: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'INFO: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'SEVERE: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'WARNING: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'INFO: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'CONFIG: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'FINE: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'FINER: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'FINEST: This is some test JSON {\n  Test: "Testing"\n}';
  var gotResult = null;

  const customerTestLogger = (text) => {
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

  const customerTestLogger = (text) => {
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

  const customerTestLogger = (text) => {
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

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult = 'INFO: This is some test JSON { Test: "Testing" }';
  var gotResult = null;

  const customerTestLogger = (text) => {
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
    Test: "Testing",
  };

  const testResult1 = 'INFO: This is some test JSON { Test: "Testing" }';
  const testResult2 = 'FINE: This is some test JSON { Test: "Testing" }';
  var gotResult1 = null;
  var gotResult2 = null;

  const customerTestLogger1 = (text) => {
    gotResult1 = text;

    console.log(text);
  };

  const customerTestLogger2 = (text) => {
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
    Test: "Testing",
  };

  const testResult1 = 'INFO: This is some test JSON { Test: "Testing" }';
  const testResult2 = null;
  var gotResult1 = null;
  var gotResult2 = null;

  const customerTestLogger1 = (text) => {
    gotResult1 = text;

    console.log(text);
  };

  const customerTestLogger2 = (text) => {
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

  const customerTestLogger = (text) => {
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
    regions: [],
  };

  testObject.regions.push({
    name: "North America",
    parent: "America",
  });

  testObject.regions.push({
    name: "Asia",
    parent: testObject,
  });

  const testResult =
    'INFO: This is some test JSON [{ name: "World", regions: [ { name: "North America", parent: "America" }, { name: "Asia", parent: "@ref:/" } ] }]';

  var gotResult = null;

  const customerTestLogger = (text) => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setPrettyJSON(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.log("This is some test JSON [{0}]", testObject);
  Log.setPrettyJSON(true);

  expect(gotResult).toBe(testResult);
});

test("Check cyclic JSON - multiple references", () => {
  const testObject = {
    name: "World",
    regions: [],
  };

  testObject.regions.push({
    name: "North America",
    parent: "America",
  });

  testObject.regions.push({
    name: "Asia - References Root",
    parent: testObject,
  });

  testObject.regions.push({
    name: "More Regions - root.regions.array",
    parent: testObject.regions,
  });

  const testResult =
    'INFO: This is some test JSON [{ name: "World", regions: [ { name: "North America", parent: "America" }, { name: "Asia - References Root", parent: "@ref:/" }, { name: "More Regions - root.regions.array", parent: "@ref:/regions" } ] }]';
  var gotResult = null;

  const customerTestLogger = (text) => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setPrettyJSON(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.log("This is some test JSON [{0}]", testObject);
  Log.setPrettyJSON(true);

  expect(gotResult).toBe(testResult);
});

test("Check cyclic JSON for array item", () => {
  const testObject = {
    name: "World",
    regions: [],
  };

  const arrayItem = {
    name: "North America",
    parent: "America",
  };

  testObject.regions.push({
    name: "Asia",
    parent: testObject,
  });

  testObject.regions.push(arrayItem);

  testObject.zed = arrayItem;

  const testResult =
    'INFO: This is some test JSON [{ name: "World", regions: [ { name: "Asia", parent: "@ref:/" }, { name: "North America", parent: "America" } ], zed: "@ref:/regions/[1]" }]';

  var gotResult = null;

  const customerTestLogger = (text) => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setPrettyJSON(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.log("This is some test JSON [{0}]", testObject);
  Log.setPrettyJSON(true);

  expect(gotResult).toBe(testResult);
});

test("Test very large string split", () => {
  const DEBUG = true;
  let testString = "";

  for (let i = 0; i < 2000; i++) {
    testString = testString + i + " ";
  }

  var gotResult = null;

  let sizeCheck = [];
  const customerTestLogger = (text) => {
    gotResult = text;
    sizeCheck.push(text.length);
    console.log(text);
  };

  //Setup
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);
  Log.setSplitLogCharSize(4000);

  //Test
  Log.iLog("{0}", DEBUG, testString);

  expect(sizeCheck[0]).toBe(4000);
  expect(sizeCheck[1]).toBe(4000);
  expect(sizeCheck[2]).toBe(896);
});

test("Check all types in JSON", () => {
  const testJSON = {
    Test: "Testing",
    test1: null,
    test2: undefined,
    array: [
      "one",
      "two",
      "three",
      {
        one: 1,
        two: 2,
        three: 3,
      },
    ],
    obj: {
      one: 1,
      two: 2,
      three: 3,
    },
    testFunction: function() {},
  };

  const testResult =
    'INFO: This is some test JSON { Test: "Testing", array: [ "one", "two", "three", { one: 1, three: 3, two: 2 } ], obj: { one: 1, three: 3, two: 2 }, test1: null, test2: undefined, testFunction: [function] }';
  var gotResult = null;

  const customerTestLogger = (text) => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setPrettyJSON(false);
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.log("This is some test JSON {0}", testJSON);
  Log.setPrettyJSON(true);

  expect(gotResult).toBe(testResult);
});

test("Check all types as parameters", () => {
  const testJSON = {
    test1: "Testing",
    test2: null,
    test3: undefined,
    test4: 1000,
    test5: function() {},
  };

  const testResult = "INFO: This is some test JSON String[Testing], null[null], undefined[undefined], number[1000], function[[function]]";
  var gotResult = null;

  const customerTestLogger = (text) => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setPrettyJSON(false);
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);

  //Test
  Log.log(
    "This is some test JSON String[{0}], null[{1}], undefined[{2}], number[{3}], function[{4}]",
    testJSON.test1,
    testJSON.test2,
    testJSON.test3,
    testJSON.test4,
    testJSON.test5,
  );
  Log.setPrettyJSON(true);

  expect(gotResult).toBe(testResult);
});

test("Check JSON default key ordering", () => {
  const testJSON = {
    test4: 1000,
    test1: "Testing",
    test2: null,
    test3: undefined,
    test5: function() {},
  };

  const testResult = "INFO: This is some test JSON String[Testing], null[null], undefined[undefined], number[1000], function[[function]]";
  var gotResult = null;

  const customerTestLogger = (text) => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setPrettyJSON(false);
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);
  Log.setSortObjectKeys(true, false);

  //Test
  Log.log(
    "This is some test JSON String[{0}], null[{1}], undefined[{2}], number[{3}], function[{4}]",
    testJSON.test1,
    testJSON.test2,
    testJSON.test3,
    testJSON.test4,
    testJSON.test5,
  );
  Log.setPrettyJSON(true);

  expect(gotResult).toBe(testResult);
});

test("Check JSON key ordering, case sensitive sort", () => {
  const testJSON = {
    test4: 1000,
    test1: "Testing",
    test2: null,
    test3: undefined,
    Test5: function() {},
  };

  const testResult = 'INFO: This is some test JSON { Test5: [function], test1: "Testing", test2: null, test3: undefined, test4: 1000 }';
  var gotResult = null;

  const customerTestLogger = (text) => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setPrettyJSON(false);
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);
  Log.setSortObjectKeys(true, false);

  //Test
  Log.log("This is some test JSON {0}", testJSON);
  Log.setPrettyJSON(true);

  expect(gotResult).toBe(testResult);
});

test("Check JSON key ordering, case insensitive sort", () => {
  const testJSON = {
    test4: 1000,
    test1: "Testing",
    test2: null,
    test3: undefined,
    Test5: function() {},
  };

  const testResult = 'INFO: This is some test JSON { test1: "Testing", test2: null, test3: undefined, test4: 1000, Test5: [function] }';
  var gotResult = null;

  const customerTestLogger = (text) => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setPrettyJSON(false);
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);
  Log.setSortObjectKeys(true, true);

  //Test
  Log.log("This is some test JSON {0}", testJSON);
  Log.setPrettyJSON(true);

  expect(gotResult).toBe(testResult);
});

test("Check JSON key ordering as given", () => {
  const testJSON = {
    test4: 1000,
    test1: "Testing",
    test2: null,
    test3: undefined,
    Test5: function() {},
  };

  const testResult = 'INFO: This is some test JSON { test4: 1000, test1: "Testing", test2: null, test3: undefined, Test5: [function] }';
  var gotResult = null;

  const customerTestLogger = (text) => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setPrettyJSON(false);
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);
  Log.setSortObjectKeys(false, false);

  //Test
  Log.log("This is some test JSON {0}", testJSON);
  Log.setPrettyJSON(true);
  Log.setSortObjectKeys(true, false);

  expect(gotResult).toBe(testResult);
});

test("Check basic log INFO with parameter order maintained", () => {
  const testJSON = {
    test1: "Testing{1}",
    test2: null,
    test3: undefined,
    test4: 1000,
    test5: function() {},
  };

  const testResult = "INFO: This is some test JSON String[Testing{1}], null[null], undefined[undefined], number[1000], function[[function]]";
  var gotResult = null;

  const customerTestLogger = (text) => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setPrettyJSON(false);
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);
  Log.setSortObjectKeys(true, false);

  //Test
  Log.log(
    "This is some test JSON String[{0}], null[{1}], undefined[{2}], number[{3}], function[{4}]",
    testJSON.test1,
    testJSON.test2,
    testJSON.test3,
    testJSON.test4,
    testJSON.test5,
  );
  Log.setPrettyJSON(true);

  expect(gotResult).toBe(testResult);
});

test("Check basic log INFO with parameter order maintained", () => {
  const testJSON = {
    test1: "Testing{2}",
    test2: null,
    test3: undefined,
    test4: 1000,
    test5: function() {},
  };

  const testResult = "INFO: This is some test JSON null[null], String[Testing{2}], undefined[undefined], number[1000], function[[function]]";
  var gotResult = null;

  const customerTestLogger = (text) => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setPrettyJSON(false);
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);
  Log.setSortObjectKeys(true, false);

  //Test
  Log.log(
    "This is some test JSON null[{1}], String[{0}], undefined[{2}], number[{3}], function[{4}]",
    testJSON.test1,
    testJSON.test2,
    testJSON.test3,
    testJSON.test4,
    testJSON.test5,
  );
  Log.setPrettyJSON(true);

  expect(gotResult).toBe(testResult);
});

test("Check basic log INFO with only parameter", () => {
  const testResult = "INFO: hi";
  var gotResult = null;

  const customerTestLogger = (text) => {
    gotResult = text;

    console.log(text);
  };

  //Setup
  Log.setPrettyJSON(false);
  Log.setIncludeTimestamp(false);
  Log.setCustomLogger(customerTestLogger);
  Log.setSortObjectKeys(true, false);

  //Test
  Log.log("{0}", "hi");
  Log.setPrettyJSON(true);

  expect(gotResult).toBe(testResult);
});
