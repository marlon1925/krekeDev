calcaularPromedioNotas = function () {
    let nota1;
    let nota2;
    let nota3;
    let promedio;
    nota1 = recuperarFlotante("txtNota1");
    nota2 = recuperarFlotante("txtNota2");
    nota3 = recuperarFlotante("txtNota3");
    promedio = calcularPromedio(nota1, nota2, nota3);
    if (promedio >= 7) {
        cambiarImagen("imgCompror", "../image/exito.gif")
    }else{
        cambiarImagen("imgCompror", "../image/reprobado.gif")
    }

    cambiarTexto("promedio", promedio.toFixed(2));
}