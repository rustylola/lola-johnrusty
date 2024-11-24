// Abstraction

// Hide the details
// show the essentials
// function Circle(radius){
//     this.radius = radius;
    
//     this.defaultLocation = {x:0,y:0};
    
//     this.computeOptimumLocation = function(factor){

//     }

//     this.draw = function(){
//         this.computeOptimumLocation();
//         console.log('draw');
//     }
// }

// const circle = new Circle(10);
// circle.draw();
// instead of editing called function,
// using abstraction, you can manipulate only 
// line 15
// circle.computeOptimumLocation(); // instead of this

// hide the complexity to the public
// shows only or the properties 


// Apply abstraction

function Circle(radius){
    // Local variable inside this function
    let color = 'red';

    this.radius = radius;
    
    let defaultLocation = {x:0,y:0};
    
    // private method
    let computeOptimumLocation = function(factor){

    }

    this.draw = function(){
        // scope is temporary variable
        // let x,y;
        // private method can access inside like this
        // concept 'closure' meaning function inside a function
        // closure stays
        computeOptimumLocation();
        // defaultLocation
        // this.radius
        console.log('draw');
    }
}

const circle = new Circle(10);
circle.draw();