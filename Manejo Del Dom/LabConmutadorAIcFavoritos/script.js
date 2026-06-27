const favButtons = document.querySelectorAll(".favorite-icon");

function alternar(button) {
  button.classList.toggle("filled");
  button.innerHTML = button.classList.contains("filled") ? "&#10084" : "&#9825";
}

favButtons.forEach((btn) => {
  btn.addEventListener("click", () => alternar(btn));
});
