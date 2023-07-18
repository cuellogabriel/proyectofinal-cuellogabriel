
// Función para buscar productos en el archivo "productos.json"
function buscarProductos(terminoBusqueda) {
  return productos.filter(producto =>
    producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );
}


