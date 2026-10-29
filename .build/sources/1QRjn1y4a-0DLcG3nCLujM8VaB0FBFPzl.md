# MINUTA DE REUNIÓN — DIARCO / ZEETREX

Proyecto CONNEXA | Comprador Inteligente — Mejoras funcionales y estrategia de despliegue del Bloque 1

|Datos de la reunión|Detalle|
|---|---|
|Fecha|20 de octubre de 2026|
|Hora|12:00 hs|
|Duración|1 hora, 18 minutos|
|Modalidad|Presencial|
|Versión|1.0|

Participantes

DIARCO: Diego Baldi, Roxana Frutos, Romina Garfi, Paloma Romero y Diego (apellido no identificado).

ZEETREX: Guillermo Añaños, Eduardo Ettlin, Alejandro Ledesma, Matías Ochoa y Thomas Marino.

## 1. Objetivo de la reunión

Se realizó una presentación de las mejoras incorporadas y previstas en el módulo Comprador Inteligente de CONNEXA, con especial atención a los procesos de generación y aprobación de órdenes de compra, condiciones comerciales, órdenes de compra madre, listas de precios y reglas de negociación con proveedores.

Asimismo, se analizaron particularidades operativas de DIARCO que deberán contemplarse durante la transición desde SGM hacia CONNEXA y se planteó la habilitación del ambiente de pruebas para que los usuarios de Compras puedan validar las funcionalidades.

## 2. Resumen ejecutivo

La reunión permitió avanzar en la definición funcional de varios procesos críticos para la operación de Compras.

El principal resultado fue la identificación de dos modalidades diferentes de órdenes de compra, que actualmente se agrupan bajo el concepto de orden de compra madre, pero que responden a necesidades comerciales y operativas distintas.

También se profundizó en el tratamiento de las condiciones comerciales, los descuentos y la relación entre las órdenes de compra y las listas de precios vigentes.

Se confirmó el enfoque de mantener transitoriamente en SGM determinados procesos, particularmente la gestión de precios de venta, mientras se avanza con el despliegue progresivo de CONNEXA.

Finalmente, se acordó facilitar el acceso al ambiente de testing para que los compradores puedan experimentar con las funcionalidades y plantear ajustes.

## 3. Temas tratados y definiciones funcionales

### 3.1. Generación y aprobación de órdenes de compra

Se revisó el circuito mediante el cual los compradores generan órdenes de compra y las remiten a aprobación.

Se estableció que las condiciones comerciales deben quedar definidas antes de enviar la orden al gerente para su autorización, de manera que la aprobación contemple los montos, cantidades y condiciones efectivamente negociadas.

Se analizaron las siguientes funcionalidades:

- Definición de condiciones de pago y entrega.
    
- Establecimiento de fechas estimadas de recepción.
    
- Definición de vigencia de las órdenes de compra.
    
- Administración de órdenes parcialmente recibidas.
    
- Posibilidad de mantener pendientes de entrega durante períodos prolongados, sujetos a autorización.
    
- Transmisión de las condiciones aprobadas a los documentos e interfaces correspondientes.
    

Se aclaró que una orden generada y aprobada en CONNEXA podrá transmitirse a SGM con su aprobación ya resuelta, evitando repetir el circuito de autorización.

Consideración importante: se identificó que mantener indefinidamente cantidades pendientes puede distorsionar las necesidades de reposición, dado que el sistema las considera mercadería por recibir.

Por este motivo, deberán establecerse criterios de vigencia, cierre y eventual extensión de órdenes.

### 3.2. Órdenes de compra madre y órdenes de compra abiertas

Este fue uno de los temas de mayor discusión.

Se identificaron dos necesidades funcionales diferentes.

A. Orden de compra madre — recepción dinámica

Esta modalidad responde principalmente a determinados proveedores de productos frescos y a operaciones donde las sucursales reciben mercadería sin generar previamente una orden de compra individual.

Se discutió un circuito en el cual:

1. Se genera una orden de compra madre asociada a un proveedor.
    
2. La orden queda disponible para ser utilizada por distintas sucursales.
    
3. Cuando llega la mercadería, el recepcionista selecciona la orden madre desde la PDA.
    
4. Se registran los productos y cantidades efectivamente recibidos.
    
5. CONNEXA genera internamente una orden de compra hija, vinculada a la madre y a la sucursal.
    
6. Las cantidades recibidas se descuentan del saldo de la orden madre.
    
7. La orden hija queda registrada para garantizar trazabilidad y conciliación posterior con la factura.
    

La propuesta permitiría evitar que los usuarios de sucursales deban generar manualmente órdenes de compra antes de cada recepción.

B. Orden de compra abierta — compromiso comercial

Se identificó una segunda modalidad asociada a acuerdos comerciales con proveedores.

En este caso, existe un compromiso de compra sobre determinadas cantidades, precios y eventualmente períodos de vigencia.

A partir de ese acuerdo se generan órdenes de compra individuales que consumen el saldo comprometido.

Las órdenes derivadas siguen el circuito habitual de aprobación, comunicación al proveedor y recepción.

Se planteó que parte de esta funcionalidad podría resolverse mediante el sistema de listas de precios y reglas comerciales de CONNEXA, evitando duplicar mecanismos de negociación.

Estado: se acordó diferenciar conceptualmente ambas modalidades. La implementación definitiva de la orden abierta quedó pendiente de evaluación funcional, particularmente por su posible superposición con las reglas comerciales.

### 3.3. Recepción de mercadería y trazabilidad

Se discutieron problemas operativos que se presentan cuando la mercadería llega a las sucursales antes de que exista una orden de compra o una recepción registrada.

Se mencionaron especialmente situaciones vinculadas con productos frescos y entregas durante fines de semana.

Estas situaciones pueden provocar:

- Existencias negativas.
    
- Ventas registradas antes del ingreso formal de mercadería.
    
- Distorsiones en los indicadores de stock y demanda.
    
- Diferencias entre lo solicitado, lo recibido y lo facturado.
    

La alternativa propuesta consiste en permitir una recepción controlada contra una orden madre, generando automáticamente la documentación interna necesaria.

Se remarcó la importancia de mantener trazabilidad por proveedor, sucursal, documento y mercadería efectivamente recibida.

No quedó completamente resuelto el tratamiento general de ventas con stock negativo ni de las devoluciones que generan ventas netas negativas.

Estos temas deberán analizarse separadamente por su impacto sobre los algoritmos de estimación de demanda.

### 3.4. Días de stock, cobertura y lead time

Se revisó el significado de los parámetros utilizados para calcular las necesidades de reposición.

Se diferenciaron los siguientes conceptos:

|Parámetro|Interpretación funcional|
|---|---|
|Días de stock|Objetivo comercial de disponibilidad de mercadería|
|Lead time|Tiempo necesario para recibir el abastecimiento|
|Cobertura|Horizonte utilizado para calcular las necesidades de reposición|
|Días de sobrestock|Parámetro de control de excesos de inventario|

Se explicó que la cobertura utilizada por el cálculo de reposición debe contemplar el objetivo comercial de stock y los tiempos logísticos necesarios para recibir la mercadería.

También se analizaron necesidades de mantenimiento masivo de parámetros.

Se mencionó la posibilidad de incorporar la futura estructura de clusters de sucursales y segmentos de surtido para facilitar la administración de criterios de reposición sobre grupos de artículos y sucursales.

Esta integración quedó planteada como una línea de evolución, no como una funcionalidad aprobada para el despliegue inmediato.

### 3.5. Administración de proveedores

Se mostraron las funcionalidades de asignación de proveedores a compradores y los mecanismos de mantenimiento individual y masivo.

Se contempló la posibilidad de importar listados mediante archivos Excel.

Se indicó que los permisos deberán configurarse de acuerdo con las responsabilidades de los usuarios definidos por DIARCO.

La administración masiva se consideró especialmente importante para reducir tareas repetitivas y facilitar el mantenimiento de carteras de proveedores.

### 3.6. Listas de precios de proveedores

Se presentó el mecanismo de administración de listas de precios de CONNEXA.

Entre las funcionalidades demostradas se destacaron:

- Versionado de listas con fechas de vigencia.
    
- Importación de listas mediante plantillas Excel.
    
- Validación de información suministrada por proveedores.
    
- Comparación entre precios anteriores y nuevos.
    
- Análisis de variaciones de costos.
    
- Administración de descuentos.
    
- Aplicación de listas a toda la compañía o a sucursales específicas.
    
- Registro de modificaciones y auditoría.
    

Se explicó que las listas pueden tener alcances diferentes, aplicándose una lista general cuando no existe una definición específica para determinada sucursal.

Se revisó especialmente el tratamiento de descuentos comerciales, incluyendo descuentos sucesivos en cascada y descuentos directos.

Pendiente: verificar los distintos esquemas de descuento utilizados por DIARCO y ajustar su representación en CONNEXA cuando corresponda.

### 3.7. Reglas y condiciones comerciales

Se presentó el motor de reglas comerciales de CONNEXA, destinado a representar negociaciones con proveedores.

Se mostraron posibilidades de establecer condiciones por:

- Cantidades o volúmenes.
    
- Importes de compra.
    
- Artículos, familias o categorías.
    
- Sucursales o grupos de sucursales.
    
- Períodos de vigencia.
    
- Descuentos aplicados a la orden de compra.
    
- Descuentos o bonificaciones instrumentados mediante notas de crédito.
    

También se explicó la posibilidad de establecer prioridades, acumulación de reglas y secuencias de aplicación.

Se destacó la herramienta de simulación, que permite evaluar los resultados económicos de una regla antes de ponerla en vigencia.

Se mostró además la trazabilidad de las modificaciones y aprobaciones.

Definición conceptual: las órdenes de compra conservan las condiciones comerciales y los precios vigentes al momento de su generación, aun cuando posteriormente se produzcan modificaciones en las listas.

Este criterio se relaciona con el control entre lo solicitado, lo recibido y lo facturado.

Se planteó adicionalmente la necesidad de contar con documentación formal de los acuerdos comerciales, eventualmente con aceptación o firma del proveedor, para atender requerimientos de auditoría.

### 3.8. Gestión de precios de venta

Se explicó que CONNEXA contempla separar las modificaciones de costos de las decisiones de modificación de precios de venta.

Una nueva lista de costos podrá generar una novedad de precios que deberá evaluarse antes de trasladarse al precio de venta.

Se identificaron tres alternativas:

1. Trasladar inmediatamente la variación al precio de venta.
    
2. Postergar su aplicación.
    
3. No trasladar la variación.
    

Se indicó que esta funcionalidad corresponde al Bloque 2, cuya planificación apunta a diciembre de 2026.

Hasta entonces, la gestión de precios de venta continuará operándose mediante SGM.

Quedó pendiente realizar reuniones específicas con los responsables de precios de DIARCO para definir el circuito funcional definitivo.

### 3.9. Alta de artículos y datos suministrados por proveedores

Se informó que se está trabajando en una plantilla para el alta de artículos.

El objetivo es que los proveedores suministren directamente la información necesaria, incluyendo características físicas y logísticas.

Se mencionaron datos como peso bruto, peso neto, dimensiones y otros atributos requeridos para la operación.

CONNEXA deberá validar la consistencia de la información recibida, mientras que DIARCO completará los datos internos correspondientes.

Se indicó que este trabajo se está coordinando con Liliana.

### 3.10. Ambiente de testing y participación de los compradores

Se confirmó la intención de habilitar el acceso al ambiente de pruebas de CONNEXA para los participantes de DIARCO.

El objetivo es permitir que los usuarios puedan recorrer las funcionalidades, ejecutar pruebas y detectar necesidades de ajuste antes del despliegue operativo.

Se mencionó la posibilidad de reutilizar o restablecer los usuarios existentes.

Por razones de seguridad, las credenciales iniciales deberán comunicarse por un canal adecuado, con cambio obligatorio de contraseña al primer acceso.

## 4. Acuerdos y definiciones principales

|N.º|Acuerdo o definición|Estado|
|---|---|---|
|1|Incorporar las condiciones comerciales antes de enviar la OC a aprobación|Definición funcional|
|2|Evitar una segunda aprobación en SGM para órdenes ya aprobadas en CONNEXA|Definición funcional|
|3|Diferenciar orden de compra madre de orden de compra abierta|Acordado conceptualmente|
|4|Contemplar recepción dinámica contra orden madre con generación automática de orden hija|Propuesta a validar|
|5|Mantener trazabilidad entre OC madre, OC hija, recepción y facturación|Criterio de diseño|
|6|Evaluar las compras abiertas junto con las reglas comerciales|Pendiente|
|7|Administrar listas de precios versionadas y con vigencia|Funcionalidad presentada|
|8|Revisar descuentos directos y en cascada|Pendiente de validación|
|9|Mantener la gestión de precios de venta en SGM durante el Bloque 1|Definición de transición|
|10|Habilitar testing para compradores de DIARCO|Próxima acción|

## 5. Pendientes y próximos pasos

Los responsables indicados como a definir no fueron asignados expresamente durante la reunión. Se proponen las áreas involucradas para facilitar el seguimiento.

|Prioridad|Actividad|Responsable propuesto|
|---|---|---|
|Alta|Habilitar y comunicar accesos al ambiente de testing|ZEETREX|
|Alta|Validar el circuito de OC madre y recepción desde PDA|DIARCO Compras / ZEETREX|
|Alta|Definir el tratamiento de órdenes abiertas y acuerdos comerciales|DIARCO Compras / ZEETREX|
|Alta|Verificar condiciones de pago y aprobación de órdenes|DIARCO Compras / ZEETREX|
|Alta|Revisar el tratamiento de descuentos directos y en cascada|DIARCO Compras / ZEETREX|
|Media|Definir vigencias, cierre y extensión de órdenes parcialmente cumplidas|DIARCO Compras|
|Media|Analizar ventas con stock negativo y su efecto sobre la demanda|DIARCO Operaciones / ZEETREX|
|Media|Validar los parámetros de stock, cobertura y lead time|DIARCO Compras / ZEETREX|
|Media|Coordinar el relevamiento funcional de precios de venta para el Bloque 2|DIARCO / ZEETREX|
|Media|Completar y validar la plantilla de alta de artículos|DIARCO / ZEETREX|
|Media|Revisar requisitos de documentación y aceptación de acuerdos comerciales|DIARCO Compras / Auditoría|

## 6. Riesgos y aspectos que requieren atención

Riesgo operativo en la recepción de frescos. La ausencia de un circuito adecuado para recibir mercadería sin órdenes individuales previamente generadas puede provocar dificultades operativas, especialmente en sucursales con recursos limitados.

Distorsión del cálculo de reposición. Las órdenes pendientes que permanecen abiertas durante períodos prolongados pueden reducir artificialmente las cantidades sugeridas para nuevas compras.

Calidad de información de stock y ventas. Los ingresos tardíos de mercadería, los stocks negativos y las devoluciones pueden afectar la confiabilidad de la información utilizada para estimar la demanda.

Complejidad de las reglas comerciales. La flexibilidad del motor de reglas requiere capacitación y controles adecuados para evitar configuraciones incorrectas que afecten costos y condiciones de compra.

Convivencia CONNEXA–SGM. Durante el despliegue por bloques deberán mantenerse claramente definidos los procesos que se ejecutan en cada sistema y las responsabilidades de integración.

## 7. Conclusiones

La reunión permitió avanzar significativamente en el entendimiento de las necesidades operativas del área de Compras y en su correspondencia con las funcionalidades de CONNEXA.

La discusión sobre órdenes de compra madre y órdenes abiertas permitió identificar procesos que requieren tratamientos funcionales diferenciados, especialmente para las operaciones de productos frescos y los acuerdos comerciales de largo plazo.

La presentación del motor de reglas y de las listas de precios permitió mostrar capacidades de administración comercial que podrán reemplazar o simplificar procedimientos actualmente realizados en SGM.

Como siguiente etapa, resulta fundamental trasladar la validación funcional al ambiente de testing, involucrando directamente a los compradores de DIARCO para comprobar los circuitos y consolidar los ajustes necesarios para el despliegue del Bloque 1.

## 8. Recomendación de gestión

Desde la perspectiva de implementación de CONNEXA, se recomienda organizar los pendientes de esta reunión en dos grupos claramente diferenciados.

Bloque 1 — Condiciones para el despliegue: concentrar los esfuerzos en la aprobación de órdenes, las condiciones comerciales, la recepción de mercadería, la gestión de órdenes madre y la validación de los usuarios compradores.

Bloque 2 — Evolución funcional: profundizar la gestión de precios de venta, los acuerdos comerciales complejos, la administración masiva de parámetros mediante clusters y las funcionalidades avanzadas de negociación.

Esta separación permitiría evitar que nuevas definiciones funcionales amplíen indefinidamente el alcance del primer despliegue.

Se recomienda además establecer una matriz de validación funcional, donde cada proceso sea probado por un comprador de DIARCO y clasificado como aprobado, aprobado con observaciones o pendiente de corrección. Esto proporcionaría evidencia concreta para determinar cuándo el Bloque 1 se encuentra en condiciones de avanzar a producción.

Documento elaborado a partir de la transcripción de la reunión del 20/10/2026. Los acuerdos se diferenciaron de las propuestas y de los temas que permanecen abiertos. La transcripción presenta algunos pasajes con reconocimiento de voz imperfecto, por lo que las definiciones funcionales deberán validarse con los participantes.
