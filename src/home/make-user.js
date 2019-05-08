function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        disability: formData.get('disability'),
        //TODO: figure out how to add the rest of the fields
        //without breaking the build/TDD
        spoons: 5,
        time: 16
    };

    return user;
}
export default makeUser;