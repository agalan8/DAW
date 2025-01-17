document.getElementById('formulario').addEventListener('submit', function(event){

    var nombre = document.getElementById('nombre').value;
    var mensaje = document.getElementById('mensaje').value;
    var opciones_color = document.getElementsByName('color');

    var color;

    for(i = 0; i < opciones_color.length; i++){
        if(opciones_color[i].checked){
            color = opciones_color[i].value;
            break;
        }
    }

    var asignatura = document.getElementById('asignatura').value;
    var opciones_dias = document.getElementsByName('dias');

    var dias = [];

    for(i = 0; i < opciones_dias.length; i++){
        if(opciones_dias[i].checked){
            dias.push(opciones_dias[i].value);
        }
    }

    var dia_preferente = seleccionados[seleccionados.length - 1];

    var profesor;

    switch (asignatura){
        case 'matematicas':
            profesor = 'Manolo';
            break;
        case 'lengua':
            profesor = 'Antonio';
            break;
        case 'informatica':
            profesor = 'Jose';
            break;
        case 'plastica':
            profesor = 'Sara';
            break;
    }

    window.open(`resultado.html?nombre=${nombre}&mensaje=${mensaje}&color=${color}&asignatura=${asignatura}&dias=${dias}&dia_preferente=${dia_preferente}&profesor=${profesor}`);

})



var array_dias = document.querySelectorAll('input[type="checkbox"][name="dias"]');

var seleccionados = [];

array_dias.forEach((checkbox) => {

    checkbox.addEventListener('change', function(){

        if(checkbox.checked){
            seleccionados.push(checkbox.value);
        }
        else if(!checkbox.checked){
            seleccionados = seleccionados.filter(item => item !== checkbox.value);
        }

    });


});
