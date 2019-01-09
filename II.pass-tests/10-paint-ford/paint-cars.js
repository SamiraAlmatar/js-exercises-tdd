function paintCars(cars, colour){
    //copy all the object in the cars array into the painted array
    var painted = cars.map(x => Object.assign({}, x));
    
    painted[0].colour = colour;
    
    return painted;
}

module.exports = paintCars;