// document.addEventListener('mousedown', function(event){

//     if(event.button == 0){
//         alert("Has pulsado el click izquierdo");
//     } else if(event.button == 1){
//         alert("Has pulsado la rueda del ratón");
//     } else if(event.button == 2){
//         alert("Has pulsado el click derecho");
//     }
// });

function click(event){
    var evento = event;
    switch(evento.button){
        case 0:
            alert("Has pulsado el click izquierdo.");
            break;
        case 1:
            alert("Has pulsado la rueda del ratón");
            break;
        case 2:
            alert("Has pulsado el click derecho.")
            break;
    }
}

window.onload = function(){
    document.getElementById('pagina').onmousedown = click;
}
