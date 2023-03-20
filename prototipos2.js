// Función que recorre un arreglo sin importar
// su dimensión. Y retorna el total de elementos
// mayores a un número dado.
Array.prototype.mayorQueN = function (numero) {
    var contador = 0;
    // for (let i = 0; i < this.length; i++) {
    //     if (this[i] > numero) contador++;
    // }
    // return contador;
    this.forEach((element) => {
        if (element > numero) contador++;
    })
    return contador;
}
var arreglo = [1, 2, 3, 4, 5, 6, 7];
console.log(arreglo.mayorQueN(5));

// ---------------------------------------------------------------

// Creación de la clase LATINOAMERICA
class LatinoAmerica {
    constructor () {
        // Propiedades
        this.paises = [];
    }
    // Métodos
    getPaises = function () {
        return this.paises;
    }
}

// Creación del prototipo de la clase LATINOAMERICA
LatinoAmerica.prototype.agregarPais = function (pais) {
    this.paises.push(pais);
}
// Instanciación de un objeto de la clase LATINOAMERICA
var continente = new LatinoAmerica();

// Invoco al método, que creamos por medio del prototipo
continente.agregarPais('brazil');

console.log(continente.getPaises());