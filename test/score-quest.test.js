import scoreQuest from '../src/services/score-quest.js';

const test = QUnit.test;
QUnit.module('Score User');

test('TEST 1: score quest TAKES USER OBJECT and CHOICE OBJECT and APPLIES CHANGES to the USER', (assert) => {
    //arrange
    const userObj = {
        spoons: 5,
        time: 16
    };
    
    const questObj = {
        spoons: - 2,
        time: + 1
    };
    
    const expected = {
        spoons: 3,
        time: 17
    };
    
    //act
    const result = scoreQuest(userObj, questObj);
    //assert
    assert.deepEqual(expected, result);
});

test('TEST 2: score quest DOES work with negative numbers', (assert) => {
    //arrange
    const userObj = {
        spoons: - 1,
        time: - 1,
    };
     
    const questObj = {
        spoons: - 1,
        time: - 1,
    };
    
    const expected = {
        spoons: - 2,
        time: - 2,
    };

    //act
    const result = scoreQuest(userObj, questObj);
    //assert
    assert.deepEqual(expected, result);
});