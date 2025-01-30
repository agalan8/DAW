'use strict'

// albumes.html

const album = document.querySelectorAll('.album');
const tab = document.querySelectorAll('.tab');
var activar = true;
var desactivar = false;

album.forEach((cadaAlbum, i)=>{
    album[i].addEventListener('click',()=>{

        activar = true;

        if(tab[i].classList.contains('tab-activo')){
            activar = false;
        }

        album.forEach(( cadaAlbum, i)=>{
            tab[i].classList.remove('tab-activo');
            album[i].classList.remove('album-activo');
            document.getElementById('filtro').style.opacity = "0";

        })

        if(activar){
            var carrusel = tab[i].querySelector('.carrusel .imagenes-carrusel');
            tab[i].classList.add('tab-activo');
            album[i].classList.add('album-activo');
            document.getElementById('filtro').style.opacity = "0.5";
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

// preguntas-frecuentes.html

var bloque = document.querySelectorAll('.bloque-acordeon');
var pregunta = document.querySelectorAll('.pregunta-acordeon');
var icono = document.querySelectorAll('.linea-vertical');

pregunta.forEach((cadapregunta, i) => {
    pregunta[i].addEventListener('click', () =>{

        desactivar = false;

        if(bloque[i].classList.contains('acordeon-activo')){
            desactivar = true;
        }

        if(desactivar){
            bloque[i].classList.remove('acordeon-activo');
            icono[i].classList.remove('linea-vertical-activo');

        } else{
            bloque[i].classList.add('acordeon-activo');
            icono[i].classList.add('linea-vertical-activo');
        }
    })
})
