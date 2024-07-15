// Ruta del archivo data.json
const url = "./data.json"; // Cambiar por la ruta correcta
let reservas = [];
// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Habitaciones:", data.rooms);
          console.log("Tipos de Habitaciones:", data.roomTypes);
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
  });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
  .then(({ rooms, roomTypes }) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos
    // ... Continuar con la lógica de la app
    while (true) {
      const userInput = prompt(
        "Ingresa la opción que deseas 1. Reservar 2. Ver Reservas 3. Cancelar Reserva 4. Editar 5. Salir"
      );
      switch (userInput) {
        case "1":
            let nombreUsuario = prompt("Ingrese su nombre y apellido:").toLowerCase();
            let cantidadHuesped = parseInt(prompt("Ingrese el número de huéspedes:"));
            let fechaInicio = prompt("Ingrese la fecha de inicio de reserva:");
            let fechaFin = prompt("Ingrese la fecha de fin de reserva:");
            const filteredRooms = rooms.filter(room => {
                const roomType = roomTypes.find(type => type.id === room.roomTypeId);
                return roomType.capacity >= cantidadHuesped && room.availability == true;
            });
            const userInput2 = parseInt(prompt(
                "Ingrese el número de habitación a reservar: " +
                filteredRooms
                    .map((room) => {
                        return `\nRoom Number: ${room.number} (${roomTypes.find((type) => type.id === room.roomTypeId).name})`;
                    })
                    .join(", ")
            ));
            rooms.find((room) => room.number == userInput2 ).availability = false;
            let idReserva = crearReserva(userInput2, fechaInicio, fechaFin, nombreUsuario);
            alert(`reserva exitosa!
                
                El id de tu reserva es ${idReserva}`);
          break;
        case "2":
            let nombreUser = prompt("Escriba su nombre:");
            const reservasUsuario = verReservas(nombreUser);
            alert(reservasUsuario);
          break;
        case "3":
            let nombreUserCancelar = prompt("Escriba su nombre:");
            const reservasUsuarioCancelar = verReservas(nombreUserCancelar);
            alert(reservasUsuarioCancelar);
            let numeroReservaCancelar = prompt("Escriba el id de la reserva que desea cancelar");
            let confirmacionCancelar = prompt(`Está seguro de que desea cancelar la reserva con id: ${numeroReservaCancelar}
                1: Si
                2: No`);
            if (confirmacionCancelar == 1){
                cancelarReserva(numeroReservaCancelar);
                alert("Reserva cancelada satisfactoriamente.");
            }
            else{
                alert("Proceso de cancelación de reserva terminado.")
            }
          break;
        case "4":
          // editar reserva
          let nombreUserEditar = prompt("Escriba su nombre:");
            const reservasUsuarioEditar = verReservas(nombreUserEditar);
            alert(reservasUsuarioEditar);
            let numeroReservaEditar = prompt("Escriba el id de la reserva que desea editar");
            let nuevaFechaInicio = prompt("Escriba la nueva fecha de inicio");
            let nuevaFechaFin = prompt("Escriba la nueva fecha fin");
            editarReserva(numeroReservaEditar, nuevaFechaInicio, nuevaFechaFin);
            alert("Reserva editada satisfactoriamente.");
        break;
        case "5":
          // Salir del programa
          return;
        default:
          console.log("Opción inválida. Inténtalo de nuevo.");
      }
    }
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error);
  });

  let contadorIdReserva = 0; // Variable id se inicializa fuera de la función interna

  function crearReserva(numeroHabitacion, fechaInicio, fechaFin, huesped) {
    function generarGeneradorId() {
      
      
      return function () {
        contadorIdReserva++;

        return contadorIdReserva;// Cada vez que se llama a la función, se incrementa id y se devuelve
      };
    }
  
    const generarId = generarGeneradorId(); // Se obtiene la función interna generarId()
    let idResultado = generarId();
    reservas.push({idResultado, numeroHabitacion, fechaInicio, fechaFin, huesped});

    return idResultado;
  }



  function verReservas(nombreUsuario){
    let resultado = ``;

    reservas.forEach(reserva => {
        if( reserva.huesped == nombreUsuario){
            resultado += `\n id reserva: ${reserva.idResultado} nombre: ${reserva.huesped} habitación: ${reserva.numeroHabitacion} 
            fecha de Inicio Reserva : ${reserva.fechaInicio} fecha de Fin Reserva : ${reserva.fechaFin}`
        }
    })

    return resultado;
  }

  function cancelarReserva(idReserva){
    let reservaCancelar = reservas.find(reserva => reserva.idResultado == idReserva);
    if (reservaCancelar !== -1) {
        reservas.splice(reservaCancelar, 1);
    }
  }

  function editarReserva(idReserva, nuevaFechaInicio, nuevaFechaFin){
    let reservaEditar = reservas.find(reserva => reserva.idResultado == idReserva);
    console.log(reservaEditar);
    reservaEditar.fechaInicio = nuevaFechaInicio;
    reservaEditar.fechaFin = nuevaFechaFin
  }