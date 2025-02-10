function tabuada() {


var number = document.getElementById('txtn')
var tab = document.getElementById('tab')

if (number.value.length == 0) {
    alert('coloque outro numero por favor')
}
else {
    var c = 0;
    tab.innerHTML = ""
    while (c <=9) {
        let n = Number(number.value)
        let option = document.createElement("option")
        option.innerHTML = `${n} x ${c} = ${n*c}`
        tab.appendChild(option)
        c++
    }
}
}