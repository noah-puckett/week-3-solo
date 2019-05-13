function scoreQuest(userObj, questObj) {
    userObj.spoons += questObj.spoons;
    userObj.time += questObj.time;
    return userObj;
}
export default scoreQuest;