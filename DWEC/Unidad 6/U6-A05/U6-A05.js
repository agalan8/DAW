
// Obtengo una colección con todos los párrafos
var parrafos = document.querySelectorAll('p');
// Obtengo una colección con todos los botones
var botones = document.querySelectorAll('button');

// Por cada botón de la coleccion botones hago lo siguiente
botones.forEach((boton, i) => {
    // Creo un evento al boton que se disparará al hacer click en el
    botones[i].addEventListener('click', () =>{
        // Si el párrafo correspondiente con la posición del botón
        // no tiene la clase oculto hago lo siguiente
        if(!parrafos[i].classList.contains('oculto')){
            // Le añado la clase oculto
            parrafos[i].classList.add('oculto');
            // Cambio el texto del botón
            botones[i].textContent = `Mostrar - Párrafo ${i + 1}`;
        } else{
            // En caso contrario elimino la clase oculto
            parrafos[i].classList.remove('oculto');
            // Cambio el texto del botón
            botones[i].textContent = `Ocultar - Párrafo ${i + 1}`;
        }
    })
})
