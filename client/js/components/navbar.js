import { renderLogout } from "./userlogoutform.js";
import { addTripForm } from "./addTrip.js";

function renderNavBar(name) {
  const navBar = document.getElementById("header-nav");

  console.log("name:", name);
  if (name) {
    navBar.innerHTML = `
            <nav>
                <ul id="header-icon-list">
                  
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">About</a></li>
                        <h3>Travel Planner</h3>
                        <li><a href="/">Team</a></li>
                        <li><a href="">Contact</a></li>
                        <li><h3 style="color: black">Hi ${name}</h3></li>
                        <li id="renderLogout" style="color: black">Logout</li>
                        <li id="renderAddTrip" style="color: black">Add trip</li>
                </ul>
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
            <nav>
                <ul id="header-icon-list">
                  
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">About</a></li>
                        <h3>Travel Planner</h3>
                        <li><a href="/">Team</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="/">Log in</a></li>
                        <li><a href="">Register</a></li>
                      
                </ul>
            </nav>
            `;
  }
}

export { renderNavBar };
