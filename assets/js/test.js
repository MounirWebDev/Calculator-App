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
const displayResult = () => {
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
    firstOpd = secondOpd = firstOpt = null
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
            if (firstOpt && firstOpt === 'plus') {
                firstOpd = Number(firstOpd) + Number(secondOpd)
                secondOpd = null
            } else if (firstOpt && firstOpt === 'minus') {
                firstOpd = Number(firstOpd) - Number(secondOpd)
                secondOpd = null
            } else if (firstOpt && firstOpt === 'times') {
                firstOpd = Number(firstOpd) * Number(secondOpd)
                secondOpd = null
            } else if (firstOpt && firstOpt === 'divide') {
                firstOpd = Number(firstOpd) / Number(secondOpd)
                secondOpd = null
            }
            firstOpt = 'plus'
            break;
        case '-':
            if (firstOpt && firstOpt === 'plus') {
                firstOpd = Number(firstOpd) + Number(secondOpd)
                secondOpd = null
            } else if (firstOpt && firstOpt === 'minus') {
                firstOpd = Number(firstOpd) - Number(secondOpd)
                secondOpd = null
            } else if (firstOpt && firstOpt === 'times') {
                firstOpd = Number(firstOpd) * Number(secondOpd)
                secondOpd = null
            } else if (firstOpt && firstOpt === 'divide') {
                firstOpd = Number(firstOpd) / Number(secondOpd)
                secondOpd = null
            }
            firstOpt = 'minus'
            break;
        case '×':
            if (firstOpt && firstOpt === 'plus') {
                firstOpd = Number(firstOpd) + Number(secondOpd)
                secondOpd = null
            } else if (firstOpt && firstOpt === 'minus') {
                firstOpd = Number(firstOpd) - Number(secondOpd)
                secondOpd = null
            } else if (firstOpt && firstOpt === 'times') {
                firstOpd = Number(firstOpd) * Number(secondOpd)
                secondOpd = null
            } else if (firstOpt && firstOpt === 'divide') {
                firstOpd = Number(firstOpd) / Number(secondOpd)
                secondOpd = null
            }
            firstOpt = 'times'
            break;
        case '÷':
            if (firstOpt && firstOpt === 'plus') {
                firstOpd = Number(firstOpd) + Number(secondOpd)
                secondOpd = null
            } else if (firstOpt && firstOpt === 'minus') {
                firstOpd = Number(firstOpd) - Number(secondOpd)
                secondOpd = null
            } else if (firstOpt && firstOpt === 'times') {
                firstOpd = Number(firstOpd) * Number(secondOpd)
                secondOpd = null
            } else if (firstOpt && firstOpt === 'divide') {
                firstOpd = Number(firstOpd) / Number(secondOpd)
                secondOpd = null
            }
            firstOpt = 'divide'
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
// theme
const toggle = document.querySelector('.pickMode')
const myTheme = document.querySelectorAll('.theme')
const theme = {
    theme1: {
        bodyBg: 'hsl(222, 26%, 31%)',
        keyPad_toggle_bg1: ' hsl(223, 31%, 20%)',
        screenBg: 'hsl(224, 36%, 15%)',
        keysBg1: 'hsl(225, 21%, 49%)',
        keyShadow1: '0 3px 2px  hsl(224, 28%, 35%)',
        keyPad_toggle_bg2: 'hsl(6, 63%, 50%)',
        keyPad_toggle_shadow: '0 3px 2px hsl(6, 70%, 34%)',
        keysBg2: 'hsl(30, 25%, 89%)',
        keyShadow2: '0 3px 2px hsl(28, 16%, 65%)',
        textClr1: 'hsl(221, 14%, 31%)',
        textClr2: 'hsl(0, 0%, 100%)'
    },
    theme2: {
        bodyBg: 'hsl(0, 0%, 90%)',
        keyPad_toggle_bg1: 'hsl(0, 5%, 81%)',
        screenBg: 'hsl(0, 0%, 93%)',
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
        screenBg: 'hsl(268, 71%, 12%)',
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
const pickTheme = (th) => {
    const body = document.body;
    const header = document.querySelector('header');
    const circleToggle = document.querySelector('.circle');
    const keyPad = document.querySelector('.keyPad');
    const del = document.querySelector('.del');
    const reset = document.querySelector('.reset');
    const quality = document.querySelector('.quality');
    const elementContent = th.target.textContent;
    switch (elementContent) {
        case '1':
            body.style.backgroundColor = theme.theme1.bodyBg;
            header.style.color = theme.theme1.textClr2;
            toggle.style.backgroundColor = theme.theme1.keyPad_toggle_bg1;
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
            reset.style.color = theme.theme1.textClr2;
            quality.style.backgroundColor = theme.theme1.keyPad_toggle_bg2;
            quality.style.boxShadow = theme.theme1.keyPad_toggle_shadow;
            quality.style.color = theme.theme1.textClr2;
            break;
        case '2':
            body.style.backgroundColor = theme.theme2.bodyBg;
            header.style.color = theme.theme2.textClr1;
            toggle.style.backgroundColor = theme.theme2.keyPad_toggle_bg1;
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
            reset.style.color = theme.theme2.textClr2;
            quality.style.backgroundColor = theme.theme2.keyPad_toggle_bg2;
            quality.style.boxShadow = theme.theme2.keyPad_toggle_shadow;
            quality.style.color = theme.theme2.textClr2;
            break;
        case '3':
            body.style.backgroundColor = theme.theme3.bodyBg;
            header.style.color = theme.theme3.textClr1;
            toggle.style.backgroundColor = theme.theme3.keyPad_toggle_bg1;
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

// initilazing the value of the screen
screen.innerHTML = '0';
// calculate event
key.forEach((btn) => {
    btn.addEventListener('click', () => {
        let btnContent = btn.textContent

        isFinite(btnContent) ? displayScreen(btnContent) : handleSymbol(btnContent);
    })
})
// theme event
myTheme.forEach(th => {
    th.addEventListener('click', pickTheme)
})
toggle.addEventListener('click', (event) => {
    const body = document.body;
    const header = document.querySelector('header');
    const circleToggle = document.querySelector('.circle');
    const keyPad = document.querySelector('.keyPad');
    const del = document.querySelector('.del');
    const reset = document.querySelector('.reset');
    const quality = document.querySelector('.quality');
    let x = event.offsetX
    if (x <= 17) {
        body.style.backgroundColor = theme.theme1.bodyBg;
        header.style.color = theme.theme1.textClr2;
        toggle.style.backgroundColor = theme.theme1.keyPad_toggle_bg1;
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
        reset.style.color = theme.theme1.textClr2;
        quality.style.backgroundColor = theme.theme1.keyPad_toggle_bg2;
        quality.style.boxShadow = theme.theme1.keyPad_toggle_shadow;
        quality.style.color = theme.theme1.textClr2;
    } else if (x >= 38) {
        body.style.backgroundColor = theme.theme3.bodyBg;
        header.style.color = theme.theme3.textClr1;
        toggle.style.backgroundColor = theme.theme3.keyPad_toggle_bg1;
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
    } else {
        body.style.backgroundColor = theme.theme2.bodyBg;
        header.style.color = theme.theme2.textClr1;
        toggle.style.backgroundColor = theme.theme2.keyPad_toggle_bg1;
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
        reset.style.color = theme.theme2.textClr2;
        quality.style.backgroundColor = theme.theme2.keyPad_toggle_bg2;
        quality.style.boxShadow = theme.theme2.keyPad_toggle_shadow;
        quality.style.color = theme.theme2.textClr2;
    }
})




// the priroty between the opts
// create a function for the all the theme num