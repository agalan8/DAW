
array = [];
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
            notas.push(document.getElementById(`nota${i}_${j}`).value);
        }

        modulos.push({nombreModulo: nombreModulo, notas: notas});
    }

    array.push({nombreAlumno: nombreAlumno, modulos: modulos});

    comprobarNumAlumnos();
    console.log(array);
}

function comprobarNumAlumnos(){

    if(array.length == numAlumnos){

       document.querySelectorAll("#datos input", "#datos button").forEach(function(campo){

        campo.disabled = true;

       });

    }
}

function error(){
    alert("Mierda pa ti");
}

// array = [{nombre: alejandro, modulos: [{nombre: modulo, notas: [nota1, nota2]}, {nombre: modulo, notas: [nota1, nota2]}]},
//         {nombre: juanmi, modulos: [{nombre: modulo, notas: [nota1, nota2]}, {nombre: modulo, notas: [nota1, nota2]}]},
// ];
