import { movies } from "./DataMovie.js";

/* function to slider swiper */
let swiperWrapper = document.getElementsByClassName("swiper-wrapper")[0];
let swipermovies = movies.slice(0, 6); // Take the first 6 items

swipermovies.forEach((movie) => {
  let movieDiv = document.createElement("div");
  movieDiv.className = "swiper-slide";
  movieDiv.innerHTML = `
  <a href="${movie.url}"><div>
      <!--box------------------->
      <div class="main-slider-box">
        <!--overlay-------->
        <div class="main-slider-overlay">
          <i class="fas fa-play"></i>
        </div>
        <!--img----------->
        <div class="main-slider-img">
          <img alt="Poster" src="${movie.img}" />
        </div>
        <!--text---------->
        <div class="main-slider-text">
          <!--quality----->
          <span class="quality">Full HD</span>
          <!--bottom-text-->
          <div class="bottom-text">
            <!--name----->
            <div class="movie-name">
              <span>${movie.year}</span>
              <a href="#"><strong>${movie.title}</strong></a>
            </div>
            <!--Category-and-rating---->
            <div class="category-rating">
              <!--category-->
              <div class="category">
                ${movie.Genre.map((genre) => `<a href="#">${genre}</a>`).join(
                  ", "
                )}
              </div>
              <!--rating--->
              <div class="rating">
                ${movie.rating} <img alt="imdb" src="images/IMDb-icon.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></a>
    `;

  // Adding event listener
  /* movieDiv.addEventListener("click", () => {
    console.log(`Movie title: ${movie.title}`);
  }); */

  swiperWrapper.appendChild(movieDiv);
});

/* function to search bar*/
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

let search = document.getElementById("search");
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

/* Function to render latest movie / allcategory */
let post = document.getElementsByClassName("post-container")[0];
function renderMovies() {
  movies.forEach((movie) => {
    let movieDiv = document.createElement("div");
    movieDiv.className = "post-box";
    movieDiv.innerHTML = `
    <div class="post-img">
      <img src="${movie.img}" alt="${movie.title}" />
    </div>
    <div class="main-slider-text">
      <div class="description">
        <div class="d-text">
          <h3>SUMMARY</h3>
          <a href="${movie.url}">${movie.summary}</a>
        </div>
      </div>
      <span class="quality">Full HD</span>
      <div class="bottom-text">
        <div class="movie-name">
          <span>${movie.year}</span>
          <span>${movie.title}</span>
        </div>
        <div class="category-rating">
          <div class="category">
            ${movie.Genre.map((genre) => `<a href="#">${genre}</a>`).join(", ")}
          </div>
          <div class="rating">
            ${movie.rating} <img alt="imbd" src="./images/IMDb-icon.png" />
          </div>
        </div>
      </div>
    </div>
  `;
    post.appendChild(movieDiv);
  });
}
renderMovies();

/* Close menu category */
var checkbox = document.getElementById("menu-btn");
let menu = document.getElementsByClassName("menu")[0];
menu.addEventListener("click", function () {
  if (checkbox.checked) {
    checkbox.checked = false;
  }
});

/* Set active class on menu category */
window.addEventListener("load", () => {
  // Add class active to the "All" menu element
  const menuAll = document.querySelector(".menuText-all");
  if (menuAll) {
    menuAll.classList.add("active");
  }
});

// Function to set active class on clicked menu element
function setActive(element) {
  // Get all elements with class menuText
  var menuTexts = document.querySelectorAll(".menuText");
  // Remove active class from all menuText elements
  menuTexts.forEach(function (text) {
    text.classList.remove("active");
  });
  // Add active class to the clicked element
  element.classList.add("active");
}

/* Event listener for menu category dan memasukkan input menu clik ke function showMoviesByCategory */
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menuText");

  menuItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const category = item.textContent.trim();
      showMoviesByCategory(category === "All" ? "" : category);
      setActive(item);
      window.location.href = "#hasilCategory";
    });
  });
});

/* function to show render movie by menu */
let hasil = document.getElementById("hasilCategory");
function showMoviesByCategory(jenisMenuMovie) {
  post.innerHTML = "";
  hasil.innerHTML = "";
  movies.forEach((movie) => {
    if (movie.jenis.includes(jenisMenuMovie)) {
      let movieDiv = document.createElement("div");
      movieDiv.className = "post-box";
      movieDiv.innerHTML = `
        <div class="post-img">
          <img src="${movie.img}" alt="${movie.title}" />
        </div>
        <div class="main-slider-text">
          <div class="description">
            <div class="d-text">
              <h3>SUMMARY</h3>
              <a href="${movie.url}">${movie.summary}</a>
            </div>
          </div>
          <span class="quality">Full HD</span>
          <div class="bottom-text">
            <div class="movie-name">
              <span>${movie.year}</span>
              <span>${movie.title}</span>
            </div>
            <div class="category-rating">
              <div class="category">
                ${movie.Genre.map((genre) => `<a href="#">${genre}</a>`).join(
                  ", "
                )}
              </div>
              <div class="rating">
                ${movie.rating} <img alt="imbd" src="./images/IMDb-icon.png" />
              </div>
            </div>
          </div>
        </div>
      `;
      post.appendChild(movieDiv);
    }
  });
  if (post.innerHTML.trim() === "") {
    hasil.innerHTML = `<h1 style="background-color: red; color: white; text-align: center; width: screen; padding: 10px">Movie Tidak Ditemukan Karena Belum DiPost </h1>`;
  }
}
