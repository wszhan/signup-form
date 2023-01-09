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
        passwordInput1.setCustomValidity("Two passwords must match");
        // passwordInput2.setCustomValidity("Two passwords must match");
    } else {
        passwordInput1.setCustomValidity(""); // make valid
    }
}