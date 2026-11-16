import { db, auth } from "./firebase-config.js";
import { collection, doc, runTransaction } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

function obtenerCarrito() {
    return window.leerJSONLocalStorage("carrito", []);
}

function cargarCarrito() {
    const carrito = obtenerCarrito();
    const lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";

    if (carrito.length === 0) {
        lista.innerHTML = `
            <div class="carrito-vacio">
                <p class="carrito-icono">🛒</p>
                <p>Tu carrito está vacío.</p>
                <a href="index.html">Ver vehículos</a>
            </div>
        `;
        actualizarResumen(carrito);
        actualizarContadorCarrito();
        return;
    }

    for (const item of carrito) {
        const precio = Number(item.precio) || 0;
        const cantidad = Number(item.cantidad) || 0;
        const div = document.createElement("article");
        div.className = "item-carrito";
        div.innerHTML = `
            <img src="${window.escaparHTML(item.imagen)}" alt="${window.escaparHTML(item.nombre)}">
            <div class="item-info">
                <p class="item-nombre">${window.escaparHTML(item.nombre)}</p>
                <p class="item-precio-unitario">$ ${precio.toLocaleString("es-AR")} por unidad</p>
                <p class="item-precio-total">$ ${(precio * cantidad).toLocaleString("es-AR")}</p>
            </div>
            <div class="item-controles">
                <button type="button" data-accion="restar" data-id="${window.escaparHTML(item.id)}" aria-label="Quitar una unidad">&#8722;</button>
                <span class="item-cantidad">${cantidad}</span>
                <button type="button" data-accion="sumar" data-id="${window.escaparHTML(item.id)}" aria-label="Agregar una unidad">&#43;</button>
            </div>
            <button class="btn-eliminar" type="button" data-accion="eliminar" data-id="${window.escaparHTML(item.id)}" title="Eliminar vehículo" aria-label="Eliminar ${window.escaparHTML(item.nombre)}">&#10005;</button>
        `;
        lista.appendChild(div);
    }

    actualizarResumen(carrito);
    actualizarContadorCarrito();
}

function cambiarCantidad(idProducto, delta) {
    const carrito = obtenerCarrito();
    const indice = carrito.findIndex(item => String(item.id) === String(idProducto));
    if (indice === -1) return;

    const nuevaCantidad = Number(carrito[indice].cantidad) + delta;
    if (nuevaCantidad <= 0) {
        carrito.splice(indice, 1);
    } else if (nuevaCantidad <= Number(carrito[indice].stock)) {
        carrito[indice].cantidad = nuevaCantidad;
    } else {
        window.mostrarMensaje("No hay más unidades disponibles de este vehículo.", "error");
        return;
    }

    if (window.guardarJSONLocalStorage("carrito", carrito)) cargarCarrito();
}

function eliminarItem(idProducto) {
    const carrito = obtenerCarrito().filter(item => String(item.id) !== String(idProducto));
    if (window.guardarJSONLocalStorage("carrito", carrito)) cargarCarrito();
}

function actualizarResumen(carrito) {
    let totalCantidad = 0;
    let totalPrecio = 0;

    for (const item of carrito) {
        totalCantidad += Number(item.cantidad) || 0;
        totalPrecio += (Number(item.precio) || 0) * (Number(item.cantidad) || 0);
    }

    document.getElementById("resumenCantidad").textContent = `${totalCantidad} unid.`;
    document.getElementById("resumenSubtotal").textContent = `$ ${totalPrecio.toLocaleString("es-AR")}`;
    document.getElementById("resumenTotal").textContent = `$ ${totalPrecio.toLocaleString("es-AR")}`;
}

function esperarUsuario() {
    return new Promise(resolve => {
        let cancelarEscucha = () => {};
        cancelarEscucha = onAuthStateChanged(auth, usuario => {
            cancelarEscucha();
            resolve(usuario);
        });
    });
}

async function descontarStockEnFirebase(carrito) {
    const cantidades = new Map();

    for (const item of carrito) {
        const idDocumento = item.firestoreId || item.id;
        const cantidad = Number(item.cantidad);
        if (!idDocumento || !Number.isInteger(cantidad) || cantidad <= 0) {
            throw new Error("Hay un producto del carrito con datos incompletos. Quitalo y agregalo nuevamente desde el catálogo.");
        }
        cantidades.set(idDocumento, (cantidades.get(idDocumento) || 0) + cantidad);
    }

    await runTransaction(db, async transaccion => {
        const documentos = [];

        // Primero se leen todos los documentos y después se escriben, como requiere Firestore.
        for (const [idDocumento, cantidad] of cantidades.entries()) {
            const referencia = doc(collection(db, "productos"), idDocumento);
            const documento = await transaccion.get(referencia);

            if (!documento.exists()) {
                throw new Error("Uno de los vehículos ya no está disponible en el catálogo.");
            }

            const stockActual = Number(documento.data().stock);
            if (!Number.isInteger(stockActual) || stockActual < cantidad) {
                throw new Error(`No hay stock suficiente para ${documento.data().nombre || "uno de los vehículos"}. Actualizá el carrito e intentá nuevamente.`);
            }

            documentos.push({ referencia, stockNuevo: stockActual - cantidad });
        }

        for (const documento of documentos) {
            transaccion.update(documento.referencia, { stock: documento.stockNuevo });
        }
    });
}

async function finalizarCompra() {
    const carrito = obtenerCarrito();
    if (carrito.length === 0) {
        window.mostrarMensaje("Tu carrito está vacío.", "error");
        return;
    }

    const usuario = await esperarUsuario();
    if (!usuario) {
        window.mostrarMensaje("Para confirmar una compra, primero tenés que ingresar o crear una cuenta.", "error");
        return;
    }

    let total = 0;
    let cantidad = 0;
    for (const item of carrito) {
        total += (Number(item.precio) || 0) * (Number(item.cantidad) || 0);
        cantidad += Number(item.cantidad) || 0;
    }

    const confirmado = await window.confirmarAccion(
        "Confirmar compra",
        `Vas a confirmar ${cantidad} unidad(es) por un total de $ ${total.toLocaleString("es-AR")}. ¿Deseás continuar?`,
        "Confirmar compra"
    );
    if (!confirmado) return;

    const boton = document.getElementById("btnFinalizarCompra");
    boton.disabled = true;
    boton.textContent = "Procesando...";

    try {
        await descontarStockEnFirebase(carrito);

        const historial = window.leerJSONLocalStorage("historialCompras", []);
        historial.push({
            numero: Date.now(),
            fecha: new Date().toLocaleString("es-AR"),
            productos: carrito,
            cantidad,
            total,
            usuario: usuario.email || "Usuario registrado"
        });

        const historialGuardado = window.guardarJSONLocalStorage("historialCompras", historial);
        window.eliminarLocalStorage("carrito");
        cargarCarrito();

        if (historialGuardado) {
            window.mostrarMensaje("¡Compra confirmada! El stock se actualizó en Firebase y la compra quedó en tu historial local.", "success");
        } else {
            window.mostrarMensaje("La compra se confirmó y el stock se actualizó en Firebase, pero no se pudo guardar el historial en este navegador.", "error");
        }
    } catch (error) {
        console.error("No se pudo confirmar la compra:", error);
        if (error.code === "permission-denied") {
            window.mostrarMensaje("Firebase rechazó la operación. Verificá que estés conectado y que las reglas de Firestore estén actualizadas.", "error");
        } else {
            window.mostrarMensaje(error.message || "No se pudo confirmar la compra. Intentá nuevamente.", "error");
        }
    } finally {
        boton.disabled = false;
        boton.textContent = "Finalizar compra";
    }
}

const lista = document.getElementById("listaCarrito");
lista.addEventListener("click", evento => {
    const boton = evento.target.closest("button[data-accion]");
    if (!boton) return;

    const id = boton.dataset.id;
    if (boton.dataset.accion === "sumar") cambiarCantidad(id, 1);
    if (boton.dataset.accion === "restar") cambiarCantidad(id, -1);
    if (boton.dataset.accion === "eliminar") eliminarItem(id);
});

document.getElementById("btnFinalizarCompra").addEventListener("click", finalizarCompra);
cargarCarrito();
