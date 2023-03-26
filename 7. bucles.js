/* BUCLES O CICLOR DE INTERACIÓN
 * Permiten realizar acciones que son 
 * de carácter repetitivo de manera
 * sencilla */


/* CICLO FOR
 * Lo utilizamos cuando sabemos la cantidad
 * máxima exacta de pasos que queremos ejecutar */
for (var i = 1; i <= 10; i++ ) {
    console.log(i);
}
var i = 1;

/* CICLO WHILE
 * Lo utilizamos cuando NO sabemos con
 * certeza cuántos pasos necesitaremos 
 * hasta finalizar la ejecución */

while (i < 10) {
    console.log(i);
    i++;
}

/* Expresión Switch

 * La expresión Switch evalúa una condición.
 * Compara su valor con una instancia case,
 * y ejecuta declaraciones asociadas a ese case,
 * así como las declaraciones en los case que siguen.
 * 
 * Sintaxis:
  switch (expresión) {
      case valor1:
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
        [break;]
      case valor2:
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
        [break;]
        ...
      case valorN:
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        [break;]
      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        [break;]
}

 * Bucle Do-While

 * El bucle Do-While (hacer mientras) ejecuta una
 * sentencia especificada, hasta que la condición
 * de comprobación se evalúa como falsa. La condición
 * se evalúa después de ejecutar la sentencia,
 * dando como resultado que la sentencia especificada
 * se ejecute al menos una vez.
 * 
 * Sintaxis:
    do {
        sentencia
    } while (condición);

 * Declaración Continue

 * La declaración continue se utiliza dentro de los
 * Bucles For. Nos permite omitir alguna de las
 * iteraciones si se cumple una condición específica.

 * Break

 * La declaración break se utiliza dentro de los
 * Bucles For. Nos permite "romper" o finalizar
 * el bucle con antelación si se cumple una
 * condición específica. */