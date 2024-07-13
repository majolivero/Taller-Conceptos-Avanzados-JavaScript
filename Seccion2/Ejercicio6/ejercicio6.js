console.log("Mensaje1:Inmediatamente"); //Microtarea

//Macrotareas
setTimeout(() => {
    console.log("Mensaje 2: Con timeout de 0 segundos");
  }, 0);

  setTimeout(() => {
    console.log("Mensaje 3: Con timeout de 1 segundo");
  }, 1000);