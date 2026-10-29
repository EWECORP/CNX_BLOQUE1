# Minuta de Reunión — Equipo Técnico CONNEXA

ZEETREX | Revisión interna de avances y próximos pasos

|Datos de la reunión||
|---|---|
|Fecha|21 de octubre de 2026|
|Hora de inicio|09:25 hs|
|Duración informada|1 hora|
|Participantes|Eduardo Ettlin y Matías Ochoa|
|Proyecto|CONNEXA|
|Tipo de reunión|Revisión técnica y funcional|

## 1. Resumen ejecutivo

Durante la reunión se revisaron avances y definiciones vinculados con dos componentes importantes de la plataforma CONNEXA: la clasificación comercial de artículos y clusterización del surtido, y la gestión de órdenes de compra madre con recepciones parciales desde distintas sucursales.

Se analizaron los criterios de clasificación ABC, su utilización para administrar el surtido y la necesidad de distinguir entre clasificaciones comerciales, de compras y de stock.

En paralelo, Matías presentó una demostración funcional del circuito de recepción de mercadería contra órdenes de compra madre, incluyendo la generación automática de órdenes hijas, el control de cantidades disponibles y la actualización de los saldos pendientes.

Finalmente, se identificó la necesidad de incorporar el concepto de grupos de sucursales como elemento común para gestionar órdenes de compra madre y listas de precios, aprovechando estructuras existentes en CONNEXA.

La reunión permitió identificar avances concretos y establecer criterios preliminares para continuar el desarrollo.

## 2. Temas tratados

### 2.1. Clasificación ABC de artículos

Se analizaron modelos de clasificación ABC utilizados para determinar la importancia relativa de los artículos dentro de una categoría comercial.

Se comentó un modelo de clasificación basado en ventas valorizadas, con subdivisiones que permiten obtener hasta nueve combinaciones de clasificación.

Entre los aspectos tratados se destacaron:

- Clasificación de artículos según su participación en las ventas de cada categoría.
    
- Posibilidad de utilizar nueve segmentos mediante una matriz de clasificación 3 × 3.
    
- Revisión periódica de las clasificaciones utilizando ventanas de 13 semanas.
    
- Cambios automáticos de clasificación cuando se modifica el comportamiento comercial del artículo.
    
- Utilización del ABC para orientar decisiones de inventario, espacio de exhibición y niveles de stock.
    

Se identificó que la clasificación ABC responde principalmente al comportamiento de los productos y no necesariamente determina si deben integrar el surtido de una sucursal.

Conclusión: se considera conveniente mantener diferenciados los mecanismos de clasificación ABC y de definición del surtido.

### 2.2. Clasificaciones comerciales y estructura del maestro de artículos

Se revisó la estructura existente en el maestro de artículos y las clasificaciones que actualmente administra CONNEXA.

Se identificaron distintos criterios de clasificación:

|Clasificación|Objetivo|
|---|---|
|ABC de ventas|Determinar importancia relativa según ventas|
|Clasificación de compras|Identificar criterios utilizados por los compradores|
|Clasificación de stock|Analizar participación y comportamiento del inventario|
|Clasificación comercial|Organizar atributos y criterios comerciales del artículo|

Se discutió la conveniencia de disponer de un mecanismo flexible para administrar los tipos de clasificación y sus valores admitidos.

Por ejemplo, una clasificación ABC podría admitir valores como AA, AB, AC, BA, BB, BC, CA, CB y CC, siempre que se valide el modelo definitivo.

Acuerdo conceptual: aprovechar la estructura de clasificaciones existente, revisando su capacidad para admitir nuevos tipos y valores sin incorporar campos específicos por cada clasificación.

Queda pendiente realizar el relevamiento técnico de las tablas involucradas y definir el modelo de mantenimiento.

### 2.3. Clusterización de surtido

Se profundizó en la diferencia entre clasificar artículos por su comportamiento comercial y determinar qué artículos deben integrar el surtido de cada sucursal.

Se planteó que la clusterización debe permitir establecer el surtido adecuado considerando las características de cada establecimiento.

Se revisaron atributos ya contemplados en la gestión de sucursales, entre ellos:

- Superficie de venta y características físicas.
    
- Cantidad de cajas y puestos POS.
    
- Capacidad logística y de recepción.
    
- Modalidad de abastecimiento.
    
- Ubicación geográfica y región.
    
- Tipología comercial de la sucursal.
    
- Composición de clientes mayoristas, minoristas y otros segmentos.
    

También se discutieron diferentes agrupaciones de sucursales, incluyendo formatos Barrio, Pueblo y Mayorista, así como subdivisiones por tamaño y características regionales.

Conclusión: la clusterización debe contemplar múltiples dimensiones y no limitarse exclusivamente al volumen de ventas o al tamaño de las sucursales.

No se estableció una clasificación definitiva de clusters. Será necesario continuar el diseño funcional.

## 3. Gestión de órdenes de compra madre

### 3.1. Demostración del circuito de recepción

Matías presentó una implementación funcional del proceso de recepción de mercadería utilizando órdenes de compra madre.

El circuito demostrado contempla:

1. Existencia de una orden de compra madre con cantidades disponibles.
    
2. Selección de la orden madre desde la función de recepción.
    
3. Identificación de artículos y cantidades pendientes.
    
4. Ingreso de las cantidades efectivamente recibidas.
    
5. Registro del comprobante correspondiente.
    
6. Confirmación de la recepción.
    
7. Generación automática de una orden de compra hija asociada a la recepción.
    
8. Actualización de las cantidades consumidas y pendientes de la orden madre.
    

Se verificó durante la demostración que el sistema permite realizar recepciones parciales y consultar el grado de utilización de la orden madre.

### 3.2. Control de cantidades disponibles

Se destacó la importancia de impedir que distintas sucursales reciban cantidades superiores a las autorizadas en una misma orden madre.

Se explicó que el sistema contempla la actualización del saldo disponible cuando se registran recepciones.

Resultado de la demostración: se observaron controles para evitar recepciones por cantidades superiores al saldo disponible y la actualización del pendiente después de confirmar una operación.

Queda pendiente validar específicamente el comportamiento ante recepciones concurrentes de distintas sucursales.

### 3.3. Generación automática de órdenes hijas

Se presentó como avance la generación automática de órdenes hijas a partir de las recepciones confirmadas.

Este mecanismo evita que los usuarios deban crear manualmente una orden hija antes de registrar la recepción.

La orden madre permanece como referencia de las cantidades originalmente autorizadas y de las cantidades consumidas.

Estado: funcionalidad implementada y demostrada en el entorno utilizado durante la reunión. No se confirmó su habilitación en producción.

### 3.4. Vigencia de las órdenes madre y cambios de precios

Se identificó una situación que requiere definición funcional.

Cuando se modifica una lista de precios utilizada para generar una orden madre, debe establecerse qué ocurre con las cantidades pendientes.

Se mencionó como posible criterio que la orden madre pierda vigencia y deba generarse nuevamente.

Sin embargo, este comportamiento no quedó definitivamente confirmado.

Pendiente: consultar y validar con el referente funcional mencionado en la reunión la política de vencimiento y regeneración de órdenes madre ante modificaciones de precios.

## 4. Grupos de sucursales y listas de precios

Se identificó la necesidad de establecer un criterio de asignación de órdenes madre a conjuntos de sucursales.

Actualmente, una orden madre puede representar una compra destinada a múltiples establecimientos, particularmente en el circuito de Diarco Barrio.

Se analizaron dos alternativas:

|Alternativa|Características|
|---|---|
|Identificación por código de sucursal|Solución simple basada en rangos de códigos, por ejemplo sucursales Barrio con código igual o superior a 300|
|Grupos de sucursales|Solución más flexible, utilizando agrupaciones administrables de establecimientos|

Se revisó la existencia de una estructura de grupos de sitios (site groups) en CONNEXA, que podría utilizarse para resolver este requerimiento.

El modelo propuesto permitiría que:

- Una orden madre se asocie a un grupo de sucursales.
    
- Las sucursales visualicen las órdenes madre correspondientes a los grupos a los que pertenecen.
    
- Las listas de precios puedan asociarse a grupos.
    
- Las órdenes madre utilicen listas de precios aplicables a su grupo.
    
- Se mantenga la posibilidad de administrar precios generales o particulares por sucursal.
    

Criterio preliminar: avanzar con el análisis de grupos de sucursales como solución general, sin descartar una implementación inicial simplificada para Diarco Barrio.

Quedó abierta la definición de pertenencia de una sucursal a uno o varios grupos y la resolución de prioridades entre listas de precios.

## 5. Herramientas de desarrollo y dispositivos PDA

Se conversó sobre la utilización de herramientas de inteligencia artificial como asistencia para el desarrollo.

Matías explicó que utilizó un asistente de programación para implementar parte de las funcionalidades demostradas, partiendo de una especificación de comportamiento y condiciones funcionales.

Se aclaró que las operaciones de integración y control de versiones permanecen bajo supervisión manual.

También se mencionaron limitaciones para realizar pruebas completas con dispositivos PDA y lectores de códigos de barras, debido a la disponibilidad del hardware necesario.

Se destacó la conveniencia de disponer de dispositivos adecuados para validar la experiencia real de operación en sucursales.

## 6. Acuerdos y definiciones

|N.º|Definición|Estado|
|---|---|---|
|1|Diferenciar clasificación ABC y clusterización del surtido|Acuerdo conceptual|
|2|Revisar las clasificaciones existentes del maestro de artículos|A revisar|
|3|Contemplar clasificaciones flexibles con valores parametrizables|Criterio preliminar|
|4|Continuar el desarrollo del circuito de recepción contra órdenes madre|Avance demostrado|
|5|Generar automáticamente órdenes hijas desde las recepciones|Implementado en demostración|
|6|Controlar cantidades disponibles y consumidas de órdenes madre|Implementado en demostración|
|7|Analizar grupos de sucursales para órdenes madre y listas de precios|A diseñar|
|8|Definir comportamiento ante cambios de listas de precios|Pendiente de validación|

## 7. Próximos pasos y responsabilidades

Los responsables propuestos se infieren de la conversación cuando no existe una asignación explícita. Las fechas no fueron comprometidas durante la reunión.

|Prioridad|Actividad|Responsable propuesto|Estado|
|---|---|---|---|
|Alta|Revisar la utilización de site groups para órdenes madre|Matías|Pendiente|
|Alta|Definir la asociación entre órdenes madre, grupos y listas de precios|Eduardo / Matías|Pendiente|
|Alta|Validar vencimiento de órdenes madre ante cambios de precios|Equipo funcional|Pendiente|
|Alta|Probar recepciones concurrentes y control de saldos|Matías / QA|A validar|
|Media|Relevar tablas y valores de clasificación comercial|Equipo de desarrollo|Pendiente|
|Media|Definir el modelo de clasificación ABC por categoría|Eduardo / Equipo funcional|Pendiente|
|Media|Continuar la definición de clusters de sucursales|Eduardo / Equipo funcional|En análisis|
|Media|Evaluar disponibilidad de PDA y lectores para pruebas|Equipo técnico|Pendiente|

## 8. Riesgos y puntos de atención

Integridad de las recepciones. El consumo de cantidades desde distintas sucursales requiere mecanismos que garanticen que nunca se supere la cantidad autorizada en la orden madre, incluso ante operaciones simultáneas.

Consistencia de precios. La relación entre listas de precios, órdenes madre y recepciones debe asegurar que se utilicen condiciones comerciales válidas.

Flexibilidad del modelo de sucursales. Utilizar exclusivamente rangos de códigos podría resolver una necesidad inmediata, pero limitar futuras aplicaciones en otros clientes de CONNEXA.

Complejidad de la clasificación comercial. La combinación de múltiples clasificaciones ABC por categoría podría generar una estructura difícil de administrar si no se establecen reglas claras de actualización y utilización.

Pruebas operativas. La ausencia de determinados dispositivos PDA puede limitar la validación completa del circuito en condiciones reales.

## 9. Recomendaciones para el equipo

A partir de lo conversado, se recomienda organizar el trabajo en dos frentes diferenciados.

El primero debería concentrarse en cerrar el circuito operativo de órdenes madre, dado que existe un desarrollo funcional avanzado y se identificaron definiciones concretas que permitirían completar su validación.

El segundo debería abordar la arquitectura de clasificación y clusterización, procurando construir un modelo general que pueda utilizarse tanto en DIARCO como en futuras implementaciones de CONNEXA.

En particular, se considera conveniente que el concepto de grupos de sucursales se diseñe como una capacidad transversal de la plataforma, reutilizable para precios, abastecimiento, surtido y otras funcionalidades comerciales.

Esta última recomendación es una propuesta de arquitectura derivada de la reunión y no una decisión formalmente adoptada.

## 10. Síntesis final

La reunión permitió constatar avances importantes en el desarrollo del circuito de órdenes de compra madre y recepciones parciales.

El principal punto que requiere una definición inmediata es la relación entre órdenes madre, grupos de sucursales y listas de precios, porque condiciona el funcionamiento operativo y la posibilidad de extender el modelo a diferentes formatos comerciales.

En paralelo, se deberá continuar con la definición de clasificaciones ABC y clusters de surtido, manteniendo separados los objetivos de análisis comercial, gestión de inventarios y determinación del surtido.

Próxima instancia sugerida: realizar una revisión técnica y funcional del modelo de grupos de sucursales y del circuito completo de órdenes madre, con el objetivo de aprobar las reglas pendientes antes de avanzar hacia pruebas integrales.
