// Primer forma de declarar una función
function sumaTres(x){
    console.log(x + 3);
}
sumaTres(5);

// Segunga forma de declarar una función
function sumaTres(x){
    return x + 3;
}
console.log(sumaTres(5));


// Tercera forma de declarar una función
var sumaTres = function (x){
    return x + 3;
};
console.log(sumaTres(5));


// Cuarta forma de declarar una función
var sumaTres = (x) => {
    return x + 3;
};