//function goal: OBJECT comes IN, SPAN ELEMENT goes OUT
function createCompletedQuest(quest) {
    //create a PARENT element for SECRET REASONS LATER?
    const span = document.createElement('span');
    //GIVE IT A CLASS of COMPLETED for SECRET REASONS LATER?
    span.classList.add('completed');
    //set the TEXT between the SPAN TAGS to our QUEST OBJECT'S... KEY (id)?
    span.textContent = quest.id;

    return span;
}
export default createCompletedQuest;