function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        goal: formData.get('goal'),
        spoons: 5,
        time: 16
    };
    return user;
}

export default makeUser;