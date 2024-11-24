
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);
// Add certain properties
// circle.location = {x:1};

// const propertyName = 'location';
// circle[propertyName] = {x:1};

// Delete certain object properties
// delete circle.location;


// Enumeration
// return by key
for(let key in circle){
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

// return keys in array
const keys = Object.keys(circle);
console.log(keys);


if('radius' in circle)
    console.log('Circle has a radius');

