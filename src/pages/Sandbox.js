

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: null,
    operator: null,
};

function inputDigit(input)
{
    const {displayValue} = calculator;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
};

loadCall = function() {
    
    updateDisplay();

    const keys = document.querySelector('.calculator-keys');

    keys.addEventListener('click', (event) => {
        const { target } = event;

        if (!target.matches('button')) 
        {
            return;
        }
        if (target.classList.contains('all-clear')) 
        {
            console.log('all-clear', target.value);
        }
        if (target.classList.contains('decimal')) 
        {
            console.log('decimal', target.value);
        }
        if (target.classList.contains('operator')) 
        {
            console.log('operator', target.value);
        }

        console.log('digit', target.value);

        inputDigit(target.value);
        updateDisplay();
    });
}
const loadMyScript = () => window.addEventListener('load', () => loadCall());
export default loadMyScript;