//Iterar a traves de objetos
const colorObject = {
    color1: 'red',
    color2: 'green',
    color3: 'blue',
    color4: 'orange'
}


for(const key in colorObject){
    console.log(key, colorObject[key]);
}

//Iterar Array
const colorArray = ['red', 'green', 'blue', 'orange']
for(const key in colorArray){
    console.log(colorArray[key])
}