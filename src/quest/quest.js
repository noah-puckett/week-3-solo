import api from '../services/api.js';
import createChoice from '../map/create-choice.js';
import loadProfile from '../services/load-profile.js';

//the lab says just "call loadProfile()", dunno if I should save to var?
const user = api.get();
loadProfile(user);

//"reference all needed DOM nodes", they said. It will be intuitive, they implied.
const questTitle = document.getElementById('title');
const questDescription = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
//are these all of them??? do I need more? less??

//read the ID from query using URLSearchParams
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('quest');
//get individual quest using api method and passing id FROM url
const quest = api.getQuest(id);

//populate dom text with quest text
questTitle.textContent = quest.id;
questDescription.textContent = quest.description;

//loop quest choices, call createChoice for each one
//append returned DOM to TARGET PARENT dom node
for(let i = 0; i < quest.choices.length; i++) {
    const choice = quest.choices[i];
    const childEl = createChoice(choice);
    choiceForm.appendChild(childEl);
}

choiceForm.addEventListener('submit', (event) => {
    event.preventDefault();
   //do something with... formData? 
   // const formData = new FormData(choiceForm);
});