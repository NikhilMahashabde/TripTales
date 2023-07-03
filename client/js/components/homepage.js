import { userLogin } from "/js/components/userLogin.js";
import { userRegister } from "/js/components/userRegistration.js";

function renderHomePage() {
  const homeSection = document.getElementById("page");

  homeSection.innerHTML = `

  <body id="page-top">


    
  <!-- Masthead-->
  <header class="masthead">
      <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div class="d-flex justify-content-center">
              <div class="text-center">
                  <h1 class="mx-auto my-0 text-uppercase" > TripTales </h1>
                  <h2 class="text-white-50 mx-auto mt-2 mb-5"> ~ with OpenAI ~ </h2>
                  <a class="btn btn-primary" ><p id="userRegister" style="width:150px">Sign up</p></a>
                  <a class="btn btn-primary"><p id="userLogin" style="width:150px">Login</p></a>
              </div>
          </div>
      </div>
  </header>
  <!-- About-->
  <section class="about-section text-center" id="about">
      <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-lg-8">
                  <h2 class="text-white mb-4">Travel Logger with tips from OpenAI</h2>
                  <p class="text-white-50">
                   We created a travel planner that can help you plan your trip with the help of OpenAI.
                    You add the destinations, and OpenAI will let you know 3 of the best things to do in each location.  
                  </p>
              </div>
          </div>
          <img class="img-fluid" src="./assets/img/paris.jpeg" alt="..." />
      </div>
  </section>
  <!-- Projects-->
  <section class="projects-section bg-light" id="projects">
      <div class="container px-4 px-lg-5">
          <!-- Featured Project Row-->
          <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
              <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="assets/img/italy.jpeg" alt="..." /></div>
              <div class="col-xl-4 col-lg-5">
                  <div class="featured-text text-center text-lg-left">
                      <h4>TripTales</h4>
                      <p class="text-black-50 mb-0">TripTales is the third project created by students for the General Assembly Software Engineering course.</p>
                  </div>
              </div>
          </div>
          <!-- Project One Row-->
          <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
              <div class="col-lg-6"><img class="img-fluid" src="assets/img/cappadocia.png" alt="..." /></div>
              <div class="col-lg-6">
                  <div class="bg-black text-center h-100 project">
                      <div class="d-flex h-100">
                          <div class="project-text w-100 my-auto text-center text-lg-left">
                              <h4 class="text-white">OpenAI</h4>
                              <p class="mb-0 text-white-50">Each destination added has 3 tips from OpenAI on what the user can explore, see and eat.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Project Two Row-->
          <div class="row gx-0 justify-content-center">
              <div class="col-lg-6"><img class="img-fluid" src="assets/img/greece.jpeg" alt="..." /></div>
              <div class="col-lg-6 order-lg-first">
                  <div class="bg-black text-center h-100 project">
                      <div class="d-flex h-100">
                          <div class="project-text w-100 my-auto text-center text-lg-right">
                              <h4 class="text-white">Unsplash</h4>
                              <p class="mb-0 text-white-50">
                              With the help of Unsplash's API, we can provide you with beautiful images of your destination.
                              Each page refresh you get a new image for the trip.
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>

  `;

  document
    .getElementById("userRegister")
    .addEventListener("click", () => userRegister());

  document
    .getElementById("userLogin")
    .addEventListener("click", () => userLogin());
}

export { renderHomePage };
