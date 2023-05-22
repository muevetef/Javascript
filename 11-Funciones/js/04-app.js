//rest oprator
//spread operator
function arrayMaker(...paramsList) {
  const miArray = [...paramsList];
  return miArray;
}

const miArray = arrayMaker("Lunes", "martes", "miercoles");

let misConocimientos = [
  "variables",
  "operadores",
  "estructuras de control",
  "funciones",
];
let aprendido = ["rest operator", "spread operator"];
let misConocimientosAmpliados = [
  ...misConocimientos,
  ...aprendido,
  "otra cosa más",
];

//Array de ejemplo
const tablero = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Obtener el resultado de la suma de todos los numeros del tablero
let suma = 0;
for(let i=0;i<tablero.length;i++){
  for(let j=0;j<tablero[i].length;j++){
    const num = tablero[i][j];
    suma = suma + num
    console.log(suma)
  }
}
console.log("La i vale "+i);
console.log("La j vale "+j);
console.log("La suma de todos los elementos es: " + suma);
