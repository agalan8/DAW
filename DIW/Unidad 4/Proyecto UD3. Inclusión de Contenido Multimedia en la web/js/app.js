'use strict'

const album = document.querySelectorAll('.album');
const tab = document.querySelectorAll('.tab');
var activar = true;

album.forEach((cadaAlbum, i)=>{
    album[i].addEventListener('click',()=>{

        activar = true;

        if(tab[i].classList.contains('tab-activo')){
            activar = false;
        }

        album.forEach(( cadaAlbum, i)=>{
            tab[i].classList.remove('tab-activo');

        })

        if(activar){
            var carrusel = tab[i].querySelector('.carrusel .imagenes-carrusel');
            tab[i].classList.add('tab-activo');
            carrusel.classList.add('carrusel-activo');


            var activo = 0;
            var imagenes = tab[i].querySelectorAll('.carrusel .imagenes-carrusel .img-carrusel');
            var siguiente = tab[i].querySelector('#siguiente');
            var atras = tab[i].querySelector('#atras');
            var puntos = tab[i].querySelectorAll('.carrusel .puntos li');
            var longitudImagenes = imagenes.length - 1;

            recargarCarrusel();


            siguiente.onclick = function(){
                activo = activo + 1 <= longitudImagenes ? activo + 1 : 0;
                recargarCarrusel();
            }

            atras.onclick = function(){
                activo = activo - 1 >= 0 ? activo - 1 : longitudImagenes;
                recargarCarrusel();
            }

            function recargarCarrusel(){

                carrusel.style.left = -imagenes[activo].offsetLeft + 'px';

                var ultimo_punto_activo = tab[i].querySelector('.carrusel .puntos li.activo');
                ultimo_punto_activo.classList.remove('activo');
                puntos[activo].classList.add('activo');

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

        }
    })
})
