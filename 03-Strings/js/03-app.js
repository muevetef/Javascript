 //.replace, .slice y .repeat

 const producto = "Monitor 20 pulgadas";
 console.log(producto.replace("20", "24"));

 //Extraer solo una parte de una cadena o substring
 console.log(producto.slice(8,10))
 console.log(producto.slice(0, 7))
 console.log(producto.slice(8))
 console.log(producto.slice(8,2))//si el primero es menor no corta hacia atras


 //Substring hace algo parecido a slice
 console.log(producto.substring(0,3))
 console.log(producto.substring(3,0))//Si corta hacia atrás

 const nombre = "Gerardo"
 //Solo imprimir la primera letra
 console.log(nombre.charAt(0));
 console.log(nombre.substring(0,1))

//Repetir cadena
const texto = " en Promoción ".repeat(10);
document.write(texto);
console.log(texto);

//Split
const portero = "Hay una señora rubia en la puerta con rizos"
console.log(portero.split(" "))
 
const hobbies = "Leer, caminar, escuchar música, escribir, aprender javascript"
console.log(hobbies.split(", "));