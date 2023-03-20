class Persona {
    // Crea el constructor de la clase "Persona".
    // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
    // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
    // sus valores.
    constructor(nombre, apellido, edad, domicilio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.domicilio = domicilio;
    }
    detalle() {
        var persona = new Persona(this.nombre, this.apellido, this.edad, this.domicilio);
        return persona;
    }
}

var p = new Persona('Diego', 'Mejía', 36, 'Colombia');
console.log(p.detalle());