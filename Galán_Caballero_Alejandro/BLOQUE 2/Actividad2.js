

var nombre = document.getElementById('nombre');
var fecha_entrada = document.getElementById('fecha_entrada');
var fecha_salida = document.getElementById('fecha_salida');
var numero_huespedes = document.getElementById('numero_huespedes');
var telefono_movil = document.getElementById('telefono_movil');
var reservar = document.getElementById('reservar');
var nombre_validado = false;
var telefono_movil_validado = false;

nombre.addEventListener('blur', () => {validarNombre(), comprobarErrores()});
telefono_movil.addEventListener('blur', () => {validarTelefono_movil(), comprobarErrores()});

function comprobarErrores(){
    if(nombre_validado && telefono_movil_validado){
        reservar.disabled = false;
    } else{
        reservar.disabled = true;
    }
}

function validarNombre(){

    if(nombre.value.trim().length < 3){
        document.getElementById('error_nombre').innerHTML = "El nombre no tiene los 3 carácteres mínimos."
        nombre.style.backgroundColor = 'lightcoral';
        nombre_validado = false;
        return false
    } else {
        document.getElementById('error_nombre').innerHTML = "";
        nombre.style.backgroundColor = '';
        nombre_validado = true;
        return true;
    }

}

function validarTelefono_movil(){

    var expReg = /^6\d{8}$/;

    if(!expReg.test(telefono_movil.value)){
        document.getElementById('error_telefono_movil').innerHTML = "El número de móvil no es válido."
        telefono_movil.style.backgroundColor = 'lightcoral';
        telefono_movil_validado = false;
        return false;
    } else{
        document.getElementById('error_telefono_movil').innerHTML = "";
        telefono_movil.style.backgroundColor = '';
        telefono_movil_validado = true;
        return true;
    }
}

reservar.addEventListener('click', (event) =>{
    if(validarNumeroHuespedes() & validarFechaEntrada() & validarFechaSalida()){
        alert('Registro correcto');
    } else{
        event.preventDefault();
    }
})

function validarNumeroHuespedes(){

    document.getElementById('error_numero_huespedes').innerHTML = "";
    numero_huespedes.style.backgroundColor = "";

    if(numero_huespedes.value >= 1 && numero_huespedes.value <=4){
        return true;
    } else{
        document.getElementById('error_numero_huespedes').innerHTML = "El número de huespedes debe estar entre 1 y 4"
        numero_huespedes.style.backgroundColor = 'lightcoral';
        return false;
    }
}

function validarFechaEntrada(){

    document.getElementById('error_fecha_entrada').innerHTML = "";
    fecha_entrada.style.backgroundColor = "";

    var fecha_entrada_date = new Date(fecha_entrada.value);
    var fecha_actual = new Date();

    if(fecha_entrada_date < fecha_actual){
        document.getElementById('error_fecha_entrada').innerHTML = "La fecha de entrada debe ser posterior a la actual.";
        fecha_entrada.style.backgroundColor = 'lightcoral';
        return false;
    } else{
        return true;
    }
}

function validarFechaSalida(){

    document.getElementById('error_fecha_salida').innerHTML = "";
    fecha_salida.style.backgroundColor = "";

    var fecha_salida_date = new Date(fecha_salida.value);
    var fecha_entrada_date = new Date(fecha_entrada.value);

    if(fecha_salida_date < fecha_entrada_date){
        document.getElementById('error_fecha_salida').innerHTML = "La fecha de salida debe ser posterior a la fecha de entrada.";
        fecha_salida.style.backgroundColor = 'lightcoral';
        return false;
    } else{
        return true;
    }
}
