// pdf viewer

const pdfURL = "../../../assets/documents/pdf-example.pdf";
const baseURLViewer = `../scripts/pdfjs/web/viewer.html?file=${pdfURL}`;
const pdfDocContainer = document.querySelector("#pdf-doc-container");

pdfDocContainer.setAttribute("src", baseURLViewer);

// glide slider

let thumbnaiSlider = new Glide(".glide", {
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

thumbnaiSlider.mount();

// slider image to featured

let thumbnailItems = document.getElementsByClassName("thumbnail-img");
let activeImages = document.getElementsByClassName("active-to-featured");
let featuredImages = document.getElementById("featured-image");

for (let i = 0; i < thumbnailItems.length; i++) {
  thumbnailItems[i].addEventListener("click", () => {
    if (activeImages.length > 0) {
      activeImages[0].classList.remove("active-to-featured");
    }

    thumbnailItems[i].classList.add("active-to-featured");
    featuredImages.src = thumbnailItems[i].src;
  });
}
