
function aleatorios() {
    let numero;
    let numeroMultiplicado;
    let aleatorio;
    numero = Math.random();
    numeroMultiplicado = numero * 101;
    aleatorio = parseInt(numeroMultiplicado);
    return aleatorio;
  }
  
  let aleatorios1 = [];
  
  function generarAleatorios() {
    let numeroRecuperado;
    let aleatoriosCien;
    numeroRecuperado = recuperarInt("txtRecuperado");
    if (numeroRecuperado >= 5 && numeroRecuperado <= 20) {
  
    } else {
      alert("EL NUMERO INGRESADO NO ESTA ENTRE 5 Y 20");
    }
    for (let i = 0; i < numeroRecuperado; i++) {
      console.log(i);
      aleatoriosCien = aleatorios();
      aleatorios1.push(aleatoriosCien);
    }
    mostrarResultados(aleatorios1);
  }
  
  function mostrarResultados(arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table>"
    let miNumero;
    for (let i = 0; i < arregloNumeros.length; i++) {
      miNumero = arregloNumeros[i];
      contenidoTabla += "<tr><td>"
      contenidoTabla += miNumero
      contenidoTabla += "</tr></td>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
  }