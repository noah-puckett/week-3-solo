import api from '../src/services/api.js';
// import quests from '../src/services/quest-data.js';
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

test('getQuests, will it work?', (assert) => {
    //arrange
    const expected = [{
        id: 'shower',
        title: 'Take a Shower',
        description: `You wake up and you feel like, perhaps, it is time to bathe. Maybe the warm water will help you wake up?`,
    
        choices: [{
            id: 'shower',
            description: 'Get out of bed and head for the shower!',
            result: `TBD`,
            spoons: 10,
            time: 10
        },
    
        {
            id: 'sleep',
            description: 'Go Back To Sleep',
            result: `Showers can wait, sleep is the superior choice, you hope.`,
            spoons: 100,
            time: -4
    
        },
        
        {
            id: 'text',
            description: 'Text your network of loved ones "good morning!"',
            result: `Everyone texts you back right away, and tells you that they love you.`,
            spoons: 10,
            time: -2
        }]
    },
    
    
    {
        id: 'eat',
        title: 'Eat Breakfast',
        description: 'You wake up really hungry! You left some things in the fridge from last night...',
    
        choices: [{
            id: 'eat',
            description: 'Get out of bed and go make breakfast!',
            result: `You burn some of your breakfast, and even though you manage to get some food, you're tired again from all the effort.`,
            spoons: -2,
            time: -4
        },
    
        {
            id: 'wait',
            description: 'Maybe later?',
            result: `You decide that, honestly, it's not worth the effort right now. Later, maybe...`,
            spoons: 0,
            time: + 1
        },
        
        {
            id: 'investigate',
            description: 'Check for Secret Snacks near the bed',
            result: `SUCCESS! You rummage through the nightstand drawer and find half a protein bar, AND you remember to take your meds!`,
            spoons: + 2,
            time: + 1
        }]
    }
    
    ];


    //act
    const result = api.getQuests();

    //assert
    assert.deepEqual(result, expected);
});


test('getQuest(id) function', (assert) => {
    //function takes an ID and returns the quest with MATCHING ID
    //arrange

    const quests = api.getQuests();
    const expectedQuest = quests[1];


    //act
    const foundQuest = api.getQuest(expectedQuest.id);

    //assert
    assert.deepEqual(foundQuest, expectedQuest);
});