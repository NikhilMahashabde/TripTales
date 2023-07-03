import { renderFooter } from "/js/components/footer.js";
import { renderHomePage } from "/js/components/homepage.js";
import { renderNavBar } from "/js/components/navbar.js";
import { renderTripList } from "/js/components/tripList.js";

// global vars.
let userEmail;
let userName = "";
let isAuthenticated;

//initialise state of app.
axios
  .get("/api/session")
  .then((response) => {
    isAuthenticated = response.data.isAuthenticated;

    if (isAuthenticated) {
      userEmail = response.data.email;
      userName = response.data.name;
      renderNavBar(userName);
      renderTripList();
      renderFooter();
    } else {
      renderNavBar();
      renderHomePage();
      renderFooter();
    }
  })
  .catch(() => {});
