//funcion y declaracion de variables
function ValidarDatos() {
let nombreUsuario = document.getElementById("nomusuu").value;
let apellidoUsuario = document.getElementById("apel").value;
let tipoDocumento = document.getElementById("tipdoc").value;
let numeroDocumento = document.getElementById("docnuuum").value;
let telefonoUsuario = document.getElementById("teler").value; 
let correoElectronico = document.getElementById("c.e").value;
let generoUsuario = document.getElementById("gen").value;
let cargoUsuario = document.getElementById("car").value;
let fechaNacimiento = document.getElementById("naci").value;
let contrasenaUsuario = document.getElementById("rase").value; 
  const soloNumeros = /^[0-9]+$/; //permite colocar números del 0 al 9
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/; //permite colocar letras y espacios

  //validacion de campos
  if (
    !nombreUsuario ||
    !apellidoUsuario ||
    !tipoDocumento ||
    !numeroDocumento ||
    !telefonoUsuario ||
    !correoElectronico ||
    !generoUsuario ||
    !cargoUsuario ||
    !fechaNacimiento ||
    !contrasenaUsuario
  ) {
    Swal.fire({
      icon: "error",
      title: "Campos vacíos",
      text: "Por favor, asegurese de completar todos los campos de usuario",
    });
    return;
  }

  //validaciones adicionales
  if (!soloLetras.test(nombreUsuario)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El nombre no debe contener números.",
    });
    return;
  }
  if (!soloLetras.test(apellidoUsuario)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El apellido no debe contener números.",
    });
    return;
  }
  if (!soloNumeros.test(numeroDocumento)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El número de documento no debe contener letas.",
    });
    return;
  }
  if (!soloNumeros.test(telefonoUsuario)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El número no debe contener letras y debe tener 10 dígitos exactos.",
    });
    return;
  }
  if (!correoElectronico.includes("@")) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El correo electrónico debe contener el caracter @.",
    });
    return;
  }
  if (contrasenaUsuario.length < 8) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "La contraseña debe tener mínimo 8 caracteres.",
    });
    return;
  }

  console.log("=== DATOS DE USUARIO VALIDADOS ===");
  console.log(`Nombre Completo: ${nombreUsuario} ${apellidoUsuario}`);
  console.log(`Documento: ${tipoDocumento} - ${numeroDocumento}`);
  console.log(`Teléfono: ${telefonoUsuario}`);
  console.log(`Correo: ${correoElectronico}`);
  console.log(`Género: ${generoUsuario} | Cargo: ${cargoUsuario}`);
  console.log(`Fecha Nacimiento: ${fechaNacimiento}`);
  console.log(`Contraseña: ******** (Protegida)`);

  Swal.fire({
    icon: "success",
    title: "Éxito",
    text: "¡Usuario validado y registrado con éxito!",
  });
}


document.getElementById("guar").onclick = ValidarDatos;
