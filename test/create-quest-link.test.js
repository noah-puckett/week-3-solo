const test = QUnit.test;
QUnit.module('create quest link test');

//function needs to TAKE a quest object (quest)
function createQuestLink(quest) {

    //create the dom element ANCHOR LINK and assign it to a variable
    const link = document.createElement('a');
    //add a CLASS (class='quest') to the ANCHOR LINK
    link.classList.add('quest');

    //link's HREF attribute appends and concats a string with our quest OBJECT's id...KEY?
    link.href = './quest.html?id=' + quest.id;

    //set the link's TEXT to the quest OBJECT'S... KEY? (title)?
    link.textContent = quest.title;

    return link;
}

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
    const dom = createQuestLink(quest);

    // assert
    assert.equal(dom.outerHTML, expected);
});