//Añadir y quitar elementos de un array
const carrito = [];

const p1 = {
    nombre: "Arroz",
    precio: 12
}

const p2 = {
    nombre: "Huevos",
    precio: 1
}

//Quiero añadir p1
// carrito[0] = p1
// carrito[1] = p1
// carrito[carrito.length-1] = p2
carrito.push(p1)
carrito.push(p2)

const p3 = {
    nombre: "Tomates",
    precio:5
}
carrito.unshift(p3)//Añade al inicio
carrito.pop();//Quita el ultimo elemento
carrito.shift();//Quita el primer elemento

//Compramos otra vez
const p4 = {
    nombre: "Café",
    precio:5
}

carrito.push(p1)
carrito.push(p2)
carrito.push(p1)
carrito.push(p2)
//Queremos insertar el p4 en la tercera
//posición del array (indice 2)
carrito.splice(2, 0, p4)
console.log(carrito);

