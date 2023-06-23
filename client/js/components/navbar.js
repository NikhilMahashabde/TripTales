function renderNavBar() {
  const navBar = document.getElementById("header-nav");

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
}

export { renderNavBar };
