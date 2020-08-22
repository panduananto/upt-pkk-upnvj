// excerpt on article description

const excerpt = document.querySelectorAll("#excerpt");

excerpt.forEach((element) => {
  const excerptText = element.innerText;
  if (excerptText.length > 80) {
    let trimmedText = `${excerptText.substr(0, 80)}...`;
    element.innerHTML = trimmedText;
  }
});

// header image carousel

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevSlideButton = document.querySelector("#prevSlideButton");
const nextSlideButton = document.querySelector("#nextSlideButton");

let imageCounter = 1;
let imageWidth = carouselImages[0].clientWidth;
let touchstartX = 0;
let touchendX = 0;

function nextCarouselImage() {
  if (imageCounter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  imageCounter++;
  carouselSlide.style.transform =
    "translateX(" + -imageWidth * imageCounter + "px)";
}

function handleSwipeCarouselGesture() {
  if (touchendX > touchstartX) {
    prevCarouselImage();
  } else {
    nextCarouselImage();
  }
}

function prevCarouselImage() {
  if (imageCounter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  imageCounter--;
  carouselSlide.style.transform =
    "translateX(" + -imageWidth * imageCounter + "px)";
}

window.addEventListener("resize", () => {
  imageWidth = carouselImages[0].clientWidth;
  carouselSlide.style.transform =
    "translateX(" + -imageWidth * imageCounter + "px)";
});

nextSlideButton.addEventListener("click", () => {
  nextCarouselImage();
});

prevSlideButton.addEventListener("click", () => {
  prevCarouselImage();
});

carouselImages.forEach((item) => {
  item.addEventListener("touchstart", (e) => {
    touchstartX = e.changedTouches[0].screenX;
  });

  item.addEventListener("touchend", (e) => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipeCarouselGesture();
  });
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

// mini slider with glide.js

let kerjasamaSLider = new Glide(".glide", {
  gap: 20,
  type: "carousel",
  perView: 4,
  breakpoints: {
    1024: {
      perView: 3,
    },
    640: {
      perView: 2,
    },
  },
});

kerjasamaSLider.mount();
