var primerH1;
primerH1 = document.querySelector("h1")

/* Ejercicio 1.4
primerH1.style.height = 300;
primerH1.style.width = 100;
primerH1.style.backgroundColor = "red";
*/
primerH1.classList.add('square')

var div5 = document.querySelector("div")
/* EJERCICIO 1.5 */ 
div5.textContent; /* muestra el contenido del elemento como texto */
div5.textContent="cambio el texto random" /* seteo otro string */
div5.textContent= "<p> otro parrafo</p>" /*no interpretara la etiqueta <p> ,lo considera un texto */
div5.innerHTML="<p> inserto un texto con etiqueta usando innerHTML </p>" /* innerHTML si interpreta etiquetas */ 
div5.innerHTML; /* Esto me mostrara el elemento y la etiqueta que lo contiene */

/* EJERCICIO 1.6 */
var imagen = document.querySelector("img")
imagen.getAttribute("src") /* es un GET clasico */
imagen.setAttribute("src","mu.png") /*es el SET clasico */  

/* EJERCICIO 1.7 */
var parrafos = document.querySelectorAll("p") /* arreglo con todos los <P> */
/* PARA CADA ELEMENTO EN PARRAFOS HACER */ 
for (element in parrafos){
    /* CAMBIO DE TEXTO CONTENIDO */
    parrafos[element].textContent= "HOLA MUNDO!"
}

/* EJERCICIO 1.8 */
var divSource = document.querySelector("#source")
var divDestino = document.querySelector("#destination")
/* Esta es la unica forma que me funciono para pasar contenido de uno a otro*/
divDestino.innerHTML = divSource.innerHTML;

