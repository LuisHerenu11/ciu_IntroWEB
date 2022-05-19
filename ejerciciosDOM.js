var primerH1;
primerH1 = document.querySelector("h1")

/* Ejercicio 1.4
primerH1.style.height = 300;
primerH1.style.width = 100;
primerH1.style.backgroundColor = "red";
*/
primerH1.classList.add('square')

var div5 = document.querySelector("div")
/* EJERCICIO 1.5 
    div5.textContent; /* muestra el contenido del elemento como texto
    div5.textContent="cambio el texto random" /* seteo otro string
    div5.textContent= "<p> otro parrafo</p>" /*no interpretara la etiqueta <p> ,lo considera un texto
    div5.innerHTML="<p> inserto un texto con etiqueta usando innerHTML </p>" /* innerHTML si interpreta etiquetas 
    div5.innerHTML; /* Esto me mostrara el elemento y la etiqueta que lo contiene
*/