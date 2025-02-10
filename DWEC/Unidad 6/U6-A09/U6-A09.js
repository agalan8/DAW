
var table = document.createElement('table');

var thead = table.createTHead();

var tr = document.createElement('tr');
thead.appendChild(tr);

tr.insertCell().textContent = 'Nombre';
tr.insertCell().textContent = 'Edad';
tr.insertCell().textContent = 'Acciones';

var tbody = table.createTBody();

document.body.appendChild(table);

var boton_agregar = document.getElementById('boton_agregar');

boton_agregar.addEventListener('click', () => {

    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;

    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    tr.insertCell().textContent = nombre;
    tr.insertCell().textContent = edad;
    var boton_eliminar = document.createElement('button');
    tr.insertCell().appendChild(boton_eliminar).textContent = 'Eliminar';

    boton_eliminar.addEventListener('click', () =>{
        boton_eliminar.parentNode.parentNode.remove();
    })

})
