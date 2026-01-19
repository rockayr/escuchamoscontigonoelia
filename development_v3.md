# Plan de Desarrollo v3: Sitio Web del Evento a Beneficio "Cambalandia"

## 1. Resumen del Objetivo

El objetivo es actualizar el sitio web `escuchamoscontigonoelia.vercel.app` para convertirlo en la plataforma principal de información y venta de entradas para el show a beneficio "Cambalandia" de Chaplin Show.

La nueva versión de la web deberá:
1.  Agregar al contenido actual la información del evento.
2.  Implementar un sistema de reserva y compra de entradas (individuales o por mesas).
3.  Mostrar claramente la información del evento, los precios y el formato del teatro.
4.  Mover la información de la rifa (actualmente en la página principal) a una sección/página de archivo separada.
5.  Mantener un tono humano, cercano y agradecido.

## 2. Plan de Desarrollo por Etapas

A continuación, se presenta un plan de desarrollo dividido en etapas. La ejecución de las etapas 3 y 4 está sujeta a las respuestas de las "Preguntas de Clarificación".

### Etapa 1: Reorganización del Contenido Actual
- **Tarea 1.1:** Crear un nuevo directorio `/rifa`.
- **Tarea 1.2:** Mover la información relevante de la rifa (secciones de ganadores, premios, etc.) de `index.html` a un nuevo archivo `rifa/index.html`. Se creará también un `rifa/styles.css` básico si es necesario.
- **Tarea 1.3:** Modificar el botón "Ver Ganadores de la Rifa" en el `index.html` principal para que apunte a `/rifa/`.

### Etapa 2: Limpieza y Preparación del `index.html`
- **Tarea 2.1:** Eliminar todo el contenido de la rifa del `index.html` principal.
- **Tarea 2.2:** Actualizar el `scripts.js` para eliminar la lógica asociada a la rifa (modales, contadores, etc.) que ya no se usarán.
- **Tarea 2.3:** Reestructurar el `index.html` para dejar los contenedores listos para el nuevo contenido de "Cambalandia".

### Etapa 3: Desarrollo de la Página - Evento "Cambalandia" (CANCELLED)
- **Tarea 3.1:** Actualizar la nueva sección "Hero" con el título del show, la fecha y un botón principal de "Comprar Entradas", en lugar de "La rifa ha concluido...". El boton comprar entradas debe redirigir a la pagina de compra de entradas en /chaplin
- **Tarea 3.2:** Diseñar y añadir las secciones informativas: "Sobre el Evento", "Información Práctica".

### Etapa 4: Implementación del Sistema de Reserva y Compra
- **Tarea 4.1:** Diseñar la UI para la selección de entradas (individual vs. mesa).
- **Tarea 4.2:** Utilizar el archivo `jsonformatter.json` para mostrar la distribución de mesas de forma visual o descriptiva.
- **Tarea 4.3:** Implementar la lógica en `scripts.js` para:
    - Calcular el precio total según la cantidad de entradas.
    - Generar un mensaje de WhatsApp pre-configurado para que el usuario confirme su reserva/pago con el organizador.
    - Mostrar el QR de pago (`qr_chaplin.jpeg`) en un modal.

### Etapa 5: Pruebas y Despliegue
- **Tarea 5.1:** Realizar pruebas funcionales del flujo de compra en un entorno de desarrollo.
- **Tarea 5.2:** Validar que todos los enlaces y la información sean correctos.
- **Tarea 5.3:** Una vez aprobado, desplegar la nueva versión del sitio.

---

## 3. Preguntas de Clarificación

Para garantizar que el desarrollo cumpla con todas las expectativas, por favor, responda las siguientes preguntas:

**Pregunta 1: Sobre la página de la Rifa**
> La información de la rifa (ganadores, premios) se moverá a una página separada en `/rifa/`. ¿Esta página debe mantener el mismo estilo (menú de navegación, footer, etc.) que la página principal o puede ser una página más sencilla, de archivo, con un estilo mínimo?
Respuesta: Puede ser una página más sencilla, de archivo, con un estilo mínimo que ademas te permita retornar a la pagina principal, tambien debe tener una seccion que te dirija al evento Cambalandia con el boton CTA "Comprar Entradas".

**Pregunta 2: Sobre la visualización de las mesas**
> El archivo `jsonformatter.json` contiene la data de las mesas. Para la UI de compra, ¿cuál de estas opciones prefiere?
>   **a) Opción Descriptiva (Más simple):** Un menú desplegable donde el usuario elige "Mesa para 2", "Mesa para 4", "Mesa para 7", y luego selecciona cuántas quiere.
>   **b) Opción Visual (Más compleja):** Intentar renderizar un mapa interactivo de las mesas usando la imagen `escenario.png` y la data del JSON, donde el usuario pueda hacer clic en una mesa para seleccionarla. Esta opción podría llevar más tiempo de desarrollo.
>   **c) Opción Híbrida:** Mostrar una lista de las mesas disponibles con su capacidad y un botón de "Reservar" al lado de cada una.
Respuesta: Necesitamos una opcion visual, ya que cada boton se debe dibujar con la imagen de la mesa. Mesas verdes disponibles, mesas grises reservadas.

**Pregunta 3: Sobre el flujo de "compra"**
> El requerimiento indica una confirmación manual por WhatsApp. El flujo que se implementaría es el siguiente:
>   1. Usuario selecciona sus entradas/mesa.
    2. Se muestra el QR de pago, con el monto que debe pagar.
    3. Debe haber un boton que mencione, "Confirmar Pago" y que redirija al whatsapp.
    4. Se abre WhatsApp con un mensaje pre-escrito como: *"Hola Ayrton, he comprado [X] entradas para el show Cambalandia. Total: [Y] Bs. Adjunto mi comprobante de pago."*
    5. El usuario debe adjuntar manualmente el comprobante desde su galería y enviar el mensaje.
>
> ¿Es este el flujo correcto y deseado?
Si.

**Pregunta 4: Sobre el contenido de la página principal**
> El `index.html` actual tiene varias secciones (Historia, Cómo Ayudar, etc.). ¿Qué secciones de la web actual, si alguna, deberíamos conservar en la nueva versión, además de las nuevas secciones del evento "Cambalandia"?
Respuesta: Aun no tengo claro, si debe haber una seccion simple con la información del evento Cambalandia y un pagina especial para realizar la reserva/compra de entradas, dejame saber si tienes alguna sugerencia y veamos cual es la mejor manera luego de finalizar la etapa 1 y 2.

Una vez que responda estas preguntas, podré refinar las etapas 3 y 4 del plan de desarrollo y proceder con una estimación más precisa. No iniciaré la implementación hasta recibir su confirmación.
