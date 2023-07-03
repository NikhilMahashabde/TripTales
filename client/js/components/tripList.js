import { renderTrip } from "./renderOneTrip.js";

//ALL TRIPS
// render trip list
function renderTripList() {
  const page = document.getElementById("page");
  const loadingDiv = document.createElement("div");
  loadingDiv.setAttribute("class", "loader");
  page.replaceChildren(loadingDiv);

  axios.get("/api/trips").then((response) => {
    const listElements = response.data.data.map((trip) => renderTrip(trip));
    listElements.forEach((element) => {
      if (element instanceof Node) {
        page.appendChild(element);
      }
    });
    loadingDiv.setAttribute("class", "");
  });
}

export { renderTripList };
