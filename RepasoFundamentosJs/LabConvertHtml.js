function convertHTML(cadena) {
  let newString = "";
  for (const char of cadena) {
    switch (char) {
      case "&":
        newString += "&amp;";
        break;
      case "<":
        newString += "&lt;";
        break;
      case ">":
        newString += "&gt;";
        break;
      case '"':
        newString += "&quot;";
        break;
      case "'":
        newString += "&apos;";
        break;
      default:
        newString += char;
        break;
    }
  }
  return newString;
}
console.log(convertHTML("Dolce & Gabbana"));
