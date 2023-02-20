// let nombre = "Tomas";
// let edad = 24;
// let nacionalidad = "Argentina";

// Agrupar elementos similares
// CREAR OBJETOS (Separados por ,)

const usuario1 = {
    nombre: "Tomas",
    edad: 24,
    nacionalidad: "Argentina",
    // CREAR OBJETO DENTRO DE OBJETO
    hobbies: {
        hobby1: "Fútbol",
        hobby2: "Videojuegos",
    }
}
const usuario2 = {
    nombre: "Camila",
    edad: 25,
    nacionalidad: "Argentina",
}
// // LLAMAR A OBJETO
// console.log(usuario1);

// // LLAMAR A PROPIEDAD DE OBJETO
// console.log(usuario1.nombre);
// console.log(usuario1.hobbies.hobby1);

// // CAMBIAR EL VALOR DE UNA PROPIEDAD DEL OBJETO
// usuario1.nacionalidad = "Brasil";
// console.log(usuario1);

// // EJEMPLO DE PRODUCTO
// const producto1 = {
//     título: "Silla",
//     color: "Rojo",
//     precio: 5000,
// }

// // FUNCION CONSTRUCTOR (Objetos que tienen las mismas propiedades). FUNCTION/CONSTRUCTOR/PARAMETROS(propiedades)/

// function Producto(titulo, color, precio) {
//     this.titulo = titulo;
//     this.color = color;
//     this.precio = precio;
// }
// // CREAR OBJETO DE FUNCION CONSTRUCTORA
// const producto1 = new Producto("Silla", "Rojo", 5000);
// const producto2 = new Producto("Cama", "Rojo", 15000)
// // LLAMAR OBJETO
// console.log(producto1);

// // CLASES
// // CREAR CLASE
// class Persona {
//     constructor(titulo, color, precio) {
//         this.titulo = titulo;
//         this.color = color;
//         this.precio = precio;
//         this.saludar
//     }
// }
// CREAR OBJETO
// const producto1 = new Producto("Silla", "Rojo", 5000);
// const producto2 = new Producto("Cama", "Rojo", 15000)
// LLAMAR OBJETO
// console.log(producto2);

// MÉTODO (modificar algo con las propiedades del mismo objeto)
class Persona {
    constructor(nombre, edad, nacionalidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        // metodo
        this.saludar = function(){ console.log("Hola, soy " + this.nombre)}
        this.cumpleanios = function() { this.edad++};     
    }
}

const persona1 = new Persona("Tomas", 24, "Argentina");
// console.log(persona1)
// // LLAMAR MÉTODO
// persona1.saludar();
// // console.log(persona1.edad);
// persona1.cumpleanios();
// console.log(persona1.edad);

// // OPERADOR IN (saber si tiene una propiedad)
// if ("nombre" in persona1) {
//     console.log(persona1.nombre)
// } else {
//     console.log("No hay nombre");
// }

// // OPERADOR FOR...IN (CICLO)
// for ( const propiedad in persona1) {
//     console.log(propiedad);
// }

// ASIGNAR UNA VARIABLE Y FUNCION DE AFUERA DEL OBJETO AL OBJETO
// const IVA = 1.21;

// function saludar() {
//     console.log("Hola soy " + this.nombre);
// }
// const producto1 = {
//     nombre: "Television",
//     color: "Negro",
//     precio: 50000,
//     iva: IVA,
//     saludar,
// }

// producto1.saludar();
// console.log(producto1)