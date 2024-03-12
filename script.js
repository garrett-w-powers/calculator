// const Key = (display, output) => {
//     this.display = display;
//     this.output = output;
// };
const makeKey = (display) => {
    const key = document.createElement('button');
    key.textContent = display;
    key.setAttribute('class', 'key');
    return key;
    // key.addEventListener('click', () => null);
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



const container = document.querySelector(".container");
makeCalculator(container);