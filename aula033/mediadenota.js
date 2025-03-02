

function media(notas) {
    let soma = 0
    for (let key = 0;notas.length > key;key++) {
        soma += notas [key]
    } 
    let result = soma / notas.length
    if (result < 70) return "D"
    if (result < 80) return "C"
    if (result < 90) return "B"
    return "A"
}
let note = [80,70,90]
console.log(media(note))