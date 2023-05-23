const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]
//Queremos un nuevo array con los numeros pares


//Con foreach
const numerosPares = [];
numbers.forEach((numero) => {
    if(numero % 2 === 0){
        numerosPares.push(numero);
    }
})
//console.log(numerosPares);
//Con Filter
const numerosPares2 = numbers.filter(function (numero){
    return numero % 2 === 0 //Debe devolver true o false
})
console.log(numerosPares2);

//Sintaxis abreviada
const numerosPares3 = numbers.filter(n => !(n % 2));

const companies = [
    {name: "Company 1", categoria:"Finance", start:1980 , end:2023},
    {name: "Company 1", categoria:"Retail", start:1992, end:1999},
    {name: "Company 1", categoria:"Auto", start:1999 , end:2020},
    {name: "Company 1", categoria:"Technolgy", start:1982 , end:2023},
    {name: "Company 1", categoria:"Finance", start:1976 , end:2021},
    {name: "Company 1", categoria:"Retail", start:2001 , end:2005},
    {name: "Company 1", categoria:"Auto", start:1920 , end:1967},
    {name: "Company 1", categoria:"Tectonogy", start:1968 , end:2017},
    {name: "Company 1", categoria:"Auto", start:2004, end:2023},
]

//Obtener un array nuevo con solo las companyias de categoria Retail

//Obtener las compañias que empezaron a partir de 1982 inclusive 
//y posteriores y cerraron antes del 2005

//Obtener las compañias que tienen 10 años o más de actividad

