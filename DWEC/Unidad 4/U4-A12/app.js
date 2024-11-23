
listaArticulos = [];

const actualizarLista = () => {
    document.getElementById('lista').innerHTML = listaArticulos;
}

function anadirArticulo() {
    articulo = document.getElementById('articulo').value;
    listaArticulos.push(articulo);
    actualizarLista();
}

function eliminarPrimerArticulo(){
    listaArticulos.shift();
    actualizarLista();
}

function eliminarUltimoArticulo(){
    listaArticulos.pop();
    actualizarLista();
}

function mostrarArticulos(){
    document.getElementById('tresArticulos').innerHTML = listaArticulos.slice(0,3);
}
