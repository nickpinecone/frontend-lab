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
    });
});
