# Plan de Actualización Web – Show a Beneficio “Cambalandia”

## 1. Contexto General del Evento

El evento corresponde a un **show humorístico a beneficio de Noelia**, realizado por el elenco **Chaplin Show**, con su temporada actual llamada **“Cambalandia”**.

El objetivo principal del evento es:
- Recaudar fondos para el proyecto de adquisición de los procesadores de sonido de Noelia.
- Generar un evento emocional, cuidado y familiar, donde la comunidad pueda colaborar desde la experiencia (asistencia al show).

---

## 2. Datos Clave del Evento (Información que DEBE reflejar la web)

### 2.1 Información básica
- **Evento:** Show Cambalandia – Chaplin Show
- **Tipo:** Show a beneficio
- **Beneficiaria:** Noelia
- **Organiza:** Ayrton, papá de Noelia
- **Fecha:** Jueves 22/01
- **Horario:** 21:00
- **Duración:** 2 horas
- **Público recomendado:** Mayores de 13 años
- **Tipo de humor:** Familiar, con ironías y mensajes dirigidos a adultos

---

## 3. Capacidad y Distribución del Teatro

- **Capacidad total:** 300 personas
- **Formato:** Mesas con sillas
- **Distribución:**
  - Mesas estándar: 2, 4, 5 personas
  - Mesas grandes: 6 mesas de 7 personas
- Existe:
  - Gráfica del escenario
  - Listado enumerado de mesas

### Requerimiento para la aplicación:
- Visualizar o describir el **formato por mesas**
- Incentivar la **venta de mesas completas**
- Diferenciar:
  - Mesa estándar
  - Mesa grande

---

## 4. Entradas y Precios

- **Precio por entrada:** 180 Bs
- **Precio por mesa:** Calculado dinámicamente según cantidad de personas
- **Modalidades de venta:**
  - Entrada individual
  - Mesa completa (recomendada)
- **Talonarios físicos disponibles:** 6 talonarios de 50 entradas
- **Venta online:** a implementar mediante aplicación

---

## 5. Pagos

### Métodos aceptados:
- Pago por **QR** 

### Requerimientos web:
- Opción de indicar método de pago
- Confirmación manual del pago, con envío de mensaje a WhatsApp al organizador
- Registro del estado:
  - Reservado
  - Pagado

---

## 6. Estrategia de Venta (a reflejar en la comunicación web)

La venta se basa en:
- Contacto humano y personalizado
- Venta por afinidad (familia, amigos, comunidades)
- Priorizar nodos que puedan:
  - Armar mesas completas
  - Movilizar grupos

### Fechas clave:
- **Inicio de venta:** 09/01
- **Cierre de venta:** 21/01
- **Evento:** 22/01

---

## 7. Rol del Organizador

- **Responsable:** Ayrton (papá de Noelia)
- Control total de:
  - Entradas vendidas
  - Pagos recibidos
  - Listado de asistentes
- Punto de contacto único para:
  - Consultas
  - Confirmaciones
  - Coordinación de mesas

### La web debe mostrar:
- Nombre del organizador
- Mensaje humano en primera persona
- Número de contacto para más información

---

## 8. Mensaje y Tono de la Página

### Tono:
- Humano
- Agradecido
- No invasivo
- Cercano

### Enfoque:
- No “pedir ayuda”
- Invitar a acompañar
- Mostrar que asistir al show es una forma concreta de colaborar

---

## 9. Secciones Recomendadas para la Web

### 9.1 Sección Hero
- Nombre del show
- Fecha y hora
- En la sección donde dice "¡La rifa ha concluido!..." con el boton de acción para realizar la compra de entradas, con el calculo de entradas que quiera comprar.

### 9.2 Sobre el Evento
- Qué es Cambalandia
- Qué es Chaplin Show
- Por qué es un show a beneficio

### 9.3 Información Práctica
- Fecha
- Hora
- Precio
- Público recomendado
- Formato por mesas

### 9.4 Compra / Reserva de Entradas
- Selección:
  - Individual
  - Mesa
- Cantidad de personas
- Método de pago
- Estado de la reserva

### 9.5 Sobre Noelia
- Breve contexto
- Por qué este evento importa
- Sin sobrecargar emocionalmente

### 9.6 Contacto
- Nombre: Ayrton – papá de Noelia
- Teléfono / WhatsApp

---

## 10. Métricas que la Aplicación debería permitir ver

- Entradas totales vendidas
- Entradas por mesa vs individuales
- Ingresos acumulados
- Capacidad restante
- Estado del funnel:
  - Contactado
  - Confirmado
  - Pagado

---

## 11. Pendientes a Definir (para futuras iteraciones)

- Espacio de agradecimiento durante el show (sí / no)
- Visualización del plano de mesas en la web
- Confirmación automática de pagos QR
- Integración con el Excel / funnel de ventas

---

## 12. Objetivo Final de la Web

Que la persona que entra:
1. Entienda rápido el evento
2. Conecte emocionalmente
3. Sepa cómo ayudar
4. Tome acción sin fricción


## 13. Recursos de la carpeta /chaplin

1. escenario.png : grafica del escenario sin mesas, las mesas se pueden graficar con la ayuda del archivo numero 4
2. evento.jpeg : Arte del evento Cambalandia, con la información especifica del beneficio a Noelia
3. qr_chaplin.jpeg : QR del evento Cambalandia sin monto definido.
4. jsonformatter.json : archivo que contiene la informacion de las mesas, segun la aplicación que ya tiene chaplin para hacer reservas mediante su web