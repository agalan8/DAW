

n = prompt("Introduzca un número: ");

if(n >= 1000){

    document.write("<h1>El número tiene que ser menor de 1000.</h1>");
}

else {

    document.write("<h1>Digitos del número " + n + " :</h1>");

    for(i = 0; i < n.length; i++){

        document.write(n[i] + "<br><br>");
    }
}
