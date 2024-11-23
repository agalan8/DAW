
// Creo el array vacío
listaTareas = [];

const actualizarLista = () =>{
    // Cada vez que actualizo la lista, elimino lo que se imprimión anteriormente
    document.getElementById('tareas').innerHTML = "";
    // Creo la varuable num para numerar las tareas
    num = 1;
    // Por cada tarea en el array la imprimo
    listaTareas.forEach((function(tarea){
        document.getElementById('tareas').innerHTML += `<p>${num}. ${tarea.nombre} - Estado: ${tarea.estado} </p>`;
        // Aumento el número de la tarea para la siguiente
        num++;
    }))
}

function anadirTarea(){
    // Obtengo el nombre de la tarea
    nombre = document.getElementById('tarea').value;
    // Creao una nueva tarea con el nombre anterior y por defecto el estado: pendiente
    tarea = {nombre: nombre, estado: "pendiente"};
    // Añado la tarea al final del array
    listaTareas.push(tarea);
    // Actualizo la lista de tareas
    actualizarLista();
}

function completarTarea(){
    // Obtengo el número de la tarea que se quiere completar
    indice = document.getElementById('indiceC').value;
    // Resto 1 para que coincida con la posición de la tarea en el array
    indice = indice - 1;
    // Compruebo si el índice se encuentra en el array
    if(indice >= 0 && indice < listaTareas.length){
        // Si se encuentra cambio el estado de la tarea a completada
        listaTareas[indice].estado = "completada"
        // Actualizo la lista
        actualizarLista();
    } else {
        // Si no se encuentra muestro un alert informando
        alert("¡Esa tarea no esta en la lista!")
    }
}

// Esta función hace lo mismo que la anterior pero haciendo uso del método splice
function eliminarTarea(){
    indice = document.getElementById('indiceE').value;
    indice = indice - 1;
    if(indice >= 0 && indice < listaTareas.length){
        // Uso el método splice para eliminar 1 tarea en el índice indicado
        listaTareas.splice(indice, 1);
        actualizarLista();
    } else {
        alert("¡Esa tarea no esta en la lista!")
    }
}

function completadas(){
    // Elimino las tareas que se muestran para mostrar solo las completadas
    document.getElementById('tareas').innerHTML = "";
    num = 1;
    // Por cada tarea en la lista hago lo siguiente
    listaTareas.forEach((function(tarea){
        // Compruebo si el estado de la tarea es completada
        if(tarea.estado == "completada"){
        // Si lo es, imprimo la tarea
        document.getElementById('tareas').innerHTML += `<p>${num}. ${tarea.nombre} - Estado: ${tarea.estado} </p>`;
        num++;
        }
    }))
}

// Esta función hace lo mismo que la anterior pero haciendo uso del método filter
function pendientes(){
    document.getElementById('tareas').innerHTML = "";
    num = 1;
    // Guardo en una variable la tareas que cumplen con la condicion (estado === pendiente) haciendo uso del método filter
    tareasPendientes = listaTareas.filter(tarea => tarea.estado === "pendiente");
    // Por cada tarea en el array creado anteriormente la imprimo
    tareasPendientes.forEach(tarea =>{
        document.getElementById('tareas').innerHTML += `<p>${num}. ${tarea.nombre} - Estado: ${tarea.estado} </p>`;
        num++;
    });
}
