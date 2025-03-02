function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "ERRO, TA FALTANDO DADOS AI MENOR"
    }
    else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value) 
        let p = Number(passo.value)

        for (let c = i; c <= f; c+= p)
            res.innerHTML += `${c} \u{1F60B}		 `
    }
    res.innerHTML += `\u{2614}`
}