
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
    imprimirTabla();
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
    var thead = document.createElement('thead');
    table.appendChild(thead);

    var tr = document.createElement('tr');
    thead.appendChild(tr);

    var th = document.createElement('th');
    tr.appendChild(th);
    var texto = document.createTextNode('Nombre del alumno');
    th.appendChild(texto);


    for(i = 1; i <= numModulos; i++){
        var th = document.createElement('th');
        tr.appendChild(th);

        var texto = document.createTextNode('Nombre del módulo');
        th.appendChild(texto);

        for(j = 1; j <= numNotas; j++){
            var th = document.createElement('th');
            tr.appendChild(th);
            var texto = document.createTextNode(`Nota ${j}`);
            th.appendChild(texto);
        }
    }

    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    alumnos.forEach(function(alumno){
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        var td = document.createElement('td');
        tr.appendChild(td);
        var texto = document.createTextNode(alumno.nombreAlumno);
        td.appendChild(texto);


        alumno.modulos.forEach(function(modulo){
            var td = document.createElement('td');
            tr.appendChild(td);
            var texto = document.createTextNode(modulo.nombreModulo);
            td.appendChild(texto);

            modulo.notas.forEach(function (nota){
                var td = document.createElement('td');
                tr.appendChild(td);
                var texto = document.createTextNode(nota);
                td.appendChild(texto);
            })
        })
    })

    document.body.appendChild(table);
}
