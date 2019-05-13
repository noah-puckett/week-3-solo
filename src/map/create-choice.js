function createChoice(choice) {
    const label = document.createElement('label');
    label.textContent = choice.description;
    label.htmlFor = choice.id;
    const input = document.createElement('input');
    input.required = true;
    input.type = 'radio';
    input.name = 'choice';
    input.id = choice.id;
    input.value = choice.id;
    label.appendChild(input);
    return label;
}
export default createChoice;