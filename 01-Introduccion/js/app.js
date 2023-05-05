//alert("Soy un alert en un js externo");

//04 - Algo util
// const nombre = prompt('Dime tu nombre');
// document.querySelector('.contenido').innerHTML = `${nombre} que hace`;
//Variables
const hola = "Hola desde la consola";
console.log(hola);
//arrays
console.log([1,2,3,4]);
//objetos
let obj = {nombre:"Juan", profesion:"Mago"};
console.log(obj);

//cosas de la consola
console.table([1,2,3,4]);
console.clear();
console.error("Algo salió mal...")
console.warn("Warniiiinnnggggssss!")

//Timing
console.time('contador1');
console.table([1,2,3,4]);
console.error("Algo salió mal...")
console.warn("Warniiiinnnggggssss!")
console.timeEnd('contador1')

//function
function saludo() {
    console.log("Los qu evan a aprender javascript te saludan!");
}

saludo();

