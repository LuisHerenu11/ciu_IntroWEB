var body = document.querySelector("#body")
var imagen = document.querySelector("#imagenID")

/*
var cambiarPropiedad = function(infoEvent){
    imagen.setAttribute("top",infoEvent.clientY)
    imagen.setAttribute("left",infoEvent.clientX)
}
*/

body.addEventListener("mousemove", function(infoEvent){
    imagen.setAttribute("top",infoEvent.clientY)
    imagen.setAttribute("left",infoEvent.clientX)
    console.log("posicion de img top: "+imagen.getAttribute("top")+" left: "+imagen.getAttribute("left"))
    console.log("posicion de mouse eje Y: "+infoEvent.clientY+" eje X: "+infoEvent.clientX)
})


var imagenMagica = document.getElementById("imagenMagica")
var divSecreto = document.getElementById("divOculto")


divSecreto.addEventListener("mouseover", function(){
    imagenMagica.classList.add("ocultarImagen")
})

var inputFondo = document.getElementById("inputFondo")

inputFondo.addEventListener("keydown",function(infoEvento){
    body.classList.toggle("fondo")
    /*console.log("Que esta tomando el infoEvento.KeyCode: "+String.fromCharCode(infoEvento.keyCode))*/
    console.log("Que esta tomando el infoEvento.KeyCode: "+infoEvento.keyCode)
    if (infoEvento.keyCode == 8){
        body.style.backgroundColor = "#FFFFFF" /* cod 8 es la tecla de borrar y ##FFFFFF es blanco */
        console.log("ESTOY DENTRO DEL IF")
    }else if(infoEvento.keyCode == 13){
        /* body.style.backgroundColor = "red"  esto fue lo primero que hice, solo funciona hardcodeando el value*/
        body.style.backgroundColor = inputFondo.value /* esta es la versión final, cuando entendi como usar el value */ 
        console.log("el get attribute con value da: "+inputFondo.value)  /* log para ver que esta pasando */
        console.log("el get attribute con colorName da: "+inputFondo.name) /* log para ver que esta pasando */
        console.log("ESTOY DENTRO DEL ELSE IF")
    }else{
        console.log("ESTOY EN EL ELSE , EL KEY CODE ES: "+infoEvento.keyCode+" <--- VALOR NUMERICO")
    }
    /* cod 8 es borrar , cod 13 es enter */ 
})
