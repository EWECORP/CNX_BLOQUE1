# Método operativo, aceptación y soporte

Versión 0.2 propuesta, basada en `Plan de Despliegue - Estrategia.md` por elección expresa del usuario. Convivencia gradual: SGM conserva temporalmente stock y pendientes, recibe las operaciones de Connexa y mantiene el envío de OC a proveedores. Aplicar a las capacidades y poblaciones de cada oleada. Las reglas y umbrales nuevos de este documento deben acordarse con DIARCO.

## Unidad de implementación

Cada paquete implementa una capacidad de negocio con población definida: módulo, roles, sucursales, proveedores/artículos, interfaz y versión. Un paquete puede cubrir parte de un módulo. Su ficha enlaza alcance, WBS, GAPS, datos, casos de prueba, material, incidencias y aceptación.

La trazabilidad mínima es `Capacidad/GAP → WBS → caso UAT → ejecución → defecto/reprueba → aceptación → oleada`. Un caso no reemplaza su ejecución. Si cambia versión, ambiente o dataset, registrar una nueva ejecución; no sobrescribir la evidencia anterior.

Los IDs del libro son estables. Para repetir UAT, duplicar la fila con un ID de ejecución propio y conservar el caso. El kit inicial deja los resultados vacíos y todos los casos sin ejecutar.

## Roles y RACI

| Código | Rol | Facultad principal |
|---|---|---|
| SP | Sponsor DIARCO | Asigna recursos y decide gates globales y excepciones de alcance |
| LD | Líder implementación DIARCO | Coordina personas, compromisos y bloqueos internos |
| DP | Dueño de proceso | Decide reglas y acepta funcionalmente su módulo |
| RF | Referente DIARCO | Ejecuta preparación/pruebas, enseña y atiende L1 funcional |
| US | Usuario piloto | Opera y reporta dificultades con evidencia |
| MD | Líder mesa de ayuda DIARCO | Registra, clasifica, comunica y sigue tickets |
| IT | Líder IT DIARCO | Accesos, infraestructura, continuidad e integración local |
| LZ | Líder implementación Zeetrex | Plan y entrega coordinada de Zeetrex |
| ZF | Funcional Zeetrex | Configuración, formación y asistencia de proceso |
| ZT | Técnico/L2 Zeetrex | Diagnóstico especializado, correcciones e integración |
| EXT | Responsable externo | Interfaz y soporte de su sistema, cuando aplique |

R ejecuta; A responde por el resultado y decide su aceptación; C aporta antes de decidir; I recibe información. Cada fila de RACI tiene un único A. Si una aprobación necesita varias validaciones, el A recopila esas validaciones y registra una decisión única. IT puede detener una ejecución insegura o sin condiciones técnicas y elevarla al sponsor.

DP y RF se resuelven al nombre del módulo de la fila. No son un único dueño o referente para todo DIARCO. La hoja Asignaciones contiene titular, suplente y jefatura que libera la capacidad. Una misma persona no deberá aprobar una operación si la segregación acordada lo impide.

## Cadencia y decisiones

| Instancia | Participantes | Frecuencia propuesta | Salida |
|---|---|---|---|
| Coordinación de ejecución | LD, LZ, referentes activos, IT/mesa según tema | 15 min diarios en semanas activas | Acciones, bloqueos, responsable y fecha |
| Taller de módulo | DP, RF, suplente, ZF y especialistas | 2 sesiones semanales de 60–90 min por módulo activo | Definiciones, práctica o evidencia UAT |
| Revisión del plan | LD, LZ, DP, IT y MD | 45 min semanal | Capacidad, dependencias, riesgo y decisión siguiente |
| Comité de Dirección | SP y líderes, dueños invitados | 30 min semanal y ante gate/bloqueo crítico | Decisiones y recursos |
| Seguimiento de piloto/corte | Equipo del circuito y soporte | Ventana operativa acordada | Estado, conciliación y continuidad |

Propuesta: líder competente responde bloqueos ordinarios en un día hábil. Elevar al sponsor si requieren recursos, cambian alcance o permanecen sin resolución al vencer el plazo. Los incidentes que comprometen la operación se escalan de inmediato dentro de la cobertura acordada. El silencio nunca aprueba un alcance o un gate.

Un cambio requiere solicitud, motivo, capacidad afectada, beneficio, alternativas, impacto en fechas/esfuerzo/formación/integraciones y decisión. El dueño del proceso recomienda; líderes estiman impacto; sponsor decide alcance/prioridad. Clasificar separado el defecto de una capacidad comprometida y la mejora futura.

## Gates y reglas de aceptación

**G0, inicio comprometido.** Baseline y exclusiones versionadas. Equipo nominal, suplencias y horas autorizadas. Piloto y cobertura de soporte definidos. Acciones pendientes no críticas con dueño y fecha. Si falta dueño o capacidad para un módulo, ese módulo no comienza.

**G1, preparación y UAT.** Datos y resultados esperados aprobados por negocio. Permisos, ambiente y versión identificados. Titular y suplente demuestran las tareas críticas. Propuesta: 100% de casos críticos aplicables aprobados y cero defectos críticos o altos abiertos en el circuito. El dueño firma el resultado; la demostración de Zeetrex no equivale a aceptación de DIARCO.

**G2, piloto.** Propuesta: al menos dos ciclos completos con usuarios DIARCO, uno con una excepción de negocio. Todos los documentos/cantidades/valores críticos concilian bajo la tolerancia aprobada antes de probar. Contingencia y soporte se ensayan. Si el proceso tiene ciclo semanal u otro plazo, se ajusta el calendario para observar ciclos completos.

**G3, expansión por oleada.** Cada población nueva tiene roles, accesos, formación y soporte. IT valida corte, recuperación y monitoreo. Dueños recomiendan. Sponsor registra go/no-go con versión, alcance y ventana. El éxito de un piloto no autoriza automáticamente todas las sucursales.

**G4, operación transferida.** Propuesta: cinco días operativos consecutivos estables en el alcance habilitado, sin incidentes críticos/altos abiertos de ese circuito, conciliación completa y L1 demostrado. Para procesos infrecuentes también se requiere un ciclo completo. DIARCO acepta la operación y Zeetrex confirma el mecanismo L2. Los pendientes menores conservan dueño y fecha.

Los umbrales anteriores son propuestas metodológicas, no valores contractuales ni observaciones del sistema. Los controles técnicos vigentes de cada módulo siguen aplicando. No se rebaja un control de PDD u otra aplicación para satisfacer un gate del proyecto.

Una excepción sólo puede cubrir un desvío menor cuyo impacto, alternativa, responsable, vencimiento y riesgo residual se acepten por escrito. Propuesta: un fallo que permita duplicación, autorización indebida, pérdida de trazabilidad o corrupción de cantidad/valor es no-go del circuito. Si se recorta la capacidad, rebaselinar alcance y repetir pruebas de regresión afectadas.

## Pruebas y evidencia

**Paralelo desde el 04/11:** disponibilidad de módulos productivos controlada por versión y población. Primero smoke del flujo mínimo. Luego casos críticos y comparación durante los días/ciclos acordados. DIARCO/SGM conserva validez y la aceptación se registra por módulo. El smoke por sí solo no habilita una aceptación funcional ni cambia la autoridad. Las operaciones de prueba deben tener control de efectos reales y un solo emisor al proveedor.

Tipos mínimos: cálculo con casos dorados, permisos positivos/negativos, importación válida/errónea, flujo normal, excepción, integración con acuse funcional, reintento sin duplicación, contingencia y recuperación, y operación por titular/suplente.

Negocio define el esperado antes de la ejecución. Zeetrex aporta el procedimiento y la explicación técnica. El RF/US de DIARCO ejecuta UAT y adjunta resultado real. El DP acepta. Los especialistas contables/impositivos validan las reglas de su competencia cuando el circuito las utiliza.

Cada evidencia incluye ID de ejecución, caso, versión, ambiente, fecha, dataset/corte, operador, esperado, observado, documento/identificador, resultado, defecto y reprueba. El enlace debe ser accesible para los revisores y no contener credenciales ni datos innecesarios. Para valores, acordar antes precisión, redondeo y tolerancia. Sin esperado aprobado, el caso sigue pendiente.

Defecto crítico: detiene un proceso esencial o produce resultado de negocio incorrecto con impacto grave. Alto: impide una función comprometida sin alternativa validada. Medio/bajo: alternativa controlada, impacto acotado o presentación. DP y líderes validan severidad según impacto; no se reduce para pasar el gate.

## Convivencia SGM y corte

Preparar por entidad y etapa una matriz con lector, escritor autorizado, origen del stock/pendiente, identificación cruzada, latencia tolerada, validación, dueño y contingencia. La Estrategia rectora define la etapa inicial: SGM mantiene stock/pendientes oficiales y el circuito de envío a proveedores; Connexa origina progresivamente las operaciones y sincroniza. Confirmar la implementación real de ese diseño antes de cada habilitación. Maestros, listas y surtido pueden tener cortes propios una vez certificada la integración. Evitar que la convivencia se convierta en dos escritores simultáneos sin control.

Checklist previo a cada corte:

- [ ] Alcance/versión/población y horario autorizados.
- [ ] Operaciones en vuelo identificadas y conciliación inicial guardada.
- [ ] Maestría y única vía de escritura/comunicación confirmadas.
- [ ] Usuarios, permisos, referentes y suplente disponibles.
- [ ] Soporte, monitoreo y responsables de decisión presentes.
- [ ] Contingencia y recuperación probadas en entorno permitido.
- [ ] Disparadores de no-go/retorno y punto de decisión acordados.
- [ ] Prueba posterior, conciliación y comunicación listas.

Ante duplicación, pérdida de autorización/trazabilidad, diferencia crítica no explicada o indisponibilidad que exceda la ventana acordada: detener nuevas operaciones del circuito afectado, conservar documentos y evidencias, convocar a IT/LZ/DP y elevar decisión al sponsor. Reanudar sólo después de conocer qué se aplicó en cada sistema.

El retorno operativo debe tratar documentos en vuelo y saldos mediante procedimientos aprobados. Restaurar una base o reejecutar una interfaz sin conciliación puede repetir efectos externos; no es una acción de L1. Deshabilitar un circuito o apagar SGM requiere decisión explícita por proceso.

## Modelo de soporte

El usuario abre un ticket por el canal DIARCO acordado. Mesa de ayuda mantiene el ticket principal y su comunicación hasta verificar la recuperación. El referente atiende uso y reglas del módulo. IT atiende accesos, conectividad y servicios locales. Zeetrex L2 atiende defectos y diagnóstico especializado. Si corresponde a un tercero, IT/L2 coordinan con EXT y conservan trazabilidad.

Una falla grave entra por el mismo registro y se escala de inmediato a IT y Zeetrex L2 sin esperar a que L1 agote todos los pasos. El usuario mantiene un punto claro de seguimiento.

| Nivel | Resuelve | No debe ejecutar sin procedimiento/autorización |
|---|---|---|
| Mesa DIARCO | Registro, impacto, prioridad, comunicación y seguimiento | Cerrar por derivación, alterar datos o reintentar ciegamente |
| Referente funcional L1 | Uso, reglas conocidas, consulta de estado y controles documentados | SQL, correcciones masivas o excepciones de autorización |
| IT DIARCO | Accesos, red, servicios y diagnóstico local aprobado | Restauraciones/reprocesos con efectos de negocio sin conciliación |
| Zeetrex L2 | Error de aplicación, cálculo, interfaz y corrección controlada | Cambiar reglas de negocio sin aceptación del dueño |

Clasificación propuesta de atención, pendiente de acuerdo comercial y cobertura:

| Prioridad | Ejemplo de impacto | Acuse propuesto | Acción de coordinación |
|---|---|---|---|
| P1 | Proceso crítico detenido o riesgo grave de integridad | 15 min dentro de cobertura | IT y L2 en forma simultánea. Comunicación cada 30 min |
| P2 | Circuito importante degradado sin alternativa aprobada | 1 h de cobertura | Dueño y especialistas acuerdan contención. Actualización cada 2 h |
| P3 | Usuario/caso acotado con alternativa validada | 4 h de cobertura | Plan y seguimiento en ticket |
| P4 | Consulta o mejora | 1 día hábil | L1 responde o registra demanda de mejora |

Acuse significa que un responsable reconoce y toma el caso; no es promesa de resolución. Se pactarán horario ART, días, suplencias, contacto urgente y tratamiento fuera de cobertura. No se supone servicio 24x7. Un defecto alto de UAT y una prioridad de soporte no son equivalentes automáticos.

Campos mínimos del ticket: módulo, ambiente, versión, usuario/rol, sitio, fecha/hora ART, operación/documento, esperado/real, impacto, reproducibilidad, evidencia, prioridad, responsable actual, siguiente actualización y estado. Cierre: solución o alternativa aceptada, validación del usuario, conciliación cuando corresponda y actualización de FAQ/runbook.

## Adopción y tablero

Medir por módulo, rol y población de cada oleada. Propuesta de indicadores:

| Indicador | Definición | Dueño / frecuencia |
|---|---|---|
| Equipo confirmado | Capacidades B1 con dueño, RF, suplente y horas autorizadas / capacidades B1 | LD, semanal |
| UAT crítico | Casos críticos aprobados / casos críticos aplicables de la versión | DP, cada sesión |
| Competencia | Usuarios que demostraron todas sus tareas críticas / usuarios objetivo de oleada | RF, previo a G3 |
| Adopción | Ciclos elegibles completados en el circuito acordado / ciclos elegibles de la población | DP, diario en piloto |
| Conciliación | Documentos críticos no conciliados y antigüedad | IT + DP, por ciclo |
| Soporte | Tickets por prioridad, antigüedad y reaperturas | MD, diario en hypercare |

Si el denominador no está definido, informar “sin población acordada”, no 0% ni 100%. La asistencia a formación se conserva como registro distinto de competencia. Cada dato tiene corte, población y evidencia. Los objetivos de negocio se acuerdan tras una línea base; no se infieren de los porcentajes técnicos históricos.

## Reutilización futura

Al cerrar cada paquete, registrar esfuerzo estimado y real con la misma estructura. Separar cambio de alcance, error de estimación, reproceso, dependencia externa y mejora de producto. Recoger qué material evitó consultas y qué casos faltaron.

Mantener separado este expediente DIARCO de las plantillas generales. Para otro cliente se vacían nombres, sistemas, datos, decisiones y ejemplos propios. Anonimizar el aprendizaje y someter la propuesta de mejora al propietario de la metodología Connexa. No publicar como norma una configuración particular de DIARCO.
