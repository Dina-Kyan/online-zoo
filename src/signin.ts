const loginInput = document.getElementById("login") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const signInBtn = document.getElementById("signin-btn") as HTMLButtonElement;
const form = document.getElementById("signin-form") as HTMLFormElement;

const loginError = loginInput.nextElementSibling as HTMLElement;
const passwordError = passwordInput.nextElementSibling as HTMLElement;

function validateLogin(): boolean {
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

function validatePassword(): boolean {
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

form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const login = loginInput.value;
    const password = passwordInput.value;
  
    try {
      const response = await fetch("/api/login", {
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
  
    } catch {
      const authError = document.getElementById("auth-error");
      if (authError) {
        authError.textContent = "Incorrect login or password";
      }
    }
  });


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