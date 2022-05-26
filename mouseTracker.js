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


