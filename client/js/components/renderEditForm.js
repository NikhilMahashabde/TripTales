import { renderTripList } from "./tripList.js";

//EDIT TRIP FORM
//render edit form

function renderEditForm(trip) {
  //create form
  const form = document.createElement("form");
  form.innerHTML = `
  <div id='edit-form-box-${trip._id}' >
          <label for="name">Name:</label><br>
          <input type="text" name="name" value="${trip.name}" required><br>
          
          <label for="start-date">Start Date: </label><br>
          <input type="date" name="start-date" value="${trip.startDate.split("T")[0]}" required><br>

          <label for="end-date">End Date: </label><br>
          <input type="date" name="end-date" value="${trip.endDate.split("T")[0]}" required><br>
  
          <label for="destinations">Destinations:</label><br>
          <input type="text" id="destinations-${trip._id}" name="destinations" value=" ">
          <button class='edit-form-btn-icon' >Add More</button><br>

          <ul id='destinationList-${trip._id}'>
          </ul>

          <input class='edit-form-btn-icon' type="submit" value="Save Trip">
          <button class='edit-form-btn-icon' id="cancel-${trip._id}" onclick="hideForm(event)"> Cancel </button>
  </div>

  `;

  const addMoreDestinationsButton = form.querySelector("button");

  if (addMoreDestinationsButton) {
    addMoreDestinationsButton.addEventListener("click", (event) => {
      event.preventDefault();
      //get list elm
      const destinationList = document.getElementById(
        `destinationList-${trip._id}`
      );
      //create new list item elm
      const newDestination = document.createElement("li");
      // set class name for list item
      newDestination.className = `destination-item`;
      //set text content to value of input
      newDestination.textContent = document.getElementById(
        `destinations-${trip._id}`
      ).value;
      //append new list item to list
      destinationList.appendChild(newDestination);
      //clear input
      document.getElementById(`destinations-${trip._id}`).value = "";
    });
  }

  // add event listener to form
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    // get destinations data and convert to array
    // push text content to destinations array
    const destinations = [];
    const destinationItems = document.querySelectorAll(
      `ul#destinationList-${trip._id} li`
    );
    // for each destination, get the text content
    destinationItems.forEach((item) => {
      destinations.push(item.textContent);
    });
    // if (destinationItems.length < 1) {
    //   alert("Please enter at least one destination.");
    //   return;
    // }
    const data = {
      name: formData.get("name"),
      destinations,
      startDate: formData.get("start-date"),
      endDate: formData.get("end-date"),
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
  document.getElementById(`edit-btn-div-${trip._id}`).replaceChildren(form);
}

function hideForm(event){
  event.preventDefault();
  document.getElementById(`edit-form-box-${trip._id}`).setAttribute('hidden','')
}

export { renderEditForm };
