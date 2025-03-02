if (window.innerWidth < 900) {
    navlist1.style.display = "none"
}
var navlist1 = document.getElementById("navlist")
function voltar() {
    var navlist1 = document.getElementById("navlist")
    navlist1.style.display = "flex"
}
function btn() {
    var btn = document.getElementById('barras')
    var navlist = document.getElementById("navlist")
    

    if (btn.classList.contains("untoogle")) {
        btn.classList.add("toogle")
        btn.classList.remove("untoogle")
        navlist.style.display = 'flex'
        navlist.style.animationPlayState = "running"
        
    }
    else {
        btn.classList.remove("toogle")
        btn.classList.add("untoogle")
        
        navlist.style.display = 'none'
    }
}