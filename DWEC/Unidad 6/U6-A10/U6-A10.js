
// Obtengo el elemento button con id "anyadir_producto"
var anyadir_producto = document.getElementById('anyadir_producto');
// Creo un evento en el boton que se disparará la  hacer click en el
anyadir_producto.addEventListener('click', () => {
    // Obtengo los valores de los inputs del html
    var nombre_valor = document.getElementById('nombre').value;
    var precio_valor = document.getElementById('precio').value;
    var url = document.getElementById('imagen').value;
    // Creo un nuevo elemento div
    var tarjeta = document.createElement('div');
    // Creo un nuevo atributo en el elemento div
    tarjeta.setAttribute('class', 'tarjeta');
    // Creo un nuevo elemento img
    var imagen = document.createElement('img');
    // Creo un nuevo atributo en el elemento img
    imagen.setAttribute('src', url);
    // Creo un nuevo elemento div
    var info = document.createElement('div');
    // Creo un nuevo atributo en el elemento div
    info.setAttribute('class', 'info');


    // Creo dos elementos p y un elemento button
    var nombre = document.createElement('p');
    var precio = document.createElement('p');
    var eliminar = document.createElement('button');
    // Añado el elemento img y el elemento div "info" al elemento tarjeta como nodos hijos
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(info);
    // Añado los elementos p y button a elemento div "info"
    info.appendChild(nombre).textContent = `Nombre: ${nombre_valor}`;
    info.appendChild(precio).textContent = `Precio: ${precio_valor}€`;
    info.appendChild(eliminar).textContent = 'Eliminar';
    // Añado la tarjeta al body del documento
    document.body.appendChild(tarjeta);
    // Creo un evento en el boton eliminar que se disparará cuando se haga click en este
    eliminar.addEventListener('click', () =>{
        // Elimino el nodo padre del nodo padre del boton, es decir, la tarjeta div
        eliminar.parentNode.parentNode.remove();
    })
})
