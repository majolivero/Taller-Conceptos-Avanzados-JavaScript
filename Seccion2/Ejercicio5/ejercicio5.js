function manejarAsincronia(callback,promesa){
        promesa.then((resultadoPromesa) => {
            callback(resultadoPromesa);
        }).catch(error => {
            console.log(error);
        });
}

let callback = (parametro) => {
    if(parametro == 1){
        console.log("¡Promesa cumplida y callback ejecutado!");
    }else if(parametro == 2){
        console.log("Camino 2");
    }else{
        console.log("Otro camino");
    }
}

let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let valorRuta = 1;    //Este valor se debe modificar según la prueba necesaria: 1,2 y 3 retornarán respuestas en el callback y 4 rechazará la promesa. 
        if( valorRuta > 0 && valorRuta < 4){
            resolve(valorRuta);
        }else{
            reject("La promesa falló");
        }
    }, 1000);
});

manejarAsincronia(callback,promesa);


