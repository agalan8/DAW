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
