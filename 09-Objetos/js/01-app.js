//En Javascript todo són objetos
const nameProduct = "Monitor 20 "
const price = 300
const available = true

//Podemos usar objetos para agrupar la informacion en una
//en una sola variable
const product1 = {
  //Se conoce como objeto como literal
  //Propiedades
  nameProduct: "Ratón usb",
  price: 200,
  available: false
}
console.log(nameProduct);
//Acceder a propiedes de un objeto
console.log(product1.nameProduct);
console.log(product1.price);
console.log(product1.available);

//Otra forma de aceder a las propiedades
console.log(product1['nameProduct']);

//Podemos modificar el valor de las propiedades
product1.price = 90
console.log(product1);

//Podemos crear propiedades nuevas
product1.image = "imagen.jpg"
console.log(product1);
//Como eliminarla
delete product1.nameProduct;
console.log(product1);