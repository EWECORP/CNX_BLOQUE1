# MINUTA DE REUNIÓN

## Proyecto CONNEXA – DIARCO

Definición de estrategia para la implementación final en dos fases

Versión 1.0 | 13 de octubre de 2026

### 1. Datos generales

|Concepto|Detalle|
|---|---|
|Fecha|Martes 13/10/2026|
|Horario|09:00 hs|
|Duración|1 hora y 4 minutos|
|Modalidad|Presencial y remota|
|Proyecto|Implementación CONNEXA – DIARCO|
|Objetivo|Definir el alcance funcional, las prioridades y la estrategia de puesta en marcha|

Participantes

- Javier Vilela.
    
- Zeetrex (presencial): Pablo Duplessy y Eduardo Ettlin.
    
- Remoto: Daniel Padin, Luciano Calcagno y Matías Ochoa.
    

### 2. Resumen ejecutivo

Durante la reunión se analizaron las funcionalidades pendientes de CONNEXA y se planteó la necesidad de cerrar el alcance de una primera versión operativa para completar su implementación antes de finalizar 2026, dejando las mejoras y funcionalidades avanzadas para una segunda fase.

Se destacó que el proyecto ha alcanzado un nivel importante de desarrollo y que el principal desafío actual consiste en completar las definiciones funcionales pendientes, validar los procesos con los responsables de DIARCO y organizar una puesta en marcha progresiva.

Se identificaron como principales frentes de trabajo:

1. Gestión de costos y precios de venta: cerrar el modelo de listas de precios, costos vigentes, márgenes y publicación de precios.
    
2. Comprador Inteligente: finalizar las reglas de autorización, controles por días de stock y montos máximos de compra.
    
3. Acuerdos y condiciones comerciales: validar la aplicación de descuentos, bonificaciones y su impacto en los diferentes costos.
    
4. Planificación de la Distribución (PDD): resolver el tratamiento de productos de relleno, ocupación de camiones y responsabilidades operativas.
    
5. Implementación progresiva: organizar la capacitación, validación de datos maestros y migración funcional desde SGM hacia CONNEXA.
    

Se coincidió en que la primera versión debe aportar mejoras concretas respecto de los procedimientos actuales, sin intentar resolver todas las necesidades futuras antes de iniciar su utilización.

Conclusión central: priorizar la puesta en producción de las funcionalidades esenciales, consolidar su adopción operativa y evolucionar posteriormente sobre una plataforma en funcionamiento.

### 3. Estrategia de implementación en dos fases

#### Fase 1 – Versión operativa inicial (objetivo: antes de fin de 2026)

Se propuso concentrar los esfuerzos en completar las funcionalidades indispensables para comenzar a operar CONNEXA.

El alcance prioritario comprende:

|Módulo|Alcance previsto|
|---|---|
|Maestros|Gestión de artículos, proveedores, sucursales, surtidos y parámetros operativos|
|Compras|Generación de órdenes de compra y circuito de autorizaciones|
|Costos|Gestión de listas vigentes y costos de reposición|
|Precios|Generación, revisión y publicación de precios de venta|
|Condiciones comerciales|Administración de descuentos y bonificaciones esenciales|
|Distribución|Planificación de cargas, ocupación y seguimiento logístico|
|Recepciones|Incorporación progresiva de la funcionalidad en sucursales|
|Seguridad|Perfiles, permisos y auditoría de modificaciones|

Se estableció como criterio evitar incorporar nuevas funcionalidades que comprometan el cronograma, salvo aquellas que resulten indispensables para operar.

#### Fase 2 – Evolución funcional

Se identificaron capacidades que podrán desarrollarse posteriormente:

- Controles avanzados de exposición financiera y límites acumulados de compras.
    
- Mayor automatización e inteligencia en la determinación de precios.
    
- Optimización avanzada de cargas y distribución.
    
- Ampliación de reglas comerciales y simulaciones.
    
- Nuevas funcionalidades surgidas de la experiencia operativa.
    

La asignación definitiva de cada requerimiento a una fase deberá consolidarse en un documento de alcance.

### 4. Temas tratados y definiciones

#### 4.1. Gestión de listas de precios y costos

Se analizó la necesidad de separar conceptualmente las listas de precios de proveedores, las condiciones comerciales y los distintos costos utilizados por la organización.

Se planteó que una misma lista puede tener diferentes vigencias operativas según su utilización.

Conceptos identificados:

|Concepto|Utilización|
|---|---|
|Costo de compra / reposición|Valorización de nuevas órdenes de compra|
|Costo interno / transferencia|Movimientos de mercadería entre depósitos y sucursales|
|Costo para formación de precios|Determinación de precios de venta y márgenes comerciales|
|Costo promedio ponderado|Valorización histórica y análisis contable|

Se destacó que estos costos pueden diferir y que no necesariamente deben modificarse simultáneamente.

Criterios discutidos:

- Las listas de proveedores deberán mantener su historial y vigencia.
    
- Deberá permitirse cargar nuevas listas sin aplicarlas inmediatamente a todos los procesos.
    
- El sistema deberá distinguir la vigencia para compras, transferencias y formación de precios.
    
- Se deberá contemplar la posibilidad de aplicar, postergar o descartar el traslado de una modificación.
    
- Deberá definirse el momento exacto de entrada en vigencia, considerando los procesos operativos en ejecución.
    
- Las listas podrán tener vigencia abierta hasta su reemplazo por una nueva.
    

Pendiente: formalizar el modelo de costos y sus reglas de vigencia, incluyendo la nomenclatura definitiva.

#### 4.2. Formación y publicación de precios de venta

Se revisó el procedimiento actual de DIARCO, basado parcialmente en planillas Excel y márgenes diferenciados por artículo y sucursal.

Se identificó un esquema donde existe un precio o margen de referencia, al cual se aplican ajustes según las características de cada sucursal, sus costos logísticos y decisiones comerciales.

Se discutió la necesidad de separar la generación de un precio teórico de la decisión de publicarlo.

Flujo propuesto para la primera versión:

Nueva lista de costos del proveedor

Evaluación del impacto en precios

Identificación de cambios que generan novedades

Revisión por el comprador

Aceptar, postergar o modificar el precio sugerido

Lista de precios pendiente de publicación

Publicación en los sistemas operativos

Mediante un mecanismo de transferencia a definir

Se aclaró que una novedad de precio no implica automáticamente su publicación.

Para la primera versión se propuso implementar un modelo mínimo viable que respete la dinámica actual de DIARCO.

Pendientes principales:

- Validar las planillas actuales de formación de precios.
    
- Determinar el margen teórico por artículo y sucursal.
    
- Definir cómo se incorporan costos logísticos y otros componentes.
    
- Identificar quién tiene autoridad para modificar y aprobar precios.
    
- Resolver el mecanismo de publicación y transferencia a los sistemas operativos.
    
- Revisar las intervenciones sucesivas de distintas áreas sobre un mismo precio.
    

La incorporación de reglas inteligentes de posicionamiento competitivo y optimización de márgenes quedó planteada como evolución posterior.

#### 4.3. Comprador Inteligente – Autorizaciones y controles

Se revisaron los requerimientos surgidos durante las demostraciones funcionales.

Funcionalidades informadas como implementadas o resueltas:

- Autorización y rechazo de órdenes de compra por línea.
    
- Carga de condiciones comerciales, plazos de pago y entrega antes de enviar a autorización.
    
- Rechazo con observaciones del responsable.
    
- Retorno de la operación a la instancia anterior para su corrección.
    
- Manejo de listas de compra globales y excepciones por sucursal.
    

Controles priorizados para la primera versión:

|Control|Definición|
|---|---|
|Días máximos de stock|Utilizar los parámetros autorizados para cada artículo|
|Monto máximo de compra|Definir límites según el perfil autorizado|
|Perfiles|Diferenciar quién consulta y quién puede modificar parámetros|
|Auditoría|Registrar usuario, fecha y modificaciones|
|Reportes|Identificar artículos y sucursales con días de stock fuera de los límites establecidos|

Se remarcó el riesgo de que un comprador pueda modificar los días máximos de stock para eludir una restricción y posteriormente restaurar el valor original.

Por este motivo, se consideró indispensable contar con perfiles de autorización y mecanismos de consulta y auditoría.

Se solicitó disponer de reportes que permitan identificar, por ejemplo, artículos con días de stock autorizados superiores a los parámetros habituales de su categoría.

Diferido para evaluación en Fase 2: límites acumulados por proveedor, exposición de cuenta corriente y controles financieros más sofisticados.

#### 4.4. Órdenes de compra de gran volumen

Se analizó la necesidad de mantener la posibilidad de emitir órdenes de compra por grandes cantidades, cuya distribución definitiva se determina posteriormente.

Estas operaciones pueden representar compromisos de compra en los cuales la mercadería permanece inicialmente en poder del proveedor.

Se identificaron como requerimientos:

- Registrar el compromiso de compra.
    
- Administrar fechas de entrega.
    
- Permitir la asignación posterior de cantidades y destinos.
    
- Diferenciar la mercadería almacenada por el proveedor de aquella recibida en instalaciones propias.
    

Se consideró una funcionalidad importante para preservar los procedimientos comerciales actuales.

Pendiente: completar el diseño operativo de la asignación posterior y su impacto en stock y recepciones.

#### 4.5. Condiciones comerciales y descuentos

Se revisó el tratamiento de descuentos incluidos en factura y bonificaciones recuperadas posteriormente mediante notas de crédito.

Se destacó que el sistema deberá contemplar distintos mecanismos de cálculo y aplicación.

|Tipo de condición|Tratamiento a considerar|
|---|---|
|Descuento en factura|Impacto directo en la compra|
|Descuento por nota de crédito|Recuperación posterior|
|Descuento por volumen|Según unidades o importes|
|Rappel|Bonificación vinculada a objetivos de volumen|
|Acuerdos de exhibición|Condiciones específicas acordadas con proveedores|
|Descuentos encadenados|Aplicación según secuencia o prioridad|

Se discutió la necesidad de configurar para cada condición:

- Secuencia o prioridad de aplicación.
    
- Carácter acumulativo o independiente.
    
- Impacto en la orden de compra.
    
- Impacto en los costos internos y de reposición.
    
- Recuperación mediante factura o nota de crédito.
    
- Período de vigencia.
    
- Alcance por proveedor, rubro o artículo.
    

Se informó que CONNEXA ya dispone de una estructura configurable para administrar estos impactos, aunque será necesario validar las reglas concretas de utilización.

Pendiente: revisar con los responsables comerciales las distintas modalidades de descuento utilizadas actualmente y documentar su interpretación funcional.

#### 4.6. Planificación de la Distribución – PDD

Se revisó el proceso de generación de propuestas de carga y la necesidad de optimizar la ocupación de camiones.

Se analizaron especialmente los casos en que, luego de asignar los productos obligatorios y opcionales, todavía queda capacidad disponible.

Se propuso disponer de un conjunto de artículos habilitados para completar las cargas.

Aspectos considerados:

- Lista de productos de relleno definida por el área comercial.
    
- Posibilidad de permitir mayores días de stock para determinados productos.
    
- Parametrización del excedente permitido.
    
- Priorización de productos sensibles.
    
- Definición de un porcentaje mínimo de ocupación del camión.
    
- Simulación de cargas para anticipar necesidades de transporte.
    
- Seguimiento de pallets críticos, pallets normales y capacidad pendiente.
    

Durante la discusión se mencionaron porcentajes de ocupación cercanos al 70–75 %, sin quedar formalizado un valor definitivo.

También se destacó que las decisiones comerciales sobre productos de refuerzo deben permanecer bajo responsabilidad del área comercial, mientras que Base 2 debe intervenir en la planificación y ejecución logística.

Pendientes:

- Validar con Base 2 las reglas operativas de completamiento.
    
- Determinar quién administra los artículos habilitados para relleno.
    
- Establecer límites de sobrestock permitidos.
    
- Definir el porcentaje mínimo de ocupación.
    
- Precisar qué funcionalidades estarán disponibles en la primera versión.
    

#### 4.7. Variables logísticas

Se mencionó la necesidad de entregar un listado de las variables logísticas actualmente cargadas, identificando los datos faltantes y aquellos que requieren corrección.

Se observó que existen parámetros ya registrados, pero que algunos factores necesitan revisión.

Se planteó preparar un Excel para facilitar la validación por parte de los responsables de DIARCO.

El objetivo es permitir que las áreas operativas trabajen sobre información concreta, identificando los parámetros faltantes o incorrectos, en lugar de iniciar nuevamente el relevamiento.

#### 4.8. Clusters y segmentos de surtido

Se informó que CONNEXA dispone de un análisis y una propuesta funcional para administrar clusters de sucursales y segmentos de surtido.

Se mencionó la necesidad de validar la definición de los segmentos con los responsables del negocio.

Se destacó que esta funcionalidad no debe convertirse en un impedimento para la puesta en marcha, dado que actualmente ya existe una relación entre artículos y sucursales que permite operar.

La clusterización podrá incorporarse progresivamente sin bloquear la implementación inicial.

### 5. Estrategia de puesta en marcha

Se planteó organizar la implementación mediante una secuencia de habilitación funcional, capacitación y transferencia de responsabilidades.

La puesta en marcha dependerá tanto de la disponibilidad técnica de CONNEXA como de la capacidad operativa de DIARCO para absorber los cambios.

|Etapa|Actividades principales|Resultado esperado|
|---|---|---|
|1. Maestros y surtidos|Validación de datos, capacitación y habilitación del mantenimiento|CONNEXA como origen de gestión de los maestros habilitados|
|2. Recepciones|Despliegue progresivo en sucursales|Incorporación gradual de la operación|
|3. Costos y precios|Validación de listas, márgenes y circuitos de publicación|Gestión de costos y precios desde CONNEXA|
|4. Compras y distribución|Consolidación de los circuitos operativos|Operación integrada de abastecimiento|

La secuencia expresa una propuesta de organización de los frentes tratados; no constituye un cronograma definitivo aprobado.

Se destacó que, una vez habilitado el mantenimiento de determinados maestros en CONNEXA, las modificaciones deberán originarse allí y transferirse a SGM, evitando el mantenimiento paralelo.

Para las recepciones será necesario determinar el orden de incorporación de sucursales, considerando barrios, mayoristas y distintas zonas geográficas.

Se consideró fundamental que cada etapa tenga responsables identificados, capacitación previa y validaciones operativas.

### 6. Acuerdos y criterios de trabajo

De la reunión se desprenden los siguientes acuerdos y lineamientos:

1. Priorizar una primera versión operativa: concentrar el esfuerzo en las funcionalidades indispensables para iniciar la operación antes de finalizar el año.

2. Separar alcance inicial y evolución: documentar los requerimientos que deben incorporarse ahora y aquellos que pueden esperar a una segunda versión.

3. Evitar la expansión indefinida del alcance: las nuevas solicitudes deberán evaluarse según su necesidad operativa y su impacto en el cronograma.

4. Demostrar mejoras concretas: la adopción de CONNEXA debe ofrecer beneficios visibles respecto de los procesos y planillas actuales.

5. Mantener controles y trazabilidad: las autorizaciones, modificaciones de parámetros y decisiones comerciales deben quedar registradas.

6. Validar con los responsables del negocio: las reglas de costos, precios, condiciones comerciales y distribución deben responder a las necesidades reales de DIARCO.

7. Implementar progresivamente: cada módulo deberá acompañarse con capacitación, validación de datos y asignación de responsabilidades.

### 7. Próximos pasos y responsables propuestos

Los responsables que se indican son propuestas de coordinación basadas en los temas discutidos. No todos fueron asignados formalmente durante la reunión.

|Nº|Actividad|Responsable propuesto|Prioridad|
|---|---|---|---|
|1|Consolidar el alcance de Fase 1 y Fase 2|Zeetrex / Dirección del proyecto|Alta|
|2|Validar el modelo de costos, listas y vigencias|Zeetrex / Comercial DIARCO|Crítica|
|3|Relevar el procedimiento actual de formación de precios|Comercial DIARCO / Zeetrex|Crítica|
|4|Definir el circuito de publicación de precios|Sistemas / Comercial / Zeetrex|Crítica|
|5|Finalizar perfiles y límites de autorización de compras|Compras / Zeetrex|Alta|
|6|Preparar reportes de días de stock y límites autorizados|Zeetrex|Alta|
|7|Validar descuentos y condiciones comerciales|Compras / Comercial / Zeetrex|Alta|
|8|Resolver reglas de relleno de camiones|Base 2 / Comercial / Zeetrex|Alta|
|9|Preparar Excel de variables logísticas para validación|Zeetrex / Logística DIARCO|Alta|
|10|Definir el despliegue de recepciones por sucursal|Operaciones DIARCO / Zeetrex|Alta|
|11|Organizar capacitaciones y validación de maestros|DIARCO / Zeetrex|Alta|
|12|Validar la propuesta de clusters y segmentos de surtido|Comercial DIARCO / Zeetrex|Media|

### 8. Riesgos identificados

|Riesgo|Impacto|Medida recomendada|
|---|---|---|
|Definiciones pendientes en precios y costos|Alto|Cerrar el modelo funcional con los responsables del negocio|
|Incorporación continua de requerimientos|Alto|Establecer alcance y control de cambios por versión|
|Dependencia de procesos manuales y Excel|Alto|Validar reglas existentes antes de automatizarlas|
|Modificación no autorizada de parámetros|Alto|Implementar perfiles, auditoría y reportes de control|
|Falta de disponibilidad de usuarios clave|Alto|Establecer agenda de validaciones y responsables|
|Diferencias entre operación actual y nuevos circuitos|Alto|Capacitar y ejecutar pruebas operativas|
|Capacidad limitada de DIARCO para absorber el despliegue|Medio/Alto|Implementación progresiva por módulo y sucursal|

### 9. Cuestiones pendientes de decisión

Se identificaron cinco definiciones que requieren especial atención:

1. Modelo definitivo de costos y precios. Determinar qué costo utiliza cada proceso, cómo se administra su vigencia y cómo se generan y publican los precios de venta.

2. Alcance de la primera versión. Establecer qué funcionalidades resultan imprescindibles y cuáles se trasladarán a la segunda fase.

3. Gobierno de parámetros y autorizaciones. Determinar quién puede modificar días de stock, márgenes, condiciones comerciales y límites de compra.

4. Reglas de planificación logística. Definir criterios de ocupación de camiones, artículos de relleno, excedentes permitidos y responsabilidades de Base 2 y Comercial.

5. Plan de implementación. Formalizar el cronograma, los responsables, la capacitación y los criterios de aceptación para cada etapa.

### 10. Conclusiones y recomendaciones

La reunión permitió avanzar en la delimitación del alcance necesario para completar la implementación de CONNEXA.

Se observa que una parte importante de las funcionalidades ya se encuentra desarrollada o encaminada, pero persisten definiciones de negocio que condicionan el cierre de algunos circuitos.

El módulo de costos y precios de venta aparece como uno de los principales puntos críticos, por su complejidad y por su relación con compras, márgenes, transferencias y valorización de movimientos.

También se identificó la necesidad de fortalecer la coordinación entre el equipo de desarrollo y los responsables funcionales de DIARCO, evitando que cada reunión genere nuevos requerimientos sin una evaluación de prioridad.

Recomendación de gestión

Se propone formalizar inmediatamente tres instrumentos de control:

- Matriz de Alcance Fase 1 / Fase 2: identificar funcionalidades incluidas, excluidas y pendientes de decisión.
    
- Plan Maestro de Implementación: definir actividades, responsables, dependencias, fechas y criterios de aceptación.
    
- Registro de Definiciones Funcionales: documentar cada decisión relevante, quién la aprobó y su impacto en el desarrollo.
    

Estos instrumentos permitirían transformar el objetivo de implementación antes de fin de año en un plan verificable y controlable.

### 11. Cierre

La orientación general de la reunión fue avanzar hacia la puesta en operación efectiva de CONNEXA, evitando prolongar indefinidamente la etapa de diseño.

El éxito de la implementación dependerá de cerrar oportunamente las definiciones pendientes, asegurar la participación de los responsables de DIARCO y mantener un alcance controlado para la primera versión.

Próximo hito recomendado: realizar una reunión específica de cierre funcional de costos y precios, seguida de la aprobación formal del alcance de Fase 1 y del cronograma de implementación.


> Documento elaborado a partir de la transcripción de la reunión del 13/10/2026. Dado que la transcripción contiene fragmentos de reconocimiento de voz imprecisos, se distinguieron los acuerdos expresados de las propuestas y cuestiones pendientes de validación.
