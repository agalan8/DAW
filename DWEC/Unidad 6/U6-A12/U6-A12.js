
var anyadir_fila = document.getElementById('anyadir_fila');
// Creo un nuevo elemento table
var table = document.createElement('table');
// Agrego el elemento table al body del documento
document.body.appendChild(table);
// Variable que indica el número de columnas que tendrá la tabla
var numColumnas = 4;


// Creo un nuevo evento en el boton añadir fila que se dispara al hacer click en el
anyadir_fila.addEventListener('click', () => {
    // Inserto una nueva fila a la tabla
    var fila = table.insertRow();
    // Añado tantas columnas como el valor de numColumnas
    for(let i = 0; i < numColumnas; i++){
        // Para todas las columnas menos para la última hago lo siguiente
        if(i != numColumnas - 1){
            // Creo un nuevo elemento td celda
            let celda = document.createElement('td');
            // Agrego la celda a la fila
            fila.appendChild(celda);
            // Añado un texto a la celda
            celda.textContent = 'Click para editar'
            // Variable para comprobar si el input esta activado
            let input_activado = false;
            // Creo un nuevo evento en la celda que se disparará al hacer click en ella
            celda.addEventListener('dblclick', (event) => {
                // Si el input esta activado detiene el evento
                if(input_activado){
                    event.preventDefault();
                // En caso contrario
                } else{
                    // Creo un nuevo elemento input, modifico su atributo type a text
                    // y le doy el valor del texto de la celda
                    let input_text = document.createElement('input');
                    input_text.type = 'text';
                    input_text.value = celda.firstChild.textContent;
                    // Clono el nodo texto por si el usuario pulsa Escape
                    let texto_anterior = celda.firstChild.cloneNode();
                    // Reemplazo el nodo texto de la celda por el input
                    celda.replaceChild(input_text, celda.firstChild);
                    // Variable para comprobar si se ha presionado el escape
                    let escapepresionado = false;
                    // Indico que el input esta activado
                    input_activado = true;
                    // Creo un evento en el elemento input que se disparará al dejar de pulsar una tecla en el
                    input_text.addEventListener('keyup', (event) => {
                        // Si la tecla es 'Escape'
                        if(event.key === 'Escape'){
                            // Indico que se ha presionado Escape
                            escapepresionado = true;
                            // Reemplazo el input de la celda por el nodo texto con el valor anterior
                            celda.replaceChild(texto_anterior, celda.firstChild);
                            // Indico que el input ya no esta activo
                            input_activado = false;
                        }
                        // Si la tecla es Enter
                        if(event.key === 'Enter'){
                            // Creo un nuevo nodo texto con el valor del input
                            let nodo_texto = document.createTextNode(input_text.value);
                            // Reemplazo el input de la celda por el nodo texto
                            celda.replaceChild(nodo_texto, celda.firstChild);
                            // Indico que el input ya no esta activo
                            input_activado = false;
                        }
                    })
                    // Creo un evento en el elemento input que se disparará al perder el target
                    input_text.addEventListener('blur', (event) => {
                        // Si este evento se ha activado por presionar Escape
                        if(escapepresionado){
                            // Detengo el evento
                            event.preventDefault();
                            // Vuelvo a poner la variable de Escape a false
                            escapepresionado = false;
                        // En caso contrario hago lo mismo que si presionara Enter
                        } else{
                            //
                            let nodo_texto = document.createTextNode(input_text.value);
                            celda.replaceChild(nodo_texto, celda.firstChild);
                            input_activado = false;

                        }
                    })
                }
            })
            // Para crear la ultima celda hago lo siguiente
            } else {
                // Creo un nuevo elemento button eliminar
                var eliminar = document.createElement('button');
                // Inserto una celda a la fila con el elemento button elmiinar como hijo y el texto 'Eliminar'
                fila.insertCell().appendChild(eliminar).textContent = 'Eliminar';
                // Creo un evento en el elemento boton eliminar que se disparará al hacer click en el
                eliminar.addEventListener('click', () => {
                // Elimino el nodo padre del nodo padre del elemento button eliminar, es decir, la fila
                eliminar.parentNode.parentNode.remove();
            })
        }
    }
})
