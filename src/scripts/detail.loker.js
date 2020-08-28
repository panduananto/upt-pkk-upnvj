const daftarLokerForm = document.querySelector("#daftar-loker-form");
const closeModalButton = document.querySelector("#close-modal-button");
const modalOverlay = document.querySelector(".success-daftar-modal-overlay");
const modalContent = document.querySelector(".success-daftar-modal-content");

daftarLokerForm.addEventListener("submit", (e) => {
  modalOverlay.classList.add("show-modal-overlay");
  modalContent.classList.add("show-modal-content");
  e.preventDefault();
});

closeModalButton.addEventListener("click", () => {
  modalOverlay.classList.remove("show-modal-overlay");
  modalContent.classList.remove("show-modal-content");
});
