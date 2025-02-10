
// Obtengo los elementos button
var boton_anyadir = document.getElementById('boton_anyadir');
var boton_eliminar = document.getElementById('boton_eliminar');

// Añado un evento al boton añadir que se dispara al hacer click en el
boton_anyadir.addEventListener('click', () => {
    // Pido mediante un prompt un texto al usuario
    var texto = prompt('Introduce un texto:');
    // Creo un elemento div
    var div = document.createElement('div');
    // Creo un nodo texto con el texto que introdución el usuario en el prompt
    var nodo_texto = document.createTextNode(texto);
    // Añado el nodo texto al div
    div.appendChild(nodo_texto);
    // Añado el div al body del dodumento
    document.body.appendChild(div);
})

// Añado un evento al boton eliminar que se dispara al hacer click en el
boton_eliminar.addEventListener('click', () => {
    // Elimino el último hijo del body del documento
    document.body.removeChild(document.body.lastChild);
})
