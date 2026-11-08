# Guía del referente: lote de datos, pruebas y evidencia

**Preparado:** 07/11/2026. **Uso:** entregar en la inducción de cada frente. La [matriz v0.5](../outputs/20261105/DIARCO_Bloque1_Plan_v0.5.xlsx) contiene casos `CC-*`, formación, ejecuciones y aceptación. Esta guía explica qué debe traer y hacer cada referente. La [ficha más detallada de C07](08_reunion_y_cronograma_piloto_no_comestibles.md) amplía condiciones comerciales y OC.

## 1. Elegir la población

Para **cada frente de compra C04–C08**, proponer **tres proveedores reales** identificados por código SGM y razón social:

| Lugar en el lote | Qué buscar | Qué permite probar |
| --- | --- | --- |
| 1. Habitual | Compras frecuentes, artículos/sucursales representativos, lista vigente | Flujo normal: propuesta o compra directa, ajuste, OC, aprobación, transferencia y conciliación SGM |
| 2. Regla exigente | Precio específico por sucursal, descuento/bonificación, volumen o impuesto particular **si aplica** | Cálculo por línea, vigencias, precedencia, autorización y diferencias de valorización |
| 3. Excepción real | Campaña, mínimo/bulto, baja rotación, rechazo/corrección, entrega parcial o dato faltante | Recuperación, controles y decisión de negocio ante un desvío |

Elegir **tres proveedores distintos**. Uno puede cubrir dos situaciones; si el sector carece de un tipo, indicar «no aplica» y elegir otro proveedor con una operación real útil. Si no hay tres elegibles, documentar la limitación y acordar la ampliación con el dueño funcional. Para cada proveedor adjuntar: código, comprador, lista actual y versión/fecha, 5–20 SKU de muestra con unidad/bulto, sucursales, condiciones de pago, descuentos/impuestos, OC SGM real de referencia y volumen habitual/pico. Compras e Impuestos aprueban el cálculo esperado antes de UAT. Durante las pruebas, un único circuito autorizado comunica la OC al proveedor.

Para los **demás circuitos**, usar tres casos equivalentes: normal, excepción y volumen/recuperación. C01 necesita artículos/proveedores maestros; C02 listas y sucursales; C09 madre/hija; C10/C11 recepciones; C12 foto y ajuste de stock; C13 necesidades/prioridades; C14 retorno Valkimia; C15 interfaz/conciliación. Identificar el documento y sistema que tiene autoridad en cada caso.

## 2. Completar la ficha del lote

| Dato | Completar |
| --- | --- |
| Circuito, módulo, versión, ambiente y fecha/corte | [ ] |
| Titular, suplente, dueño que acepta y operador que hará la prueba | [ ] |
| Proveedor 1/2/3 o tres documentos/casos equivalentes, códigos y motivo de elección | [ ] |
| SKU, sucursales/CD, unidades, cantidades, lista, condiciones y stock/pendiente si aplica | [ ] |
| Documento DIARCO/SGM de referencia y número/estado | [ ] |
| Resultado esperado por paso, fuente, aprobador y tolerancia | [ ] |
| Excepciones, permisos/autorizadores y bloqueo esperado | [ ] |
| Volumen habitual/pico y concurrencia a medir | [ ] |
| Archivo/evidencia, ubicación y persona que lo entregará | [ ] |
| Falta de datos, dueño y fecha de devolución | [ ] |

El referente entrega la ficha **2–3 días hábiles después de la inducción**, salvo acuerdo diferente en el acta. Zeetrex valida completitud y prepara TEST. Los datos de un proveedor no se fabrican a partir de una captura de pantalla ni se mezclan entre fechas de corte.

## 3. Acceder y ejecutar en TEST

1. Confirmar el usuario nominal en la [matriz de acceso](11_capacitacion_usuarios_y_accesos.md) y entrar con sus permisos propios. Registrar fecha, ambiente y versión, sin copiar credenciales.
2. Ejecutar práctica guiada con Zeetrex. Titular y suplente demuestran normal y excepción. Si aparece un permiso indebido, detener el caso y registrarlo.
3. Para cada `CC-*`, leer pasos y esperado aprobado. Operar con el lote elegido; guardar número de Connexa y número de SGM, estado y acuse cuando corresponda.
4. Comparar **línea por línea** cantidad, unidad, precio, descuentos, orden de aplicación, internos/IVA y redondeo; comparar cabecera, estado y total. La igualdad del total sola no prueba igualdad de líneas.
5. Completar una fila en **Ejecuciones circuitos** por cada prueba. Registrar una fila nueva para la reprueba después de la corrección; no sustituir la evidencia anterior.

### Registro mínimo de ejecución

`ID ejecución; ID caso; circuito; usuario; ambiente/versión; fecha y corte; proveedor/SKU/sucursal; esperado aprobado y quién lo aprobó; observado; identificadores Connexa/SGM; diferencia; resultado; defecto/ticket; enlace a evidencia; próxima acción, dueño y fecha.`

Para una captura, incluir el documento/estado y hora visibles. Para un cálculo, adjuntar exportación o tabla de líneas con valores esperados y observados. La evidencia debe poder abrirla quien acepta el circuito y no debe contener contraseñas.

## 4. Informar desvíos y repetir

Al detectar un desvío, registrar síntoma, pasos para reproducir, impacto operativo, población, versión, documentos, esperado/observado y evidencia. Avisar el mismo día por el canal acordado a mesa/IT/Zeetrex según severidad. Si hay duplicación, autorización indebida, diferencia crítica no explicada o pérdida de trazabilidad, detener nuevas operaciones de ese circuito hasta conocer el estado en ambos sistemas. Zeetrex corrige o explica; DIARCO repite el caso con nuevo ID y confirma el resultado. Un problema resuelto verbalmente sigue abierto hasta que exista evidencia de reprueba.

## 5. Pasar a Producción por circuito

Producción puede estar técnicamente disponible alrededor del **17/11** como objetivo de planificación. El usuario empieza a operar únicamente después de: permisos de Producción autorizados y probados; formación individual; casos críticos aprobados; dos ciclos de paralelo completos con excepción; conciliación SGM; soporte y contingencia listos; decisión documentada del gate para esa población. Registrar fecha efectiva, escritor autorizado, emisor único al proveedor y monitoreo diario.

Durante la convivencia, SGM conserva stock y pendientes oficiales; Connexa transmite las operaciones habilitadas a SGM mediante el contrato certificado. DIARCO valida que SGM las incorporó y que el proveedor recibió **una sola** OC por el canal acordado. La expansión a más proveedores, sucursales o usuarios genera su propio control de alcance y autorización.
