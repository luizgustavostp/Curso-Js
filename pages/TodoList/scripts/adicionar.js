function add() {
    const obj = document.getElementById(`text`)
    if (obj.value == ""||obj.value.length > 30) {
        alert("Conteudo vazio, ou escede limite de 30 caracteres")
     
    }
    else {
           const $lembrete = {
            tarefa: document.getElementById(`text`).value,
            feita: false
        }
        localStorage.setItem(`${localStorage.length}`,JSON.stringify($lembrete))
    }
}