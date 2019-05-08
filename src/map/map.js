import api from '../services/api.js';
import loadProfile from '../services/load-profile.js';
import createQuestLink from './create-quest-link.js';

const user = api.get();

loadProfile(user);

if(!user) {
    window.location = './';
}

const quests = document.getElementById('quests');
const questArray = api.getQuests();

for(let i = 0; i < questArray.length; i++) {
    const quest = createQuestLink(questArray[i]);
    quests.appendChild(quest);
}








//TODO: figure out what on earth this is for again???
//const form = document.getElementById('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const formData = new FormData(form);
//     console.log(formData);
//     window.location = '../../map.html';
    
// }); 
