import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;
QUnit.module('create quest link test');

test('creates correct link html', (assert) => {
    // arrange
    const quest = {
        // properties used to make the link
        id: 'test1',
        title: 'test 1',
    };
    // use your static html example
    const expected = '<a class="quest" href="quest.html?choice=test1">test 1</a>';

    // act
    const dom = createQuestLink(quest);

    // assert
    assert.equal(dom.outerHTML, expected);
});