# JavaScript Type Coercion Bug
This repository demonstrates a common JavaScript bug related to type coercion during arithmetic operations.  The `foo` function is expected to add two numbers, but due to JavaScript's loose typing, it performs string concatenation when one of the arguments is a string.

## Bug
The `bug.js` file contains the problematic code.  Running this code will produce the unexpected output of "11" instead of the expected numerical sum of 2.

## Solution
The `bugSolution.js` file provides a corrected version.  Explicit type conversion is used to ensure that both operands are numbers before the addition operation is performed.

This example highlights the importance of being mindful of JavaScript's type coercion behavior and using explicit type conversion when necessary to avoid unexpected results.