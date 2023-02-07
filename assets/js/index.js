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
const startCalculate = (event) => {
    const element = event.target.innerHTML;
    switch (element.trim()) {
        case 'del':
            del()
            break;
        case 'reset':
            reset()
            break;
        case '+':
            operands.push(Number(screen.innerHTML));
            console.log(operands);
            operators.push('addition')
            console.log(operators);
            screen.innerHTML = ''
            break;
        case '-':
            operands.push(Number(screen.innerHTML));
            console.log(operands);
            operators.push('substruction')
            console.log(operators);
            screen.innerHTML = '';
            break;
        case '/':
            operands.push(Number(screen.innerHTML));
            console.log(operands);
            operators.push('division');
            console.log(operators);
            screen.innerHTML = '';
            break;
        case '*':
            operands.push(Number(screen.innerHTML));
            console.log(operands);
            operators.push('multiplication');
            console.log(operators);
            screen.innerHTML = '';
            break;
        case '=':
            operands.push(Number(screen.innerHTML));
            console.log(operands);
            console.log(operators);
            screen.innerHTML = ''
            break;
        default:
            if(screen.innerHTML.charAt(0) === '0'){
                screen.innerHTML = '';
            }
            screen.innerHTML += element;
    }
}

keyPad.addEventListener('click', startCalculate)