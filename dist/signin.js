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
const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("password");
const signInBtn = document.getElementById("signin-btn");
const form = document.getElementById("signin-form");
const loginError = loginInput.nextElementSibling;
const passwordError = passwordInput.nextElementSibling;
function validateLogin() {
    const value = loginInput.value.trim();
    const regex = /^[A-Za-z][A-Za-z]{2,}$/;
    if (!regex.test(value)) {
        loginInput.classList.add("input-error");
        loginError.textContent =
            "Login must start with a letter and contain at least 3 English letters";
        return false;
    }
    return true;
}
function validatePassword() {
    const value = passwordInput.value;
    const regex = /^(?=.*[!@#$%^&*]).{6,}$/;
    if (!regex.test(value)) {
        passwordInput.classList.add("input-error");
        passwordError.textContent =
            "Password must be at least 6 characters and contain a special character";
        return false;
    }
    return true;
}
form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const login = loginInput.value;
    const password = passwordInput.value;
    try {
        const response = yield fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ login, password })
        });
        if (!response.ok) {
            throw new Error();
        }
        window.location.href = "/menu.html";
    }
    catch (_a) {
        const authError = document.getElementById("auth-error");
        if (authError) {
            authError.textContent = "Incorrect login or password";
        }
    }
}));
loginInput.addEventListener("focus", () => {
    loginInput.classList.remove("input-error");
    loginError.textContent = "";
});
passwordInput.addEventListener("focus", () => {
    passwordInput.classList.remove("input-error");
    passwordError.textContent = "";
});
function checkForm() {
    const validLogin = validateLogin();
    const validPassword = validatePassword();
    signInBtn.disabled = !(validLogin && validPassword);
}
signInBtn.addEventListener("input", checkForm);
// passwordInput.addEventListener("input", checkForm);
loginInput.addEventListener("blur", validateLogin);
passwordInput.addEventListener("blur", validatePassword);
//# sourceMappingURL=signin.js.map