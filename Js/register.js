function guardarUsuariosEnLocalStorage() {
  // Obtener los valores del formulario
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad = document.getElementById("edad").value;
  var email = document.getElementById("email").value;
  var repetirEmail = document.getElementById("repetirEmail").value;
  var pais = document.getElementById("pais").value;
  var provincia = document.getElementById("provincia").value;
  var localidad = document.getElementById("localidad").value;
  var codigoPostal = document.getElementById("codigoPostal").value;
  var contrasena = document.getElementById("contrasena").value;
  var username = document.getElementById("username").value;

  // Crear un objeto con los datos del usuario
  var usuario = {
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
  var usuariosJSON = localStorage.getItem("usuarios");
  var usuarios = [];

  if (usuariosJSON) {
    // Si ya hay usuarios guardados, convertir el JSON a un arreglo
    usuarios = JSON.parse(usuariosJSON);
  }

  // Agrega  nuevo usuario al arreglo
  usuarios.push(usuario);

  // Guarda el arreglo actualizado en el localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  limpiarFormulario();

  // Registrado
  alert("Registro exitoso!");
}


function mostrarUsuariosGuardados() {
  // Obtener el arreglo de usuarios del archivo JSON
  var usuariosJSON = localStorage.getItem("usuarios");

  if (usuariosJSON) {
    // Si hay usuarios guardados, convertir el JSON a un arreglo
    var usuarios = JSON.parse(usuariosJSON);

    // Mostrar los usuarios en la consola o en el documento HTML
    console.log(usuarios); // Muestra los usuarios en la consola del navegador

    
    var usuariosDiv = document.getElementById("usuarios-div");

    for (var i = 0; i < usuarios.length; i++) {
      var usuario = usuarios[i];

      var usuarioInfo = document.createElement("p");
      usuarioInfo.textContent = "Nombre: " + usuario.nombre + ", Apellido: " + usuario.apellido + ", Email: " + usuario.email;

      usuariosDiv.appendChild(usuarioInfo);
    }
    
  } else {
    console.log("No se encontraron usuarios guardados");
  }
}


function limpiarFormulario() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("email").value = "";
  document.getElementById("repetirEmail").value = "";
  document.getElementById("pais").value = "";
  document.getElementById("provincia").value = "";
  document.getElementById("localidad").value = "";
  document.getElementById("codigoPostal").value = "";
  document.getElementById("contrasena").value = "";
  document.getElementById("username").value = "";
}
 

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


