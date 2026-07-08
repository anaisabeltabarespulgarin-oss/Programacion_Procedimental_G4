//declaracion variables con let
let ventas = "54";
let fecha = "28/06/2026";
let ingresos = "3000000";
let egresos = "1000000";
let concepto = "Pago de inventario del mes";
let valor = "2000000";

// declaracion de la funcion validar datos
function ValidarDatos() {
  const soloNumeros = /^[0-9]+$/;

  //validacion de campos
  if (
    !ventas ||
    !fecha ||
    !ingresos ||
    !egresos ||
    !concepto ||
    !valor
  ) {
    Swal.fire({
      icon: "error",
      title: "Campos Vacíos",
      text: "Todos los campos contables son obligatorios.",
    });
    return;
  }

  if (!soloNumeros.test(ventas)) {
    Swal.fire({
      icon: "warning",
      title: "Error en Ventas",
      text: "El campo Ventas debe ser un valor numérico.",
    });
    return;
  }

  if (!soloNumeros.test(ingresos)) {
    Swal.fire({
      icon: "warning",
      title: "Error en Ingresos",
      text: "El campo Ingresos debe ser un valor numérico.",
    });
    return;
  }

  if (!soloNumeros.test(egresos)) {
    Swal.fire({
      icon: "warning",
      title: "Error en Egresos",
      text: "El campo Egresos debe ser un valor numérico.",
    });
    return;
  }

  if (!soloNumeros.test(valor)) {
    Swal.fire({
      icon: "warning",
      title: "Error en Valor",
      text: "El campo Valor debe ser un número entero.",
    });
    return;
  }

  console.log("=== REGISTRO CONTABLE VALIDADO ===");
  console.log(`Fecha de registro: ${fecha}`);
  console.log(`Concepto: ${concepto}`);
  console.log(`Total Ventas: $${ventas}`);
  console.log(`Otros Ingresos: $${ingresos}`);
  console.log(`Egresos aplicados: $${egresos}`);
  console.log(`Valor de transacción: $${valor}`);

  Swal.fire({
    icon: "success",
    title: "Contabilidad Sincronizada",
    text: "El cierre de caja ha sido validado.",
  });
}

ValidarDatos();
