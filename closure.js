// "A closure is created when a function remembers and has access to variables from its outer scope, even after that outer function has finished executing.";

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log("Count:", count);
//   };
// }

// const counter = outer();
// counter(); // Count: 1
// counter(); // Count: 2

// Here, even though the outer() function has already finished, the inner() function still remembers the count variable. That’s a closure – a function 'closing over' its outer variables."

// function sum(a) {
//   return function (b) {
//     console.log(a + b);
//   };
// }

// var x = sum(2);
// x(5); // 3

// ----------------------------------------Memoization-----------------------------

// Memoization is an optimization technique where we cache the result of expensive function calls. So if the same input comes again, we return the cached result instead of recalculating. It helps improve performance, especially for functions with heavy computation or repeated inputs."**

// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     const key = args.join(','); // create a simple key from arguments
//     if (cache[key] !== undefined) {
//       console.log("From cache");
//       return cache[key];
//     } else {
//       console.log("Calculating...");
//       const result = fn(...args);
//       cache[key] = result;
//       return result;
//     }
//   };
// }

// function multiply(a, b) {
//   return a * b;
// }

// const memoizeMultiply = memoize(multiply);

// // Usage
// console.log(memoizeMultiply(3, 4)); // Calculating... → 12
// console.log(memoizeMultiply(3, 4)); // From cache → 12
// console.log(memoizeMultiply(5, 6)); // Calculating... → 30
// console.log(memoizeMultiply(5, 6)); // From cache → 30
