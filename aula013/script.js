function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtidade');
    var idade = ano - fano.value;
    var sexo = document.getElementsByName('radsex')
    var genero = '';
    var img = document.getElementById('img')
    var res = document.getElementById('res');
    if (sexo[0].checked) {
        genero = 'homem'
        if(idade < 10) {
            img.src = 'imagens/criança-h.jpg'
        }
        else if (idade > 10 && idade < 18) {
            img.src = 'imagens/jovem-h.jpg'
        }
        else if (idade > 18 && idade < 50) {
            img.src = 'imagens/adulto-h.jpg'
        }
        else {
            img.src = 'imagens/idoso-h.jpg'
        }
        if (idade = 0 || idade > 120) {
            alert('Verifique sua idade!')
        }
    }
    else {
        genero = "mulher"
        if(idade < 10) {
            img.src = 'imagens/criança-m.jpg'
        }
        else if (idade > 10 && idade < 18) {
            img.src = 'imagens/jovem-m.jpg'
        }
        else if (idade > 18 && idade < 50) {
            img.src = 'imagens/adulto-m.jpg'
        }
        else {
            img.src = 'imagens/idoso-m.jpg'
        }
        if (idade = 0 || idade > 120) {
            alert('Verifique sua idade!')
        }
    }
    res.innerText = `Você é ${genero} e tem ${idade} anos!`
}
