const $lista = document.getElementById("lista")

function add() {
    const nomedatarefa = document.getElementById("input").value
    if (nomedatarefa == "") {
        alert("escreva algo")
    }
    else {
        const $tarefa = document.createElement("li")
        $tarefa.innerHTML = nomedatarefa
        const $buttonof = document.createElement("button")
        $tarefa.addEventListener("click" ,()=> {
            $tarefa.setAttribute("class","checked")
        })
        $buttonof.addEventListener("click",()=> {
            $lista.removeChild($tarefa)
        })
        $tarefa.appendChild($buttonof)
        $lista.appendChild($tarefa)
        salvardados()
    }
}

function salvardados() {
    localStorage.setItem("data",$lista.innerHTML)
}
$lista.innerHTML = localStorage.getItem("data")