
n = prompt("Introduce un número: ");

op1 = 0;

op2 = 1;

for(i = 0; i <= n; i++){

    res = res + nAnterior;

    document.write(res + "<br>");

    nAnterior = res;
}
