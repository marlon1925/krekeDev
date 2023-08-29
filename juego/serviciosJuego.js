//Funcion que genera numero entre 1 a 3
function obtenerAleatorio() {
    let aleatorio = Math.random();
    let numeroRandom = aleatorio * 3;
    let numeroEntero = parseInt(numeroRandom);
    // console.log(numeroEntero + 1)
    mostrarTextoEnCaja("computadora", (numeroEntero + 1))
    return numeroEntero + 1;
}

function generarElemento(numero) {
    if (numero == 1) {
        elemento = "piedra";
    } else if (numero == 2) {
        elemento = "papel";
    } else {
        elemento = "tijera";
    }
    return elemento;
}


function determinarGanador(eleccioJugador1, eleccioJugador2) {
    let resultado;
    if (eleccioJugador1 === eleccioJugador2) {
        resultado = 0;
    }
    if (eleccioJugador1 === "piedra" && eleccioJugador2 === "papel") {
        resultado = 2;
    } else if (eleccioJugador1 === "papel" && eleccioJugador2 === "piedra") {
        resultado = 1;
    }
    if (eleccioJugador1 === "tijera" && eleccioJugador2 === "papel") {
        resultado = 1;
    } else if (eleccioJugador1 === "papel" && eleccioJugador2 === "tijera") {
        resultado = 2;
    }
    if (eleccioJugador1 === "tijera" && eleccioJugador2 === "piedra") {
        resultado = 2;
    } else if (eleccioJugador1 === "piedra" && eleccioJugador2 === "tijera") {
        resultado = 1;
    }
    return resultado
}

function generarRuta (nombre){
    let ruta;
    if(nombre === "tijera"){
        ruta = "./image/tijera.png"
    }
    if(nombre === "piedra"){
        ruta = "./image/piedra.png"
    }
    if(nombre === "papel"){
        ruta = "./image/papel.png"
    }
    return ruta
}
