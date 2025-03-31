var tiposdewall = ['urbana','natural']
var indexoriginal = document.getElementById('html').innerHTML
var indexmodificado = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="src/estilos/style.css">
</head>
<body onload="loadWall()">
    <header>
        
        <nav id="navbar">
            <div id="logo">WALL</div>
            <ul id="navbarlist">
                    <li class="navbar-item"><a href="#urbana">Paisagem</a></li>
                    <li class="navbar-item"><a href="">Carros</a></li>
                    <li class="navbar-item"><a href="">Abstrato</a></li>
                </a>
            </ul>
        </nav>
    </header>
    <main id="main">
        <div id='paisagem'>
    <btn onclick="voltar()" id='voltar'>&leftarrow;voltar</btn>
        </div>
    </main>
    <script src="src/script/script.js"></script>
</body>`


function carregarowallpaperselecionado(iddowallpaper) {
    document.getElementById('html').innerHTML = indexmodificado
    var display = document.getElementById('paisagem')
    let wallpapers = 4
    var btnvoltar = document.getElementById('voltar')
    btnvoltar.setAttribute('onclick','voltar()')
    btnvoltar.display = 'block'

    for (let i = 1;i <= wallpapers;i++) {   
        let frameatual = document.createElement('a')
        frameatual.style.backgroundImage = `url(src/pacotes/${tiposdewall[iddowallpaper]}/wall${i}.jpg)`
        display.appendChild(frameatual)
     }

}
function voltar() {
    document.getElementById('html').innerHTML = indexoriginal
}