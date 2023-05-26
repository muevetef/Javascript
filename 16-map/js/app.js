//Metodo de array map
const numbers = [1,2,3,4,5,6,7,8,9,10];
  
//const numbersDouble = [];
// for(let i=0;i<numbers.length;i++){
//   numbersDouble[i] = numbers[i] * 2; 
// }

//con foreach
// const numbersDouble = [];
// numbers.forEach((number) => {
//   numbersDouble.push(number * 2);
// })

//Con map
const numbersDouble = numbers.map((number) => {
  return "Numeros doblados " + number * 2
})


const companies = [
  {name: "Company 0",  category: "Finance",start: 1980,end: 2023 },
  { name: "Company 1", category: "Retail", start: 1992, end: 1999 },
  { name: "Company 2", category: "Auto", start: 1999, end: 2020 },
  { name: "Company 3", category: "Technolgy", start: 1982, end: 2023 },
  { name: "Company 4", category: "Finance", start: 1976, end: 2021 },
  { name: "Company 5", category: "Retail", start: 2001, end: 2005 },
  { name: "Company 6", category: "Auto", start: 1920, end: 1967 },
  { name: "Company 7", category: "Technolgy", start: 1968, end: 2017 },
  { name: "Company 8", category: "Auto", start: 2004, end: 2023 },
];

//Crear un array de nombres de las compañias
const companyNames = companies.map((company)=>company.name)
console.log(companyNames);
//Crear un array de objetos 
//con solo los monbres de las companyias y las categorias
const companyInfo = companies.map((company)=>{
  return {
    nombre: company.name,
    categoria: company.category
  }
})
console.log("Array co la informacion de las compañias: ",
           companyInfo);
//Crear un array de objetos con el nombre 
//y el tiempo de actividad en años 

const companyActivityYears = companies.map((company)=>{
  return {
    nombre: company.name,
    activityTime: company.end - company.start + ' años'
  }
})

console.log("Array con el tiempo de actividad de la compañia ",
          companyActivityYears);
//Ordenar por tiempo de actividad de menor a mayor
//...

//Encadenar métodos
const squareAndDouble = numbers
                        .map((number) => Math.sqrt(number))
                        .map((sqrt) => sqrt * 2);

const squareAndDouble2 = numbers
                        .map((number) => Math.sqrt(number))
                        .map((sqrt) => sqrt * 2)
                        .map((sqrtDoubled)=>{
                          return sqrtDoubled * 3;
                        })

//Encadenar todos diferentes
const numerosPares = numbers
                     .filter(number => number % 2 === 0)
                     .map((sqrt) => sqrt * 2)

                       