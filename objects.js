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
    comidas['propiedadDos'] = ["Hamburgesa", "Papas Fritas"];
}
/* En la notación bracket-Notation, el nombre de la propiedad debe ir en comillas.
    Se puede usar también variables como nombre de la propiedad de un objeto, 
    en este caso, se omite las comillas en el nombre de la propiedad */

tiposDeComidas("sana", "noTanSana");
console.log(comidas);

// Llamar a la propiedad usando el notación braket-notation
console.log(comidas['propiedadUno']);

