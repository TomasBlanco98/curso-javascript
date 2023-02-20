// VALORES FALSY (0, null, undefined, string vacío, false, NaN)

// VALORES NULLISH (null, undefined)


// Operadores ´+= y ++

// let numero = 10;
// numero += 2;
// numero++;

/**************** *****************/

// OPERADOR TERNARIO
// let edad = 15;

// if(edad >= 18){
//     console.log("Podes ingresar");
// } else {
//     console.log("No podés ingresar")
// }

// sintaxis
// condicional ? resultado1 : resultado2

// edad >= 18 ? console.log("Podes ingresar") : console.log("No podés ingresar")
// console.log( edad >= 18 ? "Podes Ingresar" : "No podés ingresar" );

/******************* ********************/
// OPERADOR &&

// const carrito = [];

// if(carrito.length === 0) {
//     console.log("El carrito está vacío");
// }

// carrito.length === 0 && console.log("El carrito está vacío");

/******************* ********************/
// OPERADOR ||

// let usuario1 = "Carpi";
// let usuario2 = null;

// // if (usuario1) {
// //     console.log(usuario1);
// // } else {
// //     console.log("El usuario no existe");
// // }

// console.log( usuario1 || "El usuario no existe");
// console.log( usuario2 || "El usuario no existe");

/******************* ********************/
// OPERADOR ??

// let numero = 0;
// console.log( numero ?? "El numero no es valido")

/******************* ********************/
// ACCESO CONDICIONAL A UN OBJETO

// const usuario = {
//     nombre: "Tomi",
//     cursos: {
//         dw: "Aprobado",
//         js: "Aprobado"
//     }
// }

// console.log( usuario?.cursos?.dw || "La propiedad no existe");
// console.log( usuario?.trabajos?.youtube || "La propiedad no existe");

/******************* ********************/
// // DESESTRUCTURACIÓN DE OBJETOS

// const usuario = {
//     nombre: "Tomi",
//     edad: 27,
//     cursos: {
//         dw: "Aprobado",
//         js: "Aprobado"
//     }
// }

// let { nombre: nombreUsuario, edad } = usuario;
// console.log(nombreUsuario);
// console.log(edad);

/******************* ********************/
// // DESESTRUCTURACIÓN DE ARRAYS

// const nombres = ["Tomi", "Camila", "Marcos", "Lionel"];

// const [ , a, b] = nombres;

// console.log(b);

/******************* ********************/
// // SPREAD DE ARRAYS
// const nombres = ["Tomi", "Camila", "Marcos", "Lionel"];
// console.log(...nombres);

// const nombres2 = [...nombres];

// nombres2[0] = "Matías";

// console.log(nombres);
// console.log(nombres2);