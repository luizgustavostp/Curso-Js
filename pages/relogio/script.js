var body = document.getElementById('body')
var btnm = document.getElementById('imgbtn')
function mudar() {
    if (btnm.src == 'sun.png') {
        btnm.src == 'moon.png'
    }
    else {
        btnm.src == 'sun.png'
    }
}



function iniciar() {
    
    var horaR = document.getElementById('hora')
    var minutoR = document.getElementById('minuto')
    var data = new Date();
    var hora = String(data.getHours());
    var minuto = String(data.getMinutes());
    setTimeout(5)
    if (hora.length == 1) {
        horaR.innerText = `0${hora}`
    }
    else {
        horaR.innerText = `${hora}`
    }
    if (minuto.length == 1) {
        minutoR.innerText = `0${minuto}` 
    }
    else {
        minutoR.innerText = `${minuto}`
    }
}
