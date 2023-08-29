function mostrarNumeros() {
    console.log("Antes del for")
    for (let i = 0; i < 4; i++) {
        console.log(i);
    }
}

function mostrarNumeros2() {
    console.log("antes del for")
    for (let indice = 1; indice <= 5; indice++) {
        console.log(indice)
    }
    console.log("despues del for")
}

function mostrarPares() {
    console.log("antes del for")
    for (let x = 0; x <= 10; x += 2) {
        console.log(x)
    }
    console.log("despues del for")
}

function mostrarInverso() {
    console.log("antes del for")
    for (let i = 10; i >= 0; i--) {
        console.log(i)
    }
    console.log("despues del for")
}

function hackearNasaPelis() {
    //Hackeando nsasa 0& ... 100%
    for (let porcentaje = 0; porcentaje <= 100; porcentaje += 10) {
        console.log("Hackeando nasa " + porcentaje + "%");
    }
    console.log("La nasa ha sido hackeada con exito XD")
}

function mostrarImpares(){
    console.log("antes del for")
    for(let i=1; i<=21; i+=2){
        console.log(i)
    }
    console.log("despues del for")
}