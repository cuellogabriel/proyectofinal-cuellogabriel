let carrito = [];
let productos = [];
const pathProductosJSON = '../productos.json';

function obtenerProductosDelCarrito() {
  carrito = JSON.parse(localStorage.getItem('carrito')) || [];
}

function actualizarEstadoCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

async function cargarProductosDesdeArchivo() {
  try {
    const response = await fetch(pathProductosJSON);
    const data = await response.json();
    productos = data;
  } catch (error) {
    console.log(`Error al obtener los productos desde el archivo JSON ${pathProductosJSON}:`, error);
  }
}

function redirigirAlCarrito() {
  window.location.replace('../Pages/carrito.html');
}

function agregarAlCarrito(idProducto) {
  const productoComprado = productos.find((unProducto) => unProducto.id === idProducto);
  if (!productoComprado) {
    console.log("El producto buscado no existe entre los productos disponibles.");
    return;
  }



  carrito.push(productoComprado);
  actualizarEstadoCarrito();
  redirigirAlCarrito();
}

function comenzarRow() {
  return `<div class="row justify-content-center">`;
}

function finalizarRow() {
  return `</div>`;
}

function comenzarCol() {
  return `<div class="col-md-4 text-center" style="max-width: 250px; margin: 10px; top: 20px">`; // Agregamos estilos directamente en JavaScript
}

function finalizarCol() {
  return `</div>`;
}

async function renderizarProductos(categoria) {
  await cargarProductosDesdeArchivo();

  let htmlElements = comenzarRow();

  productos.filter((prod) => prod.categoria === categoria).forEach((unProducto, index) => {
    htmlElements += comenzarCol() + `
      <div class="card">
        <img src="${unProducto.imageUrl}" class="card-img-top" alt="${unProducto.nombre}">
        <div class="card-body">
          <h5 class="card-title text-center">${unProducto.nombre}</h5>
          <p class="card-text" style="color: black">Precio: $${unProducto.precio}</p>
          <p class="card-text" style="color : black">${unProducto.descripcion}</p>
          <button class="btn btn-primary btn-comprar" onclick="agregarAlCarrito('${unProducto.id}');">Comprar</button>
        </div>
      </div>
    ` + finalizarCol();

    if (((index + 1) % 3 === 0)) {
      htmlElements += finalizarRow() + comenzarRow();
    } else if (productos.length === (index - 1)) {
      htmlElements += finalizarRow();
    }
  });

  return htmlElements;

}

// obtengo el elemento del menú de categorías
const categoriasMenu = document.querySelector('.dropdown-toggle');

//obtengo elemento
const categoriasLista = document.querySelector('.categorias-lista');

// Evento
categoriasMenu?.addEventListener('click', function() {
  // Alternar la clase 'show' en el menú desplegable
  categoriasLista.classList.toggle('show');
});

// Cerrar el menú desplegable
window.addEventListener('click', function(event) {
  if (!categoriasMenu.contains(event.target)) {
    categoriasLista.classList.remove('show');
  }
});

//efecto de logo
let isIncreasing = true;
let fontSize = 24;  // Tamaño de fuente inicial
let repetitions = 0;  // Número de repeticiones realizadas
const logoText = document.getElementById('logo-text');
const interval = 200;
const step = 2;  // Agranda y achica de tamaño la fuente
//funcion para que funcione el efecto
function changeFontSize() {
  if (isIncreasing) {
    fontSize += step;
    if (fontSize >= 32) {
      isIncreasing = false;
    }
  } else {
    fontSize -= step;
    if (fontSize <= 24) {
      isIncreasing = true;
      repetitions++;
      if (repetitions === 2) {
        clearInterval(intervalId);
      }
    }
  }
  logoText.style.fontSize = fontSize + 'px';
}

const intervalId = setInterval(changeFontSize, interval);

//hover de logo
const logo = document.getElementById("logo-text");
const originalColor = logo.style.color; // Guarda el color original

logo.addEventListener("mouseover", function() {
  this.style.color = "rgb(4, 221, 236)"; // Cambia el color
});

logo.addEventListener("mouseout", function() {
  this.style.color = originalColor; // Restaura el color original
});

function seguirComprando() {
  history.back();
}


function guardarUsuariosEnLocalStorage() {
  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const edad = document.getElementById("edad").value;
  const email = document.getElementById("email").value;
  const repetirEmail = document.getElementById("repetirEmail").value;
  const pais = document.getElementById("pais").value;
  const provincia = document.getElementById("provincia").value;
  const localidad = document.getElementById("localidad").value;
  const codigoPostal = document.getElementById("codigoPostal").value;
  const contrasena = document.getElementById("contrasena").value;
  const username = document.getElementById("username").value;

  // Crear un objeto con los datos del usuario
  const usuario = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    email: email,
    repetirEmail: repetirEmail,
    pais: pais,
    provincia: provincia,
    localidad: localidad,
    codigoPostal: codigoPostal,
    contrasena: contrasena,
    username: username
  };

  // Obtener el arreglo de usuarios del archivo JSON
  const usuariosJSON = localStorage.getItem("usuarios");
  const usuarios = [];

  if (usuariosJSON) {
    // Si ya hay usuarios guardados, convertir el JSON a un arreglo
    usuarios = JSON.parse(usuariosJSON);
  }

  // Agrega  nuevo usuario al arreglo
  usuarios.push(usuario);

  // Guarda el arreglo actualizado en el localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Registrado
  alert("Registro exitoso!");
}


function mostrarUsuariosGuardados() {
  // Obtener el arreglo de usuarios del archivo JSON
  const usuariosJSON = localStorage.getItem("usuarios");

  if (usuariosJSON) {
    // Si hay usuarios guardados, convertir el JSON a un arreglo
    const usuarios = JSON.parse(usuariosJSON);

    // Mostrar los usuarios en la consola o en el documento HTML
    console.log(usuarios); // Muestra los usuarios en la consola del navegador


    const usuariosDiv = document.getElementById("usuarios-div");

    for (const i = 0; i < usuarios.length; i++) {
      const usuario = usuarios[i];

      const usuarioInfo = document.createElement("p");
      usuarioInfo.textContent = "Nombre: " + usuario.nombre + ", Apellido: " + usuario.apellido + ", Email: " + usuario.email;

      usuariosDiv.appendChild(usuarioInfo);
    }

  } else {
    console.log("No se encontraron usuarios guardados");
  }
}


// Inicialización
obtenerProductosDelCarrito();


// search.js

function buscarProductos(termino) {
  // Convertir el término de búsqueda a minúsculas para hacer una búsqueda no sensible a mayúsculas
  const terminoLowerCase = termino.toLowerCase();

  // Filtrar los productos que contengan el término de búsqueda en el nombre
  const resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(terminoLowerCase));

  return resultados;
}

document.addEventListener('DOMContentLoaded', () => {
  // Evento del botón de búsqueda
  const btnBuscar = document.querySelector('button[type="submit"]');
  const inputBusqueda = document.querySelector('input[type="text"]');
  const resultadosBusqueda = document.getElementById('resultados-busqueda');

  btnBuscar.addEventListener('click', () => {
    const terminoBusqueda = inputBusqueda.value.trim();
    const resultados = buscarProductos(terminoBusqueda);

    // Limpiar los resultados previos
    resultadosBusqueda.innerHTML = '';

    if (resultados.length === 0) {
      resultadosBusqueda.innerHTML = '<p>No se encontraron resultados.</p>';
    } else {
      resultados.forEach(producto => {
        resultadosBusqueda.innerHTML += `
          <div class="card">
            <img src="${producto.imageUrl}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
              <h5 class="card-title text-center">${producto.nombre}</h5>
              <p class="card-text" style="color: black">Precio: $${producto.precio}</p>
              <p class="card-text" style="color: black">${producto.descripcion}</p>
              <button class="btn btn-primary btn-comprar" onclick="agregarAlCarrito('${producto.id}');">Comprar</button>
            </div>
          </div>
        `;
      });
    }
  });
});







