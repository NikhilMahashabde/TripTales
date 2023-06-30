import { renderHomePage } from "./homepage.js";
import { renderNavBar } from "./navbar.js";


function renderLogout() {
  axios.delete("/logout").then(() => {
    document.cookie = `connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    renderNavBar(); //refreshing top main pages
    renderHomePage();

  });
}
export { renderLogout };
