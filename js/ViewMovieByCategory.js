const categoryTitle = document.querySelectorAll(".category-title");
console.log("cate:", categoryTitle.length);
const allCategoryPosts = document.querySelectorAll(".post-box"); //ambil semua post-box tapi cuma bagian sebelah, class = "post-box movies"  jadi cuma bisa di ambil kategori di class langsunganya saja
const paginationContainer = document.getElementById("pagination-container");
const menu = ".post-box";
const ket_hasil_category = document.getElementById("ket_hasil_category");

ket_hasil_category.innerHTML = "Latest Movies";

for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener(
    "click",
    filterPosts.bind(this, categoryTitle[i])
  );
}

function filterPosts(item) {
  changeActivePosition(item);
  for (let i = 0; i < allCategoryPosts.length; i++) {
    if (allCategoryPosts[i].classList.contains(item)) {
      allCategoryPosts[i].style.display = "block";
    } else {
      allCategoryPosts[i].style.display = "none";
    }
  }
}

function filterPosts(item) {
  changeActivePosition(item);
  for (let i = 0; i < allCategoryPosts.length; i++) {
    if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
      allCategoryPosts[i].style.display = "block";
    } else {
      allCategoryPosts[i].style.display = "none";
    }
    if (categoryTitle.length - 1 == i) {
      window.location.href = "#hasilCategory";
      ket_hasil_category.innerHTML = "Hasil Pencarian";
    }
  }
}

function changeActivePosition(activeItem) {
  for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].classList.remove("active");
  }
  activeItem.classList.add("active");
  paginationContainer.style.visibility = "hidden";
}

var items = $(`${menu}`);
var numItems = items.length;
console.log("numItems", numItems);

var perPage = 8;

items.slice(perPage).hide();
$("#pagination-container").pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "<",
  nextText: ">",
  onPageClick: function (pageNumber) {
    var showFrom = perPage * (pageNumber - 1);
    var showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
  },
});

function AllCategory() {
  window.location.href = "#AllCategory";
  /* perPage = categoryTitle.length; */
}
