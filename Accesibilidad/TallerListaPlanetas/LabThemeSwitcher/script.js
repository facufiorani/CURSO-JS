const themes = [
  {
    name: "light",
    message: "Theme Ligth Changed",
  },
  {
    name: "dark",
    message: "Theme Dark Changed",
  },
];
const listTheme = document.getElementById("theme-dropdown");
const btn = document.getElementById("theme-switcher-button");
btn.addEventListener("click", () => {
  if (listTheme.hidden === true) {
    listTheme.hidden = false;
    btn.setAttribute("aria-expanded", "true");
  } else {
    listTheme.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }
});
const list = document.querySelectorAll("[role=menuitem]");
list.forEach((li) => {
  li.addEventListener("click", () => {
    const temaEncontrado = themes.find((tema) => tema.name === li.textContent);
    document.body.className = "";
    document.body.classList.add("theme-" + temaEncontrado.name);
    let element = document.querySelector('[aria-live="polite"]');
    element.textContent = temaEncontrado.message;
    listTheme.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  });
});
