// for
// for (let x = 0; x < 5; x++ ) {
//     alert("Ahora X vale " + x);
//     console.log("Ciclo número " + x);
// }

// for anidado

// for (let x = 0; x < 10; x++ ) {
//     console.log("Ciclo número " + x);
//     for (let y =0; y < 5; y++) {
//         console.log("Ciclo secundario " + y)
//     }
// }

// while (si la condición no se cumple no pasa nada)
// let x = 5;
// while (x < 5) {
//     alert("Ahora X vale " + x);
    // console.log("Ciclo while número " + x);
    // x = x + 1;
// }

// do...while (si la condición no se cumple entra una vez)
// let z = 5;
// do {
//     console.log("Ciclo do...while número " + z)
//     z++;
// } while (z < 5)

// switch (reemplazo del if)
let diaDeLaSemana = Number(prompt("Ingrese día de la semana"));

switch (diaDeLaSemana) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    default:
        console.log("Ese día no existe");
        break;
}

// if (x == 0) {
//     console.log("IF X vale 0");
// } else if (x == 1) {
//     console.log("IF X vale 1");
// } else if (x == 2) {
//     console.log("IF X vale 2");
// } else {
//     console.log("IF X no vale 0, 1 ni 2");
// }
