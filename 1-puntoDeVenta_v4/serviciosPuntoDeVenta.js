calcularDescuento = function (monto, porcentajeDescuento) {
    let descuento;

    descuento = (monto * porcentajeDescuento) / 100;

    return descuento;
}

calcularIVA = function (monto) {
    let valorIVA;
    valorIVA = (monto * 12) / 100;
    return valorIVA;
}

calcularSubTotal = function(precio, cantidad){
    let subTotal;
    subTotal = precio * cantidad
    return subTotal;
}

calcularTotal = function(subTotal, iva){
    let total;
    total = subTotal + iva
    return total;
}
