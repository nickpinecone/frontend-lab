let confirmPassword = document.querySelector("#confirm-password");
let password = document.querySelector("#password");

let inputs = document.querySelectorAll("form input");

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value != password.value) {
        confirmPassword.setCustomValidity("Passwords are not the same.");
    }
    else {
        confirmPassword.setCustomValidity("");
    }
});


inputs.forEach((input) => {
    input.addEventListener("focusin", () => {
        if (input.validationMessage != "") {
            input.parentNode.setAttribute('invalid-message', input.validationMessage);
        }
    });
    input.addEventListener("focusout", () => {
        input.parentNode.setAttribute('invalid-message', "");
    });
    input.addEventListener("input", () => {
        if (input.validationMessage == "") {
            input.parentNode.setAttribute('invalid-message', "");
        }
        else {
            input.parentNode.setAttribute('invalid-message', input.validationMessage);
        }
    });
});


