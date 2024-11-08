// Variables

// let name = "John";
// name = 'Paul';

const temp = 100;

// outputting variables
// console.log(name);
// console.log(temp);

// Basic syntax
// let x = 5;
// let y = 10;
// let sum = x + y;
// console.log(sum);

// Primitive types: these are the most basic 
// data types in javascript:

// Number
// String
// Boolean

// Primitive data types
let name = "John"; //string
let age = 25; // number
let isStudent = true; // boolean
let car = null; // null
let city; // undefined

// output data types
console.log("Type of name: ", typeof name);
console.log("Type of age: ", typeof age);
console.log("type of isStudent: ", typeof isStudent);
console.log("Type of car: ", typeof car);
console.log("Type of city: ", typeof city);

// Operation and expression
// Arithmetic

let x = 5;
let y = 2;

let sum = x + y;
console.log("Sum: ",sum);

let diff = x - y;
console.log("Diff: ",diff);

let product = x * y;
console.log("Product: ",product);

let quotient = x / y;
console.log("Quotient: ",quotient);

let reminder = x % y;
console.log("Reminder: ",reminder);

// Assignment operator
let a = 10;
let b = 5;

a += b;
console.log("a: ", a);

a -= b;
console.log("a: ", a);

a *= b;
console.log("a: ", a);

a /= b;
console.log("a: ", a);

// Comparison
let p = 3;
let q = 6;

console.log("p > q: ", p > q);
console.log("p < q: ", p < q);
console.log("p >= q: ", p >= q);
console.log("p <= q: ", p <= q);
console.log("p === q: ", p === q);
console.log("p == q: ", p == q);
console.log("p !== q: ", p !== q);

// Logical
let sunny = true;
let warm = false;

console.log("True and False", sunny && warm);
console.log("True and True", sunny && sunny);
console.log("True or False", sunny || warm);
console.log("!True", !sunny);
