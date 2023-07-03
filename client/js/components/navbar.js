import { renderLogout } from "./userlogoutform.js";
import { addTripForm } from "./addTrip.js";

function renderNavBar(name) {
  const navBar = document.getElementById("header-nav");

  if (name) {
    navBar.innerHTML = `
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style="background-color:rgba(192, 192, 192, 0.95)">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="/" style="color:black;">TripTales</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" style="color: black">Hi ${name}!</a></li>
                    <li class="nav-item" id="renderAddTrip"><a class="nav-link" href="" style="color: black">Add Trip</a></li>
                    <li class="nav-item" id="renderLogout"><a class="nav-link" href="" style="color: black">Logout</a></li>

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
      .addEventListener("click", (event) => {
        event.preventDefault();
        addTripForm();
      });
  } else {
    navBar.innerHTML = `
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style="background-color:rgba(192, 192, 192, 0.98)">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="/">Home</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" id="airplane_icon"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item" id="airplane_icon"><a  class="nav-link" href="#projects">Project Details</a></li>
                    <li class="nav-item" id="airplane_icon"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;
  }
}

export { renderNavBar };
