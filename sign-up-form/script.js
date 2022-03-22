const submitButton = document.querySelector("#create");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm");

submitButton.addEventListener("click", validate);
confirmPassword.addEventListener("input", validate);

function validate(event) {
    if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords are not the same");
        confirmPassword.reportValidity();
    }
    else {
        confirmPassword.setCustomValidity("");
    }
}