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