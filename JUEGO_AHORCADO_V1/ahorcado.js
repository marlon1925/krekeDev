//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos=0;
let coincidencias=0;
let errores=0;
esMayuscula = function (caracter) {
    let caracterAscii;
    caracterAscii = caracter.charCodeAt(0);
    if (caracterAscii >= 65 && caracterAscii <= 90) {
        return true;
    } else {
        return false;
        console.log(first)
    }
}
guardarPalabra = function () {
    let textoCaja;
    let longTextoCaja;
    let mensajeError = "";
    let numeroMayus;
    textoCaja = recuperarTexto("txtSecreta");
    longTextoCaja = textoCaja.length;
    if (longTextoCaja == 5) {

    } else {
        mensajeError = mensajeError + " La palabra secreta debe tener 5 caracteres";
    }
    numeroMayus = contarMayusculas(textoCaja);
    if (numeroMayus == 5) {

    } else {
        mensajeError = mensajeError + " La palabra secreta debe tener solo letras Mayusculas";

    }
    if (mensajeError == "") {
        palabraSecreta = textoCaja;
        console.log(palabraSecreta);
    } else {
        alert(mensajeError);
    }
}
mostrarLetra = function (letra, posicion) {
    if (posicion == 0) {
        mostrarTexto("div0", letra)
    } else if (posicion == 1) {
        mostrarTexto("div1", letra)
    } else if (posicion == 2) {
        mostrarTexto("div2", letra)
    } else if (posicion == 3) {
        mostrarTexto("div3", letra)
    } else if (posicion == 4) {
        mostrarTexto("div4", letra)
    }
}
validar=function(letra){
    let letrasEncontradas=0;
    for(let i=0;i<palabraSecreta.length;i++){
        if(letra==palabraSecreta.charAt(i)){
            mostrarLetra(letra,i);
            letrasEncontradas=letrasEncontradas+1;
            coincidencias=coincidencias+1;
        }
    }
    if(letrasEncontradas==0){
        alert("la letra no es parte de la palabra");
        errores=errores+1;
        mostrarAhorcado();
    }
}
ingresarLetra=function(){
    let textoCajaL;
    let validacionMayus;
    textoCajaL = recuperarTexto("txtLetra");
    validacionMayus=esMayuscula(textoCajaL);
    if(validacionMayus==true){
        validar(textoCajaL);
        if(coincidencias==5 && intentos<=10){
            mostrarImagen("ahorcadoImagen","ganador.gif")
        }
        if(intentos==10 && coincidencias!=5){
            mostrarImagen("ahorcadoImagen","gameOver.gif")
        }
    }else{
        alert("Solo se aceptan mayusculas")
    }
    intentos=intentos+1;
}
mostrarAhorcado=function(){
    if(errores==1){
        mostrarImagen("ahorcadoImagen","Ahorcado_01.png")
    }else if(errores==2){
        mostrarImagen("ahorcadoImagen","Ahorcado_02.png")
    }else if(errores==3){
        mostrarImagen("ahorcadoImagen","Ahorcado_03.png")
    }else if(errores==4){
        mostrarImagen("ahorcadoImagen","Ahorcado_04.png")
    }else if(errores==5){
        mostrarImagen("ahorcadoImagen","Ahorcado_05.png")
    }else if(errores==6){
        mostrarImagen("ahorcadoImagen","Ahorcado_06.png")
    }else if(errores==7){
        mostrarImagen("ahorcadoImagen","Ahorcado_07.png")
    }else if(errores==8){
        mostrarImagen("ahorcadoImagen","Ahorcado_08.png")
    }else if(errores==9){
        mostrarImagen("ahorcadoImagen","Ahorcado_09.png")
    }
}