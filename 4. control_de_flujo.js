/* Operadores condicionales
    Permiten que se cumplan unas u otras instrucciones
    dependiendo de alguna condición */

function viajar(destino) {
    if (destino === "Brazil") {
        console.log("Gire a la IZQUIERDA");
    } else if (destino === "Argentina") {
        console.log("Gire a la DERECHA");
    } else {
        console.log("No hay más caminos disponibles.");
    }
}
viajar("Brazil");

function puedeManejar(edad) {
    if (edad >= 28) console.log(true);
    else console.log(false);
}