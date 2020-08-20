const searchBarContainer = document.querySelector(".search-container");

fetch("./header-footer/search-bar.html")
  .then((res) => {
    if (res.status !== 404) {
      return res.text();
    } else {
      return fetch("../header-footer/search-bar-other-pages.html")
        .then((res) => {
          return res.text();
        })
        .then((html) => {
          return (searchBarContainer.innerHTML = html);
        });
    }
  })
  .then((html) => {
    return (searchBarContainer.innerHTML = html);
  });

const navbarContainer = document.querySelector("nav");

fetch("./header-footer/header-index.xml")
  .then((res) => {
    if (res.status !== 404) {
      return res.text();
    } else {
      return fetch("../header-footer/header-other-pages.xml")
        .then((res) => {
          return res.text();
        })
        .then((html) => {
          return (navbarContainer.innerHTML = html);
        });
    }
  })
  .then((html) => {
    return (navbarContainer.innerHTML = html);
  })
  .then(() => {
    const navbarMenuElement = document.querySelectorAll("#navbar-menu > li");
    navbarMenuElement.forEach((item) => {
      item.addEventListener("mouseenter", (e) => {
        if (
          e.target.firstElementChild.className === "drop-down-menu" ||
          e.target.className === "expand-sub-menu"
        ) {
          handleCloseOtherDropDown(e.target.firstElementChild);
          handleDropDownClick(e.target.firstElementChild);
        }
      });

      item.addEventListener("mouseleave", () => {
        handleCloseOtherDropDown(null);
      });

      item.addEventListener("touchstart", (e) => {
        if (e.target.classList.contains("expand-sub-menu")) {
          handleCloseOtherDropDown(e.target);
          handleDropDownClick(e.target);
        }
        if (e.target.firstElementChild.className === "drop-down-menu") {
          handleCloseOtherDropDown(e.target.firstElementChild);
          handleDropDownClick(e.target.firstElementChild);
        }
      });
    });
  });

const handleDropDownClick = (dropDownItem) => {
  dropDownItem.classList.add("current");
  dropDownItem.parentElement.lastElementChild.classList.add("show-drop-down");
};

const subMenuDropDown = (dropDownItem) => {
  dropDownItem.classList.add("show-drop-down");
};

const handleCloseOtherDropDown = (otherDropDownItem) => {
  document.querySelectorAll(".show-drop-down").forEach((dropDown) => {
    if (otherDropDownItem !== dropDown) {
      dropDown.parentElement.firstElementChild.classList.remove("current");
      dropDown.classList.remove("show-drop-down");
    }
  });
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("navbar-toggle")) {
    e.target.classList.toggle("open");
    e.target.previousElementSibling.classList.toggle("active");
  }
});

// const pageArray = [
//   "sejarah.html",
//   "visimisi.html",
//   "strukturorganisasi.html",
//   "tugasfungsi.html",
//   "programkerja.html",
//   "sop.html",
//   "infomagang.html",
//   "inputdatamagang.html",
//   "pendaftaranmagang.html",
// ];

// const pathArray = ["profile", "magang"];

// const pageID = document.querySelector("body").getAttribute("id");

// let url = window.location.href;
// let arrayUrl = url.split("/");
// let beforeLastSegmentOfUrl = arrayUrl[arrayUrl.length - 2];
// let lastSegmentOfUrl = arrayUrl[arrayUrl.length - 1];

// let path = window.location.pathname;
// let arrayPath = path.split("/");
// let beforeLastSegmentOfPath = arrayPath[arrayPath.length - 2];

// const prevButton = document.getElementById("prev-button");
// const nextButton = document.getElementById("next-button");

// if (pageArray.includes(lastSegmentOfUrl)) {
//   let indexCurrentElement = pageArray.indexOf(lastSegmentOfUrl);
//   let indexPrevPage = indexCurrentElement - 1;
//   let indexNextPage = indexCurrentElement + 1;

//   if (indexPrevPage === -1) {
//     prevButton.setAttribute("href", `../index.html`);
//   } else {
//     prevButton.setAttribute(
//       "href",
//       `../${beforeLastSegmentOfUrl}/${pageArray[indexPrevPage]}`
//     );
//   }

//   if (indexCurrentElement < 5) {
//     nextButton.setAttribute(
//       "href",
//       `../${pathArray[0]}/${pageArray[indexNextPage]}`
//     );
//   } else {
//     nextButton.setAttribute(
//       "href",
//       `../${pathArray[1]}/${pageArray[indexNextPage]}`
//     );
//   }
// }

const mainFooter = document.querySelector("footer");

fetch("../header-footer/footer.xml")
  .then((res) => {
    if (res.status !== 404) {
      return res.text();
    } else {
      return fetch("./header-footer/footer.xml")
        .then((res) => {
          return res.text();
        })
        .then((html) => {
          return (mainFooter.innerHTML = html);
        });
    }
  })
  .then((html) => {
    return (mainFooter.innerHTML = html);
  });
