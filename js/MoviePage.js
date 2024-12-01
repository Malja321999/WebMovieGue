import { movies } from "./DataMovie.js";

/* function pembuat movie-page */
const moviepage = document.getElementsByClassName("moviepage")[0];
moviepage.innerHTML = "";

export function ShowPageMovie(TittleMovie) {
  console.log(TittleMovie);
  movies.forEach((movie) => {
    if (movie.title.includes(TittleMovie)) {
      const movieDiv = document.createElement("div");
      movieDiv.innerHTML = `<h1 style='text-align: center; background-color: skyblue; color: #080808; padding: 10px' >Movie Page ${movie.title}</h1>`;
      moviepage.appendChild(movieDiv);
    }
  });
}
