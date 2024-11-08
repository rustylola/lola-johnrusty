
let score = parseInt(prompt("Enter Your Score: "));
let grade;

if(score >= 90){
    grade = 'A';
}else if(score <= 89 && score >= 80){
    grade = 'B'
}else if(score <= 79 && score >= 70){
    grade = 'C'
}else if(score <= 69 && score >= 60){
    grade = 'D'
}else if(score < 60){
    grade = 'F'
}

console.log("Your grade is: ", grade);