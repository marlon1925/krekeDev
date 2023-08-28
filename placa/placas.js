function validarPlaca() {
    let cmpPlaca = document.getElementById("txtPlaca").value;
    let provincia = obtenerProvincia(cmpPlaca);
    let validacion = validarEstructura(cmpPlaca);
    let vehiculo = obtenerTipoVehiculo(cmpPlaca);
    let picoPlaca = obtenerDiaPicoYPlaca(cmpPlaca);
    validarEstructura(cmpPlaca);
    if (validacion != null) {
      mostrarTexto("placa", "Placa incorrecta");
      mostrarTexto("provincia", "");
      mostrarTexto("vehiculo", "");
      mostrarTexto("picoPlaca", "");
    } else {
      mostrarTexto("placa", "Placa correcta");
      if (provincia != null) {
        mostrarTexto("provincia", provincia);
      } else {
        mostrarTexto("provincia", "Provincia incorrecta");
      }
      if (vehiculo != null) {
        mostrarTexto("vehiculo", vehiculo);
      } else {
        mostrarTexto("vehiculo", "Vehiculo incorrecto");
      }
      if (picoPlaca != null) {
        mostrarTexto("picoPlaca", picoPlaca);
      } else {
        mostrarTexto("picoPlaca", "");
      }
    }
  }
  