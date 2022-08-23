const showBtn = document.querySelector('#show');
const hideBtn = document.querySelector('#hide');
const p = document.querySelector('p');
showBtn.addEventListener('click', () => {
p.style.display = 'block'
});
hideBtn.addEventListener('click', () => {
p.style.display = 'none'
});