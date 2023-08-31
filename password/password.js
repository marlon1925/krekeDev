
validarPassword=function(password){
    let longPassword;
    let mensajesError="";
    longPassword=password.length;
    if(longPassword>=8 && longPassword<=16){    
    }else{
        mensajesError=" el password debe tener entre 8 y 16 caracteres\n";
    }
    
    if(contarMayusculas(password)>0){

    }else{
        mensajesError=mensajesError+" "+"el password debe tener al menos una mayuscula\n";
    }
    if(contarDigitos(password)>0){

    }else{
        mensajesError=mensajesError+" "+"el password debe tener al menos un digito\n";
    }
    if(contarCaracterEspecial(password)>0){

    }else{
        mensajesError=mensajesError+" "+"el password debe tener al menos un caracter especial (-,_,*)\n";
    }
    return mensajesError;
}
ejecutarValidacion=function(){
let password;
let variablesError;
password=recuperarTexto("txtCadena");
variablesError=validarPassword(password);
if(variablesError==""){

    mostrarTexto("lblResultadoCadena","Su password es correcto");

}else{
    mostrarTexto("lblResultadoCadena",variablesError);
}

}