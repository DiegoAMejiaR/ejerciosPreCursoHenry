
/* * * OPERADORES ARITMÉTICOS * * *

Se usan para calcular un valor de dos o más elementos */

console.log(3 + 5);
console.log(3 - 5);
console.log(3 * 5);
console.log(3 / 5);
console.log(3 % 5);

/* * * * OPERADORES RELACIONALES O DE COMPARACIÓN * * *

Estos operadores devuelven un valor booleano, para
indicar si la operación es verdadera o falsa*/

console.log(4 < 7);
console.log(4 < 1);
console.log(4 > 4);
console.log(4 == 7); // Igualda
// Igualda estricta, verifica que coincida tanto el tipo de dato, como el valor del mismo
console.log(4 === '4');
console.log(6 != 6);
var a = 1;
var b = 2;
var c;
console.log(c = a = b);

/* * * OPERADORES LOGICOS* * * */

// AND => && => Y
function menorYMayor(numero) {
    if (numero > 5 && numero < 10) console.log(true)
    else console.log(false);
}
menorYMayor(5);
menorYMayor(7);

function menorYMayorPar(numero) {
    if (numero > 5 && numero < 10 && numero % 2 === 0) console.log(true);
    else console.log(false);
}

menorYMayorPar(7);
menorYMayorPar(8);


// OR = > || => O
function operadorOr(palabra) {
    if (palabra === "Henry" || palabra.length < 2) console.log(true);
    else console.log(false);
}
operadorOr("Henry"); // true
operadorOr("JavaScript"); // false
operadorOr('H'); // true

// ! => NEGACIÓN
function negacion(permiso ){
    if (!permiso) console.log('Tiene permiso');
}
negacion(true) // false
negacion(false) // true
