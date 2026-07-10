//funcion y declaracion de variables
function ValidarDatos() {
let codigoProducto = document.getElementById("pcc").value;
let nombreProducto = document.getElementById("nnp").value;
let direccionPedido = document.getElementById("dip").value;
let nombreUsuario = document.getElementById("usun").value;
let cantidadPedido = document.getElementById("dadrt").value;
let metodoPago = document.getElementById("pagmet").value;
let valorCancelar = document.getElementById("valpag").value;
let telefono = document.getElementById("fono").value;
  const soloNumeros = /^[0-9]+$/;
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;

  // Validar vacíos
  if (
    !codigoProducto ||
    !nombreProducto ||
    !direccionPedido ||
    !nombreUsuario ||
    !cantidadPedido ||
    !metodoPago ||
    !valorCancelar ||
    !telefono
  ) {
    Swal.fire({
      icon: "error",
      title: "Campos Vacíos",
      text: "Por favor completa todos los datos del pedido.",
    });
    return;
  }

  if (!soloNumeros.test(codigoProducto)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El código de producto del pedido debe ser en numeros.",
    });
    return;
  }

  if (!soloLetras.test(nombreProducto)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El nombre del producto no debe contener números.",
    });
    return;
  }

  if (!soloLetras.test(nombreUsuario)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El nombre del usuario no debe contener números.",
    });
    return;
  }

  if (!soloNumeros.test(cantidadPedido)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "La cantidad del pedido debe ser un número.",
    });
    return;
  }

  if (!soloNumeros.test(valorCancelar)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El valor a cancelar debe ser numérico.",
    });
    return;
  }

  if (!soloNumeros.test(telefono)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El teléfono de contacto debe contener solo números.",
    });
    return;
  }

  console.log("=== DATOS DEL PEDIDO VALIDADOS ===");
  console.log(
    `Producto: [${codigoProducto}] ${nombreProducto} x ${cantidadPedido} unidades`,
  );
  console.log(`Cliente: ${nombreUsuario} - Tel: ${telefono}`);
  console.log(`Despacho a: ${direccionPedido}`);
  console.log(`Pago: ${metodoPago} - Total a pagar: $${valorCancelar}`);

  Swal.fire({
    icon: "success",
    title: "Pedido Procesado",
    text: "La orden se ha generado correctamente.",
  });
}


document.getElementById("RDAR").onclick = ValidarDatos;
