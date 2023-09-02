let notas = [];

function agregarElemetos() {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

function probarAgregar() {
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota")
    agregarNota(notaRecuperada);
}

function agregarNota(nota) {
    notas.push(nota);
}

function recuperarArreglo() {
    let notaR
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice]
        console.log(notaR)
    }
}

function calcularPromedio() {
    let sumaNotas = 0;
    let promedio = 0;
    let notaR
    for (let i = 0; i < notas.length; i++){
        notaR = notas[i]
        sumaNotas += notaR;
    }
    console.log(sumaNotas)
    promedio = sumaNotas/notas.length;
    return promedio;
}

function ejecutarPromedio (){
    let promedio = calcularPromedio()

    mostrarTexto("txtPromedio", promedio);
}