# Minuta de Reunión — CONNEXA

## Módulo de Listas de Precios de Compra de Proveedores

Versión 1.0 | 13 de octubre de 2026 | DIARCO – Zeetrex

Horario: 13:10 hs Duración: 1 hora, 23 minutos Objetivo: Presentación y validación funcional del módulo de administración de listas de precios de compra de proveedores de CONNEXA.

Participantes

- DIARCO: Sebastián Basconcelos.
    
- Zeetrex: Pablo Duplessy, Eduardo Ettlin.
    
- Participantes remotos: Daniel Padin, Luciano Calcagno y Matías Ochoa.
    

## 1. Resumen ejecutivo

Se realizó una demostración funcional del módulo de Listas de Precios de Compra de Proveedores de CONNEXA, con el objetivo de validar su funcionamiento frente a la operatoria comercial actual de DIARCO.

Durante la reunión se revisaron los mecanismos de carga de listas, asignación de precios por sucursal, aplicación de descuentos comerciales, reglas de bonificaciones, condiciones por volumen, aprobación y publicación de listas, así como su integración con la generación de órdenes de compra.

La reunión permitió identificar diferencias importantes entre el modelo inicialmente desarrollado y las necesidades operativas de los compradores.

El principal requerimiento surgido fue la necesidad de visualizar de manera integrada el costo neto de compra y el costo neto estadístico, considerando tanto los descuentos incluidos en la factura del proveedor como las bonificaciones adicionales obtenidas mediante notas de crédito.

También se identificaron necesidades relacionadas con la administración de descuentos que no deben afectar el costo comercial, la comparación entre versiones de listas y el tratamiento de compras excepcionales.

Se acordó continuar evolucionando el módulo, priorizando la cobertura de la operatoria comercial habitual antes de incorporar escenarios más complejos.

## 2. Temas tratados y definiciones funcionales

### 2.1. Administración de listas por sucursal y grupos de sucursales

Se presentó el mecanismo de listas globales con excepciones específicas por sucursal.

Se validó el siguiente criterio de aplicación:

- Una lista global puede aplicarse a todas las sucursales.
    
- Pueden existir listas particulares para determinadas sucursales.
    
- Cuando exista una lista específica para una sucursal, esta tendrá prioridad sobre la global.
    
- Cuando no exista una lista específica, se utilizará la lista global vigente.
    

Definición adicional: incorporar la posibilidad de asignar una lista a un grupo de sucursales, evitando tener que seleccionar individualmente cada establecimiento.

Se mencionaron agrupaciones geográficas y comerciales, como GBA, interior, Mayorista y Barrio.

Quedó pendiente definir la estructura y administración de estos grupos, incluyendo su posible combinación.

### 2.2. Importación de listas mediante Excel

Se mostró el procedimiento de creación de la cabecera de una lista, definición de vigencia, selección de sucursales e importación de artículos.

Se identificó que los proveedores utilizan diferentes formatos de archivos y que los compradores actualmente realizan tareas de preparación de datos antes de importarlos.

Se estableció la necesidad de:

- Revisar los formatos Excel utilizados actualmente por los compradores.
    
- Mantener una plantilla estándar de importación.
    
- Contemplar diferencias de precios entre zonas o grupos de sucursales.
    
- Permitir la carga de artículos, precios base, unidades por bulto y descuentos comerciales.
    

Se destacó que la asignación de sucursales o grupos debe realizarse desde la cabecera de la lista, mientras que el Excel contiene principalmente la información de artículos y condiciones comerciales.

### 2.3. Impuestos internos y estructura impositiva

Se analizaron las diferencias entre el tratamiento actual de los impuestos internos en SGM y el modelo propuesto para CONNEXA.

Se explicó que el nuevo diseño considera los impuestos como parte de la estructura impositiva del artículo, en lugar de exigir su carga manual en cada lista de precios.

El cálculo deberá considerar las condiciones fiscales correspondientes a cada operación y jurisdicción.

Criterio de diseño: separar el mantenimiento de las alícuotas impositivas de la administración de precios y descuentos de proveedores.

Quedó pendiente validar el cálculo y la exposición de los impuestos en órdenes de compra, recepción y determinación de costos.

### 2.4. Descuentos comerciales y reglas de bonificación

Se presentó el modelo de reglas comerciales que permite configurar condiciones adicionales a los descuentos incluidos en la factura del proveedor.

Entre los casos tratados se destacaron:

- Descuentos comerciales incluidos en factura.
    
- Bonificaciones MP instrumentadas mediante notas de crédito.
    
- Descuentos por volumen de compra.
    
- Bonificaciones condicionadas a cantidades o importes mínimos.
    
- Descuentos en cascada y descuentos aditivos.
    
- Bonificaciones aplicables a determinados productos o categorías.
    

Se mostró que las reglas pueden tener vigencia, alcance, método de cálculo, condiciones de aplicación y tratamiento del impacto sobre el costo.

Se confirmó que las reglas pueden mantenerse vigentes entre sucesivas listas de precios de un proveedor, salvo modificación o suspensión expresa.

Observación funcional: durante las simulaciones se identificó la necesidad de revisar el comportamiento combinado de descuentos aditivos y en cascada, particularmente cuando intervienen prioridades y condiciones por volumen.

### 2.5. Condiciones por volumen y agrupación de artículos

Se analizaron las bonificaciones otorgadas por alcanzar determinados volúmenes de compra.

Se planteó que una condición puede calcularse sobre:

- La totalidad de los artículos de un proveedor.
    
- Una familia.
    
- Uno o varios rubros.
    
- Uno o varios subrubros.
    
- Artículos específicos.
    

Se acordó que el alcance de las reglas debe permitir seleccionar diferentes niveles de la estructura de clasificación de productos.

También se identificó la necesidad de admitir más de una categoría en una misma condición comercial.

Para descuentos escalonados, se observó que el sistema debe permitir definir rangos de cantidades evitando la aplicación simultánea incorrecta de reglas superpuestas.

### 2.6. Visualización del costo neto y costo estadístico

Este fue uno de los principales requerimientos de la reunión.

Actualmente, la pantalla de artículos y precios muestra el costo resultante de los descuentos comerciales incluidos en la factura del proveedor. Las bonificaciones adicionales configuradas mediante reglas se consultan por separado o mediante simulaciones.

Se solicitó incorporar una vista que permita consultar de forma directa el impacto de los descuentos habituales sobre el costo final.

Se identificaron dos conceptos principales:

|Concepto|Descripción|
|---|---|
|Costo neto de OC|Costo resultante de aplicar los descuentos comerciales que forman parte de la orden de compra y factura del proveedor.|
|Costo neto estadístico|Costo resultante de considerar también las bonificaciones comerciales adicionales que impactan en el costo, como las obtenidas mediante notas de crédito.|

Se propuso incorporar una nueva solapa o vista que muestre por artículo el precio base, los descuentos de factura, las bonificaciones por nota de crédito y el costo neto estadístico.

Las bonificaciones incondicionales deberán poder visualizarse sin necesidad de ejecutar una simulación.

Para las bonificaciones sujetas a volumen, se deberá definir un criterio de presentación que permita identificar las condiciones y consultar su impacto.

Se destacó que el costo neto estadístico es una referencia fundamental para determinar márgenes comerciales y evaluar la rentabilidad.

### 2.7. Bonificaciones que no afectan el costo comercial

Se identificaron conceptos que actualmente pueden administrarse como descuentos o bonificaciones, pero que no necesariamente representan una reducción del costo de mercadería.

Entre los ejemplos mencionados:

- Bonificaciones logísticas.
    
- Acuerdos por no devolución.
    
- Aportes para acciones comerciales especiales.
    
- Contribuciones para eventos o actividades promocionales.
    
- Servicios prestados al proveedor, como exhibiciones especiales o punteras.
    

Se destacó que estos conceptos pueden requerir tratamientos administrativos, contables e impositivos diferentes.

En particular, algunos acuerdos deben instrumentarse mediante facturas por servicios y no mediante notas de crédito comerciales.

Definición: relevar la operatoria actual de estos conceptos antes de definir su implementación definitiva.

Se planteó evaluar un mecanismo similar al actual Libro de Bonificaciones, que permita administrar acuerdos independientes de las listas de precios de compra.

### 2.8. Flujo de aprobación y publicación

Se presentó el circuito de autorización de listas.

Se establecieron los siguientes roles:

|Rol|Facultades|
|---|---|
|Comprador|Crear listas, importar artículos, preparar condiciones y solicitar aprobación.|
|Gerente|Revisar, aprobar o rechazar listas. También puede crear listas.|

Se confirmó que el comprador no debe publicar unilateralmente una lista.

Se destacó la importancia de conservar trazabilidad sobre la creación, importación, aprobación, rechazo y publicación.

También se mostró el mecanismo de comparación entre versiones y la posibilidad de copiar una lista anterior para generar una nueva.

### 2.9. Vigencia y versionado de listas

Se revisó el comportamiento de las listas cuando se publican nuevas versiones.

Se estableció como principio que debe existir una única lista vigente para un mismo alcance comercial en un momento determinado, considerando las excepciones por sucursal.

La publicación de una nueva lista debe cerrar la vigencia de la anterior sin perder el historial.

Se destacó que cada transacción debe poder identificar qué lista y qué condiciones comerciales estaban vigentes al momento de su generación.

Se confirmó la posibilidad de preparar listas con vigencia futura.

### 2.10. Comparación de costos entre listas

Se mostró la funcionalidad de comparación entre listas de precios.

Se solicitó ampliar la comparación para que no considere únicamente el costo neto de factura, sino también el costo neto estadístico resultante de las reglas comerciales aplicables.

El objetivo es detectar cambios reales de costo, incluyendo situaciones en las que el proveedor modifica simultáneamente precios y bonificaciones.

Se consideró importante poder identificar variaciones por artículo y por categoría.

### 2.11. Compras especiales con precios excepcionales

Se plantearon situaciones comerciales en las que se negocia un precio particular para una compra puntual, sin intención de modificar la lista general vigente.

Se mostró que el módulo de órdenes de compra manuales permite importar artículos y precios desde Excel, con la posibilidad de utilizar precios informados manualmente en lugar de los provenientes de la lista vigente.

Se consideró que este mecanismo puede resolver operaciones excepcionales.

Sin embargo, se destacó la necesidad de establecer permisos, autorizaciones y controles específicos para evitar modificaciones indebidas de costos.

La alternativa deberá probarse funcionalmente antes de considerarse definitiva.

### 2.12. Impacto de los cambios de costos sobre precios de venta

Se discutió la relación entre las nuevas listas de compra y la actualización de precios de venta.

Se identificó que un cambio de costo no necesariamente debe trasladarse inmediatamente al precio de venta.

Se planteó que el comprador o el área comercial pueda decidir entre aplicar el cambio, diferirlo o no trasladarlo.

Se propuso que las modificaciones de listas generen novedades de costos pendientes de revisión comercial.

También se discutió el momento de actualización del costo estadístico, diferenciando la disponibilidad inmediata de precios para compras de su eventual aplicación a las estadísticas de ventas.

Pendiente: validar con el negocio el momento efectivo de actualización del costo estadístico y desarrollar este tema dentro del módulo de administración de precios de venta.

## 3. Acuerdos y decisiones principales

|Nº|Acuerdo o definición|Estado|
|---|---|---|
|1|Mantener listas globales con excepciones por sucursal.|Validado|
|2|Incorporar asignación de listas por grupos de sucursales.|A desarrollar|
|3|Mantener la importación de listas mediante Excel.|Validado|
|4|Separar la administración impositiva de la carga de listas.|Criterio de diseño|
|5|Administrar bonificaciones adicionales mediante reglas comerciales.|Validado conceptualmente|
|6|Incorporar una vista integrada del costo neto estadístico.|A desarrollar|
|7|Permitir reglas de volumen por categorías y conjuntos de artículos.|A completar|
|8|Diferenciar bonificaciones que afectan el costo de aquellas que no lo afectan.|A relevar|
|9|Mantener aprobación gerencial y trazabilidad de cambios.|Validado|
|10|Comparar versiones considerando el costo neto estadístico.|A desarrollar|
|11|Evaluar órdenes de compra excepcionales con precios manuales autorizados.|A probar|
|12|Tratar el impacto sobre precios de venta en un proceso posterior.|Pendiente de definición|

## 4. Próximos pasos y compromisos

Responsables propuestos según los equipos involucrados. La transcripción no establece responsables nominales ni fechas comprometidas para todas las actividades.

|Prioridad|Actividad|Responsable propuesto|
|---|---|---|
|Alta|Diseñar la nueva visualización integrada de costos y descuentos.|Desarrollo Zeetrex|
|Alta|Revisar el cálculo de descuentos aditivos, en cascada y por volumen.|Desarrollo Zeetrex|
|Alta|Relevar los descuentos y bonificaciones utilizados habitualmente en DIARCO.|Comercial DIARCO|
|Alta|Validar el cálculo del costo neto estadístico y su comparación entre listas.|DIARCO / Zeetrex|
|Media|Definir grupos de sucursales para asignación de listas.|DIARCO / Zeetrex|
|Media|Revisar los formatos Excel actuales de proveedores.|Compradores DIARCO|
|Media|Completar condiciones por familias, rubros, subrubros y conjuntos de productos.|Desarrollo Zeetrex|
|Media|Probar órdenes de compra excepcionales con precios manuales.|DIARCO / Zeetrex|
|Media|Validar el circuito de vigencia, aprobación y publicación.|DIARCO / Zeetrex|
|Media|Revisar el tratamiento de bonificaciones logísticas y acuerdos independientes de listas.|DIARCO / Zeetrex|
|Posterior|Definir el proceso de novedades de costos y actualización de precios de venta.|Comercial DIARCO / Zeetrex|

## 5. Ambiente de pruebas y validación

Se informó que se encuentran cargados en CONNEXA datos de descuentos provenientes de SGM, tanto en ambientes de testing como de producción, sujetos a su actualización.

Las reglas adicionales de bonificación, como MP, todavía requieren configuración, dado que no se encuentran representadas de la misma manera en SGM.

Se acordó facilitar el acceso al ambiente de testing para que los usuarios puedan experimentar con el módulo, configurar reglas, realizar simulaciones y generar órdenes de compra de prueba.

Se mencionó el envío del enlace de acceso y la habilitación de usuarios existentes.

## 6. Aspectos que requieren especial atención

Se identificaron cuatro cuestiones que deben resolverse antes de considerar funcionalmente completo el circuito:

Integridad de costos. El sistema debe distinguir claramente el costo de la orden de compra del costo neto estadístico, manteniendo la trazabilidad de las bonificaciones que explican la diferencia.

Tratamiento contable. Las bonificaciones instrumentadas mediante notas de crédito deben permitir identificar separadamente el ingreso de mercadería y el reconocimiento del descuento, facilitando su conciliación y auditoría.

Clasificación de acuerdos comerciales. No todos los ingresos o beneficios negociados con proveedores deben reducir el costo de los artículos. Se requiere una clasificación que contemple la naturaleza comercial, contable e impositiva de cada concepto.

Control de versiones y vigencias. Las modificaciones de listas y reglas deben preservar las condiciones utilizadas en transacciones históricas, evitando que cambios posteriores alteren su interpretación.

## 7. Conclusión

La reunión permitió avanzar significativamente en la validación funcional del módulo de Listas de Precios de Compra de Proveedores de CONNEXA.

El diseño presentado contempla gran parte de los requerimientos identificados, especialmente en lo relacionado con la administración de listas, reglas comerciales, condiciones de aplicación y circuitos de aprobación.

No obstante, se identificaron ajustes necesarios para adaptar la herramienta a la operatoria cotidiana de DIARCO, particularmente en la presentación integrada de los costos y la administración de bonificaciones.

La prioridad para la siguiente etapa será consolidar la operatoria comercial habitual de DIARCO en una interfaz sencilla, verificable y auditable, manteniendo la flexibilidad del motor de reglas para incorporar posteriormente acuerdos comerciales más complejos.

## 8. Recomendación de seguimiento

Desde una perspectiva funcional y de arquitectura de CONNEXA, se recomienda separar el trabajo posterior en tres frentes: completar la operatoria de listas y costos, relevar el Libro de Bonificaciones y sus implicancias contables, y definir el circuito de novedades de costos hacia precios de venta.

Esta separación permitirá avanzar con las funcionalidades prioritarias sin condicionar su implementación a la resolución inmediata de todos los escenarios comerciales especiales.

También se recomienda utilizar esta minuta como base de una matriz de requerimientos funcionales, distinguiendo funcionalidades ya implementadas, ajustes necesarios, desarrollos pendientes y decisiones que requieren validación de DIARCO.
