async function procurarcep() {
    var ceps = document.getElementById('cep').value
    var verif = parseInt(ceps)
    console.log(verif)
    if (!isNaN(verif)) {
        const promise = await fetch(`https://brasilapi.com.br/api/cep/v1/${ceps}`).then(resposta => resposta.json())
        document.getElementById(`resposta`).innerHTML = `Estado: ${promise.state}, cidade: ${promise.city} <br>
        Bairro: ${promise.neighborhood}, Rua: ${promise.street}`
    }
    else {
        alert("Insira o cep de maneira correta!")
    }
}