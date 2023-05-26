const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Usando un loop
const suma = () => {
  let acc = 0;
  for (const curr of numbers) {
    acc += curr;
  }
  return acc;
};

suma();
//Con reduce
const suma1 = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);
const suma2 = numbers.reduce((acc, curr) => acc + curr, 0);

//Lista de la compra
const listaDelaCompra = [
  { id: 1, nombre: "Patatas", precio: 30 },
  { id: 2, nombre: "Pan", precio: 20 },
  { id: 3, nombre: "Yogur", precio: 5 },
];

const bono = 10;
let total = listaDelaCompra.reduce((acumulador, producto) => {
  return acumulador + producto.precio;
}, -bono);
console.log(total);
total = total - total * 0.1; //Aplicamos un descuento del 10%
console.log(total);
