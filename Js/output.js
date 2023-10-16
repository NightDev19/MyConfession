// Extract the name parameter from the URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if (name) {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = decodeURIComponent(name) + "! Can you be mine?";
}
