//Arrays
const numbers = [10, 20, 30, 40, 50]

//const meses = new Array('Enero', 'Febrero', 'Marzo')

//Los items de un Array pueden ser 
//cualquier tipo de dato y los podemos mezclar
const deTodo = ["Hola", 10, true, null, 
                {nombre:"Mario", trabajo:"Fontanero"},
               [1,2,3,4]
              ];
              console.log(deTodo);
console.log(deTodo[0]);
console.log(deTodo[4]);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre',
                'Diciembre'
                 ]
console.log(meses.length);
//Recorrer un array con un for
for(let i = 0; i < meses.length; i++){
    console.log(meses[i]);
    //Todo imprimir solo meses impares
}

//Acceder y modificar un item del array
meses[0] = {texto:"Enero Mola", dias: 31};
console.log(meses);