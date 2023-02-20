// GUARDAR INFORMACIÓN DENTRO DEL NAVEGADOR DEL USUARIO

/*** LOCAL STORAGE (No se borra al cerrar el navegador) ***/

// // SET ITEM (guardar un valor en local storage. Siempre se guarda como String)
// localStorage.setItem("iva", 21);
// localStorage.setItem("nombre", "Tomas")

// let usuario = "Lionel";
// localStorage.setItem("usuario", usuario)

// // Obtener algo del local storage
// let usuarioEnLocalStorage = localStorage.getItem("usuario");
// console.log(usuarioEnLocalStorage);

// let usuarioIngresado = prompt("Ingrese su nombre");
// localStorage.setItem("usuario-ingresado", usuarioIngresado);
// let usuarioIngreasdoEnLocalStorage = localStorage.getItem("usuario-ingresado");
// console.log(usuarioIngreasdoEnLocalStorage);

/*** CONVERTIR OBJETO A JSON ***/
const usuario = {
    nombre: "Tomas",
    edad: 24,
}
// opción 1
const usuarioJson = JSON.stringify(usuario)
localStorage.setItem("usuario", usuarioJson)
// opción 2
localStorage.setItem("usuario", JSON.stringify(usuario));

// RECONVERTIR OBJETO
// opción 1
const usuarioEnLocalStorage = localStorage.getItem("usuario");
const usuarioObjeto = JSON.parse(usuarioEnLocalStorage)

// opción 2
const usuarioEnLS = JSON.parse(localStorage.getItem("usuario"))
console.log(usuarioEnLS);

/*** CONVERTIR ARRAY DE OBJETO A JSON ***/
const productos = [
    {nombre: "Silla", precio: 1500},
    {nombre: "Sillón", precio: 1400},
    {nombre: "Mesa", precio: 1300},
];

localStorage.setItem("productos", JSON.stringify(productos));

const productosEnLS = JSON.parse(localStorage.getItem("productos"));
console.log(productosEnLS);

/*** SESSION STORAGE (Se borra al cerrar la pestaña)***/

/**** EJEMPLO DE DARK MODE ****/

const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode")
console.log(darkMode); // si no existe devuelve null

function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}
function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if(darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode")
    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})