# Minutas recientes y preparación del paralelo desde el 04/11

Versión 0.3. Minutas revisadas el 29/10/2026 y nómina actualizada el 30/10/2026 desde el libro editado por el usuario. Fuente principal: IMPLEMENTACION, complementada por REUNIONES. La instrucción del usuario sobre convivencia gradual y arranque desde el 04/11 prevalece sobre las fechas anteriores.

## Qué se incorpora al plan

| Tema | Lectura de las fuentes | Consecuencia en el kit |
|---|---|---|
| Recuperación operativa | El 22/10 informaron pruebas parciales y compromisos para el 26/10. El informe 23/10 no certifica cumplimiento posterior. | WBS 2.15 y 2.17 exigen evidencia de cierre, accesos e interfaces. |
| Recepción, ajustes, devoluciones y decomisos | Debe comprobarse autorización y procesamiento final en SGM, incluidos remitos y numeración. | UAT-M06-3 y control de ida/retorno. No basta staging o registro en tabla. |
| Inventario | Disponibilidad de toma y confiabilidad del stock son problemas distintos. La aplicación posterior del resultado a SGM requiere control. | WBS 2.16, UAT-M07-3 y separación de aceptación técnica y de saldos. |
| Infraestructura | Wi-Fi en Mercado Central/Martínez, asignación PDA y secuencia de primeras tiendas no estaban confirmados. | WBS 2.12 y D12. Las cantidades históricas de equipos/sucursales no se usan como habilitación actual. |
| Compras/OC | Condiciones antes de aprobación y una sola autorización Connexa. SGM mantiene emisión al proveedor durante convivencia. | Comparación de OC, acuse funcional y prueba de no duplicación. |
| OC madre | Recepción/hija demostradas, pero concurrencia, grupos y cambios de lista pendientes. | Casos UAT-M05-3/4 y decisión D07. Madre no equivale a compra abierta. |
| Listas | Precedencia, neto OC/estadístico, descuentos directos/cascada y bonificaciones requieren casos dorados. | M03 y D10. Semántica y tolerancias aprobadas antes de comparar. |
| Surtido | Liliana participa del piloto por categoría. Seis segmentos son propuesta, no estructura definitiva aprobada. | WBS 2.18 y GAP-13. Validar datos y excepciones antes de expansión. |
| Datos Maestros | Administrar el dato, auditar y decidir surtido son funciones distintas. | WBS 2.19 y compromiso nominal por función. Guillermo Alvez es interlocutor de Auditoría. |
| Distribución/Valkimia | Contratos y alternativa Excel seguían sin confirmación. Preparado/despachado/no preparado requieren distinción. | WBS 2.13, UAT-M09-3 y gate del circuito. No asumir Excel disponible. |
| QX/reposición automática | Pendientes propone migrarla después de estabilización, fin B2. | GAP-10 y D13. No activar esa migración por asociación con el sugerido B1. |
| Precios de venta y conciliación de factura | Las minutas 20/10 los ubican en B2. | No convertirlos en condición adicional del B1 salvo cambio aprobado. |

## Lista para llegar al 04/11

### Antes de abrir el paralelo de un módulo

- [ ] Capacidad y población incluidas, versión productiva y restricciones identificadas.
- [ ] Dueño, referente, suplente, IT/mesa y jefatura aceptan su función y agenda.
- [ ] Los participantes completaron formación mínima y conocen la información que conserva validez.
- [ ] Datos/corte y resultado esperado aprobados. Los saldos iniciales se revisan si hubo movimientos demorados.
- [ ] Accesos y conectividad comprobados con el dispositivo/sitio real que participe.
- [ ] Interfaces y efectos externos controlados. Una sola emisión al proveedor.
- [ ] Smoke pasa y deja evidencia del flujo completo aplicable.
- [ ] Calendario de algunos días/ciclos, control diario y criterio de aceptación acordados.

### Durante el paralelo

DIARCO/SGM sigue siendo válido. No reemplazar su dato ni habilitar un segundo escritor por haber mostrado una pantalla Connexa. Registrar el mismo objeto con identificadores cruzados y comparar en el mismo corte. Separar una diferencia por dato vencido, por regla, por redondeo, por interfaz o por defecto.

La OC valorizada se compara por cabecera y línea. Registrar proveedor/sitio, moneda, fechas, lista/versión, unidad, cantidad, precio, descuentos/orden, neto, internos, IVA, redondeos, totales, estado, numeración y acuse. Negocio/Impuestos aprueban el esperado independiente. Sin tolerancia monetaria acordada, la aceptación queda pendiente: no se inventa una tolerancia para conseguir coincidencia.

En recepción/ajustes, confirmar procesamiento final y documentos en SGM. En inventarios, verificar foto inicial, PDA/ubicaciones y la salida/aplicación del resultado. En distribución, probar el mecanismo realmente disponible con VKM y el retorno parcial; no volver a preparar mercadería ya preparada.

El referente DIARCO ejecuta, Zeetrex acompaña y corrige, el dueño decide aceptación. Un caso fallido conserva defecto y reprueba. Una aceptación corresponde a versión, capacidad y población concretas. No cambia automáticamente la autoridad del sistema ni habilita toda la red.

### Revisión diaria propuesta de 20 minutos

1. Qué se ejecutó y qué comparación dejó evidencia.
2. Qué diferencias impiden aceptar y quién las corrige.
3. Qué se reprueba en la siguiente ventana y con qué datos.
4. Qué módulo puede aceptar el dueño, cuál continúa en paralelo y cuál debe detenerse.

## Interlocutores de antecedentes para confirmar

| Función / frente | Personas o equipos documentados | Tratamiento |
|---|---|---|
| Auditoría | Guillermo Alvez | Confirmar alcance de control, separado de Administración de Datos Maestros. |
| Listas y acuerdos | Sebastián Basconcelos | Grafía según minuta 13/10. Hay variantes en otros documentos; confirmar. |
| Compras | Romina Garfi, Roxana Frutos, Paloma Romero, Diego Baldi | Elegir dueño, titular/suplente y usuarios piloto por circuito. |
| Surtido | Liliana D'Amico | Confirmar responsabilidad y tiempo para categoría piloto. |
| Logística/CD | Christian Rojas, Gastón; Diego Ferrara en Pendientes | Confirmar titular y separar decisión comercial de planificación logística. |
| Recepción/inventarios | Cecilia Camus, Fernando Ureña, Javier Dafonte, Rodolfo Herlein | Elegir responsables y cobertura por formato/sucursal. |
| Infraestructura | Jorge Borja/Borjas y equipo Infra en antecedentes | Confirmar identidad, disponibilidad, Wi-Fi/PDA y autoridad técnica. |
| Ingeniería/funcional Zeetrex | Alejandro Ledesma, Matías Ochoa, Stefano Mugetti, Guillermo Añaños, Silvina Sagesse | Contactos documentados. LZ confirma asignación y carga de cada actividad. |
| Valkimia | Gustavo Palacios, Fernando de Pedro; otros contactos en Pendientes | Confirmar dueño de contrato, devolución técnica y cobertura. |

La nómina anterior registra lo encontrado en las minutas. La hoja **Asignaciones**, editada por el usuario el 30/10, amplía los interlocutores para la preparación del 04/11:

| Módulos | Interlocutores agregados o precisados en Asignaciones | Acción de preparación |
|---|---|---|
| M04 y M05, abastecimiento y OC | Romina Garfi, Carolina Tavernisse (Non-Food), Camila Klipauka (Perfumería), Marcelo Cingolani, Diego Baldi (Perecederos) y Paloma Romero (Barrio) | Definir dueño de decisión y cobertura de pruebas por categoría/formato; acordar quién aprueba el esperado de la OC valorizada. |
| M07, inventarios | Guillermo Alvez y Javier Dafonte | Separar control de auditoría y ejecución operativa; nombrar titular y suplente. |
| M08, PDD | Christian Rojas (Logística), Liliana D'Amico y Carolina Tavernisse (Compras) | Acordar entradas comerciales y responsabilidad logística del cálculo y backlog. |
| M10, stock y conciliación | IT, Control de Stock y Hernán López (líder SGM DIARCO, según la hoja) | Designar dueño de conciliación y responsable IT de integración; demostrar saldos y movimientos en SGM. |

La hoja **Gobierno** actualizada propone a Guillermo Añaños como enlace de Dirección para IT DIARCO, a Eduardo Ettlin para liderar la implementación Zeetrex, a Pablo Duplessy para Gestión del Cambio y a Alejandro Ledesma / Eduardo Ettlin para la función técnica L2. Guillermo Añaños no es Guillermo Alvez. Estas propuestas no sustituyen la aceptación de funciones, horas y facultades en el acta. La fila histórica de Ingeniería/funcional Zeetrex no asigna automáticamente esos contactos al nuevo gobierno.

Ni esta nómina ni la hoja Asignaciones constituyen aceptación de responsabilidades o presumen asistencia a futuras reuniones.

## Referencias principales

- **S19:** [Relanzar Recepción e Inventarios](https://drive.google.com/file/d/13gg2896DrzNJE-QJPVw9ZjxIwO77xM82/view), 22/10/2026. Disponibilidad y confiabilidad de stock se validan por separado. Wi-Fi, PDA, tienda escuela y primeras sucursales pendientes.
- **S20:** [Equipo técnico SM-MO-EWE](https://drive.google.com/file/d/1NJY0-0vUk1PjiCopLtRTub1ZE-hMo3Hx/view), 22/10/2026. Pruebas parciales informadas; pendientes SGM, autorizaciones, remitos, túnel, maestros y PDA/QR. No acredita cierre del 26/10.
- **S21:** [Equipo técnico MO-EWE](https://drive.google.com/file/d/19o9Yfk5MbfNNvdoITYqZy0iqB2lQ-yw1/view), 21/10/2026. OC madre demostrada. Concurrencia de recepciones y cambio de lista todavía a validar.
- **S22:** [Auditoría](https://drive.google.com/file/d/12NzBdTsjvkwqv7ZnndETBb2hQuCScixH/view), 20/10/2026. Guillermo Alvez, interlocutor. Gobierno de datos y workflows requieren definición organizativa.
- **S23:** [Compradores](https://drive.google.com/file/d/1QRjn1y4a-0DLcG3nCLujM8VaB0FBFPzl/view), 20/10/2026. Romina Garfi, Roxana Frutos, Paloma Romero y Diego Baldi, interlocutores. OC madre y descuentos requieren pruebas.
- **S24:** [Logística y Valkimia](https://drive.google.com/file/d/1aY5pXBry83kI8Fs4pHE2cmezpGWFic3r/view), 20/10/2026. Christian Rojas/Gastón en Logística. API/Excel y redespachos no son una especificación aprobada.
- **S25:** [Listas de proveedores](https://drive.google.com/file/d/14fA4uzvnh88GG3A8Puim1tiVch5RGl3A/view), 13/10/2026. Sebastián Basconcelos según esta minuta. Reglas de netos, precedencia y bonificaciones a validar.
- **S26:** [Pendientes de implementación](https://drive.google.com/file/d/1UD6RZoactv23cY9J6RaK5-qGq5neW8DX/view), 19/10/2026. Identifica interlocutores y deja QX/reposición automática para después de estabilización, fin B2. Confirmar frontera.
- **S27:** [Informe ejecutivo 23/10](https://drive.google.com/file/d/1MiOVTdg-nJS0WnxPQHmkiJBW_sF3PKtP/view), 23/10/2026. Última evidencia de reuniones al 22/10. No acredita cierre posterior de recuperación, integración o aceptación B1.
- **S28:** [Clusters y segmentos](https://drive.google.com/file/d/1aeoaYyiU3w15atsmD3zDT3W_ZMS2pfr0/view), 20/10/2026. Liliana D’Amico. Seis segmentos son propuesta, modelo definitivo pendiente de simulación de categoría.
- **S29:** [Contratos Valkimia](https://drive.google.com/file/d/1Q5bV7YBnVGcCHOKnk8j_ZhWpfEJHOINn/view), 20/10/2026. Gustavo Palacios y Fernando de Pedro. Excel sigue en evaluación. No asumir disponible.
- **S30:** [Conciliación de facturas](https://drive.google.com/file/d/1T297puOriKOsheglNGY-Sxj4W4aJKlM9/view), 20/10/2026. Walter Sosa y Guillermo Alvez. Triple control OC/recepción/factura corresponde a Bloque 2.

El informe del 23/10 utiliza enlaces internos de biblioteca. Este kit cita los documentos accesibles de Drive en lugar de reproducir esos enlaces. Se preservaron los documentos fuente y no se cambió su estado de aprobación.
