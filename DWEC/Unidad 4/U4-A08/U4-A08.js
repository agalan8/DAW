
function crear(){
    // Creo un array vacío
    numeros = [];
    // Añado 5 números al array
    for(i = 0; i < 5; i++){
        var rango_superior = -50;
        var rango_inferior = 50;
        // Añado un número aleatorio entre -50 y 50 al final del array
        numeros.push(Math.floor(Math.random()*(rango_superior-(rango_inferior-1))) + rango_inferior);
    }
    // Imprimo el resultado
    document.getElementById('numeros').innerHTML = numeros;
}

function positivos(){
    // Compruebo si todos los numeros del array son mayor o igual a 0
    if(numeros.every(numero => numero >= 0)){
        document.getElementById('resultadoPositivos').innerHTML = "<p>SI son enteros positivos</p>"
    } else {
        document.getElementById('resultadoPositivos').innerHTML = "<p>NO son enteros positivos</p>"
    }
}

function triple(){
    // Multiplico por 3 cada elemento del array
    nuevoArray = numeros.slice().map(numero => numero * 3);
    document.getElementById('resultadoTriple').innerHTML = nuevoArray;
}

function multiplicar(){
    // Reduzco el array al resultado de multiplicar cada posición
    document.getElementById('resultadoMultiplicar').innerHTML = nuevoArray.reduce((total, num) => total * num, 1);
}
