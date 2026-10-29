# Minuta de Reunión — Logística DIARCO / CONNEXA

Versión 1.0 | 20 de octubre de 2026

Proyecto: CONNEXA — Planificador de Viajes y Distribución

Fecha: 20/10/2026 Horario: 09:01 a 10:04 hs Duración: 1 hora, 2 minutos y 45 segundos

Participantes

- DIARCO: Christian Rojas y Gastón.
    
- ZEETREX: Guillermo Añaños, Eduardo Ettlin y Matías Ochoa.
    

## 1. Objetivo de la reunión

Presentar al equipo de Logística de DIARCO el módulo Planificador de Viajes de CONNEXA, revisar su funcionamiento y validar los criterios operativos necesarios para integrarlo con el sistema de gestión de depósitos de Valkimia (VKM).

Se buscó especialmente establecer la distribución de responsabilidades entre las áreas Comercial y Logística, el tratamiento de la demanda de abastecimiento, la planificación de cargas, las restricciones operativas y los mecanismos de integración.

## 2. Resumen ejecutivo

Durante la reunión se realizó una demostración funcional del Planificador de Viajes de CONNEXA, recorriendo el proceso desde la generación de la demanda logística hasta la confirmación y transferencia de los viajes al sistema de depósitos.

Se consolidó como criterio central que CONNEXA será el sistema responsable de administrar la demanda logística y planificar los viajes, mientras que VKM será responsable de ejecutar la preparación y el despacho de la mercadería.

Se identificaron los siguientes aspectos principales:

1. Demanda logística centralizada: CONNEXA calculará diariamente las necesidades de abastecimiento, considerando demanda proyectada, stock, transferencias manuales y riesgo de quiebre.

2. Separación de responsabilidades: Comercial determinará qué mercadería necesitan las sucursales; Logística determinará cómo y cuándo transportarla, dentro de las restricciones operativas.

3. Planificación por prioridades: Se priorizarán los requerimientos obligatorios y aquellos con mayor riesgo de quiebre, evitando que la necesidad de completar camiones genere sobrestock innecesario.

4. Integración CONNEXA–VKM: Se buscará una integración mediante API. Como alternativa de contingencia se evaluará la utilización de archivos Excel compatibles con los mecanismos actuales de importación de VKM.

5. Tratamiento de redespachos: Se identificó la necesidad de incorporar un estado específico para mercadería preparada que no haya podido ser despachada.

6. Capacidad operativa: Se incorporarán indicadores para diferenciar pallets completos de pallets de picking, permitiendo estimar mejor la carga de trabajo del centro de distribución.

7. Validación funcional: Se habilitará un ambiente de pruebas para que el equipo de Logística evalúe el funcionamiento y proponga ajustes antes de avanzar hacia producción.

## 3. Temas tratados y definiciones funcionales

### 3.1. Generación de demanda logística

Se explicó que CONNEXA calcula automáticamente las necesidades de abastecimiento de cada sucursal, utilizando información de ventas, demanda proyectada, stock disponible y parámetros de cobertura.

Adicionalmente, el sistema contempla requerimientos manuales asociados con necesidades comerciales especiales, ofertas, refuerzos de abastecimiento y decisiones de acopio.

La demanda no atendida permanece bajo control de CONNEXA y se recalcula diariamente.

Criterio funcional: Los requerimientos enviados a preparación dejan de formar parte de la deuda logística disponible para nuevas planificaciones, evitando duplicaciones. La mercadería pendiente de despacho debe permanecer identificada dentro del circuito de ejecución.

### 3.2. Priorización de abastecimiento

Se presentó el criterio de clasificación entre requerimientos obligatorios y opcionales.

La prioridad estará asociada principalmente con el riesgo de quiebre de stock, considerando los días de cobertura y los tiempos de reposición.

Se destacó que la eficiencia logística no debe evaluarse exclusivamente por la ocupación de los camiones, sino también por su impacto sobre la disponibilidad de productos, la inmovilización de inventarios y el resultado comercial.

Definición de enfoque: Se priorizará satisfacer la demanda real de las sucursales antes que incorporar mercadería adicional únicamente para completar la capacidad de transporte.

### 3.3. Planificación y consolidación de viajes

Se realizó una demostración de la creación de viajes, selección del tipo de vehículo, incorporación de destinos y asignación de mercadería.

Se verificaron las capacidades de:

- Seleccionar una o varias sucursales por viaje.
    
- Incorporar automáticamente los requerimientos obligatorios.
    
- Agregar o retirar requerimientos opcionales.
    
- Visualizar las líneas que no pueden incorporarse por falta de stock o capacidad.
    
- Controlar pallets, volumen y peso.
    
- Confirmar viajes y someterlos a aprobación antes de su envío a VKM.
    

Se solicitó mejorar la visualización de la composición de las cargas, diferenciando los pallets completos de aquellos que requieren picking.

### 3.4. Capacidad de los vehículos

Se revisaron los criterios de control de capacidad mediante pallets, volumen y peso.

Se planteó permitir una tolerancia operativa en cantidad de pallets, debido a que determinados productos livianos pueden consolidarse durante la preparación.

No obstante, se estableció que el límite de peso no debe flexibilizarse, por tratarse de una restricción de seguridad y normativa.

También se mencionó la conveniencia de incorporar la cantidad de ejes y revisar los parámetros de los vehículos.

### 3.5. Responsabilidades comerciales y logísticas

Se debatió la práctica actual de modificar cantidades o incorporar mercadería durante la planificación de los camiones.

Se propuso que las decisiones sobre incrementos de stock, acopios y requerimientos extraordinarios sean registradas por el área Comercial o por usuarios expresamente autorizados.

Logística debería concentrarse en organizar la distribución, sin asumir decisiones comerciales que puedan generar sobrestock o afectar la rentabilidad.

Se consideró importante registrar el usuario solicitante y el motivo de los requerimientos extraordinarios para garantizar trazabilidad.

### 3.6. Integración con VKM y estados operativos

Se identificaron los principales momentos que deben reflejarse entre ambos sistemas:
![[Pasted image 20261021113039.png]]


CONNEXA

Demanda logística y planificación

Viaje confirmado y enviado

VKM

Preparación y despacho

Despachado

Mercadería en tránsito

Redespacho

Pendiente de nueva salida

Se acordó conceptualmente incorporar el redespacho al seguimiento de CONNEXA, con una prioridad superior a la demanda ordinaria. La definición técnica de las transiciones y los datos devueltos por VKM queda pendiente.

### 3.7. Actualización de stock y requerimientos

Se aclaró que el cálculo de demanda logística es periódico, pero la validación de disponibilidad debe considerar el stock actualizado al momento de planificar.

Se planteó incorporar una función para actualizar las líneas de planificación cuando existan nuevos ingresos de mercadería o requerimientos manuales.

Esto permitirá aprovechar mercadería recibida durante el día sin esperar necesariamente al siguiente cálculo general.

### 3.8. Indicadores del centro de distribución

Se propuso ampliar el tablero de control con información que permita gestionar no solamente el volumen de mercadería, sino también la complejidad operativa y el cumplimiento del abastecimiento.

Entre los indicadores mencionados se encuentran la deuda logística, las líneas pendientes, los pallets críticos, la mercadería en preparación, los despachos, el stock disponible y las entregas pendientes de proveedores.

También se destacó la necesidad de disponer de indicadores para estimar la carga de trabajo de picking.

## 4. Acuerdos y compromisos identificados

La siguiente matriz distingue las definiciones surgidas durante la reunión de los aspectos que todavía requieren validación.

|N.º|Acuerdo o compromiso|Situación|
|---|---|---|
|1|CONNEXA administrará la deuda logística y la planificación de viajes.|Criterio validado|
|2|VKM ejecutará la preparación y el despacho.|Criterio validado|
|3|Incorporar tratamiento específico de redespachos.|Desarrollo a definir|
|4|Diferenciar pallets completos y pallets de picking.|Mejora solicitada|
|5|Permitir actualización de líneas por nuevos ingresos y requerimientos manuales.|Mejora solicitada|
|6|Evaluar tolerancias en pallets, manteniendo el límite estricto de peso.|Parámetros a definir|
|7|Mantener las decisiones comerciales de abastecimiento bajo responsabilidad de usuarios autorizados.|Criterio propuesto|
|8|Avanzar con integración mediante API y evaluar Excel como contingencia.|Pendiente técnico|
|9|Habilitar usuarios de prueba para el equipo de Logística.|Compromiso operativo|
|10|Recibir propuestas de indicadores adicionales para el tablero.|Pendiente de relevamiento|

## 5. Próximos pasos

|Prioridad|Actividad|Responsable propuesto|
|---|---|---|
|Alta|Enviar listado de usuarios que utilizarán el ambiente de pruebas.|DIARCO – Logística|
|Alta|Habilitar accesos al ambiente TEST y coordinar pruebas funcionales.|ZEETREX|
|Alta|Obtener y validar las especificaciones de integración con VKM.|ZEETREX / Valkimia|
|Alta|Solicitar el formato Excel utilizado actualmente para importar viajes a VKM.|DIARCO – Logística|
|Alta|Definir el tratamiento técnico y funcional de los redespachos.|ZEETREX / DIARCO / Valkimia|
|Media|Incorporar indicadores de pallets completos y picking.|ZEETREX|
|Media|Definir tolerancias de capacidad y parámetros de vehículos.|DIARCO – Logística / ZEETREX|
|Media|Evaluar actualización de stock y requerimientos durante la planificación.|ZEETREX|
|Media|Definir permisos para requerimientos extraordinarios y sus motivos.|DIARCO – Comercial / Logística|
|Media|Relevar indicadores adicionales del tablero operativo.|DIARCO – Logística|

Los responsables indicados son propuestos según la naturaleza de las tareas. La transcripción no permite confirmar una asignación nominal ni fechas comprometidas para todos los puntos.

## 6. Temas pendientes de definición

Se identificaron aspectos que deberán resolverse durante la etapa de validación funcional:

- Redespachos: tratamiento del stock preparado, prioridad de salida y mecanismo para evitar su duplicación en la demanda.
    
- Restricciones de mercadería: reglas de compatibilidad para productos alimenticios, limpieza y perfumería, incluyendo particularidades de determinadas sucursales.
    
- Ocupación mínima de vehículos: eventual utilización de advertencias o autorizaciones cuando los viajes se encuentren por debajo de los porcentajes esperados.
    
- Actualización de la planificación: frecuencia de recálculo de demanda y mecanismo de refresco de stock y requerimientos.
    
- Aprobación de viajes: definición de roles para planificación, revisión, aprobación y envío a VKM.
    
- Integración: confirmación de las API disponibles, estados informados y alternativa de contingencia.
    

## 7. Conclusiones

La reunión permitió avanzar en la validación conceptual del Planificador de Viajes de CONNEXA con el equipo de Logística de DIARCO.

El principal cambio de enfoque consiste en pasar de una operación orientada predominantemente a completar camiones a un modelo que contemple simultáneamente riesgo de quiebre, disponibilidad de mercadería, eficiencia operativa y costo del inventario.

La demostración permitió identificar mejoras funcionales concretas, especialmente en la gestión de redespachos, la medición de la carga de trabajo de picking y la actualización de requerimientos durante la jornada.

Como siguiente instancia, se considera necesario realizar pruebas operativas con usuarios de DIARCO, consolidar las definiciones pendientes y avanzar en la integración con VKM.

## 8. Observaciones y recomendaciones de ZEETREX

Análisis complementario — no constituye un acuerdo formal de la reunión.

Desde una perspectiva de arquitectura y gestión operativa, se recomienda prestar especial atención a tres aspectos.

Primero, la responsabilidad única de cada requerimiento. La transición entre CONNEXA y VKM debería estar respaldada por identificadores únicos y estados reconciliables. Esto es especialmente importante cuando existen diferencias entre cantidades planificadas, preparadas y efectivamente despachadas.

Segundo, el tratamiento de redespachos. Se considera prioritario definirlo antes de la puesta en producción, ya que puede afectar la disponibilidad real del centro de distribución, generar duplicaciones y distorsionar el cálculo de necesidades.

Tercero, los indicadores de gestión. La productividad logística debería medirse conjuntamente con el nivel de servicio a las sucursales. Maximizar la ocupación de vehículos no necesariamente implica optimizar el resultado económico de la empresa.

La recomendación es que la próxima reunión se concentre en validar el circuito completo de un viaje, desde su planificación hasta su despacho y eventual redespacho, utilizando casos reales de DIARCO. Esto permitiría cerrar las definiciones funcionales antes de comprometer una fecha de implementación.
