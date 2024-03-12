// const Key = (display, output) => {
//     this.display = display;
//     this.output = output;
// };
const makeKey = (display) => {
    const key = document.createElement('button');
    key.textContent = display;
    key.setAttribute('class', 'key');
    return key;
    key.addEventListener('click', () => keyClick);
};

const makeCalculator = (parent) => {
    const calcDiv = document.createElement('div');
    calcDiv.setAttribute('class', 'calculator');

    const display = document.createElement('div');
    display.setAttribute('class', 'display');

    const keypad = document.createElement('div');
    keypad.setAttribute('class', 'keypad');

    parent.appendChild(calcDiv);
    calcDiv.appendChild(display);
    calcDiv.appendChild(keypad);
    
    const keys = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "&divide", "&times", "+", "-", "="
    ];
    keys.map((k) => {
        const newkey = makeKey(k);
        keypad.appendChild(newkey);
    });
};

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const divide = (a, b) => a/b;

const multiply = (a, b) => a*b;

const operate = (op, a, b) => {
    switch(op) {
        case "/":
            divide(a,b);
            break
        case "*":
            multiply(a,b);
            break;
        case "+":
            add(a,b);
            break;
        case "-":
            subtract(a,b);
            break;
    }
}

let a = 0;
let b = 0;
let operator = "";

const container = document.querySelector(".container");
makeCalculator(container);