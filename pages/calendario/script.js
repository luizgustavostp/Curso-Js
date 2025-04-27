let data = new Date // data selecionada, normalmente é a atual
let mes = data.getMonth() // mes selecionado
let ano = data.getFullYear() // ano selecionado
let dia = data.getUTCDate() // dia selecionado
let dataatual = data // real data atual
let anoatual = ano // real ano atual
let mesatual = mes // real mes atual
let diaatual = dia // real dia atual
let lembretes = [] // lembrete array
let lemdisplay = document.getElementById("lembretes") // display dos lembretes
const calendar = document.getElementById("calendar")
const monthtxt = document.getElementById('monthtxt')
let meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]
let mespg = mes
let ane = 0

function excluabtn(value) {
    let lembreteselect = document.getElementById(value)
    lembreteselect.style.display = "none"
    lembretes.splice(value,1)
    lembretes.splice(value,1)
}
function PegardiasdoMes(data) {
    return new Date(data.getFullYear(), mespg + 1, 0).getDate();
}
function PegardiasdoMesAnterior(data) {
    return new Date(data.getFullYear(),mespg, 0).getDate();
}
function avancar(data) {
    calendar.innerHTML = ""
    for (let i = 1;i <= PegardiasdoMes(data);i++) {
        let item = document.createElement('div')
        item.innerHTML = i
        item.setAttribute('class','calendar-day')
        if (mespg == mesatual && ano == anoatual && i == dia) {
            item.style.backgroundColor = 'rgba(60, 208, 208, 0.732)'
        }
            for (let chave in lembretes) {
                if (i == lembretes[chave].dia && lembretes[chave].mes == mespg) {
                    item.innerHTML += `<p class="tex-lem">${lembretes[chave].texto}</p>`
                    item.style.backgroundColor = lembretes[chave].cor
                }
            }
        calendar.appendChild(item)
    } 
    mespg++
    if (mespg > 11 ) {
        mespg = 1
    }
    monthtxt.innerHTML = ``
    monthtxt.innerHTML = `Mês ${meses [mespg -1]}, ${ano}`
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
        for (let chaves in lembretes) {
            if (ii == lembretes[chaves].dia && lembretes[chaves].mes == mespg - 1) {
                item.innerHTML += `<p class="tex-lem">${lembretes[chaves].texto}</p>`
                item.style.backgroundColor = lembretes[chaves].cor
            }
        }
        calendar.appendChild(item)
    }
    monthtxt.innerHTML = ``
    monthtxt.innerHTML = `Mês ${meses [mespg - 1]}, ${ano}`
}
avancar(data)
function atualizar() {
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
    monthtxt.innerHTML = ``
    monthtxt.innerHTML = `Mês ${meses [mespg]}, ${ano}`
}
function novadataNoNatual() {
    let dates = document.getElementById('date').value
    let dati = dates.length == 0 ? data : new Date(dates) // data personalizada
    data = dati // data nova armazenada
    mes = data.getMonth() // mespad sendo alterado
    ano = data.getFullYear() // anopad sendo alterado
    dia = data.getUTCDate() // dia sendo alterado
    anoatual = ano // ano atual sendo atualizado
    mesatual = mes // mes atual sendo alterado
    diaatual = dia // dia atual sendo atualizado
    mespg = mes // mespagina
    atualizar()
}
let lembretequantidade = ane
function AdicionarLembrete() {
    let datalembrete = new Date(document.getElementById('datelem').value)
    let corlembrete = document.getElementById('cor').value
    let textolembrete = document.getElementById('texto').value
    if (datalembrete != "NaN/NaN/NaN" && textolembrete != "") {

        lembretes.push({
        ano:datalembrete.getFullYear(),
        mes:datalembrete.getMonth(),
        dia:datalembrete.getUTCDate(),
        texto:textolembrete,
        cor: corlembrete})
    let barra = document.createElement('div')
    barra.setAttribute('class','barra')
    barra.style.backgroundColor = corlembrete
    let lemd = document.createElement('div')
    lemd.appendChild(barra)
    lemd.innerHTML += `<p>"${textolembrete}",${datalembrete.getUTCDate()}/${datalembrete.getMonth()}/${datalembrete.getFullYear()} </p>`
    lemd.setAttribute('class','lemd')

    let btnexcluir = document.createElement('btn')
    btnexcluir.innerText = "X"
    btnexcluir.setAttribute('class','exclua') 
    btnexcluir.setAttribute('onclick',`excluabtn(${ane})`) 
    btnexcluir.setAttribute('id',`${lembretequantidade}`) 
    lemd.setAttribute('id',`${lembretequantidade}`) 
    lemd.appendChild(btnexcluir)
    lemdisplay.appendChild(lemd)
    console.log(lembretes)
    ane++
    lembretequantidade++
}
}
