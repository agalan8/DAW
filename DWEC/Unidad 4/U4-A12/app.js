
// Creo el Array que contendrá los artículos
listaArticulos = [];

const actualizarLista = () => {
    // Para actualizar la lista simplemente imprimo de nuevo el array
    document.getElementById('lista').innerHTML = listaArticulos;
}

function anadirArticulo() {
    // Cojo el articulo que se introduce en el input
    articulo = document.getElementById('articulo').value;
    // Lo añado al final del array
    listaArticulos.push(articulo);
    // Llamo a la funcion que me actualiza la lista
    actualizarLista();
}

function eliminarPrimerArticulo(){
    // Elimino el primer articulo del array
    listaArticulos.shift();
    // Actualizo la lista
    actualizarLista();
}

function eliminarUltimoArticulo(){
    // Elimino el último articulo del array
    listaArticulos.pop();
    //Actualizo la lista
    actualizarLista();
}

function mostrarArticulos(){
    /* Para mostrar los 3 primeros artículos uso el método slice indicando
    que empiece por la posición 0 (primera posición) hasta la posición 3
    como la posición final de este método no se incluye devolverá las
    posiciones 0, 1 y 2 (primera, segunda y tercera posición).*/
    document.getElementById('tresArticulos').innerHTML = listaArticulos.slice(0,3);
}
