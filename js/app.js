numero = prompt("¿En qué numero estoy pensando?");

if (numero > 1000){
    alert("¡Adivinaste! =O")
}

else if(numero <= 1000){
    alert("No adivinaste :(")
}

texto = prompt("¿En qué palabra estoy pensando?");

if (texto == "hola"){
    alert("¡Lo hiciste!")
}

else if(texto != "hola"){
    alert("No estoy pensando en esa palabra :(")
}

otroNumero = prompt("¿En qué número estoy pensando?");

if (otroNumero > 10 && otroNumero < 50){
    alert("¡Si! Es correcto")
}

else if(otroNumero <= 10 || otroNumero >= 50){
    alert("No es correcto =/")
}






