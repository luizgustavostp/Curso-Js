let estudante = { //aqui temos um objeto / classe em javascript
    nome: 'Maria',
    sexo: "Feminino" , 
    gostosa: true , 
    idade: 19 ,
};
estudante.idade += 90

let xicara = {
    cor: 'azul',
    material: 'marmore',
    alca: true,
}

function exibirObjeto(core) {
    console.log(core)
}

exibirObjeto(xicara)

exibirObjeto(estudante)