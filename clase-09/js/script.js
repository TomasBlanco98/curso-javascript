/********** EVENTOS ************/

/** EVENTOS DEL MOUSE **/
const alerta = document.querySelector("#alerta");
// ADD EVENT LISTENER (escuchador)
// 1er forma mostrar mensaje en una alerta -- Haciendo referencia a la función
alerta.addEventListener("click", mostrarAlerta);
function mostrarAlerta() {
    alert("Hola, mundo")
}
// // 2da forma
// alerta.onclick = () => {
//     alert("Hola, mundo")
// }

// Mostrar mensaje en la consola -- Escribir con función anónima (Pocas sentencias dentro)
const consola = document.querySelector("#consola")
alerta.addEventListener("mousemove", (event) => {
    console.log(event)
})

// AGREGAR CLASE A UN ELEMENTO -- Switch dark mode
const colorMode = document.querySelector("#color-mode")
const body = document.body;

colorMode.addEventListener("click", cambiarDarkMode)
function cambiarDarkMode() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        colorMode.innerText = "Cambiar a Light Mode";
    } else {
        colorMode.innerText = "Cambiar a Dark Mode";
    }
}
// toggle (si no la tiene la agrega y si la tiene la quita) 

/** EVENTOS DEL FORMULARIO **/

// Mostrar input en alerta
const alertaForm = document.querySelector("#alerta-form");
const alertaInput = document.querySelector("#alerta-input");

alertaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(alertaInput.value);
    alertaForm.reset();
})

// Mostrar input abajo
const abajoInput = document.querySelector("#abajo-input")
const abajo = document.querySelector("#abajo");

abajoInput.addEventListener("input", () => {
    abajo.innerText = abajoInput.value;
})

// Agregar items a una lista
const agregarForm = document.querySelector("#agregar-form");
const agregarInput = document.querySelector("#agregar-input");
const agregar = document.querySelector("#agregar");

agregarForm.addEventListener("submit", agregarItems);

function agregarItems(e) {
    e.preventDefault();

    if (agregarInput.value != "") {
        let item = document.createElement("li");
        item.innerText = agregarInput.value;

        agregar.append(item);
    } else {
        alert("Input vacío");
    }
    
    agregarInput.focus();
    agregarForm.reset();
}