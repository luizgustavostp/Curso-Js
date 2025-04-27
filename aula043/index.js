const arraydoslembretes = []
const adicionarnalocal = () => {
    let prazo = document.getElementById('prazo').value
    let select = document.getElementsByTagName('select')[0]
    let tittle = document.getElementById('tittle').value
    let option = select.options[select.selectedIndex].text
    if (prazo == '' || tittle === "") {
        alert('Insira as informações preenchendo os campos da forma certa')
    }
    else {

    
    let lembrete = {
        prazo: String(prazo),
        titulo: tittle,
        option: option
    }

    localStorage.setItem(`lembretes${++localStorage.length}`,JSON.stringify(lembrete))

    arraydoslembretes.push(JSON.parse(localStorage.getItem('lembretes'.concat(localStorage.length))))
    console.log(arraydoslembretes)
    window.location = 'index.html'
}
}

const display = document.getElementById('display')
const loadessamerda = () => {
    for (let inicio = 1;inicio <= localStorage.length;inicio++ ) {
        arraydoslembretes.push(JSON.parse(localStorage.getItem(`lembretes${inicio}`)))
    }
for (let i = 0;i <= arraydoslembretes.length;i++) {
    let obj = arraydoslembretes[i]
    let container = document.createElement('div')
    let titulo = document.createElement('div')
    let data = document.createElement('div')
    let ação = document.createElement('div')
    titulo.innerHTML = obj.titulo
    data.innerHTML = obj.prazo
    ação.innerHTML = obj.option
    container.setAttribute('class','container')
    container.appendChild(titulo)
    container.appendChild(data)
    container.appendChild(ação)
    display.appendChild(container)
}
}
