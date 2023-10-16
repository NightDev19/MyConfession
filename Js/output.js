// Extract the name parameter from the URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if (name) {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = decodeURIComponent(name) + "! Can you be mine?";
}

const no = document.getElementById("no");
let moving = false;

no.addEventListener("mouseover", () => {
  if (moving) return;

  const animationName = no.style.animation.includes("transF")
    ? "transB"
    : "transF";
  no.style.animation = `${animationName} 0.5s linear forwards`;

  moving = true;
  setTimeout(() => (moving = false), 200);
});

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("yes");
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
