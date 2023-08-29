function ejecutarPrueba1(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje)
}

function ejecutarPrueba2(){
    let mensaje;
    mensaje = recuperarTexto("txtCadena");
    let invertido = invertirCadena(mensaje);
    mostrarTexto("lblResultado", invertido)
}

function recorrerCadena (cadena){
    let caracter;
    for(let posicion = 0; posicion<cadena.length; posicion++){
        caracter = cadena.charAt(posicion);
        console.log("Caracter "+caracter+" posicion "+posicion)
    }
    for(let posicion=0; posicion<=cadena.length-1;posicion){
        caracter = cadena.charAt(posicion);
        console.log("CARACTER "+caracter+" posicion "+posicion++)
    }
}

function invertirCadena(cadena){
    let letra;
    let resultado = "";
    for(let posicion = cadena.length-1; posicion>=0; posicion--){
        letra = cadena.charAt(posicion) 
        resultado = resultado + letra;
    }
    return resultado
}