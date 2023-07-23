document.addEventListener("DOMContentLoaded", function() {
  // Agrego evento al formulario
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtengo los valores de usuario y contraseña
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Validar usuario y contraseña
    if (usuario === "" || contrasena === "") {
      alert("Por favor, complete todos los campos.");
      return; // Detener la ejecución del código si los campos están vacíos
    }

    // Verificar si el usuario está registrado
    var usuariosJSON = localStorage.getItem("usuarios");
    if (usuariosJSON) {
      var usuarios = JSON.parse(usuariosJSON);
      var usuarioEncontrado = false;

      for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].username === usuario) {
          usuarioEncontrado = true;
          break;
        }
      }

      if (!usuarioEncontrado) {
        alert("Usuario no registrado. Por favor, registre una cuenta.");
        return; // Usuario no registrado
      }
    } else {
      alert("No se encontraron usuarios registrados. Por favor, registre una cuenta.");
      return; // Detener la ejecución del código si no hay usuarios registrados
    }

    // Mostrar inicio de sesión válido
    showCustomAlert("Bienvenido");
  });

  // Mostrar mensaje de bienvenida y limpiar el formulario
  function showCustomAlert(message) {
    var customAlert = document.getElementById("custom-alert");
    customAlert.textContent = message;
    customAlert.style.display = "block";

    // Limpia los campos del formulario después de 2 segundos
    setTimeout(function() {
      document.getElementById("usuario").value = "";
      document.getElementById("contrasena").value = "";
      customAlert.style.display = "none";
    }, 2000);
  }
});

//hover de logo
var logo = document.getElementById("logo-text");
var originalColor = logo.style.color; // Guarda el color original

logo.addEventListener("mouseover", function() {
  this.style.color = "rgb(4, 221, 236)"; // Cambia el color 
});

logo.addEventListener("mouseout", function() {
  this.style.color = originalColor; // Restaura el color original 
});


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

  function showCustomAlert(message) {
    var customAlert = document.getElementById("custom-alert");
    customAlert.textContent = message;
  
    // Cambiar la propiedad display a "block" solo si no está visible
    if (customAlert.style.display !== "block") {
      customAlert.style.display = "block";
    }
  
    setTimeout(function() {
      customAlert.style.display = "none";
    }, 3000); // Desaparece después de 3 segundos (3000 milisegundos)
  }