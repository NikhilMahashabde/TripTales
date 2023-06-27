import { userLogin } from "./userLogin.js";
import { renderHomePage } from "/js/components/homepage.js";
import { renderNavBar } from "/js/components/navbar.js";


function userRegister() {
  const page = document.getElementById("page");
  const divBox = document.createElement("div");
  const form = document.createElement("form");

  form.innerHTML = `
    <div id="container" style="width:500px; height: 300px;">
        <div id="card" >
            <h2 style="padding-top: 1.5rem">Register</h2>
            <form>
                <div id="form-group">
                    <label style="display:inline-block;text-align: right;width: 130px;"> Name :</label>
                    <input type="text" class="form-control" id="name" placeholder="Name" name="userName" required>
                </div>
                <div id="form-group">
                    <label style="display:inline-block;text-align: right;width: 130px;"> Email :</label>
                    <input type="email" class="form-control" id="email" placeholder="Email" name="userEmail" required>
                </div>
                                    
                                    
                <div id="form-group">
                    <label style="display:inline-block;text-align: right;width: 130px;"> Password :</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" name="userPassword" required>
                </div>

                <div id="form-group">
                  <label style="display:inline-block;text-align: right;width: 130px;"> Confirm Password :</label>
                  <input type="password" class="form-control" id="confirmed_password" placeholder="confirmed Password" name="confirmedPassword" required>
                </div>

                <div id="form-button flex-row align-items-center justify-content-between">
                    <button type="submit" class="btn btn-primary" style="background: #82bdcf;" style="padding: 0.6rem 1.2rem;" style="border: 2px solid #557d89;">Create Account</button>
                    
                </div>
            </form>
        </div>
    </div>
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
          const nameData=res.body.name
          renderHomePage();
          renderNavBar(nameData);
          console.log(res.data);
          
        })
        .catch((error) => {
          console.log(error);

          if (error.response.status === 400) {
            console.log(error.response);
            const errorMessage = document.createElement("div");
            errorMessage.innerHTML = `
              
              <h2>Error : ${error.response.data.message}</h2>
         
            `;
            errorMessage.style.color = "red";
            errorMessage.style.textAlign = "center";
            errorMessage.style.backgroundColor="white"

            page.replaceChildren(form,errorMessage);
          }
        });

      //if confirm password value & password value not matching
    } else {
      const errorMessage = document.createElement("div");
 
      errorMessage.innerHTML = `
              <h2>Passwords are not matching</h2>
            `;
      errorMessage.style.color = "red";
      errorMessage.style.textAlign = "center";
      errorMessage.style.backgroundColor="white"

      page.replaceChildren(form,errorMessage);
    }
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
  card.style.border = "0.40rem solid ";
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


  changeToLoginFormBtn()
}



function changeToLoginFormBtn(){
      //Login button to go to userLogin()
      const loginBtn=document.getElementById('form-button flex-row align-items-center justify-content-between')
      const login_button=document.createElement('div');
      login_button.id='userRegister';
      login_button.innerHTML=`
      <button id="login_page"  class="btn btn-primary" style="background:#82bdcf;" style="padding: 0.6rem 1.2rem;" style="border: 2px solid #da5767;">Login</button>
        `;
      login_button.addEventListener('click',()=>userLogin())
      loginBtn.appendChild(login_button)
}

export { userRegister };