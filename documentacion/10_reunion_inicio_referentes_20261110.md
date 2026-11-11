# Reunión de inicio con referentes · Bloque 1

**Actualización posterior, 10/11:** la [minuta de confirmación](https://drive.google.com/file/d/1wL4BTWbnnzcz03bo_aF6JV7SFlqf_dw_/view) designa a Eduardo Mañe como líder DIARCO. El encuentro con titulares y suplentes está convocado para **11/11 a las 14:00** y la primera capacitación comienza **12/11 a las 10:00**. Para conducir la siguiente reunión y entregar tareas usar el [kit operativo](kit_referentes_20261111/00_hoja_instructiva.md) y la [planilla por frente](../outputs/20261110/DIARCO_Kit_Referentes_Trabajo_por_Frente_20261111.xlsx). La agenda inferior queda como antecedente de preparación del 10/11.

**Fecha prevista:** martes 10/11/2026. **Duración:** 75 minutos. **Objetivo:** iniciar formalmente el proceso de despliegue y asignar trabajo verificable a DIARCO y Zeetrex. El 10/11 es feriado en CABA y Córdoba según el [Decreto 1103/2026](https://www.argentina.gob.ar/normativa/nacional/norma-430580/texto); confirmar quién participará en vivo y ofrecer grabación/material y una segunda instancia de preguntas. El lunes 09/11 es feriado nacional y el 11/11 afecta a provincia de Buenos Aires.

## Agenda para conducir la charla

| Minutos | Tema | Decisión o salida |
| --- | --- | --- |
| 0–10 | Propósito, alcance B1 y convivencia con SGM | Entender que cada circuito avanza con población, versión y gate propios |
| 10–20 | Roles: dueño, referente, suplente, usuario piloto, IT, mesa y Zeetrex | Cada área identifica quién decide, quién ejecuta y quién cubre ausencias |
| 20–35 | Secuencia de trabajo: inducción, datos, acceso TEST, práctica, UAT, corrección, paralelo, aceptación | Acordar que la evidencia se registra por ejecución y que los desvíos se notifican el mismo día |
| 35–47 | Set de tres proveedores para frentes de compra y datos equivalentes para otros frentes | Cada referente recibe la [guía de selección](12_lote_pruebas_y_evidencia_referentes.md) y una fecha de devolución |
| 47–57 | Usuarios, roles, autorizadores y permisos TEST/Producción | Aprobar el [formulario de relevamiento](11_capacitacion_usuarios_y_accesos.md) y nombrar dueño de cada matriz |
| 57–67 | Calendario de capacitación y apoyo Zeetrex | Elegir una de dos sesiones comunes y reservar taller/práctica por circuito |
| 67–75 | Compromisos y siguiente hito | Leer responsables, entregables y fechas del acta; confirmar canal de incidencias |

## Secuencia operativa que se comunica

1. **Inducción corta por frente.** Zeetrex demuestra el flujo y entrega el pedido de datos. DIARCO confirma titular, suplente, dueño que acepta, población y tiempo disponible.
2. **Lote de datos.** En compras: tres proveedores con código SGM, listas, SKU, sucursales, condiciones y OC de referencia. En recepción/inventarios/distribución se eligen documentos, sitios y excepciones representativas equivalentes.
3. **Usuarios y accesos.** El dueño DIARCO aprueba roles, alcance y autorizadores; IT verifica identidad y segregación. Zeetrex/administrador configura en TEST y conserva evidencia de acceso. Producción se prepara por separado.
4. **Taller y práctica.** Cada titular y suplente ejecuta un caso normal y una excepción con apoyo Zeetrex. La asistencia sola no acredita aptitud.
   Antes del taller de compras, Zeetrex y DIARCO comprueban que TEST tiene maestro y listas coherentes, que la lista vigente se consulta aunque exista una nueva pendiente, y que el comprador y aprobador ven sus funciones. Las observaciones D-01–D-08 de la [minuta del 06/11](06_minutas_y_preparacion_paralelo.md) se revisan con dueño y ticket.
5. **UAT.** Usuario DIARCO opera, compara con esperado aprobado y registra resultado, versión, datos/corte y evidencia. Defecto o diferencia se registra de inmediato con impacto y responsable; Zeetrex corrige y DIARCO reprueba con una nueva ejecución.
6. **Paralelo y convivencia.** Comienza después de la aceptación del piloto en TEST para la población definida. Observar dos ciclos completos, incluido uno con excepción, según frecuencia real. DIARCO/SGM sigue siendo la referencia vigente para stock y pendientes. El circuito tiene un solo emisor de OC al proveedor y se concilia de extremo a extremo.
7. **Decisión por circuito.** El dueño funcional acepta el alcance probado. Sponsor, IT y líderes autorizan luego cada habilitación o expansión en Producción. L1 DIARCO y L2 Zeetrex quedan identificados.

## Mensaje de producción

**Objetivo propuesto:** tener la plataforma y los módulos acordados técnicamente disponibles en Producción **alrededor del 17/11**, una semana después de la reunión. Esa fecha no habilita usuarios por sí sola. El piloto puede entrar a un **paralelo productivo controlado** después de G1, con permisos aprobados, datos conciliados, capacitación, integración certificada, soporte y autorización limitada a su población. Tras dos ciclos y aceptación G2, sponsor e IT deciden G3 para ampliar proveedores, usuarios o sitios según el [método](02_metodo_gobierno_y_soporte.md). El [Gantt integrado](09_gantt_integrado_tentativo_bloque1.md) sigue siendo escenario a rebaselinar con el estado real del 10/11.

Durante la convivencia, el diseño rector mantiene stock y pendientes oficiales en SGM. Connexa origina y autoriza las OC de los circuitos habilitados; SGM las incorpora para recepción y comunicación al proveedor **una vez certificado el contrato y el emisor único**. No habilitar doble escritura ni doble envío. Para cada dominio se documentan escritor, lector, fecha de traspaso, conciliación, monitoreo y contingencia.

## Acta mínima de la reunión

| Campo | Completar en vivo |
| --- | --- |
| Circuito, población y responsable que acepta | [ ] |
| Referente titular y suplente, jefatura y horas protegidas | [ ] |
| Dueño del inventario de usuarios/roles/autorizadores | [ ] |
| Fecha de entrega del lote de datos y esperado por caso | [ ] |
| Sesión común elegida y taller de práctica reservado | [ ] |
| Dueño del acceso TEST y fecha de comprobación | [ ] |
| Canal de defectos, responsable de triage y tiempo de primera respuesta | [ ] |
| Estado de listas vigentes, permisos de aprobación y observaciones D-01–D-08 del piloto | [ ] |
| Dueño y fecha del ejemplo Menaje para validar C02, sin fecha de UAT todavía | [ ] |
| Responsable de VPN, contrato, TEST y prueba técnica SGM–Valkimia para C14 | [ ] |
| Próxima revisión de UAT y gate | [ ] |

La minuta debe registrar ausentes, material enviado, responsables de seguimiento y asuntos no decididos. No inferir aprobación por asistencia o silencio.
