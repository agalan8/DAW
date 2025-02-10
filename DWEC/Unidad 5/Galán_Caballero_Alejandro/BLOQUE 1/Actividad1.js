
var boton = document.getElementById('boton');
var texto = document.getElementById('texto');
var pulsado = false;

boton.addEventListener('click', () =>{

    if(!pulsado){
        texto.innerHTML = "Has hecho clic";
        pulsado = true;
    } else{
        texto.innerHTML = "Haz clic en mí";
        pulsado = false;
    }
})

var boton_rojo = document.getElementById('rojo');
var boton_azul = document.getElementById('azul');
var boton_verde = document.getElementById('verde');
var contador_rojo = 0;
var contador_azul = 0;
var contador_verde = 0;

boton_rojo.addEventListener('click', () =>{

    contador_rojo ++;
    document.getElementById('contador_rojo').innerHTML = contador_rojo;
    comprobarGanador();

})

boton_azul.addEventListener('click', () =>{

    contador_azul ++;
    document.getElementById('contador_azul').innerHTML = contador_azul;
    comprobarGanador();

})

boton_verde.addEventListener('click', () =>{

    contador_verde ++;
    document.getElementById('contador_verde').innerHTML = contador_verde;
    comprobarGanador();

})

function comprobarGanador(){

    if(contador_rojo > contador_azul && contador_rojo > contador_verde){
        boton_rojo.style.backgroundColor = 'yellow';
    } else if(contador_azul > contador_rojo && contador_azul > contador_verde){
        boton_azul.style.backgroundColor = 'yellow';
    } else if(contador_verde > contador_rojo && contador_verde > contador_azul){
        boton_verde.style.backgroundColor = 'yellow';
    } else{
        boton_rojo.style.backgroundColor = '';
        boton_azul.style.backgroundColor = '';
        boton_verde.style.backgroundColor = '';
    }
}
