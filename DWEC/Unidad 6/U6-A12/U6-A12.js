
var anyadir_fila = document.getElementById('anyadir_fila');
var table = document.createElement('table');
document.body.appendChild(table);
var numColumnas = 4;



anyadir_fila.addEventListener('click', () => {

    var fila = table.insertRow();

    for(let i = 0; i < numColumnas; i++){
        if(i != numColumnas - 1){
            let celda = document.createElement('td');
            fila.appendChild(celda);
            celda.textContent = 'Click para editar'

            let input_activado = false;

            celda.addEventListener('dblclick', (event) => {

                if(input_activado){
                    event.preventDefault();
                } else{

                    let input_text = document.createElement('input');
                    input_text.type = 'text';
                    input_text.value = celda.firstChild.textContent;
                    let texto_anterior = celda.firstChild.cloneNode();
                    celda.replaceChild(input_text, celda.firstChild);
                    let escapepresionado = false;
                    input_activado = true;

                    input_text.addEventListener('keyup', (event) => {

                        if(event.key === 'Escape'){
                            escapepresionado = true;
                            celda.replaceChild(texto_anterior, celda.firstChild);
                            input_activado = false;
                        }

                        if(event.key === 'Enter'){
                            let nodo_texto = document.createTextNode(input_text.value);
                            celda.replaceChild(nodo_texto, celda.firstChild);
                            input_activado = false;
                        }
                    })

                    input_text.addEventListener('blur', (event) => {
                        if(escapepresionado){
                            event.preventDefault();
                            escapepresionado = false;
                        } else{
                            let nodo_texto = document.createTextNode(input_text.value);
                            celda.replaceChild(nodo_texto, celda.firstChild);
                            input_activado = false;

                        }
                    })
                }
            })

            } else {
                var eliminar = document.createElement('button');
                fila.insertCell().appendChild(eliminar).textContent = 'Eliminar';
                eliminar.addEventListener('click', () => {
                eliminar.parentNode.parentNode.remove();
            })
        }
    }
})
