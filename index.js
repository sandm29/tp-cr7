const boton = document.getElementById("siu")
const frase = document.getElementById("frase")

function animation(){

    frase.classList.add("animando")

    setTimeout( function(){
        frase.classList.remove("animando")
    },5000)

    
}