calcaularPromedioNotas = function () {
    let nota1;
    let nota2;
    let nota3;
    let promedio;
    nota1 = recuperarFlotante("txtNota1");
    nota2 = recuperarFlotante("txtNota2");
    nota3 = recuperarFlotante("txtNota3");
    promedio = calcularPromedio(nota1, nota2, nota3);
    if (promedio < 5 && promedio > 0) {
        cambiarImagen("imgCompror", "../image/reprobado.gif")
    }else if(promedio >= 5 && promedio <= 8){
        cambiarImagen("imgCompror", "../image/buentrabajo.gif")
    } else if(promedio > 8 && promedio <= 10){
        cambiarImagen("imgCompror", "../image/exito.gif")
    }

    cambiarTexto("promedio", promedio.toFixed(2));
}