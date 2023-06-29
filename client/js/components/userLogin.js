import { renderNavBar } from "/js/components/navbar.js";
import { userRegister } from "./userRegistration.js";
import { renderTripList } from "./tripList.js";

function userLogin() {
  const page = document.getElementById("page");
  const divBox = document.createElement("div");
  const form = document.createElement("form");

  form.innerHTML = `
  <div id="container" >
        <div id="card" style="width:500px; height: 300px;">
            <h2 style="padding-top: 1.5rem">Login</h2>
            <form id="login_form">
                <div class="form-group">
                    <label style="display:inline-block;text-align: right;width: 105px;"> Email :</label>
                    <input type="email" class="form-control" placeholder="Email" name="userEmail" required>
                </div>                 
                <div class="form-group">
                    <label style="display:inline-block;text-align: right;width: 105px;"> Password :</label>
                    <input type="password" class="form-control" placeholder="Password" name="userPassword" required>
                </div>

                <div id="form-button flex-row align-items-center justify-content-between">
                    <button id="login_submit" type="submit" class="btn btn-primary" style="background:#82bdcf;" style="padding: 0.6rem 1.2rem;" style="border: 2px solid #da5767;">Login</button>

                    
                   
                </div>
            </form>
       
        </div>
    </div>

    
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
        userName = res.data.name;
        userEmail = res.data.email;
        isAuthenticated = res.data.isAuthenticated;
        console.log("res.data on login:", res.data);
        renderNavBar(nameData);
        form.setAttribute("hidden", "");
        renderTripList();
        ////need user page function () to refreshing the page./////
      })
      .catch((error) => {
        console.log(error);

        // // if (error.response.status === 401 || error.response.status === 400) {
        // //   console.log(error);
        // //   const errorMessage = document.createElement("div");
        // //   errorMessage.innerHTML = `
        // //       <h2>Error: ${error.response.data.message}</h2>

        // //     `;
        // //   errorMessage.style.color = "red";
        // //   errorMessage.style.textAlign = "center";
        // //   errorMessage.style.backgroundColor = "white";

        // //   form.appendChild(errorMessage);
        // }
      });
  });

  divBox.appendChild(form);
  page.replaceChildren(divBox);

  page.style.position = "relative";

  const formControls = document.getElementsByClassName("form-control");
  for (let i = 0; i < formControls.length; i++) {
    formControls[i].style.backgroundColor = "#f8f9fa";
    formControls[i].style.width = "300px";
    formControls[i].style.padding = "20px";
    formControls[i].style.marginBottom = "1.3rem";
  }

  const card = document.getElementById("card");
  card.style.border = "0.40rem solid";
  card.style.borderColor = "#838375 ";
  card.style.top = "10%";
  card.style.textAlign = "center";
  card.style.background = "white";

  const container = document.getElementById("container");

  container.style.position = "absolute";
  container.style.top = "50%";
  container.style.left = "50%";
  container.style.transform = "translate(-50%, 0%)";
  container.style.padding = "10px";

  changeToSignupFormBtn();
}

function changeToSignupFormBtn() {
  //Sign up button go to "userRegister()"
  const loginBtn = document.getElementById(
    "form-button flex-row align-items-center justify-content-between"
  );
  const signup_button = document.createElement("div");
  signup_button.id = "userRegister";
  signup_button.innerHTML = `
    <button id="register_page" type="submit" class="btn btn-primary" style="background:#82bdcf;" style="padding: 0.6rem 1.2rem;" style="border: 2px solid #da5767;">Sign up</button>
      `;
  signup_button.addEventListener("click", () => userRegister());
  loginBtn.appendChild(signup_button);
}

export { userLogin };
