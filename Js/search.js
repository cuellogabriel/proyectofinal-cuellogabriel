 // Función para cargar los datos del archivo productos.json
 async function cargarProductos() {
    try {
      const response = await fetch('../productos.json');
      const productos = await response.json();
      return productos;
    } catch (error) {
      console.error('Error al cargar los productos:', error);
      return [];
    }
  }

  // Función de búsqueda
  async function buscar(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const terminoBusqueda = document.getElementById('search-input').value.toLowerCase();
    const resultadosContainer = document.getElementById('resultados-busqueda');

    // Limpiar la lista antes de agregar nuevos resultados
    resultadosContainer.innerHTML = '';

    const productos = await cargarProductos();
    const productosFiltrados = productos.filter(producto => {
      return (
        producto.nombre.toLowerCase().includes(terminoBusqueda) ||
        producto.categoria.toLowerCase().includes(terminoBusqueda)
        // Agregar más condiciones para otras propiedades relevantes
      );
    });

    if (productosFiltrados.length > 0) {
      productosFiltrados.forEach(producto => {
        // Crear elementos para cada producto y agregarlos a la lista
        const productoItem = document.createElement('li');
        productoItem.textContent = `Nombre: ${producto.nombre}, Categoría: ${producto.categoria}, Precio: $${producto.precio}`;
        resultadosContainer.appendChild(productoItem);
      });
    } else {
      // Mostrar un mensaje si no se encuentra el producto
      const mensaje = document.createElement('li');
      mensaje.textContent = 'Producto no encontrado.';
      resultadosContainer.appendChild(mensaje);
    }
  }