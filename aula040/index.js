let body = document.getElementById('body')
function criarelement(callback,inside) {
    let button = document.createElement('button')
    button.innerText = inside
    callback(button)
    body.appendChild(button)

}

var botão = criarelement(function(button){
    button.style.color = 'red'
    console.log('funfou')

},'Botão primario')


var senteiproscrias = criarelement(function(button){
    button.style.color = 'blue'
    button.innerText +=  ' sentei denovo pros crias'
},'Segundo botão')
// usei callback function da mesma forma usada no exemplo

function CriarSerhumano(callback,callback2,nome,idade,sexualidade) {
    this.nome = nome,this.idade = idade,this.sexualidade = sexualidade,this.primeirafunção = callback(),this.segundafunção = callback2()
}

let Leticia = new CriarSerhumano(function falar() {
    console.log('eu sou a ex namorada do gustavo')
},function dizer() {
    console.log('eu amo o gustavo')
},'leticia',15,'Feminino')

console.log(Leticia)