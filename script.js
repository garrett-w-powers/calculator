// const Key = (display, output) => {
//     this.display = display;
//     this.output = output;
// };
const makeKey = (val) => {
    const key = document.createElement('button');
    key.textContent = val;
    key.setAttribute('class', 'key');
    return key;
    key.addEventListener('click', () => keyClick);
};

const makeCalculator = (parent) => {
    const calcDiv = document.createElement('div');
    calcDiv.setAttribute('class', 'calculator');

    const display = document.createElement('div');
    display.setAttribute('class', 'display');
    display.textContent = displayVal;

    const keypad = document.createElement('div');
    keypad.setAttribute('class', 'keypad');

    parent.appendChild(calcDiv);
    calcDiv.appendChild(display);
    calcDiv.appendChild(keypad);
    
    const keys = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "C", "&divide", "&times", "+", "-", "="
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
    var output = 0;
    switch(op) {
        case "/":
            output = divide(a,b);
            break
        case "*":
            output = multiply(a,b);
            break;
        case "+":
            output = add(a,b);
            break;
        case "-":
            output = subtract(a,b);
            break;
    }
    updateDisplay(output);
};

const updateDisplay = (input) => {
    const display = document.querySelector(".display")
    if (input = "c") {
        clearValues();
        display.textContent = "";
    }
};

const clearValues = () => {
    a = 0;
    b = 0;
    operator = "";
}

let a = 0;
let b = 0;
let operator = "";
let displayVal = "80085";

const container = document.querySelector(".container");
makeCalculator(container);