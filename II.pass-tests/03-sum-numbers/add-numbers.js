function addNumbers(numbers) {
 var sum = 0;
 numbers.forEach(x => sum += x);
 return sum;
}
module.exports = addNumbers;