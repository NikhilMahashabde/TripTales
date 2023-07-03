import { renderLogout } from "./userlogoutform.js";
import { addTripForm } from "./addTrip.js";

function renderNavBar(name) {
  const navBar = document.getElementById("header-nav");

  console.log("name:", name);
  if (name) {
    navBar.innerHTML = `
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style="background-color:rgba(192, 192, 192, 0.7)">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="/">HOME</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" id="airplane_icon"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item" id="airplane_icon"><a  class="nav-link" href="#projects">Projects</a></li>
                    <li class="nav-item" id="airplane_icon"><a class="nav-link" href="#contact">Contact</a></li>
                    <li class="nav-item"><h3 class="nav-link" style="color: black">Hi ${name}</h3></li>
                    <li class="nav-link" id="renderLogout" style="color: black">Logout</li>
                    <li class="nav-link" id="renderAddTrip" style="color: black">Add trip</li>

                </ul>
            </div>
        </div>
    </nav>
    `;
    document
      .getElementById("renderLogout")
      .addEventListener("click", () => renderLogout());
    document
      .getElementById("renderAddTrip")
      .addEventListener("click", () => addTripForm());
  } else {
    navBar.innerHTML = `
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style="background-color:rgb(156, 156, 155,0.7)">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="/">HOME</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" id="airplane_icon"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item" id="airplane_icon"><a  class="nav-link" href="#projects">Projects</a></li>
                    <li class="nav-item" id="airplane_icon"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;
  }
}

export { renderNavBar };
