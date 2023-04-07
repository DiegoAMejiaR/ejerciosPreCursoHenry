/* ENTIDADES
 * Representación de conceptos del mundo real.
 * Por ejemplo: dentro del contexto de Instagram
 * podemos encontrar entidades como 'Usuarios'
 * y 'Publicaciones'

 * CLASES:
 * Conjunto de datos que pertenecen a una entidad
 * Podemos pensarlos como  una plantilla o modelo
 * de una entidad.

 * FORMAS DE DECLARAR UNA CLASE
 * 1. Función constructora
 * 2. Expresión de clase

FUNCIÓN CONSTRUCTORA. */

function Auto(puertas, color, marca, anyo, ruedas) {
    // Propiedades
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.anyo = anyo;
    this.ruedas = ruedas;
    // Métodos
    this.getMarca = function () {
        return this.marca;
    }
}

// Instanciar un objeto de la clase
var miPrimerAuto = new Auto(2, 'Rojo', 'Ferrari', 2018, 4);

console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);
console.log(miPrimerAuto.getMarca());
