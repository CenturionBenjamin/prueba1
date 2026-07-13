/*let edad = prompt("¿Cuál es tu edad?");
if (edad >= 18) {
    console.log("Puedes ingresar a la página.");
} else {
    console.log("No eres mayor de edad.");
}
*/
/*
let genero = prompt("¿Cuál es tu género?" ("masculino" o "femenino"));

if (genero == "masculino") {
    alert("Eres un hombre.");
} else if (genero == "femenino") {
    alert("Eres una mujer.");
}
*/
/*
let edad = prompt("¿Cuál es tu edad?");
let nombre = prompt("¿Cuál es tu nombre?");

if (edad >= 18 && nombre == "benjamin") {
    alert("usted es un genio");
} else if (edad >= 18 && nombre != "benjamin") {
    alert("usted es mayor de edad");
} else if (edad < 18 && nombre == "benjamin") {
    alert("usted es un genio pero no es mayor de edad");
*/
/*
let l1 = parseInt(prompt("ingrese un lado"));
let l2 = parseInt(prompt("ingrese un lado"));
let l3 = parseInt(prompt("ingrese un lado"));
if (l1==l2 && l2==l3);{ 
   alert("el triangulo es equilatero"); 
}else if(l1 == l2 || l2 == l3 || l1 == l3); {
    alert("el triangulo es isoceles")
}else if(l1 != l2 && l2 != l3) {
    alert("el triangulo es escaleno")
}
*/
//practtica 2
let n1 = parseInt(prompt("ingrese un numero"));
let n2 = parseInt(prompt("ingrese un numero"));
let n3 = parseInt(prompt("ingrese un numero"));

if (n1 > n2 && n1 > n3 ){ 
   alert("el primer numero que ingreso es el mas grande" + n1); 
}else if(n2 > n1 && n2 > n3 ) {
    alert("el segundo numero que ingreso es el mas grande" + n2)
}else{
    alert("el tercer nujmero que ingreso es el mas grande" + n3)
}

