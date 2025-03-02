function Verificador(velocidade) {
    if (velocidade > 70) {
        let velocidadeforpoint = velocidade - 70
        let pontos = Math.floor(velocidadeforpoint / 5)
        return pontos >= 16 ? "Carteira suspendida" : `Mais ${pontos} pontos na carteira`
    }
    else {
        return "Não passou do limite"
    }
}

console.log(Verificador(60))