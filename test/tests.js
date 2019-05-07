import makeUser from '../javascript/make-user.js';
import api from '../javascript/api.js';
const test = QUnit.test;
QUnit.testStart(() => {
    sessionStorage.clear();
});
QUnit.module('make user');
api.storage = sessionStorage;

test('makeUser takes form data and returns correctly structured object', (assert) => {
    const formData = new FormData();
    formData.set('name', 'test');
    formData.set('goal', 'shower');

    const expected = {
        name: 'test',
        goal: 'shower'
    };

    const result = makeUser(formData);
    assert.deepEqual(expected, result);
});

test('api utility correctly roundtrips things I guess?', (assert) => {
    //arrange
    const expected = {
        name: 'test',
        goal: 'eat'
    };

    //act
    api.set(expected);
    const result = api.get();


    //assert
    assert.deepEqual(result, expected);

});