import { userLogin } from "/js/components/userLogin.js";
import { userRegister } from "/js/components/userRegistration.js";

function renderHomePage() {
  const homeSection = document.getElementById("page");

  homeSection.innerHTML = `

    <div id="main-container">
        <div id="title-message">
            <h2>project main Title</h2>
            <p>planning travel is fun time</p>
        </div>

        <div id="main_page_user_icon">
            <ul id="main_page_user_icon_list">
                <li id="userLogin">Login</li>
                <li id="userRegister">Sign up</li>
            </ul>
        </div>
    </div>  
    `;

  document
    .getElementById("userLogin")
    .addEventListener("click", () => userLogin());
  document
    .getElementById("userRegister")
    .addEventListener("click", () => userRegister());
}

export { renderHomePage };
