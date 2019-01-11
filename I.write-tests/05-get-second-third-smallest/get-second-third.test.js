// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
var get2en3thLargest = require('./get-second-third');

test('get the second and the third largest number', function() {
    var input = [90, 5, 11, 8, 6];
    var expected = [6, 8];
    
     
    var output = get2en3thLargest(input);
    
    expect(output).toEqual(expected);
    expect(input).toEqual(input);

});