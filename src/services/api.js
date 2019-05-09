import quests from '../services/quest-data.js';

const api = {
    storage: localStorage,
    
    set(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
        
    },
    
    get() {
        const json = api.storage.getItem('user');
        if(!json) {
            return null;
        }
        const user = JSON.parse(json);
        return user;
    },

    getQuests() {
        return quests;
    },

    getQuest(id) {
        const quests = api.getQuests();
    
        for(let i = 0; i < quests.length; i++) {
            const quest = quests[i];
    
            if(id === quest.id) {
                return quest;
            }
        }
    }
};
export default api;