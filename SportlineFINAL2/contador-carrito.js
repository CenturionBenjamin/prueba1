// Muestra la cantidad total de unidades guardadas en el carrito.
function actualizarContadorCarrito() {
    const carrito = window.leerJSONLocalStorage("carrito", []);
    let cantidad = 0;

    for (const item of carrito) {
        cantidad += Number(item.cantidad) || 0;
    }

    const contador = document.getElementById("contadorCarrito");
    if (contador) {
        contador.textContent = cantidad;
        contador.hidden = cantidad === 0;
    }
}

actualizarContadorCarrito();
