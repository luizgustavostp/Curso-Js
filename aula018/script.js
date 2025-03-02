
function testar() {
var txtp = document.getElementById('txtp')
var txta = document.getElementById('txta')
var res = document.getElementById('res') 

let peso = Number(txtp.value)
let alt = Number(txta.value)

let imcalt = alt*alt
let imc1 = peso / imcalt
let imc = imc1.toFixed(2)
let estado = "normal"


    if (imc <= 0 ) {
    alert("ERRO,VERIFIQUE SEUS DADOS")
    }
    else if (imc < 18.5) {
        estado = "abaixo do normal"
    }
    else if (imc >= 18.6 && imc <= 24.9) {
        estado = "normal"
    }
    else if (imc >= 25.0 && imc <= 29.9) {
        estado = "Sobrepeso"
    }
    else if (imc >= 30.0 && imc <= 34.9) {
        estado = "obeso grau 1"
    }
    else if (imc >= 35 && imc <= 39.9) {
        estado = "obeso grau 2"
    }
    else if (imc > 40) {
        estado = "obeso grau 3"
    }
    
res.innerHTML = `seu indice de massa corporal é ${imc},Você é ${estado} `


}

