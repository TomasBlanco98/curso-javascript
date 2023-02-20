/***************/

// // SET TIMEOUT o SET INTERVAL (funcion asincrónica)
// setTimeout(() => {
//     console.log("Estoy por la mitad.");
// }, 0);

// setInterval(() => {
//     console.log("Hola")
//     console.log("Chau");
// }, 1000);

// let contador = 0;

// const intervalo = setInterval(() => {
//     contador++;
//     console.log(contador)

//     if(contador == 5){
//         clearInterval(intervalo);
//         console.log("El contador se frenó");
//     }
// }, 1000);

/*******PROMESAS (OBJETO QUE REPRESENTA UN EVENTO A FUTURO)********/

// new Promise( (resolve, reject) => {
// })

// const eventoFuturo = (res) => {
//     return new Promise ((resolve, reject) =>{
//         setTimeout(() => {
//             res === true ? resolve("Promesa resuelta") : reject("Promesa rechazada");
//         }, 2000);
//     })
// }
// const valor = true;

// // Forma de mostrar algo simplemente cuando la promesa esté terminada
// eventoFuturo(valor)
//     .then((respuesta) => {
//         console.log(respuesta);
//     })
//     .catch((respuesta) => {
//         console.log(respuesta);
//     })
//     .finally(() => {
//         console.log("Finalizó el proceso");
//     })

/*******EJEMPLO DE SIMULACIÓN DE DATOS********/
const baseDeDatos = [
    { id: "silla", nombre: "Silla", precio: 1500 },
    { id: "sillon", nombre: "Sillón", precio: 2500 },
    { id: "puerta", nombre: "Puerta", precio: 3500 },
    { id: "ventana", nombre: "Ventana", precio: 4500 }
];

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(baseDeDatos);
        }, 2000);
    })
}

let productos = [];

const lista = document.querySelector("#lista-productos");

function mostrarProductos(array) {

    array.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.textContent = `${item.nombre} - ${item.precio}`

        lista.append(li);
    });

}

pedirProductos()
    .then((res) => {
        productos = res;
        mostrarProductos(productos);
    })