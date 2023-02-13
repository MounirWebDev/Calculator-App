const key = document.querySelectorAll('.key')
const screen = document.querySelector('.screen')
const handleMath = ()=>{
    console.log('op');
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
            break;
        case 'del':
            const firstChar = screen.innerHTML.charAt(0)

            if (firstChar === '0') {
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
            handleMath();
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

// problem: when i write a float number and press the del button the screen will  return 0 