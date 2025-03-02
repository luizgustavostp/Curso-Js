function asterisco(numero) {
    let aste = ""
    let i = 0
    while (numero > i) {
        console.log(aste + "*")
        aste += "*"
        i++
    }
}
asterisco(1)