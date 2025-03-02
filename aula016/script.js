function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (inicio == 0 || fim == 0|| passo == 0 ) {
        res.innerHTML = "Verifique os dados novamente"
    }
    else {
        res.innerHTML = "Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c+= p) {
            res.innerHTML += `${c} \u{1F600}	`

        }
        res.innerHTML += `\u{1F929}`
    }
}
