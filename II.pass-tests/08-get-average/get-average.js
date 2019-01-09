// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(array){
    var numArray = array.filter(x => Number.isInteger(x));
    var total =0 ;
    numArray.forEach(x => total += x);
    return total / numArray.length;
}

module.exports = average;