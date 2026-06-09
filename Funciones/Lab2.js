function maskEmail(email) {
    let indice = email.indexOf("@");
    let usuario = email.slice(0, indice);
    let dominio = email.slice(indice);
    let primerLetra = usuario[0];
    let ultLetra = usuario[usuario.length - 1];
    let cifrado = "*".repeat(usuario.length - 2);
    return primerLetra + cifrado + ultLetra + dominio;
}
let email = "apple.pie@example.com";
console.log(maskEmail(email))
