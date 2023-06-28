import { renderTrip } from "./renderOneTrip.js";

//ALL TRIPS
// render trip list
function renderTripList() {
  const page = document.getElementById("page");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Loading";
  page.replaceChildren(paragraph);

  axios.get("/api/trips").then((response) => {
    const listElements = response.data.data.map((trip) => renderTrip(trip));
    page.replaceChildren(...listElements);
  });
}

// export module
export { renderTripList };
