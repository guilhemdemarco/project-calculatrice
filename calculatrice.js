const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

let number1 = '';
let operator = '';
let number2 = '';
let can_modify = true

function updateDisplay() {
    const left = number1 || '0';
    const op = operator ? operator : '';
    const right = number2 ? number2 : '';
    display.innerHTML = left + op + right;
}

function calculate(){
    if (operator === "" || number2 === "") return
    switch (operator) {
        case "+":
            number1 = Number(number1) + Number(number2)
            break
        case "-":
            number1 = Number(number1) - Number(number2)
            break
        case "*":
            number1 = Number(number1) * Number(number2)
            break
        case "/":
            if(number2 === "0")
                return null
            number1 = Number(number1) / Number(number2)
            break
            
    }
    operator = ""
    number2 = ""
    can_modify = false
    updateDisplay()
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
        addDigit(digit)
    });
});

function addDigit(digit){
    if(!can_modify) return
    if (operator === '') {
        number1 = number1 === '' || number1 === '0' ? digit : number1 + digit;
    } else {
        number2 = number2 === '' || number2 === '0' ? digit : number2 + digit;
    }
    updateDisplay();
}

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const op = button.dataset.operator;
        addOperator(op)
    });
});

function addOperator(op){
    console.log(op)
    can_modify = true
    if (number1 === '') {
        return;
    }
    operator = op
    
    updateDisplay();
}

clearButton.addEventListener('click', () => {
    reset();
});

equalsButton.addEventListener('click', () => {
    calculate()
})

window.addEventListener('keydown', (event) => {
    const key = event.key;
    console.log(key)
  
    if ('0123456789'.includes(key)) {
      addDigit(key)
    } else if ('+-*/'.includes(key)) {
      addOperator(key) 
    } else if (key === 'Enter') {
      calculate()
    } else if (key === 'Escape') {
      reset()
    }
  });
  