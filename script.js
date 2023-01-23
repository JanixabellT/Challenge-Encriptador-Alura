function encriptar (){

var frase = document.getElementById("textoEncriptado").value.toLowerCase();

var textoEncriptado = frase.replace(/e/img, "enter");
var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

   if (textoEncriptado == ""){
        document.getElementById("textoDesencriptado").innerHTML = "";
        document.getElementById("informacion1").style.display = "contents";
        document.getElementById("informacion1").style.display = "inherit";
        document.getElementById("informacion2").style.display = "contents";
        document.getElementById("informacion2").style.display = "inherit";
        
    } else{
        document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
        document.getElementById("botonCopiar").style.display = "show";
        document.getElementById("botonCopiar").style.display = "inherit";
        document.getElementById("textoDesencriptado").style.backgroundImage = "none";
        document.getElementById("botonCopiar").style.display = "inherit";

    }
}


function desencriptar (){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    
    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
    
    if (textoEncriptado == ""){
        document.getElementById("textoDesencriptado").innerHTML = "";
        document.getElementById("informacion1").style.display = "contents";
        document.getElementById("informacion1").style.display = "inherit";
        document.getElementById("informacion2").style.display = "contents";
        document.getElementById("informacion2").style.display = "inherit";
        
    } else{
        document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
        document.getElementById("botonCopiar").style.display = "show";
        document.getElementById("botonCopiar").style.display = "inherit";
        document.getElementById("textoDesencriptado").style.backgroundImage = "none";
        document.getElementById("botonCopiar").style.display = "inherit";
    
    }
}

function copiar (){

    var contenido = document.querySelector("#textoDesencriptado");

    contenido.select();
    document.execCommand("copy");

}