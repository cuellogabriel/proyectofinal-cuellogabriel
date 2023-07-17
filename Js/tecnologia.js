const containerElement = document.querySelector('#container');
renderizarProductos('tecnologia').then(htmlElements => {containerElement.innerHTML = htmlElements});