
// Obtengo el elemento imagen
var imagen = document.getElementById('imagen');

// Añado un evento a la imagen que se disparará cuando el cursor entra en ella
imagen.addEventListener('mouseenter', () => {
    // Cambio el atributo src de la imagen por la imagen nueva
    imagen.setAttribute('src', 'img/imagen2.jpg');
})

// Añado un evento a la imagen que se disparará cuando el cursos sale de ella
imagen.addEventListener('mouseleave', () => {
    // Cambio el atributo src de la imagen por la imagen por defecto
    imagen.setAttribute('src', 'img/imagen1.jpg');
})
