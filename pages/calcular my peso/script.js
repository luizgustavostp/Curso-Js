
function calcular() {
    let pesoinput = document.getElementById('peso')
    let altinput = document.getElementById('alt')
    let peso = pesoinput.value
    let alt = altinput.value
    let altura = alt * alt
    let imc = Math.floor(peso/altura)
    let display = document.getElementById('result')
    let pesor = document.getElementById('pesor')
    let altr = document.getElementById('altr')
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `Seu peso é ${peso}Kg, sua altura é ${alt}cm, e seu IMC é `
    display.style.animationPlayState = "running"
    display.style.display = "block"
    if (imc <= 0 || typeof imc != "number") {
        
        resultado.innerHTML = "Tente novamente, dessa vez adicionando Números!"
    }
    else if (imc < 16) {
        resultado.innerHTML += `${imc} / magreza grave`
    }
    else if (imc < 16.9) {
        resultado.innerHTML += `${imc} / magreza moderada`
    }
    else if (imc < 18.5) {
        resultado.innerHTML += `${imc} / magreza leve`
    }
    else if (imc < 24.9) {
        resultado.innerHTML += `${imc} / peso ideal`
    }
    else if (imc < 29.9) {
        resultado.innerHTML += `${imc} / sobrepeso`
    }
    else if (imc < 34.9) {
        resultado.innerHTML += `${imc} / obesidade grau 1`
    }
    else if (imc < 39.9) {
        resultado.innerHTML += `${imc} / obesidade grau 2`
    }
    else if (imc > 40) {
        resultado.innerHTML += `${imc} / obesidade grau 3`
    }
}
function desativar() {
    let display = document.getElementById('result')
    display.style.display = "none"   
}