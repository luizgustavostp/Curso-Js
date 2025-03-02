
    function cell(nome) {
    return {
    Marca: "ASUS",
    Modelo: nome,
    cor: "Azul",
    specs: {
        HZ: 120,
        resoluçãoX: 1920,
        resoluçãoY:1080,
        height:18,
        width:7,
        espessura:7.5
    },
    funções: {
        power: 0,
        volume: 0,
        ligar:  ligar() {
            nome.funções.power = 0 ? nome.funções.power++ : nome.funções.power--
        },
        aumentarvolume: aumentar() {
            nome.funções.volume = 10 ? console.log('Chegou no limit') : nome.funções.volume++
        },
        abaixarvolume: abaixar() {
            nome.funções.volume = 0 ? console.log('Você está no volume mais baixo') : nome.funções.volume--
        }
    }

    }
    
    }

    let celular = cell("zenfone")
    console.log(celular)

