async function procurarcep() {
    const cepselecionado = document.getElementById("cep").value
    if (typeof cepselecionado != "string"
    ) {
        alert("Seu cep deve conter apenas números")
    }
    else {
        let resposta = await fetch(`https://brasilapi.com.br/api/cep/v1/${cepselecionado}`).catch((resposta) => {
            console.log(`erro: ${resposta}`)
        }).then(resposta => resposta.json())
        console.log(resposta)
        document.getElementById(`resposta`).innerText = `seu Cep é: `
        document.getElementById("resposta").innerHTML += String(`cidade:${resposta.city},bairro: ${resposta.neighborhood} ,<Br>Rua: ${resposta.street} ,estado: ${resposta.state} `)
    }
}