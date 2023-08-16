calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");
    //4. Recuperar el porcentaje de descuento como int
    porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal = calcularSubTotal(precioProducto, cantidad);
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    mostrarTexto("lblSubtotal", valorSubtotal)
    /*
        Caso de prueba: 
            precioProducto: 5.4  cantidad: 10
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
    //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento

    valorDescuento = calcularDescuento(valorSubtotal, porcentajeDescuento);

    //7. Mostrar el resultado en el componente lblDescuento

    mostrarTexto("lblDescuento", valorDescuento)

    /*
        Caso de prueba: 
            precioProducto: 5.4  cantidad: 10 descuento: 10
            Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    //   El IVA debe calcularse sobre el valor del subtotal menos el descuento
    valorSubtotal = valorSubtotal - valorDescuento
    valorIVA = calcularIVA(valorSubtotal);
    //9. Mostrar el resultado en el componente lblValorIVA    
    /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
                    --valorSubtotal: 54
                    --descuento:5.4
                    --valorSubtotal - descuento: 48.6
                IVA esperado: 5.832
            Si el caso de prueba es exitoso, hacer un commit
        */
    mostrarTexto("lblValorIVA", valorIVA.toFixed(3))
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal = calcularTotal(valorSubtotal, valorIVA);
    //11. Mostrar el resultado en el componente lblTotal
    /*
           Caso de prueba: 
               precioProducto: 5.4  cantidad: 10 descuento: 10
                   --valorSubtotal: 5.4
                   --descuento: 5.4
                   --IVA: 5.832
               Total esperado: 54.432
           Si el caso de prueba es exitoso, hacer un commit
       */
    mostrarTexto("lblTotal", valorTotal.toFixed(3))
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */
    let mensaje = "Valor a pagar por " + cantidad + " " + nombreProducto + " con " + porcentajeDescuento + "% de descuento: USD " + valorTotal
    mostrarTexto("lblResumen", mensaje)


}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTextoEnCaja("txtProducto", "")
    mostrarTextoEnCaja("txtCantidad", 0)
    mostrarTextoEnCaja("txtPrecio", 0.0)
    mostrarTextoEnCaja("txtPorcentajeDescuento", 0)
    mostrarTextoEnCaja("lblSubtotal", 0.0)
    mostrarTextoEnCaja("lblValorIVA", 0.0)
    mostrarTextoEnCaja("lblTotal", 0.0)
     mostrarTextoEnCaja("lblResumen", "")

}
/* SI TODO FUNCIONA, HACER UN PUSH */