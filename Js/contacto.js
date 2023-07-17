// obtengo el elemento del menú de categorías
var categoriasMenu = document.querySelector('.dropdown-toggle');

//obtengo elemento
var categoriasLista = document.querySelector('.categorias-lista');

// Evento 
categoriasMenu.addEventListener('click', function() {
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
var logoText = document.getElementById('logo-text');
var fontSize = 24;  // Tamaño de fuente inicial
var isIncreasing = true;
var interval = 200;
var step = 2;  // Agranda y achica de tamaño la fuente
var repetitions = 0;  // Número de repeticiones realizadas
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

var intervalId = setInterval(changeFontSize, interval);


//hover de logo
var logo = document.getElementById("logo-text");
var originalColor = logo.style.color; // Guarda el color original

logo.addEventListener("mouseover", function() {
  this.style.color = "rgb(4, 221, 236)"; // Cambia el color 
});

logo.addEventListener("mouseout", function() {
  this.style.color = originalColor; // Restaura el color original 
});




function enviarFormulario() {
  var nombre = document.getElementsByName("Nombre")[0].value;
  var correo = document.getElementsByName("correo")[0].value;
  var telefono = document.getElementsByName("telefono")[0].value;
  var mensaje = document.getElementsByName("mensaje")[0].value;

  var formData = {
    nombre: nombre,
    correo: correo,
    telefono: telefono,
    mensaje: mensaje
  };

  // Obtengo los datos almacenados previamente (si existen)
  var datosGuardados = JSON.parse(localStorage.getItem('datosFormulario')) || [];

  // Agregao el nuevo formulario al array existente
  datosGuardados.push(formData);

  // Guardo los datos actualizados en el almacenamiento local
  localStorage.setItem('datosFormulario', JSON.stringify(datosGuardados));

  // Mostrar un mensaje de confirmación
  alert("Su consulta ha sido enviada. Un representante se pondrá en contacto con usted a la brevedad.");
}

function mostrarInformacion() {
  var datosGuardados = JSON.parse(localStorage.getItem('datosFormulario')) || [];

  datosGuardados.forEach(function(formData) {
    var nombre = formData.nombre;
    var correo = formData.correo;
    var telefono = formData.telefono;
    var mensaje = formData.mensaje;

    console.log('Nombre: ' + nombre + ', Correo: ' + correo + ', Teléfono: ' + telefono + ', Mensaje: ' + mensaje);
  });
}

// Llamar a la función para mostrar la información por consola
mostrarInformacion();