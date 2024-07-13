console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");


const codigoJS = `<pre><code>

Dado el siguiente código predice en que orden se ejecutarán los
mensajes en consola:

1 - console.log("Inicio del script");

2 - setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

3 - setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

4 - Promise.resolve("Promesa resuelta").then(console.log);

5 - console.log("Fin del script");
</code></pre>`;


document.addEventListener("DOMContentLoaded",(e) => {

    let codigo = document.getElementById("mostrarCodigo");
    codigo.innerHTML = codigoJS;
    
    let boton = document.getElementById("botonEnviar");


    boton.addEventListener("click",(e) => {

    const inputMensajeUno = document.getElementById("mensajeUno").value;
    const inputMensajeDos = document.getElementById("mensajeDos").value;
    const inputMensajeTres = document.getElementById("mensajeTres").value;
    const inputMensajeCuatro = document.getElementById("mensajeCuatro").value;
    const inputMensajeCinco = document.getElementById("mensajeCinco").value;

    let estado = true;

    let mensajeError = ``;

    if(inputMensajeUno != "1"){
        estado = false; 
        mensajeError += `Respuesta 1 equivocada
        La respuesta correcta es 1. 
        En JavaScript existe un concepto muy importante que es el event loop.
        Este se asegura que las tareas se manejen en el orden adecuado y que las operaciones 
        síncronas y las microtareas se prioricen sobre las macrotareas como setTimeout.
        Por ser console.log() una microtarea y una operación síncrona debe ejecutarse primero que el setTimeout
        que corresponde a una macrotarea y es una operación asíncrona. 
        
        `;
    }

    if(inputMensajeDos != "5"){
        estado = false;
        mensajeError += `
        Respuesta 2 equivocada
        La respuesta correcta es 5.
        En JavaScript existe un concepto muy importante que es el event loop.
        Este se asegura que las tareas se manejen en el orden adecuado y que las operaciones 
        síncronas y las microtareas se prioricen sobre las macrotareas como setTimeout.
        Por ser console.log() una microtarea y una operación síncrona debe ejecutarse primero que el setTimeout
        que corresponde a una macrotarea y es una operación asíncrona. 
        
        `;
    }

    if(inputMensajeTres != "4"){
        estado = false;
        mensajeError += `
        Respuesta 3 equivocada
        La respuesta correcta es 4
        Promise.resolve("Promesa resuelta").then(console.log) se encola como una microtarea y se 
        ejecuta después de que el código síncrono ha terminado.
        
        `;

    }

    if(inputMensajeCuatro != "2"){
        estado = false;
        mensajeError += `
        Respuesta 4 equivocada
        La respuesta correcta es 2
        El setTimeout se considera como una macrotarea y solo se ejecuta después que se hayan finalizado las
        microtareas. El orden de ejecución de los setTimeouts dependerá del tiempo de espera.
        
        `;
    }

    if(inputMensajeCinco != "3"){
        estado = false;
        mensajeError += `  
        Respuesta 5 equivocada
        La respuesta correcta es 3
        El setTimeout se considera como una macrotarea y solo se ejecuta después que se hayan finalizado las
        microtareas. El orden de ejecución de los setTimeouts dependerá del tiempo de espera.
        
        `;
    }

    if(estado == true) {
        alert("Felicitaciones!!, tus respuestas son correctas");
    }else{
        alert(mensajeError);
    }
    });
});





