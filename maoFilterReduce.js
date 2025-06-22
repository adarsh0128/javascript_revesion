// ------------------------------------Map()--------------------------------------------

// "Map is used when we want to transform each element of an array. It takes a callback function and returns a new array with the same length, where each element is the result of that function.

// const nums = [1, 2, 3, 4];

// const temp1 = nums.map((num) => {
//   return num * 3;
// });

// const temp2 = nums.map((num, i, nums) => {
//   return num * i;
// });

// console.log(temp1);
// console.log(temp2);

// ------------------------------------Filter()----------------------------------
// "Filter is used when we want to keep only certain elements from an array based on a condition. It also returns a new array, but only with the items that pass the test."
// const nums = [1, 2, 3, 4];

// const temp1 = nums.filter((num, i, nums) => {
//   return num % 2 == 0;
// });

// console.log(temp1);

// ----------------------------------------Reduce()---------------------------------------
// "Reduce is a bit more powerful – it takes all elements of an array and reduces them down to a single value. It's commonly used for things like summing up numbers or combining values."

// const nums = [1, 2, 3, 4];

// const sum = nums.reduce((accu, curr, i, nums) => {
//   return accu + curr;
// }, 0);

// console.log(sum);

//----------------------------------------polifill for map()--------------------

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// const nums = [1, 2, 3, 4];

// const ans = nums.myMap((num, i, arr) => {
//   return num * 3;
// });

// console.log(ans);

//-----------------------------polyfill for filter()------------------------------------------------

// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, nums)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// const nums = [1, 2, 3, 4];

// const ans = nums.myFilter((num, i, arr) => {
//   return num % 2 == 0;
// });

// console.log(ans);

//------------------------------------------polyFills() for reduce-------------------------

// Array.prototype.myReduce = function (cb, inV) {
//   var acc = inV;
//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(acc, this[i], i, nums) : this[i];
//   }
//   return acc;
// };

// const nums = [1, 2, 3, 4];

// const ans = nums.myReduce((acc, curr, i, nums) => {
//   return acc + curr;
// }, 0);

// console.log(ans);
