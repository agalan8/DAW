
Array.prototype.quitarMinMax = function(){
    return this.sort((a, b) => a - b).slice(1, vector.length -1);
}

function generar(){
    vector = []
    for(i = 0; i < 10; i++){
        vector.push(Math.floor(Math.random() * 1001));
    }
    document.getElementById('div1').innerHTML = `<h1>Este es el vector generado: </h1> ${vector} `;
    document.getElementById('div2').innerHTML = "";
}

function quitar(){
    document.getElementById('div2').innerHTML = "<h1>Este es el vector ordenado y sin el número mínimo ni el máximo: </h1>" + vector.quitarMinMax();
}
