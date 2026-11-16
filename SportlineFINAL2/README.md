# SPORTLINE - Agencia Automotriz

Sitio web de una agencia automotriz que permite consultar vehículos, ver sus detalles, gestionar un carrito, confirmar compras y enviar consultas.

## Tecnologías utilizadas

- **HTML5** para la estructura de las páginas.
- **CSS3** para el diseño adaptable a computadoras y celulares.
- **JavaScript** para la interacción y manipulación del contenido.
- **Firebase Authentication** para crear cuentas e iniciar/cerrar sesión con correo electrónico y contraseña.
- **Firebase Cloud Firestore** para consultar el catálogo, actualizar el stock y guardar consultas del formulario de contacto.
- **localStorage** para conservar el carrito y el historial de compras en el navegador.

## Funcionalidades

- Catálogo de vehículos cargados desde la colección `productos` de Firestore.
- Página de detalle con precio convertido a número y selección de unidades.
- Carrito con suma, resta, eliminación, subtotal y total.
- Validación de disponibilidad al agregar productos y antes de confirmar una compra.
- Confirmación de compra mediante una ventana propia, sin utilizar `alert()` ni `confirm()`.
- Descuento del stock en Firestore mediante una transacción. Si no hay unidades suficientes, la operación completa se cancela.
- Registro e inicio de sesión de usuarios.
- Historial de compras guardado en el navegador.
- Formulario de contacto que registra mensajes en la colección `consultas` de Firestore.
- Sección de preguntas frecuentes.
- Lectura y escritura de `localStorage` protegidas ante errores.
- Diseño adaptable, logo, favicon e imágenes del catálogo.

## Configuración de Firebase

El proyecto utiliza el proyecto Firebase `sportline-7a058` configurado en `firebase-config.js`.

### 1. Firestore

Verificá que exista la colección `productos` y que cada documento tenga, como mínimo, los campos utilizados por la página: `nombre`, `descripcion`, `imagen`, `precio` y `stock`. El campo `stock` debe ser un número entero igual o mayor que cero.

El archivo `firestore.rules` contiene las reglas utilizadas por la aplicación:

- El catálogo permite lectura pública.
- Los cambios de stock requieren un usuario autenticado y solo permiten reducir el valor, nunca aumentarlo desde la aplicación.
- El formulario puede crear documentos en `consultas`, pero los visitantes no pueden leerlos, modificarlos ni eliminarlos.

Para aplicar las reglas, abrí **Firebase Console → Firestore Database → Rules**, reemplazá el contenido por el archivo `firestore.rules` y publicá los cambios.

### 2. Inicio de sesión

En **Firebase Console → Authentication → Sign-in method**, habilitá el proveedor **Correo electrónico/Contraseña**. Después, desde `acceso.html`, se pueden crear cuentas e iniciar sesión.

### 3. Ejecutar el sitio

1. Abrí la carpeta del proyecto en Visual Studio Code.
2. Ejecutá `index.html` con Live Server o desde un servidor local.
3. Revisá que la configuración de Firebase esté activa y que las reglas estén publicadas.
4. Creá una cuenta desde **Ingresar**.
5. Agregá un vehículo al carrito y probá modificar las cantidades.
6. Confirmá una compra y verificá que el valor de `stock` disminuya en Firestore.
7. Probá enviar una consulta desde **Contacto** y verificá que se cree un documento en `consultas`.

## Datos que se guardan

- El catálogo y el stock se consultan y actualizan en Firestore.
- Las consultas del formulario se guardan en Firestore.
- El carrito y el historial se guardan en `localStorage`, por lo que pertenecen al navegador utilizado. No son un historial sincronizado entre dispositivos.

## Nota sobre seguridad

Las reglas incluidas impiden que los visitantes modifiquen los datos generales de los vehículos o aumenten el stock desde el sitio. La reducción del stock se realiza desde el navegador con una transacción de Firestore y requiere iniciar sesión. Para una agencia en producción, la confirmación de ventas debería trasladarse a un servidor o Cloud Function que valide la operación y registre cada orden; las reglas actuales son una protección básica apropiada para esta versión educativa, no un sistema completo de ventas.
