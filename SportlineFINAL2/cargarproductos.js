import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

let productos = [];

async function cargar() {
    const boxproductos = document.getElementById("boxproductos");

    try {
        const snapshot = await getDocs(collection(db, "productos"));
        productos = snapshot.docs.map(documento => {
            const datos = documento.data();
            return {
                ...datos,
                id: datos.id ?? documento.id,
                firestoreId: documento.id,
                precio: Number(datos.precio),
                stock: Number(datos.stock)
            };
        });

        boxproductos.innerHTML = "";

        if (productos.length === 0) {
            boxproductos.textContent = "Todavía no hay vehículos cargados.";
            return;
        }

        for (const producto of productos) {
            const card = document.createElement("article");
            card.className = "boxproducto";
            const precio = Number.isFinite(producto.precio)
                ? `$ ${producto.precio.toLocaleString("es-AR")}`
                : "Consultar precio";

            card.innerHTML = `
                <img src="${window.escaparHTML(producto.imagen)}" alt="${window.escaparHTML(producto.nombre)}">
                <div class="boxproducto-body">
                    <span class="boxproducto-etiqueta">SPORTLINE</span>
                    <p class="boxproducto-nombre">${window.escaparHTML(producto.nombre)}</p>
                    <p class="boxproducto-descripcion">${window.escaparHTML(producto.descripcion)}</p>
                    <p class="boxproducto-precio">${precio}</p>
                    <p class="boxproducto-stock">Disponibilidad: <span>${Number.isFinite(producto.stock) ? producto.stock : 0} unidades</span></p>
                    <button class="btn-detalle" type="button">Ver detalle</button>
                </div>
            `;

            card.querySelector(".btn-detalle").addEventListener("click", () => verDetalle(producto));
            boxproductos.appendChild(card);
        }
    } catch (error) {
        console.error("Error al cargar los vehículos desde Firebase:", error);
        boxproductos.textContent = "No se pudieron cargar los vehículos. Revisá la conexión con Firebase y las reglas de Firestore.";
    }
}

function verDetalle(producto) {
    if (!window.guardarJSONLocalStorage("producto", producto)) return;
    window.location.href = "detalle.html";
}

cargar();
