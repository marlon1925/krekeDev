function juego(seleccionado) {
    seleccionado = document.getElementById("usuario").value
    console.log(seleccionado)
    //El numeo aleatorio entre 1 a 3
    let numeroComputadora = obtenerAleatorio();
    //elemento seleccionado por la computadora
    let elementoC = generarElemento(numeroComputadora);
    //eleemnto seleccionado por la personas
    let elementoU = generarElemento(seleccionado)
    console.log(elementoC)
    //se hace una consulta a la ruta correspondiente
    let rutaC = generarRuta(elementoC);
    let rutaU = generarRuta(elementoU);
    //muestra las imagenes dependiendo de los elementos
    mostrarImagen("imgComputadora", rutaC);
    mostrarImagen("imgUsuario", rutaU);
    let resultado = determinarGanador(elementoC, elementoU)
    console.log(resultado)
    if (resultado == 0) {
        mostrarTexto("resultado", "EMPATE")
    }
    if(resultado == 1){
        mostrarTexto("resultado", "PERDISTE LA PARTIDA!!")
    }
    if(resultado == 2){
        mostrarTexto("resultado", "GANASTE LA PARTIDA!!")
    }
}