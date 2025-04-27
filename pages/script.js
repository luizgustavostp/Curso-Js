let button = document.getElementById('button')
let label = document.getElementById('nome')
let result = document.getElementById('result')

function tedio() {
    nome = label.value
    if (nome.length % 2 === 0 ) {
        result.innerText = "Você não é baitola"
    }
    else {
        result.innerText = "Você é Baitola viadinho"
    }
}