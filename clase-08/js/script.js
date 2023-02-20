// // DOCUMENT (devuelve todo el HTML)
// console.log(document);
// // DOCUMENT.BODY (devuelve solo el body del HTML)
// console.log(document.body);

// // GET ELEMENT BY ID (ACCEDER AL ELEMENTO MEDIANTE SU ID)
// const contenido = document.getElementById("contenido")

// console.log(contenido);

// // GET ELEMENT BY CLASS NAME (ACCEDER A LOS ELEMENTOS MEDIANTE SU CLASE)
// const parrafos = document.getElementsByClassName("parrafo")

// console.log(parrafos);

// QUERY SELECTOR. ACCEDER A LOS ELEMENTOS MEDIANTE SU CSS (devuelve un ARRAY)
const contenido = document.querySelector("#contenido")
// console.log(contenido);
// QUERY SELECTOR ALL (devuelve todas los elementos con esa clase)
const parrafos = document.querySelectorAll(".parrafo")
// console.log(parrafos);
// // Devuelve en la consola cada párrafo por separado
// parrafos.forEach(parrafo => console.log(parrafo));
// // Devuelve solo el primer párrafo
// console.log(parrafos[0]);

// // // CLASS NAME (devuelve todas las clases)
// console.log(contenido.className);
// // Pisa todas las clases que tiene)
// contenido.className = "pisar";

// // CLASS LIST (devuelve todas las clases en forma de Array)
// console.log(contenido.classList)
// // ADD (agregar una clase nueva)
// contenido.classList.add("prueba2");
// console.log(contenido.classList);
// // REMOVE (eliminar una clase)
// contenido.classList.remove("prueba2");
// console.log(contenido.classList);

// // INNER HTML (devuelve todo el html)
// console.log(contenido.innerHTML);
// // INNER TEXT (devuelve los textos sin las etiquetas)
// console.log(contenido.innerText);

// // Editar contenido solo texto
// parrafos[0].innerText = "Hola, mundo <a href='#'>Esto es un enlace</a>"
// // Editar contenido con etiquetas
// parrafos[0].innerHTML = "Hola, mundo <a href='#'>Esto es un enlace</a>"

// // REMOVE (eliminar elmentos del html)
// parrafos[2].remove();

const productos = ["Sillón", "Silla", "Mesa", "Cama", "Puerta", "Ventana"];
// CREATE ELEMENT (crear elementos del html)
let lista = document.createElement("ul");
lista.classList.add("lista");
// insertar array
// lista.innerHTML = "<li class='lista-item'>" + productos[0] + "</li>";
// lista.innerHTML += "<li class='lista-item'>" + productos[1] + "</li>";
// lista.innerHTML += `<li class="lista-item">${productos[2]}</li>`;
// lista.innerHTML += "<li class='lista-item'>Item 4</li>";

// EJEMPLO DE COMO INSERTAR ARRAY
for (producto of productos) {
    lista.innerHTML += `<li class="lista-item">${producto}</li>`
}

// APPEND (agregar elemento al html)
contenido.append(lista);
