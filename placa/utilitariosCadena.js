function esMayuscula(caracter, posicion) {
    let ascii = caracter.charCodeAt(posicion);
    let error = false;
    console.log(ascii)
    if (ascii >= 65 && ascii <= 90) {
        mostrarTexto("errorEstructura","")
        error = true
    } else {
        mostrarTexto("errorEstructura","Debe ingresar una letra en Mayuscula en el caracter: " + (posicion + 1))
        error = false;
    }
    return error;
}


function esDigito(caracter, posicion) {
    let ascii = caracter.charCodeAt(posicion);
    let error = false;
    console.log(ascii)
    if (ascii >= 48 && ascii <= 57) {
        mostrarTexto("errorEstructura","")
        error = true;
    } else {
        mostrarTexto("errorEstructura","Debe ingresar una digito en el caracter: " + (posicion + 1))
        error = false;
    }
    return error;
}
function esGuion(caracter, posicion) {
    let ascii = caracter.charCodeAt(posicion);
    let error = false;
    console.log(ascii)
    if (ascii === 45) {
        mostrarTexto("errorEstructura","")
        error = true;
    } else {
        mostrarTexto("errorEstructura","Debe ingresar una guion en el caracter: " + (posicion + 1))
        error = false;
    }
    return error;
}

