// El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
// El método forEach no hará ningún cambio sobre el arreglo.
// forEach (para cada uno)

var numeros = [1, 2, 3, 4, 5];
numeros.forEach((elemento) => console.log(elemento));

// Mostrar los elementos del array que cumplen una condición

numeros.forEach((elemento) => {
    if (elemento > 3) {
        console.log(elemento);
    }
})

// El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. 
// La diferencia es que este método devuelve un nuevo arreglo con los elementos modificados.

var nuevoArregloNumeros = numeros.map((elemento) => {
    return elemento + 1;
})
console.log(nuevoArregloNumeros + " => Arreglo modificado correctamente!");