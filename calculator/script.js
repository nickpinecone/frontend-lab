let numberOne = document.querySelector(".number-one");
let numberTwo = document.querySelector(".number-two");
let operatorNode = document.querySelector(".operator");
let secretOutput = document.querySelector(".secret-output");

let buttons = document.querySelectorAll(".buttons > button");

function calculate(num1, operator, num2) {
    num1 = Number(num1);
    num2 = Number(num2);

    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 != 0)
                result = num1 / num2;
            break;
        case "%":
            if (num2 != 0)
                result = num1 % num2;
            break;
    }

    return +result.toFixed(2);
}

function isNumberEmpty(numberNode) {
    return numberNode.textContent == "" || numberNode.textContent == "-";
}

function containsPoint(numberNode) {
    return numberNode.textContent.includes(".");
}

function endsInPoint(numberNode) {
    return numberNode.textContent[numberNode.textContent.length - 1] == ".";
}

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (button.classList.contains("minus")) {
            if (operatorNode.textContent == "" && isNumberEmpty(numberOne)) {
                numberOne.textContent = "-";
            }
            else if (operatorNode.textContent != "" && isNumberEmpty(numberTwo)) {
                numberTwo.textContent = "-";
            }
        }

        if (button.classList.contains("operator")) {
            if (operatorNode.textContent == "" && !isNumberEmpty(numberOne) && !endsInPoint(numberOne)) {
                operatorNode.textContent = button.textContent;
            }
            else if (operatorNode.textContent != "" && !isNumberEmpty(numberTwo) && !endsInPoint(numberTwo)) {
                let result = calculate(numberOne.textContent, operatorNode.textContent, numberTwo.textContent);

                secretOutput.textContent = (result == 69) ? "Nice" : "";
                numberOne.textContent = result;
                numberTwo.textContent = "";
                operatorNode.textContent = button.textContent;
            }
        }

        else if (button.classList.contains("number")) {
            if (operatorNode.textContent == "") {
                numberOne.textContent += button.textContent;
            }
            else {
                numberTwo.textContent += button.textContent;
            }
        }

        else if (button.classList.contains("point")) {
            if (operatorNode.textContent == "" && !isNumberEmpty(numberOne) && !containsPoint(numberOne)) {
                numberOne.textContent += ".";
            }
            else if (operatorNode.textContent != "" && !isNumberEmpty(numberTwo) && !containsPoint(numberTwo)) {
                numberTwo.textContent += ".";
            }
        }

        else if (button.classList.contains("equals")) {
            if (!isNumberEmpty(numberOne) && operatorNode.textContent && !isNumberEmpty(numberTwo) && !endsInPoint(numberOne) && !endsInPoint(numberTwo)) {
                let result = calculate(numberOne.textContent, operatorNode.textContent, numberTwo.textContent);

                secretOutput.textContent = (result == 69) ? "Nice" : "";
                numberOne.textContent = result;
                numberTwo.textContent = "";
                operatorNode.textContent = "";
            }
        }

        else if (button.classList.contains("clear")) {
            numberOne.textContent = "";
            numberTwo.textContent = "";
            operatorNode.textContent = "";
        }

        else if (button.classList.contains("delete")) {
            if (numberTwo.textContent != "") {
                numberTwo.textContent = numberTwo.textContent.slice(0, numberTwo.textContent.length - 1);
            }
            else if (operatorNode.textContent != "") {
                operatorNode.textContent = "";
            }
            else if (numberOne.textContent != "") {
                numberOne.textContent = numberOne.textContent.slice(0, numberOne.textContent.length - 1);
            }
        }
    });
});
