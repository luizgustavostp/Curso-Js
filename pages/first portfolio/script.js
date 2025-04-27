
function btn() {
    var btn = document.getElementById('btn')
    var options = document.getElementById('options')

    if (btn.classList.contains('baixo')) {
        btn.classList.remove('baixo')
        btn.classList.add('cima')
        btn.innerHTML = 'Select <img src="src/icons/setacima.png" alt="">'
        options.style.display = 'flex'

    }
    else if (btn.classList.contains('cima')) {
        btn.classList.remove('cima')
        btn.classList.add('baixo')
        btn.innerHTML = 'Select <img src="src/icons/setabaixo.png" alt="">'
        options.style.display = 'none'
    }
}