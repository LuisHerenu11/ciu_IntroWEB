/* EJERCICIO: BEEPER 1.2 */ 
var boton = document.querySelector("button")

var agregarBEEP = function(){
    boton.insertAdjacentHTML("beforeend","BEEP!")
    seEjecutaEnEvento()
}
var seEjecutaEnEvento = function(){
    boton.classList.toggle("color")
}

boton.addEventListener("click",agregarBEEP)

