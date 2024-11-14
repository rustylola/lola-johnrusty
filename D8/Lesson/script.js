// Arrow functions

// Transforming a function to an arrow function 
function square(num){
    return num * num;
}

console.log(square(3)); // output: 9

// Transformed to an Arrow Function
// Same as
// const squareArrow = (num) => num * num;
const squareArrow = (num) => {
    return num * num;
}

console.log(squareArrow(3)); // output: 9

const multiply = (a,b) => a*b;
console.log(multiply(5,7));   // output: 35

// Template Literals
const name = 'Alice';
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

/*
Destructuring - Extract values from arrays and objects

Destructuring allows you to quickly unpack values from arrays or
objects into separate variables, making it easier to work with
complex data stuctures.
*/

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first) // 1
console.log(second); // 2
console.log(rest); // [3,4,5]

const person = {name : 'bob' , ages: 30, country: 'usa'};
const {name: personName, ages,country} = person;
console.log(country);
console.log(ages);
console.log(personName);

/*
Spread and Rest Operators - Gather and Spread Values
The spread and rest operators (...) look the same but 
serve different purposes based on where they are used.
*/

const array1 = [1,2,3];
const array2 = [4,5,6];
const combinedArray = [...array1,...array2];
console.log(combinedArray); // [1,2,3,4,5,6]

// Default Parameters - Set Default values for function arguments
const calculatedArea = (length = 1, width = 1) =>{
    return length * width;
}
console.log(calculatedArea()); // 1 (default value used)
console.log(calculatedArea(3,4)) // 12
