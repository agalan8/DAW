
var agregar_tarea = document.getElementById('agregar_tarea');
var ul = document.createElement('ul');
document.body.appendChild(ul);

agregar_tarea.addEventListener('click', () => {

    var tarea = document.getElementById('tarea').value;
    var li = document.createElement('li');

    ul.appendChild(li).textContent = tarea;

    var div = document.createElement('div');
    var boton_eliminar = document.createElement('button');
    li.appendChild(div);
    div.appendChild(boton_eliminar).textContent = 'Eliminar';

    boton_eliminar.addEventListener('click', () => {
        boton_eliminar.parentNode.parentNode.remove();
    })

    li.addEventListener('dblclick', () => {
        var input_text = document.createElement('input');
        input_text.type = 'text';
        input_text.value = li.firstChild.textContent;
        li.replaceChild(input_text, li.firstChild);

        input_text.addEventListener('keyup', (event) => {

            if(event.key === 'Enter'){
                if(input_text.value.trim().length == 0){
                    input_text.parentNode.remove();
                }else{
                    var nodo_texto = document.createTextNode(input_text.value);
                    li.replaceChild(nodo_texto, li.firstChild);
                }
            }
        })
    })
})
