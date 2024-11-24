// Value Types
/*
 - Number
 - String
 - Boolean
 - Symbol
 - Undefined
*/ 

// Reference Types
/*
 - Object
 - Function
 - Array
*/

// Primitives are copied by their value
// Objects are copied by their reference
// let x = 10;
// let y = x;

// x = 20;

// output: y = 10

// let x = {value: 10};
// let y = x;

// x.value = 20;

// output: y = 20

// two independent copies
// Primitive sample
let number = 10;
function increase(number){
    number++;
}
increase(number);
console.log(number); // output: 10

// reference sample
let obj = {value:10};
function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj); // output: 11