function generar(){
    vector = []
    for(i = 0; i < 10; i++){
        vector.push(Math.floor(Math.random() * 1001));
    }
    document.getElementById('div1').innerHTML = `<h1>Este es el vector generado: </h1> ${vector} `;
    document.getElementById('div2').innerHTML = "";
}

function quitarMinMax(){
    document.getElementById('div2').innerHTML = "<h1>Este es el vector ordenado: </h1>" + vector.sort((a, b) => a - b) +
    "<h1>Este es el vector ordenado sin el valor mínimio ni el máximo: </h1>" + vector.slice(1, vector.length -1);
}
