// ==           ES IGUAL
// ===          ES ESTRICTAMENTE IGUAL (compara el valor exacto String o Number)
// !=           ES DISTINTO
// !==          ES ESTRICTAMENTE DISTINTO
// < <= > >=    MENOR / MAYOR / MENOR O IGUAL / MAYOR O IGUAL

// &&           OPERADOR AND (y)
// ||           OPERADOR OR (o)
// !            OPERADOR NOT (no)

// let edad = prompt("Ingrese su edad");
// // Condicional
// if (edad >= 18) {
//     alert("Sos mayor de edad. Podés ingresar.")
// } else {
//     alert("Sos menor de edad. No podés ingresar.")
// }

// let hora = prompt("Ingrese la hora");
// // Si tal cosa se cumple se muestra lo de adentro
// if(hora >= 6 && hora < 12) {
//     alert("Buenos días");
// } else if (hora >= 12 && hora < 20) {
//     alert("Buenas tarde");
// } else {
//     alert("Buenas noches");
// }

let usuario1 = "Tomi";
let usuario2 = "Blanco";

let nombreUsuario = prompt("Ingrese su nombre de usuario")

if (nombreUsuario == usuario1 || nombreUsuario == usuario2) {
    alert ("Bienvenido " + nombreUsuario);
} else {
    alert("Nombre de usuario incorrecto");
}