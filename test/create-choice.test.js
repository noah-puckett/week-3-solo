import createChoice from '../src/map/create-choice.js';
const test = QUnit.test;
QUnit.module('CH-CH-CHOICES');

test('OBJECT IN, DOM ELEMENT OUT', (assert) => {
    // arrange
    const choice = {
        // properties used to make the link
        id: 'shower',
        description: 'Get out of bed and head for the shower!',
    };
    // use your static html example
    const expected = '<label for="shower">Get out of bed and head for the shower!<input required="true" type="radio" name="shower" id="shower" value="shower"></label>';

    //createfunction returns dom
    const dom = createChoice(choice);
    // dom.outerHTML
    // assert
    assert.equal(dom.outerHTML, expected);
});