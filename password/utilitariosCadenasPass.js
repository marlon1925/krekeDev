esMayuscula=function(posicionCaracter0){
    let caracter;
    caracter=posicionCaracter0.charCodeAt(0); 
    if(caracter>=65 && caracter<=90){    
        return true;
    }else {
        return false;
    }
}
contarMayusculas=function(cadena){
    let letra;
    let contadorMayusculas=0;
    for(let i=0;i<cadena.length;i++){
        letra=cadena.charAt(i);
           if( esMayuscula(letra)){
            contadorMayusculas=contadorMayusculas+1
           } 
    }
    return contadorMayusculas;
}
contarDigitos=function(cadena){
    let letra;
    let contadorDigitos=0;
    for(let i=0;i<cadena.length;i++){
        letra=cadena.charAt(i);
           if( esDigito(letra)){
            contadorDigitos=contadorDigitos+1
           } 
    }
    return contadorDigitos;
}
esDigito=function(posicionCaracter0){
    let caracter;
    caracter=posicionCaracter0.charCodeAt(0); 
    if(caracter>=48 && caracter<=57) {    
        return true;
    }else {
        return false;
    }
      
}

esCaracterEspecial=function(posicionCaracter0){
    let caracter;
    caracter=posicionCaracter0.charCodeAt(0); 
    if(caracter==45 || caracter==42 || caracter==95) {    
        return true;
    }else {
        return false;
    }
      
}
contarCaracterEspecial=function(cadena){
    let letra;
    let contadorCaracterEspecial=0;
    for(let i=0;i<cadena.length;i++){
        letra=cadena.charAt(i);
           if( esCaracterEspecial(letra)){
            contadorCaracterEspecial=contadorCaracterEspecial+1
           } 
    }
    return contadorCaracterEspecial;
}

mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }
 contarCaracteres=function(cadena) {
    return cadena.length;
}