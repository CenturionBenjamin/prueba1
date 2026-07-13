let letra;
let nombre;
let cosas;
let animales;
let lugares;
let frutas;
let colores;
let puntos;

const ingresar= () => {
    letras = document.getElementById("inpletra").value;
    nombre = document.getElementById("inpnombre").value;
    cosas = document.getElementById("inpcosas").value;
    animales = document.getElementById("inpanimales").value;
    lugares = document.getElementById("inplugares").value;
    frutas = document.getElementById("inpfrutas").value;
    colores = document.getElementById("inpcolores").value;
    puntos = document.getElementById("inppuntos").value;
    let fila = document.createElement("tr")
    fila.innerHTML = `<th>${letras}</th>
                    <th>${nombre}</th>
                    <th>${cosas}</th>
                    <th>${animales}</th>
                    <th>${lugares}</th>
                    <th>${frutas}</th>
                    <th>${colores}</th>
                    <th>${puntos}</th>`
    filas.appendChild(fila)
}