// let x = {};
// new String(); // '',"", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ....

// function objects
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
`);

const circle = new Circle1(1);
const another = new Circle1(1);

// Object built-in methods alternatives
Circle.call({},1);
Circle.apply({},1);

// in javascript, function are also an objects