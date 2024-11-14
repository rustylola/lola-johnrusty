
// Calculate the square root of given number
let number = 4;
const powerResult = Math.pow(number,2);
console.log(powerResult);

// Generate a random number between 1 and 10.
const random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(random);

// Convert a string representation of a number to an actual number.
const stringNumber = '6';
console.log(parseInt(stringNumber));

// Check if a value is not a number.
const isNumber = typeof stringNumber;
console.log((isNumber !== 'number'));

// Convert a number to a string.
const convertString = random.toString();
console.log(convertString);