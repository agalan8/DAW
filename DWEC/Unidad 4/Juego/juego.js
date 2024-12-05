
const numColumnas = 10;
const numFilas = 10;
const numBarcos = 9;
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
            tablero += `<div style="font-size: 15px;" id="${i}-${j}" onclick="disparar(this);"></div>`;
        }
    }
    document.getElementById('tablero').innerHTML = tablero;
}

function colocarBarcos(){

    generarTablero();

    portaviones = new Barco('Portaviones', 4);
    submarino1 = new Barco('Submarino1', 3);
    submarino2 = new Barco('Submarino2', 3);
    acorazado = new Barco('Acorazado', 3);
    destructor1 = new Barco('Desctructor1', 2);
    destructor2 = new Barco('Desctructor2', 2);
    destructor3 = new Barco('Desctructor3', 2);
    fragata1 = new Barco('Fragata1', 1);
    fragata2 = new Barco('Fragata2', 1);

    barcos = [portaviones, submarino1, submarino2, acorazado, destructor1, destructor2, destructor3, fragata1, fragata2];

    barcos.forEach(function (barco) {

        seleccion = posicionAzar(barco.longitud);

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
        }
    });
}

function posicionAzar(barco){

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
        if(posicionY + (barco.longitud - 1) > numColumnas){
            res = false;
        } else{
            auxY = posicionY;
            for(let i = 1; i <= barco.longitud; i++){
                if(document.getElementById(`${posicionX}-${auxY}`).innerHTML != ''){
                    res = false;
                }
                auxY++;
            }
        }

        if(res == false){
            res == true;
            if(posicionY - (barco.longitud - 1) < 1){
                res = false;
            } else{
                auxY = posicionY;
                for(let i = 1; i <= barco.longitud; i++){
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
        if(posicionX + (barco.longitud - 1) > numFilas){
            res = false;
        } else{
            auxX = posicionX;
            for(let i = 1; i <= barco.longitud; i++){
                if(document.getElementById(`${auxX}-${posicionY}`).innerHTML != ''){
                    res = false;
                }
                auxX++;
            }
        }
        if(res == false){
            if(posicionX - (barco.longitud - 1) < 1){
                res = false;
            } else{
                auxX = posicionX;
                for(let i = 1; i <= barco.longitud; i++){
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

    posicionAzar(barco);

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
