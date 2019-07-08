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
