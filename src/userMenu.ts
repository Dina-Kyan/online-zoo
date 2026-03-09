
import { User } from "./types/user";



let currentUser: User | null = null;
document.addEventListener("DOMContentLoaded", () => {


const headerUser = document.querySelector(".user") as HTMLElement;
const userIcon = headerUser.querySelector(".user-icon") as HTMLElement;
const userName = headerUser.querySelector(".user-name") as HTMLElement;
const userPopup = headerUser.querySelector(".user-popup") as HTMLElement;


function renderUserMenu() {
  userPopup.innerHTML = ""; 
  console.log("Hhhhh");
  

  if (currentUser) {
    
    userName.textContent = currentUser.name;
    userName.style.display = "inline";

    const profileBtn = document.createElement("button");
    profileBtn.textContent = "Profile Information";
    profileBtn.addEventListener("click", () => {
        if (currentUser) {
            alert(`Name: ${currentUser.name}\nEmail: ${currentUser.email}`);
          }
    });

    const signOutBtn = document.createElement("button");
    signOutBtn.textContent = "Sign Out";
    signOutBtn.addEventListener("click", () => {
      currentUser = null;
      userName.style.display = "none";
      userPopup.style.display = "none";
    });

    userPopup.appendChild(profileBtn);
    userPopup.appendChild(signOutBtn);

  } else {
    
    const signInBtn = document.createElement("button");
    signInBtn.textContent = "Sign In";
    signInBtn.classList.add("orange-btn");
    signInBtn.addEventListener("click", () => location.href = "/pages/signin.html");
    
    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Registration";
    registerBtn.addEventListener("click", () => location.href = "/pages/registration.html");
    registerBtn.classList.add("orange-btn");

    userPopup.appendChild(signInBtn);
    userPopup.appendChild(registerBtn);
  }
}


userIcon.addEventListener("click", () => {
  renderUserMenu();
  userPopup.style.display = userPopup.style.display === "flex" ? "none" : "flex";
});


document.addEventListener("click", (e) => {
  if (!headerUser.contains(e.target as Node)) {
    userPopup.style.display = "none";
  }
});

});