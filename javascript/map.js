import api from './api.js';

const name = document.getElementById('name');
const goal = document.getElementById('goal');
//TODO: load spoons and time without breaking the build

const user = api.get();
if(!user) {
    window.location = './';
}

//copy data from OBJECT (api, which is our SAVED and RETURNED form data) TO DOM properties
name.textContent = user.name;
goal.textContent = user.goal;
//TODO: add spoons and time without breaking the build
