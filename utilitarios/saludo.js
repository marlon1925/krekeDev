saludar = function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");

    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura")
    let mensajeBienvenida = "Bienvendo " + nombre + " " + apellido
    mostarTexto("lblResultado" , mensajeBienvenida)
}

mostarTexto = function(idComponente, mensaje){
    let componente
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
    let valorCaja =  recuperarTexto(idComponente);
    let valorInt = parseInt(valorCaja);
    return valorInt;
}

recuperarFloat = function(idComponente){
    let valorCaja =  recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}