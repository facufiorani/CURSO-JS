const message = document.getElementById("text-input")
const button = document.getElementById("check-btn");
const div = document.getElementById("result");


button.addEventListener('click', () => {
    if (message.value === '') {
        alert("Please input a value");
        return
    }
    const stringLimpio = message.value
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
    const stringInvertido = stringLimpio.split("").reverse().join("");
    if (stringLimpio === stringInvertido) {
        div.textContent = message.value + " is a palindrome";
    } else {
        div.textContent = message.value + " is not a palindrome";
    }
})