function fizzbuzz(numero) {
    if (numero % 5 <= 0 && numero % 3 <= 0) {
        return "fizzbuzz"
    } 
    else if (numero % 5 <= 0) {
        return "buzz"
    }
    else if (numero % 3 <= 0) {
        return "fizz"
    }
    else if (numero == String) {
        return "isso é uma string"
    }
    else {
        return numero
    }
}
let resultado = fizzbuzz(100) 
console.log(resultado)
