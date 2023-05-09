//Condicional if
/* if(condicion){
    if(otro){

    }
}if else(condicion2){

}i else(otramas)
{

}
else{

}*/
//Switch case
const metodoPago = "efectivo"; //Puede variar con la entrada del usuario
switch (metodoPago) {
  case "efectivo":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "tarjeta":
    console.log(`Pagaste con ${metodoPago}, conectando...`);
    break;
  case "bono":
    console.log(`Pagaste con ${metodoPago}, revisando puntos`);
    break;
  default:
    console.log("El metodo de pago ");
    break;
}
//Operadores booleanos
const user = false;
const canPay = true;

if (user && canPay) {
  console.log("Realizando tu pedido....");
} else {
  console.log("Hubo un error con el pago...");
}

//Si queremos dar info más concreta, me he extendido demasiado probablemente
if (user && canPay) {
  console.log("Realizando tu pedido....");
} else if (!user) {
  console.log("Comprueba tu nombre de usuario");
} else if (!canPay) {
  console.log("No tienes pasta chev@l!!");
} else {
  console.log("Ha habido un error con el pago...");
}

//Ejemplo OR
let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalCarrito = 350;

if (efectivo > totalCarrito || credito > totalCarrito) {
  console.log("Pudes pagar con efectivo o credito");
} else if (disponible >= totalCarrito) {
  console.log("Paga con ambos");
} else {
  console.log("Credito insuficiente");
}
