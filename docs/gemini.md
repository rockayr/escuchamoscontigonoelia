# Proyecto: Escuchamos Contigo, Noelia

## Resumen del Proyecto

Este proyecto es una página web estática para una campaña de recaudación de fondos llamada "Escuchamos Contigo, Noelia". El objetivo es recaudar **$17,712 USD** para comprar dos procesadores de sonido **Nucleus 8** para Noelia, una niña con implantes cocleares.

La campaña se centra en contar la historia de Noelia y utiliza varios métodos para recaudar fondos, incluyendo donaciones directas y una rifa solidaria.

## Estructura de Archivos

-   `index.html`: Es el archivo principal que contiene toda la estructura HTML de la página. Incluye secciones como la historia de Noelia, el progreso de la recaudación, las formas de ayudar y los detalles de la rifa.
-   `styles.css`: Contiene todos los estilos CSS para la página. Define el diseño, los colores, las fuentes y la apariencia visual de todos los componentes.
-   `scripts.js`: Maneja toda la interactividad de la página. Incluye la lógica para el contador regresivo, los modales de donación, la animación de la barra de progreso y el manejo del menú móvil.
-   `docs/`: Esta carpeta contiene la documentación y planificación del proyecto.
    -   `finanzas.md`: Lleva un registro detallado de todos los ingresos y el progreso financiero de la campaña.
    -   `plan_de_accion.md`: Define la estrategia y las tareas a realizar para impulsar la campaña.
    -   `planning.md`: Contiene un análisis financiero personal que contextualiza la urgencia de la campaña.
-   `cdn/`: Almacena todos los recursos multimedia, como imágenes y videos utilizados en la página.

## Pendientes para la Próxima Revisión

1.  **Actualizar Barra de Progreso y Estadísticas:** Los datos de la barra de progreso en `index.html` y `scripts.js` están codificados (muestran $2,586 recaudados y 15% completado). Es necesario actualizar estos valores para que reflejen las cifras reales del archivo `docs/finanzas.md` (**$1,736.92 recaudados, 9.8% completado**).
2.  **Implementar Donaciones Internacionales:** El modal de donaciones actualmente muestra un mensaje "Próximamente" para donaciones internacionales. Se debe investigar e implementar una solución (como PayPal, Stripe o similar) para aceptar contribuciones desde fuera de Bolivia y actualizar el modal correspondiente.
3.  **Actualizar Progreso de la Rifa:** En `scripts.js`, la variable `ticketsVendidos` está fijada en `50`. Según `docs/finanzas.md`, ya se han vendido **327 tickets**. Este valor debe ser actualizado para que el progreso de la rifa sea preciso.
