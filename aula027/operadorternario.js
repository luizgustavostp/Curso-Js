let salario = 2000
idade = 20
let func = {
    nome: 'fernanda',
    cargo: salario <= 1500 ? 'trabalhador' : 'chefe',
    aposentadoria: idade >= 49 ? true : false
}

console.log(func)

let data = new Date()
let horario = 14;

let lojaaberta = horario < 15 ? 'aberta' : 'fechada'

console.log(lojaaberta)

/* operador ternario explain
    primeiramente o operador ternario funciona de forma
    que a variavel tem seu valor variavel de forma que uma condição
    é suposta e se essa condição for verdadeira a variavel assume um valor
    se for false, a variavel assume outro valor
    let sobrenome = 'marcio'
    let nome = sobrenome = 'marcio ? true : false
*/
