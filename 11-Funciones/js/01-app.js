//Funciones
//Declaracion de la funcion (Se puede llamar antes de su declaración)
saludar();
function saludar(){
    document.write("<h1>Hola Caracola...</h1>")
}

//Se llama a la funcion
saludar();
//Con parametros 
function saludar2(p1, p2 = "Hola"){
    const nombre = p1;
    document.write("<h1>"+p2+" " + nombre +"...</h1>")
}
//console.log(p1);
const nombre = "Canario" //prompt("Te saludare si le das aceptar")
saludar2(nombre,"Hasta luego");
saludar2("Juli")

//Valor de retorno
function suma(n1, n2){
    if(isNaN(parseFloat(n1)) && isNaN(parseFloat(n1))){
        return "No puedo convertir el numero"; 
    }
    const res = n1 + n2;
    return res;
}

console.log(suma('a',6))


const calculadora = {
    sumar: function (n1, n2){
        return n1+n2;
    }
}
//Crear los métodos que faltan para la calculadora
