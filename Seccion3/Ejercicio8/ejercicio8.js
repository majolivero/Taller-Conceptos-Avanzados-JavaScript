function Contador(x) {
    return function (y) {
        return x + y
    }
}

let opcion = "0";
let sumar = Contador(0);
while(opcion != "2"){
    opcion = prompt(`De acuerdo al menú anterior, elige la opción que necesites:
       1. Incrementar contador
       2. Salir `)
    switch(opcion){
        case "1":
            let resultado = sumar(5);
            sumar = Contador(resultado); //Actualiza el valor de x(resultado) para que lo recuerde en la siguiente iteración
            alert(`El resultado es ${resultado}`);
            break;
        case "2":
            alert("Has salido del programa");
        break;
    }
}





