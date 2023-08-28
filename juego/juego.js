function juego(seleccionado) {
    seleccionado = document.getElementById("usuario").value
    let elementoC = generarElemento();
    let elementoU = generarElemento(seleccionado)
    let rutaC = generarRuta(elementoC);
    let rutaU = generarRuta(elementoU);
    mostrarImagen("imgComputadora", rutaC);
    mostrarImagen("imgUsuario", rutaU);
    let resultado = determinarGanador(elementoC, seleccionado)
    if (resultado == 0) {
        mostrarTexto("resultado", "EMPATE")
    }else{
        mostrarTexto("resultado", "")
    }
    if(resultado == 1){
        mostrarTexto("resultado", "PERDISTE LA PARTIDA!!")
    }else{
        mostrarTexto("resultado", "")
    }
}