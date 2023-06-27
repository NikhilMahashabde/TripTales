//WIP - working on destination implementation

import getTips from "./getTips.js";

//ALL TRIPS
// render trip list
function renderTripList() {
  const page = document.getElementById("page");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Loading";
  page.replaceChildren(paragraph);

  axios.get("/api/trips").then((response) => {
    const listElements = response.data.map((trip) => renderTrip(trip));
    page.replaceChildren(...listElements);
  });
}

//ONE TRIP
//render one trip
function renderTrip(trip) {
  const tripCard = document.createElement("div");
  tripCard.classList.add("trip");
  //render trip name
  const name = document.createElement("h2");
  name.textContent = trip.name;

  const destinations = document.createElement("h4");
  // loop through destinations array and add each destination to the list
  for (let i = 0; i < trip.destinations.length; i++) {
    destinations.textContent = trip.destinations[i];
  }
  // render start date
  const startDate = document.createElement("p");
  startDate.textContent = trip.startDate;
  // render end date
  const endDate = document.createElement("p");
  endDate.textContent = trip.endDate;
  // render OpenAI tips
  const tips = document.createElement("p");
  tips.textContent = trip.tips;

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    axios.delete(`api/trips/${trip._id}`).then((_) => {
      renderTripList();
    });
  });

  //edit trip
  const editDiv = document.createElement("div");
  //add trip id to the trip div
  editDiv.id = `edit-trip-${trip._id}`;
  //create edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  // add event listener
  editBtn.addEventListener("click", () => {
    renderEditForm(trip);
  });
  //append edit button to edit div
  editDiv.append(editBtn);

  //append all the things \o/
  tripCard.append(
    name,
    destinations,
    startDate,
    endDate,
    tips,
    deleteBtn,
    editDiv
  );
  return tripCard;
}

//EDIT TRIP FORM
//render edit form
// TODO: Test the destinations part for the edit form
function renderEditForm(trip) {
  //create form
  const form = document.createElement("form");
  form.innerHTML = `
        <label for="name">Name:</label><br>
        <input type="text" name="name" value="${trip.name}" required><br>
        <label for="destinations">Destinations:</label><br>
        <input type="text" id="destinations" name="destinations" value="${trip.destinations}"><button id="addMoreDestinations">Add More</button><br>
        <ul id="destinationList">
        </ul>
        <label for="start-date">Start Date: </label><br>
        <input type="date" name="start-date" value="${trip.startDate}" required><br>
        <label for="end-date">End Date: </label><br>
        <input type="date" name="end-date" value="${trip.endDate}" required><br>
        <input type="submit" value="Save Trip">
`;

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

  // add event listener to form
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
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
      startDate: new Date(formData.get("start-date")),
      endDate: new Date(formData.get("end-date")),
      tips: getTips,
    };
    // console.log(data);
    axios
      .put(`/api/trips/${trip._id}`, data)
      .then((_) => {
        renderTripList();
      })
      .catch((error) => {
        console.log(error);
      });
  });
  document.getElementById(`edit-trip-${trip._id}`).replaceChildren(form);
}

// export module
export { renderTripList };
