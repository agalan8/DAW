
var anyadir_producto = document.getElementById('anyadir_producto');

anyadir_producto.addEventListener('click', () => {

    var nombre_valor = document.getElementById('nombre').value;
    var precio_valor = document.getElementById('precio').value;
    var url = document.getElementById('imagen').value;

    var tarjeta = document.createElement('div');
    tarjeta.setAttribute('class', 'tarjeta');

    var imagen = document.createElement('img');
    imagen.setAttribute('src', url);

    var info = document.createElement('div');
    info.setAttribute('class', 'info');



    var nombre = document.createElement('p');
    var precio = document.createElement('p');
    var eliminar = document.createElement('button');

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(info);
    info.appendChild(nombre).textContent = `Nombre: ${nombre_valor}`;
    info.appendChild(precio).textContent = `Precio: ${precio_valor}€`;
    info.appendChild(eliminar).textContent = 'Eliminar';
    document.body.appendChild(tarjeta);

    eliminar.addEventListener('click', () =>{
        eliminar.parentNode.parentNode.remove();
    })
})
