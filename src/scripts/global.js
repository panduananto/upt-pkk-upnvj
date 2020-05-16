const mainNav = document.getElementById("navbar-menu");
const navbarToggler = document.getElementById("navbar-toggler");

const toggleNavbar = () => {
  mainNav.classList.toggle("active");
};

navbarToggler.addEventListener("click", toggleNavbar);

// const listElement = document.querySelectorAll(".side-bar a");
// let itemBreadCrumbElement = document.querySelector(".item");

// listElement.forEach((item, index) => {
//   console.log(item, index);
//   item.addEventListener("click", () => {
//     let linkItem = item.getAttribute("href");
//     let textItem = item.innerHTML;
//     let currentItem =
//     `
//       <a href="${linkItem}">${textItem}</a>
//     `
//     itemBreadCrumbElement.innerHTML += currentItem;
//   });
// });
