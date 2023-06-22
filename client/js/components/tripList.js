export function renderTripList() {
  const page = document.getElementById("page");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Loading";
  page.replaceChildren(paragraph);

  axios.get("/api/trips").then((response) => {
    const listElements = response.data.map((trip) => renderTrip(trip));
    page.replaceChildren(...listElements);
  });
}

function renderTrip(trip) {
  const el = document.createElement("div");
  el.classList.add("trip");

  const name = document.createElement("h2");
  name.textContent = trip.name;

  const destinations = document.createElement("h4");
  destinations.textContent = trip.destinations;

  const startDate = document.createElement("p");
  startDate.textContent = trip.startDate;

  const endDate = document.createElement("p");
  endDate.textContent = trip.endDate;

  const tips = document.createElement("p");
  tips.textContent = trip.tips;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    axios.delete(`api/trips/${trip._id}`).then((_) => {
      renderTripList();
    });
  });

  const editDiv = document.createElement("div");
  editDiv.id = `edit-challenge-${trip._id}`;
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    renderEditForm(trip);
  });
  editDiv.append(editButton);

  axios
    .get("/api/session")
    .then((_) => {})
    .catch((error) => {
      deleteButton.disabled = true;
      editButton.disabled = true;
    });

  el.append(
    name,
    destinations,
    startDate,
    endDate,
    tips,
    deleteButton,
    editDiv
  );
  return el;
}

function renderEditForm(trip) {
  const form = document.createElement("form");
  form.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" name="name" value="${trip.name}">
        <label for="start-date">Start Date: </label>
        <input type="date" name="start-date" value="${trip.startDate}">
        <label for="end-date">End Date: </label>
        <input type="date" name="end-date" value="${trip.endDate}">
        <label for="description">Notes: </label>
        <input type="text" name="notes" value="${trip.notes}">
        <input type="submit">
    `;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      notes: formData.get("notes"),
      startDate: formData.get("start-date"),
      endDate: formData.get("end-date"),
    };

    axios
      .put(`/api/trips/${trip._id}`, data)
      .then((_) => {
        renderTripList();
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // Extension (PATCH)
  form.querySelector('input[name="name"]').addEventListener("blur", (event) => {
    axios
      .patch(`/api/trips/${trip._id}`, { name: event.target.value })
      .then((_) => {
        renderTripList();
      })
      .catch((error) => {
        console.log(error);
      });
  });

  document.getElementById(`edit-trip-${trip._id}`).replaceChildren(form);
}
