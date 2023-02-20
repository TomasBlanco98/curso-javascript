// Tipo de dato que almacena valores en forma de lista(string, numeros, arrays y objetos)

// DECLARAR ARRAY
// const array = [];
const producto = ["Sillón", "Silla", "Mesa", "Ropero",];
// const numeros = [1, 2, 3, 4, 5];
// const booleanos = [true, false, false];
// const mezcla = ["Sillón", 1, 2, true];
// // Array de objetos
// const usuarios = [ { nombre: "Tomas", edad: 27}, { nombre: "Camila", edad: 25,} ];

// // ACCEDER AL ARRAY
// console.log(producto);
// // Numero de posición siempre arranca en el índice 0
// // ACCEDER AL PRIMER ELEMENTO DEL ARRAY
// console.log(producto[0]);

// // RECORRER ARRAY
// for (let i = 0; i < 4; i++) {
//     console.log(producto[i]);
// }

/********* MÉTODOS **********/

// // LENGTH (devuelve longitud del array)
// console.log(producto.length);
// for (let i = 0; i < producto.length; i++) {
//     console.log(producto[i]);
// }

// // PUSH (agrega elemento al final del array)
// producto.push("Cama");
// console.log(producto);

// // UNSHIFT (agrega elemento al principio del array)
// producto.push("Puerta")
// console.log(producto);

// // SHIFT (quita el primer elemento del array)
// producto.shift();
// console.log(producto)

// // POP (quita el último elemento del array)
// producto.pop();
// console.log(producto);


// // SPLICE (eliminar uno o varios elementos del array)
// producto.splice(1, 2);
// console.log(producto);

// // JOIN (genera string con los elementos del array)
// console.log(producto.join("-"));

// // CONCAT (unir 2 arrays en 1)
// const producto2 = ["Puerta", "Ventana", "Cama"];
// const productoFinal = producto.concat(producto2)
// console.log(productoFinal);

// // SLICE (generar una copia de una parte del array)
// const productoComedor = producto.slice(1, 3);
// console.log(productoComedor);

// // INDEXOF (numero de indice de nuestro elemento)
// console.log(producto.indexOf("Ropero"))

// // INCLUDES (saber si un elmento existe en un array)
// console.log(producto.includes("Silla"));

// if (producto.includes("Cama")) {
//     console.log(productos.indexOf("Cama"))
// } else {
//     console.log("Cama no se encuentra");
// }

// // REVERSE (invertir el orden el array)
// console.log(producto.reverse());