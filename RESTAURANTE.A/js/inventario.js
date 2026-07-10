//funcion y declaracion de variables
function ValidarDatos() {
  let codigoProducto = document.getElementById("coddp").value;
  let nombreProducto = document.getElementById("prod").value;
  let cantidadProducto = document.getElementById("cdp").value;
  let descripcionProducto = document.getElementById("dp").value;
  let marcaProducto = document.getElementById("mdp").value;
  let valorUnitario = document.getElementById("vudp").value;
  let categoriaProducto = document.getElementById("cpp").value;
  let ubicacionProducto = document.getElementById("pu").value;

  const soloNumeros = /^[0-9]+$/; //permite colocar números del 0 al 9
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/; //permite colocar letras y espacios

  // validación de campos
  if (
    !codigoProducto ||
    !nombreProducto ||
    !cantidadProducto ||
    !descripcionProducto ||
    !marcaProducto ||
    !valorUnitario ||
    !categoriaProducto ||
    !ubicacionProducto
  ) {
    Swal.fire({
      icon: "error",
      title: "Campos vacíos",
      text: "Por favor, asegurese de completar los campos del inventario",
    });
    return;
  }

  //validaciones adicionales
  if (!soloNumeros.test(codigoProducto)) {
    Swal.fire({
      icon: "warning",
      title: "Eror en código",
      text: "El código del producto solo debe tener números.",
    });
    return;
  }
  if (!soloLetras.test(nombreProducto)) {
    Swal.fire({
      icon: "warning",
      title: "Eror en el nombre",
      text: "El nombre del producto no debe tener números.",
    });
    return;
  }
  if (!soloNumeros.test(cantidadProducto)) {
    Swal.fire({
      icon: "warning",
      title: "Eror en cantidad",
      text: "La cantidad debe ser en números.",
    });
    return;
  }
  if (!soloLetras.test(marcaProducto)) {
    Swal.fire({
      icon: "warning",
      title: "Eror en la marca",
      text: "La marca del producto solo debe tener letras.",
    });
    return;
  }
  if (!soloNumeros.test(valorUnitario)) {
    Swal.fire({
      icon: "warning",
      title: "Eror en el valor",
      text: "El valor del producto solo debe tener números.",
    });
    return;
  }
  if (!soloLetras.test(categoriaProducto)) {
    Swal.fire({
      icon: "warning",
      title: "Eror en la categoria",
      text: "La categoria del producto solo debe tener letras.",
    });
    return;
  }

  console.log("=== DATOS DE INVENTARIO VALIDADOS ===");
  console.log("Código del Producto:", codigoProducto);
  console.log("Nombre del Producto:", nombreProducto);
  console.log("Cantidad:", cantidadProducto);
  console.log("Descripción:", descripcionProducto);
  console.log("Marca:", marcaProducto);
  console.log("Valor Unitario:", valorUnitario);
  console.log("Categoría:", categoriaProducto);
  console.log("Ubicación:", ubicacionProducto);

  Swal.fire({
    icon: "success",
    title: "Éxito",
    text: "¡Datos de inventario guardados correctamente!",
  });
} // Aquí cierra la función ValidarDatos()


document.getElementById("btnGuardar").onclick = ValidarDatos;

