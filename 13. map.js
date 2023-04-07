/* El método map, nos permite transformar los elementos de
 * un arreglo donde el método de map va a tomar un arreglo de una
 * cantidad determinada y nos va a devolver otro arreglo que va a
 * tener exactamente la misma longitud del arreglo inicial pero con todos
 * los elementos cambiados dependiendo de la función que se aplico a estos 
 * elementos*/

const suma = (ns) => {
    let acumulado = 0;
    for (i = 0; i < ns.length; i++) {
        acumulado += ns[i];
    }
    return acumulado;
}

const mascotas = [
    { nombre: 'Puchini', edad: 12, tipo: 'perro' },
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro' },
    { nombre: 'Pulga', edad: 10, tipo: 'perro' },
    { nombre: 'Pelusa', edad: 16, tipo: 'gato' }
];

// Promedio de las edades
const edades = mascotas.map(x => x.edad);
const resultado = suma(edades) / edades.length;
console.log(resultado);
