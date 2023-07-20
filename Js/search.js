// Función para cargar los datos del archivo productos.json
async function cargarProductos() {
  try {
    const response = await fetch("../productos.json");
    const productos = await response.json();
    console.log(productos);
    return productos;
  } catch (error) {
    console.error("Error al cargar los productos:", error);
    return [];
  }
}

async function buscar(event) {
  event.preventDefault(); // Evita que el formulario recargue la página
  const terminoBusqueda = document
    .getElementById("search-input")
    .value.toLowerCase();
  const resultadosContainer = document.getElementById("resultados-busqueda");
  resultadosContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos resultados

  // Cargar los productos antes de la búsqueda
  const productos = await cargarProductos();
  const productosFiltrados = productos.filter((producto) => {
    return (
      producto.nombre.toLowerCase().includes(terminoBusqueda) ||
      producto.categoria.toLowerCase().includes(terminoBusqueda)
    );
  });

  if (productosFiltrados.length > 0) {
    productosFiltrados.forEach((producto) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const imagenProducto = document.createElement("img");
      imagenProducto.src = producto.imageUrl;
      imagenProducto.alt = producto.nombre;
      card.appendChild(imagenProducto);

      const contenidoProducto = document.createElement("div");
      contenidoProducto.classList.add("card-content");

      const nombreProducto = document.createElement("p");
      nombreProducto.textContent = `Nombre: ${producto.nombre}`;
      contenidoProducto.appendChild(nombreProducto);

      const categoriaProducto = document.createElement("p");
      categoriaProducto.textContent = `Categoría: ${producto.categoria}`;
      contenidoProducto.appendChild(categoriaProducto);

      const precioProducto = document.createElement("p");
      precioProducto.textContent = `Precio: $${producto.precio}`;
      contenidoProducto.appendChild(precioProducto);

      card.appendChild(contenidoProducto);

      resultadosContainer.appendChild(card);
    });
    document.getElementById("search-input").value = "";
  } else {
    // Mostrar un mensaje si no se encuentra el producto
    const mensaje = document.createElement("p");
    mensaje.textContent = "Producto no encontrado.";
    resultadosContainer.appendChild(mensaje);
  }
}

searchButton.addEventListener("click", buscar);
