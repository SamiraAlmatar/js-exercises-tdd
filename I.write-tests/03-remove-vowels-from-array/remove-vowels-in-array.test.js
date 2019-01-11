var removeVowelsForWords = require('./remove-vowels-in-array');
test('remove vowels from all words in array', function () {
    // Arrange
    var input = ["Irina", "Etza", "Daniel"]
    var expected = ["rn", "tz", "dnl"]
    // Act
    var output = removeVowelsForWords(input);
    // Assert
    expect(output).toEqual(expected);
})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]