/*Métodos varios

El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.

El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.

El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.

El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.*/

// Método includes

var pintores = ["Picasso", "Velasquez", "Van Gogh", "Dali"];
var cumpleCondicionPintores = pintores.includes("Monet");
if (cumpleCondicionPintores) {
    console.log("El pintor si se encuentra en el array");
} else {
    console.log("El pintor no se encuentra en el array");
}


// Método every

var numeros = [3, 4, 6, 8, 9];

function cumpleCondicion(arreglo) {
    return arreglo.every((elemento) => {
        return elemento > 2; // Verifica que cada elemento del arreglo(numeros) sea mayor que dos. Y devuelve un booleano
    })
} // la función cumpleCondicion devuelve un valor de tipo booleano.

var condicion = cumpleCondicion(numeros); // Dicho valor se almacena en la variable 'condicion'
if (condicion) {
    console.log("El arreglo cumple la condición");
} else {
    console.log("El arreglo no cumple la condición");
}

// Método Split (Separar)

var palabra = "Henri";
var palabraSeparada = palabra.split(''); // Las comillas simples, significan que pedimos al método que separe por cada caracter.
console.log(palabraSeparada);
palabraSeparada.pop();
palabraSeparada.push('y');
console.log(palabraSeparada);


// Método Join (Unir)

var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);



