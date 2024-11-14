
// Task 1: Use arrow functions to calculate the square of a given number and log the result to the console.
const square = (num) => {
    const result = num * num;
};
console.log(square(2));

// Task 2: Use template literals to create a welcome message that includes the name and age of a person.
const name = "John Doe";
const age = 25;
const welcomeMessage = `Hello ${name} and I am ${age} years old.`;

// Use destructuring to extract the first and last name from a person object and log them to the console.
const person = {
    firstName: 'Joe',
    lastName: 'Loe'
}
const {firstame,lastname} = person;
console.log("First Name: ",firstame);
console.log("Last Name: ", lastname);

// Use the spread operator to merge two arrays into a single array.
const array1 = ['Luffy','Zoro','Sanji'];
const array2 = ['Tsuki','Hinata','Kageyama'];
const combinedArray = [...array1,...array2];
console.log(combinedArray);

// Use default parameters to create a function that calculates the 
// area of a rectangle. If no arguments are provided, assume a default length and width of 1.
function rectangleArea(length = 1, height = 1){
    return length * height;
}
console.log(rectangleArea());