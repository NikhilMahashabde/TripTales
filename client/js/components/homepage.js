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
                  <h1 class="mx-auto my-0 text-uppercase">Project3</h1>
                  <h2 class="text-white-50 mx-auto mt-2 mb-5">~ Travel Planner 2023 with Open AI</h2>
                  <a class="btn btn-primary" ><p id="userRegister">Sign up</p></a>
                  <a class="btn btn-primary"><p id="userLogin">Login</p></a>
              </div>
          </div>
      </div>
  </header>
  <!-- About-->
  <section class="about-section text-center" id="about">
      <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-lg-8">
                  <h2 class="text-white mb-4">Make own travel plan with AI</h2>
                  <p class="text-white-50">
                  what is our idea -

                  destination input - dates -
                  
                  User's data / planning/ planner page -
                  
                  user's trips : { trip1: start date - end date - city - country - [optional params - ] start date - end date - city - country start date - end date - city - country }
                  
                  pick an activity/string, date, time, location - and then get chatgpt to suggest where to go and how.
                      <a href="https://github.com/NikhilMahashabde/Travel-Planner">Our git hub page.</a>
                      
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
                      <h4>Shoreline</h4>
                      <p class="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
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
                              <h4 class="text-white">Cappadocia</h4>
                              <p class="mb-0 text-white-50">Uçhisar Castle: Natural rock formation and fortress offer stunning views.
                              Pasabag:Mushroom-shaped rock formations, Pasabag is a fascinating place to visit .</p>
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
                              <h4 class="text-white">Greece</h4>
                              <p class="mb-0 text-white-50">
                              Oia:
                              Watch the sunset from the famous Byzantine Castle Ruins.
                              Fira:
                              Visit the Archaeological Museum for a glimpse of Santorini's rich history.
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!-- Signup-->
  
  <!-- Contact-->
  <section class="contact-section bg-black" id="contact">
      <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5">
              <div class="col-md-4 mb-3 mb-md-0">
                  <div class="card py-4 h-100">
                      <div class="card-body text-center">
                          <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                          <h4 class="text-uppercase m-0">Address</h4>
                          <hr class="my-4 mx-auto" />
                          <div class="small text-black-50">General Assembly</div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 mb-3 mb-md-0">
                  <div class="card py-4 h-100">
                      <div class="card-body text-center">
                          <i class="fas fa-envelope text-primary mb-2"></i>
                          <h4 class="text-uppercase m-0">Email</h4>
                          <hr class="my-4 mx-auto" />
                          <div class="small text-black-50"><a href="#!">travelPlanner@project3.com</a></div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 mb-3 mb-md-0">
                  <div class="card py-4 h-100">
                      <div class="card-body text-center">
                          <i class="fas fa-solid fa-user text-primary mb-2"></i>
                          <h4 class="text-uppercase m-0">Team</h4>
                          <hr class="my-4 mx-auto" />
                          <div class="small text-black-50">Lily, Nikhil, Misa</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="social d-flex justify-content-center">
              <a class="mx-2" style="color:lightblue" href="#!"><i class="fab fa-twitter"></i></a>
              <a class="mx-2" style="color:blue" href="#!"><i class="fab fa-facebook-f"></i></a>
              <a class="mx-2" style='color:black' href="https://github.com/NikhilMahashabde/Travel-Planner"><i class="fab fa-github"></i></a>
          </div>
      </div>
  </section>
  <!-- Footer-->
  <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; Your Website 2023</div></footer>

</body>

  
  
  `;

  document
  .getElementById("userRegister")
  .addEventListener("click", () => userRegister());

  document
  .getElementById("userLogin")
  .addEventListener("click", () => userLogin());
}

export { renderHomePage };
