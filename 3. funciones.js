// * * Primer forma de declarar una función * *
// Esta función no retorna ningún valor
function sumaTres(x) {
    console.log(x + 3);
}
sumaTres(5);

// Esta función si retorna un valor
function sumaTres(x) {
    return x + 3;
}
console.log(sumaTres(5));


// * *Segunda forma de declarar una función * *
// Con esta forma, guardamos nuestra función 
// dentro de una variable
var sumaTres = function (x) {
    return x + 3;
};
console.log(sumaTres(5));


/* * * Tercera forma de declarar una función * * *
    Conocida como función de flecha */
var sumaTres = (x) => {
    return x + 3;
};

/* Existen diferentes maneras de escribir
    nombres dentro del mundo del código.

    ¿Qué es una nomenclatura?

Las nomenclaturas son formas de llamar a las cosas.
En programación existen ciertas reglas sobre las
cuales llevamos uniformidad en el código y nos
proporcionan un estándar de trabajo especialmente
dentro de equipos de desarrollo de software.

Existen 3 tipos de nomenclatura principal: camelCase, PascalCase, snake_case.

camelCase
–
Este modo de nombrar implica la unión de dos o más palabras
sin espacios entre ellas, pero diferenciadas por una letra
mayúscula inicial a partir de la segunda palabra, por ejemplo:
holaMundo / funcionEdadAños.

PascalCase
–
Es similar a camelCase pero la primera letra de la frase
también se inicia con mayúscula, al igual que cada palabra.
Se mantiene la práctica de no tener espacios entre palabras
y cada palabra siempre empieza con su primera letra mayúscula.
Por ejemplo: HolaMundo / FuncionEdadAños

snake_case
–
La nomenclatura snake_case  es definida de esta forma porque
siempre la usamos sobre el piso. Las letras siempre  serán
minúsculas y las  palabras están separadas por un guion bajo
de esta forma: hola_mundo / funcion_edad_años

*/