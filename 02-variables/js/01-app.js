//Variables con var
var producto = "Monitor de 23 pulgadas";
console.log(typeof producto)

producto = "Patinete xiaomi";
console.log(producto)

//Tipado de datos dinámico
producto = 1.6;
console.log(typeof producto)

producto = {precio: 234, modelo:"Triniton"};
console.log(typeof producto)

producto = true;
console.log(typeof producto)

//Normas de estilo para nombrar valriables
var nombreProducto = "lo que sea"; //camelCase

//Recomnedacion usar let y const
let precio = 12;
//let precio = 22; //no puedo redefinir
precio = 23;

const PI = 3.1416;
//PI = 4.5;//constante, si el tipo es primitivo no  puedo cambiar su valor

const usuario = {nombre:"Pepe", edad:23};
console.log(usuario);
usuario.edad = 24;
console.log(usuario);