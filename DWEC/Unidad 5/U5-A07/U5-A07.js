
var imagen = document.getElementById('imagen');
var mensaje = document.getElementById('mensaje');

imagen.addEventListener('error', function(){

    mensaje.innerHTML = '<h1>La imagen NO se ha cargado correctamente.</h1>';

})
