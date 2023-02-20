// Funciones: permite ejectuar acciones varias veces en distintas partes del programa. Ejemplo: actualizar carro de compras. (Function/Nombre de function/Parámetros)
// FUNCIONES DECLARADAS
// function saludar(nombre, apellido) {
//     console.log("Hola " + nombre + " " + apellido);
// }
// // llamado de funcion (Nombre de function/Parámetros)
// saludar("Tomas", "Blanco");
// saludar("Lautaro", "Martinez");


// FUNCIONES ANÓNIMAS (Variable/Nombre/=/fuction/parámetro)
// const saludar = function(nombre) {
//     console.log("Hola " + nombre);
// }
// saludar("Tomas")


// FUNCIONES FLECHA (Variable/Nombre/=/Parámetro/=>).
// const saludar = (nombre) => {
//     console.log("Hola " + nombre);
// }
// saludar("Tomi");
// 1 solo parámetro y 1 sola sentencia
// const saludar = nombre => console.log("Hola " + nombre);

// FUNCIONES DECLARADAS CON RETORNO
function suma(a, b) {
    return a + b
}
// // FUNCIONES FLECHA CON RETORNO IMPLÍCITO
const resta = (a, b) => a - b;

console.log(suma(2, 5));
console.log(resta(10, 3));