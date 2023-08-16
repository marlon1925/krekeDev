calcularDescuento = function (monto, porcentajeDescuento) {
    let descuento;

    descuento = (monto * porcentajeDescuento) / 100;

    return descuento;
}

calcularIVA = function (monto) {
    let valorIVA;
    valorIVA = (monto * 12) / 100
    return porcentajeIVA;
}

calcularSubTotal = function(precio, cantidad){
    let subTotal;
    subTotal = precio * cantidad
    return subTotal;
}

calcularTotal = function(subTotal, descuento, iva){
    let total;
    total = (subTotal - descuento) + iva
    return total;
}
