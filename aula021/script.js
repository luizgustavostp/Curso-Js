var data = new Date();
var meses = ["janeiro","fevereiro","março","abril","maio", "junho","julho","agosto","setembro","outubro","novembro","dezembro"]
var Month = data.getMonth()
var monthrt = document.getElementById('month')
monthrt.innerHTML = meses [Month]
var table = document.getElementById('tablemnh')
table.classList.add(monthrt.innerHTML)

if (table.classList.contains = monthrt.innerHTML) {
    var days = data.getDate()
    var trselected = document.getElementById(days)
    trselected.style.backgroundColor = "blue"
}