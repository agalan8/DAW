
 n = prompt("Introduzca un número: ");

 res = 1;

 for(i = 2 ; i <= n; i++){


    res = res * i;
 }

 document.write("<h1>El factorial de " + n + " es: " + res + "</h1>");
