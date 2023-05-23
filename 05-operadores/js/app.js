//Operadores de comparacion
const num1 = 20;
const num2 = "20";
const num3 = 30;

console.log(num1 == num3);

const nt = 1234567890123456789012345678901234567890n;

//Diferencia igualdad flexible y estricta
//flexible (loose equality)
console.log(false == 0);//true
console.log('' == 0);//true
console.log(null == undefined);//true

//Estricta
console.log(false === 0);//false
console.log('' === 0);//false
console.log(null === undefined);//false

const player = null;

if(player != null){

}

if(!player){

}

//Operadores Logicos + precedencia de operadores
const a = 10 * 2 < 20 && 30 > 15 && Math.round(40.6) + 7 > 30;
20 < 20 && 30 > 15 && 40 + 7 > 30
20 < 20 && 30 > 15 && 47 > 30
false && true && true
false && true
false

let n;
n = 10 && 20;//20
n = 0 && 20;//0
n = 10 && 0 && 30;//0
console.log(typeof n);
n = 10 && '' && 0 && 30;


//or
let c;
c = 10 || 20;//10
c = 0 || 20;//20
c = 0 || null || '' || undefined;
c = null || ''
console.log(c);

//?? - Devuelve el operando de la derecha cuando el de la
//izquierda es null o undefined
c = 10 ?? 20;//10
c = null ?? 20;//20
c = undefined ?? 30;//30
c = 0 ?? 30;//0
c = '' ?? 30;//''
console.log(c);

//Más cosas raras de ES6
let g = null;
 if(!g){
    g=10;
 }
 g = g || 10;

 g ||= 10;

 console.log(g);

 let t = 10;
 if(t){
    t = 20;
 }
t = t && 20;

t &&= 20;

//??=
let z = null;
if(z === null || z === undefined){
    z = 20;
}

z = z ?? 20;

z ??= 20;
