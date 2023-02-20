// Variable: espacio en la memoria que guarda cadena String y Number
let nombre = "Tomi";
let apellido = "Blanco"
// Concatenar variable String
let nombreApellido = nombre + " " + apellido;

// Modificar valor de variable
nombre = "Lautaro";

let anioActual = 2023;
let anioNacimiento = 1998;
// Calcular variable Number
let edad = anioActual - anioNacimiento;


// Variable que no se puede modificar
const IVA = 21;

// Mostrar variable en la consola
console.log(nombreApellido, edad)

// Crear formulario interactivo
let nombreUsuario = prompt("Ingrese su nombre");
console.log(nombreUsuario);

// Pop up para interactuar
alert("Hola " + nombreUsuario + ".");
