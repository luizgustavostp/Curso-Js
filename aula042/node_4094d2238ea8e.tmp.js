// arrow function, função de flexa : () =>
// para usar função de flexa temos o () => com uma constante

const somar = (numero1,numero2,numero3) => {
    return numero1 + numero2 + numero3
}

console.log(somar(3,5,10))

// também podermos usar arrow function só para retornar algo sem executar outras coisas
const quadrado = numero1 => numero1 * numero1

console.log(quadrado(3))


// só podemos usar arrow function quando temos um parametro, quando não temos, ou temos mais de um
// é obrigatorio usar ()

const some = () => {
    console.log('me da uma mamada aqui meu cria, arrow function manda muito na parada')
}

// exemplo de arrow function usadas comum mente em outros lugares
const seila = setInterval(() => {
    console.log('ME DA UMA MAMADA MEU CRIA!!!')
    }
,200)

setInterval(() => {
    clearInterval(seila)
}, 
10000);
