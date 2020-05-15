const mainNav = document.getElementById("navbar-menu");
const navbarToggler = document.getElementById("navbar-toggler");

const toggleNavbar = () => {
  mainNav.classList.toggle("active");
};

navbarToggler.addEventListener("click", toggleNavbar);

const excerpt = document.querySelectorAll("#excerpt");

excerpt.forEach((element) => {
  const excerptText = element.innerText;
  if (excerptText.length > 80) {
    let trimmedText = `${excerptText.substr(0, 80)}...`;
    element.innerHTML = trimmedText;
  }
});
