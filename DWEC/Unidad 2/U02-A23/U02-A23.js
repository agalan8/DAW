
res = [];
cont = 0;

for(i = 0; i < 4; i++){ // Este bucle guarda en un array las cadenas que forman la mitad superior del arbol

    aux = "";

    for(j = 0; j < 7; j++){ // Este bucle crea las cadenas con los espacios y * correspondientes a la mitad superior del arbol

        if(j == 3 || (j >= 3 - cont && j <= 3 + cont)){

            aux += "*";
        } else{
            aux += "&nbsp";
        }
    }
    cont++;
    res.push(aux);
}

for(i = 0; i < res.length; i++){  // Este bucle imprime la mitad superior del árbol recorriendo el array de cadenas

    document.write(res[i] + "<br>");
}

for(i = res.length - 2; i >= 0;  i--){ // Este bucle imptime la mitad inferior del árbol recorriendo inversamente el array de cadenas

    document.write(res[i] + "<br>");
}
