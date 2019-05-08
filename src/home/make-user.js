function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        goal: formData.get('goal'),
        //TODO: figure out how to add the rest of the fields
        //without breaking the build/TDD
        // spoons: formData.set('spoons', '5'),
        // time: formData.set('time', '16')
    };

    return user;
}
export default makeUser;