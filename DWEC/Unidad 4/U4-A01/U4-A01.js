function ordenar(...args){
    // Recorro el array
    for(i = 0; i < args.length - 1; i++){
        // Presupongo en un principio que la posición donde se encuentra el valor más pequeño es la primera
        minIndex = i;

        // Recorro el array de nuevo a partir de la posicion i buscando si hay algún número menor
        for(j = i + 1; j < args.length; j++){
            // En caso de encontrar un número menor me guardo su posición
            if(args[j] < args[minIndex]){
                minIndex = j;
            }
        }
        /* Si al salir del bucle anterior la posición del número menor es diferente a la que ya tenía
        los cambio de lugar*/
        if(minIndex !== i){
            // Me guardo el valor de la posición actual para no perderlo en una auxiliar
            aux = args[i];
            // A la posición actual le doy el valor de mi nuevo valor mínimo
            args[i] = args[minIndex];
            // Guardo mi antugio valor mínimo en la posición en la que estaba mi nuevo valor mínimo
            args[minIndex] = aux;
        }
    }
    return args;
}

function main(){
    // Guardo los valores del array
    valores = document.getElementById('valores').value;
    /* Compruebo que la cadena de valores introducida es correcta
    permitiendo 1,2,3 o 1 , 2 , 3*/
    if(valores.match(/^\d+(,\s*\d+)*$/)){
        // Si cumple el patrón llamo a la función ordenar pasando como parámetros los valores
        document.getElementById('div').innerHTML = "<h1>Ordenado: " + eval(`ordenar(${valores});`) + "</h1>";
    } else {
        document.getElementById('div').innerHTML = "<h1>¡Formato incorrecto!</h1>";
    }
}
