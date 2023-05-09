const product1 = {
  nameProduct: "Ratón usb",
  price: 200,
  available: false,
  discount: "20%",
};

const size = {
  h: 1,
  w: 23,
};

//const result = Object.assign(product1, size);
//console.log(result);
//Copiar un objeto
//console.log(producto1)
// const productoCopia = product1;
// console.log(productoCopia)
// productoCopia.nameProduct = "Teclado bluetooth"
// console.log(productoCopia)
// console.log(product1)
// //Copiar objetos
// // 1
// const copy1 = structuredClone(producto1)
// // 2
// const copy2 = { ...producto1 }
// // 3
// const copy3 = Object.assign({}, producto1)

//No hemos visto funciones pero spoiler de método
const productX = {
  nameProduct: "Ratón usb",
  price: 200,
  available: false,
  discount: "20%",
  showInfo: function () {
    return `El producto: ${this.nameProduct} tiene un 
      precio de ${this.price}`;
  },
};

const txtInfo = productX.showInfo();
console.log(txtInfo);

//Obtener información de un objeto
console.log(Object.keys(productX));
console.log(Object.values(productX));
console.log(Object.entries(productX));
