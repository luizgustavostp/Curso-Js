let bicodepeixe = 0
let bicao = setInterval(() => {
    bicodepeixe++
    console.log(bicodepeixe)
    if (bicodepeixe == 10) {
        clearInterval(bicao)
    }
}, 100);
function euteamo(palavras) {
    
    var tormento = setTimeout(() => {
        if (bicodepeixe >= 10) {
            clearTimeout(tormento)
        }
        console.log(palavras)
        console.log(bicodepeixe)
    },2000)
    

}
euteamo('palavras que doem')