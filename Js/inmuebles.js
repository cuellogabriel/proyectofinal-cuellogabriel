const containerElement = document.querySelector('#container');
renderizarProductos('inmuebles').then(htmlElements => {containerElement.innerHTML = htmlElements});