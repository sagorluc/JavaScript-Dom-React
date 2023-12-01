
let number = 0;
let increButton = document.querySelector('#button');
let display = document.querySelector('#display')

increButton.addEventListener('click', () => {
    number--;
    display.textContent = number;
})