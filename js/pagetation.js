const itemsPerPage = 8; // Sesuaikan jumlah item per halaman menjadi 8
const posts = document.querySelectorAll(".post-box");
const pagination = document.getElementById("pagination");
const totalPages = Math.ceil(posts.length / itemsPerPage);
let currentPage = 1;

function showPage(page) {
  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;

  currentPage = page;

  for (let i = 0; i < posts.length; i++) {
    if (
      i >= (currentPage - 1) * itemsPerPage &&
      i < currentPage * itemsPerPage
    ) {
      posts[i].style.display = "block";
    } else {
      posts[i].style.display = "none";
    }
  }
  updatePagination(currentPage);
}

function updatePagination(page) {
  pagination.innerHTML = "";

  const prevLi = document.createElement("li");
  const prev = document.createElement("a");
  prev.innerHTML = "&laquo;";
  prev.href = "#";
  if (page === 1) {
    prev.classList.add("disabled");
  }
  prev.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      showPage(currentPage - 1);
    }
  });
  prevLi.appendChild(prev);
  pagination.appendChild(prevLi);

  for (let i = 1; i <= totalPages; i++) {
    const pageLi = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = i;
    a.href = "#";
    if (i === page) {
      a.classList.add("active");
    }
    a.addEventListener("click", function (e) {
      e.preventDefault();
      showPage(i);
    });
    pageLi.appendChild(a);
    pagination.appendChild(pageLi);
  }

  const nextLi = document.createElement("li");
  const next = document.createElement("a");
  next.innerHTML = "&raquo;";
  next.href = "#";
  if (page === totalPages) {
    next.classList.add("disabled");
  }
  next.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      showPage(currentPage + 1);
    }
  });
  nextLi.appendChild(next);
  pagination.appendChild(nextLi);
}

showPage(currentPage);
