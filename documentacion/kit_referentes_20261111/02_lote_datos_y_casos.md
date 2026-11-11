# Pedido de datos y lote de pruebas · copiar por circuito

**Circuito:** [Cxx]. **Dueño funcional:** [nombre]. **Referente y suplente:** [nombres]. **Fecha de devolución:** [dd/mm, hora]. **Sistema/corte de referencia:** [SGM, fecha/hora, versión de lista].

## Población de prueba

**Incluido:** [proveedores, artículos, categorías, sucursales/CD, documentos, usuarios y período]. **Excluido:** [lista]. **Volumen normal y pico:** [documentos/día, líneas/documento, artículos, concurrencia, tiempo aceptable]. **Fuente de cada dato:** [sistema, archivo, dueño y fecha].

### Para compras y OC · aproximadamente tres proveedores distintos

| Proveedor | Código SGM y razón social | Tipo/flujo | Lista y vigencia | SKU/sitios | OC SGM de referencia | Regla o excepción que cubre | Dueño de datos / entrega |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Habitual | [ ] | [sugerida/directa; CD/sucursal] | [ ] | [ ] | [ ] | Flujo completo | [ ] |
| Exigente | [ ] | [ ] | [ ] | [ ] | [ ] | Precio específico, descuento, impuesto o mínimo real | [ ] |
| Excepción | [ ] | [ ] | [ ] | [ ] | [ ] | Campaña, vigencia, rechazo, parcial o reintento real | [ ] |

Para cada OC pedir moneda, unidad/bulto, cantidad, precio lista, descuentos y orden de aplicación, impuestos internos, IVA, redondeos, total, estado, número SGM, acuse y único emisor al proveedor. Compras/Impuestos aprueban el cálculo esperado y tolerancias **antes** de ejecutar.

### Para los otros frentes

| Frente | Lote equivalente mínimo |
| --- | --- |
| Maestros | Artículos nuevos, cambio, duplicado y diferencia logística; fuente GS1/proveedor/SGM y dueño que prevalece. |
| Surtido | Categoría Menaje u otra acordada, artículo–sucursal, inclusión/exclusión, grupos y vigencias. |
| Recepción | OC/remito, dos sitios o formatos si aplica, parcial, diferencia, PDA/conectividad y resultado final SGM. |
| Inventario | Plano/QR, foto de stock, conteo, recuento, trabajo offline, reporte, autorización y ajuste SGM. |
| PDD | Necesidad, stock neto, prioridad, exclusión, backlog y validación logística. |
| Valkimia | Documento de transferencia, preparado/despachado/no preparado, retorno, remito y control de duplicación; alternativa manual sólo tras aprobación. |
| Stock | Corte SGM, documentos en vuelo, pendientes, conciliación, reconexión y alerta. |

## Casos que el dueño debe aprobar

| ID | Normal / excepción / permisos / soporte | Datos | Resultado esperado y tolerancia | Quién aprueba | Fecha | Listo para ejecutar |
| --- | --- | --- | --- | --- | --- | --- |
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [sí/no] |
| [ ] | [ ] | [ ] | [ ] | [ ] | [ ] | [sí/no] |

**Si falta un dato o regla:** anotar qué falta, dueño y fecha; no completar el esperado copiando lo que muestre Connexa. En el plan Excel, `Matriz circuitos` delimita población; `Casos circuitos` documenta esperado; `Ejecuciones circuitos` registra cada prueba real.
