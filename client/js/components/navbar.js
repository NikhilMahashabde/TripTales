import { renderLogout } from "./userlogoutform.js";

function renderNavBar(nameData) {
  const navBar = document.getElementById("header-nav");

  axios.get("/login")
      .then((response)=>{
        console.log("check loginverifycation; ",response.data)

          navBar.innerHTML = `
            <nav>
                <ul id="header-icon-list">
                  
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">About</a></li>
                        <h3>Travel Planner</h3>
                        <li><a href="/">Team</a></li>
                        <li><a href="">Contact</a></li>
                        <li><h3 style="color: black">Hi ${nameData}</h3></li>
                        <li id="renderLogout" style="color: black">Logout</li>
                </ul>
            </nav>
            `;
            document.getElementById('renderLogout').addEventListener('click',()=>renderLogout())
        }).catch(()=>{
          
          navBar.innerHTML = `
            <nav>
                <ul id="header-icon-list">
                  
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">About</a></li>
                        <h3>Travel Planner</h3>
                        <li><a href="/">Team</a></li>
                        <li><a href="">Contact</a></li>
                      
                </ul>
            </nav>
            `;
})
}

export { renderNavBar };
