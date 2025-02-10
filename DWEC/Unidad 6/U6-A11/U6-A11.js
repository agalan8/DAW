var agregar_tarea = document.getElementById('agregar_tarea');
// Creo un nuevo elemento ul
var ul = document.createElement('ul');
// Añado el elemento ul al body del documento
document.body.appendChild(ul);
// Creo un nuevo evento en el boton agregar_tarea que se disparará al hacer click en el
agregar_tarea.addEventListener('click', () => {
    // Obtengo el valor del input con id "tarea"
    var tarea = document.getElementById('tarea').value;
    // Creo un nuevo elemento li y lo agrego al elemento ul como nodo hijo
    var li = document.createElement('li');
    ul.appendChild(li).textContent = tarea;
    // Creo un nuevo elemento div y un elemento button
    var div = document.createElement('div');
    var boton_eliminar = document.createElement('button');
    // Agrego el elemento div al elemento li
    li.appendChild(div);
    // Agrego el elemento button al elemento div con el texto "Eliminar"
    div.appendChild(boton_eliminar).textContent = 'Eliminar';
    // Creo un nuevo evento en el boton eliminar que se disparará al hacer click en el
    boton_eliminar.addEventListener('click', () => {
        // Elimino el nodo padre del nodo padre dele botónt, es decir, el elemento li
        boton_eliminar.parentNode.parentNode.remove();
    })
    // Creo un nuevo evento en el elemento li que se disparará al hacer doble click en el
    li.addEventListener('dblclick', () => {
        // Creo un nuevo elemento input, le cambio el atributo type a text le doy el valor del nodo texto del li
        var input_text = document.createElement('input');
        input_text.type = 'text';
        input_text.value = li.firstChild.textContent;
        // Reemplazo el nodo texto del li por el input
        li.replaceChild(input_text, li.firstChild);
        // Creo un evento en el input que se disparará al dejar de pulsar una tecla
        input_text.addEventListener('keyup', (event) => {
            // Si la tecla que se ha dejado de pulsar es 'Enter' hace lo siguiente
            if(event.key === 'Enter'){
                // Si la lingitud del valor del input es cero
                if(input_text.value.trim().length == 0){
                    // Elimino el nodo padre del input, es decir, el li
                    input_text.parentNode.remove();
                // En caso contrario
                }else{
                    // Creo un nuevo nodo texto con el texto del valor del input
                    var nodo_texto = document.createTextNode(input_text.value);
                    // Reemplazo el nodo hijo input del li por el nodo texto anterior
                    li.replaceChild(nodo_texto, li.firstChild);
                }
            }
        })
    })
})
