saludar = function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");

    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura")
    let mensajeBienvenida = "Bienvendo " + nombre + " " + apellido
    mostarTexto("lblResultado" , mensajeBienvenida)
    mostrarImagen("imgSaludar", "./image/saludo.gif")
    mostarTextoEnCaja("txtNombre", "")
}

