const textArea = document.getElementById("text-input");
const parrafo = document.getElementById("char-count");
const maxLength = 50;

function update() {
    let text = textArea.value;

    if (text.length > maxLength) {
        text = text.slice(0, maxLength);
        textArea.value = text;
    }

    const count = text.length;
    parrafo.textContent = `Character Count: ${count}/${maxLength}`;
    parrafo.classList.toggle("red", count === maxLength);
}

textArea.addEventListener("input", update);
update();