const key = document.querySelectorAll('.key')
const screen = document.querySelector('.screen')
const calculate = {
    operands: {
        firstOpd: null,
        secondOpd: null
    },
    operators: {
        firstOpt: null,
        secondOpt: null
    },
    startCalculate: {
        result: function () {

        }
    }
}
let { firstOpd, secondOpd } = calculate.operands
let { firstOpt, secondOpt } = calculate.operators
// c variable for counting how many times we pressed equal
let c = 0;
const displayResult = () => {
    if (secondOpd && c === 0) {
        firstOpd = secondOpd
        c++;
    }
    firstOpd === null ? firstOpd = screen.textContent : secondOpd = screen.textContent
    switch (firstOpt) {
        case 'plus':
            screen.innerHTML = Number(firstOpd) + Number(secondOpd)
            break;
        case 'minus':
            screen.innerHTML = Number(firstOpd) - Number(secondOpd)
            break;
        case 'times':
            screen.innerHTML = Number(firstOpd) * Number(secondOpd)
            break;
        case 'divide':
            screen.innerHTML = Number(firstOpd) / Number(secondOpd)
            break;
    }
    console.log(firstOpd);
    console.log(firstOpt);
    console.log(secondOpd);
    console.log(secondOpt);
}
const handleMath = (btnContent) => {
    firstOpd === null ? firstOpd = screen.textContent : secondOpd = screen.textContent
    screen.innerHTML = ''
    switch (btnContent) {
        case '+':
            if (firstOpt) {
                firstOpd = Number(firstOpd) + Number(secondOpd)
                secondOpd = null
            }
            firstOpt = 'plus'
            break;
        case '-':
            firstOpt === null ? firstOpt = 'minus' : secondOpt = 'minus'
            break;
        case '×':
            firstOpt === null ? firstOpt = 'times' : secondOpt = 'times'
            break;
        case '÷':
            firstOpt === null ? firstOpt = 'divide' : secondOpt = 'divide'
            break;
    }
    console.log(firstOpd);
    console.log(firstOpt);
    console.log(secondOpd);
    console.log(secondOpt);
}
const displayScreen = (btnContent) => {
    const firstChar = screen.textContent.charAt(0);
    const secondChar = screen.textContent.charAt(1);

    if (firstChar === '0' && secondChar !== '.') {
        screen.innerHTML = ''
        screen.innerHTML += btnContent
    } else if (firstChar === '0' && secondChar === '.') {
        screen.innerHTML += btnContent
    }
    else {
        screen.innerHTML += btnContent
    }
}
const handleSymbol = (btnContent) => {
    switch (btnContent) {
        case 'reset':
            screen.innerHTML = '0'
            firstOpd = secondOpd = firstOpt = secondOpt = null
            c = 0
            console.clear();
            break;
        case 'del':
            const firstChar = screen.innerHTML.charAt(0)
            const secondChar = screen.innerHTML.charAt(1)

            if (firstChar === '0' && secondChar !== '.') {
                screen.innerHTML = '0';
            } else {
                screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1)
            }
            break;
        case '.':
            screen.innerHTML += '.'
            break;
        case '×':
        case '+':
        case '÷':
        case '-':
            handleMath(btnContent)
            break;
        case '=':
            displayResult()
            console.log(firstOpd);
            console.log(firstOpt);
            console.log(secondOpd);
            console.log(secondOpt);
            break;
    }
}

screen.innerHTML = '0';
key.forEach((btn) => {
    btn.addEventListener('click', () => {
        let btnContent = btn.textContent

        isFinite(btnContent) ? displayScreen(btnContent) : handleSymbol(btnContent);
    })
})
