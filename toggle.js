const button = document.getElementById('hamburger');
const list = document.getElementById('list');

button.addEventListener('click', () => {
    list.classList.toggle('active')
})