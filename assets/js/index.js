// start mathematique operations
const operands = [];
const operators = [];
const screen = document.querySelector('.screen');
const keyPad = document.querySelector('.keyPad');
const del = () => {
    screen.innerHTML = '0'
}
const reset = () => {
    screen.innerHTML = '0'
    operands.splice(0, operands.length);
    console.log(operands);
    operators.splice(0, operators.length)
    console.log(operators);
}
const startCalculate = () => {
    if (operands.length === 2) {
        let result;
        const [firstNum, secondNum] = operands;
        const [operator] = operators;
        switch (operator) {
            case 'addition':
                result = firstNum + secondNum;
                operands.splice(0, operands.length);
                operators.shift();
                operands.unshift(result);
                console.log(operands);
                console.log(operators);
                screen.innerHTML = operands[0];
                screen.innerHTML = '';
                break;
            case 'substruction':
                result = firstNum - secondNum;
                operands.splice(0, operands.length);
                operators.shift();
                operands.unshift(result);
                console.log(operands);
                console.log(operators);
                screen.innerHTML = operands[0];
                screen.innerHTML = '';
                break;
            case 'multiplication':
                result = firstNum * secondNum;
                operands.splice(0, operands.length);
                operators.shift();
                operands.unshift(result);
                console.log(operands);
                console.log(operators);
                screen.innerHTML = operands[0];
                screen.innerHTML = '';
                break;
            case 'division':
                result = firstNum / secondNum;
                operands.splice(0, operands.length);
                operators.shift();
                operands.unshift(result);
                console.log(operands);
                console.log(operators);
                screen.innerHTML = operands[0];
                screen.innerHTML = '';
                break;
        }
    }
}
const CalculatorRules = (event) => {
    const element = event.target.innerHTML;
    switch (element.trim()) {
        case 'del':
            del()
            break;
        case 'reset':
            reset()
            break;
        case '+':
            if (operators[0] === 'equal') {
                screen.innerHTML = '';
                operators.pop();
                operators.push('addition');
            }
            else {
                operands.push(Number(screen.innerHTML));
                console.log(operands);
                operators.push('addition')
                console.log(operators);
                screen.innerHTML = ''
                startCalculate();
            }
            break;
        case '-':
            if (operators[0] === 'equal') {
                screen.innerHTML = '';
                operators.pop();
                operators.push('substruction');
            }
            else {
                operands.push(Number(screen.innerHTML));
                console.log(operands);
                operators.push('substruction')
                console.log(operators);
                screen.innerHTML = '';
                startCalculate();
            }
            break;
        case '/':
            if (operators[0] === 'equal') {
                screen.innerHTML = '';
                operators.pop();
                operators.push('division');
            }
            else {
                operands.push(Number(screen.innerHTML));
                console.log(operands);
                operators.push('division');
                console.log(operators);
                screen.innerHTML = '';
                startCalculate();
            }
            break;
        case '*':
            if (operators[0] === 'equal') {
                screen.innerHTML = '';
                operators.pop();
                operators.push('multiplication');
            }
            else {
                operands.push(Number(screen.innerHTML));
                console.log(operands);
                operators.push('multiplication');
                console.log(operators);
                screen.innerHTML = '';
                startCalculate();
            }
            break;
        case '=':
            operands.push(Number(screen.innerHTML));
            operators.push('equal');
            if (operands.length === 2) {
                console.log(operands);
                let result;
                const [firstNum, secondNum] = operands;
                const [operator] = operators;
                switch (operator) {
                    case 'addition':
                        result = firstNum + secondNum;
                        operands.splice(0, operands.length);
                        operators.shift();
                        operands.unshift(result);
                        console.log(operands);
                        console.log(operators);
                        screen.innerHTML = operands[0];
                        break;
                    case 'substruction':
                        result = firstNum - secondNum;
                        operands.splice(0, operands.length);
                        operators.shift();
                        operands.unshift(result);
                        console.log(operands);
                        console.log(operators);
                        screen.innerHTML = operands[0];
                        break;
                    case 'multiplication':
                        result = firstNum * secondNum;
                        operands.splice(0, operands.length);
                        operators.shift();
                        operands.unshift(result);
                        console.log(operands);
                        console.log(operators);
                        screen.innerHTML = operands[0];
                        break;
                    case 'division':
                        result = firstNum / secondNum;
                        operands.splice(0, operands.length);
                        operators.shift();
                        operands.unshift(result);
                        console.log(operands);
                        console.log(operators);
                        screen.innerHTML = operands[0];
                        break;
                }
            }

            break;
        default:
            if (screen.innerHTML.charAt(0) === '0') {
                screen.innerHTML = '';
            }
            if (operators[0] === 'equal') {
                screen.innerHTML = '';
                operators.pop();
                operands.pop();
            }
            screen.innerHTML += element;
    }
}

keyPad.addEventListener('click', CalculatorRules)