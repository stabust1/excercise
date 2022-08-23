const result = document.querySelector('#result');
const inputField = document.querySelector('#inputField');
const submit = document.querySelector('#submit');

submit.addEventListener('click' , () => {
    result.innerText = inputField.value
});
