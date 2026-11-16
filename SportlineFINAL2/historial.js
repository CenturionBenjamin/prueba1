function cargarHistorial() {
    const historial = window.leerJSONLocalStorage("historialCompras", []);
    const lista = document.getElementById("listaHistorial");
    lista.innerHTML = "";

    if (historial.length === 0) {
        lista.innerHTML = `
            <div class="carrito-vacio">
                <p class="carrito-icono">📋</p>
                <p>Todavía no realizaste compras desde este navegador.</p>
                <a href="index.html">Ver vehículos</a>
            </div>
        `;
        return;
    }

    const comprasRecientes = [...historial].reverse();
    for (const compra of comprasRecientes) {
        const tarjeta = document.createElement("article");
        tarjeta.className = "historial-compra";

        const filasProductos = (compra.productos || []).map(producto => `
            <div class="historial-producto">
                <span>${window.escaparHTML(producto.nombre)} x ${Number(producto.cantidad) || 0}</span>
                <span>$ ${((Number(producto.precio) || 0) * (Number(producto.cantidad) || 0)).toLocaleString("es-AR")}</span>
            </div>
        `).join("");

        tarjeta.innerHTML = `
            <div class="historial-cabecera">
                <div>
                    <p class="historial-numero">Compra #${window.escaparHTML(compra.numero)}</p>
                    <p class="historial-fecha">${window.escaparHTML(compra.fecha)}</p>
                </div>
                <span class="historial-estado">Realizada</span>
            </div>
            <div class="historial-productos">${filasProductos}</div>
            <div class="historial-total">
                <span>${Number(compra.cantidad) || 0} unidades</span>
                <strong>Total: $ ${(Number(compra.total) || 0).toLocaleString("es-AR")}</strong>
            </div>
        `;
        lista.appendChild(tarjeta);
    }
}

cargarHistorial();
