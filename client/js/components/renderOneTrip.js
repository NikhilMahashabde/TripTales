import { renderTripList } from "./tripList.js";
import { renderEditForm } from "./renderEditForm.js";

//ONE TRIP
//render one trip
// function renderTrip(trip) {
//   const tripCard = document.createElement("div");
//   tripCard.id='tripCard';
//   tripCard.classList.add("trip");
//   //render trip name
//   const name = document.createElement("h2");
//   name.textContent = trip.name;

//   // create variable with date settings
//   const dateSettings = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   };
//   // render start date
//   const startDate = document.createElement("p");
//   startDate.textContent = `Departure: ${new Date(trip.startDate).toLocaleString(
//     undefined,
//     dateSettings
//   )}`;
//   // render end date
//   const endDate = document.createElement("p");
//   endDate.textContent = `Return: ${new Date(trip.endDate).toLocaleString(
//     undefined,
//     dateSettings
//   )}`;

//   // create ul for destinations
//   const destinationsList = document.createElement("ul");
//   // loop through destinations array and add each destination to the list
//   for (let i = 0; i < trip.destinations.length; i++) {
//     // create li
//     const destinationItem = document.createElement("li");
//     // update the text content
//     destinationItem.textContent = trip.destinations[i];
//     destinationItem.className = `destination-item`;
//     // append it to ul
//     destinationsList.appendChild(destinationItem);
//   }

//   // render OpenAI tips
//   const tips = document.createElement("div");
//   const tipsTitle = document.createElement("h3");
//   tipsTitle.textContent = "OpenAI Tips";
//   tips.innerHTML = trip.tips;

//   // DELETE BTN
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.addEventListener("click", () => {
//     axios.delete(`/api/trips/${trip._id}`).then((_) => {
//       renderTripList();
//     });
//   });

//   //edit trip
//   const editDiv = document.createElement("div");
//   //add trip id to the trip div
//   editDiv.id = `edit-trip-${trip._id}`;
//   //create edit button
//   const editBtn = document.createElement("button");
//   editBtn.textContent = "Edit";
//   // add event listener
//   editBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     //render edit form
//     renderEditForm(trip);
//   });
//   //append edit button to edit div
//   editDiv.append(editBtn);

//   //append all the things \o/
//   tripCard.append(
//     name,
//     startDate,
//     endDate,
//     destinationsList,
//     tipsTitle,
//     tips,
//     deleteBtn,
//     editDiv
//   );

//   tripCard.style="margin-top:100px;"
//   return tripCard;
// }


function renderTrip(trip){

  const page=document.getElementById('page');

  // for(let i = 0; i < trip.length; i++) {
    const tripCard = document.createElement("div");
    tripCard.id='tripCard';
    tripCard.classList.add("trip");

    page.innerHTML=`
              <div class="card mb-3" style="max-width: 900px; margin-top:100px ">
                <div class="row g-0">
                    <div class="col-md-4">
                      <img class="img-fluid rounded-start" src="assets/img/sampleimg.jpeg" alt="...">
                    </div>
                    <div class="col-md-8" style="background-color: cream">
                      <div class="card-body">
                        <h5 class="card-title">${trip.name}</h5>
                        <div class="card-text">
                        <div class="font-size-sm" ><span class="text-muted mr-2" id="startDate"></span></div>
                        <div class="font-size-sm" ><span class="text-muted mr-2" id="endDate"></span></div>
                        <h5 id="destinationsListId"></h5>
                        <p class="card-text">${trip.tips}</p>
                        <div class="card-body" id='tripCard_btn'>
                                <button id="edit-trip-${trip._id}" type="button" >Edit trip</button>
                                <button class="btn btn-outline-danger btn-sm btn-block mb-2" type="button" id='deleteBtn'>DELETE</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

                    `;

      // create variable with date settings
    const dateSettings = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    // render start date
    const startDateAdd=document.getElementById('startDate')
    const startDate = document.createElement("p");
    startDate.textContent = `Departure: ${new Date(trip.startDate).toLocaleString(
      undefined,
      dateSettings
    )}`;
    startDateAdd.appendChild(startDate)
    // render end date
    const endDateAdd=document.getElementById('endDate')
    const endDate = document.createElement("p");
    endDate.textContent = `Return: ${new Date(trip.endDate).toLocaleString(
      undefined,
      dateSettings
    )}`;
    endDateAdd.appendChild(endDate)

    // const edit_itemId=document.getElementById('edit-trip-id');
    // edit_itemId.repla


    const destinationsListId=document.getElementById('destinationsListId')
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
    destinationsListId.appendChild(destinationsList)


    // page.appendChild(tripCard)

    //delete btn
    const deleteBtn=document.getElementById('deleteBtn')
    deleteBtn.addEventListener("click", () => {
      axios.delete(`/api/trips/${trip._id}`).then((_) => {
        renderTripList();
      });
    });
  

    const editBtn=document.getElementsById(`edit-trip-${trip._id}`);
    console.log(editBtn)
    editBtn.addEventListener("click", (event) => {
          event.preventDefault();
          //render edit form
          renderEditForm(trip);
        });

        // const editBtn = document.querySelector(`.edit-trip-${trip._id}`);
        // editBtn.addEventListener("click", (event) => {
        //   event.preventDefault();
        //   // render edit form
        //   renderEditForm(trip);
        // });
        

  //   //edit
  // const editDiv = document.getElementById("tripCard_btn");
  // //create edit button
  // const editBtn = document.createElement("button");
  // editBtn.setAttribute("id",`edit-trip-${trip._id}`);
  // editBtn.setAttribute("class", "btn btn-outline-secondary btn-sm btn-block mb-2");
  // editBtn.textContent = "Edit Trip";
  // // add event listener
  // editBtn.addEventListener("click", (event) => {
  //   event.preventDefault();
  //   //render edit form
  //   renderEditForm(trip);
  // });
  // //append edit button to edit div
  // editDiv.append(editBtn);


   
  
  

}

export { renderTrip };

