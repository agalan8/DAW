
var imagen = document.getElementById('imagen');

document.addEventListener('mousedown', function(event){
    imagen.src = 'img/img2.jpeg';
})

document.addEventListener('mouseup', function(event){
    imagen.src = 'img/img1.jpeg';
})
