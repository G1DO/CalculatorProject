let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        expression = value;
    } else {
        expression += value;
    }
    display.innerText = expression;
}

function clearDisplay() {
    expression = '';
    display.innerText = '0';
}

function calculate() {
    try {
        const result = eval(expression);
        if (isNaN(result) || !isFinite(result)) {
            display.innerText = 'Error';
            expression = '';
        } else {
            display.innerText = result;
            expression = result.toString();
        }
    } catch (error) {
        display.innerText = 'Error';
        expression = '';
    }
}