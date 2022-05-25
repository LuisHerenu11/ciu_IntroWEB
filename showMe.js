var botonMoney = document.querySelector("#money")
var botonMiami = document.querySelector("#miami")
var botonFort = document.querySelector("#fort")

var imagenMoney = document.querySelector("#moneyIMG")
var imagenMiami = document.querySelector("#miamiIMG")
var imagenFort = document.querySelector("#fortIMG")

botonMoney.addEventListener("click", function(){
    imagenMoney.classList.toggle("oculto")
})

botonMiami.addEventListener("click",function(){
    imagenMiami.classList.toggle("oculto")
})

botonFort.addEventListener("click",function(){
    imagenFort.classList.toggle("oculto")
})

var ocultar = function () {
    this.classList.add("oculto")
}

imagenMoney.addEventListener("click",ocultar)
imagenMiami.addEventListener("click",ocultar)
imagenFort.addEventListener("click",ocultar)

/*
imagenMoney.addEventListener("click",function(){
    this.classList.add("oculto")
})

imagenMiami.addEventListener("click",function(){
    this.classList.add("oculto")
})

imagenFort.addEventListener("click",function(){
    this.classList.add("oculto")
})
*/