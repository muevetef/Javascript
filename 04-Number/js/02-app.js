//Math es parte del objeto global window
let res;

//Pi
res = Math.PI;
//Redondeo
res = Math.round(2.5);
//Redondeo al arriba o abajo
res = Math.floor(2.8);
res = Math.ceil(2.2);
//Raiz cuadrada
res = Math.sqrt(2);

// res = 1/0; Error, da Infifnity
res = Math.abs(-8);
//Potencia
res = Math.pow(3, 8);
res = Math.min(2,3,4,7,-3);
res = Math.max(2,3,4,7,-3);
//Aleatorio
res = Math.random()
res = Math.round(Math.random() *30) + 1;
console.log(res);

//Operadores increpento
let puntos = 5;
puntos = puntos + 1;
puntos++;
++puntos;
puntos--;
--puntos;
puntos = puntos + 22;
puntos += 22;
puntos -= 34;
puntos *= 2;
console.log("Puntos: " + puntos);

