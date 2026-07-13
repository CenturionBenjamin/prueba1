let boton = document.getElementById("btnsaludar");
boton.addEventListener("click", saludar);
boton.addEventListener("mousemove", color);

function saludar() {
    alert("hola");
}

function color() {
    boton.style.backgroundColor = "lightblue";
}

let cajadetexto = document.getElementById("txtEntrada")
cajadetexto.addEventListener("change", saludar)