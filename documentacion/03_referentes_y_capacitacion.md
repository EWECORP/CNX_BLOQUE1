# Referentes, aprendizaje y guías por módulo

Versión 0.2 propuesta. Marco B1: Estrategia de IMPLEMENTACION y actualización del usuario al 04/11. Los interlocutores históricos son candidatos a confirmar, no asignaciones aceptadas.

## Acuerdo común del referente

El referente prepara casos y datos, aprende el circuito y sus límites, ejecuta UAT, registra problemas y capacita al resto. El dueño del proceso decide reglas y firma aceptación. El suplente practica y demuestra autonomía. Mesa de ayuda registra y sigue cada consulta; IT/L2 reciben los casos que exceden L1.

Cada referente debe saber ejecutar la tarea normal, reconocer un resultado incorrecto, manejar una excepción autorizada y abrir/escalar un ticket. No modifica bases, no fuerza aprobaciones y no repite documentos con estado incierto.

## Plan de formación por audiencia

| Audiencia | Aprendizaje | Material | Práctica y aceptación | Responsable |
|---|---|---|---|---|
| Dirección y dueños | Alcance, roles, gates, autoridad SGM y decisiones | Presentación y acta T01 | Explicitar facultades, recursos y aceptación | LD/LZ, valida SP |
| Referente y suplente | Proceso completo, reglas, controles y excepciones | Guía rápida, casos dorados, FAQ y runbook | Demostración individual y una excepción, sin ayuda paso a paso | Forma ZF, valida DP |
| Usuarios finales por rol | Tareas frecuentes, control final y pedido de ayuda | Guía breve por tarea y ejemplos verificados | Ejecutar todas sus tareas críticas con datos de práctica | Forma RF, valida DP |
| Mesa de ayuda | Registro, impacto, prioridad, seguimiento y comunicación | Catálogo de servicios, FAQ y ticket T09 | Simulacro de principio a cierre validado por usuario | MD + ZF |
| IT DIARCO | Accesos, interfaces, monitor, conciliación y recuperación | Matriz de interfaces y runbook técnico | Diagnóstico y recuperación controlada sin duplicar efectos | IT + ZT |

Secuencia: explicación del objetivo y controles; demostración; práctica supervisada; práctica individual; evaluación; devolución; reprueba si hace falta. Duración inicial propuesta por módulo para RF/suplente: dos sesiones de 60–90 minutos más práctica y UAT. Confianza baja hasta revisar dificultad y experiencia. La asistencia no acredita competencia.

Antes del paralelo del 04/11 se completa la formación mínima de los roles participantes. La formación masiva se programa por oleada y requiere que el referente haya demostrado el circuito que enseñará.

## Paquete mínimo de material por módulo

T03 ficha de capacidad, T05 guía de tareas verificadas con capturas de la versión real, T06 evaluación, T07 casos UAT, T08 FAQ/diagnóstico, T09 ticket y T11 transferencia. Cada material tiene versión, propietario, fecha de revisión y población. Usar enlaces únicos en el repositorio compartido, sin copias divergentes.

## M01 · Catálogo y maestros

**Resultado:** Sostener artículos, EAN, proveedor y sucursal con datos consistentes y maestría acordada.

**Dueño propuesto por función:** Dueño de Datos Maestros. **RF por función:** Referente Catálogo. **Interlocutor de antecedentes:** Guillermo Alvez (Auditoría); designar Administración de Datos Maestros. Confirmar persona, suplente, jefatura y horas. **Audiencia:** Administradores de catálogo y responsables comerciales.

### Qué debe hacer

1. Inventariar altas, cambios y bajas con casos reales y excepciones de DIARCO.
2. Conciliar una muestra acordada de artículos, EAN y proveedor contra la fuente autorizada.
3. Definir quién modifica cada dato y cuándo se replica a SGM.
4. Ejecutar alta/cambio/baja autorizados y validar su resultado en ambos extremos.
5. Registrar resultados, defectos y repruebas con IDs y evidencia.
6. Enseñar el circuito a usuarios de su alcance y transferir consultas frecuentes a L1.

### Qué debe aprender y saber explicar

Identificadores, unidad/bulto, estados, permisos, sentido de sincronización y prevención de duplicados.

### Qué responsabilidad debe asumir

Administración de Datos Maestros asegura integridad. Auditoría valida controles/excepciones. Comercial decide surtido. Acordar persona por función y segregación.

### Cómo demostrar preparación y aceptación

Muestra con identidad y campos críticos conciliados. Cambios autorizados auditables. Duplicados rechazados sin pérdida del dato válido. El RF ejecuta y DP acepta. Titular y suplente deben demostrar el flujo normal y una excepción. Para el paralelo se registra comparación con la fuente DIARCO/SGM válida y los resultados esperados acordados.

| Caso inicial | Preparación | Ejecución | Resultado observable esperado |
|---|---|---|---|
| Alta y cambio autorizados | Artículo de prueba con EAN y proveedor válidos | Crear, modificar y consultar en destino | Un solo artículo. Campos críticos y vínculo de sincronización coinciden con el resultado esperado. |
| Identificador duplicado | EAN ya asignado a otro artículo | Intentar una nueva alta con ese EAN | Rechazo o tratamiento definido por el contrato, sin duplicar ni sobrescribir el artículo válido. |

### Problemas frecuentes y respuesta inicial

Síntomas a incluir en FAQ: EAN duplicado; unidad incorrecta; vínculo proveedor ausente; cambio sin replicar. Consultar permisos, versión, corte de datos y documento/estado. Guardar evidencia y aplicar sólo el procedimiento conocido. Si el estado o resultado es incierto, detener el reintento y escalar a IT/L2 desde la mesa.

**Fuentes:** S04; S05; S06; S10; S15; S16; S22. **WBS:** 3.01.01 a 3.01.08, más actividades transversales aplicables.

## M02 · Surtido, clusters y segmentos

**Resultado:** Aplicar elegibilidad y reglas de surtido por artículo y sucursal de forma explicable.

**Dueño propuesto por función:** Dueño de Surtido. **RF por función:** Referente Surtido. **Interlocutor de antecedentes:** Liliana D'Amico (sugerida por antecedentes). Confirmar persona, suplente, jefatura y horas. **Audiencia:** Comercial, surtido y responsables de sucursales.

### Qué debe hacer

1. Preparar matriz artículo/sucursal y excepciones de Mayorista/Barrio que negocio confirme.
2. Validar pertenencia a cluster, segmento y vigencia.
3. Probar habilitación y exclusión en los consumidores incluidos.
4. Explicar el efecto de un cambio y acordar la aprobación de excepciones.
5. Registrar resultados, defectos y repruebas con IDs y evidencia.
6. Enseñar el circuito a usuarios de su alcance y transferir consultas frecuentes a L1.

### Qué debe aprender y saber explicar

Diferencias entre cluster, segmento y grupo de sucursales de compra. Herencia, vigencias y estados.

### Qué responsabilidad debe asumir

Aprobación de reglas, resolución de conflictos de elegibilidad y comunicación a los operadores.

### Cómo demostrar preparación y aceptación

Los pares habilitados y excluidos producen exactamente el efecto acordado en cada consumidor incluido. El RF ejecuta y DP acepta. Titular y suplente deben demostrar el flujo normal y una excepción. Para el paralelo se registra comparación con la fuente DIARCO/SGM válida y los resultados esperados acordados.

| Caso inicial | Preparación | Ejecución | Resultado observable esperado |
|---|---|---|---|
| Par habilitado y excluido | Dos pares con distinta elegibilidad y regla vigente | Consultar y ejecutar el consumidor aprobado para ambos | El habilitado participa. El excluido no genera operaciones nuevas incompatibles. Motivo trazable. |
| Cambio de vigencia | Regla actual y cambio con vigencia futura | Consultar antes y después del corte en TEST | Cada fecha usa la versión esperada. El cambio no altera documentos históricos. |

### Problemas frecuentes y respuesta inicial

Síntomas a incluir en FAQ: Sucursal mal agrupada; regla vencida; artículo habilitado en un circuito y excluido en otro. Consultar permisos, versión, corte de datos y documento/estado. Guardar evidencia y aplicar sólo el procedimiento conocido. Si el estado o resultado es incierto, detener el reintento y escalar a IT/L2 desde la mesa.

**Fuentes:** S04; S05; S06; S10; S15; S16; S28. **WBS:** 3.02.01 a 3.02.08, más actividades transversales aplicables.

## M03 · Listas y acuerdos comerciales de compra

**Resultado:** Disponer de condiciones de compra vigentes y verificables por proveedor, sucursal y artículo.

**Dueño propuesto por función:** Dueño de Compras. **RF por función:** Referente Listas y Acuerdos. **Interlocutor de antecedentes:** Sebastián Basconcelos (según minuta 13/10; confirmar designación). Confirmar persona, suplente, jefatura y horas. **Audiencia:** Compradores y aprobadores comerciales.

### Qué debe hacer

1. Seleccionar proveedores piloto y listas reales con permisos de uso.
2. Preparar ejemplos de descuentos, vigencias y condiciones por sitio/grupo.
3. Construir con Zeetrex casos de cálculo esperados y aprobar su semántica.
4. Importar, corregir errores y validar la versión que consumen compras y OC.
5. Registrar resultados, defectos y repruebas con IDs y evidencia.
6. Enseñar el circuito a usuarios de su alcance y transferir consultas frecuentes a L1.

### Qué debe aprender y saber explicar

Precio lista, neto OC y neto estadístico. Descuentos y reglas dentro/fuera de OC. Orden de aplicación y vigencia.

### Qué responsabilidad debe asumir

Veracidad de condiciones comerciales, autorización de versiones y conciliación de resultados.

### Cómo demostrar preparación y aceptación

Casos dorados reproducibles con impuestos y redondeos aprobados por las áreas competentes, sin doble aplicación de reglas. El RF ejecuta y DP acepta. Titular y suplente deben demostrar el flujo normal y una excepción. Para el paralelo se registra comparación con la fuente DIARCO/SGM válida y los resultados esperados acordados.

| Caso inicial | Preparación | Ejecución | Resultado observable esperado |
|---|---|---|---|
| Lista por proveedor y sucursal | Lista general y específica vigente con valores esperados aprobados | Importar y resolver el precio para dos sitios | Se elige la lista correspondiente. Neto OC y estadístico se explican por componentes y versión. |
| Importación inválida | Archivo con artículo inexistente y descuento mal formado | Importar y corregir el archivo | Se identifican las filas rechazadas. No se publica una versión parcial sin el tratamiento explícitamente aprobado. |

### Problemas frecuentes y respuesta inicial

Síntomas a incluir en FAQ: Lista sin vigencia; descuento duplicado; confusión de netos; grupo de compra confundido con cluster. Consultar permisos, versión, corte de datos y documento/estado. Guardar evidencia y aplicar sólo el procedimiento conocido. Si el estado o resultado es incierto, detener el reintento y escalar a IT/L2 desde la mesa.

**Fuentes:** S04; S05; S06; S10; S25. **WBS:** 3.03.01 a 3.03.08, más actividades transversales aplicables.

## M04 · Forecast y compra inteligente/directa

**Resultado:** Generar y revisar propuestas explicables con datos, condiciones y parámetros vigentes.

**Dueño propuesto por función:** Dueño de Abastecimiento. **RF por función:** Referente Abastecimiento. **Interlocutor de antecedentes:** Romina Garfi (sugerida por antecedentes). Confirmar persona, suplente, jefatura y horas. **Audiencia:** Compradores y gerencia de compras.

### Qué debe hacer

1. Acordar artículos, proveedores y sitios representativos de los modos de compra incluidos.
2. Revisar demanda, stock, pendientes y parámetros usados por el sugerido.
3. Ejecutar una propuesta, justificar ajustes y enviarla al aprobador.
4. Comparar el resultado con casos reales y registrar diferencias con causa.
5. Registrar resultados, defectos y repruebas con IDs y evidencia.
6. Enseñar el circuito a usuarios de su alcance y transferir consultas frecuentes a L1.

### Qué debe aprender y saber explicar

Pronóstico, días de stock, unidades de compra, pendientes, trazabilidad y límites de aprobación.

### Qué responsabilidad debe asumir

Calidad de parámetros de negocio, revisión del sugerido y justificación de decisiones de compra.

### Cómo demostrar preparación y aceptación

Propuesta reproducible para el corte elegido. Valores esperados aprobados y traspaso a OC sin perder ajustes o autorizaciones. El RF ejecuta y DP acepta. Titular y suplente deben demostrar el flujo normal y una excepción. Para el paralelo se registra comparación con la fuente DIARCO/SGM válida y los resultados esperados acordados.

| Caso inicial | Preparación | Ejecución | Resultado observable esperado |
|---|---|---|---|
| Propuesta explicable | Corte con demanda, stock y lista certificados | Generar, revisar un artículo y ajustar con motivo | Se identifican entradas y versión. El ajuste conserva autor y motivo. La aprobación respeta la política acordada. |
| Entrada crítica ausente | Par de prueba sin un parámetro necesario | Generar propuesta y consultar la excepción | Se bloquea o excluye según política explícita aprobada. Nunca se presenta un resultado incompleto como válido. |

### Problemas frecuentes y respuesta inicial

Síntomas a incluir en FAQ: Stock desactualizado; parámetro ausente; sugerido interpretado como OC; fecha/precio inconsistente. Consultar permisos, versión, corte de datos y documento/estado. Guardar evidencia y aplicar sólo el procedimiento conocido. Si el estado o resultado es incierto, detener el reintento y escalar a IT/L2 desde la mesa.

**Fuentes:** S04; S06; S10; S15; S16; S23; S26. **WBS:** 3.04.01 a 3.04.08, más actividades transversales aplicables.

## M05 · Órdenes de compra e integración SGM

**Resultado:** Crear, autorizar y transferir OC con trazabilidad y conciliación entre sistemas.

**Dueño propuesto por función:** Dueño de Compras. **RF por función:** Referente OC. **Interlocutor de antecedentes:** Romina Garfi (sugerida por antecedentes). Confirmar persona, suplente, jefatura y horas. **Audiencia:** Compradores, gerencia, IT e integración SGM.

### Qué debe hacer

1. Definir generación y aprobación única en Connexa, transmisión a SGM sin segunda autorización y cierre de pendientes.
2. Acordar quién comunica la OC al proveedor durante la convivencia.
3. Validar valorización con Compras e Impuestos y vinculación de identificadores.
4. Conciliar cabecera, líneas y estado en SGM y ensayar recuperación sin duplicar.
5. Registrar resultados, defectos y repruebas con IDs y evidencia.
6. Enseñar el circuito a usuarios de su alcance y transferir consultas frecuentes a L1.

### Qué debe aprender y saber explicar

Estados de OC, precio/impuestos, permisos, acuse técnico y funcional, reintento y contingencia.

### Qué responsabilidad debe asumir

Aceptación comercial de la OC, autorización del circuito y control de pendientes no conciliados.

### Cómo demostrar preparación y aceptación

Cada OC piloto tiene identificación cruzada, valores conciliados y resultado confirmado. Reintentar no duplica documento ni envío al proveedor. El RF ejecuta y DP acepta. Titular y suplente deben demostrar el flujo normal y una excepción. Para el paralelo se registra comparación con la fuente DIARCO/SGM válida y los resultados esperados acordados.

| Caso inicial | Preparación | Ejecución | Resultado observable esperado |
|---|---|---|---|
| OC aprobada a SGM | Comprador/aprobador distintos y OC con cálculo esperado | Generar, aprobar, transmitir y conciliar | Cabecera y líneas coinciden con la versión aprobada. Identificadores vinculados y acuse funcional registrado. SGM no exige una segunda autorización de la OC ya aprobada en Connexa. |
| Reintento de integración | OC ya transmitida con acuse perdido en entorno de prueba | Repetir por procedimiento autorizado y consultar destino | Se recupera el estado de una única OC. No hay doble documento ni doble comunicación al proveedor. |
| OC madre e hija por recepción PDA | Madre aprobada, cantidades y reglas de vigencia/saldo definidas | Recibir parcialmente por PDA, generar hija, consultar saldo e intentar excederlo | Hija vinculada a madre con cantidades realmente recibidas. Saldo actualizado una vez. Exceso rechazado conforme a la regla acordada. |

### Problemas frecuentes y respuesta inicial

Síntomas a incluir en FAQ: OC duplicada; aprobación omitida; sin identificador SGM; envío repetido al proveedor. Consultar permisos, versión, corte de datos y documento/estado. Guardar evidencia y aplicar sólo el procedimiento conocido. Si el estado o resultado es incierto, detener el reintento y escalar a IT/L2 desde la mesa.

**Fuentes:** S04; S05; S06; S10; S15; S16; S20; S21; S23. **WBS:** 3.05.01 a 3.05.08, más actividades transversales aplicables.

## M06 · Recepción en sucursal y convivencia SGM

**Resultado:** Recibir y conciliar mercadería con pendientes y stock bajo autoridad definida por etapa.

**Dueño propuesto por función:** Dueño de Operaciones de Sucursal. **RF por función:** Referente Recepción. **Interlocutor de antecedentes:** Fernando Ureña / Cecilia Camus / Javier Dafonte / Rodolfo Herlein (elegir titular). Confirmar persona, suplente, jefatura y horas. **Audiencia:** Receptores, jefes de sucursal y mesa de ayuda.

### Qué debe hacer

1. Revisar cuadro de controles de tienda escuela, recepción, ajustes, decomisos y devoluciones, con autorización, remito y numeración SGM.
2. Probar una sucursal Mayorista y una Barrio si ambas participan del piloto.
3. Conciliar cantidades recibidas, pendientes y stock del sistema autorizado.
4. Ensayar caída de comunicación y recuperación con control de doble recepción.
5. Registrar resultados, defectos y repruebas con IDs y evidencia.
6. Enseñar el circuito a usuarios de su alcance y transferir consultas frecuentes a L1.

### Qué debe aprender y saber explicar

OC/transferencia pendiente, unidad de recepción, recepción parcial y final, diferencias y contingencia.

### Qué responsabilidad debe asumir

Corrección del registro físico, validación del documento y disciplina del circuito durante convivencia.

### Cómo demostrar preparación y aceptación

Recepción y saldo pendiente coinciden con evidencia física y con el sistema autorizado, sin doble impacto. El RF ejecuta y DP acepta. Titular y suplente deben demostrar el flujo normal y una excepción. Para el paralelo se registra comparación con la fuente DIARCO/SGM válida y los resultados esperados acordados.

| Caso inicial | Preparación | Ejecución | Resultado observable esperado |
|---|---|---|---|
| Recepción parcial y diferencia | Documento conocido y cantidades físicas certificadas | Recibir parte, registrar diferencia y conciliar | Se registra lo efectivamente recibido y el motivo. Pendiente e impacto se corresponden con el contrato aprobado. |
| Falla y recuperación PDA | Recepción preparada y comunicación interrumpida en TEST | Recuperar comunicación y seguir el runbook | Una sola recepción efectiva. Operador identifica estado, pendiente y acción autorizada. |

### Problemas frecuentes y respuesta inicial

Síntomas a incluir en FAQ: Pendiente desactualizado; lectura PDA incorrecta; recepción duplicada; diferencia sin motivo. Consultar permisos, versión, corte de datos y documento/estado. Guardar evidencia y aplicar sólo el procedimiento conocido. Si el estado o resultado es incierto, detener el reintento y escalar a IT/L2 desde la mesa.

**Fuentes:** S04; S05; S06; S10; S15; S16; S19; S20. **WBS:** 3.06.01 a 3.06.08, más actividades transversales aplicables.

## M07 · Inventarios y ajustes

**Resultado:** Ejecutar conteos y aprobar diferencias con impacto auditable en el sistema autorizado.

**Dueño propuesto por función:** Dueño de Control de Inventarios. **RF por función:** Referente Inventarios. **Interlocutor de antecedentes:** Guillermo Alvez / Auditoría (confirmar titular operativo). Confirmar persona, suplente, jefatura y horas. **Audiencia:** Conteo, auditoría y responsables de sucursal.

### Qué debe hacer

1. Preparar foto de stock SGM con movimientos pendientes regularizados, mapas/QR y validación PDA; distinguir toma y aplicación del resultado.
2. Preparar artículos con cantidad conocida y casos de diferencia.
3. Ejecutar conteo, recuento y aprobación con segregación.
4. Conciliar el ajuste aplicado y conservar evidencia previa y posterior.
5. Registrar resultados, defectos y repruebas con IDs y evidencia.
6. Enseñar el circuito a usuarios de su alcance y transferir consultas frecuentes a L1.

### Qué debe aprender y saber explicar

Foto de stock, corte, conteo/recuento, diferencias, aprobación y trazabilidad de ajuste.

### Qué responsabilidad debe asumir

Veracidad del conteo, autorización de diferencias y conservación de evidencia de auditoría.

### Cómo demostrar preparación y aceptación

Conteo, diferencia y ajuste mantienen trazabilidad. El ajuste ocurre una sola vez y sólo con autorización válida. El RF ejecuta y DP acepta. Titular y suplente deben demostrar el flujo normal y una excepción. Para el paralelo se registra comparación con la fuente DIARCO/SGM válida y los resultados esperados acordados.

| Caso inicial | Preparación | Ejecución | Resultado observable esperado |
|---|---|---|---|
| Conteo y ajuste autorizado | Stock inicial, conteo independiente y roles segregados | Contar, recontar, aprobar e integrar el ajuste | La diferencia coincide con el esperado. Un único ajuste deja autor, aprobador y estados antes/después. |
| Permiso de ajuste | Usuario de conteo sin facultad de aprobación | Intentar aprobar su ajuste fuera de los permisos | La acción se rechaza y audita. Ningún saldo cambia por el intento. |

### Problemas frecuentes y respuesta inicial

Síntomas a incluir en FAQ: Foto incorrecta; conteo en unidad distinta; ajuste repetido; aprobación por el mismo operador sin permiso. Consultar permisos, versión, corte de datos y documento/estado. Guardar evidencia y aplicar sólo el procedimiento conocido. Si el estado o resultado es incierto, detener el reintento y escalar a IT/L2 desde la mesa.

**Fuentes:** S04; S05; S10; S15; S16; S19; S20. **WBS:** 3.07.01 a 3.07.08, más actividades transversales aplicables.

## M08 · PDD y necesidades de distribución

**Resultado:** Calcular necesidades y backlog con cobertura de parámetros y contrato de consumo claros.

**Dueño propuesto por función:** Dueño de Planificación Logística. **RF por función:** Referente PDD. **Interlocutor de antecedentes:** Christian Rojas / Compras (separar demanda comercial de ejecución logística). Confirmar persona, suplente, jefatura y horas. **Audiencia:** Planificación, comercial y enlace Valkimia.

### Qué debe hacer

1. Confirmar la población de PDD de la primera oleada y su interfaz/consumidor, bajo la Estrategia B1.
2. Revalidar cobertura Inventory y resolver excepciones con su dueño.
3. Probar necesidades dirigidas aprobadas y cálculo diario con evidencia.
4. Conciliar consumo y retorno del sistema logístico sólo bajo contrato confirmado.
5. Registrar resultados, defectos y repruebas con IDs y evidencia.
6. Enseñar el circuito a usuarios de su alcance y transferir consultas frecuentes a L1.

### Qué debe aprender y saber explicar

Necesidad frente a orden/reserva/viaje, stock neto, PDVB, cobertura, exclusiones y saldo del backlog.

### Qué responsabilidad debe asumir

Prioridades de negocio, validación del backlog y decisión sobre excepciones de cobertura.

### Cómo demostrar preparación y aceptación

Se cumplen controles vigentes de cobertura y casos dorados. Backlog trazable sin atribuir a PDD funciones de transporte excluidas. El RF ejecuta y DP acepta. Titular y suplente deben demostrar el flujo normal y una excepción. Para el paralelo se registra comparación con la fuente DIARCO/SGM válida y los resultados esperados acordados.

| Caso inicial | Preparación | Ejecución | Resultado observable esperado |
|---|---|---|---|
| Cobertura Inventory | Scope y políticas leídos nuevamente en ambiente de prueba | Ejecutar preflight y verificar casos incompletos | Estado y exclusiones concuerdan con controles vigentes. Se conserva evidencia y dueño de corrección. |
| Necesidad dirigida y backlog | Par válido y necesidad E/C/A aprobada de prueba | Ejecutar flujo incluido y revisar snapshot/backlog | La necesidad conserva aprobación, prioridad y trazabilidad. No se crea una reserva o viaje por inferencia. |

### Problemas frecuentes y respuesta inicial

Síntomas a incluir en FAQ: Par sin política activa; necesidad dirigida bloqueada; confusión con reserva; retorno logístico incompleto. Consultar permisos, versión, corte de datos y documento/estado. Guardar evidencia y aplicar sólo el procedimiento conocido. Si el estado o resultado es incierto, detener el reintento y escalar a IT/L2 desde la mesa.

**Fuentes:** S05; S06; S07; S08; S10; S15; S16. **WBS:** 3.08.01 a 3.08.08, más actividades transversales aplicables.

## M09 · Transferencias y distribución con Valkimia

**Resultado:** Gestionar transferencias desde Connexa y validar el intercambio mínimo viable con Valkimia y SGM.

**Dueño propuesto por función:** Dueño de Distribución. **RF por función:** Referente Transferencias. **Interlocutor de antecedentes:** Christian Rojas / Gastón (Logística), enlace Comercial a designar. Confirmar persona, suplente, jefatura y horas. **Audiencia:** Compradores, logística y responsables de CD/Valkimia.

### Qué debe hacer

1. Validar con negocio transferencias, acopios, campañas y límites de cada circuito.
2. Acordar con Valkimia/CD interfaz o alternativa Excel, responsables y acuses.
3. Ejecutar una transferencia de extremo a extremo con identificadores y cantidades conciliados.
4. Probar retorno parcial, excepción y recuperación sin duplicar movimientos.
5. Registrar resultados, defectos y repruebas con IDs y evidencia.
6. Enseñar el circuito a usuarios de su alcance y transferir consultas frecuentes a L1.

### Qué debe aprender y saber explicar

Necesidad, transferencia, viaje y movimiento son objetos distintos. Exportación/importación, acuse y estado oficial durante convivencia.

### Qué responsabilidad debe asumir

Validación de prioridades, contenido de transferencias y conciliación funcional con CD y Valkimia.

### Cómo demostrar preparación y aceptación

El intercambio elegido está validado por Valkimia/CD. Cantidades y documentos concilian en el circuito aprobado, sin atribuir a PDD funciones TMS. El RF ejecuta y DP acepta. Titular y suplente deben demostrar el flujo normal y una excepción. Para el paralelo se registra comparación con la fuente DIARCO/SGM válida y los resultados esperados acordados.

| Caso inicial | Preparación | Ejecución | Resultado observable esperado |
|---|---|---|---|
| Transferencia a Valkimia/SGM | Contrato mínimo o formato Excel validado por las contrapartes | Generar, exportar/transmitir, confirmar y conciliar | Identificadores, cantidades y estados coherentes. Evidencia de aceptación de destino. |
| Retorno parcial y reintento | Documento de prueba con despacho parcial y esperado acordado | Recibir retorno, consultar saldo y repetir por procedimiento | Saldo y pendiente coinciden. No se duplica movimiento ni se presume redespacho sin contrato. |

### Problemas frecuentes y respuesta inicial

Síntomas a incluir en FAQ: Archivo rechazado; viaje sin confirmación; cantidad parcialmente despachada; transferencia duplicada. Consultar permisos, versión, corte de datos y documento/estado. Guardar evidencia y aplicar sólo el procedimiento conocido. Si el estado o resultado es incierto, detener el reintento y escalar a IT/L2 desde la mesa.

**Fuentes:** S10; S06; S07; S15; S16; S24; S29. **WBS:** 3.09.01 a 3.09.08, más actividades transversales aplicables.

## M10 · Stock, conciliación y observabilidad

**Resultado:** Controlar stock y pendientes oficiales de SGM y detectar fallas de las interfaces durante convivencia.

**Dueño propuesto por función:** Dueño de Operación y Control de Stock. **RF por función:** Referente Control Operativo. **Interlocutor de antecedentes:** IT + Control de Stock (designar personas). Confirmar persona, suplente, jefatura y horas. **Audiencia:** IT, mesa de ayuda, control de stock y dueños de proceso.

### Qué debe hacer

1. Identificar fuentes oficiales, cortes, responsables y controles por interfaz.
2. Acordar latencias admisibles, alertas y conciliaciones por ciclo.
3. Verificar una operación y su impacto de extremo a extremo con datos de SGM.
4. Simular alerta, abrir ticket, recuperar y verificar saldos/documentos.
5. Registrar resultados, defectos y repruebas con IDs y evidencia.
6. Enseñar el circuito a usuarios de su alcance y transferir consultas frecuentes a L1.

### Qué debe aprender y saber explicar

Stock oficial frente a proyecciones, cortes, correlación, conciliación y límites del reproceso.

### Qué responsabilidad debe asumir

Control de diferencias y decisión de negocio sobre saldos. IT asume monitoreo y recuperación técnica.

### Cómo demostrar preparación y aceptación

Cada interfaz crítica tiene control, dueño y alerta probada. Stock/pendientes concilian bajo cortes acordados y autoridad SGM. El RF ejecuta y DP acepta. Titular y suplente deben demostrar el flujo normal y una excepción. Para el paralelo se registra comparación con la fuente DIARCO/SGM válida y los resultados esperados acordados.

| Caso inicial | Preparación | Ejecución | Resultado observable esperado |
|---|---|---|---|
| Conciliación de stock y pendiente | Foto SGM certificada y movimiento de prueba trazable | Comparar origen, destino, corte y resultado | Diferencias identificadas por causa. Se conserva SGM como autoridad durante etapa 1. |
| Alerta y recuperación | Falla controlada y canal de atención habilitado | Detectar, clasificar, recuperar y conciliar | Responsables reciben y atienden la alerta. Recuperación confirma documentos y saldos antes de reanudar. |

### Problemas frecuentes y respuesta inicial

Síntomas a incluir en FAQ: Dato vencido; proceso fallido sin alerta; documento sin acuse; saldos diferentes entre sistemas. Consultar permisos, versión, corte de datos y documento/estado. Guardar evidencia y aplicar sólo el procedimiento conocido. Si el estado o resultado es incierto, detener el reintento y escalar a IT/L2 desde la mesa.

**Fuentes:** S10; S08; S19; S20; S27. **WBS:** 3.10.01 a 3.10.08, más actividades transversales aplicables.

## Checklist de autonomía

- [ ] Titular y suplente identifican sus facultades y quién acepta el proceso.
- [ ] Ejecutan el circuito crítico y explican entradas, corte y salida.
- [ ] Detectan un caso inválido y conservan evidencia.
- [ ] Comparan contra DIARCO/SGM durante paralelo sin alterar su validez.
- [ ] Atienden una consulta L1 y escalan un defecto por el canal correcto.
- [ ] Capacitan a un usuario que luego demuestra la tarea.
- [ ] Mantienen guía/FAQ y conocen quién los reemplaza.
