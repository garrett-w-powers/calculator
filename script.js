// const Key = (display, output) => {
//     this.display = display;
//     this.output = output;
// };
const makeKey = (val) => {
  const key = document.createElement("button");
  key.textContent = val;
  key.setAttribute("class", "key");
  return key;
};

const makeCalculator = (parent) => {
  const calcDiv = document.createElement("div");
  calcDiv.setAttribute("class", "calculator");

  const display = document.createElement("div");
  display.setAttribute("class", "display");

  const keypad = document.createElement("div");
  keypad.setAttribute("class", "keypad");

  parent.appendChild(calcDiv);
  calcDiv.appendChild(display);
  calcDiv.appendChild(keypad);

  const numKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const opKeys = ["C", "/", "*", "+", "-",];
  numKeys.map((k) => {
    const newkey = makeKey(k);
    keypad.appendChild(newkey);
    newkey.addEventListener("click", () => {
        updateVals(newkey.textContent);
        updateDisplay(values);
        console.log(values);
    });
  });
  opKeys.map((k) => {
    const newkey = makeKey(k);
    keypad.appendChild(newkey);
      newkey.addEventListener("click", () => {
        updateEquation(newkey.textContent);
        console.log(equation);
      });
  });
  const equalsKey = makeKey("=");
  keypad.appendChild(equalsKey);
  equalsKey.addEventListener("click", () => evaluate())
};

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const divide = (a, b) => a / b;

const multiply = (a, b) => a * b;

const operate = (op, a, b) => {
  var output = 0;
  switch (op) {
    case "/":
      output = divide(a, b);
      break;
    case "*":
      output = multiply(a, b);
      break;
    case "+":
      output = add(a, b);
      break;
    case "-":
      output = subtract(a, b);
      break;
  }
  updateDisplay(output);
};

const evaluate = (eq) => {
    
}

const updateDisplay = (vals) => {
  const display = document.querySelector(".display");
  
    displayVal = vals.join("");
    display.textContent = displayVal;
};

const updateVals = (input) => {
    values.push(input);
}

const clearValues = () => {
  a = null;
  b = null;
  operator = null;
};

const loadValues = (input) => {
    if (!valA) {
        valA = input;
    }
    else if (valA && operator) {
        valB = input;
    }
}

const updateEquation = (input) => {
    console.log(input);
    // If the last part of an equation is an operator, replace it
    if (typeof +equation[equation.length -1] !== 'number'){
        console.log("not a number!")
        equation[equation.length - 1] = input;
    }
    else {
        equation.push(+values.join(""));
        values = [];
        equation.push(input);
    }
    
}

let values = [];
let equation = [];
let operator = null;
let displayVal = "";

const container = document.querySelector(".container");
makeCalculator(container);
