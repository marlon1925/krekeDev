

calcularValorDescuento=function(monto,porcentajeDescuento,){
    let porcentaje;
    porcentaje=(monto*porcentajeDescuento)/100;
    return porcentaje;
}

calcularIva=function(monto){
    let iva;
    iva=(monto*12)/100;
    return iva;
}

calcularSubtotal=function(precio,cantidad){
    let subtotal;
    subtotal= precio*cantidad
    return subtotal;
}

calcularTotal=function(subtotal,descuento,iva){
    let total;
    total=(subtotal-descuento)+iva;
    return total;
}

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let descuento1;
    let descuento2;
    let descuento3;
    let subtotalR;
    let cantidadR;
    cantidadR = parseInt(cantidad);
    descuento1 = 3 / 100
    descuento2 = 4 / 100
    descuento3 = 5 / 100
    if (cantidadR < 3) {
        let calculado;
        subtotalR = subtotal * 0.0
        calculado = parseFloat(subtotalR);
        return calculado;
    } else if (cantidadR >= 3 && cantidadR <= 5) {
        let calculado;
        subtotalR = subtotal * descuento1
        calculado = parseFloat(subtotalR);
        return calculado;
    } else if (cantidadR >= 6 && cantidadR <= 11) {
        let calculado;
        subtotalR = subtotal * descuento2
        calculado = parseFloat(subtotalR);
        return calculado;
    } else if (cantidadR >= 12) {
        let calculado;
        subtotalR = subtotal * descuento3
        calculado = parseFloat(subtotalR);
        return calculado;
    }

}