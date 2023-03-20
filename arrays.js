var listaCompras = []; //Declaración del arreglo
listaCompras[0] = "Tomate";
listaCompras[1] = "Arroz";
console.log(listaCompras[0]);

function tamanyoArreglo(arreglo) {
    return arreglo.length;
}
console.log("El arreglo tiene " + tamanyoArreglo(listaCompras) + " elementos.");

function anyadirAlFinal(arreglo, elemento) {
    arreglo.push(elemento);
    return arreglo;
}
anyadirAlFinal(listaCompras, "Coroso");
console.log(listaCompras);

function anyadirAlInicio(arreglo, elemento) {
    arreglo.unshift(elemento);
    return arreglo;
}
anyadirAlInicio (listaCompras, "Pizza Congelada");
console.log(listaCompras);

function eliminarUltimoElemento(arreglo) {
    arreglo.pop();
    return arreglo;
}
eliminarUltimoElemento(listaCompras);
console.log(listaCompras);

function eliminarPrimerElemento(arreglo) {
    arreglo.shift();
    return arreglo;
}
eliminarPrimerElemento(listaCompras);
console.log(listaCompras);

//El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.
var array = [];
function añadirAlFinal(arreglo, elementoAAñadir) {
    var nuevaLongitudArreglo = arreglo.push(elementoAAñadir);
    return nuevaLongitudArreglo;
}
var elemento = "Coco Jambo";
var longitud = añadirAlFinal(array, elemento);
console.log("Elemento: " + '"' + elemento + '"' + ". Añadido correctamente. El arreglo, tiene ahora " + longitud + " elemento(s)");
añadirAlFinal(array, "Diego Mejía");
console.log(array);

// El método pop() elimina y devuelve el último elemento de un arreglo.
function eliminarUltimoElemento(arreglo) {
    return arreglo.pop();
}
var ultimoElemento = eliminarUltimoElemento(array);
console.log("El último elemento del arreglo actualmente es: " + ultimoElemento);

// El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.

// El método shift() elimina y devuelve el primer elemento de un arreglo.

