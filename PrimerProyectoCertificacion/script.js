const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");
markdownInput.addEventListener('input', () => {
    const html = convertMarkdown()
    htmlOutput.textContent = html
    preview.innerHTML = html
})

function convertMarkdown() {
    let text = markdownInput.value;
    const regexHeadingH1 = /^ *# (.*)$/gm;
    const regexHeadingH2 = /^ *## (.*)$/gm;
    const regexHeadingH3 = /^ *### (.*)$/gm;
    const regexNegritaAsterisco = /\*\*(.*?)\*\*/g;
    const regexNegritaGuion = /__(.*?)__/g;
    const regexItalicAsterisco = /\*(.*?)\*/g;
    const regexItalicGuion = /_(.*?)_/g;
    const regexIMG = /!\[(.*?)\]\((.*?)\)/g;
    const regexLINK = /\[(.*?)\]\((.*?)\)/g;
    const regexQuote = /^ *> (.*)$/gm;
    if (text.match(regexHeadingH1)) {
        text = text.replace(regexHeadingH1, "<h1>$1</h1>");
    }
    if (text.match(regexHeadingH2)) {
        text = text.replace(regexHeadingH2, "<h2>$1</h2>");
    }
    if (text.match(regexHeadingH3)) {
        text = text.replace(regexHeadingH3, "<h3>$1</h3>");
    }
    if (text.match(regexNegritaAsterisco)) {
        text = text.replace(regexNegritaAsterisco, "<strong>$1</strong>");
    }
    if (text.match(regexNegritaGuion)) {
        text = text.replace(regexNegritaGuion, "<strong>$1</strong>");
    }
    if (text.match(regexItalicAsterisco)) {
        text = text.replace(regexItalicAsterisco, "<em>$1</em>");
    }
    if (text.match(regexItalicGuion)) {
        text = text.replace(regexItalicGuion, "<em>$1</em>");
    }
    if (text.match(regexIMG)) {
        text = text.replace(regexIMG, '<img alt="$1" src="$2">');
    }
    if (text.match(regexLINK)) {
        text = text.replace(regexLINK, '<a href="$2">$1</a>');
    }
    if (text.match(regexQuote)) {
        text = text.replace(regexQuote, "<blockquote>$1</blockquote>");
    }
    return text
}

