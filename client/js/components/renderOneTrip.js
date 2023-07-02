import { renderTripList } from "./tripList.js";
import { renderEditForm } from "./renderEditForm.js";
import {getUnsplashImage} from "./unsplashImages.js";


//ONE TRIP
//render one trip
function renderTrip(trip){

  const page=document.getElementById('page');


  const loadUnsplashImage = async (location) => {
    const imageUrl = await getUnsplashImage(location);  
    const imgElm = document.createElement("img");
    imgElm.src = imageUrl;
    // const imgPlaceholder = document.querySelector(".img-placeholder");
    const imgPlaceholder = document.getElementById(`img-unsplash-${trip._id}`);
    imgPlaceholder.appendChild(imgElm);
  }


    const tripCard = document.createElement("div");
    tripCard.id='tripCard';
    tripCard.classList.add("each-trip-container");

    tripCard.innerHTML=`
              <div class="card mb-3" style="max-width: 900px; margin-top:100px ">
                <div class="row g-0">
                    <div class="col-md-4 img-placeholder" id="img-unsplash-${trip._id}">

                    </div>
                    <div class="col-md-8" style="background-color: cream">
                      <div class="card-body">
                        <h5 class="card-title">${trip.name}</h5>
                        <div class="card-text">
                        <div class="font-size-sm" ><span class="text-muted mr-2" id="startDate-${trip._id}"></span></div>
                        <div class="font-size-sm" ><span class="text-muted mr-2" id="endDate-${trip._id}"></span></div>
                        <h5 id="destinationsListId-${trip._id}"></h5>
                        <p class="card-text">${trip.tips}</p>
                        <div class="card-body" id='tripCard_btn'>
                        <div id='edit-btn-div-${trip._id}' style="margin-buttom:50px">
                                <button class="btn btn-outline-info btn-sm btn-block mb-2" id="edit-trip-${trip._id}" type="button" style="width:200px">Edit trip</button>
                        </div>
                                
                                <button class="btn btn-outline-danger btn-sm btn-block mb-2" type="button" id='deleteBtn-${trip._id}'  style="width:200px">DELETE</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
                    `;
      // get image from unsplash
      loadUnsplashImage(trip.destinations[0]);

    
    page.appendChild(tripCard);

    // create variable with date settings

    const dateSettings = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    // render start date
    const startDateAdd=document.getElementById(`startDate-${trip._id}`)
    const startDate = document.createElement("p");
    startDate.textContent = `Departure: ${new Date(trip.startDate).toLocaleString(
      undefined,
      dateSettings
    )}`;
    startDateAdd.appendChild(startDate)
    // render end date
    const endDateAdd=document.getElementById(`endDate-${trip._id}`)
    const endDate = document.createElement("p");
    endDate.textContent = `Return: ${new Date(trip.endDate).toLocaleString(
      undefined,
      dateSettings
    )}`;
    endDateAdd.appendChild(endDate)

    const destinationsListId=document.getElementById(`destinationsListId-${trip._id}`)
    const destinationsList = document.createElement("ul");
    console.log("check destinations passing",trip.destinations)
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


    //delete btn
    const deleteBtn=document.getElementById(`deleteBtn-${trip._id}`)
    deleteBtn.addEventListener("click", () => {
      axios.delete(`/api/trips/${trip._id}`).then((_) => {
        renderTripList();
      });
    });
  

    const editBtn=document.getElementById(`edit-trip-${trip._id}`);
    console.log(editBtn)
    editBtn.addEventListener("click", (event) => {
          event.preventDefault();
          //render edit form
          renderEditForm(trip);
        });

}

export { renderTrip };

