const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modalContent = document.querySelector(".modal-content");
const nameForm = document.getElementById("nameForm");

openBtn.addEventListener("click", () => (modal.style.display = "block"));
closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
  e.stopPropagation();
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
modalContent.addEventListener("click", (e) => e.stopPropagation());

nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("name").value;
  location.href = `../Components/surprise.html?name=${encodeURIComponent(
    nameInput
  )}`;
});
