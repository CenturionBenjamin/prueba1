// Funciones compartidas para almacenamiento y mensajes de la página.
function leerJSONLocalStorage(clave, valorPorDefecto) {
    try {
        const contenido = localStorage.getItem(clave);
        return contenido ? JSON.parse(contenido) : valorPorDefecto;
    } catch (error) {
        console.error(`No se pudo leer ${clave} desde localStorage:`, error);
        mostrarMensaje("No se pudieron recuperar algunos datos guardados en este navegador.", "error");
        return valorPorDefecto;
    }
}

function guardarJSONLocalStorage(clave, valor) {
    try {
        localStorage.setItem(clave, JSON.stringify(valor));
        return true;
    } catch (error) {
        console.error(`No se pudo guardar ${clave} en localStorage:`, error);
        mostrarMensaje("No se pudieron guardar los datos. Revisá el espacio disponible del navegador.", "error");
        return false;
    }
}

function eliminarLocalStorage(clave) {
    try {
        localStorage.removeItem(clave);
        return true;
    } catch (error) {
        console.error(`No se pudo eliminar ${clave} de localStorage:`, error);
        mostrarMensaje("No se pudieron actualizar los datos guardados en este navegador.", "error");
        return false;
    }
}

function escaparHTML(valor) {
    return String(valor ?? "").replace(/[&<>"']/g, caracter => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[caracter]);
}

function mostrarMensaje(texto, tipo = "info") {
    let contenedor = document.getElementById("notificaciones");
    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.id = "notificaciones";
        contenedor.className = "notificaciones";
        contenedor.setAttribute("aria-live", "polite");
        document.body.appendChild(contenedor);
    }

    const aviso = document.createElement("div");
    aviso.className = `notificacion notificacion-${tipo}`;
    aviso.setAttribute("role", tipo === "error" ? "alert" : "status");
    aviso.textContent = texto;
    contenedor.appendChild(aviso);

    window.setTimeout(() => aviso.remove(), 5000);
}

function confirmarAccion(titulo, mensaje, textoBoton = "Confirmar") {
    return new Promise(resolve => {
        const dialogo = document.createElement("dialog");
        dialogo.className = "dialogo-confirmacion";

        const encabezado = document.createElement("h2");
        encabezado.textContent = titulo;
        const descripcion = document.createElement("p");
        descripcion.textContent = mensaje;
        const acciones = document.createElement("div");
        acciones.className = "dialogo-acciones";

        const cancelar = document.createElement("button");
        cancelar.type = "button";
        cancelar.className = "btn-secundario";
        cancelar.textContent = "Volver";
        const aceptar = document.createElement("button");
        aceptar.type = "button";
        aceptar.className = "btn-principal";
        aceptar.textContent = textoBoton;

        acciones.append(cancelar, aceptar);
        dialogo.append(encabezado, descripcion, acciones);
        document.body.appendChild(dialogo);

        let respondido = false;
        function cerrar(resultado) {
            if (respondido) return;
            respondido = true;
            if (dialogo.open) dialogo.close();
            dialogo.remove();
            resolve(resultado);
        }

        cancelar.addEventListener("click", () => cerrar(false));
        aceptar.addEventListener("click", () => cerrar(true));
        dialogo.addEventListener("cancel", evento => {
            evento.preventDefault();
            cerrar(false);
        });
        dialogo.addEventListener("click", evento => {
            if (evento.target === dialogo) cerrar(false);
        });

        dialogo.showModal();
    });
}

window.leerJSONLocalStorage = leerJSONLocalStorage;
window.guardarJSONLocalStorage = guardarJSONLocalStorage;
window.eliminarLocalStorage = eliminarLocalStorage;
window.escaparHTML = escaparHTML;
window.mostrarMensaje = mostrarMensaje;
window.confirmarAccion = confirmarAccion;
