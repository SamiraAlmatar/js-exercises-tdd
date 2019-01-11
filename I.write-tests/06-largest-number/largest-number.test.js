// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
var largestNumber = require('./largest-number')

test('get the largest number i the array', function(){
    var input = [3, 21, 88, 4, 36];
    var expected = 88;

    var output = largestNumber(input);

    expect(expected).toEqual(expected);
    expect(input).toEqual(input);
});