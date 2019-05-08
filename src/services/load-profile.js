import api from './api.js';


//create function around this???
function loadProfile(user) {
    user = api.get();
    const name = document.getElementById('name');
    const disability = document.getElementById('disability');
    const spoons = document.getElementById('spoons');
    const time = document.getElementById('time');
    
    name.textContent = user.name;
    disability.textContent = user.disability;
    spoons.textContent = user.spoons;
    time.textContent = user.time;
}
export default loadProfile;