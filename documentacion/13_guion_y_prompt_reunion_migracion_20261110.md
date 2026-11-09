# Reunión preliminar de migración Connexa · 10/11/2026

**Audiencia:** referentes DIARCO y Zeetrex. **Duración sugerida:** 60–75 minutos. **Carácter:** alineación y pedido de compromiso; la asistencia no equivale a aceptación de una función, prueba o gate. **Material:** [presentación de migración v1.1](../outputs/20261109/DIARCO_Connexa_Migracion_Reunion_Referentes_20261110_v1.1.pptx), Excel v0.5 editado el 09/11 y [acta de referentes](10_reunion_inicio_referentes_20261110.md).

Para completar la planilla al terminar la presentación, seguir el [guion priorizado de carga, compromisos y delegación a Pablo Duplessy](14_guion_carga_planilla_y_compromisos_20261110.md).

## Resultado que debe producir la reunión

1. Que todos comprendan la **decisión estratégica de DIARCO de migrar de SGM a Connexa**, motivada por la obsolescencia técnica de SGM, con continuidad de la operación como condición.
2. Que distingan **Bloque 1**, convivencia y adopción por circuito, de **Bloque 2**, absorción de funciones complejas todavía pendientes. El contenido fino de B2 requiere baseline aprobada; no se promete una fecha global de apagado de SGM.
3. Que cada responsable revise su asignación, titular, suplente, tiempo protegido, jefatura que lo libera, agenda y facultad para aceptar. Registrar la respuesta **individual** en `Asignaciones`, no inferirla por presencia.
4. Que DIARCO y Zeetrex acuerden la secuencia: capacitación → lote y usuarios → TEST/UAT → aceptación G1 → paralelo productivo controlado → G2 → expansión G3 → transferencia G4.
5. Que se confirmen dueños y fechas para tres dependencias: listas/OC del piloto C07; hardware, Wi-Fi y PDA de recepciones; contrato, VPN, TEST y retorno de Valkimia para transferencias Base 2.
6. Que IT y Operaciones definan si rige desde **15/12** una restricción a cambios que puedan afectar la línea de cajas. Hasta entonces es una **propuesta de resguardo**, indicada por el usuario el 09/11, no una veda aprobada.

## Guion para conducir las 16 diapositivas

| Diapositiva | Mensaje oral sugerido | Pregunta o salida |
|---|---|---|
| 1. Portada | «Hoy iniciamos la organización de la migración. Connexa será el sistema hacia el que llevaremos progresivamente la operación». | Presentar propósito y duración. |
| 2. Mapa de transición | «Durante la convivencia SGM sigue sosteniendo procesos y datos oficiales; por circuito, pasaremos la operación y después la autoridad del dato». | Acordar el principio de un escritor por dominio. |
| 3. Por qué migramos | «SGM tiene obsolescencia técnica. Migrar es una decisión estratégica de DIARCO. Necesitamos participación real de quienes conocen y sostienen cada proceso». | Confirmar patrocinio y prioridad. |
| 4. Bloques | «Bloque 1 instala el núcleo operativo: maestros, surtido, listas, compra/OC, recepción, inventario, planificación, transferencias y conciliación. Bloque 2 completa precios de venta, costos/kardex, conciliaciones y otras capacidades complejas». | Validar frontera; anotar excepciones. |
| 5. Sentido del dato | «Mientras SGM gestione una lista, la copiamos a Connexa. Cuando Connexa asuma esa gestión, desactivamos la lectura anterior y publicamos hacia SGM. Stock y pendientes siguen oficiales en SGM hasta su propio traspaso». | Dueño y fecha de corte por dominio. |
| 6. Etapas y gates | «Cada frente avanza con datos, capacitación, pruebas y aceptación. Disponibilidad técnica, permiso de operar y expansión son hitos distintos». | Confirmar dueños de G1–G3. |
| 7. Qué hace cada equipo | «DIARCO aporta reglas, datos, pruebas y aceptación; IT habilita accesos e integración; Zeetrex capacita, acompaña y corrige. La mesa atiende L1». | Confirmar disponibilidad de cada rol. |
| 8. Piloto C07 | «No Comestibles elige tres proveedores distintos: uno habitual, otro con regla exigente y uno con excepción real. Comparamos cada OC valorizada contra SGM por línea». | Liliana/Carolina confirman lote y fecha. |
| 9. Pruebas y evidencia | «Un error se registra el mismo día. Zeetrex corrige; DIARCO reprueba con una nueva ejecución. G1 requiere casos críticos aceptados y los problemas D-01–D-08 tratados». | Acordar canal y dueño del triage. |
| 10. M05 por frente | «El Excel ya separa las OC por Food, Perecederos, Carnes, No Comestibles, Perfumería y Barrio. Los nombres son una propuesta a completar con jefatura, agenda y aceptación del dueño». | Revisar cada fila M05; registrar compromisos, no aprobación tácita. |
| 11. Gantt general | «En noviembre preparamos y aceptamos C07; luego observamos paralelo. Otros frentes avanzan por ventanas. C02 y C14 todavía necesitan definición antes de fechar UAT». | Acordar capacidad de dos células y una ventana IT/SGM. |
| 12. Primera semana | «La reunión general es el 10/11; la capacitación común tiene opciones 12/11 y 13/11; la reunión sectorial C07 se propone para el 12/11. Cada agenda queda sujeta a disponibilidad». | Elegir sesión y devolver datos/usuarios. |
| 13. Dependencias | «Recepción de cadena necesita AP, Wi-Fi y PDA sitio por sitio. Base 2 necesita probar el puente Valkimia. Una carga manual puede ayudar, pero también necesitamos recuperar estados y pendientes». | Nombrar responsables y fechas de prueba. |
| 14. Fin de año | «Queremos avanzar rápido sin tocar la continuidad de cajas en la temporada crítica. Propongo que IT y Operaciones validen una ventana de resguardo desde el 15/12». | Definir alcance de la restricción y autorizador de excepciones. |
| 15. Soporte y decisiones | «DIARCO tendrá referentes y mesa como primer nivel. Zeetrex asiste en segundo nivel. Las diferencias de negocio las decide el dueño del proceso». | Confirmar L1, IT y L2 por frente. |
| 16. Compromiso de cierre | «Hoy buscamos nombres, tiempo protegido, agenda y autoridad para aceptar. Sin esa asignación no podremos prometer fechas de adopción». | Leer compromisos y pendientes en el acta/Excel. |

## Lectura puntual del Excel antes de pedir aprobación

En `Asignaciones`, filas **10–15 de M05**, constan seis frentes y propuestas de titular/suplente. No Comestibles tiene `L13 = Confirmado`; en las seis filas siguen vacíos `H` (jefatura que libera tiempo), `K` (agenda), `M–N` (aceptación y fecha de jefatura) y `P` (dueño nominal); `Q` continúa «Sin confirmar». La fórmula de preparación permanece en «Falta compromiso nominal» mientras no se complete el conjunto. Ver [conciliación con Matriz circuitos](07_matriz_sector_circuito.md#actualización-de-asignaciones-m05--09112026). M04 conserva asignación agrupada: confirmar roles distintos antes de igualarlos con M05.

En la reunión, recorrer las seis filas y solicitar para cada una: **jefatura, tiempo protegido real, ventanas de agenda, aceptación expresa de titular/suplente, dueño nominal y persona que firmará la aceptación funcional**. Completar el Excel con la respuesta real después de recibirla; no llenar una casilla por anticipado.

## Pedido listo para una IA especializada en presentaciones

Copiar el bloque siguiente y adjuntar este archivo, el Excel v0.5 editado el 09/11, `Plan_Connexa_20261016.pdf`, `Plan de Despliegue - Estrategia.md`, `09_gantt_integrado_tentativo_bloque1.md` y `06_minutas_y_preparacion_paralelo.md`.

> Creá una presentación **PowerPoint editable en español**, de 16 diapositivas, formato 16:9, para una reunión preliminar el **martes 10/11/2026** con referentes DIARCO y Zeetrex. El objetivo es alinear y obtener compromiso individual para la migración progresiva de SGM a Connexa. Usá una estética profesional inspirada en `Plan_Connexa_20261016.pdf`: fondo claro, azul marino, turquesa y un acento ámbar, con diagramas de flujo, bloques y Gantt legibles. Aprovechá sus ideas de ciclo de vida, ecosistema y tabla ejecutiva. **No copies sus fechas de corte total 07/11, su afirmación de que B1 no es gradual ni su asignación de owners sin verificar**; la fuente rectora es `Plan de Despliegue - Estrategia.md` y la instrucción actual del patrocinador es convivencia gradual.
>
> Narrativa obligatoria: (1) SGM está técnicamente obsoleto y DIARCO decidió estratégicamente migrar; (2) continuidad operativa por encima de un corte apresurado; (3) mapa gráfico de tres estados: SGM actual → convivencia controlada → Connexa dueño progresivo por proceso/dato; (4) alcance B1 y B2 en dos columnas, con B2 como hoja de ruta sujeta a confirmación; (5) flechas de sincronización según dueño del dato, con ejemplo de listas SGM→Connexa y posterior Connexa→SGM, y stock/pendientes oficiales en SGM durante la etapa inicial; (6) etapas G0–G4 y entregables: responsables, capacitación, datos, TEST/UAT, evidencia/defectos, G1, paralelo productivo controlado, G2 y expansión G3; (7) piloto C07 No Comestibles con tres proveedores distintos y OC valorizada comparada por línea con SGM; (8) responsabilidades diferenciadas de referentes DIARCO, dueños, IT, mesa, Zeetrex funcional y L2; (9) tabla M05 con las seis filas más recientes del Excel y sus estados reales, sin llamar «aprobada» a ninguna fila que carezca de jefatura, agenda y aceptación de dueño; (10) Gantt **tentativo** noviembre–enero, con ventanas de preparación/UAT/paralelo y dependencias; (11) recepción requiere despliegue físico de AP, Wi-Fi y PDA por sitio; (12) transferencias de Base 2 dependen de validar el contrato SGM–Valkimia y retorno, aunque se estudie operación manual transitoria; (13) propuesta de restringir desde 15/12 cambios que afecten la línea de cajas, pendiente de ratificación de IT/Operaciones; (14) cierre con pedido explícito de nombres, horas protegidas, jefatura, agenda, facultad de aceptar, soporte y fecha de devolución.
>
> La presentación debe mostrar primero un **flujo gráfico general**, luego detallar las etapas y finalmente un Gantt de alto nivel. Dibujá diagramas, flechas y barras como formas editables. Usá poco texto por diapositiva; ampliá la explicación en notas del presentador. Incluí en las notas referencias a los archivos fuente y el guion oral de este documento. Señalá con claridad «propuesto», «pendiente» o «a confirmar» cuando corresponda. No inventes fechas de fin de B1/B2, métricas de avance, aprobaciones, disponibilidad productiva, estados de hardware ni solución Valkimia. El objetivo técnico de Producción alrededor del 17/11 es una hipótesis; un frente sólo opera tras su gate. La UAT de C02 surtido y C14 Valkimia no tiene fecha aprobada. Las pruebas posteriores al 15/12 pueden continuar en TEST; cualquier cambio que afecte cajas necesita la regla de resguardo que DIARCO confirme.
>
> Entregá la PPTX editable y una versión PDF para lectura. Antes de entregar, revisá visualmente las 16 diapositivas y comprobá que nombres y estados coincidan con el Excel editado el 09/11.

## Fuentes y límites

- [Estrategia rectora](Plan%20de%20Despliegue%20-%20Estrategia.md), convivencia y separación entre disponibilidad, uso y adopción.
- [Minutas actualizadas](06_minutas_y_preparacion_paralelo.md), C07, C02 y C14; son insumos para validar, no evidencia de cierre.
- [Gantt tentativo](09_gantt_integrado_tentativo_bloque1.md), ventanas sujetas a capacidad y gates.
- [Matriz sector/circuito](07_matriz_sector_circuito.md), foto anterior más conciliación M05 del 09/11.
- [PDF de octubre](https://drive.google.com/file/d/15phYIe_bxgcxKCC2tlU0dLbj8AQxeKlH/view), referencia visual y de contenidos B2; sus fechas/corte único fueron sustituidos por la Estrategia.

La copia local consultada está en `H:\Mi unidad\DIARCO\ROADMAP\IMPLEMENTACION\Plan_Connexa_20261016.pdf`.
