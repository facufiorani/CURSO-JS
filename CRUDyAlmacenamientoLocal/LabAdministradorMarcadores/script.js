const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkSection = document.getElementById("bookmark-list-section");
const dropdownCategorias = document.getElementById("category-dropdown");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const contenedorList = document.getElementById("category-list");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const viewButton = document.getElementById("view-category-button");
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");
const closeListBtn = document.getElementById("close-list-button");
const nombreCategoria1 = formSection.querySelector(".category-name");
const nombreCategoria2 = bookmarkSection.querySelector(".category-name");

function getBookmarks() {
  try {
    const datos = JSON.parse(localStorage.getItem("bookmarks"));
    if (!Array.isArray(datos)) return [];

    const sonMarcadores = datos.every(
      (b) =>
        b &&
        typeof b === "object" &&
        typeof b.name === "string" &&
        typeof b.category === "string" &&
        typeof b.url === "string",
    );
    return sonMarcadores ? datos : [];
  } catch {
    return [];
  }
}
function displayOrCloseForm() {
    mainSection.classList.toggle("hidden");
    formSection.classList.toggle("hidden");
}
function displayOrHideCategory() {
    mainSection.classList.toggle("hidden");
    bookmarkSection.classList.toggle("hidden");
}


addBookmarkBtn.addEventListener("click", () => {
    nombreCategoria1.textContent = dropdownCategorias.value;
    displayOrCloseForm()});

closeFormBtn.addEventListener("click", () => displayOrCloseForm());

closeListBtn.addEventListener("click", () => displayOrHideCategory());

viewButton.addEventListener("click", () => {
    nombreCategoria2.textContent = dropdownCategorias.value;
    const bookmarks = getBookmarks();
    const filteredBookmarks = bookmarks.filter(
        (bookmark) => bookmark.category === dropdownCategorias.value
    );
    if (filteredBookmarks.length === 0) {
    contenedorList.innerHTML = "<p>No se encontraron marcadores</p>";
    } else {
    contenedorList.innerHTML = filteredBookmarks.map(bookmark => `<input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark">
<label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>`).join("");
    }
    displayOrHideCategory();
});

addBookmarkBtnForm.addEventListener("click", () => {
    const bookmarks = getBookmarks();
    const obj = {
        name: nameInput.value,
        url: urlInput.value,
        category: dropdownCategorias.value
    };
    bookmarks.push(obj);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    nameInput.value = "";
    urlInput.value = "";
    displayOrCloseForm();
})

deleteBookmarkBtn.addEventListener("click", () => {
    const selectedBookmark = document.querySelector('input[name="bookmark"]:checked')
    if (!selectedBookmark) {
        return;
    }
    const nombreMarcador = selectedBookmark.value;
    const bookmarks = getBookmarks();
    const filteredBookmarks = bookmarks.filter(bookmark => bookmark.name !== nombreMarcador || bookmark.category !== dropdownCategorias.value);
    localStorage.setItem("bookmarks", JSON.stringify(filteredBookmarks));
    nombreCategoria2.textContent = dropdownCategorias.value;
    const filteredBookmarksCategoria = filteredBookmarks.filter(
        (bookmark) => bookmark.category === dropdownCategorias.value,
    );
    if (filteredBookmarksCategoria.length === 0) {
    contenedorList.innerHTML = "<p>No se encontraron marcadores</p>"
    } else {
    contenedorList.innerHTML = filteredBookmarksCategoria.map(bookmark => `<input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="bookmark">
<label for="${bookmark.name}"><a href="${bookmark.url}">${bookmark.name}</a></label>`).join("");
    }
})