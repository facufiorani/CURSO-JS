function permuteString(str, prefijo='', resultado=[]) {
    if (str.length === 0) {
        if (!resultado.includes(prefijo)) {
            resultado.push(prefijo);
        }
        return resultado
    } else {
        for (let i = 0; i < str.length; i++) {
            const strAntesCaractActual = str.slice(0, i)
            const strDespuesCaractActual = str.slice(i + 1)
            const strFinal = strAntesCaractActual + strDespuesCaractActual
            permuteString(strFinal,prefijo + str[i], resultado)
        }
        return resultado
    }
}
console.log(permuteString("fcc"));