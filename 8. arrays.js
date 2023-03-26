/* ARRAYS O ARREGLOS
 * Los arreglos o arrays son lo que se conoce como objeto global
 * dentro de Javascript, y que nos permiten guardar y gestionar
 * información. Esto nos será de gran utilidad cuando queramos almacenar datos. 
 * 
 * Dentro de los arreglos existen dos conceptos que pueden
 * parecer similares, pero son muy diferentes.
 * 
 * 1) Por un lado tenemos lo que se conoce como elemento: los elementos
 * son aquellos datos que hayamos guardado. 
 * 
 * 2) Por otro lado, está el concepto de índice: los índices
 * no representan al dato en sí mismo, sino la posición en
 * la que se está guardando.
 * 
 * Un detalle muy importante que hay que destacar es que,
 * en los arreglos, siempre se comienza a contabilizar
 * las posiciones desde el número cero, no el uno. */


var listaCompras = []; //Declaración del arreglo

listaCompras[0] = "Tomate";
listaCompras[1] = "Arroz";
console.log(listaCompras[0]); // Tomate

/* MÉTODO LENGTH 
 * Nos permite saber cuántos elementos
 * tiene un arreglo, cuál es su extensión.
 * Para un arreglo vacio, su longitud es de cero.*/

function tamanyoArreglo(arreglo) {
    return arreglo.length;
}
console.log("El arreglo tiene " + tamanyoArreglo(listaCompras) + " elementos.");

/* MÉTODOS DEL ARRAYS
 *
 * Los arreglos, además de ser un tipo de dato,
 * también son un objeto global dentro de JavaScript.
 * Esto significa que todos los arreglos están asociados
 * a una serie de métodos. */

/* MÉTODO PUSH()
 * El método push() añade uno o más elementos al 
 * final de un arreglo, y devuelve la nueva longitud del array. */

var array = [];
function añadirAlFinal(arreglo, elementoAAñadir) {
    return arreglo.push(elementoAAñadir); // Añado el elemento y retorno la nueva longitud del array   
}
var elemento = "Coco Jambo";
var longitud = añadirAlFinal(array, elemento);
console.log("Elemento: " + '"' + elemento + '"' + ". Añadido correctamente. El arreglo, tiene ahora " + longitud + " elemento(s)");

/* MÉTODO UNSHIFT()
 * El método unshift() agrega uno o más elementos
 * al inicio de un arreglo, y devuelve la nueva longitud del array. */

function anyadirAlInicio(arreglo, elemento) {
    return arreglo.unshift(elemento);
}
anyadirAlInicio (listaCompras, "Pizza Congelada");
console.log(listaCompras);

/* MÉTODO POP()
 * El método pop() elimina y devuelve el
 * último elemento de un arreglo. */

function eliminarUltimoElemento(arreglo) {
    return arreglo.pop();
}

eliminarUltimoElemento(listaCompras);
console.log(listaCompras);

/* MÉTODO SHIFT()
 * El método shift() elimina y devuelve
 * el primer elemento de un arreglo. */

function eliminarPrimerElemento(arreglo) {
    arreglo.shift();
    return arreglo;
}
eliminarPrimerElemento(listaCompras);
console.log(listaCompras);