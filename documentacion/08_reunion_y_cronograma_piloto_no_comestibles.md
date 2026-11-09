# Piloto C07 · No Comestibles: pedido de información, tareas y cronograma

**Actualización:** 09/11/2026, con observaciones de listas, permisos y datos surgidas en la reunión del 06/11.

**Preparado:** 05/11/2026. **Estado:** propuesta para acordar con DIARCO. **Titular y suplente según la [matriz vigente](07_matriz_sector_circuito.md):** Liliana D'Amico y Carolina Tavernisse. Este piloto cubre el circuito de compra, listas, OC e integración SGM de una población elegida; el [piloto de política de surtido](../../CNX_CLUSTER/docs/18-Primera%20reunion%20piloto%20No%20Comestibles.md) aporta casos de artículos, pero tiene un registro de decisiones propio. No confundir la validación del surtido con la aceptación de una OC.

## Resultado concreto de la primera reunión

Al terminar, debe existir un acta con:

1. **Tres proveedores distintos identificados por código SGM y razón social**, elegidos por los *comportamientos* que deben probarse, no sólo por importancia comercial. Uno puede cubrir varios perfiles; el tercero amplía la muestra con otra operación real. No fijar una cuota arbitraria de facturación.
2. **Para cada proveedor:** tipo de compra, condiciones, lista, artículos, sucursales, forma de recibir/enviar la OC, volumen normal y pico, excepciones, dueño de la información y documentos de ejemplo.
3. **Una población exacta:** códigos de proveedor, SKU y sucursales incluidos, período y operaciones permitidas en TEST/paralelo. Identificar explícitamente lo excluido.
4. **Listas y autorizaciones observables:** para cada proveedor confirmar lista vigente y nueva versión pendiente, importación desde archivo si la usa el sector, condiciones habituales y cambios excepcionales con su aprobador. La minuta del 06/11 registró observaciones D-01–D-08; registrar su estado antes de pedir aceptación del piloto.
5. **Personas y agenda:** Liliana/Carolina, dueño funcional que acepta, Sebastián Basconcelos o referente efectivo de listas, comprador ejecutor, aprobador de OC, IT/SGM y Zeetrex. Confirmar disponibilidad real y suplencias; las horas de M04 y M05 no se suman dos veces para la misma persona.
6. **Resultado esperado y criterio de comparación:** OC real de referencia por tipo, cálculo aprobado por Compras e Impuestos cuando corresponda, tolerancia monetaria acordada, estado esperado en SGM y único emisor al proveedor.
7. **Fecha de devolución** para documentos faltantes y fecha de revisión del piloto. Una invitación o una demostración no constituyen aceptación.

## Qué pedirles que preparen y entreguen

| Paquete | Información precisa | Responsable DIARCO propuesto | Uso posterior |
| --- | --- | --- | --- |
| Catálogo de proveedores piloto | Código SGM, razón social, estado activo, comprador responsable, rubros, artículos suministrados, contacto operativo si hace falta; fuente y fecha del maestro | Liliana/Carolina con Datos Maestros e IT/SGM | Verificar que Connexa lee el proveedor correcto desde SGM; el archivo SAP directo sigue en evaluación |
| Clasificación de cada proveedor | Compra sugerida o directa; entrega a CD, sucursal o ambas; cobertura de sucursales; frecuencia; regular, estacional o excepcional; OC común/madre si aplica; canal actual de comunicación al proveedor | Liliana/Carolina | Elegir flujo de prueba y dependencias de Recepción/OC madre |
| Condiciones comerciales | Lista base vigente y anterior; código de artículo del proveedor; origen de precio (proveedor o carga interna); precio general y específico por sucursal; moneda; unidad de compra/venta, bulto y conversión; descuentos, bonificaciones, volumen, impuestos, condiciones de pago, vigencias independientes y tratamiento de artículos omitidos en una nueva lista | Referente de Listas con comprador; Impuestos valida fórmula | Preparar M03 y el esperado por línea de OC, sin duplicar ni borrar reglas al importar |
| Parámetros de compra y logística | Plazo de entrega, frecuencia, mínimos por pedido o línea, múltiplos/bultos, disponibilidad, restricciones por sucursal, stock y pendientes de referencia, cancelación y entregas parciales | Liliana/Carolina con abastecimiento y Stock | Explicar sugerido y ajuste en M04; seleccionar excepciones reales |
| Muestra documental | Por proveedor, al menos una lista y una OC reciente con sus líneas, condiciones, estado, número SGM, envío/acuse al proveedor y recepción si integra el alcance; ejemplo de rechazo o corrección si existe | Comprador/IT SGM | Armar pruebas reproducibles sin inventar importes ni reglas |
| Volumen y personas | Proveedores y SKU habituales/pico, líneas por OC, OC por día/semana, sucursales atendidas, usuarios concurrentes, tiempo de procesamiento aceptable, comprador, aprobador y reemplazos | Liliana/Carolina y jefatura | Dimensionar el caso de carga y reservar agenda; fijar umbrales medibles |
| Casos difíciles y límites | Proveedor sin artículo en lista, precio por sucursal, cambio de vigencia, descuento por volumen, impuesto interno, sustitución, estacionalidad, baja rotación, rechazo de OC, reintento, recepción parcial; cuáles aplican y cuáles no | Liliana/Carolina con Listas/IT | Elegir casos de excepción y marcar GAPS o mejoras fuera del piloto |

**Forma de entrega:** archivos originales o exportaciones controladas con fecha/corte, códigos estables y persona que confirma su validez. Si una regla está sólo en la práctica del comprador, documentar un ejemplo con entradas, cálculo esperado y aprobador. No copiar datos de TEST como si fueran condiciones vigentes de DIARCO.

### Ficha mínima, una por proveedor

| Campo | Completar en la reunión o asignar devolución |
| --- | --- |
| Código SGM / razón social / comprador / suplente | [ ] |
| Rol en el piloto (habitual, complejo, campaña, excepción) y por qué se eligió | [ ] |
| Compra sugerida/directa; entrega CD/sucursal; OC madre si aplica | [ ] |
| Sucursales y 5–20 SKU de muestra, con unidades y bultos | [ ] |
| Lista y condiciones vigentes: origen, versión, fechas, precio general/específico, descuentos, impuestos | [ ] |
| Parámetros de abastecimiento y logística: plazo, mínimo, múltiplos, frecuencia, stock/pendiente | [ ] |
| OC SGM de referencia: número, fecha, líneas, valores, estados, canal de envío y acuse | [ ] |
| Volumen normal/pico y tiempo esperado; concurrencia | [ ] |
| Excepción que este proveedor permite probar | [ ] |
| Documento faltante, responsable y fecha de entrega | [ ] |
| Comprador ejecutor, aprobador, validador de resultado y dueño de aceptación | [ ] |

**Ejemplo de selección para discutir, sin representar proveedores reales:**

| Ejemplo | Qué proveedor pedir | Qué se prueba | Qué documentación pedir |
| --- | --- | --- | --- |
| P-A · flujo habitual | Uno con compras frecuentes, lista vigente y volumen representativo | Sugerido → ajuste → OC valorizada → aprobación → incorporación en SGM; comparación por línea | Lista, parámetros, SKU/sucursales, dos OC recientes, volúmenes y comprador/aprobador |
| P-B · condiciones complejas | Uno con precio por sucursal, bonificación por volumen o impuestos particulares, **si existe en No Comestibles** | Precedencia del precio específico; vigencias separadas; secuencia de descuentos e impuestos; rechazo/corrección de OC | Dos listas/versiones o reglas, ejemplos de cálculo firmados por Compras/Impuestos, OC real |
| P-C · excepción o temporada | Uno con campaña, mínimo/múltiplo, surtido selectivo, baja rotación o entrega parcial | Vigencia y excepción; cantidad ajustada; posible dependencia de recepción/OC madre | Calendario, restricción, pedido/OC de excepción, destino y resultado esperado |

Un proveedor puede cubrir varios perfiles, pero el lote debe incluir tres proveedores distintos. Si no existe P-B o P-C con esas características, registrar «no aplica» y elegir otro proveedor real con un comportamiento útil. Si el sector no dispone de tres proveedores elegibles, documentar la limitación y acordar con el dueño funcional cómo ampliar la muestra. Incluir, si existe, un artículo con varios proveedores para comprobar factor y paletizado por proveedor. No fabricar una operación para completar la matriz.

## Lista de tareas y cronograma tentativo

**D0** es la reunión sectorial, propuesta para el **jueves 12/11**, después del inicio de referentes del 10/11. Mover toda la secuencia si no se confirma esa agenda. El **lunes 09/11 es feriado nacional**. El [decreto oficial](https://www.argentina.gob.ar/normativa/nacional/norma-430580/texto) también establece feriado el martes 10/11 en CABA y Córdoba, y el miércoles 11/11 en la provincia de Buenos Aires; la reunión de referentes del 10/11 debe prever recuperación para ausentes. El lunes 23/11 también se reserva como no laborable por el [traslado del Día de la Soberanía](https://www.argentina.gob.ar/sites/default/files/cronograma_de_licitaciones_2026.pdf). Las fechas son tentativas y no comprometen una puesta en producción.

| Cuándo | Tarea y responsable propuesto | Entregable verificable | Condición para seguir |
| --- | --- | --- | --- |
| D0 (jue 12/11) | Liliana/Carolina eligen proveedores, SKU, sucursales y perfiles; Compras nombra aprobador y dueño de aceptación; Zeetrex registra decisiones | Acta, fichas por proveedor, muestra inicial, documentos faltantes con dueño y fecha | Población y personas identificadas |
| D+1 (vie 13/11) | Compradores entregan listas, OC y reglas reales; IT/SGM extrae maestro, stock/pendientes y números/estados de referencia | Paquete de datos fechado, sin mezclar cortes; inventario de faltantes | Códigos y documentos identificables |
| D+2 (lun 16/11) | Sebastián/referente de Listas y Compras concilian condiciones, vigencias, unidades y descuentos; Zeetrex mapea entidades en TEST | Matriz proveedor–artículo–sucursal y mapa de reglas; bloqueos de maestro separados | Cada caso tiene regla y fuente |
| D+3 (mar 17/11) | Compras e Impuestos aprueban cálculo esperado por línea y tolerancias; IT/SGM acuerda canal, acuse y control de duplicación | Casos `CC-C07-01…06` ajustados, esperado independiente y contrato de comparación | No ejecutar aceptación monetaria sin esperado aprobado |
| D+4 (mié 18/11) | Zeetrex prepara TEST y datos; Liliana y Carolina hacen taller y práctica individual; IT verifica permisos, lista vigente y efectos externos | Formación/evidencia individual y smoke del circuito mínimo | Prueba controlada y único emisor al proveedor |
| D+5 (jue 19/11) | Compradores y Zeetrex ejecutan caso integral y diferencia de valorización (`CC-C07-01/02`) | Ejecuciones con OC Connexa/SGM cruzadas, valores por línea, defecto o conformidad | Diferencias críticas clasificadas |
| D+6 (vie 20/11) | IT/SGM y Zeetrex prueban recuperación/reintento y carga representativa (`CC-C07-03/04`) | Evidencia de una sola OC/emisión; tiempos, volumen y concurrencia medidos | Sin duplicación ni pérdida de trazabilidad |
| D+7 (mar 24/11) | Liliana/Carolina, soporte e IT prueban permisos, segregación y consulta L1 (`CC-C07-05/06`); repruebas necesarias | Aptitud de titular/suplente y registro de incidencias/evidencia | Defectos bloqueantes resueltos o decisión explícita de detener |
| D+8 (mié 25/11) | Dueño funcional DIARCO revisa todas las ejecuciones, formación, diferencias, exclusiones, D-01–D-08 y contingencia; LD/LZ registran el gate correspondiente | `AC-C07` con alcance/versión/población; Gates sólo si corresponde | Cierre UAT/G1 tentativo; G2 exige además dos ciclos completos, incluido uno con excepción |

Si la integración SGM, fiscalidad o la entrega de datos bloquea una prueba, **registrar la causa, dueño y nueva fecha**. Puede seguir la preparación no dependiente; no declarar ejecutado ni aceptado el caso bloqueado. El paralelo conserva SGM/DIARCO como fuente válida y debe impedir doble envío de OC al proveedor.

### Preflight funcional incorporado de la reunión del 06/11

Las observaciones siguientes son **hallazgos a verificar**, no defectos declarados resueltos. Para cada una registrar ticket, dueño, versión, evidencia de corrección y reprueba o exclusión aprobada.

| ID | Comprobación antes de G1 de C07 |
| --- | --- |
| D-01 | Maestro y renglón de lista: código de barras, búsqueda y consistencia del artículo. |
| D-02 | Búsqueda, selección, navegación y tiempos de respuesta con datos representativos. |
| D-03 | Menú y bandeja de autorización visibles para el perfil aprobador correcto. |
| D-04 | Lista anterior visible y utilizable mientras una versión nueva está pendiente; probar por separado consulta y valorización. |
| D-05 | Guardado del borrador al cancelar o volver, con comportamiento explicado al usuario. |
| D-06 | Comparación de versiones y detección de artículos omitidos; acordar si es requisito del piloto o mejora posterior. |
| D-07 | Condiciones habituales heredadas en OC y cambio excepcional sujeto a facultad de aprobación. |
| D-08 | Alcance de transferencias/Valkimia separado de la aceptación de compra C07. |

## Dónde registrar el resultado en el libro v0.5

| Hoja | Qué completar para C07 |
| --- | --- |
| `Piloto No Comestibles` | Seguir los ocho pasos y abrir sus referencias; es una guía, no evidencia de ejecución. |
| `Matriz circuitos` | Población/proveedores piloto, perfil de volumen, particularidades reales y dependencias de C01/C03/C15/Recepción. |
| `Equipo circuitos` y `Asignaciones` | Confirmar titulares, suplentes, jefatura, disponibilidad, comprador/aprobador y dueño funcional; consolidar horas de personas compartidas. |
| `Casos circuitos` | Ajustar preparación, pasos, datos, esperado y umbrales de `CC-C07-01…06` según los proveedores elegidos. |
| `Formacion circuitos` | Fechas, material, práctica, evaluación individual de Liliana/Carolina y brechas. |
| `Ejecuciones circuitos` | Una fila por prueba y reprueba, con versión, corte, observado, diferencia, defecto y enlace a evidencia. |
| `Aceptacion circuitos` | Decisión `AC-C07` del dueño nombrado, alcance aceptado, pendientes y evidencia. |
| `Gates` | Decisión separada sobre habilitación o expansión; el calendario tentativo no la sustituye. |

**Pregunta de cierre para DIARCO:** «¿Con qué proveedores reales podemos demostrar el circuito normal, la condición comercial más difícil y una excepción de No Comestibles? Para cada uno, ¿quién entrega la lista y la OC de referencia, quién aprueba el cálculo y cuándo podremos probarlo juntos?»
