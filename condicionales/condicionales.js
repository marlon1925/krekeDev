// Función para calcular la tasa de interés según los ingresos anuales de la empresa

calcularTasaInteres = function (ingresAnual) {
    let tasa;
    if (ingresAnual < 300000) {
        return tasa = 0.16
    } else if (ingresAnual < 500000) {
        return tasa = 0.14
    } else if (ingresAnual < 1000000) {
        return tasa = 0.13
    } else if (ingresAnual < 2000000) {
        return tasa = 0.12
    }
}

// Función para calcular la capacidad de pago mensual de un cliente

calcularCapacidadPago = function (edad, ingresos, egresos) {
    let capacidadPago;
    if (edad > 50) {
        capacidadPago = (ingresos - egresos) * 0.3;
    } else {
        capacidadPago = (ingresos - edad) * 0.4;
    }
}
// Función para calcular el descuento según la cantidad de productos comprados

calcularDescuento = function (precio, cantidad) {
    let descuanto;
    if (cantidad >= 3 && cantidad <= 5) {
        return descuanto = precio * 0.02
    } else if (cantidad <= 11) {
        return descuanto = precio * 0.03
    } else if (cantidad >= 12) {
        return descuanto = precio * 0.04
    }
}
// Función para determinar la categoría de colesterol LDL

function determinarColesterolLDL(nivelColesterol) {
    if (nivelColesterol < 100) {
        return "Óptimo";
    } else if (nivelColesterol < 130) {
        return "Normal";
    } else if (nivelColesterol < 160) {
        return "Ligeramente alto";
    } else if (nivelColesterol < 190) {
        return "Alto";
    } else {
        return "Muy alto";
    }
}

// Función para validar una clave
function validarClave(clave) {
    return clave.length >= 8 && clave.length <= 16;
}
// Función para determinar si un caracter es una letra mayúscula
function esMayuscula(caracter) {
    const codigoAscii = caracter.charCodeAt(0);
    return codigoAscii >= 65 && codigoAscii <= 90; // Rango de letras mayúsculas en ASCII
}

// Función para determinar si un caracter es una letra minúscula
function esMinuscula(caracter) {
    const codigoAscii = caracter.charCodeAt(0);
    return (codigoAscii >= 97 && codigoAscii <= 122) || // Rango de letras minúsculas en ASCII
        (codigoAscii >= 224 && codigoAscii <= 252); // Rango de letras minúsculas con tilde en ASCII
}

// Función para determinar si un caracter es un dígito
function esDigito(caracter) {
    const codigoAscii = caracter.charCodeAt(0);
    return codigoAscii >= 48 && codigoAscii <= 57; // Rango de dígitos en ASCII
}
// Archivo: condicionales.js

// Función para otorgar permiso basado en las notas de tres materias
function darPermiso(notaMatematica, notaFisica, notaGeometria) {
    return notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90;
}

// Función para otorgar permiso con condiciones en las notas de tres materias
function otorgarPermiso(notaMatematica, notaFisica, notaGeometria) {
    return (notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80;
}

// Función para otorgar permiso con condiciones en las notas de tres materias y comparación entre Física y Matemática
function dejarSalir(notaMatematica, notaFisica, notaGeometria) {
    return (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && notaFisica > notaMatematica;
}



inusculas = function (caracter) {
    let caracterValidar;
    caracterValidar = caracter.charCodeAt(0);
    if (caracterValidar >= 97 && caracterValidar <= 122) {
        return true;
    } else {
        return false;
    }
}
