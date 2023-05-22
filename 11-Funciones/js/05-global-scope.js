//'window' tiene scope (ámbito) Global
//alert()
//window.console.log();

//Ambito Global
const x = 100;

console.log(x, "En Global");

//Function scope
function run(){
  //Tenemos acceso al ambito global
  console.log(window.innerHeight);
  console.log(x, "En funcion");
}

run();

//Ambito de bloque
if(true){
  console.log(x, "En un bloque");
}

function add(){
  //Podemos sobreescribir una variable global
  const x = 1;
  const y = 50;
  console.log(x + y);
}
console.log(x);
add();