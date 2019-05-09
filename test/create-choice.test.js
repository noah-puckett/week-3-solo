import quests from '../src/services/quest-data.js';
const test = QUnit.test;
QUnit.module('CH-CH-CHOICES');

//QUEST CHOICE OBJECT IN, DOM for choice OUT
const quest = quests[0];
const choice = quest.choices[0];
console.log(choice);

//function() {
    // for(let i = 0; i <  ) {

    // }
    // const choiceId = 

//
//}


test('creates correct link html', (assert) => {
    // arrange
    const quest = {
        // properties used to make the link
        id: 'test1',
        title: 'test 1',
    };
    // use your static html example
    const expected = '<a class="quest" href="./quest.html?id=test1">test 1</a>';

    // act
    // const dom = FUNCTION(quest);

    // assert
    assert.equal(dom.outerHTML, expected);
});