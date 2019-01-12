var removeVowels = require('./remove-vowels');

test('remove vowels from word', function () {

    // Arrange
    var word = 'samuel';
    var expected = 'sml';
    //var expected = '_a_ue_';
    // Act
    var output = removeVowels(word);
    // Assert
    expect(output).toEqual(expected);
});
test('Do not remove Y', function(){
    var word = 'y';
    var expected = 'y';
     output = removeVowels(word);
     expect(output).toEqual(expected);
});