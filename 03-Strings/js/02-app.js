//Algunos métodos de los String
let producto = "Monitor 20 pulgadas";
let precio = "30 USD";
console.log(precio.length);

console.log(producto.indexOf("20"));//Nos dirá la posición si existe o -1

console.log(producto.includes("Monitot"));

//Unir cadenas de texto -> concatenar
console.log(producto.concat(" en descuento."));
console.log(producto.concat(precio));

//Otras formas
console.log(producto + ' ' + precio);
producto = "Teclado molón";
precio = "2000 USD";
console.log("El producto "+ producto + " tiene un precio de: "+ precio);

//Template strings
console.log(`El producto ${producto.toUpperCase()},
            tiene un precio
            de: ${precio.toLowerCase()}`)

            //convertir el texo a MAYUSCULA
//Otros métodos de String
let producto2 = "        Monitor 20 pulgadas";
console.log(producto2.length)
// const proTrimmed = producto2.trimStart();
console.log(producto2.trimStart().length);