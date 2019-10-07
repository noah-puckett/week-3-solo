import createCompletedQuest from '../src/map/create-completed-quest.js';
const test = QUnit.test;
QUnit.module('create completed test');

test('basically makes quest link NOT a link???', (assert) => {
    // arrange
    const quest = {
        // properties used to make the link
        id: 'Completed Quest',
        title: 'test 1',
    };
    // use your static html example
    const expected = '<span class="completed">Completed Quest</span>';

    // act
    const dom = createCompletedQuest(quest);

    // assert
    assert.equal(dom.outerHTML, expected);
});