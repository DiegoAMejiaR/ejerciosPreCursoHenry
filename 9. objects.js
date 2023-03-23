/* OBJETOS
 * Estructura en la que se puede
 * guardar información y 
 * funcionalidades 
 * 
 * A diferencia de las matrices que
 * tienen elementos valorados en índices,
 * los objetos usan un concepto llamado
 * pares de clave:valor. 
 * 
 * La clave (key) es el identificador y el valor
 * (value) es el valor que queremos guardar en
 * esa clave. La sintaxis es "clave: valor".
 * Los objetos pueden contener muchos pares de
 * clave-valor, deben estar separados por una
 * coma (importante: sin punto y coma dentro de un objeto).
 * 
 * Las claves son únicas en un objeto, solo puede
 * haber una clave de ese nombre, aunque, varias
 * claves pueden tener el mismo valor. Los valores
 * pueden ser cualquier tipo de dato de Javascript;
 * cadena, número, booleano, matriz, función o
 * incluso otro objeto. */


var deportes = {
    conBalon: ["Fútbol", "Baloncesto"],
    sinBalon: ["Boxeo", "Natación"],
};

var persona = {
    nombre: "Diego",
    edad: 36,
    estudios: {
        esProgramador: true,
    },
    saludar: function () {
        console.log("Hola!");
    },
};

console.log(persona.edad);
persona.edad = 37;
console.log(persona.edad);
console.log(persona.estudios.esProgramador);

// // Crear una propiedad. Si la propiedad ya existe se actualizaría su valor.
persona.estatura = 1.69;
console.log(persona.estatura);

// // Borrar una propiedad
delete persona.estatura;
console.log(persona);

console.log(persona.saludar());


// // Con Bracket-Notation

deportes['peligrosos'] = ["Fútbol americano", "Rudby"];
console.log(deportes.peligrosos);

var comidas = {

};

var tiposDeComidas = function(propiedadUno, propiedadDos) {
    comidas['propiedadUno'] = ["Frutas", "Vegetales"];
    comidas[propiedadDos] = ["Hamburgesa", "Papas Fritas"];
}
/* En la notación bracket-Notation, el nombre de la propiedad debe ir en comillas.
    Se puede usar también variables como nombre de la propiedad de un objeto, 
    en este caso, se omite las comillas en el nombre de la propiedad */

tiposDeComidas("sana", "noTanSana");
console.log(comidas);

// Llamar a la propiedad usando el notación braket-notation
console.log(comidas['propiedadUno']);

