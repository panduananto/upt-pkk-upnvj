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
  "tugasfungsi.html",
  "programkerja.html",
  "sop.html",
  "infomagang.html",
  "inputdatamagang.html",
  "pendaftaranmagang.html",
];

const pathArray = ["profile", "magang"];

const pageID = document.querySelector("body").getAttribute("id");

let url = window.location.href;
let arrayUrl = url.split("/");
let beforeLastSegmentOfUrl = arrayUrl[arrayUrl.length - 2];
let lastSegmentOfUrl = arrayUrl[arrayUrl.length - 1];

let path = window.location.pathname;
let arrayPath = path.split("/");
let beforeLastSegmentOfPath = arrayPath[arrayPath.length - 2];

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

  if (indexCurrentElement < 5) {
    nextButton.setAttribute(
      "href",
      `../${pathArray[0]}/${pageArray[indexNextPage]}`
    );
  } else {
    nextButton.setAttribute(
      "href",
      `../${pathArray[1]}/${pageArray[indexNextPage]}`
    );
  }
}
