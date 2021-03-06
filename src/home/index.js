import makeUser from './make-user.js';
import api from '../services/api.js';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const user = makeUser(formData);
    api.set(user);

    window.location = '../../map.html';
}); 