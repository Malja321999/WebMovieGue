import { movies } from "./DataMovie.js";

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

addEventListener("DOMContentLoaded", () => {
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
});
