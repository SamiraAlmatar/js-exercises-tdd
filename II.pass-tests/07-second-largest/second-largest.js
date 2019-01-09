function secondLargest(numbers){
    var sorted = numbers.sort((a, b) => a - b);
    return sorted[sorted.length-2];
}


module.exports = secondLargest;