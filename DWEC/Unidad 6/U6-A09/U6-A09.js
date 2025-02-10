
// Creo un elemento table
var table = document.createElement('table');
// Creo un thead en la tabla
var thead = table.createTHead();
// Creo un elemento tr
var tr = document.createElement('tr');
// Añado la fila tr al thead
thead.appendChild(tr);
// Inserto una celda en la fila por cada columna de la tabla
tr.insertCell().textContent = 'Nombre';
tr.insertCell().textContent = 'Edad';
tr.insertCell().textContent = 'Acciones';
// Creo un tbody en la tabla
var tbody = table.createTBody();
// Añado la tabla al body del documento
document.body.appendChild(table);
// Obtengo el elemento boton con id "boton_agregar"
var boton_agregar = document.getElementById('boton_agregar');
// Creo un evento en el boton que se disparará al hacer click en el
boton_agregar.addEventListener('click', () => {
    // Obtengo los valores de los inputs
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    // Creo un elemento tr
    var tr = document.createElement('tr');
    // Agrego la fila al tbody
    tbody.appendChild(tr);
    // Inserto una celda en la fila con el nombre, otra con la edad
    tr.insertCell().textContent = nombre;
    tr.insertCell().textContent = edad;
    // Creo un elemento button
    var boton_eliminar = document.createElement('button');
    // Inserto una celda en la fila con el boton y el texto "Eliminar"
    tr.insertCell().appendChild(boton_eliminar).textContent = 'Eliminar';
    // Creo un evento en el boton eliminar que se disparará al hacer click en el
    boton_eliminar.addEventListener('click', () =>{
        // Elimino el nodo padre del nodo padre del botón, es decir, la fila
        boton_eliminar.parentNode.parentNode.remove();
    })

})
