const arrray = [10,440,20,30,0]
const objeto = {
    caneta: `bic`,
    mochila: `nike`,
    recreio: 13.50
}
/* o for in pega a variavel de inciação e transforma no indice de cada
item do array*/

/* mas o for of pega cada item de dentro de dessa merda */
console.log(`for of`)
for (let i of arrray) {
    console.log(i)
}
for (let i in objeto) {
    console.log(`key:${i},value: ${objeto[i]}`)
}

console.log(`------`)
console.log(`foeach`)
/* o foreach não retorna coisas se usarmos como valor pra ser retornado
e virar uma variavel*/
arrray.forEach(item => {
    console.log(item)
})
console.log(`---------`)
console.log(`map - array`)
/*o map pode ser usado de argumento para retornar algo em uma var 
a variavel outra var vira uma do tipo que usamos o map e cada item entra
com o retorno e não precisa especificamente conter o item pra ser retornado*/
const outraarray = arrray.map(item => {
    return item *1000
})
console.log(outraarray)