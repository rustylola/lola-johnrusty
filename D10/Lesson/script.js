/*
Encapsulation 
grouped a related variables and function in to an object.
*/

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary,overtime, rate){
    return baseSalary + (overtime * rate);
}

let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

console.log(employee.getWage());

// Object Literals
const circles = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    }
};

// Factory Function
function createdCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

const circleFunc = createdCircle(1);
console.log(circleFunc.constructor);
/* Output: ƒ Object() { [native code] }*/

// constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = new Circle(1);
console.log(Circle.constructor);
/* Output:
ƒ Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}e] }
*/
