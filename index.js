let calcBtn = document.getElementById('calc-btn');
let resulted = document.getElementById('result');

calcBtn.addEventListener('click', function() {
    let firstValue = parseInt(document.getElementById('first-value').value);
    let secondValue = parseInt(document.getElementById('second-value').value);
    let operator = document.getElementById('select-operator').value;

    if (secondValue === 0 && operator ==='/') {
        return resulted.innerHTML = 'Impossible to divide by 0'
    };

    switch (operator) {
        case '+':
            resulted.innerHTML = firstValue + secondValue;
            break;
        case '-':
            resulted.innerHTML = firstValue - secondValue;
            break;
        case 'x':
            resulted.innerHTML = firstValue * secondValue;
            break;
        case '/':
            resulted.innerHTML = firstValue / secondValue;
            break;
        default:
            console.log('invalid operator');
    };
});