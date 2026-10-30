# Fuentes, supuestos y límites de la propuesta

Versión 0.5. Corte documental 30/10/2026. No se consultaron bases productivas ni se ejecutaron corridas.

## Trazabilidad

| ID | Fuente | Uso y límite |
|---|---|---|
| S01 | Solicitud del usuario, 29/10/2026 | Problema de compromiso, referentes internos, implementación detallada y reunión del lunes |
| S02 | [Metodología Connexa v0.1](../../CONNEXA_FRAMEWORK/docs/20-metodologia-implementacion/00-metodologia-implementacion-v0.md) | Figura aprobada en sus metadatos. Se toma el ciclo y la aceptación por evidencia. Sus duraciones no están calibradas |
| S03 | [Artefactos y criterios de salida](../../CONNEXA_FRAMEWORK/docs/20-metodologia-implementacion/03-artefactos-y-criterios-de-salida.md) | Borrador. Antecedente de Definition of Done y artefactos por fase |
| S04 | [Informe WBS al 21/09](https://docs.google.com/document/d/1rhQI7f-sLXPjlrbATOFqlTWYBZ4-4esDDBgchhGvwXA/edit) | Antecedente del Bloque 1 comercial. Sus porcentajes y fechas son históricos; no prueban disponibilidad actual ni aceptación |
| S05 | [Reunión Plan Despliegue 16/10](https://drive.google.com/file/d/1Wuug8RN0KgaodiotYqKLv-wWiXVunMSR/view) | Transcripción de discusión, con errores de reconocimiento. Sustenta la necesidad de aclarar convivencia y etapas; no reemplaza un acta |
| S06 | [DIARCO, cambios octubre](https://docs.google.com/document/d/13tTsK9QcUGNsY8hy5iSmRKclbCbAFbR0-_iVH-QNf1I/edit) | Documento actualizado el 28/10, con realizados/pedidos/pendientes. Se usa para identificar temas y casos candidatos, sin certificar implementación |
| S07 | [PDD alcance Fase 1](../../PDD/PDD%20-%20ALCANCE%20Fase%201.md) | Delimita PDD: necesidades/backlog no equivalen a reservas, viajes o ejecución logística. Fase 1 PDD no equivale al Bloque 1 general |
| S08 | [Preflight Inventory y continuidad](../../PDD/documentacion/16_preflight_inventory_y_continuidad_20261029.md) | Foto de cobertura y controles de PDD. Debe releerse el estado real antes de un piloto; sus conteos no son un estado vigente perpetuo |
| S09 | Diseño del kit v0.2 | WBS, RACI, roles, dedicaciones, prioridades, casos y umbrales de gates son propuestas propias a revisar |
| S10 | [Plan de Despliegue - Estrategia](Plan%20de%20Despliegue%20-%20Estrategia.md) | Fuente rectora elegida expresamente por el usuario el 29/10. Convivencia gradual, 07/11 disponibilidad, pruebas previstas 09/11, stock/pendientes en SGM |
| S11 | [PLAN DE DESPLIEGUE](PLAN%20DE%20DESPLIEGUE.md) | Antecedente con corte total 07/11 incompatible con S10. Ese corte no rige por decisión del usuario. Se preserva el original |
| S12 | Respuesta del usuario, 29/10/2026 | Cinco personas y cargos. Las facultades del proyecto se proponen por separado, no se consideran aceptadas |
| S13 | Instrucción posterior del usuario, 29/10/2026 | Desde el 04/11: módulos productivos disponibles, smoke tests y algunos días de paralelo para aceptación progresiva. Comparar OC valorizada Connexa/DIARCO conservando validez de información DIARCO |
| S31 | Hoja Gobierno del [plan editable](../outputs/20261029/DIARCO_Bloque1_Plan_v0.2.xlsx), editada por el usuario el 30/10 | Siete registros de gobierno, incluidos Guillermo Añaños, Pablo Duplessy y la función técnica compartida Alejandro Ledesma / Eduardo Ettlin. Sus estados siguen como propuestas a confirmar |
| S32 | Hoja Asignaciones del [plan editable](../outputs/20261029/DIARCO_Bloque1_Plan_v0.2.xlsx), editada por el usuario el 30/10 | Interlocutores ampliados por módulo. Los campos de asignación y aceptación nominal siguen sin completar |
| S33 | [Minuta técnica interfaces SGM–Connexa](https://drive.google.com/file/d/1vVapFccN6Q5JwaczS9HzvOg-vHYfSFK0/view), 27/10 | Criterio de un escritor por dominio, proveedor desde SGM y OC completa hacia SGM. Minuta para validar; no prueba interfaz terminada |
| S34 | [Minuta precios de compra](https://drive.google.com/file/d/1Kv7_vKDIryvGvhjrAVbCJxt941vG64a_/view), 27/10 | Listas/reglas/vigencias, importación y pruebas de valorización. Impuestos y costos aún abiertos |
| S35 | [Minuta Javier Vilela](https://drive.google.com/file/d/1GT2yxSq5Q0ke2VfPFcdCfeNNIlH541dQ/view) y [transcripción original «Revisión Plan de Proyecto y Clusters y Surtido»](https://drive.google.com/file/d/18XnLGtnxrzEdNg3MWw66tdf-cyWvKZih/view), misma reunión del 26/10 | Lo llama sponsor del proyecto. Se debe conciliar esa función con el Gobierno propuesto; no sustituir nombres por inferencia |
| S36 | [Minuta técnica Valkimia](https://drive.google.com/file/d/1vJf2eMuDx_mCE9q9ae8kTVQFCrJ4NVgn/view), 28/10 según nombre del archivo | Web se eleva para evaluación, sin aprobación. Excel/carga manual no validada para escala DIARCO. Fecha interna de transcripción discrepante |

Rutas locales relativas al directorio de este documento. Las fuentes locales del framework están fuera de CNX_BLOQUE1; no se modificaron.

## Supuestos de planificación

| ID | Supuesto | Consecuencia si no se confirma | Dueño propuesto |
|---|---|---|---|
| A01 | La reunión será el lunes 02/11/2026, primera hora ART | Reubicar agenda; mantener secuencia por gates | LD |
| A02 | La clasificación final de GAPS se podrá conciliar con el usuario y DIARCO | Sólo avanzar preparación transversal y capacidades cuyo alcance quede confirmado | LZ + DP |
| A03 | Dirección puede asignar personas y liberar agenda | Replanificar concurrencia y fechas; no iniciar módulo sin capacidad | SP |
| A04 | Habrá ambiente y datos de prueba autorizados | Mantener UAT pendiente hasta habilitarlo | IT |
| A05 | DIARCO validará resultados esperados independientemente del cálculo de la aplicación | Casos sin esperado aprobado no pueden aceptarse | DP |
| A06 | Se acordará cobertura L1/L2 y participación de terceros | Piloto/corte pendiente en circuitos sin recuperación cubierta | MD + IT + LZ |
| A07 | Se confirmará la autoridad de datos y documentos durante convivencia SGM | No habilitar escrituras o comunicaciones con autoridad ambigua | IT + DP |

## Contradicciones y decisiones pendientes

- La divergencia entre corte total de S11 y convivencia de S10 quedó resuelta para este trabajo: el usuario eligió S10. Se planifican los frentes comercial, recepción, inventarios y distribución del B1 con esa convivencia.
- S13 sustituye las fechas históricas de arranque 07/11 y 09/11 por el objetivo de disponibilidad y smoke/paralelo desde el 04/11. La aceptación será progresiva con evidencia. No se transforma el 04/11 en fecha de adopción de toda la red ni de apagado SGM. D06 completa la maestría bajo información DIARCO/SGM válida en etapa 1.
- Pedidos de logística/transportes del documento de octubre exceden el alcance rector de PDD Fase 1. Deben asignarse a otro módulo/bloque o cambiar el alcance mediante decisión expresa.
- Listas y acuerdos de compra son distintos de administración del precio de venta. El segundo no ingresa al Bloque 1 por semejanza de nombres.
- Se dispone de alcance macro B1 según S10 y siete registros en Gobierno tras S31. Siguen pendientes clasificación fina de GAPS, aceptación de funciones del proyecto, líder operativo DIARCO, responsables operativos de IT y mesa, dueños, referentes, suplentes, dedicaciones, volumen piloto, cobertura de soporte y resultados de aceptación. Los nombres de S32 son interlocutores, no titulares designados.
- S35 menciona a Javier Vilela como sponsor del proyecto, mientras Gobierno propone a Pablo Bertolissio como sponsor operativo. La estructura de patrocinio y las facultades de cada uno deben quedar en el acta; ninguna minuta sustituye esa decisión.
- S36 reduce la confianza en usar Excel como contingencia de Valkimia a escala DIARCO. La viabilidad de M09 en la primera oleada depende de una alternativa aprobada, contrato de datos y prueba con SGM/Valkimia.

## Uso de estimaciones

Los rangos horarios sirven para discutir reserva de agenda. No están calibrados con esfuerzo real DIARCO y tienen confianza baja. No incluyen operación cotidiana, desplazamiento, guardia ni todo el desarrollo de producto. No sumar roles ocupados por una misma persona como si fueran capacidad independiente.

Los dos ciclos de piloto, cinco días de estabilidad, 100% de casos críticos y objetivos de acuse de soporte son umbrales propuestos. No se presentan como exigencia contractual ni como estándares externos. Dirección y los dueños deben validarlos. No se hizo investigación web porque se trata de diseño de una propuesta propia basada en documentos del proyecto.

## Control de versión

0.1, 29/10/2026: primera propuesta y kit editable. 0.2, 29/10/2026: minutas recientes y controles del paralelo. 0.3, 30/10/2026: correspondencia documental con Gobierno y Asignaciones editadas por el usuario. 0.4, 30/10/2026: RACI CIO/CMZ, tareas WBS, capacidad, formación, decisión D14 y riesgos R12/R13. 0.5, 30/10/2026: integración documental de S33–S36, sin atribuirles aprobación de alcance ni cierre técnico. Los cambios posteriores deben registrar autor, versión, fuente/decisión y pruebas afectadas. Las aprobaciones se registrarán por persona autorizada; no se infieren por presencia en una reunión ni por recepción del material.

## Fuentes incorporadas desde IMPLEMENTACION

La carpeta principal del plan es [IMPLEMENTACION](https://drive.google.com/drive/folders/16nz4aDlr91-vfIEMitnNC3J1JvD3MVd2), y sus [REUNIONES](https://drive.google.com/drive/folders/18HubCqYEyJJ6chr1GZEnX-KuUEdtKl45) complementan el detalle. Se pudo acceder tras actualizar permisos.

| ID | Fuente | Corte y uso |
|---|---|---|
| S14 | [Drive compartido / IMPLEMENTACION](https://drive.google.com/drive/folders/16nz4aDlr91-vfIEMitnNC3J1JvD3MVd2) | Consultado 29/10/2026. Repositorio del equipo indicado por usuario. IMPLEMENTACION es la carpeta principal para el plan. Sólo lectura. |
| S15 | [Plan_Connexa_20261016.pdf](https://drive.google.com/file/d/15phYIe_bxgcxKCC2tlU0dLbj8AQxeKlH/view) | Compartido 19/10/2026. Módulos, validadores e infraestructura AP/PDA. Fechas y corte total quedan subordinados a S10/S13 por instrucción del usuario. |
| S16 | [Resumen ejecutivo post reuniones 20/10](https://drive.google.com/file/d/12nzA5UzuvW4hFuwNvo7B9BM548QpNfdr/view) | 21/10/2026. Aprobación única OC, OC madre/PDA, gobierno de maestros y compromisos VKM. No prueba que acciones posteriores se cumplieron. |
| S17 | [Resumen reuniones 20/10](https://drive.google.com/file/d/1Lv8NQqOtdMPTBJGtMdPZ7aL9dbVM2H1D/view) | Compartido 21/10/2026. Casos de compras/logística y conciliación de facturas B2. Compromisos históricos por verificar. |
| S18 | [Estrategia en IMPLEMENTACION](https://drive.google.com/file/d/1Ef2XfwjCcZG5W82jWGe_biuLPYbcQVv8/view) | Compartido 19/10/2026. Versión PDF de la Estrategia rectora local. Convivencia gradual y separación disponibilidad/adopción. |
| S19 | [Relanzar Recepción e Inventarios](https://drive.google.com/file/d/13gg2896DrzNJE-QJPVw9ZjxIwO77xM82/view) | 22/10/2026. Disponibilidad y confiabilidad de stock se validan por separado. Wi-Fi, PDA, tienda escuela y primeras sucursales pendientes. |
| S20 | [Equipo técnico SM-MO-EWE](https://drive.google.com/file/d/1NJY0-0vUk1PjiCopLtRTub1ZE-hMo3Hx/view) | 22/10/2026. Pruebas parciales informadas; pendientes SGM, autorizaciones, remitos, túnel, maestros y PDA/QR. No acredita cierre del 26/10. |
| S21 | [Equipo técnico MO-EWE](https://drive.google.com/file/d/19o9Yfk5MbfNNvdoITYqZy0iqB2lQ-yw1/view) | 21/10/2026. OC madre demostrada. Concurrencia de recepciones y cambio de lista todavía a validar. |
| S22 | [Auditoría](https://drive.google.com/file/d/12NzBdTsjvkwqv7ZnndETBb2hQuCScixH/view) | 20/10/2026. Guillermo Alvez, interlocutor. Gobierno de datos y workflows requieren definición organizativa. |
| S23 | [Compradores](https://drive.google.com/file/d/1QRjn1y4a-0DLcG3nCLujM8VaB0FBFPzl/view) | 20/10/2026. Romina Garfi, Roxana Frutos, Paloma Romero y Diego Baldi, interlocutores. OC madre y descuentos requieren pruebas. |
| S24 | [Logística y Valkimia](https://drive.google.com/file/d/1aY5pXBry83kI8Fs4pHE2cmezpGWFic3r/view) | 20/10/2026. Christian Rojas/Gastón en Logística. API/Excel y redespachos no son una especificación aprobada. |
| S25 | [Listas de proveedores](https://drive.google.com/file/d/14fA4uzvnh88GG3A8Puim1tiVch5RGl3A/view) | 13/10/2026. Sebastián Basconcelos según esta minuta. Reglas de netos, precedencia y bonificaciones a validar. |
| S26 | [Pendientes de implementación](https://drive.google.com/file/d/1UD6RZoactv23cY9J6RaK5-qGq5neW8DX/view) | 19/10/2026. Identifica interlocutores y deja QX/reposición automática para después de estabilización, fin B2. Confirmar frontera. |
| S27 | [Informe ejecutivo 23/10](https://drive.google.com/file/d/1MiOVTdg-nJS0WnxPQHmkiJBW_sF3PKtP/view) | 23/10/2026. Última evidencia de reuniones al 22/10. No acredita cierre posterior de recuperación, integración o aceptación B1. |
| S28 | [Clusters y segmentos](https://drive.google.com/file/d/1aeoaYyiU3w15atsmD3zDT3W_ZMS2pfr0/view) | 20/10/2026. Liliana D’Amico. Seis segmentos son propuesta, modelo definitivo pendiente de simulación de categoría. |
| S29 | [Contratos Valkimia](https://drive.google.com/file/d/1Q5bV7YBnVGcCHOKnk8j_ZhWpfEJHOINn/view) | 20/10/2026. Gustavo Palacios y Fernando de Pedro. Excel sigue en evaluación. No asumir disponible. |
| S30 | [Conciliación de facturas](https://drive.google.com/file/d/1T297puOriKOsheglNGY-Sxj4W4aJKlM9/view) | 20/10/2026. Walter Sosa y Guillermo Alvez. Triple control OC/recepción/factura corresponde a Bloque 2. |

0.2, 29/10/2026: incorpora nombres/cargos, Estrategia elegida, objetivo 04/11 y minutas compartidas del 13 al 22/10 más informe del 23/10. No hay evidencia nueva de que los compromisos del 26–27/10 se hayan completado. Se distinguen funciones propuestas de asignaciones aceptadas y se conserva la incertidumbre sobre alcance fino y recuperación.
