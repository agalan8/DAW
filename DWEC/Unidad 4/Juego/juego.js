

const numColumnas = 10;
const numFilas = 10;
const numBarcos = 9;

matrizTablero = [];

class Barco{

    constructor(nombre, longitud){
        this.nombre = nombre;
        this.longitud = longitud;
        this.contador = longitud;
    }
}

Barco.prototype.decrContador = function (){
    this.contador--;
}

function generarTablero(){

    tablero = "";

    for(i = 1; i <= numColumnas; i++){
        for(j = 1; j <= numFilas; j++){

            tablero += `<div id="${i}-${j}" onclick="disparar(this);"></div>`;
        }
    }

    document.getElementById('tablero').innerHTML = tablero;
}

function colocarBarcos(){

    portaviones = new Barco('Portaviones', 4);
    submarino1 = new Barco('Submarino', 3);
    submarino2 = new Barco('Submarino', 3);
    acorazado = new Barco('Acorazado', 3);
    destructor1 = new Barco('Desctructor', 2);
    destructor2 = new Barco('Desctructor', 2);
    destructor3 = new Barco('Desctructor', 2);
    fragata1 = new Barco('Fragata', 1);
    fragata2 = new Barco('Fragata', 1);

    for(i = 1; i <= numBarcos; i++){




    }
}

function posicionAzar(){

    posicionX = Math.floor(Math.random() * 10) + 1;
    posicionY = Math.floor(Math.random() * 10) + 1;

    return `${posicionX}-${posicionY}`;
}

function comprobarPosicion(posicion){

    celda = document.getElementById(`${posicion}`);

    if(celda.innerHTML != ''){
        return false;
    }

    return true;
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
        alert('! AGUA ¡')
        document.getElementById(`${id}`).innerHTML = "~";
        arrayTablero();
    }
}

console.log(matrizTablero);

generarTablero();

arrayTablero();
