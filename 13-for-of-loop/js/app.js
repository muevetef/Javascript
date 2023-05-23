//Iterando a través de Arrays
const items = ['libro', 'mesa', 'silla', 'Lápiz'];
const usuarios = [{nombre: 'Luis'},{nombre: 'Juan'},{nombre: 'Raquel'}];

// for (let i = 0; i < items.length; i++) {
//     const item = items[i];    
// }

for(const item of items){
    console.log(item);
}

for(const usuario of usuarios){
    console.log(usuario.nombre);
}

//Iterar a traves de strings
const str = "Hello World";
for(const letra of str){
    console.log(letra);
}

//Investigar Map y Set
