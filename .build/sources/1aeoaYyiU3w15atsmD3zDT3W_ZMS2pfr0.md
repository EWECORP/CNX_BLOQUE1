# Minuta de Reunión — Proyecto SURTIDO / CONNEXA

Versión 1.0 | 20 de octubre de 2026

Tema: Módulo de Clusters de Sucursales y Segmentación de Productos

|Datos|Detalle|
|---|---|
|Fecha|20/10/2026|
|Hora de inicio|15:16 hs|
|Duración|1 h 02 min|
|Participante DIARCO|Liliana D'Amico|
|Participantes Zeetrex|Matías Ochoa, Eduardo Ettlin|
|Proyecto|CONNEXA — Gestión de Surtido|

## 1. Resumen ejecutivo

La reunión tuvo como objetivo revisar y validar conceptualmente el modelo de clusterización de sucursales y segmentación de productos que se está desarrollando en CONNEXA, buscando establecer una metodología que permita administrar centralizadamente el surtido comercial de DIARCO.

Se analizaron distintas alternativas para agrupar sucursales, definir segmentos de productos y determinar cómo se relacionarán ambos conceptos para establecer el surtido correspondiente a cada local.

Durante el intercambio surgieron dos perspectivas complementarias:

- Enfoque basado en características de las sucursales: agrupar locales según su tipología, superficie, capacidad, ubicación y otras características relativamente estables.
    
- Enfoque basado en comportamiento comercial: analizar ventas, participación, rotación y márgenes por categoría para identificar locales con comportamientos similares y definir el surtido adecuado.
    

Se coincidió en la necesidad de encontrar un equilibrio entre la precisión comercial y la simplicidad operativa, evitando que el modelo termine generando una administración excesivamente individualizada por sucursal.

Conclusión principal: avanzar con un modelo flexible de clusters y segmentos, validando previamente su comportamiento mediante ejercicios de simulación sobre categorías y grupos de sucursales concretos.

No se estableció todavía una estructura definitiva de clusters ni una cantidad cerrada de segmentos.

## 2. Temas tratados

### 2.1. Situación actual de la administración del surtido

Se identificaron las siguientes características de la operación actual:

- Una proporción importante del surtido se distribuye de manera relativamente uniforme entre las sucursales.
    
- Existen diferencias comerciales significativas entre locales que no necesariamente se corresponden con su ubicación geográfica.
    
- La clasificación actual de sucursales utilizada por algunas áreas comerciales responde a criterios históricos y no siempre refleja el comportamiento de las ventas.
    
- Se presentan oportunidades de mejora para evitar productos de baja rotación, inmovilización de inventarios y utilización ineficiente del espacio comercial.
    

Se planteó que una misma categoría puede comportarse de manera muy diferente entre sucursales, incluso cuando estas pertenecen a una misma región geográfica.

Por lo tanto, la ubicación geográfica no debería ser el único criterio para determinar el surtido.

### 2.2. Definición de clusters de sucursales

Se discutió la conveniencia de establecer grupos de sucursales que faciliten la administración centralizada.

Entre las variables consideradas se mencionaron:

- Tipología comercial: mayoristas, Diarco Barrio y Diarco Pueblo.
    
- Superficie y capacidad física de los locales.
    
- Facturación y participación en las ventas.
    
- Ubicación y características socioeconómicas.
    
- Comportamiento de ventas por categoría.
    
- Rentabilidad y márgenes comerciales.
    
- Condiciones competitivas y características del mercado.
    

Se destacó la importancia de que los clusters sean suficientemente homogéneos para resultar útiles, pero que su cantidad permanezca acotada para evitar una administración compleja.

Alternativas discutidas

Para las sucursales mayoristas se presentó un análisis preliminar que identificaba cuatro agrupaciones posibles:

|Grupo tentativo|Características|
|---|---|
|Grupo 1|Aproximadamente 17 sucursales con comportamiento similar|
|Grupo 2|Aproximadamente 12 sucursales de la región patagónica|
|Grupo 3|Mercado Central, con comportamiento diferenciado|
|Grupo 4|San Martín y Martínez, con similitudes entre sí|

Estas agrupaciones corresponden a una hipótesis analítica y requieren validación adicional.

Para Diarco Barrio se consideró inicialmente una clasificación en tres grupos, con especial atención a la superficie disponible y las diferencias de facturación.

También se discutió la situación particular de Diarco Pueblo, que podría compartir características con Barrio, pero requerir segmentos adicionales asociados a presentaciones mayoristas.

### 2.3. Definición de segmentos de surtido

Se analizaron diferentes segmentos que permitirían clasificar los productos de acuerdo con su función dentro del surtido comercial.

|Segmento propuesto|Descripción|
|---|---|
|Básico|Productos esenciales o infaltables que deben formar parte del surtido común|
|Ampliado|Productos adicionales destinados a sucursales con mayor capacidad comercial o física|
|Diferencial|Productos específicos para determinados mercados, perfiles de clientes o necesidades comerciales|
|Temporada|Productos vinculados con estacionalidad y períodos específicos|
|Promocional|Productos incorporados para acciones comerciales o campañas|
|Experimental|Productos incorporados temporalmente para evaluar su comportamiento antes de decidir su permanencia|

Se destacó que el segmento Básico debería construirse teniendo en cuenta las restricciones de capacidad de los locales más pequeños.

El segmento Ampliado permitiría incorporar productos adicionales donde exista espacio y justificación comercial.

El segmento Experimental facilitaría realizar pruebas controladas en determinadas sucursales antes de extender la distribución.

La cantidad y denominación definitiva de estos segmentos queda sujeta a validación.

### 2.4. Nivel de clasificación de productos

Se discutió a qué nivel de la jerarquía comercial convendría administrar los segmentos.

Se consideraron dos posibilidades:

1. Definir segmentos en niveles generales de clasificación, como Food y Non Food.
    
2. Definirlos en niveles más específicos, como Menaje, Mascotas, Descartables, Perfumería u otras categorías.
    

Se observó que trabajar con categorías más detalladas permitiría una mejor diferenciación comercial, pero incrementaría significativamente la cantidad de combinaciones que deberían administrarse.

Como ejemplo, se mencionó que unas 40 categorías combinadas con seis segmentos generarían aproximadamente 240 combinaciones potenciales.

Se planteó la conveniencia de que el sistema permita diferentes niveles de detalle según las necesidades de cada categoría.

Quedó pendiente definir el nivel jerárquico recomendado para la administración inicial del surtido.

### 2.5. Relación entre clusters, segmentos y artículos

Este fue uno de los principales puntos de discusión.

Se analizaron dos modelos conceptuales:

Modelo A — Administración por clusters y segmentos

Los productos se asignan a segmentos y estos se relacionan con los clusters de sucursales.

La asignación del surtido a los locales surge de estas relaciones, con posibilidad de incorporar inclusiones o exclusiones puntuales.

Modelo B — Administración por comportamiento comercial

Se analizan las ventas y el comportamiento de cada categoría en las sucursales y, a partir de esa información, se determina qué artículos corresponde asignar a cada local.

Se reconoció que ambos enfoques buscan resolver el mismo problema, aunque presentan diferencias en la forma de administración.

Se remarcó que el propósito de la clusterización es simplificar la gestión del surtido y no reproducir la administración individual de cada sucursal mediante una estructura más compleja.

También se advirtió sobre el riesgo de que las excepciones puntuales terminen convirtiéndose en la regla general.

No se adoptó una decisión definitiva entre ambos enfoques.

### 2.6. Utilización de información comercial

Se presentaron ejemplos de análisis de ventas y participación comercial por sucursal y categoría.

Entre las variables consideradas se destacaron:

- Ventas históricas.
    
- Participación de cada sucursal en las ventas de la categoría.
    
- Rotación de artículos.
    
- Margen comercial.
    
- Composición del surtido.
    
- Comportamiento diferencial entre sucursales.
    

Se destacó que una sucursal puede presentar una elevada facturación en una categoría sin que ello implique necesariamente un desempeño satisfactorio, por ejemplo, cuando las ventas se encuentran asociadas a liquidaciones o márgenes reducidos.

También se mencionó la importancia de utilizar períodos comparables y contemplar la estacionalidad.

El análisis debería contribuir a identificar agrupaciones comercialmente consistentes y a validar la conveniencia de mantener, ampliar o reducir determinados surtidos.

### 2.7. Carga inicial y mantenimiento

Se discutió la necesidad de disponer de herramientas que faciliten la construcción inicial de los segmentos.

Se consideró conveniente que el sistema pueda generar sugerencias a partir de información comercial, evitando depender exclusivamente de una carga manual.

Se mencionaron como criterios posibles la rotación, las ventas y la clasificación ABC.

Asimismo, se planteó que la administración posterior debería ser sencilla para los responsables comerciales, sin exigir un conocimiento excesivamente técnico del modelo de segmentación.

### 2.8. Calidad de la clasificación de artículos

Se identificó la existencia de productos que no cuentan con una clasificación completa dentro de la jerarquía comercial.

Se planteó la necesidad de:

- Identificar los artículos sin categoría o con niveles incompletos.
    
- Exportar los registros para facilitar su revisión.
    
- Completar la clasificación comercial antes de incorporarlos al nuevo modelo.
    
- Evitar que la falta de categorización comprometa el funcionamiento de los segmentos.
    

Se manifestó el criterio de no aceptar productos sin la categorización necesaria para su administración.

## 3. Acuerdos y criterios de orientación

Los siguientes puntos reflejan las coincidencias principales de la reunión, sin considerar definitivamente aprobadas las alternativas que permanecen en análisis.

|N.º|Acuerdo o criterio|
|---|---|
|1|La gestión del surtido deberá simplificar la administración centralizada y reducir el trabajo individual por sucursal.|
|2|La arquitectura deberá permitir modificar la cantidad de clusters y segmentos sin cambios estructurales significativos.|
|3|La ubicación geográfica no será suficiente, por sí sola, para determinar las agrupaciones comerciales.|
|4|Se utilizarán datos de ventas, rotación, márgenes y comportamiento comercial para validar las agrupaciones.|
|5|Los segmentos Básico, Ampliado, Diferencial, Temporada, Promocional y Experimental constituyen una propuesta inicial de trabajo.|
|6|Se deberá contemplar la capacidad física de los locales al determinar el surtido, especialmente el básico.|
|7|Se buscará minimizar las excepciones individuales por sucursal.|
|8|Se avanzará mediante ejercicios de análisis y simulación antes de consolidar el modelo definitivo.|
|9|Se deberá revisar la calidad de la clasificación de artículos.|

## 4. Puntos pendientes de definición

|Tema|Definición pendiente|
|---|---|
|Clusters mayoristas|Validar las agrupaciones sugeridas por el análisis comercial|
|Diarco Barrio|Determinar cantidad y criterios de agrupación|
|Diarco Pueblo|Definir tratamiento dentro del modelo|
|Segmentos|Confirmar cantidad, denominación y reglas de utilización|
|Jerarquía comercial|Establecer el nivel de clasificación en el que se administrarán los segmentos|
|Relación clusters-segmentos|Resolver el modelo funcional definitivo|
|Excepciones|Definir condiciones para inclusiones y exclusiones individuales|
|Carga inicial|Determinar metodología de sugerencia y asignación automática|
|Mantenimiento|Establecer responsabilidades y dinámica operativa|

## 5. Próximos pasos propuestos

Las actividades siguientes se desprenden de la conversación. Los responsables son sugeridos y deberán confirmarse.

|Actividad|Responsable sugerido|Resultado esperado|
|---|---|---|
|Revisar las agrupaciones preliminares de sucursales mayoristas|Zeetrex / Comercial DIARCO|Propuesta de clusters validable|
|Seleccionar una categoría comercial para realizar una prueba piloto|Liliana / Zeetrex|Categoría de referencia|
|Analizar ventas, rotación y márgenes de la categoría seleccionada|Zeetrex|Comparación de comportamiento entre sucursales|
|Simular diferentes combinaciones de clusters y segmentos|Zeetrex|Evaluación de alternativas|
|Definir los segmentos iniciales y sus criterios|Comercial DIARCO|Propuesta funcional de segmentación|
|Identificar artículos sin clasificación completa|Zeetrex / DIARCO|Listado de artículos a regularizar|
|Revisar la experiencia de administración del surtido en CONNEXA|Zeetrex / Comercial DIARCO|Observaciones para el diseño funcional|

No se registraron fechas individuales de compromiso.

## 6. Continuidad de las reuniones

Se mencionó que la sala se encuentra reservada los martes hasta fin de año, lo que permitiría dar continuidad al trabajo de revisión del modelo.

La próxima instancia debería concentrarse en un ejercicio práctico sobre una categoría concreta, utilizando información real de sucursales y productos.

## 7. Observaciones y recomendaciones

Desde una perspectiva funcional y de arquitectura, la discusión permitió identificar una cuestión central: el modelo de datos debe ser flexible, pero el modelo de administración debe permanecer simple.

Se recomienda que la próxima validación permita responder tres preguntas fundamentales:

1. ¿Qué criterios determinan que dos sucursales deban pertenecer al mismo cluster?
    
2. ¿Qué criterios determinan que un artículo deba pertenecer a un segmento de surtido?
    
3. ¿Cómo se combinan ambos conceptos para obtener el surtido efectivo de una sucursal sin generar una cantidad excesiva de excepciones?
    

La recomendación es no cerrar todavía el diseño funcional definitivo. Primero convendría realizar una simulación completa, desde la clasificación de sucursales hasta la asignación efectiva de artículos, y evaluar la facilidad de mantenimiento del resultado.

De esa forma, el equipo podrá validar no solamente la consistencia analítica del modelo, sino también su aplicabilidad en la operación comercial cotidiana de DIARCO.

Conclusión de la reunión: Se avanzó en la comprensión de las alternativas para administrar el surtido mediante clusters y segmentos. El siguiente hito será validar el enfoque con información comercial real y definir las reglas funcionales que permitan llevarlo a una operación administrable dentro de CONNEXA.

Documento elaborado a partir de la transcripción de la reunión del 20/10/2026. Algunas intervenciones presentan errores de transcripción automática; las formulaciones se han consolidado respetando el sentido identificable de la conversación.
