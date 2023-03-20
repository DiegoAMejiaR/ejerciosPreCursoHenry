// DIVISIÓN SINTETICA
var a = [];
var ts;
do {
    ts = prompt('Ingrese el término con su respectivo signo. Después de ingresar el último término de clic en "CANCELAR"'); // Términos del Dividendo
    if (ts != null && ts != '') a.push(parseInt(ts));
} while (ts != null);


// var a = [1, 4, -4, -16];

var termino = ultimoTermino(a);

var b = [];

if (termino < 0) {
    termino = termino * -1;
}

b = crearB(termino);

var arregloResultado = resultado(a, b);


document.getElementById('a').innerHTML = 'A = ' + a;
document.getElementById('termino').innerHTML = 'T = ' + termino;
document.getElementById('b').innerHTML = 'B = ' + b;
document.getElementById('resultado').innerHTML = 'R = ' + arregloResultado;

// console.log("t: " + termino);
// console.log("a: " + a);
// console.log("b: " + b);
// console.log("r: " + arregloResultado);

/* Función que devuelve el último termino de los divisores
 * al cual se le sacan los divisores */

function ultimoTermino(a) {
    t = a[a.length - 1];
    return t;
}

function crearB(num) {
    var b = [];
    for (let i = 2; num >= i; i++) {
        if (num % i == 0) {
            b.unshift(num);
            b.unshift(num * -1);
            num = num / i;
            i--;
        }
    }
    b.unshift(1);
    b.unshift(-1);
    return b;
}

function resultado(a, b) {
    var r = [];
    b.forEach((e) => {
        var bajado = a[0];
        for (let i = 1; i < a.length; i++) {
            bajado = (e * bajado) + a[i];
            if ((i == (a.length - 1)) && bajado == 0) {
                r.push(e);
            }
        }
    })
    return r;
}