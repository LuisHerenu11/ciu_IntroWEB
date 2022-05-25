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

/* EJERCICIO: RESALTADOR 1.4 */
var parrafos = document.querySelectorAll("p");

var resaltar = function(){
    this.classList.toggle("resaltado")
}

for(p in parrafos){
    parrafos[p].addEventListener("click",resaltar)
}
