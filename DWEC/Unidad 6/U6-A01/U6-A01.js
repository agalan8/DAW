
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

    // Creo el elemento tabla
    var table = document.createElement('table');
    // Creo el thead para añadir los títulos de las columnas
    var thead = table.createTHead();
    // Inserta una fila en el thead
    var fila = thead.insertRow();
    // Inserto la primera celda
    fila.insertCell().textContent = 'Nombre del alumno';
    //Inserto una celda por cada módulo
    for(i = 1; i <= numModulos; i++){
        fila.insertCell().textContent = 'Nombre del módulo'
        // Inserto una celda por cada nota de cada módulo
        for(j = 1; j <= numNotas; j++){
            fila.insertCell().textContent = `Nota ${j}`;
        }
    }
    // Creo un tbody en la tabla
    var tbody = table.createTBody();
    // Por cada alumno hago lo siguiente
    alumnos.forEach(function(alumno){
        // Creo una fila en la tabla
        var fila = tbody.insertRow();
        // Añado una celda con el nombre del alumno
        fila.insertCell().textContent = alumno.nombreAlumno;
        // Por cada módulo del alumno
        alumno.modulos.forEach(function(modulo){
            // Añado una celda con el nombre del módulo
            fila.insertCell().textContent = modulo.nombreModulo;
            // Por cada nota del módulo
            modulo.notas.forEach(function (nota){
                // Añado una celda con la nota
                fila.insertCell().textContent = nota;
            })
        })
    })
    // Añado la tabla en el body del documento
    document.body.appendChild(table);
}
