var footer = document.querySelector("footer");
const foter = `
<footer class="footer">
<div class="container d-flex justify-content-between">
    <div class="row">
        <!-- About Section -->
        <div class="col-lg-4 col-md-6 mb-4 mainstart1">
            <div class="footer-logo">
                <img src="assets/images/logo-stroke.png" alt="Logo" style=" width: 80%; margin-right: 8px;">
            </div>
            <p class="mt-2">We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.</p>
            <ul class="list-unstyled contact-info lh-lg">
                <li ><i class="fa-solid fa-phone icon text-center pt-1 " style="color: #ffffff;"></i>+2 123 654 7898</li>
                <li><i class="fa-solid fa-location-dot icon text-center pt-1" style="color: #ffffff;"></i>25/B Milford Road, New York</li>
                <li><i class="fa-regular fa-envelope icon text-center pt-1" style="color: #ffffff;"></i>info@example.com</li>
            </ul>
        </div>

        <!-- Quick Links Section -->
        <div class="col-lg-2 col-md-6 ms-5 ps5 mainfooter">
            <h5 class="">Quick Links</h5>
            <ul class="list-unstyled footer-menu mt-4">
                <li><i class="fa-solid fa-play" style="color: #fdae1b;"></i><a href="index.html" class="text-decoration-none"> Home</a></li>
              <li><i class="fa-solid fa-play" style="color: #fdae1b;"></i><a href="aboutus.html" class="text-decoration-none"> About us</a></li>
              <li><i class="fa-solid fa-play" style="color: #fdae1b;"></i><a href="courses.html" class="text-decoration-none"> Courses</a></li>
              <li><i class="fa-solid fa-play" style="color: #fdae1b;"></i><a href="" class="text-decoration-none"> News</a></li>
              <li><i class="fa-solid fa-play" style="color: #fdae1b;"></i><a href="contactus.html" class="text-decoration-none"> Contact Us</a></li>
            </ul>
        </div>

        <!-- Newsletter Section -->
        <div class="col-lg-4 col-md-6 ms-5 ps-5 fnews">
            <h5 class=" ">Newsletter</h5>
            <p class="">Subscribe our newsletter to get latest update and news.</p>
            <form class="d-flex">
                <input class=" box1" type="email" placeholder="Your Email" required>
                <button class="btn subscribe-btn ms-1" type="submit">SUBSCRIBE NOW</button>
            </form>
        </div>
    </div>
    <!-- Footer Bottom Section -->
    
</div>
<div class="footer-bottom  ms-5 me-5">
  <p>© Copyright 2025 <span class="footer-logo">Excellent Coaching</span>. All Rights Reserved.</p>
  <div class="social-icons">
      <a href="#"><i class="bi bi-facebook"></i></a>
      <a href="#"><i class="bi bi-linkedin"></i></a>
      <a href="#"><i class="bi bi-instagram"></i></a>
      <a href="#"><i class="bi bi-youtube"></i></a>
      <a href="#"><i class="bi bi-whatsapp"></i></a>
  </div>
</div>
</footer>`;
footer.innerHTML = foter;
