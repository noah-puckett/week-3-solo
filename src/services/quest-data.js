//TODO: FINISH THIS, ADD MORE THINGS

const quest1 = {
    id: 'quest-1',
    title: 'test 1',
    description: `What if I drop out of code school and train to be a data entry specialist instead`
    ,

    choices: [{
        id: 'yes',
        description: 'follow your heart',
        result: `you do it. you drop out of ACL and join an easier school.`,
        spoons: 10,
        time: 10
    },

    {
        id: 'no',
        description: 'follow your wallet',
        result: `you stick it out, but man, was that the right choice?`,
        spoons: -100,
        time: -100

    }]
};

const quests = [quest1];

export default quests;