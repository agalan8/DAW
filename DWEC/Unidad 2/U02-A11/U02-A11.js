
 numero = prompt("Introduce el número de su DNI: ");
 letra = prompt("Introduce la letra de su DNI: ");

 letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

 if(numero < 0 || numero > 99999999){

    document.write("<h1>El número proporcionado no es válido</h1>");

 } else{

    resto = numero % 23;

    if(letra.toLowerCase() == letras[resto].toLowerCase()){

        document.write("<h1>El numero de DNI " + numero + " si corresponde con la letra " + letra + "</h1>");

    } else{

        document.write("<h1>La letra introducida no es correcta</h1>");

    }

 }
