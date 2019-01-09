function sales(cars){
    var total = {};
    cars.forEach(car =>{
        if(total[car.make]){
            total[car.make] += car.price;
        } else{
            total[car.make] = car.price;
        }
    });

    return total
}

module.exports = sales;