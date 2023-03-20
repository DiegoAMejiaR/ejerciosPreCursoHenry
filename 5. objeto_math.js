/* Math.pow
Este método nos permite potenciar un número. Por ejemplo,
2 elevado al cubo, sería igual a multiplicar 2 x 2 x 2.
Es decir, 8. El primer número es la base, y el segundo
será la potencia. */
console.log(Math.pow(2, 3)); 

/* Math.round redondeará el número decimal al entero más próximo.
Es decir que, si tenemos 0.49, el resultado será 0.
En cambio, si tenemos 0.50, el resultado será 1. 
0.49 está más próximo al 0, que al uno.
En cambio 0.50, está más proximo al 1, que al 0*/
console.log(Math.round(0.49));
console.log(Math.round(0.50));

/* Math.floor redondeará el número decimal al entero de menor valor.
Por ejemplo, si tenemos el número 5.93, el resultado será 5. */
console.log(Math.floor(0.51));

/* Math.ceil este método, al contrario que el anterior,
redondeará un número al siguiente entero.
Por ejemplo, si tenemos 3.27 el resultado será 4. */
console.log(Math.ceil(1.49));

// Devolverá el valor máximo
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8));

// Devolverá el valor mínimo
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8));

// Devolverá un número aleatorio de 0 a 1 en decimal
var numeroAleatorio = (Math.random()) * 10;
console.log(Math.round(numeroAleatorio));
