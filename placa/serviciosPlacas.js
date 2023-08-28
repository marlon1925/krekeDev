function validarEstructura(placa) {
    let longitudBoolean = false;
    let longitud = placa.length;
    let errorEstructura = false;
    if (longitud == 7 || longitud == 8) {
      mostrarTexto("errorEstructura", "");
      longitudBoolean = true;
    }
    if (longitudBoolean) {
      if (
        esMayuscula(placa, 0) &&
        esMayuscula(placa, 1) &&
        esMayuscula(placa, 2) &&
        esGuion(placa, 3) &&
        esDigito(placa, 4) &&
        esDigito(placa, 5) &&
        esDigito(placa, 6)
      ) {
        if (longitud == 8) {
          esDigito(placa, 7) ? (errorEstructura = null) : null;
        }
      }
    } else {
      mostrarTexto("errorEstructura", "Debe ingresar 7 a 8 caracteres");
    }
  
    return errorEstructura;
  }
  
  function obtenerProvincia(placa) {
    let caracter = placa.charAt(0);
    if (caracter == "A") {
      provincia = "Azuay";
    }
    if (caracter == "B") {
      provincia = "Bolívar";
    }
    if (caracter == "U") {
      provincia = "Cañar";
    }
    if (caracter == "C") {
      provincia = "Carchi";
    }
    if (caracter == "X") {
      provincia = "Cotopaxi";
    }
    if (caracter == "H") {
      provincia = "Chimborazo";
    }
    if (caracter == "O") {
      provincia = "El Oro";
    }
    if (caracter == "E") {
      provincia = "Esmeraldas";
    }
    if (caracter == "W") {
      provincia = "Galápagos";
    }
    if (caracter == "G") {
      provincia = "Guayas";
    }
    if (caracter == "I") {
      provincia = "Imbabura";
    }
    if (caracter == "L") {
      provincia = "Loja";
    }
    if (caracter == "R") {
      provincia = "Los Ríos";
    }
    if (caracter == "M") {
      provincia = "Manabí";
    }
    if (caracter == "V") {
      provincia = "Morona Santiago	";
    }
    if (caracter == "N") {
      provincia = "Napo";
    }
    if (caracter == "S") {
      provincia = "Pastaza";
    }
    if (caracter == "P") {
      provincia = "Pichincha";
    }
    if (caracter == "K") {
      provincia = "Sucumbíos";
    }
    if (caracter == "Q") {
      provincia = "Orellana";
    }
    if (caracter == "T") {
      provincia = "Tungurahua";
    }
    if (caracter == "Z") {
      provincia = "Zamora Chinchipe";
    }
    if (caracter == "Y") {
      provincia = "Santa Elena";
    }
    if (provincia == null || provincia == "") {
      provincia = null;
    }
    return provincia;
  }
  
  function obtenerTipoVehiculo(placa) {
    let segundoCaracter = placa.charAt(1);
    if (segundoCaracter == "A" || segundoCaracter == "Z") {
      tipoVehiculo = "Vehiculo Comercial";
    }
    if (segundoCaracter == "E") {
      tipoVehiculo = "Vehiculo Gubernamental";
    }
    if (segundoCaracter == "X") {
      tipoVehiculo = "Vehiculo de uso oficial";
    }
    if (segundoCaracter == "M") {
      tipoVehiculo = "Vehiculo Municipal";
    }
    if (
      (segundoCaracter != "A") &
      (segundoCaracter != "Z") &
      (segundoCaracter != "E") &
      (segundoCaracter != "X") &
      (segundoCaracter != "M")
    ) {
      tipoVehiculo = "Vehiculo Particular (Privado)";
    }
    if (segundoCaracter == null || segundoCaracter == "") {
      tipoVehiculo = null;
    }
    return tipoVehiculo;
  }
  
  obtenerDiaPicoYPlaca = function (placa) {
      let digito;
      let cadenaUltimoDigito;
      let dia;
    
      cadenaUltimoDigito = placa.length - 1;
      digito = placa.charAt(cadenaUltimoDigito);
    
      if (digito == 1 || digito == 2) {
        dia = "Lunes";
      }
      if (digito == 3 || digito == 4) {
        dia = "Martes";
      }
      if (digito == 5 || digito == 6) {
        dia = "Miercoles";
      }
      if (digito == 7 || digito == 8) {
        dia = "Jueves";
      }
      if (digito == 9 || digito == 0) {
        dia = "Viernes";
      }
      
      return dia;
    };