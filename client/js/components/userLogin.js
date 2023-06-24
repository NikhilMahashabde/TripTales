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
                    <input type="email" class="form-control" placeholder="Email" name="userEmail" required>
                </div>                 
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Password" name="userPassword" required>
                </div>

                <div class="d-flex flex-row align-items-center justify-content-between">
                    <button type="submit" class="btn btn-primary" style="background:#82bdcf;" style="padding: 0.6rem 1.2rem;" style="border: 2px solid #da5767;">Login</button>
                    <a href="#" style="color: #333">Sign up</a>
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
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);

        if (error.response.status === 401 || error.response.status === 400) {
          console.log(error.response);
          const errorMessage = document.createElement("div");
          const errorForm = document.createElement("form");
          errorMessage.innerHTML = `
              <h2>Error</h2>
              <p>${error.response.data.message}</p>
         
            `;
          errorMessage.style.color = "red";
          errorMessage.style.textAlign = "center";

          page.appendChild(errorMessage);
        }
      });
  });

  divBox.appendChild(form);
  page.replaceChildren(divBox);

  page.style.position = "relative";
  page.style.fontFamily = "PT Sans, sans-serif";

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
}

export { userLogin };
