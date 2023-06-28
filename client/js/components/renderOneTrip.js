import { renderTripList } from "./tripList.js";
import { renderEditForm } from "./renderEditForm.js";

//ONE TRIP
//render one trip
function renderTrip(trip) {
  const tripCard = document.createElement("div");
  tripCard.classList.add("trip");
  //render trip name
  const name = document.createElement("h2");
  name.textContent = trip.name;

  // create variable with date settings
  const dateSettings = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // render start date
  const startDate = document.createElement("p");
  startDate.textContent = `Departure: ${new Date(trip.startDate).toLocaleString(
    undefined,
    dateSettings
  )}`;
  // render end date
  const endDate = document.createElement("p");
  endDate.textContent = `Return: ${new Date(trip.endDate).toLocaleString(
    undefined,
    dateSettings
  )}`;

  // create ul for destinations
  const destinationsList = document.createElement("ul");
  // loop through destinations array and add each destination to the list
  for (let i = 0; i < trip.destinations.length; i++) {
    // create li
    const destinationItem = document.createElement("li");
    // update the text content
    destinationItem.textContent = trip.destinations[i];
    destinationItem.className = `destination-item`;
    // append it to ul
    destinationsList.appendChild(destinationItem);
  }

  // render OpenAI tips
  const tips = document.createElement("div");
  const tipsTitle = document.createElement("h3");
  tipsTitle.textContent = "OpenAI Tips";
  tips.innerHTML = trip.tips;

  // DELETE BTN
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    axios.delete(`/api/trips/${trip._id}`).then((_) => {
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
  editBtn.addEventListener("click", (event) => {
    event.preventDefault();
    //render edit form
    renderEditForm(trip);
  });
  //append edit button to edit div
  editDiv.append(editBtn);

  //append all the things \o/
  tripCard.append(
    name,
    startDate,
    endDate,
    destinationsList,
    tipsTitle,
    tips,
    deleteBtn,
    editDiv
  );
  return tripCard;
}

export { renderTrip };
