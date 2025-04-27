/* bascimente declaramos dois valores na porra da promesa, o resolve
e a porra do reject, e se a porra do resolve for o bloco de codigo executado
a merda do then pode catar essa bosta e executar um codigo a partir disso
e o primeiro dado dentro da porra do then vai ser a merda do resolve
nesse caralho, mesma coisa com a porra do reject e catch, basicamente é 
o suicidio em pessoa dependendo dessa porra é totalmente assincrono nesse caralho
e eu preciso aprender mais sobre promise*/
const promesa = new Promise((resolv,rejec) => {
    const nome = {
        nome: 'matheus hwang',
        idade: 44,
        nacionalidade: 'brasileiro'
    }

    if (nome.idade == 44 && nome.nacionalidade == 'brasileiro') {
        resolv('Minha pika está aberta!')
    }
    else {
        rejec('vem comer meu cuzinho por favor')
    }
})