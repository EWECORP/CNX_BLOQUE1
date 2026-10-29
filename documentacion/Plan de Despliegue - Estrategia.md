# Minuta de Reunión — Plan de Implementación CONNEXA en DIARCO

Versión 1.0 | 16 de octubre de 2026 | 17:34 hs | Duración: 1 h 14 min

Participantes — Zeetrex: Eduardo Ettlin, Daniel Padin, Luciano Calcagno, Silvina Sagesse y Fernando Fallardi.

Objetivo: Revisar y consensuar la estrategia de implementación y despliegue de CONNEXA en DIARCO, definiendo el esquema de convivencia con SGM, los módulos prioritarios, las integraciones necesarias y el plan que se presentará a Javier Villela.

## 1. Resumen ejecutivo

Durante la reunión se revisó la estrategia de implementación de CONNEXA, considerando las limitaciones operativas de DIARCO, las dependencias existentes con SGM y la necesidad de acelerar la adopción de la nueva plataforma.

El principal cambio de enfoque consiste en desacoplar la puesta en producción de CONNEXA del reemplazo completo de SGM, permitiendo que los usuarios comiencen a operar progresivamente en la nueva plataforma mientras SGM continúa ejecutando determinadas funciones transaccionales.

Se establecieron los siguientes lineamientos:

1. Implementación progresiva por módulos. No será necesario esperar a que todas las funcionalidades estén operativas para comenzar su utilización.
    
2. Convivencia controlada con SGM. Se mantendrán las integraciones necesarias para garantizar la continuidad operativa.
    
3. CONNEXA como plataforma principal de gestión. Los nuevos procesos se trasladarán progresivamente a CONNEXA, manteniendo mecanismos excepcionales de operación en SGM.
    
4. SGM conservará temporalmente la autoridad sobre el stock, los pendientes de recepción y determinados procesos de conciliación.
    
5. El 7 de noviembre de 2026 se mantiene como hito objetivo de disponibilidad del primer bloque funcional, diferenciándolo del despliegue efectivo y la adopción por los usuarios.
    
6. El despliegue de recepciones se estima en cinco o seis semanas, sujeto a la validación del plan operativo y de las integraciones necesarias.
    

El objetivo compartido es lograr una implementación que reduzca las dependencias críticas, facilite la capacitación y permita demostrar rápidamente el valor operativo de CONNEXA.

## 2. Estrategia funcional y tecnológica acordada

***Etapa 1 — Convivencia operativa***

**Prioritaria**

>Las operaciones se originan progresivamente en CONNEXA y se sincronizan con SGM, que mantiene las funciones transaccionales aún no migradas.
![[Pasted image 20261019084754.png]]

***Etapa 2 — Consolidación***

**Posterior**

>Incorporación del kardex, valorización, precios y funciones adicionales de inventario para avanzar hacia una mayor autonomía de CONNEXA.

### 2.1. Órdenes de compra

Se propuso que las órdenes de compra se generen en CONNEXA y posteriormente se transmitan a SGM.

Durante la transición, SGM conservará el circuito actual de emisión y envío de órdenes de compra a proveedores, incluyendo los mecanismos de correo electrónico y EDI.

Se deberán considerar los siguientes aspectos:

- Vincular el identificador de la orden de compra CONNEXA con el número definitivo asignado por SGM.
    
- Validar las diferencias de valorización entre ambos sistemas.
    
- Analizar con Hernán la posibilidad de recibir órdenes aprobadas y evitar una segunda aprobación manual.
    
- Mantener temporalmente la valorización de SGM cuando sea necesaria para preservar los procesos existentes.
    
- Desarrollar y comparar en paralelo la generación de documentos EDI desde CONNEXA antes de cambiar el emisor definitivo.
    

Se admitirá la generación excepcional de órdenes de compra en SGM para operaciones especiales que todavía no estén cubiertas por CONNEXA.

### 2.2. Recepciones

Se decidió mantener temporalmente a SGM como fuente principal de información sobre las órdenes pendientes de recepción.

CONNEXA deberá recuperar las órdenes y sus pendientes, permitir la recepción y transmitir el resultado a SGM para consolidar la operación.

La principal dependencia técnica es reconstruir el mecanismo de sincronización de órdenes de compra desde SGM.

Se analizaron dos alternativas:

|Alternativa|Características|
|---|---|
|Change Data Capture (CDC)|Sincronización cercana al tiempo real, con impacto potencial sobre el rendimiento de SQL Server|
|Sincronización periódica|Menor dependencia de CDC, pero con una demora entre la generación de una orden y su disponibilidad en CONNEXA|

Pendiente crítico: definir el mecanismo de sincronización y la latencia máxima admisible para las recepciones, especialmente cuando se generan órdenes complementarias durante la descarga de mercadería.

### 2.3. Transferencias y planificación de distribución

La planificación de transferencias deberá gestionarse desde CONNEXA.

Se mantendrá la integración con Valkimia y el circuito existente de confirmación de movimientos hacia SGM.

Para acelerar la implementación se evaluará un mecanismo simplificado de integración, incluyendo la posibilidad de exportar viajes planificados a Excel para su importación o carga operativa en Valkimia.

Esta alternativa deberá validarse con el proveedor y los responsables del centro de distribución.

### 2.4. Inventarios

Durante la primera etapa, CONNEXA permitirá planificar inventarios, utilizar mapas de relevamiento, auditar diferencias y generar ajustes.

Sin embargo, los movimientos definitivos continuarán impactándose en SGM, que conservará el stock oficial.

La autonomía completa de inventarios quedará asociada a la implementación posterior del kardex y los procesos de valorización.

## 3. Plan de implementación por módulo

Las fechas mencionadas durante la reunión corresponden a objetivos de planificación y deberán confirmarse mediante las pruebas funcionales y la coordinación con DIARCO.

|Módulo|Situación y próximo paso|
|---|---|
|Maestro de artículos|Presentación funcional a Auditoría, validación de alcance y ajustes|
|Surtidos|Alcance presentado; completar ajustes y pruebas|
|Listas de precios de proveedores|Alcance presentado; completar ajustes y pruebas con Sebastián Vasconcelos|
|Comprador / órdenes de compra|Presentación integral a Romina, aprobación e integración con SGM|
|Recepciones|Reconstruir sincronización y definir despliegue progresivo|
|Transferencias|Validar alcance con Liliana y resolver integración con Valkimia|
|Planificación de distribución|Coordinar demostración y relevamiento con Christian Rojas|
|Inventarios|Incorporar al cronograma; mantener ajustes definitivos en SGM|

### Hitos principales

### 19–20

Octubre

Relevamientos y demostraciones

Reuniones con Auditoría, Compras, Recepciones, Valkimia y responsables de logística.

### 7

Noviembre

Disponibilidad del primer bloque funcional

Hito objetivo para habilitar las funcionalidades previstas en CONNEXA.

### 9

Noviembre

Inicio previsto de pruebas integrales

Validación de los procesos CONNEXA–SGM, previa autorización de puesta en marcha.

### 5–6

Semanas

Despliegue estimado de recepciones

Plazo preliminar, pendiente de consensuar con Pablo y los responsables operativos.

## 4. Próximas reuniones y compromisos

|Fecha propuesta|Actividad|Interlocutores|
|---|---|---|
|Lunes 19/10, 12:00|Presentación del maestro de artículos|Auditoría|
|Martes 20/10|Demostración de comprador, generación y aprobación de OC|Romina y equipo Zeetrex|
|Martes 20/10, mañana|Relevamiento de recepción y conciliación|Walter Sosa y equipo técnico|
|Martes 20/10, 11:00|Reunión remota sobre integración logística|Valkimia|
|Martes 20/10, a coordinar|Demostración de planificación de distribución|Christian Rojas|
|A coordinar|Validación de transferencias, acopios y campañas|Liliana|
|A confirmar|Revisión del plan de rollout de recepciones|Pablo y equipo de implementación|

Las reuniones se plantearon como acciones inmediatas, pero la transcripción no permite confirmar que todas las convocatorias hayan quedado efectivamente aceptadas.

## 5. Riesgos y puntos pendientes

|Riesgo o dependencia|Acción requerida|
|---|---|
|Diferencias de valorización entre CONNEXA y SGM|Comparar resultados y establecer reglas de conciliación|
|Dependencia de modificaciones en SGM|Coordinar con Hernán y minimizar cambios al sistema legado|
|Rendimiento de SQL Server por CDC|Evaluar impacto y alternativa de sincronización periódica|
|Procesos especiales no relevados|Mantener excepciones controladas y documentarlas|
|Resistencia de usuarios al cambio|Demostraciones, capacitación y validación por referentes|
|Integración con Valkimia|Acordar un mecanismo mínimo viable de intercambio|
|Uso simultáneo de maestros en ambos sistemas|Definir autoridad por dato y reglas de actualización|
|Disponibilidad de usuarios y equipo técnico|Confirmar agenda y responsables del despliegue|
|Congelamiento operativo de fin de año|Evaluar su impacto sobre las etapas posteriores|

## 6. Entregables acordados para la presentación a Javier Villela

Se planteó preparar una presentación ejecutiva y un cronograma integrado que incluyan la estrategia de convivencia, la disponibilidad de cada módulo, los desarrollos pendientes, las pruebas funcionales, las capacitaciones, las integraciones y el despliegue progresivo.

La presentación deberá diferenciar claramente tres conceptos:

- Disponibilidad del producto: momento en que CONNEXA está técnicamente preparado para operar.
    
- Puesta en marcha de un módulo: momento en que se autoriza su utilización real.
    
- Despliegue y adopción: incorporación progresiva de usuarios, sucursales y procesos.
    

Esta diferenciación resulta fundamental para evitar que la fecha del 7 de noviembre sea interpretada como el reemplazo completo de SGM.

## 7. Evaluación y recomendación

La estrategia propuesta representa un cambio significativo respecto de un modelo de implementación integral con corte único.

Su principal fortaleza es que permite avanzar en la adopción de CONNEXA sin esperar la finalización de todos los desarrollos asociados al stock y a las recepciones.

No obstante, para que este enfoque funcione, deberán establecerse controles formales de convivencia. En particular, será necesario definir para cada entidad y proceso qué sistema tiene autoridad, qué información se sincroniza, en qué dirección y cómo se resuelven las discrepancias.

Se recomienda que el plan presentado a DIARCO no sea exclusivamente un cronograma de desarrollo. Debería constituir un Plan Maestro de Implementación y Adopción, con responsables de Zeetrex y DIARCO, criterios de aceptación funcional, pruebas integrales, capacitación, contingencias y autorización de puesta en producción por módulo.

El próximo paso recomendado es convertir esta minuta en un cronograma operativo integrado, donde cada módulo tenga sus fechas de desarrollo, validación, capacitación, integración y puesta en marcha, con dependencias explícitas.

De esa manera, el equipo podrá presentar a Javier Villela no solamente cuándo estará disponible CONNEXA, sino cómo se realizará efectivamente la transición desde SGM, quiénes deberán intervenir y qué condiciones deberán cumplirse para avanzar.