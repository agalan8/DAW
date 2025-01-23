
window.addEventListener('load', () =>{

    document.getElementById('bienvenida').innerHTML = "<h1>BIENVENID@</h1>";

    setTimeout(function() {
        document.getElementById('bienvenida').innerHTML = "";
    }, 3000);
});

var nombre = document.getElementById('nombre');
var color = document.getElementById('color');
var notificaciones = document.getElementById('notificaciones');
var boton_enviar = document.getElementById('enviar');
var notificacion = false;

nombre.addEventListener('keyup', ()=>{
    document.getElementById('impr_nombre').innerHTML = nombre.value;
})

color.addEventListener('change', ()=> {
    document.getElementById('impr_color').style.backgroundColor = color.value;
})

notificaciones.addEventListener('change', () => {

    if(notificaciones.checked){
        document.getElementById('impr_notificaciones').innerHTML = "SÍ";
        notificacion = true;
    } else {
        document.getElementById('impr_notificaciones').innerHTML = "NO";
    }
})

boton_enviar.addEventListener('mouseenter', () => {
    boton_enviar.style.backgroundColor = "#45a049";
    boton_enviar.style.transform = "scale(1.05)";
})

boton_enviar.addEventListener('mouseleave', () => {
    boton_enviar.style.backgroundColor = "#4CAF50";
    boton_enviar.style.transform = "scale(1)";
})

boton_enviar.addEventListener('click', (event) =>{

    if(validarNombre() & validarColor()){
    } else {
        event.preventDefault();
    }

})

function validarNombre(){

    document.getElementById('error_nombre').innerHTML = "";
    nombre.style.backgroundColor = "";

    if(nombre.value == undefined || nombre.value == ""){
        document.getElementById('error_nombre').innerHTML = "El nombre es incorrecto";
        nombre.style.backgroundColor = "lightcoral";
        return false;
    }

    return true;
}

function validarColor(){

    document.getElementById('error_color').innerHTML = "";

    if(color.value == "null"){
        document.getElementById('error_color').innerHTML = "Debe seleccionar un color";
        return false;
    }

    return true;
}

document.getElementById('formulario').addEventListener('submit', () =>{

    window.open(`resultado.html?nombre=${nombre.value}&color=${color.value}&notificacion=${notificacion}`);
})
