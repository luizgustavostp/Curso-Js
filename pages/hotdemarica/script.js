
function login() {
    let username = document.getElementById('username')
    let password = document.getElementById('password')

    console.log(username.value)
    if (username.value == 'user1422' && password.value == '03556novemta'){
        window.location='atrizes.html'
    }
    else {
        alert('usuário ou senha incorretos ')
    }
}