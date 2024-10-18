let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function calculate() {
    try {
        let expression = display.value;
        
        // Handle exponentiation separately (xʸ)
        if (expression.includes('^')) {
            let parts = expression.split('^');
            display.value = Math.pow(parseFloat(parts[0]), parseFloat(parts[1]));
        } else if (expression.includes('%')) {
            // Handle modulus operation manually
            let parts = expression.split('%');
            display.value = parseFloat(parts[0]) % parseFloat(parts[1]);
        } else {
            display.value = eval(expression);
        }
    } catch (error) {
        display.value = 'Error';
    }
}
