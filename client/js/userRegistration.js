

function userRegister(){
    const page = document.getElementById("page")
    const divBox=document.createElement('div');
    const form = document.createElement("form");
    form.innerHTML = `
    <div id="container" style="width:500px; height: 300px;">
        <div id="card" >
            <h2 style="padding-top: 1.5rem">Register</h2>
            <form>
                <div id="form-group">
                    <input type="text" class="form-control" id="name" placeholder="Name" name="userName" required>
                </div>
                <div id="form-group">
                    <input type="email" class="form-control" id="email" placeholder="Email" name="userEmail" required>
                </div>
                                    
                                    
                <div id="form-group">
                    <input type="password" class="form-control" id="password" placeholder="Password" name="userPassword" required>
                </div>

                <div id="form-group">
                <input type="password" class="form-control" id="confirmed_password" placeholder="confirmed Password" name="confirmedPassword" required>
                </div>

                <div class="d-flex flex-row align-items-center justify-content-between">
                    <a href="#" id="userLoginLink" style="color: #333">Login</a>
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
          email:formData.get("userEmail"),
          passwordPlane:formData.get("userPassword")
        };
 
       const confirmPassword=formData.get("confirmedPassword")

   //confirm password value & password value matched
        if(userData.passwordPlane===confirmPassword){

        axios.post("/register", userData).then((res) => {
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
    
 //if confirm password value & password value not matching
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

   
    const formControls = document.getElementsByClassName('form-control');
    for (let i = 0; i < formControls.length; i++) {
      formControls[i].style.backgroundColor = "#f8f9fa";
      formControls[i].style.width = "300px";
      formControls[i].style.padding = "20px";
      formControls[i].style.marginBottom = "1.3rem";
    }


    const card=document.getElementById('card')
        card.style.border='0.40rem solid ' ;
        card.style.borderColor='#838375 ';
        card.style.top='10%';
        card.style.textAlign='center';
        card.style.background='white'


    const container=document.getElementById('container');

        container.style.position='absolute';
        container.style.top='50%';
        container.style.left='50%';
        container.style.transform='translate(-50%, 0%)';
        container.style.padding='10px';

}
console.log("userRegistration function page is working") 