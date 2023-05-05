//convertir numeros
const num1 = "20";
const num2 = "20.3";
const num3 = "Uno";
const num4 = 20;

//String a numero
console.log(Number.parseInt(num1));
console.log(Number.parseFloat(num2));
console.log(Number.parseFloat(num3));

//Revisar si tenemos un numero
console.log(Number.isInteger(num4));
console.log(Number.isNaN(num2));