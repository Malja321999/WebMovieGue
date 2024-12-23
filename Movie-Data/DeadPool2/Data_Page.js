import { movies } from "../../js/DataMovie.js";

const NamaMovie = "Deadpool 2";

document.addEventListener("DOMContentLoaded", function () {
  const moviePage = document.getElementById("movie_page");
  if (moviePage) {
    moviePage.innerHTML = "";
    console.log("jalan!");
    movies.map((movie) => {
      if (movie.title.includes(NamaMovie)) {
        const Div = document.createElement("div");
        Div.innerHTML = `<div id="movie_page">
    <!--==Navigation===================================-->
    <nav class="navigation">
        <!--logo------------------->
        <a href="/" class="logo">
            WeMovie<span>.hd</span>
        </a>

        <!--Search-box------------->
        <div class="search-box">
            <!--input-->
            <input type="text" name="search" placeholder="Search Movie" id="search" class="search-input" required />
            <!--btn-->
            <i class="fas fa-search"></i>
        </div>
        <div class="search_bx2"></div>
    </nav>

    <!--nav-end-->
    <!--==Movie-Banner=========================================-->
    <section class="movie-banner">
        <!--==img==================================-->
        <div class="m-banner-img">
            <img alt="" src=${movie.img}>
        </div>
        <!--content================================-->
        <div class="banner-container">
            <!--title-container*******************----->
            <div class="title-container">
                <!--title-top===============-->
                <div class="title-top">
                    <!--title----->
                    <div class="movie-title">
                        <h1>${movie.title}</h1>
                    </div>
                    <!--more-about-movie-->
                    <div class="more-about-movie">
                        <span class="quality">Full HD</span>
                        <div class="rating">
                            ${
                              movie.rating
                            }<img alt="imbd" src="../images/IMDb-icon.png">
                        </div>
                        <span>${movie.year}</span>
                        <span>${movie.duration}</span>
                    </div>
                    <!--language--------->
                    <div class="language">
                        <span>${movie.language}</span>
                    </div>
                </div>
                <!--Title-botttom==========================-->
                <div class="title-bottom">
                    <!--category------->
                    <div class="category">
                        <strong>Category</strong><br />
                        ${movie.Genre.map(
                          (genre) => `<a href="#">${genre}</a>`
                        ).join(", ")}
                    </div>
                    <!--trailer-btn---->
                    <a href="${
                      movie.trailer
                    }" target="_blank" class="watch-btn">Watch
                        Trailer</a>
                </div>
            </div>
        </div>
    </section>
    <!--Banner-end------------->
    <!--details=====================================-->
    <section class="movie-details">
        <strong>${movie.title}</strong>
        <p>${movie.summary}</p>
    </section>
    <!--==ScreenShots===============================-->
    <!-- <section class="screenshots">
        <strong>ScreenShots</strong>
        <div class="screen-s-container">
            <img alt="" src="../Movie-Data/Venom_Let _There_Be_Carnage/Venom.jpg">
            <img alt="" src="../Movie-Data/Venom_Let _There_Be_Carnage/Venom.jpg">
            <img alt="" src="../Movie-Data/Venom_Let _There_Be_Carnage/Venom.jpg">
            <img alt="" src="../Movie-Data/Venom_Let _There_Be_Carnage/Venom.jpg">
        </div>
    </section> -->
    <!--Download====================================-->
    <section class="download-movie">
        <!--container----------------->
        <div class="download-container">
            <!--box---->
            <div class="download-box">
                <span><i class="fas fa-server"></i> Server 1</span>
                <span>Indonesia</span>
                <span>480p</span>
                <a href=${movie.link480p} target="_blank">Download</a>
            </div>
            <!--box---->
            <div class="download-box">
                <span><i class="fas fa-server"></i> Server 2</span>
                <span>Indonesia</span>
                <span>720p</span>
                <a href=${movie.link720p} target="_blank">Download</a>
            </div>
            <!--box---->
            <div class="download-box">
                <span><i class="fas fa-server"></i> Server 3</span>
                <span>Indonesia</span>
                <span>1080p</span>
                <a href=${movie.link1080p} target="_blank">Download</a>
            </div>
        </div>
    </section>
    <!--==footer==============================-->
    <footer>
        <!--footer-logo--->
        <a href="/" class="logo">
            WeMovie<span>hd</span>
        </a>
        <!--copyright----->
        <span class="copyright">
            Copyright 2024 - MALJA
        </span>
    </footer>
</div>
`;
        moviePage.appendChild(Div);
      }
    });

    /* function to Render Result search bar*/
    let search_bx2 = document.getElementsByClassName("search_bx2")[0];

    function renderMoviesSearchBar(movies) {
      search_bx2.innerHTML = ""; // Clear previous movies
      movies.forEach((element) => {
        const { img, title, year, url } = element;

        let card = document.createElement("a");
        card.href = url;

        card.innerHTML = `<img src="${img}" alt="${title}"/>
    <div class="content2">
      <h6>${title}</h6>
      <p>${year}</p>
    </div>`;
        search_bx2.appendChild(card);
      });
    }
    /* function to search bar */
    let search = document.getElementById("search");
    console.log("isi cari:", search);
    if (search) {
      search.addEventListener("keyup", () => {
        let filter = search.value.toUpperCase();
        let filteredMovies = movies.filter((movie) =>
          movie.title.toUpperCase().includes(filter)
        );

        if (filter === "") {
          search_bx2.style.visibility = "hidden";
          search_bx2.style.opacity = 0;
        } else {
          search_bx2.style.visibility = "visible";
          search_bx2.style.opacity = 1;
        }

        renderMoviesSearchBar(filteredMovies);
      });
    }
  }
});
