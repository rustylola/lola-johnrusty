// Step 1: Declare a function named isEven that takes a number as a parameter and returns true if the number is even and false otherwise.
function isEven(num1){
    return ( num1 % 2 ? false : true);
}

// Step 2: Use a for loop to iterate from 0 to 10. Call the isEven function for each iteration and log the result to the console.
for (let i = 0; i <= 10; i++) {
    console.log(isEven(i));
}

// Step 3: Declare a function named multiply that takes two numbers as parameters and returns their product.
function multiply(num1,num2){
    return num1 * num2;
}

let num1 = 0;
let num2 = 0;
while(num1 >= 0 && num2 >= 0){
    num1 = parseInt(prompt('Enter First Number: '));
    num2 = parseInt(prompt('Enter Second Number: '));

    console.log("Product Result: ",multiply(num1,num2));
}

// Step 5: Declare a function named reverseString that takes a string as a parameter and returns the reversed version of the string.
function reverseString(strings){
    return strings.split('').reverse().join('');
}

// Step 6: Call the reverseString function with the string 'hello' and log the result to the console.
console.log(reverseString('hello'));

// Step 7: Declare a function named countVowels that takes a string as a parameter and returns the number of vowels in the string.
function countVowels (strings){
    let countVowel = 0;
    let getStrings = strings.split('');
    let vowels = 'aeiou'.split('');
    getStrings.forEach((letter) => {
        vowels.forEach((vowel) => {
            if(letter == vowel) countVowel++;
        });
    });
    return countVowel;
}

// Step 8: Call the countVowels function with the string 'JavaScript' and log the result to the console.
console.log(countVowels('JavaScript'));

// Step 9: Declare a function named findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMax(arraynum){
    let max = 0;
    arraynum.forEach((num) => {
        if(max < num) max = num;
    });
    return max;
}

// Step 10: Call the findMax function with the array [4, 9, 2, 7, 5] and log the result to the console.
console.log(findMax([4, 9, 2, 7, 5]));

// Step 11: Declare a function named calculateFactorial that takes a number as a parameter and returns its factorial value.
function calculateFactorial(num){
    let factorial = 0;
    for (num; num >= 0; num--) {
        factorial += num;
    }
    return factorial;
}

// Step 12: Call the calculateFactorial function with the number 5 and log the result to the console.
console.log(calculateFactorial(3));

// Step 13: Declare a function named isPalindrome that takes a string as a parameter and returns true if the string is a palindrome and false otherwise.
function isPalindrome(strings){
    let isReverse = strings.split('').reverse().join('');
    let notReverse = strings;
    return (isReverse == notReverse ? true : false);
}

// Step 14: Call the isPalindrome function with the string 'level' and log the result to the console.
console.log(isPalindrome('level'));

// Step 15: Declare a function named sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
function sumArray(arraynum){
    let totalsum = 0;
    arraynum.forEach((num) => {
        totalsum += num;
    });
    return totalsum;
}

// Step 16: Call the sumArray function with the array [1, 2, 3, 4, 5] and log the result to the console.
console.log(sumArray([1, 2, 3, 4, 5]));

// Step 17: Declare a function named capitalizeFirstLetter that takes a string as a parameter and returns the string with the first letter capitalized.
function capitalizeFirstLetter(strings){
    let split = strings.split('');
    split[0] = split[0].toUpperCase();
    return split.join('');
}

// Step 18: Call the capitalizeFirstLetter function with the string 'javascript' and log the result to the console.
console.log(capitalizeFirstLetter('javascript'));

// Step 19: Declare a function named filterEvenNumbers that takes an array of numbers as a parameter and returns a new array with only the even numbers.
function filterEvenNumbers(arraynum){
    let isEven;
    let evenNumbers = [];
    arraynum.forEach((num) => {
        isEven = (num % 2 ? false : true);
        if(isEven) evenNumbers.push(num);
    });
    return evenNumbers;
}

// Step 20: Call the filterEvenNumbers function with the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and log the result to the console.
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));