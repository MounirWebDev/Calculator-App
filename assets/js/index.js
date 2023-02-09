// start mathematique operations
const operands = [];
const operators = [];
const screen = document.querySelector('.screen');
const keyPad = document.querySelector('.keyPad');
const del = () => {
    if(operators[0] === 'equal'){
        reset();
    }
    else{
        let previousVal;
        previousVal = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
        screen.innerHTML = previousVal;
    }
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

// theme
const theme = {
    theme1 : {
        bodyBg: 'hsl(222, 26%, 31%)',
        keyPad_toggle_bg1: ' hsl(223, 31%, 20%)',
        screenBg : 'hsl(224, 36%, 15%)',
        keysBg1: 'hsl(225, 21%, 49%)',
        keyShadow1: '0 3px 2px  hsl(224, 28%, 35%)',
        keyPad_toggle_bg2: 'hsl(6, 63%, 50%)',
        keyPad_toggle_shadow: '0 3px 2px hsl(6, 70%, 34%)',
        keysBg2: 'hsl(30, 25%, 89%)',
        keyShadow2: '0 3px 2px hsl(28, 16%, 65%)',
        textClr1: 'hsl(221, 14%, 31%)',
        textClr2: 'hsl(0, 0%, 100%)'
    },
    theme2 : {
        bodyBg: 'hsl(0, 0%, 90%)',
        keyPad_toggle_bg1: 'hsl(0, 5%, 81%)',
        screenBg : 'hsl(0, 0%, 93%)',
        keysBg1: 'hsl(185, 42%, 37%)',
        keyShadow1: '0 3px 2px hsl(185, 58%, 25%)',
        keyPad_toggle_bg2: 'hsl(25, 98%, 40%)',
        keyPad_toggle_shadow: '0 3px 2px hsl(hsl(25, 99%, 27%)',
        keysBg2: 'hsl(45, 7%, 89%)',
        keyShadow2: '0 3px 2px hsl(35, 11%, 61%)',
        textClr1: 'hsl(60, 10%, 19%)',
        textClr2: 'hsl(0, 0%, 100%)'
    },
    theme3: {
        bodyBg: 'hsl(268, 75%, 9%)',
        keyPad_toggle_bg1: 'hsl(268, 71%, 12%)',
        screenBg : 'hsl(268, 71%, 12%)',
        keysBg1: 'hsl(281, 89%, 26%)',
        keyShadow1: '0 3px 2px hsl(285, 91%, 52%)',
        keyPad_toggle_bg2: 'hsl(176, 100%, 44%)',
        keyPad_toggle_shadow: '0 3px 2px hsl(177, 92%, 70%)',
        keysBg2: 'hsl(268, 47%, 21%)',
        keyShadow2: '0 3px 2px hsl(290, 70%, 36%)',
        textClr1: ' hsl(52, 100%, 62%)',
        textClr2: ' hsl(198, 20%, 13%)',
        textClr3: ' hsl(0, 0%, 100%)'
    }
}

const firstTheme = document.querySelector('.firstTheme')
const secondTheme = document.querySelector('.secondTheme')
const thirdTheme = document.querySelector('.thirdTheme')

const pickTheme = (event)=>{
    const body = document.body;
    const header = document.querySelector('header');
    const pickModeContainer = document.querySelector('.pickMode');
    const circleToggle = document.querySelector('.circle');
    const key = document.querySelectorAll('.key');
    const del = document.querySelector('.del');
    const reset = document.querySelector('.reset');
    const quality = document.querySelector('.quality');
    const elementContent = event.target.innerHTML;
    switch(elementContent){
        case '1':
            body.style.backgroundColor = theme.theme1.bodyBg;
            header.style.color = theme.theme1.textClr2;
            pickModeContainer.style.backgroundColor = theme.theme1.keyPad_toggle_bg1;
            circleToggle.style.backgroundColor = theme.theme1.keyPad_toggle_bg2;
            circleToggle.style.left = "3px";
            screen.style.backgroundColor = theme.theme1.screenBg;
            screen.style.color = theme.theme1.textClr2;
            keyPad.style.backgroundColor = theme.theme1.keyPad_toggle_bg1;
            for (const x of key) {
                x.style.backgroundColor = theme.theme1.keysBg2;
                x.style.boxShadow = theme.theme1.keyShadow2;
                x.style.color = theme.theme1.textClr1;
            }
            del.style.backgroundColor = theme.theme1.keysBg1;
            del.style.boxShadow = theme.theme1.keyShadow1;
            del.style.color = theme.theme1.textClr2;
            reset.style.backgroundColor = theme.theme1.keysBg1;
            reset.style.boxShadow = theme.theme1.keyShadow1;
            quality.style.backgroundColor = theme.theme1.keyPad_toggle_bg2;
            quality.style.boxShadow = theme.theme1.keyPad_toggle_shadow;
        break;
        case '2':
            body.style.backgroundColor = theme.theme2.bodyBg;
            header.style.color = theme.theme2.textClr1;
            pickModeContainer.style.backgroundColor = theme.theme2.keyPad_toggle_bg1;
            circleToggle.style.backgroundColor = theme.theme2.keyPad_toggle_bg2;
            circleToggle.style.left = "22px";
            screen.style.backgroundColor = theme.theme2.screenBg;
            screen.style.color = theme.theme2.textClr1;
            keyPad.style.backgroundColor = theme.theme2.keyPad_toggle_bg1;
            for (const x of key) {
                x.style.backgroundColor = theme.theme2.keysBg2;
                x.style.boxShadow = theme.theme2.keyShadow2;
                x.style.color = theme.theme2.textClr1;
            }
            del.style.backgroundColor = theme.theme2.keysBg1;
            del.style.boxShadow = theme.theme2.keyShadow1;
            del.style.color = theme.theme2.textClr2;
            reset.style.backgroundColor = theme.theme2.keysBg1;
            reset.style.boxShadow = theme.theme2.keyShadow1;
            quality.style.backgroundColor = theme.theme2.keyPad_toggle_bg2;
            quality.style.boxShadow = theme.theme2.keyPad_toggle_shadow;
        break;
        case '3':
            body.style.backgroundColor = theme.theme3.bodyBg;
            header.style.color = theme.theme3.textClr1;
            pickModeContainer.style.backgroundColor = theme.theme3.keyPad_toggle_bg1;
            circleToggle.style.backgroundColor = theme.theme3.keyPad_toggle_bg2;
            circleToggle.style.left = "40px";
            screen.style.backgroundColor = theme.theme3.screenBg;
            screen.style.color = theme.theme3.textClr1;
            keyPad.style.backgroundColor = theme.theme3.keyPad_toggle_bg1;
            for (const x of key) {
                x.style.backgroundColor = theme.theme3.keysBg2;
                x.style.boxShadow = theme.theme3.keyShadow2;
                x.style.color = theme.theme3.textClr1;
            }
            del.style.backgroundColor = theme.theme3.keysBg1;
            del.style.boxShadow = theme.theme3.keyShadow1;
            del.style.color = theme.theme3.textClr3;
            reset.style.backgroundColor = theme.theme3.keysBg1;
            reset.style.boxShadow = theme.theme3.keyShadow1;
            quality.style.backgroundColor = theme.theme3.keyPad_toggle_bg2;
            quality.style.boxShadow = theme.theme3.keyPad_toggle_shadow;
        break;
    }
}

// calculate event
keyPad.addEventListener('click', CalculatorRules);

// theme event
firstTheme.addEventListener('click', pickTheme);
secondTheme.addEventListener('click', pickTheme);
thirdTheme.addEventListener('click', pickTheme);