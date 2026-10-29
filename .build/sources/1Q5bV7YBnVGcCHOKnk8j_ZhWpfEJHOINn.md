# Minuta de Reunión — VALKIMIA / CONNEXA

Versión 1.0 | Proyecto DIARCO — Planificación de la Distribución (PDD)

Fecha: 20 de octubre de 2026

Horario: 11:30 hs | Duración: 42 minutos

Modalidad: Reunión técnica remota

Participantes:

- Zeetrex: Guillermo Añaños y Eduardo Ettlin.
    
- Remotos: Gustavo Palacios y Fernando de Pedro.
    

Objetivo: Definir los mecanismos de integración entre CONNEXA y VALKIMIA para implementar el intercambio de información entre el Planificador de Distribución y el sistema WMS.

## 1. Resumen ejecutivo

Se realizó una reunión de trabajo para avanzar en la definición de la arquitectura de integración entre el módulo de Planificación de la Distribución (PDD) de CONNEXA y el sistema WMS de VALKIMIA.

Se informó que el desarrollo del planificador CONNEXA presenta un grado importante de avance y que ya se realizaron validaciones funcionales con usuarios, obteniendo una recepción favorable respecto de su funcionamiento y flexibilidad.

El principal objetivo de la integración consiste en permitir que CONNEXA defina anticipadamente la carga de los vehículos y los destinos de distribución, mientras que VALKIMIA ejecute las operaciones de preparación, despacho y gestión de mercadería pendiente de despacho.

Durante la reunión se alcanzó un entendimiento conceptual del intercambio necesario, con preferencia por una arquitectura basada en servicios o APIs.

No obstante, quedaron pendientes la definición técnica de los servicios, la estimación de los tiempos de desarrollo y la convivencia con los circuitos actualmente implementados en SGM.

Se acordó realizar una nueva reunión la semana siguiente, tentativamente el martes 27 de octubre, para recibir una devolución técnica de VALKIMIA.

## 2. Temas tratados

### 2.1. Arquitectura de integración

Se analizaron las alternativas previamente consideradas para comunicar CONNEXA con VALKIMIA:

- Intercambio mediante tablas de integración.
    
- Implementación de APIs o servicios.
    
- Reutilización de mecanismos existentes en VALKIMIA.
    

Desde VALKIMIA se manifestó una preferencia por implementar servicios que permitan desacoplar la integración de los sistemas actuales y faciliten una futura evolución hacia una arquitectura web o en la nube.

Conclusión: Se avanzará en la evaluación de una integración basada en servicios, quedando pendiente la definición de sus contratos y el esfuerzo requerido.

### 2.2. Modelo de viajes, paradas y documentos

Se revisó la interpretación de los conceptos utilizados por ambos sistemas.

CONNEXA construye una planificación de carga considerando los vehículos disponibles, su capacidad, los destinos, el stock y las cantidades de mercadería que deben distribuirse.

VALKIMIA recibe documentos asociados a destinos, los incorpora a su proceso operativo y posteriormente conforma los viajes y las operaciones de preparación y despacho.

Se identificó la necesidad de distinguir:

|Concepto|Interpretación funcional|
|---|---|
|Viaje planificado|Agrupación de destinos y mercadería propuesta por CONNEXA|
|Parada / documento|Unidad de entrega asociada a un destino|
|Detalle|Artículos y cantidades correspondientes a cada destino|
|Viaje operativo|Viaje conformado y gestionado dentro de VALKIMIA|

Se contempló que un mismo vehículo pueda transportar mercadería para varios destinos.

También se destacó que deberán conservarse los identificadores de referencia generados por CONNEXA para permitir la trazabilidad de las operaciones y sus posteriores cambios de estado.

Conclusión: Se alcanzó un entendimiento conceptual del modelo, aunque VALKIMIA deberá precisar cómo representar estas entidades en sus servicios.

### 2.3. Información necesaria para planificar

Se identificaron los principales datos que CONNEXA necesitará utilizar:

- Tipos de vehículos: características y capacidades logísticas.
    
- Maestro de artículos: dimensiones, pesos y demás atributos necesarios para calcular las cargas.
    
- Stock físico disponible: cantidades existentes en el centro de distribución para efectuar la planificación.
    

Respecto de los vehículos, se consideró viable mantener un catálogo equivalente en CONNEXA, dado que la cantidad de tipos es reducida.

En cuanto a los artículos, se informó que CONNEXA está avanzando en la centralización de sus atributos logísticos, incluyendo información obtenida de servicios externos y de proveedores.

Se reconoció que VALKIMIA podrá requerir verificaciones operativas sobre dimensiones y presentaciones físicas.

Pendiente: Determinar los mecanismos concretos de consulta o sincronización de estos datos y la responsabilidad de mantenimiento de cada maestro.

### 2.4. Información de preparación y despacho

Este fue uno de los principales puntos de la reunión.

Se estableció la necesidad de que CONNEXA pueda conocer el resultado real de las operaciones ejecutadas por VALKIMIA.

Se distinguieron tres situaciones:

|Situación|Tratamiento requerido|
|---|---|
|Mercadería despachada|Informar las cantidades efectivamente despachadas|
|Mercadería preparada, no despachada|Identificarla como pendiente de redespacho para incluirla en nuevas planificaciones|
|Mercadería no preparada|Informar el incumplimiento y cerrar la solicitud operativa correspondiente|

Se destacó que las cantidades no preparadas deberán regresar al circuito de planificación de CONNEXA, mientras que las cantidades preparadas y pendientes de redespacho deberán recibir un tratamiento diferenciado, dado que físicamente pueden encontrarse preparadas y esperando un nuevo transporte.

También se aclaró que VALKIMIA deberá cerrar correctamente las solicitudes que no pudieron prepararse, evitando mantener pendientes operativos que luego sean nuevamente enviados desde CONNEXA.

Conclusión: Se consideró indispensable disponer de información suficiente para reconciliar lo planificado, lo preparado, lo despachado y lo pendiente de redespacho.

### 2.5. Tránsito y recepción en sucursales

Se abordó la necesidad de registrar la salida efectiva de los vehículos y el posterior cierre de la mercadería en tránsito.

Se indicó que CONNEXA tendrá a su cargo la gestión del tránsito y que las futuras recepciones de sucursales también se realizarán desde la plataforma.

Se planteó la posibilidad de devolver a VALKIMIA la confirmación de recepción para permitirle cerrar el circuito operativo de los viajes.

VALKIMIA manifestó que actualmente no dispone de una devolución completa respecto de lo ocurrido con los despachos una vez que abandonan el centro de distribución.

Conclusión: Se identificó una oportunidad de mejorar la trazabilidad logística de extremo a extremo, aunque el intercambio de confirmaciones de recepción requiere una definición posterior.

### 2.6. Convivencia con SGM

Se analizó la situación de los flujos actuales entre VALKIMIA y SGM.

Se reconoció que SGM continúa participando en determinados procesos operativos y de consulta, especialmente mientras CONNEXA no haya asumido completamente las funcionalidades de recepción y stock.

Se plantearon dos alternativas:

- Interrumpir determinados intercambios con SGM y trasladar su responsabilidad a CONNEXA.
    
- Mantener transitoriamente algunos flujos con SGM durante la migración funcional.
    

No se adoptó una decisión definitiva.

Pendiente crítico: Determinar qué información debe continuar enviándose a SGM, durante cuánto tiempo y cómo evitar inconsistencias o duplicaciones entre ambos sistemas.

### 2.7. Alternativa transitoria de integración mediante Excel

Ante la incertidumbre respecto de los plazos de desarrollo de los nuevos servicios, se consultó por una alternativa temporal.

Se mencionó el mecanismo de importación mediante Excel utilizado en otra implementación de VALKIMIA, correspondiente a Gioconda.

Desde VALKIMIA se aclaró que ese mecanismo responde a particularidades de dicha implementación y que no puede garantizarse su reutilización directa en DIARCO.

No obstante, se comprometieron a evaluar la posibilidad de disponer de un mecanismo equivalente.

Conclusión: La carga mediante Excel queda identificada como posible plan de contingencia, sujeta a evaluación de factibilidad y esfuerzo.

## 3. Acuerdos alcanzados

|Nº|Acuerdo / entendimiento|
|---|---|
|1|CONNEXA realizará la planificación de cargas y destinos antes de la ejecución operativa en VALKIMIA.|
|2|Se priorizará la evaluación de una arquitectura de integración basada en servicios.|
|3|Se utilizarán referencias que permitan vincular los documentos enviados por CONNEXA con las operaciones de VALKIMIA.|
|4|Se deberán distinguir los resultados de preparación, despacho y redespacho.|
|5|Las cantidades no preparadas deberán poder volver a planificarse desde CONNEXA.|
|6|VALKIMIA evaluará el esfuerzo y los tiempos de implementación.|
|7|Se analizará la factibilidad de una alternativa transitoria de importación mediante Excel.|
|8|Se continuará analizando la convivencia de interfaces con SGM.|

Los acuerdos representan entendimientos funcionales y líneas de trabajo; no constituyen todavía una especificación técnica aprobada.

## 4. Próximos pasos y responsables

|Actividad|Responsable propuesto|Plazo|
|---|---|---|
|Evaluar arquitectura de servicios y contratos de integración|VALKIMIA|Próxima reunión|
|Estimar esfuerzo y tiempos de desarrollo|VALKIMIA|27/10, tentativo|
|Evaluar alternativa de ingreso por Excel|VALKIMIA|Próxima devolución|
|Revisar los intercambios que deben mantenerse con SGM|Zeetrex / DIARCO|Pendiente|
|Definir el tratamiento detallado de redespachos y cantidades no preparadas|Zeetrex / VALKIMIA|Próxima etapa|
|Precisar la sincronización de maestros, vehículos y stock|Zeetrex / VALKIMIA|Próxima etapa|
|Coordinar la próxima reunión técnica|Zeetrex / VALKIMIA|27/10, tentativo|

## 5. Riesgos y cuestiones pendientes

**Dependencia del desarrollo de VALKIMIA**

Todavía no se dispone de una estimación de tiempos. Esta incertidumbre podría afectar la puesta en marcha del PDD de CONNEXA.

**Convivencia con SGM**

No se ha definido completamente el destino de los flujos de información existentes. Existe riesgo de duplicidad de estados o información inconsistente.

**Tratamiento de redespachos**

Se necesita asegurar que la mercadería ya preparada no vuelva a generar operaciones innecesarias de preparación.

**Ausencia de una alternativa transitoria confirmada**

El mecanismo Excel constituye solamente una posibilidad bajo evaluación, no una solución disponible.

## 6. Próxima reunión

Martes 27 de octubre de 2026

Tentativa

Objetivo: Recibir la devolución de VALKIMIA respecto de la factibilidad técnica, los servicios requeridos, los tiempos estimados y la alternativa transitoria mediante Excel.

La fecha y el horario quedan sujetos a coordinación entre los participantes.

## 7. Observaciones y recomendaciones de seguimiento

Como evaluación complementaria, se considera que la reunión permitió avanzar satisfactoriamente en el entendimiento funcional, pero todavía no resolvió el principal condicionante del proyecto: contar con un mecanismo de integración disponible en un plazo compatible con la puesta en marcha de CONNEXA.

Se recomienda que la próxima devolución de VALKIMIA permita adoptar una decisión concreta sobre tres aspectos:

1. Integración definitiva: alcance de los servicios, contratos de datos y cronograma de implementación.
    
2. Integración transitoria: viabilidad de una solución simplificada para iniciar las operaciones sin esperar la arquitectura definitiva.
    
3. Convivencia SGM–CONNEXA: identificación explícita de los procesos que continuarán dependiendo de SGM durante la transición.
    

En particular, se considera conveniente que Zeetrex prepare una matriz de interfaces que contemple, para cada intercambio, el sistema origen, el destino, la información involucrada, la frecuencia y el responsable funcional.

Esta matriz permitiría transformar los entendimientos alcanzados en una especificación técnica verificable y facilitaría el seguimiento de los compromisos de ambas organizaciones.

Documento elaborado a partir de la transcripción de la reunión del 20/10/2026. Las responsabilidades propuestas, la clasificación de riesgos y las recomendaciones de seguimiento son aportes de elaboración y deberán validarse con los participantes.
