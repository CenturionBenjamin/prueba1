let cantidadSeleccionada = 0;
let productoActual = null;

function cargar() {
    const producto = window.leerJSONLocalStorage("producto", null);

    if (!producto || typeof producto !== "object") {
        window.location.href = "index.html";
        return;
    }

    productoActual = {
        ...producto,
        precio: Number(producto.precio),
        stock: Number(producto.stock)
    };

    if (!Number.isFinite(productoActual.precio) || !Number.isInteger(productoActual.stock) || productoActual.stock < 0) {
        window.mostrarMensaje("Los datos de este vehículo no son válidos. Volvé al catálogo.", "error");
        return;
    }

    const contenedor = document.createElement("section");
    contenedor.className = "detalle-container";
    contenedor.innerHTML = `
        <div class="detalle-imagen">
            <img src="${window.escaparHTML(productoActual.imagen)}" alt="${window.escaparHTML(productoActual.nombre)}">
        </div>
        <div class="detalle-info">
            <span class="detalle-etiqueta">AGENCIA SPORTLINE</span>
            <h2 class="detalle-nombre">${window.escaparHTML(productoActual.nombre)}</h2>
            <p class="detalle-descripcion">${window.escaparHTML(productoActual.descripcion)}</p>
            <p class="detalle-precio">$ ${productoActual.precio.toLocaleString("es-AR")}</p>
            <p class="detalle-stock">Disponibilidad: <span>${productoActual.stock} unidades</span></p>
            <div class="boxcontador">
                <button class="btn-contador" id="restarUnidad" type="button" aria-label="Quitar una unidad">&#8722;</button>
                <p id="contador" aria-live="polite">0</p>
                <button class="btn-contador" id="sumarUnidad" type="button" aria-label="Agregar una unidad">&#43;</button>
            </div>
            <button class="btn-agregar" id="agregarCarrito" type="button">Agregar al carrito</button>
        </div>
    `;

    document.getElementById("boxproductos").appendChild(contenedor);
    document.getElementById("sumarUnidad").addEventListener("click", sumar);
    document.getElementById("restarUnidad").addEventListener("click", restar);
    document.getElementById("agregarCarrito").addEventListener("click", agregarAlCarrito);
}

function actualizarContador() {
    document.getElementById("contador").textContent = cantidadSeleccionada;
}

function sumar() {
    if (cantidadSeleccionada < productoActual.stock) {
        cantidadSeleccionada++;
        actualizarContador();
    } else {
        window.mostrarMensaje("No hay más unidades disponibles de este vehículo.", "error");
    }
}

function restar() {
    if (cantidadSeleccionada > 0) {
        cantidadSeleccionada--;
        actualizarContador();
    }
}

function agregarAlCarrito() {
    if (cantidadSeleccionada === 0) {
        window.mostrarMensaje("Seleccioná al menos una unidad.", "error");
        return;
    }

    const carrito = window.leerJSONLocalStorage("carrito", []);
    const indiceExistente = carrito.findIndex(item => String(item.id) === String(productoActual.id));

    if (indiceExistente !== -1) {
        const nuevaCantidad = Number(carrito[indiceExistente].cantidad) + cantidadSeleccionada;
        if (nuevaCantidad > productoActual.stock) {
            window.mostrarMensaje("La cantidad seleccionada supera la disponibilidad.", "error");
            return;
        }
        carrito[indiceExistente].cantidad = nuevaCantidad;
        carrito[indiceExistente].stock = productoActual.stock;
        carrito[indiceExistente].firestoreId = productoActual.firestoreId;
    } else {
        carrito.push({
            id: productoActual.id,
            firestoreId: productoActual.firestoreId,
            nombre: productoActual.nombre,
            imagen: productoActual.imagen,
            precio: productoActual.precio,
            stock: productoActual.stock,
            cantidad: cantidadSeleccionada
        });
    }

    if (window.guardarJSONLocalStorage("carrito", carrito)) {
        window.location.href = "carrito.html";
    }
}

cargar();
