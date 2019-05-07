import makeUser from '../src/services/make-user.js';

const test = QUnit.test;
QUnit.module('make user');

test('makeUser takes form data and returns correctly structured object', (assert) => {
    //Arrange

    //create FAKE form data object to test AGAINST
    const formData = new FormData();
    //SET our test key/value pair
    formData.set('name', 'test');
    formData.set('goal', 'shower');

    const expected = {
        name: 'test',
        goal: 'shower'
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const result = makeUser(formData);
    //Assert
    assert.deepEqual(expected, result);
});