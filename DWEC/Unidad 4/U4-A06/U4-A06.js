
alumnos = [];
numModulos = 3;
numNotas = 3;
numAlumnos = 5;

function anadirAlumno(){
    // Guardo el nombre del alumno
    nombreAlumno = document.getElementById('nombreAlumno').value;
    // Creo un array de módulos vacío
    modulos = [];
    // Por cada módulo hago lo siguiente
    for(i = 1; i <= numModulos; i++){
        // Guardo el nombre del módulo
        nombreModulo = document.getElementById(`modulo${i}`).value;
        // Creo un array de notas vacío
        notas = [];
        // Por cada módulo recojo sus notas
        for(j = 1; j <= numNotas; j++){
            nota = document.getElementById(`nota${i}_${j}`).value;
            // Si la nota no esta entre 0 y 10 devuelve un mensaje de error
            if(nota < 0 || nota > 10 ){
                return alert("ERROR: La nota tiene que estar entre 0 y 10");
            }
            // Guardo las notas en un array para cada módulo
            notas.push(nota);
        }
        // Ahora que ya tengo el nombre del módulo y su array de notas los guardo en el array de módulos
        modulos.push({nombreModulo: nombreModulo, notas: notas});
    }
    /* Una vez tengo el nombre del alumno y el array de módulos con sus
    correspondientes notas lo guardo como un objeto en el array */
    alumnos.push({nombreAlumno: nombreAlumno, modulos: modulos});
    // Imprimo la tabla actualizada
    imprimirTabla();
    // Cada vez que introduzco un alumnos en el array compruebo cuantos hay
    comprobarNumAlumnos();
}

function comprobarNumAlumnos(){

    // Cuando el usuario introduce 5 alumnos desactivo inputs y botones
    if(alumnos.length == numAlumnos){
        // Cambio la propiedad disabled a true de los input y button dentro del contenedor con id 'datos'
       document.querySelectorAll("#datos input, button").forEach(function(campo){
        // Paso a true el valor de la propiedad disabled
        campo.disabled = true;
       });
       // Una vez que compruebo si tengo los 5 alumnos y desactivo el formulario imprimo la tabla con los datos
    }
}

function imprimirTabla(){

    tabla = `<table border= "2" cellpadding= "10">
                <thead>
                    <tr>
                        <th>Nombre del alumno</th>`;

    for(i = 1; i <= numModulos; i++){
        // Por cada módulo añado una celda con esta cabecera
        tabla += `<th>Nombre del módulo</th>`;

        for(j = 1; j <= numNotas; j++){
        // Pora cada nota añado una cabecera
        tabla += `<th>Nota ${j}</th>`;
        }
    }

    tabla += `</tr>
                  </thead>
                <tbody>
                    <tr>`;

    alumnos.forEach(function(alumno){
        // Por cada alumno añado una celda con su nombre
        tabla += `<td>${alumno.nombreAlumno}</td>`;

        alumno.modulos.forEach(function(modulo){
            // Por cada módulo del alumno añado una celda con el nombre del módulo
            tabla += `<td>${modulo.nombreModulo}</td>`;

            modulo.notas.forEach(function (nota){
                // Por cada nota del módulo del alumno añado una celda con su nota
                tabla += `<td>${nota}</td>`;
            })
        })
        tabla += `</tr>`;
    })

    tabla += `</tbody></table>`;

    // Imprimo la tabla en el div
    document.getElementById('tabla').innerHTML = tabla;
}
