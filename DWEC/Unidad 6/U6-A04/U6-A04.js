alumnos = [];
numModulos = 3;
numNotas = 3;
numAlumnos = 5;

function anadirAlumno(){
    nombreAlumno = document.getElementById('nombreAlumno').value;
    modulos = [];
    for(i = 1; i <= numModulos; i++){
        nombreModulo = document.getElementById(`modulo${i}`).value;
        notas = [];
        for(j = 1; j <= numNotas; j++){
            nota = document.getElementById(`nota${i}_${j}`).value;
            if(nota < 0 || nota > 10 ){
                return alert("ERROR: La nota tiene que estar entre 0 y 10");
            }
            notas.push(nota);
        }
        modulos.push({nombreModulo: nombreModulo, notas: notas});
    }
    alumnos.push({nombreAlumno: nombreAlumno, modulos: modulos});

    if(alumnos.length == 5){
        imprimirTabla();
    }
    comprobarNumAlumnos();
}

function comprobarNumAlumnos(){

    if(alumnos.length == numAlumnos){
       document.querySelectorAll("#datos input, button").forEach(function(campo){
        campo.disabled = true;
       });
    }
}

function imprimirTabla(){

    var table = document.createElement('table');
    table.createTHead();

    var fila = table.insertRow();

    fila.insertCell().textContent = 'Nombre del alumno';

    for(i = 1; i <= numModulos; i++){
        fila.insertCell().textContent = 'Nombre del módulo'

        for(j = 1; j <= numNotas; j++){
            fila.insertCell().textContent = `Nota ${j}`;
        }
    }

    table.createTBody();

    alumnos.forEach(function(alumno){

        var fila = table.insertRow();
        fila.insertCell().textContent = alumno.nombreAlumno;

        alumno.modulos.forEach(function(modulo){
            fila.insertCell().textContent = modulo.nombreModulo;

            modulo.notas.forEach(function (nota){
                fila.insertCell().textContent = nota;
            })
        })
    })
    document.body.appendChild(table);
}
