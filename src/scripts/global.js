const mainNav = document.getElementById("navbar-menu");
const navbarToggler = document.getElementById("navbar-toggler");

const toggleNavbar = () => {
  mainNav.classList.toggle("active");
};

navbarToggler.addEventListener("click", toggleNavbar);