function modo_oscuro(){
    let cabezal_completo = document.querySelector(".cabezal");
    cabezal_completo.classList.add("oscuro");
    let barra_navegacion = document.getElementsByClassName("iluminado");
    for (element in barra_navegacion){
        barra_navegacion[element].classList.add("oscuro");
        barra_navegacion[element].classList.remove("iluminado");
        barra_navegacion[element].classList.remove("iluminado");
        /* 
            tuve que definir doble remove porqué tengo dos veces definido iluminado en objetos super puestos
            (quería jugar con hover y opacidad entre elementos y no tuve tiempo)
        */
    }
}

function modo_claro(){
    let barra_navegacion = document.getElementsByClassName("oscuro");
    for (element in barra_navegacion){
        barra_navegacion[element].classList.add("iluminado");
        barra_navegacion[element].classList.remove("oscuro");
        barra_navegacion[element].classList.remove("oscuro");
    }
}

function modo_alternado(){
    let cabezal_completo = document.querySelector(".cabezal");
    if(cabezal_completo.classList.contains("oscuro")){
        cabezal_completo.classList.toggle("oscuro");
    }else{
        if(cabezal_completo.classList.contains("iluminado")){
            cabezal_completo.classList.toggle("iluminado");
        }
        /*
            pendiente por falta de tiempo!
        if(cabezal_completo.style.background.color == "E400FF"){
            cabezal_completo.setAttribute.style.background.color = "black";
        }
        */
    }
    let barra_navegacion = document.getElementsByClassName("oscuro");
    for (element in barra_navegacion){
        barra_navegacion[element].classList.toggle("oscuro");
    }
}