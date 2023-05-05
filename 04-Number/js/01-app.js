//Numeros van sin comillas
const numeroA = 20;
const numeroB = "20";

const numero1 = 20.2;
const numero2 = 0.2;
const numero3 = -20.2;

//Números como objeto
const numero4 = new Number(40);

//Operaciones
let resultado;

const n1 = 90;
const n2 = 8;
//Suma
resultado = (2 + 3) * 7;
resultado = n1 + n2;
//Resta
resultado = n1 - n2;
//Multiplicación
resultado = n1 * n2;
//División
resultado = n1 / n2;
//Modulo
resultado = n1 % n2;
console.log(resultado);

const horaModulo = 120;
const horasDia = 7;
const horasSueltas = horaModulo % horasDia;
let diasCompletosModulo = (horaModulo - horasSueltas) / horasDia;
const salidaTexto = `<h1>Dias módulo completos ${diasCompletosModulo}</h1>
                     <h2>Un día de ${horasSueltas} horas</h2>`;
document.write(salidaTexto);
