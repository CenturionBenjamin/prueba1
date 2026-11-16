import { db } from "./firebase-config.js";
import { addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const formulario = document.getElementById("formContacto");
const botonEnviar = document.getElementById("btnEnviarConsulta");

formulario.addEventListener("submit", async evento => {
    evento.preventDefault();

    const datos = {
        nombre: document.getElementById("nombre").value.trim(),
        correo: document.getElementById("correo").value.trim(),
        telefono: document.getElementById("telefono").value.trim(),
        mensaje: document.getElementById("mensaje").value.trim()
    };

    if (datos.nombre.length < 2 || datos.mensaje.length < 10) {
        window.mostrarMensaje("Completá tu nombre y escribí un mensaje de al menos 10 caracteres.", "error");
        return;
    }

    botonEnviar.disabled = true;
    botonEnviar.textContent = "Enviando...";

    try {
        await addDoc(collection(db, "consultas"), {
            ...datos,
            fecha: serverTimestamp()
        });
        formulario.reset();
        window.mostrarMensaje("¡Consulta enviada! Quedó registrada correctamente.", "success");
    } catch (error) {
        console.error("No se pudo guardar la consulta:", error);
        window.mostrarMensaje("No se pudo enviar la consulta. Revisá la conexión y las reglas de Firestore.", "error");
    } finally {
        botonEnviar.disabled = false;
        botonEnviar.textContent = "Enviar consulta";
    }
});
