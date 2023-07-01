import { renderNavBar } from "/js/components/navbar.js";
import { userRegister } from "./userRegistration.js";
import { renderTripList } from "./tripList.js";
import { renderFooter } from "./footer.js";

function userLogin() {
  const page = document.getElementById("page");
  const divBox = document.createElement("div");
  const form = document.createElement("form");

  form.innerHTML = `
  <section class="container_user_login_signup forms">
  <div class="form login">
      <div class="form-content">
          <header id='login_signup_header'>Login</header>
          <div id="error_message_display"></div>
         
              <div class="field input-field">
                  <input type="email" placeholder="Email" class="input" name="userEmail" require>
              </div>

              <div class="field input-field">
                  <input type="password" placeholder="Password" class="password" name="userPassword" require>
                  <i class='bx bx-hide eye-icon'></i>
              </div>

              <div class="form-link">
                  <a href="#" class="forgot-pass">Forgot password?</a>
              </div>

              <div class="field button-field">
                  <button type="submit">Login</button>
              </div>


          <div class="form-link">
              <span id='form-button flex-row align-items-center justify-content-between'>Don't have an account? </span>
          </div>
      </div>

      <div class="line"></div>

      <div class="media-options">
          <a href="/login" class="field google">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" class="google-img">
              <span>Login with Github</span>
          </a>
      </div>

      <div class="media-options">
        <a href="/login" class="field google">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" class="google-img">
              <span>Login with Google</span>
          </a>
      </div>

  </div>
  </section>

    `;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const userData = {
      email: formData.get("userEmail"),
      password: formData.get("userPassword"),
    };

    axios
      .post("/login", userData)
      .then((res) => {
        // userName = res.data.name;
        // userEmail = res.data.email;
        // isAuthenticated = res.data.isAuthenticated;
        console.log("res.data on login:", res.data);
        renderNavBar(res.data.name);
        form.setAttribute("hidden", "");
        renderTripList();
        renderFooter();
        ////need user page function () to refreshing the page./////
      })
      .catch((error) => {
        console.log(error);

        if (error.response.status === 401 || error.response.status === 400) {
          console.log(error.response);
          const errorDiv=document.getElementById("error_message_display")
          const errorMessage = document.createElement("div");
          errorMessage.innerHTML = `
              <h2>Error: ${error.response.data.message}</h2>
         
            `;
          errorMessage.style.color = "red";
          errorMessage.style.textAlign = "center";
          errorMessage.style.backgroundColor = "white";

          errorDiv.replaceChildren(errorMessage, errorMessage);
        }
      });
  });

  divBox.appendChild(form);
  page.replaceChildren(divBox);

  changeToSignupFormBtn();

  
}

function changeToSignupFormBtn() {
  //Sign up button go to "userRegister()"
  const loginBtn = document.getElementById("form-button flex-row align-items-center justify-content-between");
  const signup_button = document.createElement("div");
  signup_button.id = "userRegister";
  signup_button.innerHTML = `
    <p id="register_page" class="link signup-link" style='text-decoration: underline; color:blue; cursor: pointer;'>Signup</p>
    
      `;
    signup_button.addEventListener('click', () => userRegister());
     loginBtn.appendChild(signup_button);

}

export { userLogin };
