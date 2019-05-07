function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        goal: formData.get('goal'),

    };
    return user;
}

export default makeUser;