let data = new Date
let mes = data.getMonth()
let ano = data.getFullYear()
let dia = data.getUTCDate()

let dataatual = data
let anoatual = ano
let mesatual = mes
let diaatual = dia
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
        if (mespg == mesatual && ano == anoatual && i == dia) {
        item.style.backgroundColor = 'rgba(60, 208, 208, 0.732)'
        }
        calendar.appendChild(item)
        
    }
    mespg++
    if (mespg > 11 ) {
        mespg = 1
    
    }
    
    monthtxt.innerHTML = ``
    monthtxt.innerHTML = `Mês ${meses [mespg -1]}`

}
function PegardiasdoMesAnterior(data) {
    return new Date(data.getFullYear(),mespg, 0).getDate();
}
function voltar(data) {
    mespg--
    if (mespg < 1) {
        mespg = 11
    }
    calendar.innerHTML = ""
    for (let ii = 1;ii <= PegardiasdoMesAnterior(data);ii++) {
        let item = document.createElement('div')
        item.innerHTML = ii
        let meso = mespg - 1
        if (meso == mesatual && ano == anoatual && ii == dia) {
            item.style.backgroundColor = 'rgba(60, 208, 208, 0.732)'
        }
        item.setAttribute('class',"calendar-day")
        calendar.appendChild(item)
        
    }

    monthtxt.innerHTML = ``
    monthtxt.innerHTML = `Mês ${meses [mespg - 1]}`
}
avancar(data)

