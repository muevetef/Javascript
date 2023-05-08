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

//Operador ternario
const isRaining = true;

// let action = "";
// if(isRaining)
//   action="Me mojo";  
// else
//   action="Estoy seco";
let action = isRaining ? "Me mojo" : "Estoy seco";
console.log(action);



//Ejercicio
//Pedir con un promt la nota de un exámen y que imprima
//en consola el valor en texto de la nota
//Avisar con un alert si no es un nnumero
//no Puede haber notas negativas y tampoco > 10

//Investgigacion: convertir el if else anterior a la estructura 
//switch case

