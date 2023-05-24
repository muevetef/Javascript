const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//Queremos un nuevo array con los numeros pares

//Funcionalidad del método filter enmulada como funcion
function filter(_arr, callback) {
  const arr = [];
  let j = 0;
  for (let i = 0; i < _arr.length; i++) {
    if (callback(_arr[i])) {
      arr[j] = _arr[i];
      j++;
    }
  }
  return arr;
}

const array0 = filter(numbers, function (n) {
  return n % 2 === 0;
});

console.log(array0);

//Con foreach
const numerosPares = [];
numbers.forEach((numero) => {
  if (numero % 2 === 0) {
    numerosPares.push(numero);
  }
});
//console.log(numerosPares);
//Con Filter
const numerosPares2 = numbers.filter(function (numero) {
  return numero % 2 === 0; //Debe devolver true o false
});
console.log(numerosPares2);

//Sintaxis abreviada
const numerosPares3 = numbers.filter((n) => !(n % 2));

const companies = [
  {
    name: "Company 0",
    categoria: "Finance",
    start: 1980,
    end: 2023 
  },
  { name: "Company 1", categoria: "Retail", start: 1992, end: 1999 },
  { name: "Company 2", categoria: "Auto", start: 1999, end: 2020 },
  { name: "Company 3", categoria: "Technolgy", start: 1982, end: 2023 },
  { name: "Company 4", categoria: "Finance", start: 1976, end: 2021 },
  { name: "Company 5", categoria: "Retail", start: 2001, end: 2005 },
  { name: "Company 6", categoria: "Auto", start: 1920, end: 1967 },
  { name: "Company 7", categoria: "Technolgy", start: 1968, end: 2017 },
  { name: "Company 8", categoria: "Auto", start: 2004, end: 2023 },
];

//Obtener un array nuevo con solo las compañias de categoria Retail
const retailCompanies = companies.filter(function (company){
    return company.categoria === "Retail"
})
//Con Arrow fucntion
const autoCompanies = companies.filter( company => company.categoria === "Auto")
//Obtener las compañias que empezaron a partir de 1982 inclusive
//y posteriores y cerraron antes del 2005

const yearCompanies = companies.filter(function (company){
  return company.start >= 1982 && company.start < 2005
})
//Obtener las compañias que tienen 10 años o más de actividad
const moreTenActive = companies.filter(function (company){
  return (company.end - company.start) >= 10
})