// function declaration
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(2, 3));

// functional expression
// const ans = function (a, b) {
//   return a + b;
// };

// console.log(ans(2, 3));

// first class function
// "In JavaScript, functions are treated as first-class citizens. That means functions are just like any other value – like numbers, strings, or objects. We can store them in variables, pass them as arguments to other functions, and even return them from functions."

// function sq(a) {
//   return a * a;
// }

// function ans(fn) {
//   console.log(sq(5));
// }

// ans(sq);

//"Function scope means that variables declared inside a function are only accessible within that function. You can't access them from outside the function."

// var a = 1;

// function ans() {
//   var a = 3;
//   console.log(a);
// }
// ans(); //3

// var x = 1;

// const ans = function () {
//   console.log(x);
//   var x = 2;
// };
// ans(); //undefined

// function fn(a) {
//   //params
//   console.log(a);
// }

// fn(2); //arguments

// "Parameters are what you define; arguments are what you pass."
// Like a form: the blanks (parameters) are ready to be filled, and when we submit the form, we fill them with actual values (arguments).

// function add(...values) {
//   // rest operator
//   return values;
// }
// const values = [1, 2, 3];
// add(...values); // spread operator

// "The spread operator is used to expand or unpack elements from an array or object."

// "The rest operator is used to collect multiple values into a single array, usually in function parameters."

// "A callback function is just a function that we pass as an argument to another function, and it gets called back later – either immediately or after some task is done.";

// function greet(name, callback) {
//   console.log("Hi " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Bye!");
// }

// greet("Adarsh", sayBye);

// Normal and arro function

// "This is the biggest difference. Normal functions have their own this context, but arrow functions don’t – they inherit this from the surrounding scope.";

// "Normal functions have access to the arguments object (all arguments passed), arrow functions don’t.";
