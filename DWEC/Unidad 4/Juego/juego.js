
const numColumnas = 10;
const numFilas = 10;
const numBarcos = 7;
const orientaciones = ['vertical', 'horizontal'];
arrayTablero = [];

// Clase que representa a un Barco
class Barco{

    constructor(nombre, longitud){
        this.nombre = nombre;
        this.longitud = longitud;
        this.contador = longitud;
    }
}

/*
Función de la clase Barco que decrementa el contador si ha sido tocado
y cambia la imagen del barco.
*/
Barco.prototype.decrContador = function (){
    // Resto 1 al contador
    this.contador--;
    // Si el contador es 0
    if(this.contador == 0){
        // Cambio la imagen del barco
        document.getElementById(`${this.nombre}`).innerHTML = `<img src="img/${this.nombre}-hundido.png">`;
    }
}

// Clase que representa la información de la posición que se ha elegido para colocar el barco
class Seleccion{

    constructor(posicion, posicionX, posicionY, orientacion, direccion = '+'){
        this.posicion = posicion;
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.orientacion = orientacion;
        this.direccion = direccion;
    }
}

// Función que reestablece algunas variables es inicia el juego
function iniciarJuego(){
    // Reinicio los disparos del jugador
    disparos = 60;
    // Actualizo la información de los disparos de la pantalla
    actualizarDisparos();
    // Desactivo el botón que inicia el juego
    document.getElementById('iniciar').disabled = true;
    // Llamo a la función que genera el tablero
    generarTablero();
    // Llamo a la función que coloca los barcos en el tablero
    colocarBarcos();
}

// Función que genera el tablero y lo imprime por pantalla
function generarTablero(){

    tablero = "";

    // Voy añadiendo al tablero contenedores div cuya id representa su posición en el tablero
    for(i = 1; i <= numColumnas; i++){
        for(j = 1; j <= numFilas; j++){
            // Al hacer click en estos div llaman a la función disparar
            tablero += `<div id="${i}-${j}" onclick="disparar(this);"></div>`;
        }
    }
    // Imprimo el tablero
    document.getElementById('tablero').innerHTML = tablero;
}

// Función que coloca los barcos en el tablero
function colocarBarcos(){

    // Creo instancias de la clase Barcos para cada barcos que se va a colocar
    portaaviones = new Barco('Portaaviones', 4);
    submarino1 = new Barco('Submarino1', 3);
    submarino2 = new Barco('Submarino2', 3);
    acorazado = new Barco('Acorazado', 3);
    destructor1 = new Barco('Destructor1', 2);
    destructor2 = new Barco('Destructor2', 2);
    destructor3 = new Barco('Destructor3', 2);

    // Creo un array de objetos que almacena todos los barcos
    barcos = [portaaviones, submarino1, submarino2, acorazado, destructor1, destructor2, destructor3];

    // Por cada barco hago lo siguiente
    barcos.forEach(function (barco) {

        // En principio la posicion seleccionada es null
        seleccion = null;

        /*
        Se llama a la función que genera una posición válida has hasta que la seleccion de la posición
        sea distinta a null
        */
        while(seleccion == null){
            // Me guardo la posición válida
            seleccion = posicionAzar(barco.longitud);
        }

        // Compruebo si hay que imprimir el barco horizontalmente
        if(seleccion.orientacion == 'horizontal'){
            //Compruebo la direccion horizontal, en este caso hacia la derecha
            if(seleccion.direccion == '+'){
                // Al colocar el barco horizontalmente la posición que varia es la Y (numero de la columna)
                // Me guardo la posicionY en una auxiliar para no modificar la original
                posicionY = seleccion.posicionY;
                // Imprimo el nombre del barco en tantas celdas como la longitud del barco
                for(i = 1; i <= barco.longitud; i++){
                    // Imprimo el nombre del barco en la celda correspondiente
                    document.getElementById(`${seleccion.posicionX}-${posicionY}`).innerHTML = barco.nombre;
                    // Sumo 1 a la posición de la columna
                    posicionY++;
                }
            } else {
                // En caso de que la direccion no sea '+' (hacia la derecha) imprimo el barco hacia la izquierda
                posicionY = seleccion.posicionY;
                for(i = 1; i <= barco.longitud; i++){
                    document.getElementById(`${seleccion.posicionX}-${posicionY}`).innerHTML = barco.nombre;
                    posicionY--;
                }
            }
        }
        // Compruebo si hayu que imprimir el barco horizontalmente
        if(seleccion.orientacion == 'vertical'){
            // Compruebo la direccion vertical, en este caso hacia abajo
            if(seleccion.direccion == '+'){
                // Al colocar el barco verticalmente la posición que varia es la X (numero de la fila)
                // Me guardo la posicionX en una auxiliar para no modificar la original
                posicionX = seleccion.posicionX;
                // Imprimo de igual manera que anteriormente
                for(i = 1; i <= barco.longitud; i++){
                    document.getElementById(`${posicionX}-${seleccion.posicionY}`).innerHTML = barco.nombre;
                    posicionX++;
                }
            } else{
                // Si la direccion no es '+' imprimo el barco hacia arriba
                posicionX = seleccion.posicionX;
                for(i = 1; i <= barco.longitud; i++){
                    document.getElementById(`${posicionX}-${seleccion.posicionY}`).innerHTML = barco.nombre;
                    posicionX--;
                }

            }
        }
    });
}

/*
Funcion que devuelve null en caso de que la posición elegida no sea válida o un objeto Seleccion en caso de
encontrar una posicion válida con la información de dicha posición. A esta función le llega la longitud del barco.
*/
function posicionAzar(longitud){

    // En principio la posición va a ser válida
    res = true;
    // Obtengo una posicionX aleatoria entre 1 y 10 inclusive
    posicionX = Math.floor(Math.random() * 10) + 1;
    // Obtengo una posicionY aleatoria entre 1 y 10 inclusive
    posicionY = Math.floor(Math.random() * 10) + 1;
    // Guardo la posición con el formato de las ids de las celdas
    posicion = `${posicionX}-${posicionY}`;
    // Obtengo aleatoriamente la orientación del array
    orientacion = orientaciones[Math.floor(Math.random() * orientaciones.length)];
    // En principio la dirección será hacia la izquierda si es horizontal o hacia abajo si es vertical
    direccion = '+';
    // Obtengo la celda de la posición elegida
    celda = document.getElementById(`${posicion}`);

    // En caso de que la celda de la posición elegida no este vacía, la posición no es válida
    if(celda.innerHTML != ''){
        res = false;
    }

    // Si la orientación elegida es horizontal hago lo siguiente
    if(orientacion == 'horizontal'){
        // Compruebo si la posicionY (columna) + la longitud del barco excede el numero de columnas que tiene mi tablero
        if(posicionY + (longitud - 1) > numColumnas){
            // Si lo excede la posición no es válida
            res = false;
        } else{
            // En caso de que no exceda el tablero comprueba si en la exntesión de la longitu del barco hay ya algún barco en esas celdas
            auxY = posicionY;
            // Compruebo cada celda que ocuparía el barco
            for(let i = 1; i <= longitud; i++){
                // En caso de encontrar alguna celda que no este vacía, la posición no es válida
                if(document.getElementById(`${posicionX}-${auxY}`).innerHTML != ''){
                    res = false;
                }
                auxY++;
            }
        }
        // Si no ha podido colocar el barco horizontalmente hacia la derecha, lo intentará hacia la izquierda
        if(res == false){
            // Presupongo que ahora la posición será valida
            res = true;
            // Compruebo si la longitud del barco excederia el tablero por la izquierda
            if(posicionY - (longitud - 1) < 1){
                // Encaso de excederlo la posición no es válida
                res = false;
            } else{
                // Si no lo excede, compruebo si hay algún barco ya colocado
                auxY = posicionY;
                // Compruebo cada celda hacia la izquierda en la extensión de la longitud del barco
                for(let i = 1; i <= longitud; i++){
                    // Si encuentro alguna celda que no esté vacía, la posición no es válida
                    if(document.getElementById(`${posicionX}-${auxY}`).innerHTML != ''){
                        res = false;
                    }
                    auxY--;
                }
                // En caso de que esté todo correcto cambio la dirección del barco hacia la izquierda
                if(res == true){
                    direccion = '-';
                }
            }
        }
    }

    // Compruebo exactamente lo mismo que anteriormente pero verticalmente
    if(orientacion == 'vertical'){
        if(posicionX + (longitud - 1) > numFilas){
            res = false;
        } else{
            auxX = posicionX;
            for(let i = 1; i <= longitud; i++){
                if(document.getElementById(`${auxX}-${posicionY}`).innerHTML != ''){
                    res = false;
                }
                auxX++;
            }
        }
        if(res == false){
            res = true;
            if(posicionX - (longitud - 1) < 1){
                res = false;
            } else{
                auxX = posicionX;
                for(let i = 1; i <= longitud; i++){
                    if(document.getElementById(`${auxX}-${posicionY}`).innerHTML != ''){
                        res = false;
                    }
                    auxX--;
                }
                if(res == true){
                    direccion = '-';
                }
            }
        }
    }

    /*
    En caso de que tras estas comprobaciones la posición siga siendo válida
    esta función devolverá un objeto Seleccion con toda la información de la posición válida seleccionada.
    */
    if(res == true){
        let seleccion = new Seleccion(posicion, posicionX, posicionY, orientacion, direccion);
        return seleccion;
    }
    /*
    En caso de que la posición no sea válida, devolverá null.
    */
   return null;
}

// Función que recoge el disparo del jugador, a esta función le llega como parámetro el div desde el que se la llama
function disparar(celda){

    // Guardo el contenido de dicho div
    estado = celda.innerHTML;
    // Guardo el id de dicho div
    id = celda.id;

    if(estado == ''){
        // Si en esa posición no hay ningun barco muestro agua
        document.getElementById(`${id}`).innerHTML = `<img style="width: 80px; height: 80px; " src="img/agua.jpg" alt="agua">`;
        div = document.getElementById(`${id}`);
        // Desactivo esa casilla
        div.style.pointerEvents = "none";
    } else{

        // switch(estado) {
        //     case portaaviones.nombre:
        //         portaaviones.decrContador();
        //         break;
        //     case submarino1.nombre:
        //         submarino1.decrContador();
        //         break;
        //     case submarino2.nombre:
        //         submarino2.decrContador();
        //         break;
        //     case acorazado.nombre:
        //         acorazado.decrContador();
        //         break;
        //     case destructor1.nombre:
        //         destructor1.decrContador();
        //         break;
        //     case destructor2.nombre:
        //         destructor2.decrContador();
        //         break;
        //     case destructor3.nombre:
        //         destructor3.decrContador();
        //         break;
        // }

        // Busco el barco en mi array barcos con el mismo nombre que la casilla
        let barco = barcos.find(b => b.nombre === estado);
        // Compruebo si se ha encontrado el barco en el array
        if(barco){

            // Decremento el contador del barco
            barco.decrContador();

            // Imprimo una imagen de tocado en la celda
            document.getElementById(`${id}`).innerHTML = `<img style="width: 80px; height: 80px; " src="img/tocado.png" alt="tocado">`;
            div = document.getElementById(`${id}`);

            // Desactivo la celda
            div.style.pointerEvents = "none";

            // Compruebo si el barco ha sido hundido
            if(barco.contador === 0){
                // Decremento el número de hundidos
                // Muestro un mensaje del barco que ha sido hundido
                alert(` ¡¡ ${barco.nombre} ha sido hundido !!`)
            }
        }
    }
    // Decremento el número de disparos que le quedan al jugador
    decrDisparos();
    // Actualizo en pantalla el número de disparos que le quedan al jugador
    actualizarDisparos();
    // Verifico si el juego ha terminado tras este disparo
    verificarFinJuego();
}

// Función que decrementa el número de disparos
function decrDisparos(){
    disparos--;
}

// Función que actualiza el contenido del div que contiene el número de disparos que le quedan al jugador.
function actualizarDisparos(){
    document.getElementById('disparos').innerHTML = `<h1>DISPAROS: ${disparos}</h1>`;
}

// Función que comprueba si el juego ha terminado
function verificarFinJuego(){

    // Compruebo si en alguna celda queda algun nombre de un barco
    // Recorro cada fila del tablero
    let barcosHundidos = generarArrayTablero().every(fila =>{
        // Recorro todas las celdas de la fila
        return fila.every(celda => {
            // Si la celda no cientene el nombre de ningún barco devuelve true
            return !barcos.some(barco => celda === barco.nombre)
        });
    })

    // Si barcosHundidos es false, quiere decir que todos los barcos han sido hundidos
    if(barcosHundidos){
        // Gana la partida
        ganador();
        // Si no gana la partida y te has quedado sin disparos
    } else if(disparos == 0){
        // Pierde la partida
        perdedor();
    }
}

// Función que devuelve el tablero en forma de array
function generarArrayTablero(){

    // Creo un array matriz de 10 fila y 10 columnas
    for (i = 1; i <= 10; i++) {
        arrayTablero[i] = [];
        for (j = 1; j <= 10; j++) {
        // En cada posición del array guardo el valor de la celda que le corresponde en el tablero
        arrayTablero[i][j] = document.getElementById(`${i}-${j}`).innerHTML;
        }
    }
    return arrayTablero;
}

// Función que cambia el tablero por una imagen que indica que el jugador ha ganado
function ganador(){
    document.getElementById('tablero').innerHTML = `<img src="img/you-win.jpeg" id="portada">`;
}

// Función que cambia el tablero por una imagen que indica que el juagdor ha perdido
function perdedor(){
    document.getElementById('tablero').innerHTML = `<img src="img/game-over.jpeg" id="portada">`;
}

// Función que es llamada desde el botón reiniciar que recarga la página para reiniciar el juego
function reiniciar(){
    location.reload();
}
