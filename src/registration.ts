const regForm = document.getElementById("register-form") as HTMLFormElement;

const loginInputReg = document.getElementById("login") as HTMLInputElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const passwordInputReg = document.getElementById("password") as HTMLInputElement;
const confirmPassword = document.getElementById("confirm-password") as HTMLInputElement;

const registerBtn = document.getElementById("register-btn") as HTMLButtonElement;
const regError = document.getElementById("auth-error") as HTMLElement;

const loginRegex = /^[A-Za-z][A-Za-z]{2,}$/;
const nameRegex = /^[A-Za-z]{3,}$/;
const specialCharRegex = /[!@#$%^&*]/;

function showError(input: HTMLInputElement, message: string) {

    const error = input.nextElementSibling as HTMLElement;
  
    input.classList.add("input-error");
    error.textContent = message;
}
  
function clearError(input: HTMLInputElement) {
  
    const error = input.nextElementSibling as HTMLElement;
  
    input.classList.remove("input-error");
    error.textContent = "";
}

function validateLoginReg(): boolean {

    const value = loginInputReg.value.trim();
  
    if (!loginRegex.test(value)) {
  
      showError(loginInputReg,
        "Login must start with a letter and contain at least 3 English letters"
      );
  
      return false;
  
    }
  
    clearError(loginInputReg);
    return true;
}

function validateName(): boolean {

    const value = nameInput.value.trim();
    if (value == '') return false;
  
    if (!nameRegex.test(value)) {
  
      showError(nameInput,
        "Name must contain at least 3 English letters"
      );
  
      return false;  
    }
  
    clearError(nameInput);
    return true;
}

function validatePasswordReg(): boolean {

    const value = passwordInputReg.value;

    if (value == '') return false;
  
    if (value.length < 6) {
  
      showError(passwordInputReg,
        "Password must be at least 6 characters"
      );
  
      return false;
  
    }
  
    if (!specialCharRegex.test(value)) {
  
      showError(passwordInputReg,
        "Password must contain a special character"
      );
  
      return false;
  
    }
  
    clearError(passwordInputReg);
    return true;  
}

function validateConfirmPassword(): boolean {
    if (confirmPassword.value == '') return false;

    if (confirmPassword.value !== passwordInputReg.value) {
  
      showError(confirmPassword,
        "Passwords do not match"
      );
  
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
  
      clearError(input as HTMLInputElement);
  
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

regForm.addEventListener("submit", async (e) => {

    e.preventDefault();
  
    const user = {
      login: loginInputReg.value,
      name: nameInput.value,
      password: passwordInputReg.value,
      email: "user@example.com"
    };
  
    try {
  
      const response = await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/register", {
  
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
  
      if (!response.ok) {
  
        const data = await response.json();
        regError.textContent = data.message;
  
        return;
  
      }
  
      window.location.href = "/menu.html";
  
    }
  
    catch {
  
      regError.textContent = "Registration failed";
  
    }
});