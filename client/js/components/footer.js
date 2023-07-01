export function renderFooter(){
    const footer=document.getElementById("footer");
    footer.innerHTML=`
    <!-- Contact-->
  <section class="contact-section bg-black" id="contact" >
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
  <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">GA Team Project3 2023</div></footer>
`;
}