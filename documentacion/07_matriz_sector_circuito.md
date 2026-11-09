# Matriz de sectores, circuitos y habilitación

Actualizada el 05/11/2026. Libro operativo: [DIARCO_Bloque1_Plan_v0.5.xlsx](../outputs/20261105/DIARCO_Bloque1_Plan_v0.5.xlsx).

La matriz deriva del libro v0.4 con las asignaciones editadas por el usuario. La barra `/` se interpreta como titular / suplente y los paréntesis como área o sector, según la aclaración del usuario. Los casos son propuestas para acordar con los referentes; no acreditan ejecución, capacitación completada ni aceptación. No se asignan fechas de producción nuevas ni se presume cumplido el hito anterior del 04/11.

## Actualización de Asignaciones M05 · 09/11/2026

El usuario abrió **una fila M05 por frente** en `Asignaciones` del [libro v0.5](../outputs/20261105/DIARCO_Bloque1_Plan_v0.5.xlsx). Para la reunión del 10/11, esa hoja es la referencia más reciente **para M05**. La matriz de circuitos que sigue conserva la foto del 05/11 y debe conciliarse con estas filas antes de asignar la misma persona a M04, M05 y soporte del circuito.

| Frente M05 | Titular en Asignaciones | Suplente en Asignaciones | Compromiso L | Aprobaciones pendientes |
|---|---|---|---|---|
| Food / OC madre | Sebastián Basconcelos | Marcelo Cingolani | Sin confirmar | Jefatura, agenda y aceptación del dueño |
| Perecederos | Roxana Frutos | Darwin Leon | Sin confirmar | Jefatura, agenda y aceptación del dueño |
| Carnes | Facundo Toledo | Cristian Escudero | Sin confirmar | Jefatura, agenda y aceptación del dueño |
| No Comestibles | Liliana D'Amico | Carolina Tavernisse | Confirmado | Jefatura, agenda y aceptación del dueño |
| Perfumería y Limpieza | Camila Klipauka | Romina Garfi | Sin confirmar | Jefatura, agenda y aceptación del dueño |
| Barrio | Paloma Romero | «Rodrigo xxxx», identidad por completar | Sin confirmar | Identidad del suplente, jefatura, agenda y aceptación del dueño |

Las seis filas proponen **6 h/semana de titular y 4 h/semana de suplente**. En todas siguen vacíos `H` (jefatura), `K` (ventanas de agenda), `M–N` (aceptación de jefatura/fecha) y `P` (dueño nominal); `Q` sigue «Sin confirmar». Aunque `L13` dice «Confirmado», **M05 No Comestibles todavía no reúne el compromiso nominal completo**. No multiplicar las horas de una persona que aparezca también en M04 u otro frente.

Las diferencias de titular/suplente frente a `Matriz circuitos` afectan especialmente **C04, C06 y C08**. También M04 continúa agrupado y no replica las seis filas M05. Registrar qué rol corresponde a compra/forecast, cuál a OC/autorización y quién acepta el circuito integral antes de modificar otras hojas o presentar las parejas como definitivas.

## Circuitos iniciales

| ID | Circuito / sector | Titular | Suplente |
|---|---|---|---|
| C01 | Datos Maestros | Antoni Serrano | Pendiente de informar |
| C02 | Surtido transversal | Liliana D'Amico | Carolina Tavernisse |
| C03 | Listas y acuerdos transversal | Sebastián Basconcelos | José Luis Russman |
| C04 | Compra de Perfumería y Limpieza | Romina Garfi | Camila Klipauka |
| C05 | Compra de Carnes | Facundo Toledo | Cristian Escudero |
| C06 | Compra de Perecederos | Roxana Furtos | Diego Baldi |
| C07 | Compra de No Comestibles | Liliana D'Amico | Carolina Tavernisse |
| C08 | Compra del formato Barrio | Cecilia Camus | Paloma Romero |
| C09 | OC madre Mayorista | Por precisar | Marcelo Cingolani, registrado en G10 |
| C10 | Recepción Mayorista | Fernando Ureña | Rodolfo Herlein |
| C11 | Recepción Barrio | Pablo Pichinini | Cecilia Camus |
| C12 | Inventarios y ajustes | Javier Dafonte | Fabio Basoler; G12 también registra Diego Llañez |
| C13 | PDD / planificación comercial | Liliana D'Amico | Carolina Tavernisse |
| C14 | Distribución / Valkimia | Christian Rojas | Gaston Galiano |
| C15 | Stock e integración SGM | Hernan López | Christian Rechtman |

Se conserva la grafía del Excel. C04–C08 provienen de las parejas repetidas en M04/F9 y M05/F10. Las dependencias M01/M02/M03/M10 y Recepción se verifican dentro del alcance real seleccionado. Barrio es un formato: debe cruzarse con las categorías aplicables, sin presumir que un caso de Barrio cubra todas ellas.

## Vinculación dentro del libro

`Asignaciones → Equipo circuitos → Matriz circuitos → Formacion circuitos → Casos circuitos → Ejecuciones circuitos → Aceptacion circuitos → Gates`

- **Matriz circuitos:** vista inicial con personas, módulos, particularidades, perfil de volumen, población piloto, dependencias y enlaces a las hojas relacionadas.
- **Equipo circuitos:** interpretación de las parejas, textos originales F/G, celda fuente, horas cargadas y aclaraciones. Asignaciones conserva la fuente nominal.
- **Formacion circuitos:** 30 registros individuales, titular y suplente de cada circuito. Enlaza la formación común por módulo y agrega taller/práctica del sector. Completar material, agenda, evaluador, aptitud, brechas y evidencia.
- **Casos circuitos:** 75 casos propuestos vinculados a plantillas UAT existentes y WBS. Incluyen controles funcionales, excepciones, permisos y soporte. Cada sector de compras agrega caso integral, diferencia de valorización, reintento sin duplicación y prueba de volumen/complejidad.
- **Ejecuciones circuitos:** 75 filas iniciales sin ejecutar. Es el registro de resultados de los nuevos casos `CC-*`; agregar una fila con ID propio para cada ciclo o reprueba. Registrar esperado aprobado, población/corte, versión, operador, observado, métricas, defecto y evidencia.
- **Aceptacion circuitos:** 15 registros pendientes con referencias a formación y casos. El dueño acepta alcance, población y versión concretos. La autorización productiva y expansión se documentan en Gates.
- **Guia matriz:** secuencia de uso y reglas para mantener las referencias.

Los IDs genéricos UAT y la WBS se conservan. Los casos `CC-*` concretan esos diseños por sector; sus resultados se registran en Ejecuciones circuitos para evitar una segunda carga del mismo avance en UAT. Los registros anteriores siguen vigentes como historia.

## Complejidad y capacitación

Los referentes deben acordar qué particularidades aplican: pesables y conversiones, vida útil, campañas, descuentos, surtido, unidades, frecuencia, OC madre, recepciones parciales y otras excepciones. Son puntos de relevamiento; no reglas nuevas impuestas al sector.

Para cada circuito se completa volumen habitual y pico: proveedores, artículos, líneas por OC, documentos, sucursales, frecuencia, concurrencia y tiempos esperados. Los umbrales y tolerancias se aprueban antes de ejecutar. Una prueba pequeña demuestra comprensión; el volumen representativo demuestra capacidad operativa. No extrapolar resultados entre sectores.

La formación combina base común, taller del sector con datos reales y evaluación individual de titular y suplente. La aptitud requiere operar el caso normal y una excepción, explicar resultados y registrar/escalar un incidente. El responsable de aceptación funcional debe designarse expresamente; ser referente no lo convierte automáticamente en aprobador.

## Aclaraciones conservadas

1. **Perecederos:** la fuente agrega `(Darwin Leon)`; precisar función sin reemplazar la pareja Roxana Furtos / Diego Baldi.
2. **OC madre:** Marcelo Cingolani figura como suplente específico en G10. Precisar titular y coordinación con compradores y Recepción Mayorista.
3. **Recepción:** G11 registra `Leandro xxx`; completar identidad, rol y cobertura sin eliminar las parejas por formato.
4. **Inventarios:** F12 indica Javier Dafonte / Fabio Basoler y G12 agrega Diego Llañez. Acordar cobertura y orden de respaldo conservando ambos.
5. **Datos Maestros:** falta suplente explícito de Antoni Serrano.
6. **Horas:** el libro tiene 6 h titular y 4 h suplente por semana en cada módulo. No multiplicarlas por persona, circuito o caso; consolidar agenda de personas repetidas y confirmar la unidad de reserva con jefaturas.
7. **Aceptación y disponibilidad:** respetar los valores cargados; los campos de compromiso, jefatura y aceptación pendientes necesitan completarse con evidencia.
8. **Valkimia:** el circuito se prepara, pero requiere contrato/interfaz y prueba integral antes de habilitarse.

## Próxima sesión de trabajo

**Primer sector piloto: C07, No Comestibles, con Liliana D'Amico como titular y Carolina Tavernisse como suplente.** El usuario lo identificó el 05/11/2026 como el sector más comprometido y colaborativo. La prioridad se registra en Matriz circuitos y en la hoja inicial Piloto No Comestibles, con ocho pasos enlazados.

La próxima sesión debe definir proveedores, artículos, sucursales, perfil de carga, particularidades y dueño que acepta, y acordar disponibilidad. Luego preparar datos/esperados, realizar práctica individual y ejecutar los seis casos CC-C07-01 a CC-C07-06. Los otros sectores mantienen su secuencia por acordar. La selección no acredita capacitación, pruebas ni habilitación productiva.

Para convocar y conducir esa sesión, usar el [pedido de información, fichas por proveedor y cronograma tentativo C07](08_reunion_y_cronograma_piloto_no_comestibles.md). La selección de proveedores debe identificar códigos y documentos reales, condiciones simples/complejas y una excepción aplicable; el ejemplo de perfiles de esa guía no reemplaza las decisiones de DIARCO.

La secuencia entre los quince circuitos, las ventanas de formación/UAT y los recursos compartidos están en el [Gantt integrado tentativo](09_gantt_integrado_tentativo_bloque1.md). El calendario deja sin sesiones conjuntas el 09–11/11 y usa gates por circuito, no una fecha única de corte.

La fuente v0.4 conserva las 14 hojas originales. La v0.5 agrega ocho hojas (incluida Piloto No Comestibles) y es la continuación operativa para esta matriz. Reconstrucción: ejecutar `.build/build_matrix_v05.py` y después `.build/select_pilot_c07.py`. Reportes en `outputs/20261105/validacion_matriz_v05.json` y `validacion_piloto_c07.json`.
