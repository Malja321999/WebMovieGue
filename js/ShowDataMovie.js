const movies = [
  {
    id: 1,
    jenis: "Movie",
    img: "../images/p-1.jpg",
    url: "../page/movie-page-paranormal.html",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidemeum distinctio eius maxime. Commodi omnis ab accusamus officia nisi, voluptate quibusdam repudiandae tenetur cumque libero necessitatibus itaque numquam, tempore esse enim eum facilis saepe totam? Sit quasi aspernatur non quam quisquam ea beatae laudantium, esse recusandae, excepturi consequuntur! Velit, ut.",
    year: "2014",
    title: "Paranormal Activity: The Marked Ones",
    categories: ["Horror", "Mistery", "Thriller"],
    rating: "5.2",
  },
  {
    id: 2,
    jenis: "Movie",
    img: "../images/p-2.jpg",
    url: "../page/movie-page-pirates.html",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidemeum distinctio eius maxime. Commodi omnis ab accusamus officia nisi, voluptate quibusdam repudiandae tenetur cumque libero necessitatibus itaque numquam, tempore esse enim eum facilis saepe totam? Sit quasi aspernatur non quam quisquam ea beatae laudantium, esse recusandae, excepturi consequuntur! Velit, ut.",
    year: "2017",
    title: "Pirates of the Caribbean: Salazar's Revenge",
    categories: ["Action", "Adventure", "Fantasy"],
    rating: "6.5",
  },
  {
    id: 3,
    jenis: "Movie",
    img: "../images/p-3.jpg",
    url: "../page/movie-page-blood-shot.html",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidemeum distinctio eius maxime. Commodi omnis ab accusamus officia nisi, voluptate quibusdam repudiandae tenetur cumque libero necessitatibus itaque numquam, tempore esse enim eum facilis saepe totam? Sit quasi aspernatur non quam quisquam ea beatae laudantium, esse recusandae, excepturi consequuntur! Velit, ut.",
    year: "2020",
    title: "BloodShot",
    categories: ["Action", "Sci-Fi", "Thriller"],
    rating: "6.7",
  },
  {
    id: 4,
    jenis: "Movie",
    img: "../images/p-4.jpg",
    url: "../page/movie-page-venom.html",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidemeum distinctio eius maxime. Commodi omnis ab accusamus officia nisi, voluptate quibusdam repudiandae tenetur cumque libero necessitatibus itaque numquam, tempore esse enim eum facilis saepe totam? Sit quasi aspernatur non quam quisquam ea beatae laudantium, esse recusandae, excepturi consequuntur! Velit, ut.",
    year: "2021",
    title: "Venom: Let There Be Carnage",
    categories: ["Action", "Adventure", "Fantasy"],
    rating: "7.4",
  },
  {
    id: 5,
    jenis: "Movie",
    img: "../images/p-5.jpg",
    url: "../page/movie-page-deadpool2.html",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidemeum distinctio eius maxime. Commodi omnis ab accusamus officia nisi, voluptate quibusdam repudiandae tenetur cumque libero necessitatibus itaque numquam, tempore esse enim eum facilis saepe totam? Sit quasi aspernatur non quam quisquam ea beatae laudantium, esse recusandae, excepturi consequuntur! Velit, ut.",
    year: "2018",
    title: "Deadpool 2",
    categories: ["Action", "Sci-Fi", "Thriller"],
    rating: "8.8",
  },
  {
    id: 6,
    jenis: "Movie",
    img: "../images/p-6.jpg",
    url: "../page/movie-page-blackwidow.html",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidemeum distinctio eius maxime. Commodi omnis ab accusamus officia nisi, voluptate quibusdam repudiandae tenetur cumque libero necessitatibus itaque numquam, tempore esse enim eum facilis saepe totam? Sit quasi aspernatur non quam quisquam ea beatae laudantium, esse recusandae, excepturi consequuntur! Velit, ut.",
    year: "2021",
    title: "Black Widow",
    categories: ["Adventure", "Drama", "Sci-Fi"],
    rating: "8.6",
  },
  {
    id: 7,
    jenis: "Anime",
    img: "../images/p-6.jpg",
    url: "../page/movie-page-blackwidow.html",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidemeum distinctio eius maxime. Commodi omnis ab accusamus officia nisi, voluptate quibusdam repudiandae tenetur cumque libero necessitatibus itaque numquam, tempore esse enim eum facilis saepe totam? Sit quasi aspernatur non quam quisquam ea beatae laudantium, esse recusandae, excepturi consequuntur! Velit, ut.",
    year: "2021",
    title: "Anime",
    categories: ["Adventure", "Drama", "Sci-Fi"],
    rating: "8.6",
  },
];

/* function to slider swiper */
let swiperWrapper = document.getElementsByClassName("swiper-wrapper")[0];
let swipermovies = movies.slice(0, 6); // Take the first 6 items

swipermovies.forEach((movie) => {
  let movieDiv = document.createElement("div");
  movieDiv.className = "swiper-slide";
  movieDiv.innerHTML = `
    <div class="swiper-slide">
      <!--box------------------->
      <div class="main-slider-box">
        <!--overlay-------->
        <a href="${movie.url}" class="main-slider-overlay">
          <i class="fas fa-play"></i>
        </a>
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
                ${movie.categories
                  .map((category) => `<a href="#">${category}</a>`)
                  .join(", ")}
              </div>
              <!--rating--->
              <div class="rating">
                ${movie.rating} <img alt="imbd" src="images/IMDb-icon.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
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

  movies.forEach((movie) => {
    let movieDiv = document.createElement("div");
    movieDiv.className = "post-box all movies";
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
            ${movie.categories
              .map((category) => `<a href="#">${category}</a>`)
              .join(", ")}
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

/* function to show render movie by menu */
function showMoviesByCategory(jenisMenuMovie) {
  post.innerHTML = "";
  console.log(jenisMenuMovie);
  movies.forEach((movie) => {
    if (movie.jenis.includes(jenisMenuMovie)) {
      let movieDiv = document.createElement("div");
      movieDiv.className = "post-box all movies";
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
                ${movie.categories
                  .map((category) => `<a href="#">${category}</a>`)
                  .join(", ")}
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
}
