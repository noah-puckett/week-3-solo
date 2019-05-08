import api from '../services/api.js';

const name = document.getElementById('name');
const disability = document.getElementById('disability');
//TODO: load spoons and time without breaking the build
const spoons = document.getElementById('spoons');
const time = document.getElementById('time');

const user = api.get();
if(!user) {
    window.location = './';
}

//copy data from OBJECT (api, which is our SAVED and RETURNED form data) TO DOM properties
name.textContent = user.name;
disability.textContent = user.disability;
//TODO: add spoons and time without breaking the build
spoons.textContent = user.spoons;
time.textContent = user.time;


// const form = document.getElementById('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const formData = new FormData(form);
//     console.log(formData);
//     window.location = '../../map.html';
    
// }); 
