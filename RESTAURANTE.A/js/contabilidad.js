//declaracion variables con let
let ventas = document.getElementById("cant_vent").value;
let fecha = document.getElementById("dat").value;
let ingresos = document.getElementById("ingre").value;
let egresos = document.getElementById("egre").value;
let concepto = document.getElementById("concep").value;
let valor = document.getElementById("vlr").value;

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


  
  Swal.fire({
    icon: "success",
    title: "Contabilidad Sincronizada",
    text: "El cierre de caja ha sido validado.",
  });
}



document.getElementById("bbg").onclick = ValidarDatos;
