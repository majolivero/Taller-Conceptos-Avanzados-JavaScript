function crearSumador(numero1) {
    return function sumarNumero(numero2){  //Esta función interna recuerda el valor de numero1, incluso, después de que crearSumador haya terminado de ejecutarse. Este recuerdo es el closure.
        return numero1 + numero2
    }
}

let sumarCinco = crearSumador(5); //Llamada de crear sumador con el argumento 5
console.log(sumarCinco(3)); //La función interna recuerda que numero1 es 5 y suma 3. 


//NOTA: Este comportamiento es posible porque las funciones en JavaScript son closures. 
//Cuando una función es creada, guarda referencias a las variables del entorno donde fue definida, no al entorno donde es ejecutada. 
//Esto permite que las funciones internas sigan accediendo a las variables de las funciones externas, incluso después de que estas hayan finalizado.