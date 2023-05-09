const product1 = {
  nameProduct: "Ratón usb",
  price: 200,
  available: false,
  discount: '20%'
}
//Extraer prodiedades de un objeto a una variable
const nombre = product1.nameProduct;

//Desestructurar un objeto
//const {nameProduct, price, discount} = product1;
// console.log(nameProduct)
// console.log(price)
// console.log(discount);

//Los objetos pueden contener cualquier cosa

const product2 = {
  nameProduct: "Ratón usb",
  price: 200,
  available: false,
  info: {
    weight: '10kg',
    size: {
      h: 12,
      w:2
    }
  }
}
console.log(product2.info.weight);
console.log(product2.info.weight.w);

//Desestructurar
const {nameProduct, price, info: { peso, medida}} = product2;

console.log(peso);

//Funciones de objetos raras pero existen
Object.freeze(product2)
product2.available =true;
//product2.image("foto.jpg");
console.log(Object.isFrozen(product2));
//Sellar el objeto puedo modifiacar valores, pero no añadir propiedades nuevas
Object.seal(product2);
//Verificar si està sellado
Object.isSealed(product2);
console.log(product2);