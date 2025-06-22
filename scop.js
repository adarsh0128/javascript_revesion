// "Scope in JavaScript refers to the area in which a variable is accessible. It basically determines where we can use a variable or function in our code."

// Global scope
// "If we declare a variable outside of any function or block, it’s in the global scope – it can be accessed from anywhere in the code."

// let name = "Adarsh";
// function greet() {
//   console.log(name); // ✅ Accessible
// }

// Functional scope
// "Variables declared inside a function are only available within that function. This is called function scope."
// function sayHi() {
//   let message = "Hi!";
//   console.log(message); // ✅ Works here
// }
// console.log(message); // ❌ Error: message is not defined

//Block scope
// "Variables declared with let or const inside a block {} are only available inside that block. This is called block scope."
// if (true) {
//   let age = 25;
//   console.log(age); // ✅ Accessible here
// }
// console.log(age); // ❌ Error: age is not defined

// var->left worked
// let->val X

// var can be redecleared in same scope but let and const cannot

//-------------------------------------------------Hoisting------------------------

// "Hoisting in JavaScript means that variable and function declarations are moved to the top of their scope before the code is executed. So you can actually use them before they’re declared – but there are some important differences depending on whether you use var, let, const, or a function

// "Variables declared with var are hoisted, but only the declaration – not the value. So if you try to access the variable before assigning a value, you get undefined."

//let and cost
// "These are also hoisted, but they’re in a 'temporal dead zone' – meaning you can’t use them before the line they are declared. If you do, you get a ReferenceError."

// "Function declarations are fully hoisted – you can call the function even before it appears in the code."

// "If you assign a function to a variable, only the variable is hoisted – not the function. So calling it before it's defined causes an error."

// "The Temporal Dead Zone is the time between when a variable is hoisted and when it's actually declared in the code.

// "To remember hoisting behavior, I use a simple rule:

// Function declarations? Fully hoisted – safe to call early.

// Var? Partially hoisted – undefined if accessed early.

// Let and const? Hoisted too – but trapped in the Temporal Dead Zone, so accessing them early throws an error."

// -----------------------------------diff of let , var ,const-----------------

// var (Old way):
// Function scoped – it's only visible inside the function where it’s declared.
// Hoisted – you can access it before declaration, but it’ll be undefined.
// Can be redeclared and reassigned.

// let (Modern way):
// Block scoped – only accessible inside the {} block it's declared in.
// Hoisted, but in temporal dead zone – can’t use it before declaration.
// Can be reassigned, but not redeclared in the same scope.

// const (Constant):
// Same as let in terms of block scope and TDZ.
// Cannot be reassigned or redeclared.
// Useful for constants and things that should never change.
