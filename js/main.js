const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal");
const modalContainer = document.getElementById("modal-container");

openBtn.addEventListener("click", () => {
	modalContainer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
	modalContainer.classList.remove("show");
});
