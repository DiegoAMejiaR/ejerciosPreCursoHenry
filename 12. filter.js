/* Filter nos permite crear un nuevo
 * arreglo en base al arreglo al
 * cual estamos aplicando este método
 * La longitud del arreglo nuevo va 
 * a ser igual o menor al arreglo inicial */

// Arreglo de enteros
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosFiltrados = numeros.filter(x => x < 5);
console.log(numerosFiltrados);

// Arreglo literal de objetos
const mascotas = [
{nombre: 'Puchini', edad: 12, tipo: 'perro'},
{nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
{nombre: 'Pulga', edad: 10, tipo: 'perro'},
{nombre: 'Pelusa', edad: 16, tipo: 'gato'}
];


/* 'x' es la función que se le envía por parámetro
 * a la función filter. Según entiendo, 'x' es
 * también cada elemento del arreglo sobre el
 * cual se invoca a la función filter. */

const mascota = mascotas.filter(x => x.raza === 'perro');
console.log(mascota);
