import { renderTripList } from "./tripList.js";

function addTripForm() {
  const page = document.getElementById("page");
  const form = document.createElement("div");
  form.innerHTML = `
              
        <div class="formbold-main-wrapper">
          <div class="formbold-form-wrapper">
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <h1 style="text-align: center;">New Trip</h1><br>
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
                    <input type="text" name="destinations" class="formbold-form-input" id="destinations"/>
                    <button id="addMoreDestinations" class="add-destinations-btn">Add More</button><br>
                    <ul id="destinationList">
                </div>
        

                <div style="text-align: center;">
                    <input class="formbold-btn" type="submit" value="Save New Trip">
                    <button class="formbold-btn"><a  href="/"> Cancel </a></button>
                </div>
            </form>
          </div>
        </div>
      `;
      const errorMessage = document.createElement("h3");
      page.replaceChildren(form, errorMessage);
    
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
    }
export { addTripForm };