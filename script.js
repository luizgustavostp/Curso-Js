let hamburguer = document.getElementById("hamburguer")
let display = document.querySelector("div#displayhamburguer")
let displaystyle = window.getComputedStyle(display).display
function fodase() {
    console.log("consolo logo1")
    displaystyle = window.getComputedStyle(display).display
    console.log("consolo logo2")
    if (displaystyle == "none") {
        console.log("consolo logo")
        display.style.display = "block"
    }
    else {
        display.style.display = "none"
    }
}