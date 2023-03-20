var arreglo = ["Cada", "Quien", "98", "*"];
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

var arr = [] // Para un arreglo vacio, su longitud es de cero.
console.log(arr.length);

while (arr.length < 5) {
    // arr[arr.length] = "BOOM";
    arr.push("BOOM!");
}
console.log(arr);