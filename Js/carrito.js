const carritoLista = document.getElementById('carrito-lista');
const carritoTotal = document.getElementById('carrito-total');
const carritoContainer = document.getElementById('carrito');

/*function mostrarCarrito() {
  carritoLista.innerHTML = '';

  carrito.forEach((producto, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${producto.nombre} - Precio: $${producto.precio}`;
    listItem.innerHTML += `<button onclick="eliminarProducto('${index}')">Eliminar</button>`;                 //ESTA ES LA ANTERIOR PERO DEVIA PASARLO A BLANCO.. 
    carritoLista.appendChild(listItem);
  });

  calcularTotal();
}*/

function mostrarCarrito() {
  carritoLista.innerHTML = '';

  carrito.forEach((producto, index) => {
    const listItem = document.createElement('li');

    // Cambiar el color del texto del nombre y precio del producto a blanco
    const nombreProducto = document.createElement('p');
    nombreProducto.textContent = producto.nombre;
    nombreProducto.style.color = '#fff'; // Cambiar el color a blanco
    listItem.appendChild(nombreProducto);

    const precioProducto = document.createElement('p');
    precioProducto.textContent = `Precio: $${producto.precio}`;
    precioProducto.style.color = '#fff'; // Cambiar el color a blanco
    listItem.appendChild(precioProducto);

    listItem.innerHTML += `<button onclick="eliminarProducto('${index}')">Eliminar</button>`;
    carritoLista.appendChild(listItem);
  });

  calcularTotal();
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarEstadoCarrito();
  obtenerProductosDelCarrito();
  mostrarCarrito();
}

function calcularTotal() {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio;
  });
  carritoTotal.textContent = total;
}

function mostrarMensajeDespuesDeComprar() {
  if (carrito.length === 0) {
    carritoContainer.innerHTML = `
      <h3>El carrito está vacío</h3>
    `;
  } else {
    carritoContainer.innerHTML = ''; // Limpiamos el contenido actual
    const mensajeGracias = document.createElement('h3');
    mensajeGracias.textContent = "Gracias Por Su Compra";
    carritoContainer.appendChild(mensajeGracias);
    
  }
}

function realizarPago() {
  mostrarMensajeDespuesDeComprar();
  carrito = []; // Vaciamos el carrito después de mostrar el mensaje
  actualizarEstadoCarrito();
  
}

mostrarCarrito();

