


n1 = prompt("Introduzca el primer número: ");
n2 = prompt("Introduzca el segundo número:");

if (n1 - n2){ //Compruebo cual de los dos número que ha introducido el usuario es el más bajo y el más alto
    bajo = n1
    alto = n2
} else {
    bajo = n2
    alto = n1
}

document.write("Los múltiplos de 8 compendidos entre " + bajo + " y " + alto + " son: ");

res = 0;

for(i = 1; res < alto; i++){   //Empiezo a sacar los múltiplos de 8 hasta que el resultado sea mayor que el número más alto que ha introducido el ususario
    res = i * 8;

    if(res >= bajo && res <= alto){ //Si el resultado de la operación se encuentra entre los dos números que ha introducido el usuario se imprime como múltiplo de 8
        document.write("<p>" + res + "</p>")
    }
}
