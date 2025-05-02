console.log("Hello, World! 01");

let nombreCompleto = "Cristian Guajardo";
console.log(nombreCompleto);

//diferencias entre var, let y const
// var: variable global, se puede redeclarar y reasignar
var nombre2 = "Cristian";
console.log(nombre2);
//let: variable de bloque, no se puede redeclarar, pero se puede reasignar
let nombre3 = "Cristian";
console.log(nombre3);
//const: variable de bloque, no se puede redeclarar ni reasignar
const nombre4 = "Cristian";
console.log(nombre4);

//Ejemplos de uso
// var: se usa para variables que no cambian de valor y se usan en todo el programa
// let: se usa para variables que cambian de valor y se usan en un bloque   
// const: se usa para variables que no cambian de valor y se usan en un bloque
//ejemplo de var
var nombre5 = "Cristian";
if (true) {
    var nombre5 = "Guajardo";
}
console.log(nombre5); // Guajardo
//ejemplo de let
let nombre6 = "Cristian";           
if (true) {
    let nombre6 = "Guajardo";
}
console.log(nombre6); // Cristian
//ejemplo de const      
const nombre7 = "Cristian";
if (true) {
    const nombre7 = "Guajardo";
}
console.log(nombre7); // Cristian
