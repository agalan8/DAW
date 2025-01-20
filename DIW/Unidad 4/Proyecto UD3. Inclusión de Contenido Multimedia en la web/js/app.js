'use strict'

const album = document.querySelectorAll('.album');
const tab = document.querySelectorAll('.tab');
var activar = true;

album.forEach((cadaAlbum, i)=>{
    album[i].addEventListener('click',()=>{

        activar = true;

        if(tab[i].classList.contains('activo')){
            activar = false;
        }

        album.forEach(( cadaAlbum, i)=>{
            tab[i].classList.remove('activo');
        })

        if(activar){
            tab[i].classList.add('activo');
        }
    })
})

let carrusel = document.querySelector('.carrusel .imagenes-carrusel');
let imagenes = document.querySelectorAll('.carrusel .imagenes-carrusel .img-carrusel');
let siguiente = document.getElementById('siguiente');
let atras = document.getElementById('atras');
let puntos = document.querySelectorAll('.carrusel .puntos li');

let longitudImagenes = imagenes.length - 1;
let activo = 0;
siguiente.onclick = function(){
    activo = activo + 1 <= longitudImagenes ? activo + 1 : 0;
    recargarCarrusel();
}
atras.onclick = function(){
    activo = activo - 1 >= 0 ? activo - 1 : longitudImagenes;
    recargarCarrusel();
}
let refreshInterval = setInterval(()=> {siguiente.click()}, 3000);
function recargarCarrusel(){
    carrusel.style.left = -imagenes[activo].offsetLeft + 'px';
    //
    let ultimo_punto_activo = document.querySelector('.carrusel .puntos li.activo');
    ultimo_punto_activo.classList.remove('activo');
    puntos[activo].classList.add('activo');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {siguiente.click()}, 3000);


}

puntos.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         activo = key;
         recargarCarrusel();
    })
})
window.onresize = function(event) {
    recargarCarrusel();
};
