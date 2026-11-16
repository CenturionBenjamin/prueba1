import { auth } from "./firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const enlaceCuenta = document.getElementById("enlaceCuenta");
const botonSalir = document.getElementById("cerrarSesion");

onAuthStateChanged(auth, usuario => {
    if (enlaceCuenta) {
        enlaceCuenta.textContent = usuario ? "Mi cuenta" : "Ingresar";
        enlaceCuenta.href = "acceso.html";
    }
    if (botonSalir) botonSalir.hidden = !usuario;
});

if (botonSalir) {
    botonSalir.addEventListener("click", async () => {
        try {
            await signOut(auth);
            window.mostrarMensaje("Sesión cerrada correctamente.", "success");
        } catch (error) {
            console.error("No se pudo cerrar la sesión:", error);
            window.mostrarMensaje("No se pudo cerrar la sesión. Intentá nuevamente.", "error");
        }
    });
}
