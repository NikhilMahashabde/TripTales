import { renderTripList } from "./tripList.js";

function addTripForm() {
  const page = document.getElementById("page");
  const heading = document.createElement("h1");
  heading.textContent = "New Trip";
  const form = document.createElement("form");
  form.innerHTML = `
  <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required><br>

    <label for="startDate">Start Date:</label><br>
    <input type="date" id="startDate" name="startDate" required><br>
    <label for="endDate">End Date:</label><br>
    <input type="date" id="endDate" name="endDate" required><br>

    <label for="destinations">Destinations:</label><br>
    <input type="text" id="destinations" name="destinations"><button id="addMoreDestinations">Add More</button><br>
    <ul id="destinationList">
    </ul>

    <input type="submit" value="Save New Trip">
  `;
  const errorMessage = document.createElement("h3");
  page.replaceChildren(heading, form, errorMessage);

  const addMoreDestinationsButton = document.getElementById(
    "addMoreDestinations"
  );
  addMoreDestinationsButton.addEventListener("click", (event) => {
    event.preventDefault();
    //get list elm
    const destinationList = document.getElementById("destinationList");
    //create new list item elm
    const newDestination = document.createElement("li");
    // set class name for list item
    newDestination.className = "destination-item";
    //set text content to value of input
    newDestination.textContent = document.getElementById("destinations").value;
    //append new list item to list
    destinationList.appendChild(newDestination);
    //clear input
    document.getElementById("destinations").value = "";
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // get destinations data and convert to array
    // push text content to destinations array
    const destinations = [];
    const destinationItems = document.querySelectorAll(".destination-item");
    // for each destination, get the text content
    destinationItems.forEach((item) => {
      destinations.push(item.textContent);
    });
    if (destinations < 1) {
      alert("Please enter at least one destination.");
      return;
    }
    const data = {
      name: formData.get("name"),
      destinations,
      startDate: new Date(formData.get("startDate")),
      endDate: new Date(formData.get("endDate")),
    };
    console.log(data);
    axios
      .post("/api/trips", data)
      .then((response) => {
        renderTripList();
      })
      .catch((error) => {
        errorMessage.textContent = "Something went wrong. Please try again.";
      });
  });
}
export { addTripForm };
