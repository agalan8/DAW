function sumar(...args){
    var res = 0;
    // Recorro el array de agumentos y voy guardando la suma en res
    for(i of args){
        res += parseInt(i);
    }
    return res
}

function restar(...args){
    /* Guardo el primero argumento en res para que no empieze restando menos 0
    ya que aria 0 - numero negando el primero nuemero
    */
    var res = args[0];
    for(i in args){
        // Si estoy en la primera posición del array de argumentos paso al siguiente
        if(i == 0){
            continue;
        } else{
            res -= parseInt(args[i]);
        }
    }
    return res
}

function multiplicar(...args){
    // Recorro el array de agumentos y voy guardando la multiplicación en res
    var res = 1;
    for(i of args){
        res *= parseInt(i);
    }
    return res
}

function dividir(...args){
    var res = args[0];
    for(i in args){
        if(i == 0){
            continue;
        } else{
            res /= parseInt(args[i]);
        }
    }
    return res
}

function calcular(){
    // Guardo los valores u operandos de la operación
    valores = document.getElementById('valores').value;
    // Guardo la cadena que me indica que operación se quiere realizar
    operacion = document.getElementById('operacion').value;
    /* Compruebo que la cadena de valores introducida es correcta
    permitiendo 1,2,3 o 1 , 2 , 3*/
    if(valores.match(/^\d+(,\s*\d+)*$/)){
        // Si cumple el patrón llamo a la función dependiendo de la operación y los valores introducidos
        document.getElementById('div').innerHTML = "<h1>El resultado es: " + eval(`${operacion}(${valores});`) + "</h1>";
    } else {
        document.getElementById('div').innerHTML = "<h1>¡Formato incorrecto!</h1>";
    }
}
