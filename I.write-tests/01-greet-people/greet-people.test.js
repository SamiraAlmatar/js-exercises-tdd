var greetPeople = require('./greet-people')
test('print list of names prefixed with Hello', function () {
    // Arrange
    var people = ['Samm', 'Majd', 'Waseem'];
    var expected = ['Hello Samm',
                    'Hello Majd',
                    'Hello Waseem'];
    //var expected = 'Hello SammMajdWaseem'
    // Act
    var output = greetPeople(people);
    // Assert
    expect(output).toEqual(expected);
});