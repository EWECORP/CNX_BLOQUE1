# MINUTA DE REUNIÓN — DIARCO / ZEETREX

## Revisión del Proceso de Auditoría y Gobierno de Datos Maestros en CONNEXA

Versión 1.0 | Fecha: 20 de octubre de 2026 | Hora: 12:34 | Duración: 1 h 09 min

Participantes

- DIARCO: Guillermo Alvez.
    
- ZEETREX: Guillermo Añaños, Eduardo Ettlin y Matías Ochoa.
    

Objetivo: Analizar la reorganización del proceso de administración y auditoría de datos maestros, evaluar las capacidades de CONNEXA para soportar los nuevos circuitos operativos y establecer criterios de control, responsabilidades y trazabilidad.

## 1. Resumen ejecutivo

Durante la reunión se analizó la necesidad de transformar el modelo actual de administración de datos maestros de DIARCO, caracterizado por intervenciones descentralizadas, actualizaciones recurrentes y controles que requieren una importante participación manual.

Se planteó avanzar hacia un modelo de gestión centralizada, validación mediante workflows y separación de responsabilidades, utilizando CONNEXA como plataforma principal de administración de información maestra y coordinación de los procesos relacionados.

Los principales lineamientos fueron:

1. Centralización de datos maestros: CONNEXA debería convertirse progresivamente en el sistema rector de la información maestra, desde el cual se distribuyan las novedades hacia SGM, WMS y otros sistemas.

2. Participación de proveedores: Se propuso que los proveedores sean responsables de completar formularios estructurados con la información necesaria para incorporar o modificar productos, reduciendo las tareas manuales de carga.

3. Separación de responsabilidades: Se distinguieron las funciones de administración y control de datos maestros de las decisiones comerciales relacionadas con la incorporación de productos y la definición del surtido.

4. Workflows de aprobación: Las modificaciones deberán contar con controles de consistencia, autorizaciones y registros de auditoría antes de impactar en los sistemas operativos.

5. Gestión de precios y acuerdos comerciales: Se revisaron las capacidades de CONNEXA para administrar listas de precios, descuentos, condiciones comerciales, vigencias y simulaciones.

6. Revisión del modelo de impuestos y costos: Se identificó la necesidad de profundizar el diseño de estructuras impositivas, costos logísticos y criterios de valorización.

7. Control de excepciones operativas: Se analizaron prácticas actuales de modificación de estados de artículos, así como la necesidad de mejorar los circuitos de reclamos logísticos y diferencias de inventario.

8. Dimensionamiento organizativo: Se acordó conceptualmente la conveniencia de relevar los volúmenes de operaciones para diseñar el nuevo proceso y estimar los recursos necesarios.

La reunión permitió establecer una orientación general favorable a utilizar CONNEXA como plataforma de soporte del nuevo modelo, aunque quedaron pendientes definiciones funcionales, organizativas y de alcance.

## 2. Temas tratados

### 2.1. Administración centralizada de datos maestros

Se analizó el funcionamiento actual de la administración de artículos y las dificultades que genera la actualización de información mediante archivos maestros e intervenciones distribuidas entre distintas áreas.

Se propuso implementar un circuito estructurado de altas, bajas y modificaciones (ABM), basado en formularios normalizados y validaciones sucesivas.

El proceso propuesto contempla que los proveedores suministren directamente los datos requeridos, evitando que personal interno deba transcribir información ya disponible en origen.

Se consideraron dos alternativas iniciales de captura: formularios Excel normalizados y un portal web de proveedores.

La información recibida debería pasar por una instancia de precarga, validación y aprobación antes de incorporarse al maestro definitivo.

Criterio principal: reducir al mínimo la modificación manual de datos, manteniendo la intervención humana en las decisiones de aprobación y control.

### 2.2. Separación entre Auditoría, Datos Maestros y Gestión Comercial

Se debatió la conveniencia de que el área de Auditoría asuma responsabilidades operativas sobre la administración de artículos.

Se señaló que resulta necesario distinguir tres funciones:

|Función|Responsabilidad propuesta|
|---|---|
|Administración de Datos Maestros|Integridad, consistencia, calidad y mantenimiento de información|
|Auditoría / Control|Validación, seguimiento de excepciones y trazabilidad|
|Gestión Comercial / Surtido|Decidir qué productos comercializar, dónde y durante qué períodos|

Se planteó la posibilidad de constituir una función operativa vinculada organizativamente con Auditoría, sin confundir sus responsabilidades con las propias de auditoría independiente.

La decisión de incorporar, discontinuar o comercializar un producto en determinada sucursal deberá permanecer bajo responsabilidad del área comercial.

### 2.3. Workflow de altas y modificaciones

Se analizaron los controles necesarios para administrar los datos maestros.
![[Pasted image 20261021114447.png]]


```mermaid
flowchart TD
Flujo funcional preliminar

1. Proveedor

Carga formulario normalizado

2. Precarga en CONNEXA

Validaciones automáticas de integridad y consistencia

3. Revisión interna

Datos maestros, clasificación, impuestos y logística

4. Aprobaciones y pruebas

Autorizaciones y validación de impacto operativo

5. Publicación y distribución

Maestro CONNEXA → sistemas consumidores
````

Se destacó especialmente la necesidad de realizar pruebas previas a la publicación, incluyendo controles de unidades, factores de conversión y simulaciones de facturación.

El workflow deberá registrar quién solicitó, modificó, validó y aprobó cada operación.

### 2.4. Modelo de datos maestros de productos

Durante la reunión se realizó una demostración de las capacidades actuales de CONNEXA.

Se revisaron las distintas secciones del maestro de productos, incluyendo:

- Datos generales, marca y clasificación comercial.
    
- Códigos de barras y múltiples identificaciones EAN.
    
- Presentaciones comerciales y unidades de medida.
    
- Factores de compra y transferencia.
    
- Información logística: bultos por capa, capas por pallet, pesos y dimensiones.
    
- Datos impositivos.
    
- Proveedores asociados y proveedor principal.
    
- Habilitaciones de compra, venta y transferencia por sucursal.
    
- Parámetros de abastecimiento y reposición.
    

Se destacó la necesidad de verificar que la información logística contemple correctamente las restricciones físicas de apilamiento y capacidad de los pallets.

### 2.5. Administración de precios y acuerdos comerciales

Se revisó el modelo de listas de precios implementado en CONNEXA.

Se explicó que el sistema permite administrar listas con vigencias, precios futuros, descuentos encadenados y reglas comerciales.

También se analizaron los posibles tratamientos ante una nueva lista de precios:

- Aplicar la modificación.
    
- Postergar su aplicación.
    
- Rechazar o no incorporar la modificación.
    

Estas decisiones deberán quedar registradas y asociadas a sus responsables.

Se analizaron acuerdos comerciales que pueden depender de cantidades, volúmenes, productos, familias, proveedores, períodos y condiciones de cumplimiento.

Se planteó además la conveniencia de gestionar acuerdos marco por proveedor, cuyas condiciones puedan heredarse automáticamente en las listas de precios correspondientes.

También se propuso evaluar la formalización electrónica de los acuerdos comerciales, con aceptación por parte del proveedor.

Pendiente: profundizar la demostración funcional de las reglas comerciales y validar si el modelo actual cubre adecuadamente los acuerdos generales por proveedor.

### 2.6. Modelo de costos y rentabilidad

Se discutió la necesidad de diferenciar los criterios de valorización utilizados para distintas finalidades.

Se mencionaron tres perspectivas de costo:

|Tipo de costo|Finalidad|
|---|---|
|Costo neto comercial|Evaluación comercial, formación de precios y márgenes teóricos|
|Costo promedio ponderado|Valorización contable e histórica|
|Costo de reposición|Evaluación económica de futuras reposiciones|

Se destacó que los costos logísticos pueden variar por sucursal o jurisdicción y que deben distinguirse los valores estimados de los efectivamente incurridos.

Se analizó el mecanismo actual de apropiación del costo logístico por pallet y su distribución entre unidades.

Quedó planteada la necesidad de continuar el relevamiento del modelo de costeo, kardex valorizado, recepción y conciliación.

### 2.7. Estructura impositiva

Se discutió la conveniencia de diseñar un modelo impositivo suficientemente flexible para contemplar tributos nacionales, provinciales y municipales.

Se identificó que la clasificación comercial de productos no necesariamente coincide con la clasificación requerida para la determinación impositiva.

Por ello, se consideró la posibilidad de mantener estructuras diferenciadas para ambos propósitos.

También se destacó la importancia de contemplar la jurisdicción de cada sucursal y su impacto en la determinación de costos y precios.

Se mencionaron aspectos relacionados con IVA, impuestos internos, Ingresos Brutos y tasas locales.

Pendiente: validar el modelo con los especialistas funcionales y fiscales antes de cerrar el diseño definitivo.

### 2.8. Clusterización y administración del surtido

Se explicó el enfoque de CONNEXA para administrar el surtido mediante clusters y segmentos.

El modelo permite asociar artículos con grupos de sucursales y administrar excepciones particulares.

Se mencionaron modalidades de surtido básico, temporal, experimental y otras clasificaciones comerciales.

Se destacó la importancia de administrar vigencias para determinar cuándo un producto comienza o deja de comercializarse.

Se estableció conceptualmente que la definición del surtido debe corresponder al área comercial, mientras que la administración de datos maestros debe asegurar la integridad y ejecución controlada de las modificaciones.

### 2.9. Reposición automática y abastecimiento

Se realizó una explicación general del funcionamiento de CONNEXA en el cálculo de necesidades de abastecimiento.

Se describieron las cinco categorías de necesidades utilizadas por el modelo:

- Demanda.
    
- Necesidades especiales.
    
- Campañas.
    
- Acopio.
    
- Sobrestock.
    

Se explicó la integración de estos cálculos con la generación de órdenes de compra, el abastecimiento directo a sucursales y la consolidación de necesidades en centros de distribución.

También se mencionó la planificación logística y la integración prevista con Valkimia para la ejecución de las operaciones de distribución.

Se destacó que las modificaciones manuales de las propuestas de compra deben estar justificadas y autorizadas, conservando la trazabilidad.

### 2.10. Problemática de los estados de artículos en SGM

Uno de los puntos relevantes fue la práctica actual de modificar reiteradamente determinados estados o indicadores de habilitación de artículos en las sucursales.

Se describieron situaciones en las que estos indicadores se modifican temporalmente para afectar los cálculos de faltantes o permitir operaciones de abastecimiento.

Según lo expuesto, estas prácticas pueden representar aproximadamente 100.000 modificaciones de registros por mes.

Se identificaron las siguientes consecuencias:

- Elevada carga operativa.
    
- Complejidad de sincronización entre sistemas.
    
- Posibles distorsiones en indicadores de faltantes.
    
- Dificultades para atribuir responsabilidades.
    
- Necesidad de controles y autorizaciones adicionales.
    

Se planteó evitar que CONNEXA reproduzca automáticamente estas prácticas y revisar el modelo funcional que las origina.

La propuesta consiste en administrar explícitamente los diferentes estados operativos de los artículos y las causas de faltantes, sin utilizar modificaciones artificiales del surtido como mecanismo de control.

### 2.11. Reclamos logísticos y diferencias de inventario

Se analizaron problemas vinculados con diferencias entre mercadería despachada y recibida.

Se mencionaron casos de rechazos parciales, logística inversa y operaciones que permanecen pendientes sin seguimiento suficiente.

Se planteó la necesidad de implementar un circuito formal que permita:

- Registrar diferencias de recepción.
    
- Determinar responsables.
    
- Verificar existencias físicas en origen.
    
- Resolver reclamos y logística inversa.
    
- Generar los ajustes de inventario correspondientes.
    
- Mantener trazabilidad hasta el cierre de cada caso.
    

Se consideró que este proceso podría requerir un sistema de tickets o BPM de alcance general, integrado con los sistemas operativos.

Se aclaró que no necesariamente debería formar parte del módulo de datos maestros de CONNEXA.

## 3. Acuerdos y criterios de orientación

La siguiente tabla reúne los principales criterios surgidos de la reunión. Algunos representan lineamientos compartidos y otros requieren validación formal antes de considerarse decisiones definitivas.

|N.º|Acuerdo o criterio|Estado|
|---|---|---|
|1|Utilizar CONNEXA como plataforma principal para la futura administración de datos maestros|Orientación compartida|
|2|Implementar formularios normalizados para la carga de información de proveedores|Propuesto|
|3|Incorporar validaciones automáticas y workflows de aprobación|Orientación compartida|
|4|Separar administración de datos maestros de decisiones comerciales de surtido|Criterio compartido|
|5|Mantener trazabilidad de modificaciones y autorizaciones|Criterio compartido|
|6|Revisar acuerdos marco y condiciones comerciales por proveedor|Pendiente de análisis|
|7|Profundizar el diseño del modelo impositivo y de costos|Pendiente|
|8|Evitar reproducir las modificaciones artificiales de estados de artículos existentes en SGM|Criterio propuesto|
|9|Analizar un circuito formal de tickets para reclamos y excepciones operativas|Pendiente de definición|
|10|Dimensionar la futura función de datos maestros utilizando volúmenes reales de operaciones|Orientación compartida|

## 4. Próximos pasos

Los siguientes puntos constituyen el plan de trabajo propuesto a partir de lo conversado. No se establecieron fechas comprometidas ni responsables individuales para todas las actividades.

|Prioridad|Actividad|Participación sugerida|
|---|---|---|
|Alta|Relevar el proceso actual de altas, bajas y modificaciones de artículos|DIARCO / Auditoría|
|Alta|Obtener volúmenes históricos de modificaciones, idealmente de los últimos seis meses|DIARCO / Sistemas|
|Alta|Diseñar el proceso futuro y definir roles, responsabilidades y aprobaciones|DIARCO / ZEETREX|
|Alta|Definir el formulario estándar de incorporación y modificación de productos|Datos Maestros / ZEETREX|
|Alta|Establecer el workflow de precarga, validación, aprobación y publicación|DIARCO / ZEETREX|
|Alta|Analizar la problemática de modificaciones de habilitación y surtido en SGM|Comercial / Auditoría / Sistemas|
|Media|Realizar una demostración detallada de acuerdos comerciales y simulaciones|ZEETREX|
|Media|Validar la estructura impositiva y el modelo de costeo|Especialistas DIARCO / ZEETREX|
|Media|Definir la integración y el sentido de sincronización entre CONNEXA y SGM|Sistemas / ZEETREX|
|Media|Evaluar un circuito BPM o tickets para reclamos logísticos|Logística / Sistemas|
|Media|Estimar recursos y estructura organizativa para la nueva función|DIARCO|

## 5. Definiciones pendientes

Se identificaron cuestiones que deberán resolverse antes de avanzar con la implementación.

Gobierno de datos: determinar la dependencia organizativa de la función de Datos Maestros, sus responsables, facultades y mecanismos de control.

Alcance de CONNEXA: precisar qué información será administrada exclusivamente en CONNEXA y qué datos continuarán siendo mantenidos transitoriamente en SGM.

Transición: definir las etapas de migración y el momento a partir del cual CONNEXA se convertirá en la fuente autorizada de cada conjunto de datos.

Workflows: determinar quién solicita, valida, aprueba y ejecuta cada tipo de modificación.

Gestión comercial: establecer el responsable funcional del surtido y su interacción con Datos Maestros.

Controles operativos: definir cómo reemplazar las prácticas actuales de modificación de estados de artículos sin perder funcionalidades necesarias para el negocio.

Sistemas complementarios: delimitar qué procesos requieren soluciones BPM, tickets o circuitos específicos fuera del alcance inicial de CONNEXA.

## 6. Conclusiones

La reunión permitió identificar una oportunidad de transformación que excede la simple incorporación de una herramienta de administración de artículos.

El objetivo es avanzar hacia un modelo de gobierno de datos en el cual la información se origine de manera estructurada, sea validada antes de su utilización y cuente con responsables claramente identificados.

CONNEXA dispone de capacidades que pueden contribuir significativamente a esta transformación, especialmente en administración de productos, workflows, acuerdos comerciales, segmentación del surtido y trazabilidad.

Sin embargo, para concretar el modelo será necesario complementar la tecnología con definiciones organizativas y una revisión de los procedimientos actuales.

La prioridad inmediata debería concentrarse en documentar el proceso existente, dimensionar su volumen operativo y diseñar el circuito futuro de administración de datos maestros, estableciendo una transición progresiva que evite replicar las debilidades actuales de SGM.

## 7. Observaciones y recomendaciones de ZEETREX

Análisis complementario elaborado a partir de la reunión; no constituye un acuerdo formal de los participantes.

Se considera conveniente estructurar la iniciativa como un proyecto específico de Gobierno y Administración de Datos Maestros DIARCO–CONNEXA, diferenciándolo del desarrollo habitual de funcionalidades comerciales.

Este proyecto debería contemplar tres entregables iniciales:

1. Mapa de procesos AS-IS / TO-BE: documentación del funcionamiento actual y del circuito futuro, identificando actividades, actores, autorizaciones y excepciones.

2. Matriz RACI y modelo de gobierno: asignación de responsabilidades para cada familia de datos y tipo de operación.

3. Especificación funcional del módulo de administración de datos maestros: definición de formularios, controles, estados, workflows, permisos, auditoría e integraciones.

Se recomienda prestar especial atención a la separación entre dato maestro, decisión comercial y evento operativo. Una parte de los problemas descriptos parece originarse en la utilización de atributos maestros para resolver necesidades operativas o modificar indicadores de gestión.

Corregir esa situación desde el diseño permitiría reducir significativamente las modificaciones innecesarias, simplificar las integraciones y mejorar la calidad de la información.

Resultado esperado: un modelo de administración de información más confiable, controlado y escalable, que permita incorporar nuevas funcionalidades de CONNEXA sin reproducir las complejidades históricas de SGM.
