
    var nav = document.getElementById("nav-bar");
        const navbar = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a href="index.html">
                    <img src="assets/images/logo.png" alt="Logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0 fw-bold">
                        <li class="nav-item me-3"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item me-3"><a class="nav-link" href="aboutus.html">About Us</a></li>
                        <li class="nav-item me-3"><a class="nav-link" href="courses.html">Courses</a></li>
                        <li class="nav-item me-3"><a class="nav-link" href="news.html">News</a></li>
                        <li class="nav-item me-3"><a class="nav-link" href="contactus.html">Contact Us</a></li>
                    </ul>
                    <a href="apply-now.html" target="_blank" class="btn apply-now-btn fw-bold p-2 rounded-pill text-light" style="">APPLY NOW</a>
                </div>
            </div>
        </nav>`;
        nav.innerHTML = navbar;