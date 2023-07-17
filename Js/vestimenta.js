const containerElement = document.querySelector('#container');
renderizarProductos('vestimenta').then(htmlElements => {containerElement.innerHTML = htmlElements});