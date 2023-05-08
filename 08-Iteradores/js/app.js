//while loop
// while(true){
//     alert("Salir de la página")
// }

//Siempr tiene que haber una forma de
//salir del loop
let i = 11;

while (i < 10) {
  console.log("Valor de i es " + i);
  i++;
}

//do While, almenos se ejecuta una vez
let z = 20;
do {
  console.log("Valor de z es " + z);
  z++;
} while (z < 10);

//Bucle for

for (let a = 0; a < 10; a += 2) {
  console.log("Nummero a:" + a);
}
console.log("El valor de i final es: " + a);
//Nota, al declarar la variable a con let, esta tiene hámbito local al
//bucle for por lo que no existe fuera de este.
