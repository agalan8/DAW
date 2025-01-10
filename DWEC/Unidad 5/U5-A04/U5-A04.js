
var mensaje = document.getElementById('mensaje');

document.addEventListener('mousedown', function(event){
    mensaje.style.backgroundColor = '#FFFF00';
})

document.addEventListener('keydown', function(event){
    mensaje.style.backgroundColor = '#CCE6FF';
})

document.addEventListener('mousemove', function(event){
    mensaje.style.backgroundColor = '#FFFFFF';
})
