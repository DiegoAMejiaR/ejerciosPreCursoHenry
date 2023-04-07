// EXPRESIÓN DE CLASE
class Auto {
    constructor(puertas, color, marca, anyo, ruedas) {
        this.puertas = puertas;
        this.color = color;
        this.marca = marca;
        this.anyo = anyo;
        this.ruedas = ruedas;
    }
    getMarca () {
        return this.marca;
    }
}

var miSegundoAuto = new Auto(4, 'Blanco', 'Fiat', 2022, 4);
console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);
console.log(miSegundoAuto.getMarca());
