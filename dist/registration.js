"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const regForm = document.getElementById("register-form");
const loginInputReg = document.getElementById("login");
const nameInput = document.getElementById("name");
const passwordInputReg = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const registerBtn = document.getElementById("register-btn");
const regError = document.getElementById("auth-error");
const loginRegex = /^[A-Za-z][A-Za-z]{2,}$/;
const nameRegex = /^[A-Za-z]{3,}$/;
const specialCharRegex = /[!@#$%^&*]/;
function showError(input, message) {
    const error = input.nextElementSibling;
    input.classList.add("input-error");
    error.textContent = message;
}
function clearError(input) {
    const error = input.nextElementSibling;
    input.classList.remove("input-error");
    error.textContent = "";
}
function validateLoginReg() {
    const value = loginInputReg.value.trim();
    if (!loginRegex.test(value)) {
        showError(loginInputReg, "Login must start with a letter and contain at least 3 English letters");
        return false;
    }
    clearError(loginInputReg);
    return true;
}
function validateName() {
    const value = nameInput.value.trim();
    if (value == '')
        return false;
    if (!nameRegex.test(value)) {
        showError(nameInput, "Name must contain at least 3 English letters");
        return false;
    }
    clearError(nameInput);
    return true;
}
function validatePasswordReg() {
    const value = passwordInputReg.value;
    if (value == '')
        return false;
    if (value.length < 6) {
        showError(passwordInputReg, "Password must be at least 6 characters");
        return false;
    }
    if (!specialCharRegex.test(value)) {
        showError(passwordInputReg, "Password must contain a special character");
        return false;
    }
    clearError(passwordInputReg);
    return true;
}
function validateConfirmPassword() {
    if (confirmPassword.value == '')
        return false;
    if (confirmPassword.value !== passwordInputReg.value) {
        showError(confirmPassword, "Passwords do not match");
        return false;
    }
    clearError(confirmPassword);
    return true;
}
loginInputReg.addEventListener("blur", validateLoginReg);
nameInput.addEventListener("blur", validateName);
passwordInputReg.addEventListener("blur", validatePasswordReg);
confirmPassword.addEventListener("blur", validateConfirmPassword);
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("focus", () => {
        clearError(input);
    });
});
function checkFormReg() {
    const validLogin = validateLoginReg();
    const validName = validateName();
    const validPassword = validatePasswordReg();
    const passwordConfird = validateConfirmPassword();
    registerBtn.disabled = !(validLogin && validName && validPassword && passwordConfird);
}
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", checkFormReg);
});
// nameInput.addEventListener("input",()=> {
//     checkFormReg();
//     validateName();
// });
// loginInputReg.addEventListener("input",()=> {
//     checkFormReg();
//     validateLoginReg();
// });
// passwordInputReg.addEventListener("input",()=> {
//     checkFormReg();
//     validateLoginReg();
// });
regForm.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const user = {
        login: loginInputReg.value,
        name: nameInput.value,
        password: passwordInputReg.value,
        email: "user@example.com"
    };
    try {
        const response = yield fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            const data = yield response.json();
            regError.textContent = data.message;
            return;
        }
        window.location.href = "/menu.html";
    }
    catch (_a) {
        regError.textContent = "Registration failed";
    }
}));
//# sourceMappingURL=registration.js.map