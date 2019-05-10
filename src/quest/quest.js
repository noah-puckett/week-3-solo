import api from '../services/api.js';
import createChoice from '../map/create-choice.js';
import loadProfile from '../services/load-profile.js';

//the lab says just "call loadProfile()", dunno if I should save to var?
const user = api.get();
loadProfile(user);

//"reference all needed DOM nodes", they said. It will be intuitive, they implied.

//I don't know if I need to get the header/profile section since... I already called loadProfile???
const questTitle = document.getElementById('title');
const questDescription = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const resultSection = document.getElementById('result');
const resultText = document.getElementById('result-description');
//TODO: label id???
//are these all of them??? do I need more? less??

//read the ID from query using URLSearchParams
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');

const quest = api.getQuest(id);

questTitle.textContent = quest.id;
questDescription.textContent = quest.description;

//loop quest choices, call createChoice for each one
//append returned DOM to TARGET PARENT dom node
for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const childEl = createChoice(choice);
    choiceForm.appendChild(childEl);

}


//probably add event listener?
const submitButton = document.getElementById('submit-choice');