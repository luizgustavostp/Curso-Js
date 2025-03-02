/* Encontre apenas as propriedas do objeto que são strings */


let filme = {
    nome: 'Vingadores',
    data: 2016
}
function EncontrarString(obj) {
    for (prop in obj) {
        if (typeof obj[prop] == "string") {
            console.log(prop,obj[prop])
        }
    }
}

EncontrarString(filme)


// outro exercicio mas de encontrar apenas os numeros!!

let array = [500,"julia",22]

function encontrarNumber() {
    for (key in array) {
        if (typeof array[key] == "number") {
            console.log(key,array [key])
        }
    }
}

encontrarNumber(array)