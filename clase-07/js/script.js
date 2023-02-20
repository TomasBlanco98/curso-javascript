// // ABSTRACCIÓN
// function sumarRango(min, max) {
//     let total = 0;

//     for(let i = min; i <= max; i++) {
//     total += i;
//     }

//     return total;
// }

// console.log(sumarRango(3, 7));
// console.log(sumarRango(1, 10));

// let sumaEntreTresYSiete = sumarRango(3, 7)
// console.log(sumaEntreTresYSiete)

// // RETORNO DE FUNCIONES y FUNCIONES SECUNDARIAS DE UNA PRINCIPAL
// function mayorQue(x) {
//     return (num) => num > x;
// }
// // funciones secundarias
// const mayorQueDiez = mayorQue(10)
// const mayorQueVeinte = mayorQue(20)
// console.log(mayorQueDiez(11));

/******* MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN *******/

const numeros = [50, 12, 37, 17, 25, 6];
const animales = ["Perro", "Gato", "Cisne", "Tortuga"];
const productos = [
    {nombre: "Mesa", precio: 3500},
    {nombre: "Silla de plastico", precio: 2000},
    {nombre: "Silla de madera", precio: 2500},
    {nombre: "Ventana", precio: 4500},
    {nombre: "Puerta", precio: 3000}
];

// forEach() = Recorrer el Array y ejecutar lo que le digamos con cada elemento
// numeros.forEach((numero) => {
//     console.log(numero);
// });
// productos.forEach((producto) => {
//     console.log(producto.nombre);
//     console.log(producto.precio);
// });

// find() = Recorrer el array y retornar el primer elemento que cumpla con la condición
// const perro = animales.find((animal) => animal === "Perro");
// console.log(perro);

// let productoElegido = prompt("Ingrese el producto que queire comprar");
// console.log (productos.find((producto) => producto.nombre === productoElegido));

// filter() = recorrer el array y retornar uno nuevo con todos los elementos que cumplan con una condición
// const gato = animales.filter((animal) => animal === "Gato");
// console.log(gato);

// const sillas = productos.filter((producto) => producto.nombre.includes("Silla"));
// console.log(sillas);


// // some() => Recorrer el array y responder true o false según se ecneuntre o no el elemento que cumpla con la condición
// const cisne = animales.some((animal) => animal === "Cisne");
// console.log(cisne);
// const caballo = animales.some((animal) => animal === "Caballo");

// // map() = recorrer el array y retornar uno nuevo con los elementos transformados del array original
// const nombres = productos.map((producto) => producto.nombre);
// console.log(nombres);

// const preciosActualizados = productos.map((producto) => {
//     return {
//         nombre: producto.nombre,
//         precio: producto.precio * 1.5,
//     }
// })
// console.log(productos)
// console.log(preciosActualizados)

// reduce() = Recorre el array y retorna un único valor tras hacer una operación sobre los elementos
// const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// console.log(total);

// const totalCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0)
// console.log(totalCarrito)

// sort() = Reordenar el array según el criterio indicado
// numeros.sort((a, b) => a - b);
// console.log(numeros);

// numeros.sort((a, b) => a + b)
// console.log(numeros);

/***** MATH *****/
const numeroDecimal1 = 1.25;
const numeroDecimal2 = 1.75;

// // min() => Retornar el número mínimo de un listado
// console.log(Math.min(50, 12, 37, 17, 25, 6));
// // max() => Retornar el número máximo de un listado
// console.log(Math.max(50, 12, 37, 17, 25, 6));

// // ceil() => Retornar el número que le indiquemos redondeado hacia arriba
// console.log(Math.ceil(numeroDecimal1));

// // floor() => Retornar el número que le indiquemos redondeado hacia abajo
// console.log(Math.ceil(numeroDecimal1));

// // round() => Retornar el número que le indiquemos redondeado al más cercano
// console.log(Math.round(numeroDecimal2));
// console.log(Math.round(numeroDecimal1));

// random() = Retornar un númeor aleatorio entre 0 inclusive y 1 inclusive
// console.log(Math.random());
// console.log(Math.round(Math.random()));

// console.log(Math.round(Math.random() *50));
// console.log(Math.round(Math.random() *50 + 20));

console.log(Math.floor( Math.random() * 3 +1));