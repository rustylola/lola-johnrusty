
console.log('Welcome Player!');

let secretNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

let guessedNumber;

do{
    guessedNumber = parseInt(prompt('Guess the number 1 to 10: '));
     
    if(guessedNumber < secretNumber){
        console.log('Too low! Try again.');
    }else if(guessedNumber > secretNumber){
        console.log('Too High! Try again.');
    }else{
        console.log('Congratulation! You guessed the correct number: ', secretNumber);
    }
    attempts++;
}while(guessedNumber !== secretNumber)

console.log("It took you " + attempts + " Attempt/s");
