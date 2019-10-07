//function needs to TAKE a quest object (quest)
function createQuestLink(quest) {

    //create the dom element ANCHOR LINK and assign it to a variable
    const link = document.createElement('a');
    //add a CLASS (class='quest') to the ANCHOR LINK
    link.classList.add('quest');

    const searchParams = new URLSearchParams();
    searchParams.set('quest', quest.id);
    //link's HREF attribute appends and concats a string with our quest OBJECT's id...KEY?
    link.href = 'quest.html?' + searchParams.toString();

    //set the link's TEXT to the quest OBJECT'S... KEY? (title)?
    link.textContent = quest.title;

    return link;
}
export default createQuestLink;