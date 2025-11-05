const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('.clear');

let number1 = '';
let operator = '';
let number2 = '';

function updateDisplay() {
    const left = number1 || '0';
    const op = operator ? operator : '';
    const right = number2 ? number2 : '';
    display.innerHTML = left + op + right;
}

function reset() {
    number1 = '';
    operator = '';
    number2 = '';
    display.innerHTML = '0';
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const digit = button.dataset.number;
        if (operator === '') {
            number1 = number1 === '' || number1 === '0' ? digit : number1 + digit;
        } else {
            number2 = number2 === '' || number2 === '0' ? digit : number2 + digit;
        }
        updateDisplay();
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const op = button.dataset.operator;
        if (number1 === '') {
            return;
        }
        if (operator === '') {
            operator = op;
        } else if (number2 === '') {
            operator = op;
        } else {

        }
        updateDisplay();
    });
});

clearButton.addEventListener('click', () => {
    reset();
});