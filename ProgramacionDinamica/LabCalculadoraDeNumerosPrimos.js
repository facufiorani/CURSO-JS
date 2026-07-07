function isPrime(num) {
    //Un numero es primo si ningun numero entre 2 y num - 1 lo divide exactamente
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true

}

function sumPrimes(number) {
    let sum = 0
    // No existen numeros primos menores a 2
    if (number < 2) {
        return 0
    }
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            sum += i
        }
    }
    return sum
}