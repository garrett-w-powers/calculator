// const Key = (display, output) => {
//     this.display = display;
//     this.output = output;
// };
const makeKey = (display) => {
    const key = document.createElement('button');
    key.setAttribute('content', display);
    key.setAttribute('style', 'key');
    // key.addEventListener('click', () => null);
};

const makeCalculator = (parent) => {
    const calcDiv = document.createElement('div');
    calcDiv.setAttribute('style', 'calculator');

    const display = document.createElement('div');
    display.setAttribute('style', 'display');

    const keypad = document.createElement('div');
    keypad.setAttribute('style', 'keypad');

    parent.appendChild(calcDiv);
    calcDiv.appendChild(display);
    calcDiv.appendChild(keypad);
    
    const keys = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "&divide", "&times", "+", "-", "="
    ];
    keys.map((k) => keypad.appendChild(makeKey(k)))
};



const container = document.querySelector(".container");
makeCalculator(container);