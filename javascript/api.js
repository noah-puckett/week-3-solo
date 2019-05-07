const api = {
    storage: localStorage,
    
    set(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
        
    },
    
    get() {
        const json = api.storage.getItem('user');
        // if(!json) {
        //     return null;
        // }
        const user = JSON.parse(json);
        return user;
    }
};
export default api;