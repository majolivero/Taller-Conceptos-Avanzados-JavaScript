function crearSumador(numero1) {
    return function sumarNumero(numero2){
        return numero1 + numero2
    }
}

let sumarCinco = crearSumador(5);
console.log(sumarCinco(3));


