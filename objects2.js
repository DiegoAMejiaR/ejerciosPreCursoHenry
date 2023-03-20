
var libro = {
    autor: "Borges",
    genero: "Policial",
    añoPublicacion: 1990,
};

// Saber si un objeto tiene una propiedad

console.log(libro.hasOwnProperty("genero"));

/* El método: hasOwnProperty devuelve un booleano. true, si el objeto tiene una propiedad llamada según el argumento 
    que le pasamos, o false, si el objeto no tiene una propiedad llamada según el argumento pasado al método */

// Conocer el nombre de las propiedades de un objeto

console.log(Object.keys(libro));

/* El método keys, devuelve una arreglo con las propiedad del objeto */

//  Cómo recorrer un OBJETO

/* Para recorrer un objeto, hacemos uso de bucle for, con alguna modificación
    al bucle for tradiciona. Veamos */

for (let propiedad in libro) {
    console.log("Propiedad: " + propiedad + ". Valor: " + libro[propiedad]);
}

/* Contextos en JavaScript

Dentro de este lenguaje de programación existe un objeto global llamado this. 
Este nos permite manipular el contexto en el que las funciones y la 
información está siendo ejecutada. De esta forma podremos tener un alcance 
más preciso dentro de nuestro código. */

var objeto = {
    propiedadUno: 5,
    propiedadDos: 10,
    getPropiedadUno: function() {
        return this.propiedadUno;
    },
    getPropiedadDos: function() {
        return this.propiedadDos;
    },
};
// Mediante 'this' accedo al valor de la propiedad
console.log(objeto.getPropiedadUno());
console.log(objeto.getPropiedadDos());
