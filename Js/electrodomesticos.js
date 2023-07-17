const containerElement = document.querySelector('#container');
renderizarProductos('hogar').then(htmlElements => {containerElement.innerHTML = htmlElements});