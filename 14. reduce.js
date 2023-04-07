/* El método reduce recibe una función llamada
 * 'reducer', la cual recibe como primer argumento
 *  el acumulador, y el segundo argumento el
 * elemento que se está iterando. Esta función
 * tiene que devolver el nuevo acumulador. Que se
 * va a pasar como argumento la siguiente vez que
 * se llame nuestra función reducer. Además de esto
 * el método 'reduce' recibe un segundo argumento
 * el cual va a ser el valor inicial que va a tener
 * nuestro acumulador.*/

const anidado = [1, [2, 3], 4, [5]];
const plano = anidado.reduce((acc, el) => acc.concat(el), []);
console.log(plano);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const suma = numeros.reduce((acc, el) => acc + el, 0);
console.log(suma);
