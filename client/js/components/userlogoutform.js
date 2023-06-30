import { renderHomePage } from "./homepage.js";
import { renderNavBar } from "./navbar.js";

function renderLogout() {
  axios.delete("/logout").then((res) => {
    document.cookie = `connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    if (res.data.oAuth) {
      window.location.href = "/logout";
    } else {
      renderNavBar(); //refreshing top main pages
      renderHomePage();
    }

    // add footer
  });
}
export { renderLogout };
