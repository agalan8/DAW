
// Obtengo una coleccion con todos los inputs
var inputs = document.querySelectorAll('input[type="text"]');
// Obtengo el elemento botón
var boton = document.getElementById('boton');
// Variable para saber los los inputs estan activados o desactivados
var activados = true;
// Creo un evento en el boton que se disparará al hacer click en el
boton.addEventListener('click', () => {
    // Si activados = true
    if(activados){
        // Por cada input en la coleccion inputs hago lo siquiente
        inputs.forEach(function(input) {
            // Desactivo todos
            input.disabled = true;
        });
        // Cambio el texto del botón
        boton.textContent = 'Activar todos';
        // Indico que estan desactivados
        activados = false;
    // En caso contrario:
    } else{
        // Activo todos
        inputs.forEach(function(input) {
            input.disabled = false;
        });
        // Cambio el texto del botón
        boton.textContent = 'Desactivar todos';
        // Indico que están activados
        activados = true;
    }
})
