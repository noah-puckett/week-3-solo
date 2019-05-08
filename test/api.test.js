import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');
test('api utility correctly roundtrips things I guess?', (assert) => {
    //arrange
    const expected = {
        name: 'test',
        disability: 'pain'
    };

    //act
    api.set(expected);
    const result = api.get();

    //assert
    assert.deepEqual(result, expected);
});