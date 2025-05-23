for (let i in localStorage) {

    const dataobj = JSON.parse(localStorage.getItem(i))
    if (dataobj != null) {
        const $item = document.createElement(`li`)
        $item.innerHTML = dataobj.tarefa
        $item.setAttribute(`id`,i)

        var display_list = document.getElementById("display-list")

        var botãoremover = document.createElement(`img`)
        botãoremover.setAttribute(`src`,`img/lixeira.svg`)
        botãoremover.classList.add(`btnremver`)

        botãoremover.addEventListener(`click`,() => {
        localStorage.removeItem(i)
        document.getElementById(i).style.display = `none`
        })

        $item.appendChild(botãoremover)
        if(!dataobj.feita) {
            $item.classList.remove("checked")
            $item.insertAdjacentHTML(`afterbegin`,`<img id="img${i}" class="bola" src="img/circulo.svg">`)
        }
        else {
            $item.classList.add("checked")
            $item.insertAdjacentHTML(`afterbegin`,`<img id="img${i}" class="bola" src="img/checked.svg">`)
        }
        
        $item.addEventListener("click",() => {
        const item = document.getElementById(`img${i}`)
        if($item.classList.contains("checked")) {
            $item.classList.remove("checked")
            item.setAttribute(`src`,`img/circulo.svg`)
            
        }
        else {
            $item.classList.add("checked")
            item.setAttribute(`src`,`img/checked.svg`)
        }
        const paia = JSON.parse(localStorage.getItem(i))
        paia.feita = !paia.feita
        localStorage.setItem(i,JSON.stringify(paia))
    })
    display_list.appendChild($item)
}
}
