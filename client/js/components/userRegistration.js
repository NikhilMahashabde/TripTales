import { userLogin } from "./userLogin.js";
import { renderHomePage } from "/js/components/homepage.js";
import { renderNavBar } from "/js/components/navbar.js";
import { renderTripList } from "./tripList.js";


function userRegister() {
  const page = document.getElementById("page");
  const divBox = document.createElement("div");
  const form = document.createElement("form");

  form.innerHTML = `
  <section class="container_user_login_signup forms">
    <div class="form signup">
        <div class="form-content">
          <header id='login_signup_header'>Sign up</header>
          <div id="error_message_display"></div>
         
          <form action="#">
              <div class="field input-field">
                  <input type="text" placeholder="User name" class="input" name="userName">
              </div>
              <div class="field input-field">
                  <input type="email" placeholder="Email" class="input" name="userEmail">
              </div>

              <div class="field input-field">
                  <input type="password" placeholder="Create password" class="password" name="userPassword">
              </div>

              <div class="field input-field">
                  <input type="password" placeholder="Confirm password" class="password" name="confirmedPassword">
                  <i class='bx bx-hide eye-icon'></i>
              </div>

              <div class="field button-field">
                  <button type="submit" >Signup</button>
              </div>
          </form>


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
      name: formData.get("userName"),
      email: formData.get("userEmail"),
      password: formData.get("userPassword"),
    };

    const confirmPassword = formData.get("confirmedPassword");

    //confirm password value & password value matched
    if (userData.password === confirmPassword) {
      axios
        .post("/register", userData)
        .then((res) => {
          const nameData=res.data.user.name
          renderTripList();
          renderNavBar(nameData);
          
        })
        .catch((error) => {

          if (error.response.status === 400) {

            const errorDiv=document.getElementById('error_message_display')
            const errorMessage = document.createElement("div");
            errorMessage.innerHTML = `
              
              <h2>Error : ${error.response.data.message}</h2>
         
            `;
            errorMessage.style.color = "red";
            errorMessage.style.textAlign = "center";
            errorMessage.style.backgroundColor="white"

            errorDiv.replaceChildren(errorMessage,errorMessage);
          }
        });

      //if confirm password value & password value not matching
    } else {
      const errorDiv=document.getElementById('error_message_display')
      const errorMessage = document.createElement("div");
 
      errorMessage.innerHTML = `
              <h2>Passwords are not matching</h2>
            `;
      errorMessage.style.color = "red";
      errorMessage.style.textAlign = "center";
      errorMessage.style.backgroundColor="white"

      errorDiv.replaceChildren(errorMessage,errorMessage)
    }
  });

  divBox.appendChild(form);
  page.replaceChildren(divBox);


  changeToLoginFormBtn()
}

function changeToLoginFormBtn(){
  //Login button to go to userLogin()
  const loginBtn=document.getElementById('form-button flex-row align-items-center justify-content-between')
  const login_button=document.createElement('div');
  login_button.id='userRegister';
  login_button.innerHTML=`
  <p id="register_page" class="link signup-link" style='text-decoration: underline; color:blue; cursor: pointer;'>Login</p>
    `;
  login_button.addEventListener('click',()=>userLogin())
  loginBtn.appendChild(login_button)
}

export { userRegister };