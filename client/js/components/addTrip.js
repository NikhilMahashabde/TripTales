import { renderTripList } from "./tripList.js";

function addTripForm() {
  const page = document.getElementById("page");
  const form = document.createElement("div");
  form.innerHTML = `
              
        <div class="formbold-main-wrapper">
          <div class="formbold-form-wrapper">
            <form action="https://formbold.com/s/FORM_ID" method="POST" name="add-trip-form">
              <h1 style="text-align: center;">New Trip</h1><br>
              <div id="error-message-pop"></div>
                <div class="formbold-mb-5">
                    <label for="trip-name" class="formbold-form-label"> Name :</label>
                    <input type="text" name="trip-name" class="formbold-form-input" id="name" name="name" required/>
                </div>

                <div class="flex flex-wrap formbold--mx-3">
                  <div class="w-full sm:w-half formbold-px-3">
                    <div class="formbold-mb-5 w-full">
                      <label for="startDate" class="formbold-form-label"> Start Date </label>
                      <input type="date" name="startDate" class="formbold-form-input" id="startDate" required/>
                    </div>
                  </div>
                  <div class="w-full sm:w-half formbold-px-3">
                    <div class="formbold-mb-5 w-full">
                      <label for="endDate" class="formbold-form-label"> End Date </label>
                      <input type="date" name="endDate" class="formbold-form-input" id="endDate" required/>
                    </div>
                  </div>
                </div>
            
                <div class="formbold-mb-5">
                    <label for="destinations" class="formbold-form-label"> Destination :</label>
                    <input type="text" name="destinations" class="formbold-form-input" id="destinations" required/>
                    <button id="addMoreDestinations" class="add-destinations-btn">Add More</button><br>
                    <ul id="destinationList">
                </div>
        

                <div style="text-align: center;">
                    <input class="formbold-btn" type="submit" value="Save New Trip">
                    <button id="cancelBtn" class="formbold-btn"> Cancel </button>
                </div>
            </form>
          </div>
        </div>
   `;
   
  const errorMessage = document.createElement("h3");
  page.replaceChildren(form, errorMessage);



const addMoreDestinationsButton = document.getElementById("addMoreDestinations");
const inputDestination = document.getElementById("destinations");
const errorDiv=document.getElementById("error-message-pop")

//if there is no input value button should be enabled
let buttonEnabled = false; 

inputDestination.addEventListener("input", stateHandle);
function stateHandle() {
  const currentinputValue = inputDestination.value.trim();
  if (currentinputValue === "") {
    buttonEnabled = false;
  } else {
    buttonEnabled = true;
  }
}

addMoreDestinationsButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (buttonEnabled) {
    errorDiv.setAttribute('hidden','')
    // Get list element
    const destinationList = document.getElementById("destinationList");
    // Create new list item element
    const newDestination = document.createElement("li");
    // Set class name for list item
    newDestination.className = "destination-item";
    // Set text content to the value of the input
    newDestination.textContent = inputDestination.value;
    // Append new list item to the list
    destinationList.appendChild(newDestination);
    // Clear input
    inputDestination.value = "";
    // Disable the button after adding a destination
    buttonEnabled = false;
  }
  else{
    //empty value clicked button pop up error message
    errorDiv.removeAttribute('hidden','')
    const errorMessage = document.createElement('p');
    errorMessage.innerHTML="Please input some destinations";
    errorMessage.style='color:red; text-align: center;';
    errorDiv.replaceChildren(errorMessage,errorMessage)
  }
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
      name: formData.get("trip-name"),
      destinations,
      startDate: new Date(formData.get("startDate")),
      endDate: new Date(formData.get("endDate")),
    };
    console.log(data);
    const loadingDiv = document.createElement("div");
    loadingDiv.setAttribute('class','loader')
    page.replaceChildren(loadingDiv);

    axios
      .post("/api/trips", data)
      .then((response) => {
        renderTripList();
      })
      .catch((error) => {
        errorMessage.textContent = "Something went wrong. Please try again.";
      });
   });

// cancel button to back renderTripList page
   const cancelBtn = document.getElementById('cancelBtn');
   cancelBtn.addEventListener('click', (event) => {
     event.preventDefault();
     const page = document.getElementById("page");
     page.innerHTML = renderTripList();
   });

}


export { addTripForm };


