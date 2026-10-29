# Propuesta de implementación del Bloque 1 · DIARCO

Versión 0.2. Estado: propuesta a revisar. Fecha de preparación: 29/10/2026. Presentación prevista: lunes 02/11/2026. Propietario propuesto: líder de implementación Zeetrex.

## Decisión central

Solicitar a Dirección DIARCO que constituya el equipo interno del Bloque 1 y autorice su dedicación. Cada proceso necesita un dueño que decida y acepte, un referente titular que pruebe y forme, y un suplente capaz de sostener la operación. Mesa de ayuda e IT deben participar desde el inicio.

La disponibilidad del software permite empezar la implementación. La preparación de DIARCO se demuestra cuando sus personas ejecutan los casos de negocio, resuelven excepciones y sostienen el circuito con soporte definido. El avance se informará con ambas dimensiones separadas.

## Mensaje sugerido de apertura

> La semana próxima proponemos iniciar una implementación conjunta por procesos. Zeetrex aportará la solución, la formación y el soporte especializado. Necesitamos que DIARCO asigne a las personas que validarán cada módulo y después guiarán a sus compañeros. Hoy buscamos acordar quién decide, quién ejecuta, cuánto tiempo tiene y qué evidencia permitirá avanzar. Con ese equipo confirmado podremos fijar un calendario realista y controlar cada puesta en marcha.

## Resultado esperado

Al finalizar el Bloque 1, para cada capacidad incluida deberá existir:

- Un circuito operativo acordado, con los controles y excepciones de DIARCO.
- Datos y configuración certificados para el alcance habilitado.
- Un dueño DIARCO que acepte el resultado y asuma el proceso.
- Un referente y un suplente que operen sin ayuda paso a paso, enseñen y atiendan consultas funcionales.
- Usuarios habilitados que demuestren las tareas críticas de su rol.
- Mesa de ayuda e IT con canal, cobertura, monitoreo y escalamiento practicados.
- Evidencia de UAT, piloto y conciliación, más un acta para cada expansión.

## Alcance que debe cerrarse

El usuario confirmó como fuente rectora `Plan de Despliegue - Estrategia.md`, con convivencia gradual, y adelantó el objetivo de disponibilidad de módulos productivos y arranque de smoke tests/paralelo al **04/11/2026**. Se busca aceptación progresiva desde esa fecha, después de algunos días/ciclos de comparación según cada módulo. La información del sistema vigente DIARCO/SGM sigue siendo válida. SGM conserva stock, pendientes y el circuito de envío al proveedor durante esta etapa.

Las fechas 07/11 de disponibilidad y 09/11 de pruebas quedan como antecedentes sustituidos por la instrucción más reciente para el arranque. El rango de cinco a seis semanas de despliegue de recepciones sigue siendo preliminar, sujeto a capacidad y al plan operativo. La aceptación de un módulo no cambia por sí misma la autoridad del dato ni habilita el apagado de SGM.

El otro `PLAN DE DESPLIEGUE.md` contiene un corte total al 07/11 incompatible con esta opción. Por decisión expresa del usuario no rige ese corte. Se conserva como antecedente sin modificarlo.

| Frente B1 según Estrategia | Alcance de trabajo | Detalle que debe cerrarse |
|---|---|---|
| M01 Catálogo y maestros | Artículos, EAN, proveedores/sitios y sincronización según maestría | Confirmar entidades, operaciones y sentido por etapa |
| M02 Surtido, clusters y segmentos | Elegibilidad y reglas por artículo/sucursal | Confirmar consumidores y excepciones |
| M03 Listas y acuerdos de compra | Vigencias, descuentos y condiciones proveedor/sitio/artículo | Separar condiciones de compra de precios de venta |
| M04 Forecast y compra inteligente/directa | Propuesta explicable y revisión comercial | Confirmar modos de compra y políticas de aprobación |
| M05 OC e integración SGM | Generación, autorización, valorización y conciliación | Confirmar contrato, emisor al proveedor y contingencia |
| M06 Recepción | PDA/WEB, diferencias, pendientes e impacto en SGM | Definir latencia y despliegue de sucursales |
| M07 Inventarios | Conteo, recuento, autorización y ajuste definitivo en SGM | Definir población, corte y auditoría |
| M08 PDD | Necesidades, prioridades y backlog según contrato vigente | Certificar parámetros y contrato de consumo |
| M09 Transferencias/distribución | Planificación Connexa e intercambio con Valkimia/SGM | Validar interfaz mínima o Excel con proveedor y CD |
| M10 Stock y observabilidad | Conciliación, monitoreo y atención de fallas | Stock oficial SGM y controles por interfaz |

Los diez frentes organizan el trabajo de B1 de la Estrategia seleccionada. No equivalen a diez módulos ya aceptados o listos. Se decide por oleada qué capacidades y población se habilitan. Los GAPS de octubre se concilian contra esa baseline sin incorporarlos automáticamente.

Cada GAP debe tener capacidad, problema observable, clasificación B1/B2/B3/pendiente, razón, dueño de decisión, impacto y criterio de aceptación. Un pedido puede ser valioso y quedar diferido. Un defecto que impide un caso comprometido debe bloquear ese caso hasta resolverlo o cambiar explícitamente el alcance.

**Decisiones especialmente abiertas:** aprobación automática de compras, comportamiento de OC madre al cambiar la lista, saldo de madres/hijas, retorno de redespachos Valkimia, funcionalidades de transporte, precio de venta y costos avanzados. Las minutas posteriores documentan la validación de OC madre/PDA en B1 y el precio de venta en SGM durante B1. El resto de los pedidos no ingresa automáticamente por aparecer en una demo.

## Equipo y capacidad

Personas y cargos confirmados por el usuario. Las funciones del proyecto en la última columna son propuestas para acordar el lunes:

| Persona | Cargo informado | Función propuesta |
|---|---|---|
| Pablo Bertolissio | Gerente General DIARCO | Sponsor operativo DIARCO (SP), asignación interna y gates |
| Roberto Goldfarb | Owner DIARCO | Patrocinio institucional y escalación estratégica |
| Daniel Padin | CEO Zeetrex | Sponsor ejecutivo Zeetrex y compromiso de recursos |
| Luciano Calcagno | POO Zeetrex | Líder de implementación Zeetrex (LZ) |
| Eduardo Ettlin | CTO Zeetrex | Autoridad técnica y coordinación L2 (ZT) |

Faltan los nombres del líder operativo DIARCO, dueños, referentes y suplentes de módulos, IT y mesa de ayuda. La minuta menciona interlocutores históricos, pero no demuestra que aceptaron responsabilidades. No se convierten en asignaciones por inferencia.

| Rol | Resultado del compromiso | Dedicación semanal inicial propuesta |
|---|---|---:|
| Sponsor DIARCO | Prioridad, recursos, desbloqueos y decisión de gates | 1–2 h |
| Líder implementación DIARCO | Plan interno, coordinación entre áreas y evidencias | 12–20 h |
| Dueño de proceso, por módulo activo | Definiciones y aceptación funcional | 2–4 h |
| Referente titular, por módulo activo | Preparación, aprendizaje, pruebas y formación | 6–10 h |
| Suplente, por módulo activo | Práctica y continuidad | 3–5 h |
| Usuario piloto, por participante | Pruebas y evaluación de operación | 2–4 h |
| Líder mesa de ayuda DIARCO | Canal, clasificación, base de conocimiento y simulacro | 4–8 h |
| Líder IT DIARCO | Ambientes, accesos, interfaces y recuperación | 4–8 h |

Son rangos de reserva de agenda, no estimaciones calibradas ni SLA. Fuente: diseño de esta propuesta, confianza baja hasta revisar volúmenes. En ventanas de UAT, piloto y corte se planificarán bloques adicionales. Las horas de operación habitual, guardias, desplazamientos y reemplazos no están incluidas.

Una persona puede ocupar más de un rol si la capacidad lo permite y se mantienen las segregaciones. La jefatura debe liberar tiempo y definir qué tareas habituales se redistribuyen. Un nombre sin disponibilidad no habilita el módulo. Las horas se consolidarán por persona para evitar contar dos veces la misma capacidad.

Zeetrex también debe confirmar líder de implementación, consultor funcional y responsable técnico/L2. Rangos iniciales del libro: 12–20, 8–16 y 8–16 h por semana, respectivamente, a revisar contra los módulos concurrentes. No constituyen una oferta contractual.

## Secuencia de ejecución

| Etapa | Resultado | Condición para avanzar |
|---|---|---|
| G0 Inicio | Baseline, personas, horas, piloto y gobierno | Sponsor registra compromiso nominal |
| Preparación por módulo | Datos, permisos, reglas y casos esperados | Dueños validan condiciones de prueba |
| G1 Formación y UAT | Referentes competentes y casos críticos aprobados | Dueño del proceso acepta evidencia |
| G2 Piloto | Ciclos reales controlados, excepciones y conciliación | Cumplimiento de criterios y recomendación de expansión |
| G3 Oleadas | Habilitación progresiva por alcance autorizado | Sponsor autoriza cada oleada con IT y dueños |
| G4 Transferencia | DIARCO sostiene operación y L1 con L2 disponible | Aceptación operativa y estabilidad demostrada |
| Cierre | Resultados, pendientes y aprendizaje | Cada pendiente conserva dueño, fecha y destino |

Dependencia funcional inicial a validar: catálogo y surtido habilitan condiciones comerciales; listas y parámetros habilitan propuestas; propuestas y autorizaciones habilitan OC; las integraciones deben conciliar el circuito completo. Recepción, inventarios y PDD tendrán su propia secuencia si ingresan a B1. No se impone una secuencia artificial entre frentes que puedan probarse en paralelo.

El objetivo vigente es iniciar desde el 04/11 con los módulos que superen su smoke y las condiciones de paralelo. La duración de algunos días se cerrará por población/ciclos antes de probar; el 04/11 no implica aceptación automática ni despliegue completo de la red. El rango preliminar de cinco a seis semanas para recepciones se reestimará desde el inicio autorizado del despliegue.

## Primera semana propuesta

Todas las actividades están sujetas a disponibilidad. Los horarios se confirmarán en G0, zona ART.

| Día | Actividad | Lidera | Producto del día |
|---|---|---|---|
| Viernes 30/10, preparación | Conciliar GAPS y precompletar propuestas nominales | Zeetrex + líder DIARCO propuesto | Material para decidir el lunes |
| Lunes 02/11, primera hora | Reunión con Dirección y decisión G0 | Sponsor DIARCO | Alcance, nombres, horas y decisiones pendientes con fecha |
| Lunes 02/11, después de G0 | Reunión del equipo e inicio del plan | Líderes DIARCO/Zeetrex | Calendario de talleres y lista de acciones |
| Martes 03/11 | Datos/esperados, formación mínima, convivencia, accesos y soporte | Dueños + referentes + IT/mesa + Zeetrex | Módulos preparados, población de paralelo y comparación acordadas |
| Miércoles 04/11 | Disponibilidad productiva controlada, smoke y arranque de paralelo | IT/Zeetrex + referentes | Flujo mínimo probado y primera comparación, incluida OC valorizada |
| Jueves 05/11 | Continuar paralelo y UAT, resolver/reprobar diferencias | DIARCO + Zeetrex | Comparación documentada y práctica de excepciones |
| Viernes 06/11 | Revisar evidencia y aceptar módulos que cumplan criterios | Dueños + líderes | Actas progresivas o continuidad del paralelo con dueño y acción |

El objetivo del 04/11 exige concentrar preparación entre el 30/10 y el 03/11. Si un módulo no reúne las condiciones, registrar el bloqueo y dejarlo fuera de ese arranque sin representar una aceptación ficticia. Otros módulos preparados pueden avanzar.

### Paralelo y comparación de OC valorizada

El smoke confirma que el flujo mínimo funciona en la versión/ambiente productivo controlado: acceso y permiso, consulta de datos, recorrido de trabajo, cálculo y estado/acuse. No reemplaza los casos UAT ni la aceptación de negocio.

En cada OC de muestra se vinculan los números Connexa y DIARCO/SGM. Se compara proveedor, sucursal, fecha, lista/versión, unidad, cantidad, precio de lista, descuentos y su orden, neto, internos, IVA, redondeo por línea y total. Negocio e Impuestos aprueban el cálculo esperado y tolerancias antes de ejecutar. No alcanza con que los totales coincidan si hay diferencias compensadas entre líneas.

Cada diferencia conserva valor Connexa, valor DIARCO/SGM, esperado independiente, diferencia, motivo, impacto, dueño y reprueba. Mientras dura el paralelo, sigue valiendo DIARCO/SGM. Una diferencia no se corrige sobrescribiendo el dato oficial para forzar igualdad. Se evita doble creación con impacto operativo y doble envío al proveedor mediante identificación cruzada y un emisor único.

## Reunión con Dirección: 45 minutos

| Minutos | Tema | Resultado concreto |
|---:|---|---|
| 0–5 | Objetivo y cambio operativo | Acuerdo sobre el resultado buscado |
| 5–12 | Alcance B1 y diferidos | Baseline o lista cerrada de decisiones con vencimiento |
| 12–22 | Equipo nominal y tiempo protegido | Sponsor, líder, dueños, referentes, suplentes, IT y mesa |
| 22–30 | Piloto, gates y convivencia | Criterios de avance y autoridad de decisión |
| 30–37 | Formación y soporte | Responsables de L1/L2 y cobertura a acordar |
| 37–45 | Lectura de compromisos | Acta con nombres, horas, fechas y escalación |

## Pedidos explícitos a Dirección

1. Confirmar sponsor y líder DIARCO con facultad de coordinar áreas.
2. Nombrar dueño, referente titular y suplente por capacidad incluida.
3. Autorizar horas y redistribuir carga habitual con cada jefatura.
4. Incorporar a IT y mesa de ayuda desde la preparación.
5. Aprobar piloto y gates, y la resolución de bloqueos dentro del plazo acordado.
6. Comunicar internamente que la implementación forma parte del trabajo asignado.

La comunicación interna la emite el sponsor después de aprobar el acta. Este kit incluye un texto sugerido; no se envió ningún mensaje ni convocatoria.

## Cómo mostrar avance y beneficios

Reportar por módulo el estado técnico y la preparación operativa, con evidencia. Un módulo puede estar disponible para prueba y seguir pendiente de datos, personas o aceptación.

El tablero semanal mostrará módulos con equipo confirmado, casos críticos aprobados sobre casos críticos aplicables, usuarios competentes sobre usuarios objetivo, ciclos ejecutados en el circuito acordado sobre ciclos elegibles y diferencias pendientes de conciliación. Se fijarán población y línea base antes de medir. No se prometen mejoras cuantitativas de negocio sin medición previa.

## Respuestas a objeciones previsibles

**“No tenemos tiempo.”** Reducir módulos concurrentes, liberar capacidad o mover la fecha. Registrar cuál de esas decisiones toma Dirección. Mantener alcance y fecha con personas no disponibles deja el plan sin respaldo.

**“Ya estuvieron en la demo.”** Usar esa experiencia para acelerar la práctica. La habilitación requiere que cada rol ejecute los casos y excepciones, además de asistir.

**“Que Zeetrex lo implemente.”** Zeetrex configura y acompaña. DIARCO debe decidir sus reglas, aportar datos y aceptar resultados para sostener la operación interna.

**“Apaguemos SGM en una fecha fija.”** Proponer un corte por proceso después de certificar maestría, conciliación, soporte y contingencia. El calendario se vincula a esos gates.

## Interlocutores y controles identificados en las últimas minutas

- **Catálogo y maestros:** Guillermo Alvez (Auditoría); designar Administración de Datos Maestros.
- **Surtido, clusters y segmentos:** Liliana D'Amico (sugerida por antecedentes).
- **Listas y acuerdos comerciales de compra:** Sebastián Basconcelos (según minuta 13/10; confirmar designación).
- **Forecast y compra inteligente/directa:** Romina Garfi (sugerida por antecedentes).
- **Órdenes de compra e integración SGM:** Romina Garfi (sugerida por antecedentes).
- **Recepción en sucursal y convivencia SGM:** Fernando Ureña / Cecilia Camus / Javier Dafonte / Rodolfo Herlein (elegir titular).
- **Inventarios y ajustes:** Guillermo Alvez / Auditoría (confirmar titular operativo).
- **PDD y necesidades de distribución:** Christian Rojas / Compras (separar demanda comercial de ejecución logística).
- **Transferencias y distribución con Valkimia:** Christian Rojas / Gastón (Logística), enlace Comercial a designar.
- **Stock, conciliación y observabilidad:** IT + Control de Stock (designar personas).

Son interlocutores documentados, no designaciones aceptadas ni horas autorizadas. Para recepción/ajustes se incorporan cierre efectivo en SGM, remito y numeración; para inventario, foto inicial, movimientos pendientes, mapas/QR y validación PDA. La recuperación del software y la confiabilidad de los saldos se aceptan por separado. Confirmar el resultado de los compromisos 26–27/10 antes de declarar esos circuitos habilitados.

El documento Pendientes ubica la migración QX/reposición automática después de estabilización, hacia fin de B2. El B1 puede validar sugeridos/compras sin asumir ese cambio de autoridad. La conciliación OC–recepción–factura y los precios de venta quedan para el bloque posterior según las minutas recientes. Ver [detalle y fuentes](06_minutas_y_preparacion_paralelo.md).
