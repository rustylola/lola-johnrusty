function Circle(radius){
    this.radius = radius;
    
    // private property
    let defaultLocation = {x:0,y:0};
    this.getDefaultLocation = function(){
        return defaultLocation;
    }

      // private method
    let computeOptimumLocation = function(factor){

    }

    this.draw = function(){
        computeOptimumLocation();
        console.log('draw');
    }

    Object.defineProperty(this,'defaultLocation',{
        get: function () {
            return defaultLocation;
        },
        set: function(value){
            // you can add validation before set new value
            if (!value.x || !value.y)
                throw new Error('Invalid Location');

            defaultLocation = value;
        }
    });

}

const circle = new Circle(10);
// return defaultLocation by using this.getLocation
// by defining this function
// circle.getDefaultLocation();

// return defaultLocation by using object.defineproperty
// by defining get function 'read only'
// by defining set function 'set new value'
// circle.defaultLocation;
// circle.defaultLocation = 1;

circle.draw();