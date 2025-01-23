

var nombre = document.getElementById('nombre');
var contraseña = document.getElementById('contraseña');
var fecha_nacimiento = document.getElementById('fecha_nacimiento');
var boton_enviar = document.getElementById('enviar');

nombre.addEventListener('blur', () => {validarNombre()});
contraseña.addEventListener('blur', () => {validarContraseña()});
fecha_nacimiento.addEventListener('blur', () => {validarFechaNacimiento()});
boton_enviar.addEventListener('click', (event) => {validarFormulario(event)});

function validarNombre(){

    if(nombre.value.trim() === ""){
        document.getElementById('error_nombre').innerHTML = "El nombre no puede estar vacío."
        nombre.style.backgroundColor = 'lightcoral';
        return false;
    } else if(nombre.value.trim().length < 3){
        document.getElementById('error_nombre').innerHTML = "El nombre debe tener al menos 3 carácteres."
        nombre.style.backgroundColor = 'lightcoral';
        return false
    } else {
        document.getElementById('error_nombre').innerHTML = "";
        nombre.style.backgroundColor = '';
        return true;
    }
}

function validarContraseña(){

    var expReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(!expReg.test(contraseña.value)){
        document.getElementById('error_contraseña').innerHTML = "La contraseña debe tener al menos: <br> - 8 carácteres<br> - Una letra mayúscula<br>- Una letra minúscula<br>- Un número."
        contraseña.style.backgroundColor = 'lightcoral';
        return false;
    } else{
        document.getElementById('error_contraseña').innerHTML = "";
        contraseña.style.backgroundColor = '';
        return true;
    }
}

function validarFechaNacimiento(){

    var fecha_nacimiento_date = new Date(fecha_nacimiento.value);
    var fecha_actual = new Date();

    fecha_actual.setFullYear(fecha_actual.getFullYear() - 18);

    if((fecha_nacimiento.value == '') || (fecha_nacimiento_date > fecha_actual)){
        document.getElementById('error_fecha_nacimiento').innerHTML = "El usuario debe tener al menos 18 años.";
        fecha_nacimiento.style.backgroundColor = 'lightcoral';
        return false;
    } else{
        document.getElementById('error_fecha_nacimiento').innerHTML = "";
        fecha_nacimiento.style.backgroundColor = '';
        return true;
    }
}

function validarIntereses(){

    if(document.querySelectorAll('input[type="checkbox"]:checked').length == 0){
        document.getElementById('error_intereses').innerHTML = "Debe seleccionar al menos un interes.";
        return false;
    } else{
        document.getElementById('error_intereses').innerHTML = "";
        return true;
    }
}

function validarFormulario(event){

    if(!(validarNombre() & validarContraseña() & validarFechaNacimiento() & validarIntereses())){
        event.preventDefault();
    } else if(document.querySelectorAll('input[name="genero"]:checked').length == 0){
       if(!confirm("No has seleccionado ningún género. ¿Desea continuar?")){
        event.preventDefault();
       }
    }
}































var boton_enviar = document.getElementById('enviar');

boton_enviar.addEventListener('mouseenter', () => {
    boton_enviar.style.backgroundColor = "#45a049";
    boton_enviar.style.transform = "scale(1.05)";
})

boton_enviar.addEventListener('mouseleave', () => {
    boton_enviar.style.backgroundColor = "#4CAF50";
    boton_enviar.style.transform = "scale(1)";
})
