import parseExpression from "./parser.js"

const operators = ["+", "~", "*", "/"];

let buttons = Array.from(document.querySelector(".buttons").children);
let output = document.querySelector("#output");

let enteredExpression = "";
let shownExpression = "";

// Simple implementaion no checking for errors
// Just append the character but with special rules for  -, AC, =
buttons.forEach((button) => {
    if(button.textContent == '-') {
        button.addEventListener("click", () => {
            if(
                operators.includes(enteredExpression[enteredExpression.length-1]) ||
                enteredExpression.length == 0
            ) {
                enteredExpression += '-';
            }
            else {
                enteredExpression += '~';
            }
            shownExpression += ' - ';
            updateOutput();
        });
    }
    else if(button.textContent == '=') {
        button.addEventListener("click", () => {
            let result = parseExpression(enteredExpression);

            shownExpression += " = " + result;
            enteredExpression = result;

            updateOutput();
        });
    }
    else if(button.textContent == 'AC') {
        button.addEventListener("click", () => {
            enteredExpression = "";
            shownExpression = "";
            updateOutput();
        });
    }
    else {
        button.addEventListener("click", () => {
            enteredExpression += button.textContent;

            let isOperator = operators.includes(button.textContent);

            if(isOperator) {
                shownExpression += " "
            }
            shownExpression += button.textContent;
            if(isOperator) {
                shownExpression += " "
            }

            updateOutput();
        });
        updateOutput();
    }
});

function updateOutput() {
    output.textContent = shownExpression;
}


