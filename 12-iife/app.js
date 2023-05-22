(function () {
  const user = "Pepe";
  console.log(user);
  const saludar = () => console.log("Hello desde una IIFE");
  saludar();
})();

(function (nombre) {
  console.log("Hola " + nombre);
})("Mundo");

function saludarMucho(nombre){
    alert(nombre);
    saludarMucho(nombre);
}
saludarMucho("Joaquin")