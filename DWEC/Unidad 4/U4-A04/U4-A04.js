
function crearArray(){

    numImpares = [];
    // Voy desde el 1 hasta el 21 e introduzco en el array los numeros impares
    for(let i = 1; i <= 21; i++){
        if(i % 2 != 0){
            numImpares.push(i);
        }
    }

    document.getElementById('numeros').innerHTML = numImpares;
}

function sumatorio(){
   // Usando reduce reduzco el array al resultado de la función (sumatorio)
   document.getElementById('sumatorio').innerHTML = numImpares.reduce((total, num) => total + num, 0);
}

function inverso(){
    // Hago un sort inverso al slice para no modificar el orden del array original
    document.getElementById('inverso').innerHTML = numImpares.slice().sort(function(a,b) {return b-a});
}

function buscar(){

    valor = parseInt(document.getElementById('valor').value);
    // indexOf devuelve la posición del valor que entra como parámetro si existe en el array o -1 si no lo encuentra
    if(numImpares.indexOf(valor) != -1){
        posicion = numImpares.indexOf(valor);
        document.getElementById('res').innerHTML = `<p>Se encuentra en la posición ${posicion}</p>`;
        numImpares.splice(posicion, 1);
        document.getElementById('borrar').innerHTML = numImpares;
    } else{
        document.getElementById('res').innerHTML = `<p>Ese valor no se encuentra en el array</p>`;
    }
}

function ordenar(){
    // Hago un sort normal al slice para no modificar el array original
    ascendente = numImpares.slice().sort(function(a,b) {return a-b});
    document.getElementById('ascendente').innerHTML = `<p>Ascendente: ${ascendente}`;
    // Hago un sort inverso al slice para no modificar el array original
    descendente = numImpares.slice().sort(function(a,b) {return b-a});
    document.getElementById('descendente').innerHTML = `<p>Descendente: ${descendente}`;
}
