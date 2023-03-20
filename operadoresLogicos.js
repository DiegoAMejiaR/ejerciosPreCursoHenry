function menorYMayorPar(numero) {
    if (numero > 5 && numero < 10 && numero % 2 === 0) console.log(true);
    else console.log(false);
}
menorYMayorPar(2);
menorYMayorPar(7);
menorYMayorPar(8);

function operadorOr(palabra) {
    if (palabra === "Henry" || palabra.length < 2) console.log(true);
    else console.log(false);
}
operadorOr("Henry");
operadorOr("JavaScript");
operadorOr('H');
