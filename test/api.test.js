import api from '../src/services/api.js';
import quests from '../src/services/quest-data.js';
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

//make a function where NO TAKE ONLY THROW?
function getQuests() {
    return quests;
}

test('getQuests, will it work?', (assert) => {
    //arrange
    const expected = [{
        id: 'quest-1',
        title: 'test 1',
        description: `What if I drop out of code school and train to be a data entry specialist instead`
        ,
    
        choices: [{
            id: 'yes',
            description: 'follow your heart',
            result: `you do it. you drop out of ACL and join an easier school.`,
            spoons: 10,
            time: 10
        },
    
        {
            id: 'no',
            description: 'follow your wallet',
            result: `you stick it out, but man, was that the right choice?`,
            spoons: -100,
            time: -100
    
        }]
    }];

    //act
    const result = getQuests();

    //assert
    assert.deepEqual(result, expected);
});