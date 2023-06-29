import { renderLogout } from "./userlogoutform.js";
import { renderTripList } from "./tripList.js";

function renderNavBar(userData) {
  const navBar = document.getElementById("header-nav");
  if (userData) {
    navBar.innerHTML = `
            <nav>
                <ul id="header-icon-list">
                  
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">About</a></li>
                        <h3>Travel Planner</h3>
                        <li><a href="/">Team</a></li>
                        <li><a href="">Contact</a></li>
                        <li><h3 style="color: black">Hi ${userData.name}</h3></li>
                        <li id="renderLogout" style="color: black">Logout</li>
                </ul>
            </nav>
            `;
    document
      .getElementById("renderLogout")
      .addEventListener("click", () => renderLogout());
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
