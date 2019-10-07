function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        disability: formData.get('disability'),
        spoons: 5,
        time: 16
    };
    return user;
}
export default makeUser;