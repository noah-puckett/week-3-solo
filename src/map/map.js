import api from '../services/api.js';

const name = document.getElementById('name');
const goal = document.getElementById('goal');
//TODO: load spoons and time without breaking the build
const spoons = document.getElementById('spoons');
const time = document.getElementById('time');

const user = api.get();
if(!user) {
    window.location = './';
}

//copy data from OBJECT (api, which is our SAVED and RETURNED form data) TO DOM properties
name.textContent = user.name;
goal.textContent = user.goal;
//TODO: add spoons and time without breaking the build
spoons.textContent = user.spoons;
time.textContent = user.time;
