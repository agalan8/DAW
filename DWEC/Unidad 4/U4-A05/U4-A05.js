
palabras = [];

function anadir(){

    // Cada palabra que introduce el usuario se añade al final del array
    palabras.push(document.getElementById('palabras').value);

    // Imprimo el array actualizado para que el usuario vea las palabras insertadas
    document.getElementById('array').innerHTML = `Array actual: ${palabras}`;
}

function enviar(){

    // A cada palabra del array le aplico la siguiente función
    palabrasInvertidas = palabras.map(function(palabra) {
        /* slice para no modificar el array original, split para separar las letras de cada palabra
        reverse para ordenar las letras al reves y join para volver a formar la palabra pero con las letras del reves */
        return palabra.slice().split('').reverse().join('')
    });

    // Obtengo la primera palabra del array
    primeraPalabra = palabras[0];

    // Obtengo la última palabra del array
    ultimaPalabra = palabras[palabras.length - 1];

    // Obtengo el número de palabras del array
    numPalabras = palabras.length;

    // Ordeno el array de la a a la z
    palabrasAZ = palabras.slice().sort();

    // Ordeno el array de la z a la a
    palabrasZA = palabras.slice().sort(function (a,b) {
        if(a < b){
            return 1;
        } else if (a > b){
            return -1;
        } else {
            return 0;
        }
    })

    // Creo una nueva ventana
    nuevaVentana = window.open();
    //Imprimo en la nueva ventana las variables creadas anteriormente
    nuevaVentana.document.write(`<br><p>Todas las palabras: ${palabras} <br><br> Todas las palabras colocadas al revés: ${palabrasInvertidas} <br><br>
        La primera palabra ingresada por el usuario: ${primeraPalabra} <br><br> La última palabra ingresada por el usuario: ${ultimaPalabra} <br><br>
        El número de palabras presentes en el array: ${numPalabras} <br><br> Las palabras ordenadas de la 'a' a la 'z': ${palabrasAZ} <br><br>
        Las palabras ordenadas de la 'z' a la 'a': ${palabrasZA} `);
}
