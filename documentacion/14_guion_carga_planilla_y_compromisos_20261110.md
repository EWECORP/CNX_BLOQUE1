# Guion de trabajo sobre la planilla · reunión de referentes 10/11/2026

**Estado posterior:** la [minuta del 10/11](https://drive.google.com/file/d/1wL4BTWbnnzcz03bo_aF6JV7SFlqf_dw_/view) confirmó a Eduardo Mañe como líder DIARCO. El libro fuente fue editado por el usuario después de este guion; la continuación vigente es el [plan v0.6](../outputs/20261110/DIARCO_Bloque1_Plan_v0.6_20261110.xlsx) y el [kit para la reunión del 11/11 a las 14:00](kit_referentes_20261111/00_hoja_instructiva.md). La primera capacitación comienza el 12/11 a las 10:00. Los rangos y estados de la foto anterior que siguen abajo son históricos.

**Para quien conduce:** Eduardo Ettlin. **Planilla:** [DIARCO_Bloque1_Plan_v0.5.xlsx](../outputs/20261105/DIARCO_Bloque1_Plan_v0.5.xlsx), editada el 09/11. **Objetivo de la sesión de trabajo:** salir con decisiones nominales y agenda para iniciar C07 No Comestibles, más un dueño y una fecha de devolución para cada vacío. Este guion acompaña la [presentación y relato](13_guion_y_prompt_reunion_migracion_20261110.md); no convierte una propuesta en aprobación.

## Prioridad y criterio de salida

| Prioridad | Obtener en vivo | Dónde queda | Si falta alguien que puede decidir |
| --- | --- | --- | --- |
| **P0 · imprescindible** | Sponsor y líder operativo DIARCO con facultades; autorización de capacidad; titular, suplente, dueño funcional, jefatura y agenda de C07 y de las seis filas M05; líder IT operativo y mesa L1; Pablo Duplessy y su dedicación; fecha de próxima revisión. | `Gobierno`, `Asignaciones`, `Decisiones` D02–D04/D08/D14, `WBS` 1.02–1.04/1.07/2.20, acta. | Registrar **Sin decidir**, responsable nominal y fecha cierta de respuesta. Nunca usar presencia o silencio como `Confirmado`. |
| **P1 · antes de la reunión sectorial C07** | Dueño del lote de tres proveedores y fecha de entrega; comprador y aprobador de OC; dueño de usuarios/roles; sesiones de formación y disponibilidad de TEST; responsables de esperado de OC y emisor único. | `Matriz circuitos!F11:H11`, `Aceptacion circuitos!F11:I11/R11`, `Decisiones` D05/D06/D10, `Formacion circuitos!I17:M18`, `WBS` 1.05/2.02–2.04. | Dejar un entregable preciso, dueño y día/hora de devolución; los códigos y reglas se completan con el área, no se inventan en plenario. |
| **P2 · antes de UAT/producción** | Datos y tolerancias aprobados, accesos probados, material versionado, aptitud individual, seis casos C07 ejecutados, defectos, aceptación funcional y gate productivo. | `Casos circuitos`, `Ejecuciones circuitos`, `Formacion circuitos`, `Aceptacion circuitos`, `Gates`. | Mantener `No evaluado`, `No ejecutado`, `Pendiente`; replanificar el gate. |

**Regla de registro:** cada acuerdo debe tener **qué**, **persona**, **autoridad**, **fecha** y **evidencia/acta**. “Lo vemos” equivale a pendiente. Diferenciar **compromiso del referente**, **liberación de horas por jefatura**, **aceptación del dueño** y **autorización de producción**: son cuatro decisiones.

## Preparación de la planilla antes de proyectarla

1. Usar **una copia de trabajo controlada** del libro editado el 09/11. Acordar quién carga y quién verifica. No permitir que varias personas escriban versiones locales y luego intenten unirlas sin responsable.
2. Abrir `Asignaciones` y filtrar `A=M05`; mostrar las filas **10–15**. Tener visibles también `Gobierno`, `Decisiones`, `Matriz circuitos` C07 y `Aceptacion circuitos` AC-C07.
3. Separar un acta breve con asistentes/ausentes, decisión, decisor, hora y enlace a evidencia. Cargar el valor en el Excel **durante o después de la reunión**, sólo cuando la persona habilitada lo confirme explícitamente.
4. Pedir a Pablo Duplessy que tome nombres, agenda, ausencias y tareas de formación mientras Eduardo conduce. Si Pablo no acepta formalmente CMZ, designar a otro registrador para la sesión.

## Guion de 55 minutos después de la presentación

### 0–8 min · Mandato, alcance y autoridad (P0)

**Decir:** «La migración es una decisión estratégica de DIARCO. Para ejecutarla sin comprometer la cadena necesito saber quién puede priorizar personas, quién coordina DIARCO y quién firma cada aceptación. Hoy registraré tanto las decisiones como las faltantes con responsable y fecha».

**Pedir:** sponsor operativo, líder DIARCO y suplente, facultad de cada uno, ratificación de B1/B2 como marco, cadencia de decisiones y canal de escalación. Aclarar si Javier Vilela tiene un papel de patrocinio o de gobierno adicional a Pablo Bertolissio/Roberto Goldfarb; la documentación anterior contiene ambas referencias y no las concilia por inferencia.

**Registrar:** `Gobierno!C6:E11` sólo en las filas cuya función/facultad fue aceptada; `Decisiones!E6/K6` para D01, `E7/K7` para D02 y `E13/K13` para D08 siguiendo el mapa de columnas de abajo. `Gates!H6` sigue **Pendiente** si faltan alcance, capacidad, IT o evidencia de aprobación G0.

### 8–28 min · Compromiso nominal por frente (P0)

**Decir, frente por frente:** «¿Es correcta esta pareja para **este módulo**? ¿Cada persona acepta preparar datos, capacitarse, ejecutar y documentar pruebas, ayudar a usuarios y asistir al paralelo? ¿Qué jefatura libera tiempo concreto? ¿Quién tiene autoridad para aceptar el resultado funcional? ¿Qué dos ventanas reservamos ya?».

Mostrar `Asignaciones!A10:Q15` y recorrer las seis filas. Una respuesta sobre **M04** no valida automáticamente **M05**; sus roles pueden diferir. Confirmar si los cambios de titular/suplente entre ambos módulos son intencionales.

| Fila | Frente M05 | Pregunta puntual adicional |
| --- | --- | --- |
| 10 | Food / OC madre: Sebastián Basconcelos / Marcelo Cingolani | ¿Quién lidera C09 OC madre? Marcelo figura como suplente en M05, mientras la matriz por circuito aún no tiene titular C09. |
| 11 | Perecederos: Roxana Frutos / Darwin Leon | ¿El suplente M05 es Darwin, distinto de Diego Baldi en M04? Confirmar grafía Roxana **Frutos** frente a “Furtos” en la matriz anterior. |
| 12 | Carnes: Facundo Toledo / Cristian Escudero | Precisar aprobador funcional y dependencia de pesables/recepción. Corregir “Carmes” en el texto de función si DIARCO confirma Carnes. |
| 13 | No Comestibles: Liliana D'Amico / Carolina Tavernisse | `L13=Confirmado` sólo expresa el campo Compromiso. Faltan jefatura, ventanas y dueño. En M04 los roles Liliana/Carolina están invertidos: preguntar si es deliberado para propuesta vs. OC. |
| 14 | Perfumería/Limpieza: Camila Klipauka / Romina Garfi | En M04 aparecen Romina/Camila; confirmar que el intercambio de funciones M05 es deliberado. |
| 15 | Barrio: Paloma Romero / `Rodrigo xxxx` | Pedir nombre completo y función real de Rodrigo; Barrio es un formato, por lo que hay que definir categorías/sitios incluidos. |

**Si el titular responde sí pero la jefatura no está:** registrar la aceptación individual que pueda evidenciarse en `L`, conservar `M/N` vacíos, anotar responsable y fecha de respuesta en `Decisiones` D03 y no tratar la fila como equipo confirmado.

### 28–38 min · Piloto C07 y datos que deben traer (P1)

**Decir:** «No les pido resolver ahora todas las fórmulas. Necesito tres proveedores **con código SGM**, un habitual, uno con condición exigente y uno con excepción o campaña real. Para cada uno, nombre de quien entrega lista, OC SGM de referencia y resultado esperado, más fecha. También necesito comprador, aprobador y dueño que firme la aceptación».

**Pedir hoy:** dueño de selección y entrega, tres perfiles, población inicial (proveedores/SKU/sucursales), alcance y exclusiones, responsable del esperado por línea, aprobador de OC, fecha de reunión sectorial y entrega. Usar la [ficha completa de proveedor](08_reunion_y_cronograma_piloto_no_comestibles.md) en la reunión C07, no agotar el plenario con detalles de cada lista.

**Registrar:** `Matriz circuitos!F11:H11` y `O11/Q11`; `Aceptacion circuitos!F11:G11/I11/R11`; `Decisiones` D05/D06/D10. `Casos circuitos!H35:K40` se completa tras recibir la muestra y aprobar los esperados. Una OC valorizada se compara **por línea** en `OC paralelo` cuando se ejecute, con SGM como información vigente durante esta etapa.

### 38–48 min · Personas, acceso, formación y soporte (P0/P1)

**Decir:** «El equipo técnico Zeetrex está construyendo el material. Necesito quién valida reglas de negocio, versión y fecha de entrega del material; quién convoca a cada persona; y quién confirma que aprendió a ejecutar un caso normal y una excepción. Además, cada área debe devolver la nómina de usuarios, roles y autorizadores para TEST y Producción por separado».

**Pedir:** dueño DIARCO de la [matriz nominal de usuarios y permisos](11_capacitacion_usuarios_y_accesos.md), fecha de devolución, administrador/configurador, prueba de acceso TEST, jefatura que autoriza, facilitador funcional Zeetrex, evaluador de aptitud, coordinador de mesa DIARCO L1, líder IT operativo y suplente, cobertura horaria y canal de tickets. Confirmar con Eduardo la asignación real de Pablo Duplessy, horas y sustituto.

**Registrar:** `Gobierno!D11:E11`; `Decisiones` D04/D09/D14; `Formacion circuitos!I17:M18` sólo para coordinador, facilitador, versión y **agenda confirmados**. Dejar `N17:N18=No evaluado` hasta práctica individual. `WBS` 1.04/1.07/2.03/2.20/2.21 reciben ejecutor y fecha; se cierran luego con evidencia.

### 48–55 min · Lectura de acuerdos y próxima revisión (P0)

**Leer en voz alta:** «C07: titular, suplente, jefatura, dueño que acepta, horas, dos ventanas, lote y fecha. IT/mesa: nombres y cobertura. Zeetrex: Pablo, facilitador, responsable de material, fechas. D01–D14: qué se decidió y qué falta». Solicitar correcciones antes de cerrar. Fijar día/hora de revisión de pendientes y responsable de publicar el acta y actualizar el libro.

**Cerrar con precisión:** «El objetivo es avanzar rápido. La aceptación de TEST y el uso limitado en Producción se decidirán por circuito y evidencia; asistir hoy no habilita Producción. Durante la convivencia, SGM conserva la autoridad de los datos que aún no transferimos y se evita el doble envío al proveedor».

## Cómo completar `Asignaciones` · campos A–Q

La fila 13 sirve para ilustrar C07/M05. Repetir el mismo criterio en las seis filas M05 y luego en las demás capacidades B1. **No escribir un valor de ejemplo como si fuera una decisión real.**

| Columna | Valor esperado y pregunta de control | Regla de carga |
| --- | --- | --- |
| `A` ID | Módulo (`M05`). | Mantener ID; las seis filas representan frentes del mismo módulo. |
| `B` Capacidad B1 | Órdenes de compra e integración SGM. | Mantener descripción; no reemplazarla con el nombre del sector. |
| `C` Bloque | `B1`, `B2`, `B3` o `Excluido`. | Cambiar sólo con decisión de alcance D01/GAPS y evidencia. |
| `D` Dueño propuesto (función) | Función que **debe** aceptar, por ejemplo Dueño de Compras (Non-Food). | Puede precisarse por frente; no equivale al nombre real. |
| `E` Interlocutor de antecedentes | Contactos históricos. | Conservar como procedencia; no es designación ni aceptación. |
| `F` Titular confirmado | Nombre y apellido de quien ejecutará, preparará datos, probará y será referente L1 funcional. | Verificar que acepta el trabajo; corregir grafía. Un grupo de nombres en una celda no permite compromiso individual. |
| `G` Suplente confirmado | Persona que practica y cubre al titular. | Nombre completo; completar `Rodrigo xxxx` antes de considerarlo designado. |
| `H` Jefatura que libera tiempo | Nombre y cargo de la persona que puede liberar a titular y suplente. | Si tienen jefaturas distintas, registrar **ambas** y sus aprobaciones individuales en el acta; la planilla tiene una sola columna H. |
| `I` h titular/semana | Horas **protegidas realmente autorizadas**. Hoy aparece `6` como propuesta. | Preguntar inicio/fin y tareas habituales que se redistribuyen. Consolidar por persona: Liliana/Carolina en M02, M04, M05 y M08 no generan cuatro bolsas independientes de seis/cuatro horas. |
| `J` h suplente/semana | Horas protegidas del suplente; hoy `4` como propuesta. | Mismo control de capacidad que I. |
| `K` Ventanas de agenda | Día, franja, zona horaria, tipo de actividad y vigencia. Ejemplo **de formato**, no acordado: `12/11 10:00–11:30 formación; 18/11 14:00–16:00 práctica/UAT`. | Evitar “a coordinar” como confirmación. Si falta ventana, dejar vacío y abrir tarea con fecha. |
| `L` Compromiso | `Confirmado` o `Sin confirmar` según la **aceptación expresa de titular y suplente** de tareas y disponibilidad. | La fila tiene un solo L: si uno no confirmó, conservar `Sin confirmar` y registrar las dos respuestas individuales en el acta. `L13=Confirmado` ya está cargado; pedir ratificación de alcance. |
| `M` Acepta jefatura | Nombre y apellido de quien autorizó la liberación de ambas personas; puede añadirse referencia al acta. | No escribir “Sí” sin identificar aprobador. Si intervienen dos jefaturas, consignar ambas sólo tras obtener ambas respuestas. |
| `N` Fecha aceptación | Fecha real en que quedó completa la autorización de M como **fecha de Excel**. | Con dos jefaturas, usar la fecha de la última aprobación y conservar ambas fechas individuales en el acta. No fechar por presencia. |
| `O` Preparación del equipo | Fórmula: `Equipo confirmado` sólo si F/G/H, I/J positivas, K, L, M/N, P/Q cumplen. | **No editar**. Revisar el resultado; no usarlo como prueba de aceptación funcional del módulo. |
| `P` Dueño nominal confirmado | Nombre de quien decide reglas, criterios y aceptación funcional de ese frente. | Distinguir de titular, jefatura y sponsor. Una misma persona sólo si la segregación/autoridad lo permite y fue acordado. |
| `Q` Aceptación del dueño | `Confirmado` sólo si P **aceptó expresamente** la responsabilidad. | No confundir con `Aceptacion circuitos!N`, que se completa tras UAT. |

### Foto de M05 al 09/11 y qué falta

`F10:G15` ya contiene propuestas. En las seis filas faltan `H`, `K`, `M`, `N`, `P`; `Q=Sin confirmar`. `L13=Confirmado`; las otras `L=Sin confirmar`. `I=6`/`J=4` están cargadas, sin constancia de liberación real. **Ninguna de las seis filas cumple todavía la fórmula de `O=Equipo confirmado`.** Si un decisor no participa mañana, dejar sus casillas de aprobación vacías y acordar devolución nominal.

## Otras solapas: qué completar mañana y qué reservar para las pruebas

| Hoja / celdas | Qué escribir mañana | Qué no declarar todavía |
| --- | --- | --- |
| `Gobierno!C6:E12` | En `C`, función acordada; `D`, estado de aceptación explícito; `E`, facultad concreta: liberar capacidad, decidir gate, coordinar IT, dirigir cambio o L2. Especialmente fila 11 de Pablo Duplessy. | Cargo informado en B no prueba función de proyecto. No dar por aprobados los siete roles por mostrar la tabla. |
| `Decisiones!A6:K19` | Filtrar D01/D02/D03/D04/D05/D06/D08/D09/D10/D12/D14. `E`: `Sin decidir`, `En análisis` o `Resuelto`; `H`: decisión literal y límites; `I`: nombre del decisor; `J`: fecha real; `K`: enlace a acta/evidencia. La columna `F` explica el criterio, no la decisión tomada. | `Resuelto` sólo con H–K completos. En D14 (fila 19) la lista desplegable de E no llega a esa fila; escribir el mismo estado permitido sin asumir que el desplegable funciona. Ventanas D contienen fechas viejas: acordar nuevas fechas en acta/WBS y revisar la baseline. |
| `WBS!J6:O15`, `J118:O121` | `K`: ejecutor nominal; `L`: fecha objetivo; `J`: estado que refleje trabajo real; `M`: enlace al entregable cuando exista; `N/O`: aprobador y fecha sólo al aceptar. Priorizar 1.01–1.07, 2.02–2.04, 2.20–2.21. | No escribir `Cerrado` sin evidencia y aceptación; `P` es fórmula de control. |
| `Matriz circuitos!F11:H11/O11/Q11` | C07: reglas y excepciones (`F`), volumen/pico (`G`), proveedores/SKU/sitios/corte (`H`), dependencias (`O`) y orden de preparación (`Q`). Usar enlace a ficha del lote si el detalle no cabe. | La prioridad de C07 no implica que ya exista lote válido ni acceso. |
| `Aceptacion circuitos!D11:I11/R11` | Corroborar titular/suplente (`D/E`); `F` dueño que **firmará**; `G` población, exclusiones y límites; `I` criterios/tolerancias a aprobar; `R` próxima acción + responsable + fecha. | `N11` queda `Pendiente` hasta prueba y decisión real; `Q11` es texto guía de gates, no autorización. `H/L/M/O/P` se completan con versión, ejecuciones, defectos y acta al aceptar. |
| `Formacion circuitos!I17:Q18` | Para titular y suplente C07: `I` coordinador confirmado, `J` facilitador/evaluador, `K` material y versión cuando esté validado, `L` fecha/hora de sesión reservada, `O` brecha/acción. `M` fecha de evaluación se carga cuando se realiza. | `N=No evaluado` hasta demostración individual; `P` evidencia y `Q` reprueba sólo después de practicar. El equipo técnico produce material; eso no acredita aptitud de usuarios. |
| `Casos circuitos!H35:K40` | Tras la reunión sectorial, dataset/corte (`H`), esperado de negocio (`I`), carga normal/pico (`J`) y criticidad validada (`K`) para los seis casos C07. | Un esperado propuesto no es aprobado. En `Ejecuciones circuitos!I:K` quedan aprobador y fecha del esperado real antes de ejecutar. |
| `Ejecuciones circuitos!E35:T40` | Sólo reservar en `T` la próxima acción, responsable y fecha si se decide. Luego, por **cada ejecución**, cargar ambiente, versión, dataset/corte, volumen, esperado aprobado, ejecutor, fecha, observado, resultado, ticket y evidencia. | `P35:P40` debe seguir `No ejecutado` mañana si no hubo ejecución. Una reprueba usa **otra fila/ID** y referencia en `S`; no se pisa la ejecución anterior. |
| `OC paralelo!A6:K23` | Preparar el criterio: proveedor, sitio, corte, lista, unidad, cantidad, precio, descuentos, impuestos, redondeo, total, estado, identificador y emisor. Dueño de esperado y tolerancia en D10. | No cargar valores C/D/E ni `Conforme` sin las dos OC del mismo corte y cálculo independiente; el total no compensa diferencias de línea. |
| `Gates!F6:K10` | Si hay decisión formal, `F` población/oleada, `G` versión, `H` `Go`/`No-go`, `I` decisor, `J` fecha, `K` acta y reservas. Para G0, corroborar todos los criterios. | Mantener `Pendiente` sin firma o evidencia. G1 UAT, G2 paralelo y G3 expansión son decisiones separadas; duplicar filas por población cuando se llegue a cada gate. |

### Dependencias que deben quedar con dueño y fecha

1. **Convivencia y emisor único:** D06/WBS 2.02. Definir por dato/proceso quién escribe, quién lee, cuándo invierte sentido la interfaz, cómo se concilia y quién comunica la OC al proveedor. IT y dueño de proceso deben aprobarlo antes de un paralelo con efecto externo.
2. **Recepción de cadena:** D12/WBS 2.12. IT/Operaciones deben listar sitio inicial, AP/Wi-Fi/PDA, prueba de conectividad, apoyo local y fecha. No se compromete toda la cadena en Bloque 1.
3. **Base 2/Valkimia:** asignar dueño de contrato, VPN, TEST, retorno de preparado/despachado/pendiente y prueba con SGM. La carga manual sólo puede considerarse si hay control de identidad, estados, conciliación y no duplicación; dejar C14 sin UAT fechada hasta resolverlo.
4. **Resguardo de cajas desde 15/12:** pedir a IT/Operaciones alcance, excepciones y autorizador. Es una **propuesta**; registrar la decisión explícita en el acta y luego agregar una fila de `Decisiones` para que no quede escondida en comentarios.
5. **Bloque 2:** registrar frontera B1/B2 y GAPS en D01/`GAPS!G:K`, con decisor y fecha. No presentar una fecha de apagado total de SGM.

## Qué delegar a Pablo Duplessy

`Gobierno!A11:E11` lo propone como **Gestión del Cambio Zeetrex (CMZ)** y `Decisiones!A19:K19` mantiene D14 sin decidir. Pedir a Eduardo/LZ que confirme primero su dedicación y autoridad. El equipo técnico ya está produciendo los materiales; Pablo puede concentrarse en que cada persona reciba, practique y use ese material.

| Encargo para Pablo | Entregable observable | Registro principal | Límite de facultad |
| --- | --- | --- | --- |
| Tomar compromisos y ausencias de la reunión | Acta con nombre, tarea, responsable de aprobación y fecha; lista de quienes necesitan instancia de recuperación | `Decisiones` D03/D14; `WBS` 2.20 | No marcar `Confirmado` por asistencia ni aceptar por DIARCO. |
| Coordinar calendario y convocatorias | Dos opciones de base común, taller C07, participantes titulares/suplentes, aprobadores, IT y mesa; confirmación de asistencia | `Formacion circuitos!I:L`; guía de usuarios | No prometer UAT si faltan datos, permisos o material validado. |
| Gestionar entrega del material técnico | Inventario de módulos/tareas, autor técnico, revisor funcional DIARCO, versión, fecha, enlace, dudas abiertas y fecha de corrección | `Formacion circuitos!J:K`; `WBS` 2.20 | No declarar correctas reglas de negocio o integraciones por sí mismo. |
| Medir preparación individual | Por titular/suplente: sesión, caso normal, excepción, evaluador, resultado, evidencia y brecha/reprueba | `Formacion circuitos!L:Q`; `WBS` 2.21 | Asistencia no es aptitud; el evaluador funcional y dueño deciden criterio. |
| Obtener nómina de usuarios, roles y autorizadores | Una fila por persona × circuito × ambiente, dueño DIARCO y fecha; pendientes de acceso TEST separados de Producción | [Plantilla de usuarios](11_capacitacion_usuarios_y_accesos.md); `WBS` 2.03 | IT y dueño de negocio aprueban permisos; Pablo persigue la entrega y detecta faltantes. |
| Mantener pulso de adopción y FAQ | Consultas repetidas, barreras, cambios al material, responsable y fecha; reporte breve diario durante C07 | `WBS` 4.04; evidencia enlazada al circuito | L1 DIARCO y L2 Zeetrex siguen atendiendo incidentes según su competencia. |

**Pedido a Pablo en una frase:** «Tomá la coordinación de adopción: mañana registrá quién falta, agendá la doble sesión y la práctica C07, pedí la nómina de usuarios y mantené un tablero de material recibido, revisado y probado. Traeme cada día las brechas con dueño y fecha. Las reglas y la aceptación funcional las firma DIARCO; el contenido técnico lo produce el equipo asignado».

## Control de calidad al guardar el libro

- `Asignaciones!O6:O20` se calcula; revisar que ninguna fila aparezca `Equipo confirmado` con un nombre, autoridad o agenda ambiguos. `Resumen!B9` cuenta **15 filas** de `Asignaciones` tras abrir M05, aunque el rótulo dice “frentes B1”; no interpretarlo como 15 módulos distintos.
- `Equipo circuitos` y `Matriz circuitos` fueron construidas antes de abrir M05. Hay referencias de origen y parejas interpretadas que ya no coinciden: por ejemplo `Equipo circuitos!H14` conserva el texto `Asignaciones!F11`, que ahora es M05 Perecederos y no Recepción Mayorista. Revisar H/O/P y titular/suplente de C04–C11 antes de usar esas hojas como fuente para convocatorias.
- `Formacion circuitos` y `Aceptacion circuitos` copian interpretaciones anteriores por circuito. Corregir nombres **después** de acordar si la diferencia entre M04 y M05 es intencional; no sobrescribir historia para ocultar el cambio.
- Los estados de `Decisiones` y `Gates` no se actualizan por una fecha del Gantt. La producción requiere decisión por población, permisos, datos, UAT y soporte comprobados.
- Tras cerrar la reunión, guardar versión/fecha/autor del libro y enlazar el acta. Publicar una lista corta de pendientes: **ID, dato faltante, persona que responde, autoridad que aprueba, fecha y efecto sobre el plan**.
