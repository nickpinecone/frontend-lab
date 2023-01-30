let numberOne = document.querySelector(".number-one");
let numberTwo = document.querySelector(".number-two");
let operatorNode = document.querySelector(".operator");

let buttons = document.querySelectorAll(".buttons > button");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (button.classList.contains("operator") && operatorNode.textContent == "" && numberOne.textContent != "") {
            operatorNode.textContent = button.textContent;
        }

        if (button.classList.contains("number") && operatorNode.textContent == "") {
            numberOne.textContent += button.textContent;
        }
        else if (button.classList.contains("number")) {
            numberTwo.textContent += button.textContent;
        }

        if (button.classList.contains("equals") && numberOne.textContent && operatorNode.textContent && numberTwo.textContent) {
            let num1 = Number(numberOne.textContent);
            let num2 = Number(numberTwo.textContent);
            let result = 0;

            switch (operatorNode.textContent) {
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
                    result = num1 / num2;
                    break;
                case "%":
                    result = num1 % num2;
                    break;
            }

            numberOne.textContent = +result.toFixed(2);
            numberTwo.textContent = "";
            operatorNode.textContent = "";
        }
    });
});
