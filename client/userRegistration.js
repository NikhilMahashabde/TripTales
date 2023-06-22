
// form
// css (optional or whatevs or bootstrap)

// form validation -
//      check if user inputs are not empty,
//      comply with our "reuirements e.g. The password must be a minimum of 8 characters, use letters, numbers and symbols. "
//      password and password verify  = same.

// axios stuff
// submit


function userRegister(){
    const page = document.getElementById("page")
    const divBox=document.createElement('div');
    const form = document.createElement("form");
    form.innerHTML = `
    <div id="container" style=">
        <div class="card" style="width:500px; height: auto;">
            <h2 style="padding-top: 1.5rem">Register</h2>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="name" placeholder="Name" name="userName" required>
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" id="email" placeholder="Email" name="userEmail" required>
                </div>
                                    
                                    
                <div class="form-group">
                    <input type="password" class="form-control" id="password" placeholder="Password" name="userPassword" required>
                </div>

                <div class="form-group">
                <input type="password" class="form-control" id="confirmed_password" placeholder="confirmed Password" name="confirmedPassword" required>
                </div>

                <div class="d-flex flex-row align-items-center justify-content-between">
                    <a href="#" id="userLoginLink"style="color: #333">Login</a>
                    <button type="submit" class="btn btn-primary" style="background: #da5767;" style="padding: 0.6rem 1.2rem;" style="border: 2px solid #da5767;">Create Account</button>
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
          email:formData.get("userEmail"),
          passwordPlane:formData.get("userPassword")
        };
 
       const confirmPassword=formData.get("confirmedPassword")

   //confirm password vale & password value matched
        if(userData.passwordPlane===confirmPassword){

        axios.post("/", userData).then((res) => {
            console.log(res.data)
         }).catch((error)=>{
            console.log(error)
            
          if (error.response.status === 400) {
            console.log(error.response)
            const errorMessage = document.createElement("div");
            const errorForm = document.createElement('form');
            errorMessage.innerHTML = `
              <h2>Error</h2>
              <p>${error.response.data.message}</p>
         
            `;
            errorMessage.style.color = 'red';
            errorMessage.style.textAlign = 'center';
            
            page.appendChild(errorMessage)
        }
    });
    
 //if confirm password vale & password value not matching
}else{
    const errorMessage = document.createElement("div");
            const errorForm = document.createElement('form');
            errorMessage.innerHTML = `
              <h2>Error</h2>
              <p>Passwords are not matching</p>
            `;
            errorMessage.style.color = 'red';
            errorMessage.style.textAlign = 'center';
            
            page.appendChild(errorMessage)

}
});

divBox.appendChild(form)
page.replaceChildren(divBox)

    page.style.position="relative";
    page.style.fontFamily='PT Sans, sans-serif';

    const formControl=document.getElementsByName('form-control')
        formControl.style.backgroundColor = "#f8f9fa";
        formControl.style.width = "300px";
        formControl.style.padding = "20px";
        formControl.style.marginBottom = "1.3rem";


    const card=document.getElementsByClassName('card')
        card.style.border='0.40rem solid #f8f9fa';
        card.style.top='10%';
        card.style.textAlign='center';


    const container=document.getElementById('container');
        container.style.border='5px solid';
        container.style.position='absolute';
        container.style.top='50%';
        container.style.left='50%';
        container.style.transform='translate(-50%, 0%)';
        container.style.padding='10px';

}