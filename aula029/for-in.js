let pessoa = {
    nome:'Marcia',
    idade: 55,
    emprego:'Faxineira'

}
let chave = 2
for (chave in pessoa) {
    console.log(chave,pessoa[chave])
}