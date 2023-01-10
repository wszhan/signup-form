const passwordInput1 = document.getElementById("password");
const passwordInput2 = document.getElementById("password-confirmation");

[passwordInput1, passwordInput2].forEach(passwordInput => {
    passwordInput.addEventListener('input', e => {
        validPasswords();
    });
})

function validPasswords() {
    const password1 = passwordInput1.value;
    const password2 = passwordInput2.value;
    // console.log(password1 === password2);
    if (password1 !== password2) {
        passwordInput2.setCustomValidity("Two passwords must match");
    } else {
        passwordInput2.setCustomValidity(""); // make valid
    }

    const isPassword1Valid = passwordInput1.checkValidity();
    if (!isPassword1Valid) {
        passwordInput1.setCustomValidity("hey");
    } else {
        passwordInput1.setCustomValidity("");
    }
}