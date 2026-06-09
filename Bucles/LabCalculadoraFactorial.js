function factorialCalculator(numero) {
    let result = 1;
    for (let i = 1; i <= numero; i++) {
        result = result * i;
    }
    return result;
}
let num = 5;
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
