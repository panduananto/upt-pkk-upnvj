const excerpt = document.querySelectorAll("#excerpt");

excerpt.forEach((element) => {
  const excerptText = element.innerText;
  if (excerptText.length > 80) {
    let trimmedText = `${excerptText.substr(0, 80)}...`;
    element.innerHTML = trimmedText;
  }
});

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevSlideButton = document.querySelector("#prevSlideButton");
const nextSlideButton = document.querySelector("#nextSlideButton");

let imageCounter = 1;
let imageWidth = carouselImages[0].clientWidth;

window.addEventListener("resize", () => {
  imageWidth = carouselImages[0].clientWidth;
  carouselSlide.style.transform =
    "translateX(" + -imageWidth * imageCounter + "px)";
});

nextSlideButton.addEventListener("click", () => {
  if (imageCounter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  imageCounter++;
  carouselSlide.style.transform =
    "translateX(" + -imageWidth * imageCounter + "px)";
});

prevSlideButton.addEventListener("click", () => {
  if (imageCounter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  imageCounter--;
  carouselSlide.style.transform =
    "translateX(" + -imageWidth * imageCounter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[imageCounter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    imageCounter = carouselImages.length - 2;
    carouselSlide.style.transform =
      "translateX(" + -imageWidth * imageCounter + "px)";
  }
  if (carouselImages[imageCounter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    imageCounter = carouselImages.length - imageCounter;
    carouselSlide.style.transform =
      "translateX(" + -imageWidth * imageCounter + "px)";
  }
});
