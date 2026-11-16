import { auth } from "./firebase-config.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const formulario = document.getElementById("formAcceso");
const titulo = document.getElementById("tituloAcceso");
const botonAcceso = document.getElementById("btnAcceso");
const textoModo = document.getElementById("textoModo");
const cambiarModo = document.getElementById("cambiarModo");
const estadoCuenta = document.getElementById("estadoCuenta");
const botonCerrarSesion = document.getElementById("cerrarSesionCuenta");
let crearCuenta = false;

cambiarModo.addEventListener("click", () => {
    crearCuenta = !crearCuenta;
    titulo.textContent = crearCuenta ? "Crear una cuenta" : "Ingresar a tu cuenta";
    botonAcceso.textContent = crearCuenta ? "Crear cuenta" : "Ingresar";
    textoModo.textContent = crearCuenta ? "¿Ya tenés una cuenta?" : "¿Todavía no tenés cuenta?";
    cambiarModo.textContent = crearCuenta ? "Ingresar" : "Crear una cuenta";
    document.getElementById("contrasena").autocomplete = crearCuenta ? "new-password" : "current-password";
});

formulario.addEventListener("submit", async evento => {
    evento.preventDefault();
    const correo = document.getElementById("correo").value.trim();
    const contrasena = document.getElementById("contrasena").value;

    botonAcceso.disabled = true;
    botonAcceso.textContent = crearCuenta ? "Creando cuenta..." : "Ingresando...";

    try {
        if (crearCuenta) {
            await createUserWithEmailAndPassword(auth, correo, contrasena);
            window.mostrarMensaje("Cuenta creada correctamente. Ya podés utilizar SPORTLINE.", "success");
        } else {
            await signInWithEmailAndPassword(auth, correo, contrasena);
            window.mostrarMensaje("Sesión iniciada correctamente.", "success");
        }
        formulario.reset();
    } catch (error) {
        console.error("Error de autenticación:", error);
        const mensajes = {
            "auth/email-already-in-use": "Ese correo ya tiene una cuenta. Probá ingresar.",
            "auth/invalid-email": "El correo electrónico no tiene un formato válido.",
            "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
            "auth/invalid-credential": "El correo o la contraseña son incorrectos.",
            "auth/network-request-failed": "No se pudo conectar. Revisá tu conexión a Internet."
        };
        window.mostrarMensaje(mensajes[error.code] || "No se pudo completar el acceso. Revisá los datos e intentá nuevamente.", "error");
    } finally {
        botonAcceso.disabled = false;
        botonAcceso.textContent = crearCuenta ? "Crear cuenta" : "Ingresar";
    }
});

onAuthStateChanged(auth, usuario => {
    if (usuario) {
        estadoCuenta.hidden = false;
        estadoCuenta.textContent = `Sesión iniciada como ${usuario.email || "usuario registrado"}.`;
        formulario.hidden = true;
        document.querySelector(".cambiar-modo").hidden = true;
        botonCerrarSesion.hidden = false;
    } else {
        estadoCuenta.hidden = true;
        formulario.hidden = false;
        document.querySelector(".cambiar-modo").hidden = false;
        botonCerrarSesion.hidden = true;
    }
});

botonCerrarSesion.addEventListener("click", async () => {
    try {
        await signOut(auth);
        window.mostrarMensaje("Sesión cerrada correctamente.", "success");
    } catch (error) {
        console.error("No se pudo cerrar la sesión:", error);
        window.mostrarMensaje("No se pudo cerrar la sesión. Intentá nuevamente.", "error");
    }
});
