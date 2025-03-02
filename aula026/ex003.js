//função que não retorna nenhuma

function digaNome(nome) {
    console.log(nome + '10')
}

digaNome('Luizgustavo')

// função que retorna algo

function contarAté(numero) {
    let i = 0
    while (i < numero) {
        console.log(i)
        i++
    }
    return i / 2
}

//outra função que retorna

function contarNome(nome) {
    return nome.length / 2
}
let resultadofinal = contarNome('luizgustavo')
console.log(resultadofinal)

function contarNumeros(numero1,numero2,numero4) {
    return numero1 + numero2 + numero4
    

}
let result = contarNumeros(15,50,900,20)
console.log(result)