const imagenes = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const closeBtn = document.getElementById("close-btn");
const imgLightbox = document.getElementById("lightbox-image");

imagenes.forEach((img) => {
  img.addEventListener("click", () => {
    const URL = img.src.replace("-thumbnail", "");
    imgLightbox.src = URL;
    lightbox.style.display = "flex";
  });
});
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
