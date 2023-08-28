function juego(seleccionado) {
    seleccionado = document.getElementById("usuario").value
    let elemento = generarElemento();
    let rutaC = generarRuta(elemento);
    let rutaU = generarRuta(seleccionado);
    mostrarImagen("imgComputadora", rutaC);
    mostrarImagen("imgUsuario", rutaU);
    let resultado = determinarGanador(elemento, seleccionado)
    if (resultado == 0) {
        mostrarTexto("resultado", "EMPATE")
    }else if(resultado == 1){
        mostrarTexto("resultado", "PERDISTE LA PARTIDA!!")
    }else{
        mostrarTexto("resultado", "GANASTE LA PARTIDA!! ")
    }
}