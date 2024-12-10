function foo(a,b){return a+b;}console.log(foo(1, "1")); // Output: 11
This is because JavaScript does string concatenation instead of numerical addition when one of the operands is a string.