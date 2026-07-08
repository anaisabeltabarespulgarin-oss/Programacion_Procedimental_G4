//declaracion de variables con let
let codigoPedProducto = "99";
let nombrePedProducto = "lechona";
let direccionPedido = "Calle 45 # 12-34";
let nombreUsuarioPedido = "Camila Restrepo";
let cantidadPedido = "2";
let metodoPago = "Tarjeta de Crédito";
let valorCancelar = "30000";
let telefonoPedido = "3159876543";

//validacion de campos
function ValidarDatos() {
  const soloNumeros = /^[0-9]+$/;
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;

  // Validar vacíos
  if (
    !codigoPedProducto ||
    !nombrePedProducto ||
    !direccionPedido ||
    !nombreUsuarioPedido ||
    !cantidadPedido ||
    !metodoPago ||
    !valorCancelar ||
    !telefonoPedido
  ) {
    Swal.fire({
      icon: "error",
      title: "Campos Vacíos",
      text: "Por favor completa todos los datos del pedido.",
    });
    return;
  }

  if (!soloNumeros.test(codigoPedProducto)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El código de producto del pedido debe ser en numeros.",
    });
    return;
  }

  if (!soloLetras.test(nombrePedProducto)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El nombre del producto no debe contener números.",
    });
    return;
  }

  if (!soloLetras.test(nombreUsuarioPedido)) {
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

  if (!soloNumeros.test(telefonoPedido)) {
    Swal.fire({
      icon: "warning",
      title: "Error",
      text: "El teléfono de contacto debe contener solo números.",
    });
    return;
  }

  console.log("=== DATOS DEL PEDIDO VALIDADOS ===");
  console.log(
    `Producto: [${codigoPedProducto}] ${nombrePedProducto} x ${cantidadPedido} unidades`,
  );
  console.log(`Cliente: ${nombreUsuarioPedido} - Tel: ${telefonoPedido}`);
  console.log(`Despacho a: ${direccionPedido}`);
  console.log(`Pago: ${metodoPago} - Total a pagar: $${valorCancelar}`);

  Swal.fire({
    icon: "success",
    title: "Pedido Procesado",
    text: "La orden se ha generado correctamente.",
  });
}

ValidarDatos();
