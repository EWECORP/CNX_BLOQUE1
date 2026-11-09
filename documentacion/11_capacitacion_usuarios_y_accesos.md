# Capacitación, inventario de usuarios y permisos · Bloque 1

**Preparado:** 07/11/2026. **Estado:** agenda y formularios propuestos; requieren confirmación de participantes, sedes, facilitadores y administrador de Connexa. El [Gantt](09_gantt_integrado_tentativo_bloque1.md) y la [matriz de circuitos](07_matriz_sector_circuito.md) contienen la secuencia y los referentes de C01–C15.

## Agenda de capacitación para llegar a más personas

Cada sesión común se dicta **dos veces con el mismo contenido**. Cada persona elige una; Zeetrex entrega material y grabación si DIARCO autoriza grabar. Para medir preparación se requiere además práctica individual en el circuito. Los talleres sectoriales se reservan después de que el área entregue datos reales y esperado.

| Sesión | Convocados | Primera opción | Repetición | Resultado |
| --- | --- | --- | --- | --- |
| Inicio del despliegue | Todos los dueños, referentes, suplentes, IT y mesa | Mar 10/11, horario de reunión a confirmar | Preguntas/recuperación jue 12/11 | Acta y responsables; grabación/material para ausentes por feriado regional |
| Base común Connexa, TEST, evidencias y soporte | Todos los usuarios piloto y autorizadores | Jue 12/11 10:00–11:30 | Vie 13/11 15:00–16:30 | Acceso TEST comprobado o ticket; primera ficha de datos solicitada |
| Compras, listas y OC | C03, C04–C08, aprobadores, IT/SGM | Lun 16/11 10:00–11:30 | Jue 19/11 15:00–16:30 | Flujo mostrado y set por proveedor con fecha de devolución |
| Recepción, inventarios, stock e integración | C09–C12, C15, mesa e IT | Mar 24/11 10:00–11:30 | Jue 26/11 15:00–16:30 | Documentos/casos del circuito y responsables de conciliación |
| Diseño de surtido por categoría y planificación | C02, C13 y compradores afectados | Mar 01/12 10:00–11:30 | Jue 03/12 15:00–16:30 | Ejemplo Menaje, reglas y publicación a validar; la sesión no fija UAT C02 |
| Distribución/Valkimia | C14, C13, IT/SGM y tercero | A coordinar tras contrato y TEST | A coordinar | Probar puente SGM–Valkimia y retorno antes de programar UAT |

**Prácticas sectoriales:** C07 según la [guía diaria](08_reunion_y_cronograma_piloto_no_comestibles.md); los demás circuitos siguen sus ventanas del Gantt. CMZ distribuye el calendario, ZF facilita y el referente demuestra. Un comprador que participe en M04 y M05 hace una práctica integral con dos verificaciones, sin contar doble asistencia por la misma sesión.

**Preparación antes de enseñar C03/C07:** verificar con un usuario comprador y otro aprobador el acceso a sus menús/bandejas, carga o importación de una lista real, consulta de la versión vigente mientras la nueva está pendiente, condición habitual recuperada en OC y autorización de una excepción. Si los datos de TEST no corresponden a maestros/listas vigentes, registrar bloqueo y nivelarlos antes del taller. La demostración debe distinguir funcionamiento confirmado de observaciones abiertas.

## Registro de asistencia y aptitud

Por persona y circuito completar `FC-Cxx-T/S` en **Formacion circuitos**: sesión elegida, material/versión, asistencia, fecha de práctica, ejecutor/evaluador, caso normal, excepción, resultado, evidencia, brecha y fecha de reprueba. El suplente rinde su práctica. La mesa L1 aprende a identificar un incidente y derivarlo; no necesita permisos de comprador para esa tarea.

## Inventario que DIARCO debe entregar para **todos** los usuarios

Una fila por **persona × circuito × ambiente**. Los campos de TEST y Producción se aprueban por separado. No compartir usuarios genéricos ni contraseñas en el acta.

| Campo | Ejemplo de contenido esperado |
| --- | --- |
| Identidad | Nombre y apellido, legajo/identificador corporativo, correo, área, jefatura, estado activo |
| Circuito y alcance | C07 No Comestibles; proveedores, categorías, sucursales o CD que puede ver/operar |
| Función | Consultar, cargar, importar lista, generar propuesta, editar, crear OC, aprobar, rechazar, recibir, contar, ajustar, auditar o administrar, según corresponda |
| Rol Connexa solicitado | Nombre exacto del rol configurado o rol nuevo a crear; versión de matriz de permisos |
| Autorización | Tipo de documento, paso, límite monetario/cuantitativo si existe, orden de aprobación, suplencia y condición de delegación |
| Segregación | Indicar si quien crea puede aprobar su propia operación; regla acordada y excepciones autorizadas |
| TEST | Fecha requerida, estado solicitado/aprobado/configurado/probado, administrador y evidencia de login + acción permitida/denegada |
| Producción | Fecha solicitada, aprobador de acceso, gate habilitante, estado de configuración y evidencia; activar sólo la población autorizada |
| Ciclo de vida | Alta, cambio, baja, reemplazo, caducidad de acceso temporal y dueño que revisa permisos |

### Plantilla nominal para completar en la reunión y validar por área

Copiar una fila por persona, circuito y ambiente. Si alguien actúa en TEST y Producción, tendrá dos filas, con aprobaciones y comprobaciones independientes. El dueño de cada circuito entrega la nómina completa, incluso usuarios de consulta, autorizadores, suplentes y soporte.

| Circuito | Usuario / legajo / correo | Área y jefatura | Rol y acciones | Alcance: proveedor, categoría, sucursal/CD | Documento, paso y límite que autoriza | Suplente / regla de segregación | Ambiente | Aprueba negocio / fecha | IT valida / fecha | Configura / fecha | Prueba permitida y denegada / evidencia | Estado y próxima acción |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C07 | [Nombre; legajo; correo] | [Área; jefatura] | [Comprador; crear OC] | [3 proveedores; categoría; sitios] | [No autoriza] | [Nombre; no autoaprobar] | TEST | [Nombre; fecha] | [Nombre; fecha] | [Nombre; fecha] | [Enlaces a ambas pruebas] | [Solicitado / aprobado / configurado / probado; dueño y fecha] |
| C07 | [Nombre; legajo; correo] | [Área; jefatura] | [Aprobador; aprobar/rechazar] | [Categoría; sitios] | [OC; paso; monto máximo] | [Suplente; regla] | Producción | [Nombre; fecha] | [Nombre; fecha] | [Nombre; fecha] | [Enlaces a ambas pruebas] | [Pendiente de gate; dueño y fecha] |

Los ejemplos muestran la forma de completar, no personas ni permisos aprobados. Registrar los valores definitivos en el repositorio operativo acordado y enlazar la versión aprobada desde el circuito correspondiente del libro.

### Matriz mínima de permisos por circuito

| Función propuesta | Quién la solicita/define | Prueba positiva y negativa |
| --- | --- | --- |
| Referente/comprador | Dueño de Compras por sector | Puede preparar/editar su población; no modifica otra categoría ni se autoautoriza si la política lo impide |
| Aprobador de OC | Dueño de Compras y jefatura | Aprueba/rechaza dentro de facultad; usuario sin facultad queda bloqueado; comentario de rechazo se conserva |
| Listas y acuerdos | Dueño de condiciones comerciales | Importa/corrige borrador y gestiona vigencias autorizadas; comprador ajeno no pisa reglas |
| Recepción/inventarios | Dueño de Operación/Stock | Registra y consulta su sitio; ajuste definitivo exige autorizador correspondiente |
| Mesa de ayuda L1 | Líder de soporte DIARCO | Consulta estados/evidencia necesaria para asistir; no ejecuta cambios comerciales |
| IT/administrador | IT DIARCO con Zeetrex según contrato | Configura cuentas/roles, registra cambios y no sustituye la aprobación de negocio |

**Flujo de alta:** dueño de proceso entrega matriz nominal → jefatura autoriza tiempo y necesidad → IT valida identidad/segregación → administrador configura TEST → usuario prueba acceso y una acción permitida/denegada → se registra evidencia → tras aceptación/gate del circuito se repite la autorización y prueba en Producción. Un permiso en TEST no se copia automáticamente a Producción. Registrar quién dio el alta y cuándo, sin credenciales en planillas.

**Bloqueantes antes de operar:** usuario sin nombre real, aprobador sin facultad confirmada, rol con acceso más amplio que el alcance aceptado, falta de suplente de una aprobación crítica o ausencia de prueba de segregación. El dueño decide la regla; IT ejecuta el cambio técnico; Zeetrex asiste y verifica su comportamiento.
