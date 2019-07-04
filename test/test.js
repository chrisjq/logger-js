"use strict";

import { Log } from "../index.js";

test("Check basic log", () => {
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

  //Test1
  Log.log("This is some test JSON {0}", testJSON);

  expect(gotResult).toBe(testResult);
});
