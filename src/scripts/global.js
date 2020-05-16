const mainNav = document.getElementById("navbar-menu");
const navbarToggler = document.getElementById("navbar-toggler");

const toggleNavbar = () => {
  mainNav.classList.toggle("active");
};

navbarToggler.addEventListener("click", toggleNavbar);

const pageArray = [
  "sejarah.html",
  "visimisi.html",
  "strukturorganisasi.html",
  "sop.html",
  "tugasfungsi",
  "programkerja",
];

const pageID = document.querySelector("body").getAttribute("id");

let url = window.location.href;
let array = url.split("/");
let beforeLastSegmentOfUrl = array[array.length - 2];
let lastSegmentOfUrl = array[array.length - 1];

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

if (pageArray.includes(lastSegmentOfUrl)) {
  let indexCurrentElement = pageArray.indexOf(lastSegmentOfUrl);
  let indexPrevPage = indexCurrentElement - 1;
  let indexNextPage = indexCurrentElement + 1;

  if (indexPrevPage === -1) {
    prevButton.setAttribute("href", `../index.html`);
  } else {
    prevButton.setAttribute(
      "href",
      `../${beforeLastSegmentOfUrl}/${pageArray[indexPrevPage]}`
    );
  }
  nextButton.setAttribute(
    "href",
    `../${beforeLastSegmentOfUrl}/${pageArray[indexNextPage]}`
  );
}
