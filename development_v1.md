# Development Plan v1.0: Escuchamos Contigo Noelia

**Fecha:** 17 de noviembre de 2025

Este documento presenta el plan de desarrollo para actualizar el sitio web de la campaña "Escuchamos Contigo, Noelia", basado en la revisión completa del contenido del proyecto.

## 1. Entendimiento del Proyecto

El proyecto es una campaña de recaudación de fondos (`crowdfunding`) con el objetivo de comprar dos nuevos procesadores de sonido (Nucleus 8) para Noelia, una joven de 14 años con implantes cocleares.

- **Objetivo Financiero:** $17,712 USD.
- **Componentes Clave:**
    - Un sitio web (`index.html`, `scripts.js`, `styles.css`) que sirve como centro de la campaña.
    - Una "Gran Rifa Solidaria" como principal motor de recaudación.
    - Documentación interna (`/docs`) que detalla la estrategia, finanzas y planificación.
- **Fecha Clave:** La rifa se realizará el **sábado 22 de noviembre de 2025**.

## 2. Observaciones e Inconsistencias

Tras la revisión, se han identificado los siguientes puntos críticos que requieren acción inmediata:

1.  **Inconsistencia en la Fecha de la Rifa (Crítico):**
    - **Fecha Correcta (según instrucción y `docs`):** Sábado, 22 de noviembre de 2025.
    - **Fecha Incorrecta (en `index.html` y `scripts.js`):** Domingo, 9 de noviembre de 2025.
    - **Impacto:** Esto confunde a los visitantes y afecta la credibilidad de la campaña. El contador de tiempo regresivo es incorrecto.

2.  **Datos Financieros Desactualizados en la Web:**
    - **Datos en `index.html`:** Muestra $2,586 recaudados (15%) y $15,126 restantes.
    - **Datos Reales (calculados desde `finanzas.md`):**
        - **Total Recaudado:** $1,736.92 (donaciones) + $939.66 (rifa) = **$2,676.58 USD**.
        - **Porcentaje:** ($2,676.58 / $17,712) * 100 ≈ **15.1%**.
        - **Restante:** $17,712 - $2,676.58 = **$15,035.42 USD**.
    - **Impacto:** La web no refleja el progreso real, lo que puede desmotivar a potenciales donantes.

3.  **Valores Hardcodeados:**
    - Toda la información dinámica (fechas, montos) está escrita directamente en el código HTML y JavaScript. Esto hace que las actualizaciones sean un proceso manual, lento y propenso a errores.

## 3. Plan de Desarrollo

Para alinear el sitio web con la información correcta y mejorar su mantenimiento, propongo los siguientes pasos:

### Fase 1: Actualización de Contenido Crítico

#### **Paso 1.1: Corregir la Fecha de la Rifa**

-   **Archivo:** `index.html`
    -   **Acción:** Modificar el texto visible en la sección de la rifa.
        -   Cambiar `¡Sorteo de la Rifa: 9 de Noviembre!` por `¡Sorteo de la Rifa: 22 de Noviembre!`.
        -   Cambiar `domingo 9 de noviembre de 2025` por `sábado 22 de noviembre de 2025`.
    -   **Acción:** Modificar el texto en el modal de la rifa (`raffleModal`).
        -   Cambiar `El sorteo se realizará el 9 de noviembre` por `El sorteo se realizará el 22 de noviembre`.

-   **Archivo:** `scripts.js`
    -   **Acción:** Actualizar la fecha objetivo en la función `updateRaffleCountdown()`.
        -   Cambiar `new Date('November 9, 2025 00:00:00')` por `new Date('November 22, 2025 20:00:00')`. (Se asume que el sorteo será en la noche, por ejemplo a las 20:00).

#### **Paso 1.2: Actualizar los Datos Financieros**

-   **Archivo:** `index.html`
    -   **Acción:** Modificar las estadísticas de progreso en la sección `progress-stats`.
        -   Cambiar `USD 2,586` (Recaudado) por `USD 2,677`.
        -   Cambiar `15%` (Completado) por `15.1%`.
        -   Cambiar `USD 15,126` (Restante) por `USD 15,035`.
        *(Se redondearán los montos para mayor claridad visual).*

-   **Archivo:** `scripts.js`
    -   **Acción:** Actualizar el ancho de la barra de progreso en la función `setupProgressBarAnimation()`.
        -   Cambiar `progressFill.style.width = '15%';` por `progressFill.style.width = '15.1%';`.

### Fase 2: Sugerencia de Mejora a Futuro

Para facilitar futuras actualizaciones y minimizar errores, sugiero la siguiente mejora una vez completada la Fase 1:

-   **Acción:** Crear un archivo de configuración `config.json`.
-   **Propósito:** Centralizar todos los datos dinámicos en un solo lugar.
    ```json
    {
      "raffleDate": "2025-11-22T20:00:00",
      "financials": {
        "goal": 17712,
        "raised": 2677,
        "raffle_tickets_sold": 327,
        "raffle_tickets_total": 750
      }
    }
    ```
-   **Implementación:** Modificar `scripts.js` para que, al cargar la página, lea este archivo `config.json` y popule dinámicamente el contador, las estadísticas financieras y la barra de progreso. Esto elimina la necesidad de editar el HTML y el JS para cada actualización de cifras.

---

Procederé con la **Fase 1** para realizar los cambios más urgentes.
