let bicodepeixe = 0
setInterval(() => {
    bicodepeixe++
}, 1000);
function euteamo(palavras) {
var tormento = setTimeout(() => {
        console.log(palavras)
    },2000)
    if (bicodepeixe >= 10) {
        clearTimeout(tormento)
    }

}
