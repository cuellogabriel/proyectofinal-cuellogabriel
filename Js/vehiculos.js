const containerElement = document.querySelector('#container');
renderizarProductos('vehiculos').then(htmlElements => {containerElement.innerHTML = htmlElements});