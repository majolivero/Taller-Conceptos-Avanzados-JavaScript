let tiempoSegundos = parseInt(prompt("Ingresa un intervalo de tiempo en segundos:"));
let tiempoMilisegundos = tiempoSegundos*1000;

function mostrarMensaje(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(console.log(`Han pasado ${tiempoMilisegundos / 1000} segundos`));
        }, tiempoMilisegundos);
    });
}

mostrarMensaje(tiempoSegundos);
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok" + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log("Datos:" , data);
    })
    .catch(error => {
        console.error("Ocurrió un error:", error);
    });