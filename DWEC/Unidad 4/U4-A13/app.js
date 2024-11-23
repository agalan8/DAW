
listaTareas = [];

const actualizarLista = () =>{
    document.getElementById('tareas').innerHTML = "";
    num = 1;
    listaTareas.forEach((function(tarea){
        document.getElementById('tareas').innerHTML += `<p>${num}. ${tarea.nombre} - Estado: ${tarea.estado} </p>`;
        num++;
    }))
}

function anadirTarea(){
    nombre = document.getElementById('tarea').value;
    tarea = {nombre: nombre, estado: "pendiente"};
    listaTareas.push(tarea);
    actualizarLista();
}

function completarTarea(){
    indice = document.getElementById('indiceC').value;
    indice = indice - 1;
    if(indice >= 0 && indice < listaTareas.length){
        listaTareas[indice].estado = "completada"
        actualizarLista();
    } else {
        alert("¡Esa tarea no esta en la lista!")
    }
}

function eliminarTarea(){
    indice = document.getElementById('indiceE').value;
    indice = indice - 1;
    if(indice >= 0 && indice < listaTareas.length){
        listaTareas.splice(indice, 1);
        actualizarLista();
    } else {
        alert("¡Esa tarea no esta en la lista!")
    }
}

function completadas(){
    document.getElementById('tareas').innerHTML = "";
    num = 1;
    listaTareas.forEach((function(tarea){
        if(tarea.estado == "completada"){
        document.getElementById('tareas').innerHTML += `<p>${num}. ${tarea.nombre} - Estado: ${tarea.estado} </p>`;
        num++;
        }
    }))
}

function pendientes(){
    document.getElementById('tareas').innerHTML = "";
    num = 1;
    listaTareas.forEach((function(tarea){
        if(tarea.estado == "pendiente"){
        document.getElementById('tareas').innerHTML += `<p>${num}. ${tarea.nombre} - Estado: ${tarea.estado} </p>`;
        num++;
        }
    }))
}
