//Condicionales

const tengoSed = false;
const edad = 15;
//Quiero imprimir voy a beber si tengo sed

if(edad >= 18){
    console.log("Carné de coche");
}else if(edad >= 16){
    console.log("Carné de Moto");
}else{
    console.log("No hay carnés para ti");
}

//Ejercicio
//Pedir con un promt la nota de un exámen y que imprima
//en consola el valor en texto de la nota
//Avisar con un alert si no es un nnumero
//no Puede haber notas negativas y tampoco > 10

//Investgigacion: convertir el if else anterior a la estructura 
//switch case

// Pedir la nota del examen al usuario
let nota = prompt("Introduce la nota del examen:");

// Convertir la nota a un número
nota = parseFloat(nota);

// Verificar si la nota es un número válido
if (isNaN(nota)) {
  alert("La nota introducida no es un número válido.");
} else {
  // Verificar si la nota está en el rango permitido
  if (nota < 0 || nota > 10) {
    alert("La nota introducida no está en el rango permitido.");
  } else {
    // Convertir la nota a texto usando switch case
    let notaTexto;
    switch (Math.round(nota)) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        notaTexto = "Suspenso";
        break;
      case 5:
        notaTexto = "Aprobado";
        break;
      case 6:
        notaTexto = "Bien";
        break;
      case 7:
      case 8:
        notaTexto = "Notable";
        break;
      case 9:
      case 10:
        notaTexto = "Sobresaliente";
        break;
    }
    // Imprimir la nota en texto en la consola
    console.log(`La nota ${nota} equivale a "${notaTexto}".`);
  }
}

