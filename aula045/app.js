
function register() {
    const usuarioinserido = document.getElementById("user").value
    const senhainserida = document.getElementById('password').value
    const senhanovamente = document.getElementById('passwordagain').value
    if (localStorage.getItem(usuarioinserido)) {
        alert("já existe um usuario com esse username")
    }
    else {
    if (senhainserida == senhanovamente) {
    localStorage.setItem(usuarioinserido,senhainserida)
    console.log('funcionou')
    }
}
}
function login() {
    const usuarioinserido = document.getElementById("user").value
    const senhainserida = document.getElementById('password').value
    if (localStorage.getItem(usuarioinserido)) {
        let value = localStorage.getItem(usuarioinserido)
        if (value == senhainserida) {
            window.location = 'index.html'
        }
        
    }
}