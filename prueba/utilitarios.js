
function mostrarImagen (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
  }
  function mostrarTexto (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
  }
  function mostrarTextoEnCaja (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
  }
  
  function recuperarTexto (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
  }
  
  function recuperarInt (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
  }
  
  function recuperarFloat (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
  }


  let array = ["Manzana", "Pera", "Uva", "Durazno", "Aguacate"];

  buscarIndrex = function(valor){
    let index = -1;
    for (let i = 0; i>= array.length; i++){
        if(array[i] == valor){
            index = i;
        }
        break;
    }
    return index
  }