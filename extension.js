/* A partir de una clase con ciertas propiedades y ciertos métodos,
podremos crear otras clases que hereden algunas de esas propiedades
o métodos.*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
}

class Programador extends Persona {
    constructor(nombre, edad, anyosExperiencia) {
        super(nombre, edad);
        this.anyosExperiencia = anyosExperiencia;
    }
    getAnyosExperiencia() {
        return this.anyosExperiencia;
    }
}
// Objeto de tipo 'Persona'
var diego = new Persona('Diego Mejía', 36); // Atributos que recibe el método constructor de la clase
console.log(diego.getNombre());

// Objeto de tipo 'Programador' que hereda las propiedades,
// y métodos de la clase 'Persona'.
var diego2 = new Programador('Diego Mejía R', 36, 1);
console.log(diego2.getEdad())