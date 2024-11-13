/*
    loanAmount
    interest
    term
*/

let button = document.getElementById('form');

button.addEventListener('submit', result);

function result(event){
    event.preventDefault();
    let loanAmount = document.getElementById('loanAmount').value;
    let interest = document.getElementById('interest').value;
    let term = document.getElementById('term').value;
    let result = document.getElementById('result');
    
    const monthlyInterestRate = interest / 100 / 12;
    const numberOfPayments = term * 12;

    // Calculate the monthly payment using the formula
    let monthlyPayment;
    if (monthlyInterestRate === 0) {
        monthlyPayment = loanAmount / numberOfPayments;
    } else {
        monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    }
    result.innerHTML = 'Monthly Payment: ' + monthlyPayment.toFixed(2).toString();
}

