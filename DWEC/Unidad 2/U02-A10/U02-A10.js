

n = prompt("Introduzca un número: ");

document.write("<h1> Tabla de multiplicar del " + n + " :</h1>");

for (i = 0; i <= 10; i++){

    document.write(i + " * " + n + " = " + (i*n) + "<br> <br>");
}
