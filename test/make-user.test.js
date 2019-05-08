import makeUser from '../src/home/make-user.js';
import api from '../src/services/api.js';

const test = QUnit.test;
QUnit.testStart(() => {
    sessionStorage.clear();
});
QUnit.module('make user');
api.storage = sessionStorage;

test('makeUser takes form data and returns correctly structured object', (assert) => {
    const formData = new FormData();
    formData.set('name', 'test');
    formData.set('disability', 'pain');

    const expected = {
        name: 'test',
        disability: 'pain',
        spoons: 5,
        time: 16
    };

    const result = makeUser(formData);
    assert.deepEqual(expected, result);
});