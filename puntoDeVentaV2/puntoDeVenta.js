calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let iva;
    let valorTotal;
    let valorIVAR;
    let descuentoR;
    let subtotalR;
    let totalR;
    //1. Recuperar el nombre del producto como String
    //2. Recuperar el precio como float
    //3. Recuperar cantidad como int
    //4. Recuperar el porcentaje de descuento como int
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    /*
        Caso de prueba: 
            precioProducto: 5.4  cantidad: 10
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
    nombreProducto = recuperarTexto("txtProducto");
    precioProducto = recuperarFloat("txtPrecio");
    cantidad = recuperarInt("txtCantidad");
    valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal);



    valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
    mostrarTexto("lblDescuento", valorDescuento);


   
    iva = valorSubtotal - valorDescuento;
    valorIVA = calcularIva(iva);
    mostrarTexto("lblValorIVA", valorIVA);


   

     //VALIDACIONES*****
    
    if (esProductoValido(nombreProducto, "lblError1") & esCantidadValida(cantidad, "lblError2") & esPrecioValido(precioProducto, "lblError3")) {

    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    valorSubtotal = valorSubtotal.toFixed(2);
    valorDescuento = valorDescuento.toFixed(2);
    valorIVA = valorIVA.toFixed(2);
    valorTotal = valorTotal.toFixed(2);

    mostrarTexto("lblSubtotal", valorSubtotal);
    mostrarTexto("lblDescuento", valorDescuento);
    mostrarTexto("lblValorIVA", valorIVA);
    mostrarTexto("lblTotal", valorTotal,);


    } else {
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
    }


    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */



}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "");
    mostrarTextoEnCaja("txtCantidad", "");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblResumen", "");
}
/* SI TODO FUNCIONA, HACER UN PUSH */



esProductoValido = function (nombre, idComponente) {
    let nombre2
    nombre2 = nombre.length;
    if (nombre2 == "") {
        mostrarTexto(idComponente, "*CAMPO OBLIGATORIO");
        return false;
    } else if (nombre2 < 0 || nombre2 > 10) {
        mostrarTexto(idComponente, "*EL PRODUCTO NO PUEDE TENER MAS DE 10 CARACTERES");
        return false;
    } else {
        mostrarTexto(idComponente, "");
        return true;

    }

}
esCantidadValida = function (cantidad, idComponente) {
    let cantidadR;
    cantidadR = parseInt(cantidad);
    if (isNaN(cantidadR)) {
        mostrarTexto(idComponente, "*CAMPO OBLIGATORIO");
        return false;
    } else if (cantidadR < 0 || cantidadR > 100) {
        mostrarTexto(idComponente, "*EL PRODUCTO NO PUEDE SOBREPASAR LAS 100 UNIDADES");
        return false;
    } else {
        mostrarTexto(idComponente, "");
        return true;
    }

}

esPrecioValido = function (precio, idComponente) {
    let precioR;
    precioR = parseFloat(precio);
    if (isNaN(precioR)) {
        mostrarTexto(idComponente, "*CAMPO OBLIGATORIO");
        return false;
    } else if (precioR < 0.0 || precioR > 50.0) {
        mostrarTexto(idComponente, "*EL VALOR TOTAL A PAGAR NO PUEDE EXCEDER A LOS USD 50$");
        return false;
    } else {
        mostrarTexto(idComponente, "");
        return true;
    }

}