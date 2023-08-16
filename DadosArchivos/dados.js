jugar = function () {
    let valorDado;
    valorDado = lanzarDados();
    cambiarTexto("lblNumero", valorDado);
    if (valorDado > 3) {
        cambiarTexto("lblResultado", "ES MAYOR a 3")
        cambiarTexto("lblComparacion", "GANASTE")
    } else {
        cambiarTexto("lblResultado", "Es MENOR a 3")
        cambiarTexto("lblComparacion", "PERDISTE")
    }
}

//Crear una funcion llamada lanzadaDADO
//No recibe parametros
//Retorna un numero aleatorio entre 1 y 6

lanzarDados = function () {
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio * 6;
    numeroEntero = parseInt(numeroMultiplicado);
    valorDado = numeroEntero + 1;
    return valorDado;


}