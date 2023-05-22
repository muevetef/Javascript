//Declaracion de funcion
function addEuroSign(value) {
  return value + "€";
}

//Cuando se usan declaraciones se pueden llamar a las funciones
//antes de declararlas

//Funcion como expresión
let addDolarSign = function (value) {
  return value + "$";
};
console.log(addDolarSign(300));

addDolarSign = function (value) {
  return "Precio " + value + "$";
};
console.log(addDolarSign(300));
console.log(addDolarSign);

//Arrow functions
const add = (a, b) => {
  return a + b;
};
console.log(add(8, 9));

//El return de la arrow funtions es implicito
const substract = (a, b) => a - b;

console.log(substract(8, 9));

//En caso de tener solo un parametro se puede omitir el ()
const double = (a) => a * 2;
console.log(double(2));

//Return de un objeto
const createObject = () => ({ name: "John Doe" });

console.log(createObject());

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (n) {
  console.log(n);
});

numeros.forEach((n) => console.log(n));
