

function crear0_10(){
    // Creo un array vacío
    numeros = [];
    // Lleno ese array con 10 elementos
    for(i = 1; i <= 10; i++){
        numeros.push(i);
    }
    // Por cada elementos del array creo un número random entre 0 y 10
    for(i = 0; i < 10; i++){

        n = Math.floor(Math.random()*11);
        // Relleno la posición actual con el número aleatorio
        numeros.fill(n, i);
    }
    // Imprimo el resultado
    document.getElementById('rango').innerHTML = numeros;
}

function menor8(){
    // Creo un nuevo array con los número menores de 8
    document.getElementById('menor8').innerHTML = numeros.slice().filter(numero => numero < 8);
}

function intercambiar(){

    // Por cada clave en el array numeros
    for(n of numeros.keys()){
        // Compruebo si es impar comparando el módulo de dividir entre 2 a 0
        if(numeros[n] %2 != 0){
            // En caso de ser impar modifico el valor de esa posición
            numeros[n] = "impar";
        }
    }
    // Imprimo el resultado
    document.getElementById('intercambiar').innerHTML = numeros;
}
