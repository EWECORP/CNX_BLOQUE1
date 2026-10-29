# Plantillas operativas

Versión 0.2 propuesta. Completar las fichas en el repositorio acordado y enlazarlas desde el libro. Una plantilla vacía no representa una aprobación.

## T01 · Acta de compromiso de Dirección

**Proyecto:** DIARCO Bloque 1. **Versión de alcance:** [completar]. **Fecha y hora ART:** [completar].

| Decisión | Nombre / definición | Fecha de vigencia | Evidencia de aceptación |
|---|---|---|---|
| Sponsor y suplente | [completar] | [completar] | [completar] |
| Líder implementación DIARCO | [completar] | [completar] | [completar] |
| Líder Zeetrex | [completar] | [completar] | [completar] |
| Capacidades B1 / diferidas | [enlace a baseline] | [completar] | [completar] |
| Dueños, referentes y suplentes | [enlace a asignaciones] | [completar] | [completar] |
| Horas y redistribución de tareas | [enlace a compromiso de jefaturas] | [completar] | [completar] |
| IT y mesa de ayuda | [nombres y cobertura] | [completar] | [completar] |
| Piloto y gates | [población y criterios] | [completar] | [completar] |
| Próxima revisión y escalación | [instancia y plazo] | [completar] | [completar] |

**Reservas / decisiones abiertas:** ID, acción, dueño, fecha y consecuencia si vence. **Decisión G0:** iniciar capacidades [lista] / mantener pendientes [lista]. **Acepta SP:** nombre, fecha y registro. **Aceptan líderes:** nombres y registro.

## T02 · Compromiso individual del referente

**Módulo/capacidad:** [ID]. **Dueño de proceso:** [nombre]. **Titular:** [nombre]. **Suplente:** [nombre]. **Jefatura:** [nombre].

**Horas semanales autorizadas:** [número]. **Ventanas de agenda:** [días/horas]. **Tareas habituales redistribuidas y reemplazo:** [completar]. **Vigencia:** [inicio/fin o etapa].

Me comprometo a preparar los datos/casos asignados, completar la práctica, ejecutar UAT con evidencia, registrar dificultades, capacitar a usuarios de mi alcance y atender consultas L1 según el procedimiento. Escalaré decisiones que excedan mis facultades y avisaré al líder si mi capacidad cambia.

**Puedo decidir:** [reglas/excepciones delegadas]. **Requiere DP:** [lista]. **Requiere IT/L2:** [lista].

**Resultados y fechas:** [WBS asignadas]. **Conocimientos a demostrar:** [guía del módulo]. **Aceptación titular / suplente / jefatura:** [nombres, fecha y registro]. La aceptación de la jefatura confirma que las horas se liberan de la operación habitual.

## T03 · Ficha de capacidad y proceso futuro

ID; módulo; versión; resultado de negocio; población; incluido B1; excluido/diferido; fuente y decisión; DP/RF/suplente; sistema autorizado por entidad/etapa; actores; disparador; pasos normales; excepciones; aprobaciones; entradas y cortes; salidas; interfaces; controles; material; UAT; métricas; dependencias; gate siguiente.

**Antes / después por rol:** tarea actual, tarea nueva, tarea que deja de ejecutarse, control y quién lo verifica. Registrar cuándo se impide la doble carga y quién comunica el cambio.

## T04 · GAP y solicitud de cambio

ID GAP/cambio; capacidad; fuente; escenario actual; comportamiento esperado; defecto o mejora; clasificación propuesta B1/B2/B3; criticidad de negocio; alternativa; dependencias; impacto en esfuerzo/fecha/formación/soporte; responsable de análisis; recomendación; aprobador; decisión y motivo; fecha; versión de baseline afectada; WBS/UAT vinculados.

Un GAP diferido mantiene destino, dueño y condición de revisión. No debe reaparecer implícitamente en una prueba de B1 como criterio comprometido.

## T05 · Guía rápida de una tarea

**Tarea y rol:** [completar]. **Versión/ambiente:** [completar]. **Objetivo:** [resultado]. **Antes de empezar:** acceso, datos, documento y estado requeridos.

1. [Acción y pantalla]. Resultado visible esperado: [completar].
2. [Acción y validación]. Resultado visible esperado: [completar].
3. [Cierre]. Documento/estado que debe quedar: [completar].

**Control final:** cantidad, valor, estado, identificador y destino. **Si ocurre X:** consultar FAQ/runbook [ID]. **Escalar cuando:** [condición concreta]. **Nunca repetir sin consultar estado:** [operación con riesgo de duplicación]. **Evidencia de ejemplo:** [captura anonimizada]. **Dueño y revisión:** [completar].

Las capturas se completarán sobre la versión que se capacite. No se inventan pantallas, botones o permisos antes de verificar el producto.

## T06 · Aprendizaje y demostración

Persona; rol; módulo; titular/suplente/usuario; versión; material; fecha; facilitador; tarea crítica; ejecución observada; ayuda requerida; resultado apto/pendiente; brecha; acción; reprueba; evaluador; evidencia.

**Apto propuesto:** ejecuta todas las tareas críticas sin ayuda paso a paso, explica al menos una excepción y demuestra cómo abrir/escalar un ticket. Si falla, registrar brecha, practicar y reevaluar. La asistencia se registra por separado.

## T07 · Caso de aceptación y ejecución

**Caso:** ID, capacidad/GAP, objetivo, criticidad, condiciones previas, dataset/corte, reglas y resultado esperado aprobado. **Pasos:** acción, dato y resultado por paso. **Validación:** identidad, estado, cantidad, valor, permisos y auditoría según corresponda.

**Ejecución:** ID único; caso; versión; ambiente; operador DIARCO; fecha ART; resultado real; evidencia; defecto; dictamen. **Aceptación:** DP, fecha, comentario. **Reprueba:** nueva ejecución enlazada a defecto y ejecución anterior.

Un caso crítico aprobado necesita evidencia de ejecución y aceptación. Si cambian reglas o datos críticos, evaluar regresión de los consumidores afectados.

## T08 · FAQ y diagnóstico L1

ID; síntoma en lenguaje del usuario; módulo/versión; comprobaciones seguras en orden; resultado de cada comprobación; solución autorizada; cuándo detenerse; ruta MD/RF/IT/L2; datos a adjuntar; dueño; revisión y caducidad.

Ejemplo: **“Mi OC no aparece en SGM”**. Consultar estado y permisos de la OC, identificador cruzado y acuse disponible. Registrar número y hora. Si está aprobada sin confirmación de destino, escalar a IT/L2 con el ticket. No generar una segunda OC ni reenviar al proveedor para “probar”.

## T09 · Ticket y escalamiento

Ticket; módulo; ambiente; versión; usuario/rol/sitio; fecha y hora ART; documento/correlación; pasos; esperado; observado; población afectada; impacto; prioridad; evidencia; comprobaciones L1; dueño actual; especialista; próxima actualización; solución/contención; conciliación; validación del usuario; fecha de cierre; FAQ creada/actualizada.

Para P1, aviso inmediato a IT y L2 dentro de cobertura, manteniendo el registro. La mesa conserva seguimiento aunque cambie el especialista asignado.

## T10 · Go/no-go y corte por oleada

Oleada; versión; población; ventana ART; documentos en vuelo; baseline de conciliación; accesos/formación; UAT; incidencias; riesgo residual; contingencia; disparadores de detención; quién ejecuta; quién verifica; quién decide retorno; cobertura; comunicación.

| Validación | Responsable | Resultado / evidencia | Fecha |
|---|---|---|---|
| Negocio y UAT | DP | [completar] | [completar] |
| Formación y autonomía | RF/DP | [completar] | [completar] |
| Datos, interfaces y conciliación | IT/DP | [completar] | [completar] |
| Corte y recuperación | IT | [completar] | [completar] |
| Soporte | MD + LZ | [completar] | [completar] |

**Recomendación conjunta LD/LZ:** [go/no-go y condiciones]. **Decisión sponsor:** [nombre, fecha y alcance]. **Bitácora:** hora, paso, ejecutor, resultado, evidencia y decisión. Registrar smoke test y conciliación antes de habilitar operación general.

## T11 · Transferencia a operación

Alcance y versión; fecha; DP/RF/suplente/MD/IT/L2; cobertura vigente; guías y runbooks; accesos; monitoreo y conciliación; demostraciones de autonomía; métricas de estabilidad; tickets abiertos; garantías/correcciones por canal acordado; mejoras diferidas; revisión próxima.

**Aceptación DIARCO:** [sponsor con validaciones DP/IT/MD]. **Confirmación Zeetrex:** [líder]. **Pendientes aceptados:** ID, impacto, alternativa, dueño y fecha. **Cierre de hypercare:** [sí/no y motivo]. El soporte L2 continúa bajo el acuerdo de servicio vigente, cuya cobertura debe documentarse.

## T12 · Registro semanal y retrospectiva

Por WBS: esfuerzo propuesto, real y restante por rol, alcance original/cambio, bloqueo, avance con evidencia, fecha estimada revisada y decisión requerida. Por desvío: cambio de alcance, error de estimación, reproceso, dependencia externa o mejora de producto.

Retrospectiva: qué ocurrió, causa, impacto, qué repetir, qué cambiar, artefacto afectado, responsable y decisión. La versión reutilizable no incluye datos DIARCO.

## T13 · Comunicación interna del sponsor

**Borrador para emitir tras aprobar el acta.**

> A partir de [fecha] iniciaremos la implementación del Bloque 1 de Connexa en las capacidades y poblaciones de [baseline]. Designamos a [líder] para coordinar el trabajo interno. Cada área contará con el dueño, referente y suplente indicados en [asignaciones]. Sus jefaturas reservarán las horas aprobadas y organizarán la cobertura de las tareas habituales. Los referentes prepararán datos, ejecutarán pruebas y formarán a sus equipos junto con Zeetrex. IT y mesa de ayuda participarán desde la preparación. Las consultas se registrarán en [canal]. Revisaremos semanalmente los compromisos y autorizaremos cada expansión con evidencia. Los responsables comunicarán las fechas operativas de cada circuito.

## T14 · Matriz de maestría y convivencia

Etapa; entidad/operación; sistema que autoriza; escritor único; lectores; identificación cruzada; interfaz; frecuencia/latencia acordada; conciliación; responsable de dato; responsable técnico; procedimiento ante falla; emisor al proveedor; condición para cambiar la autoridad; gate y evidencia.

Ejemplo de fila a completar, sin anticipar la decisión: OC aprobada / generación y comunicación al proveedor / sistema autorizado [pendiente] / emisor único [pendiente] / identificación Connexa–SGM [contrato y prueba].
