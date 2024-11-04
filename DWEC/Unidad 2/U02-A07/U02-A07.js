

nota = prompt("Introduzca su nota: ");

if (nota < 5){
    document.write("<h1>Suspenso</h1>");
} else if(nota >= 5 && nota < 7 ){
    document.write("<h1>Aprobado</h1>")
} else if(nota >= 7 && nota < 9){
    document.write("<h1>Notable</h1>")
} else if(nota >= 9 && nota <=10){
    document.write("<h1>Sobresaliente</h1>")
} else {
    document.write("<h1>Nota no válida</h1>")
}
