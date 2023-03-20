// Entidades:
//  Representación de conceptos del mundo real

// Clases:
// Conjunto de datos que pertenecen a una entidad
// Podemos pensarlos como plantillas o modelos

// Maneras de declarar las clases
// 1. Función constructora
// 2. Expresión de clase


// Declaración tipo FUNCIÓN CONSTRUCTORA.
function Auto (puertas, color, marca, anyo, ruedas) {
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
