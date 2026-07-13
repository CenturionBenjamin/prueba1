/*let condition = true;
while (condition) {
    let alumno = prompt("igrese el nombre del alumno")
    let asistencio = prompt("igrese 0 ausente 1 prsente 2 no preguntar mas")
    if (asistencia==0){
        console.log(alumno + "ausente")
    }else if (asistencia==1)
        
}
let numero1=0;
let numero2=0;

function calcular(parametro) {
    if (numero1=="0") {
        numero1 = parametro
    } else {        
        numero2 = parametro
    }
} 
function sumar() {
    alert(numero1+numero2)
}
*/
/*
for (let i = 0; i < 10; i= i + 1) {
    console.log(i * 3)
}
*/
/*
let numero = parseInt(prompt("ingrese un numero"))
for (let i = 0; i <= 100; i= i + 1) {
    console.log(numero * i)
}
*/
/*
let notatotal = 0;
let promedio = 0;
for(let i = 0; i <= 5; i= i + 1) {
     let alumno = prompt("igrese el nombre del alumno")
    let nota = parseInt(prompt("igrese su nota"))
    notatotal= notatotal + nota; //acumulador
    if (nota>=7){
        console.log(alumno + ": esta aprobado")
    }else if (nota<7){
        console.log(alumno + ": esta desaprobado")
    }
    if (i==4){
        promedio = notatotal / 5
        console.log("el promedio de la clase es: " + promedio)
    }
} 
*/
/*
let nmbre;
let asistencia;

while (asistencia !="f") {
    nombre = prompt("ingrese el nombre del alumno")
    asistencia = prompt("ingrese 1 para presente, 0 para ausente y f para finalizar")
   if (asistencia=="1") {
        console.log(nombre + " : esta presente")
   } else if (asistencia=="0") {
        console.log(nombre + " : esta ausente")
   }
}
*/

// pedir al ussuario un numero entre el 1 y el 10 yo elijo un numero al azar entre el 1 y el 10 y le digo si gano o perdio
for (let i = 0; i <= 3; i= i++) {
let numeroUsuario = parseInt(prompt("ingrese un numero entre el 1 y el 10"))
let numeroAlAzar = 5;
if (numeroUsuario == numeroAlAzar) {
    alert("ganaste, el numero era: " + numeroAlAzar);
    break
} else if (numeroUsuario != numeroAlAzar) {
    alert("perdiste")
}
}