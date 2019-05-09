function createChoice(choice) {
    const label = document.createElement('label');
    label.textContent = choice.description;
    label.htmlFor = choice.id;
    const input = document.createElement('input');
    input.setAttribute('required', true);
    input.type = 'radio';
    input.name = choice.id;
    input.id = choice.id;
    input.value = choice.id;
    label.appendChild(input);
    return label;
}
export default createChoice;