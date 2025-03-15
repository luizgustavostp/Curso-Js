let data = new Date
let mes = data.getMonth()
let ano = data.getFullYear()
let dia = data.getUTCDate()
const calendar = document.getElementById("calendar")
const monthtxt = document.getElementById('monthtxt')
let meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]
let mespg = mes
function PegardiasdoMes(data) {
    return new Date(data.getFullYear(), mespg + 1, 0).getDate();
}

function avancar(data) {
    calendar.innerHTML = ""
    for (let i = 1;i <= PegardiasdoMes(data);i++) {
        let item = document.createElement('div')
        item.innerHTML = i
        item.setAttribute('class',"calendar-day")
        calendar.appendChild(item)
    }
    mespg++
    if (mespg > 11 ) {
        mespg = 0
    
    }
    
    monthtxt.innerHTML = ``
    monthtxt.innerHTML = `Mês ${meses [mespg -1]}`

}
function PegardiasdoMesAnterior(data) {
    return new Date(data.getFullYear(),mespg, 0).getDate();
}
function voltar(data) {
    calendar.innerHTML = ""
    for (let ii = 1;ii <= PegardiasdoMesAnterior(data);ii++) {
        let item = document.createElement('div')
        item.innerHTML = ii
        item.setAttribute('class',"calendar-day")
        calendar.appendChild(item)
    }
    mespg--
    if (mespg < 1) {
        mespg = 11
    }
    monthtxt.innerHTML = ``
    monthtxt.innerHTML = `Mês ${meses [mespg - 1]}`
}
avancar(data)