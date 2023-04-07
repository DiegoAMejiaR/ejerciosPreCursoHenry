/* CALLBACK:
 * Proceso en el que una función recibe por parámetro
 * a otra función y la ejecuta en su interior.
 * Esto nos permite asegurar que una función no se ejecute
 * hasta completar una tarea. */


// EJEMPLO 1
var devuelveUsuario = () => {
    return 'Diego';
}

var devuelveSaludo = () => {
    return 'Hello';
}

function saludo (cb1, cb2) {
    return cb1() + ' ' + cb2();
}
console.log('Ejemplo # 1');
console.log(saludo(devuelveSaludo, devuelveUsuario));

// EJEMPLO 2

var devuelveFrase = function (comida) {
    return 'Hoy quiero comer ' + comida;
}

var hablar = function (comida, cb) {
    return cb(comida);
}
console.log('Ejemplo # 2');
console.log(hablar('Pizza', devuelveFrase));