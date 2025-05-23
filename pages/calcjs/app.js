const $result = document.getElementById(`result`)
const $label = document.getElementById(`label`)
function AdicionarLabel(numero) {
    $label.innerText += numero
    $result.innerText = parseInt($label.innerText)
} 
function mais() {
    const resultadodata = $result.innerText
    

}