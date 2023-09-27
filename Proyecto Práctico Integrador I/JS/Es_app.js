//-----------------------CAMBIAR FOTOS-------------------------

document.querySelector(".Cambiarfotos"); {
    rotarImagenes();
    setInterval(rotarImagenes, 4000);
}


var imagenes = new Array (
    ["/Proyecto Práctico Integrador I/DOCUMENTOS/Foto2.jpg"],
    ["/Proyecto Práctico Integrador I/DOCUMENTOS/Banner_principal.jpg"], 
    ["/Proyecto Práctico Integrador I/DOCUMENTOS/Imagen1.jpg"],
    ["/Proyecto Práctico Integrador I/DOCUMENTOS/Imagen2.jpg"]
);

var contador = 0;


function rotarImagenes() {
    contador++
    const imagen = document.querySelector(".Cambiarfotos");
    imagen.style.opacity = "0";
    setTimeout(() => {
        imagen.style.opacity = "1";
        imagen.src = imagenes[contador % imagenes.length][0];
        imagen.alt = imagenes[contador % imagenes.length][1];
    }, 4000);
}

//-----------------------ALERTA DE ENVIO-------------------------

var enviar = document.querySelector("#enviar");
let nombre = document.querySelector("#nombre")
let email = document.querySelector("#email")
let numero = document.querySelector("#numero")
let mensaje = document.querySelector("#mensaje")


enviar.addEventListener("click", function () {
    let texto = (nombre, email, numero, mensaje).value
    if (texto.length == 0) {
        alert("Error falta información.")

    } else {
        alert("¡Gracias por su interés!")

    }
}
);

