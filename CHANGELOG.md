# 1.1.4 / 2019-07-13

- JSON strings are not quoted.
- Functions are printed as [function]
- Print null variable, print undefined variables.
- Allow for sorting of JSON keys.
- Changed reference notation to @ref:/path/to/node/array/[index]
- Removed option to disable custom JSON printing function.
- Updated test to include more functionality.
- Updated documentation with new functionality.
- Added functionality to disable the printing of functions, null or undefined variables in JSON objects.
- Fixed bug where the comma wasn't printed on json pretty print.
- Added ability to replace \n and \r in string literals in JSON.
- Added option to add or remove key size in padding of JSON object.

# 1.0.17 / 2019-07-08

- Updated documentation and fixed change logs.
- Cleaned up Logger class and remove general functions outside class.

# 1.0.16 / 2019-07-08

- Use WeakMap for finding seen nodes for cyclic JSON printing.

# 1.0.15 / 2019-07-06

- Added setSplitLogCharSize(number) to write split the log at the specified character count.

# 1.0.14 / 2019-07-06

- Fixed manual cyclic checks so it doesn't alter the original object at the expense of iterating all seen object for reference checks.

# 1.0.13 / 2019-07-06

- Fixed documentation.

# 1.0.12 / 2019-07-06

- If cyclic read only fail correctly.

# 1.0.9 / 2019-07-06

- Print cyclic references with REFERENCE => root.path to reference in json tree.

# 1.0.7 / 2019-07-05

- Added try catch to JSON.stringify to catch cyclic checks. Just print out the object keys.
