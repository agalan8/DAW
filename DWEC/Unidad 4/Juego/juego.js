
const numColumnas = 10;
const numFilas = 10;
const numBarcos = 7;
matrizTablero = [];
orientaciones = ['vertical', 'horizontal'];

class Barco{

    constructor(nombre, longitud){
        this.nombre = nombre;
        this.longitud = longitud;
        this.contador = longitud;
    }

}

Barco.prototype.decrContador = function (){
    this.contador--;
    if(this.contador == 0){
        document.getElementById(`${this.nombre}`).innerHTML = `<img src="img/${this.nombre}-hundido.png">`;
    }
}

class Seleccion{

    constructor(posicion, posicionX, posicionY, orientacion, direccion = '+'){
        this.posicion = posicion;
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.orientacion = orientacion;
        this.direccion = direccion;
    }
}

function generarTablero(){

    tablero = "";

    for(i = 1; i <= numColumnas; i++){
        for(j = 1; j <= numFilas; j++){
            tablero += `<div style="" id="${i}-${j}" onclick="disparar(this);"></div>`;
        }
    }
    document.getElementById('tablero').innerHTML = tablero;
}

function iniciarJuego(){
    disparos = 60;
    actualizarDisparos();
    contadorHundidos = numBarcos;
    document.getElementById('iniciar').disabled = true;
    generarTablero();
    colocarBarcos();
}

function perdedor(){
    document.getElementById('tablero').innerHTML = `<img src="img/game-over.jpeg" id="portada">`;
}

function ganador(){
    document.getElementById('tablero').innerHTML = `<img src="img/you-win.jpeg" id="portada">`;
}

function reiniciar(){
    location.reload();
}

function actualizarDisparos(){
    document.getElementById('disparos').innerHTML = `<h1>DISPAROS: ${disparos}</h1>`;
}

function decrDisparos(){
    disparos--;
}

function colocarBarcos(){

    portaaviones = new Barco('Portaaviones', 4);
    submarino1 = new Barco('Submarino1', 3);
    submarino2 = new Barco('Submarino2', 3);
    acorazado = new Barco('Acorazado', 3);
    destructor1 = new Barco('Destructor1', 2);
    destructor2 = new Barco('Destructor2', 2);
    destructor3 = new Barco('Destructor3', 2);

    barcos = [portaaviones, submarino1, submarino2, acorazado, destructor1, destructor2, destructor3];

    barcos.forEach(function (barco) {

        seleccion = null;

        while(seleccion == null){
            seleccion = posicionAzar(barco.longitud);
        }

        if(seleccion.orientacion == 'horizontal'){
            if(seleccion.direccion == '+'){
                posicionY = seleccion.posicionY;
                for(i = 1; i <= barco.longitud; i++){
                    document.getElementById(`${seleccion.posicionX}-${posicionY}`).innerHTML = barco.nombre;
                    posicionY++;
                }
            } else {
                posicionY = seleccion.posicionY;
                for(i = 1; i <= barco.longitud; i++){
                    document.getElementById(`${seleccion.posicionX}-${posicionY}`).innerHTML = barco.nombre;
                    posicionY--;
                }
            }
        }
        if(seleccion.orientacion == 'vertical'){
            if(seleccion.direccion == '+'){

                posicionX = seleccion.posicionX;
                for(i = 1; i <= barco.longitud; i++){
                    document.getElementById(`${posicionX}-${seleccion.posicionY}`).innerHTML = barco.nombre;
                    posicionX++;
                }
            } else{
                posicionX = seleccion.posicionX;
                for(i = 1; i <= barco.longitud; i++){
                    document.getElementById(`${posicionX}-${seleccion.posicionY}`).innerHTML = barco.nombre;
                    posicionX--;
                }

            }
        }
    });
}

function posicionAzar(longitud){

    res = true;
    posicionX = Math.floor(Math.random() * 10) + 1;
    posicionY = Math.floor(Math.random() * 10) + 1;
    posicion = `${posicionX}-${posicionY}`;
    orientacion = orientaciones[Math.floor(Math.random() * orientaciones.length)];
    direccion = '+';
    celda = document.getElementById(`${posicion}`);

    if(celda.innerHTML != ''){
        res = false;
    }

    if(orientacion == 'horizontal'){
        if(posicionY + (longitud - 1) > numColumnas){
            res = false;
        } else{
            auxY = posicionY;
            for(let i = 1; i <= longitud; i++){
                if(document.getElementById(`${posicionX}-${auxY}`).innerHTML != ''){
                    res = false;
                }
                auxY++;
            }
        }
        if(res == false){
            res = true;
            if(posicionY - (longitud - 1) < 1){
                res = false;
            } else{
                auxY = posicionY;
                for(let i = 1; i <= longitud; i++){
                    if(document.getElementById(`${posicionX}-${auxY}`).innerHTML != ''){
                        res = false;
                    }
                    auxY--;
                }
                if(res == true){
                    direccion = '-';
                }
            }
        }
    }

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

    if(res == true){
        let seleccion = new Seleccion(posicion, posicionX, posicionY, orientacion, direccion);
        return seleccion;
    }
    return null;
}


function arrayTablero(){

for (i = 1; i <= 10; i++) {
    matrizTablero[i] = [];
    for (j = 1; j <= 10; j++) {
      matrizTablero[i][j] = document.getElementById(`${i}-${j}`).innerHTML;
    }
  }
}

function disparar(celda){

    estado = celda.innerHTML;
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

            // Si el contador del barco tocado es 0
            if(barco.contador === 0){

                // Decremento el número de hundidos
                contadorHundidos--;
                // Muestro un mensaje del barco que ha sido hundido
                alert(` ¡¡ ${barco.nombre} ha sido hundido !!`)
            }
        }

    }

    decrDisparos();
    actualizarDisparos();

    if(contadorHundidos == 0){
        ganador();
    } else if(disparos == 0){
        perdedor();
    }
}
