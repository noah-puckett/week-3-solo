//make an OBJECT that has GETTER AND SETTER METHODS 
const api = {
    storage: sessionStorage,
    
    set(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
        
    },

    get() {
        const json = api.storage.getItem('user');
        const user = JSON.parse(json);
        return user;
    }
};