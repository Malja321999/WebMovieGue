const movies = [
  {
    id: 1,
    img: "../images/p-1.jpg",
    title: "Paranormal",
    year: "2006",
    url: "../page/movie-page-pirates.html",
  },
  {
    id: 2,
    img: "../images/p-2.jpg",
    title: "Pirates of the Caribbean Salazar's Revenge",
    year: "2018",
    url: "../page/movie-page-venom.html",
  },
  {
    id: 3,
    img: "../images/p-3.jpg",
    title: "BloodShot",
    year: "2006",
    url: "../page/movie-page-pirates.html",
  },
  {
    id: 4,
    img: "../images/p-4.jpg",
    title: "Venom",
    year: "2018",
    url: "../page/movie-page-venom.html",
  },
  {
    id: 5,
    img: "../images/p-5.jpg",
    title: "Deadpool 2",
    year: "2006",
    url: "../page/movie-page-pirates.html",
  },
  {
    id: 6,
    img: "../images/p-6.jpg",
    title: "Black Widow",
    year: "2018",
    url: "../page/movie-page-venom.html",
  },
];

let search_bx2 = document.getElementsByClassName("search_bx2")[0];

window.addEventListener("load", () => {
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
});

let search = document.getElementById("search");
console.log("serc nih:", search);

search.addEventListener("keyup", () => {
  let filter = search.value.toUpperCase();
  let a = search_bx2.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    let b = a[i].getElementsByClassName("content2")[0];
    let c = b.getElementsByTagName("h6")[0];

    let TextValue = c.textContent || c.innerText;
    if (TextValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
      search_bx2.style.visibility = "visible";
      search_bx2.style.opacity = 1;
      console.log("filter: ", TextValue.toUpperCase().indexOf(filter));
    } else {
      a[i].style.display = "none";
    }
    if (search.value == 0) {
      search_bx2.style.visibility = "hidden";
      search_bx2.style.opacity = 0;
    }
  }
});
