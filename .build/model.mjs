// Proposed implementation model. Nothing here records an actual client approval.
export const sources = [
  ['S01','Solicitud del usuario','29/10/2026','Necesidad de compromiso DIARCO, referentes, WBS, formación, UAT y soporte.','Conversación de trabajo'],
  ['S02','Metodología Connexa v0.1','27/07/2026','Antecedente aprobado según sus metadatos. Duraciones sin calibrar.','CONNEXA_FRAMEWORK/docs/20-metodologia-implementacion/00-metodologia-implementacion-v0.md'],
  ['S03','Artefactos y criterios de salida','27/07/2026','Borrador de referencia. Cierre mediante evidencia y validación.','CONNEXA_FRAMEWORK/docs/20-metodologia-implementacion/03-artefactos-y-criterios-de-salida.md'],
  ['S04','Informe ejecutivo WBS septiembre','21/09/2026','Antecedente histórico. Porcentajes y fechas no verifican preparación actual.','https://docs.google.com/document/d/1rhQI7f-sLXPjlrbATOFqlTWYBZ4-4esDDBgchhGvwXA/edit'],
  ['S05','Reunión Plan Despliegue','16/10/2026','Transcripción. Propone convivencia SGM y despliegue gradual. No es acta aprobada.','https://drive.google.com/file/d/1Wuug8RN0KgaodiotYqKLv-wWiXVunMSR/view'],
  ['S06','DIARCO cambios octubre','Actualizado 28/10/2026','Mezcla realizados, pedidos y decisiones abiertas. No clasifica definitivamente B1/B2/B3.','https://docs.google.com/document/d/13tTsK9QcUGNsY8hy5iSmRKclbCbAFbR0-_iVH-QNf1I/edit'],
  ['S07','PDD alcance Fase 1 v1.1','28/07/2026','Alcance específico de PDD. Fase 1 no equivale a Bloque 1 del programa.','PDD/PDD - ALCANCE Fase 1.md'],
  ['S08','PDD preflight Inventory','29/10/2026','Foto histórica de cobertura TEST/PROD. Requiere lectura nueva antes de habilitar.','PDD/documentacion/16_preflight_inventory_y_continuidad_20261029.md'],
  ['S09','Diseño de este kit','29/10/2026','Roles, actividades, tiempos, umbrales y prioridades son propuestas a validar.','Zeetrex / CNX_BLOQUE1 v0.1'],
  ['S10','Plan de Despliegue - Estrategia','16/10/2026; seleccionado 29/10','Fuente rectora elegida expresamente por el usuario. Convivencia gradual. 07/11 disponibilidad, 09/11 pruebas previstas.','CNX_BLOQUE1/documentacion/Plan de Despliegue - Estrategia.md'],
  ['S11','PLAN DE DESPLIEGUE','Antecedente local','Contiene corte total al 07/11 incompatible con S10. No rige ese corte por decisión expresa del usuario.','CNX_BLOQUE1/documentacion/PLAN DE DESPLIEGUE.md'],
  ['S12','Nombres y cargos informados por el usuario','29/10/2026','Pablo Bertolissio, Roberto Goldfarb, Daniel Padin, Luciano Calcagno y Eduardo Ettlin. Facultades de proyecto propuestas, no aceptadas todavía.','Conversación de trabajo'],
  ['S13','Objetivo de paralelo desde 04/11','29/10/2026','Instrucción más reciente: disponibilidad de módulos productivos, smoke tests y algunos días de paralelo desde 04/11, aceptación progresiva. Sigue valiendo información DIARCO/SGM.','Conversación de trabajo']
];

function extendModules(){modules.push(
 {id:'M09',name:'Transferencias y distribución con Valkimia',owner:'Dueño de Distribución',ref:'Referente Transferencias',audience:'Compradores, logística y responsables de CD/Valkimia',source:'S10; S06; S07',scope:'B1 según Estrategia',
 objective:'Gestionar transferencias desde Connexa y validar el intercambio mínimo viable con Valkimia y SGM.',
 do:['Validar con negocio transferencias, acopios, campañas y límites de cada circuito.','Acordar con Valkimia/CD interfaz o alternativa Excel, responsables y acuses.','Ejecutar una transferencia de extremo a extremo con identificadores y cantidades conciliados.','Probar retorno parcial, excepción y recuperación sin duplicar movimientos.'],
 learn:'Necesidad, transferencia, viaje y movimiento son objetos distintos. Exportación/importación, acuse y estado oficial durante convivencia.',
 own:'Validación de prioridades, contenido de transferencias y conciliación funcional con CD y Valkimia.',
 errors:'Archivo rechazado; viaje sin confirmación; cantidad parcialmente despachada; transferencia duplicada.',
 accept:'El intercambio elegido está validado por Valkimia/CD. Cantidades y documentos concilian en el circuito aprobado, sin atribuir a PDD funciones TMS.',
 tests:[['Transferencia a Valkimia/SGM','Contrato mínimo o formato Excel validado por las contrapartes','Generar, exportar/transmitir, confirmar y conciliar','Identificadores, cantidades y estados coherentes. Evidencia de aceptación de destino.'],['Retorno parcial y reintento','Documento de prueba con despacho parcial y esperado acordado','Recibir retorno, consultar saldo y repetir por procedimiento','Saldo y pendiente coinciden. No se duplica movimiento ni se presume redespacho sin contrato.']]},
 {id:'M10',name:'Stock, conciliación y observabilidad',owner:'Dueño de Operación y Control de Stock',ref:'Referente Control Operativo',audience:'IT, mesa de ayuda, control de stock y dueños de proceso',source:'S10; S08',scope:'B1 según Estrategia',
 objective:'Controlar stock y pendientes oficiales de SGM y detectar fallas de las interfaces durante convivencia.',
 do:['Identificar fuentes oficiales, cortes, responsables y controles por interfaz.','Acordar latencias admisibles, alertas y conciliaciones por ciclo.','Verificar una operación y su impacto de extremo a extremo con datos de SGM.','Simular alerta, abrir ticket, recuperar y verificar saldos/documentos.'],
 learn:'Stock oficial frente a proyecciones, cortes, correlación, conciliación y límites del reproceso.',
 own:'Control de diferencias y decisión de negocio sobre saldos. IT asume monitoreo y recuperación técnica.',
 errors:'Dato vencido; proceso fallido sin alerta; documento sin acuse; saldos diferentes entre sistemas.',
 accept:'Cada interfaz crítica tiene control, dueño y alerta probada. Stock/pendientes concilian bajo cortes acordados y autoridad SGM.',
 tests:[['Conciliación de stock y pendiente','Foto SGM certificada y movimiento de prueba trazable','Comparar origen, destino, corte y resultado','Diferencias identificadas por causa. Se conserva SGM como autoridad durante etapa 1.'],['Alerta y recuperación','Falla controlada y canal de atención habilitado','Detectar, clasificar, recuperar y conciliar','Responsables reciben y atienden la alerta. Recuperación confirma documentos y saldos antes de reanudar.']]}
);
for(const m of modules){m.scope='B1 según Estrategia';if(!m.source.includes('S10'))m.source+='; S10';}}

export const people=[
 ['Pablo Bertolissio','Gerente General DIARCO','Sponsor operativo DIARCO (SP)','Propuesta a confirmar','Prioridad, capacidad interna y gates operativos'],
 ['Roberto Goldfarb','Owner DIARCO','Patrocinio institucional y escalación estratégica','Propuesta a confirmar','Respaldo de transformación y conflictos de prioridad de compañía'],
 ['Daniel Padin','CEO Zeetrex','Sponsor ejecutivo Zeetrex','Propuesta a confirmar','Compromiso de entrega, recursos y escalación de Zeetrex'],
 ['Guillermo Añaños','CIO DIARCO','Enlace de Dirección para IT DIARCO','Propuesta a confirmar','Disponibilizar recursos IT DIARCO'],
 ['Eduardo Ettlin','CTSO Zeetrex','Líder implementación Zeetrex (LZ)','Propuesta a confirmar','Plan integrado y coordinación de ejecución'],
 ['Pablo Duplessy','Change Management Zeetrex','Gestión del Cambio Zeetrex (CMZ)','Propuesta a confirmar','Capacitación, entrenamiento, ciclos de prueba y adopción'],
 ['Alejandro Ledesma / Eduardo Ettlin','Desarrollo Zeetrex','Autoridad técnica y coordinación L2 (ZT)','Propuesta a confirmar','Arquitectura, integraciones y decisiones técnicas']
];
sources.push(
 ['S31','Gobierno del plan editado por el usuario','30/10/2026','Siete perfiles; funciones propuestas, pendientes de aceptación.','CNX_BLOQUE1/outputs/20261029/DIARCO_Bloque1_Plan_v0.2.xlsx, Gobierno!A5:E12'],
 ['S32','Asignaciones del plan editadas por el usuario','30/10/2026','Interlocutores ampliados por módulo; titulares, suplentes y horas aún vacíos.','CNX_BLOQUE1/outputs/20261029/DIARCO_Bloque1_Plan_v0.2.xlsx, Asignaciones!A5:Q15']
);

// No people are assigned by inference from names in meeting transcripts.
export const modules = [
 {id:'M01',name:'Catálogo y maestros',owner:'Dueño de Datos Maestros',ref:'Referente Catálogo',audience:'Administradores de catálogo y responsables comerciales',source:'S04; S05; S06',
  scope:'Candidato B1',objective:'Sostener artículos, EAN, proveedor y sucursal con datos consistentes y maestría acordada.',
  do:['Inventariar altas, cambios y bajas con casos reales y excepciones de DIARCO.','Conciliar una muestra acordada de artículos, EAN y proveedor contra la fuente autorizada.','Definir quién modifica cada dato y cuándo se replica a SGM.','Ejecutar alta/cambio/baja autorizados y validar su resultado en ambos extremos.'],
  learn:'Identificadores, unidad/bulto, estados, permisos, sentido de sincronización y prevención de duplicados.',
  own:'Calidad y aprobación del dato de negocio, tratamiento de excepciones y guía interna de mantenimiento.',
  errors:'EAN duplicado; unidad incorrecta; vínculo proveedor ausente; cambio sin replicar.',
  accept:'Muestra con identidad y campos críticos conciliados. Cambios autorizados auditables. Duplicados rechazados sin pérdida del dato válido.',
  tests:[['Alta y cambio autorizados','Artículo de prueba con EAN y proveedor válidos','Crear, modificar y consultar en destino','Un solo artículo. Campos críticos y vínculo de sincronización coinciden con el resultado esperado.'],['Identificador duplicado','EAN ya asignado a otro artículo','Intentar una nueva alta con ese EAN','Rechazo o tratamiento definido por el contrato, sin duplicar ni sobrescribir el artículo válido.']]},
 {id:'M02',name:'Surtido, clusters y segmentos',owner:'Dueño de Surtido',ref:'Referente Surtido',audience:'Comercial, surtido y responsables de sucursales',source:'S04; S05; S06',
  scope:'Candidato B1',objective:'Aplicar elegibilidad y reglas de surtido por artículo y sucursal de forma explicable.',
  do:['Preparar matriz artículo/sucursal y excepciones de Mayorista/Barrio que negocio confirme.','Validar pertenencia a cluster, segmento y vigencia.','Probar habilitación y exclusión en los consumidores incluidos.','Explicar el efecto de un cambio y acordar la aprobación de excepciones.'],
  learn:'Diferencias entre cluster, segmento y grupo de sucursales de compra. Herencia, vigencias y estados.',
  own:'Aprobación de reglas, resolución de conflictos de elegibilidad y comunicación a los operadores.',
  errors:'Sucursal mal agrupada; regla vencida; artículo habilitado en un circuito y excluido en otro.',
  accept:'Los pares habilitados y excluidos producen exactamente el efecto acordado en cada consumidor incluido.',
  tests:[['Par habilitado y excluido','Dos pares con distinta elegibilidad y regla vigente','Consultar y ejecutar el consumidor aprobado para ambos','El habilitado participa. El excluido no genera operaciones nuevas incompatibles. Motivo trazable.'],['Cambio de vigencia','Regla actual y cambio con vigencia futura','Consultar antes y después del corte en TEST','Cada fecha usa la versión esperada. El cambio no altera documentos históricos.']]},
 {id:'M03',name:'Listas y acuerdos comerciales de compra',owner:'Dueño de Compras',ref:'Referente Listas y Acuerdos',audience:'Compradores y aprobadores comerciales',source:'S04; S05; S06',
  scope:'Candidato B1',objective:'Disponer de condiciones de compra vigentes y verificables por proveedor, sucursal y artículo.',
  do:['Seleccionar proveedores piloto y listas reales con permisos de uso.','Preparar ejemplos de descuentos, vigencias y condiciones por sitio/grupo.','Construir con Zeetrex casos de cálculo esperados y aprobar su semántica.','Importar, corregir errores y validar la versión que consumen compras y OC.'],
  learn:'Precio lista, neto OC y neto estadístico. Descuentos y reglas dentro/fuera de OC. Orden de aplicación y vigencia.',
  own:'Veracidad de condiciones comerciales, autorización de versiones y conciliación de resultados.',
  errors:'Lista sin vigencia; descuento duplicado; confusión de netos; grupo de compra confundido con cluster.',
  accept:'Casos dorados reproducibles con impuestos y redondeos aprobados por las áreas competentes, sin doble aplicación de reglas.',
  tests:[['Lista por proveedor y sucursal','Lista general y específica vigente con valores esperados aprobados','Importar y resolver el precio para dos sitios','Se elige la lista correspondiente. Neto OC y estadístico se explican por componentes y versión.'],['Importación inválida','Archivo con artículo inexistente y descuento mal formado','Importar y corregir el archivo','Se identifican las filas rechazadas. No se publica una versión parcial sin el tratamiento explícitamente aprobado.']]},
 {id:'M04',name:'Forecast y compra inteligente/directa',owner:'Dueño de Abastecimiento',ref:'Referente Abastecimiento',audience:'Compradores y gerencia de compras',source:'S04; S06',
  scope:'Candidato B1',objective:'Generar y revisar propuestas explicables con datos, condiciones y parámetros vigentes.',
  do:['Acordar artículos, proveedores y sitios representativos de los modos de compra incluidos.','Revisar demanda, stock, pendientes y parámetros usados por el sugerido.','Ejecutar una propuesta, justificar ajustes y enviarla al aprobador.','Comparar el resultado con casos reales y registrar diferencias con causa.'],
  learn:'Pronóstico, días de stock, unidades de compra, pendientes, trazabilidad y límites de aprobación.',
  own:'Calidad de parámetros de negocio, revisión del sugerido y justificación de decisiones de compra.',
  errors:'Stock desactualizado; parámetro ausente; sugerido interpretado como OC; fecha/precio inconsistente.',
  accept:'Propuesta reproducible para el corte elegido. Valores esperados aprobados y traspaso a OC sin perder ajustes o autorizaciones.',
  tests:[['Propuesta explicable','Corte con demanda, stock y lista certificados','Generar, revisar un artículo y ajustar con motivo','Se identifican entradas y versión. El ajuste conserva autor y motivo. La aprobación respeta la política acordada.'],['Entrada crítica ausente','Par de prueba sin un parámetro necesario','Generar propuesta y consultar la excepción','Se bloquea o excluye según política explícita aprobada. Nunca se presenta un resultado incompleto como válido.']]},
 {id:'M05',name:'Órdenes de compra e integración SGM',owner:'Dueño de Compras',ref:'Referente OC',audience:'Compradores, gerencia, IT e integración SGM',source:'S04; S05; S06',
  scope:'Candidato B1',objective:'Crear, autorizar y transferir OC con trazabilidad y conciliación entre sistemas.',
  do:['Definir roles y límites de generación, aprobación y anulación.','Acordar quién comunica la OC al proveedor durante la convivencia.','Validar valorización con Compras e Impuestos y vinculación de identificadores.','Conciliar cabecera, líneas y estado en SGM y ensayar recuperación sin duplicar.'],
  learn:'Estados de OC, precio/impuestos, permisos, acuse técnico y funcional, reintento y contingencia.',
  own:'Aceptación comercial de la OC, autorización del circuito y control de pendientes no conciliados.',
  errors:'OC duplicada; aprobación omitida; sin identificador SGM; envío repetido al proveedor.',
  accept:'Cada OC piloto tiene identificación cruzada, valores conciliados y resultado confirmado. Reintentar no duplica documento ni envío al proveedor.',
  tests:[['OC aprobada a SGM','Comprador/aprobador distintos y OC con cálculo esperado','Generar, aprobar, transmitir y conciliar','Cabecera y líneas coinciden con la versión aprobada. Identificadores vinculados y acuse funcional registrado.'],['Reintento de integración','OC ya transmitida con acuse perdido en entorno de prueba','Repetir por procedimiento autorizado y consultar destino','Se recupera el estado de una única OC. No hay doble documento ni doble comunicación al proveedor.']]},
 {id:'M06',name:'Recepción en sucursal y convivencia SGM',owner:'Dueño de Operaciones de Sucursal',ref:'Referente Recepción',audience:'Receptores, jefes de sucursal y mesa de ayuda',source:'S04; S05; S06',
  scope:'A confirmar B1 o dependencia',objective:'Recibir y conciliar mercadería con pendientes y stock bajo autoridad definida por etapa.',
  do:['Mapear operación con PDA, diferencias y documentos pendientes.','Probar una sucursal Mayorista y una Barrio si ambas participan del piloto.','Conciliar cantidades recibidas, pendientes y stock del sistema autorizado.','Ensayar caída de comunicación y recuperación con control de doble recepción.'],
  learn:'OC/transferencia pendiente, unidad de recepción, recepción parcial y final, diferencias y contingencia.',
  own:'Corrección del registro físico, validación del documento y disciplina del circuito durante convivencia.',
  errors:'Pendiente desactualizado; lectura PDA incorrecta; recepción duplicada; diferencia sin motivo.',
  accept:'Recepción y saldo pendiente coinciden con evidencia física y con el sistema autorizado, sin doble impacto.',
  tests:[['Recepción parcial y diferencia','Documento conocido y cantidades físicas certificadas','Recibir parte, registrar diferencia y conciliar','Se registra lo efectivamente recibido y el motivo. Pendiente e impacto se corresponden con el contrato aprobado.'],['Falla y recuperación PDA','Recepción preparada y comunicación interrumpida en TEST','Recuperar comunicación y seguir el runbook','Una sola recepción efectiva. Operador identifica estado, pendiente y acción autorizada.']]},
 {id:'M07',name:'Inventarios y ajustes',owner:'Dueño de Control de Inventarios',ref:'Referente Inventarios',audience:'Conteo, auditoría y responsables de sucursal',source:'S04; S05',
  scope:'A confirmar B1 o dependencia',objective:'Ejecutar conteos y aprobar diferencias con impacto auditable en el sistema autorizado.',
  do:['Definir mapa, muestra de conteo, corte y responsables de recuento.','Preparar artículos con cantidad conocida y casos de diferencia.','Ejecutar conteo, recuento y aprobación con segregación.','Conciliar el ajuste aplicado y conservar evidencia previa y posterior.'],
  learn:'Foto de stock, corte, conteo/recuento, diferencias, aprobación y trazabilidad de ajuste.',
  own:'Veracidad del conteo, autorización de diferencias y conservación de evidencia de auditoría.',
  errors:'Foto incorrecta; conteo en unidad distinta; ajuste repetido; aprobación por el mismo operador sin permiso.',
  accept:'Conteo, diferencia y ajuste mantienen trazabilidad. El ajuste ocurre una sola vez y sólo con autorización válida.',
  tests:[['Conteo y ajuste autorizado','Stock inicial, conteo independiente y roles segregados','Contar, recontar, aprobar e integrar el ajuste','La diferencia coincide con el esperado. Un único ajuste deja autor, aprobador y estados antes/después.'],['Permiso de ajuste','Usuario de conteo sin facultad de aprobación','Intentar aprobar su ajuste fuera de los permisos','La acción se rechaza y audita. Ningún saldo cambia por el intento.']]},
 {id:'M08',name:'PDD y necesidades de distribución',owner:'Dueño de Planificación Logística',ref:'Referente PDD',audience:'Planificación, comercial y enlace Valkimia',source:'S05; S06; S07; S08',
  scope:'A confirmar B1 o dependencia',objective:'Calcular necesidades y backlog con cobertura de parámetros y contrato de consumo claros.',
  do:['Confirmar si PDD participa del Bloque 1 y qué interfaz/consumidor queda incluido.','Revalidar cobertura Inventory y resolver excepciones con su dueño.','Probar necesidades dirigidas aprobadas y cálculo diario con evidencia.','Conciliar consumo y retorno del sistema logístico sólo bajo contrato confirmado.'],
  learn:'Necesidad frente a orden/reserva/viaje, stock neto, PDVB, cobertura, exclusiones y saldo del backlog.',
  own:'Prioridades de negocio, validación del backlog y decisión sobre excepciones de cobertura.',
  errors:'Par sin política activa; necesidad dirigida bloqueada; confusión con reserva; retorno logístico incompleto.',
  accept:'Se cumplen controles vigentes de cobertura y casos dorados. Backlog trazable sin atribuir a PDD funciones de transporte excluidas.',
  tests:[['Cobertura Inventory','Scope y políticas leídos nuevamente en ambiente de prueba','Ejecutar preflight y verificar casos incompletos','Estado y exclusiones concuerdan con controles vigentes. Se conserva evidencia y dueño de corrección.'],['Necesidad dirigida y backlog','Par válido y necesidad E/C/A aprobada de prueba','Ejecutar flujo incluido y revisar snapshot/backlog','La necesidad conserva aprobación, prioridad y trazabilidad. No se crea una reserva o viaje por inferencia.']]}
];

extendModules();
modules.find(m=>m.id==='M08').do[0]='Confirmar la población de PDD de la primera oleada y su interfaz/consumidor, bajo la Estrategia B1.';
export const roleIds=['SP','LD','DP','RF','US','MD','IT','LZ','ZF','ZT','EXT'];
export const roles=[
 ['SP','Sponsor DIARCO','Dirección','Priorizar, asignar capacidad, resolver escalaciones y decidir gates globales.',1,2],
 ['LD','Líder implementación DIARCO','DIARCO','Coordinar áreas, disponibilidad, evidencias y acciones internas.',12,20],
 ['DP','Dueño del proceso por módulo','DIARCO','Decidir reglas, aceptar UAT y asumir el proceso operativo.',2,4],
 ['RF','Referente titular por módulo','DIARCO','Preparar datos, probar, enseñar y resolver consultas funcionales L1.',6,10],
 ['US','Usuarios piloto por módulo','DIARCO','Ejecutar casos y operación real. Registrar dificultades y resultados.',2,4],
 ['MD','Líder mesa de ayuda','DIARCO','Registrar, clasificar, comunicar y seguir tickets hasta confirmar cierre.',4,8],
 ['IT','Líder IT DIARCO','DIARCO','Accesos, conectividad, operación técnica local y coordinación de incidentes.',4,8],
 ['LZ','Líder implementación Zeetrex','Zeetrex','Plan integrado, dependencias, riesgos y coordinación de entrega.',12,20],
 ['ZF','Consultor funcional Zeetrex','Zeetrex','Configurar, formar, asistir UAT y transferir conocimiento.',8,16],
 ['ZT','Líder técnico/soporte L2 Zeetrex','Zeetrex','Correcciones, integración, diagnóstico y escalamiento técnico.',8,16],
 ['EXT','Responsable de sistema tercero','A designar','Cumplir su interfaz y participar de pruebas/recuperación cuando aplique.',null,null]
];

const rac=(id,act,a,r,c=[],i=[])=>[id,act,...roleIds.map(k=>k===a?(r.includes(k)?'A/R':'A'):r.includes(k)?'R':c.includes(k)?'C':i.includes(k)?'I':'')];
export const raci=[
 rac('RC01','Asignar personas y tiempo DIARCO','SP',['LD'],['DP','IT','MD','LZ']),
 rac('RC02','Aprobar baseline de alcance B1','SP',['LD','LZ'],['DP','ZF','ZT'],['RF','IT','MD']),
 rac('RC03','Definir reglas y datos esperados del módulo','DP',['RF'],['ZF','IT'],['LD','LZ']),
 rac('RC04','Configurar y entregar versión para prueba','LZ',['ZF','ZT'],['RF','IT'],['LD','DP']),
 rac('RC05','Habilitar accesos y entorno DIARCO','IT',['IT'],['ZT','MD','RF'],['LD','LZ']),
 rac('RC06','Certificar datos de negocio','DP',['RF'],['IT','ZF','ZT'],['LD','LZ']),
 rac('RC07','Preparar material y formar referentes','LZ',['ZF'],['RF','MD','IT'],['LD','DP']),
 rac('RC08','Validar competencia de referentes','DP',['RF','US'],['ZF','MD'],['LD','LZ']),
 rac('RC09','Ejecutar UAT y aceptar módulo','DP',['RF','US'],['ZF','ZT','IT'],['LD','LZ']),
 rac('RC10','Corregir defecto de producto','LZ',['ZT'],['ZF','RF','IT'],['LD','DP','MD']),
 rac('RC11','Ejecutar piloto funcional','DP',['RF','US'],['ZF','IT','MD'],['LD','LZ']),
 rac('RC12','Autorizar salida de oleada','SP',['LD','LZ'],['DP','IT','MD','ZT'],['RF','US']),
 rac('RC13','Ejecutar corte técnico coordinado','IT',['IT','ZT'],['LZ','LD','RF','EXT'],['DP','MD']),
 rac('RC14','Decidir contingencia o retorno','SP',['LD','IT','LZ'],['DP','ZT','MD'],['RF','US']),
 rac('RC15','Registrar y seguir ticket L1','MD',['MD'],['RF','IT'],['LD']),
 rac('RC16','Resolver consulta funcional L1','DP',['RF'],['MD','ZF'],['US']),
 rac('RC17','Resolver incidente de infraestructura DIARCO','IT',['IT'],['MD','ZT','EXT'],['LD','LZ']),
 rac('RC18','Resolver incidente producto L2','LZ',['ZT'],['ZF','IT','RF','MD'],['LD','DP']),
 rac('RC19','Capacitar resto de usuarios DIARCO','DP',['RF'],['ZF','LD'],['MD','IT']),
 rac('RC20','Aceptar operación y cierre','SP',['LD','LZ'],['DP','MD','IT','RF'],['US']),
 rac('RC21','Consolidar aprendizajes reutilizables','LZ',['ZF','ZT'],['LD','DP','RF','MD','IT'],['SP'])
];

const task=(id,mod,name,result,r,a,pred,window,done)=>({id,mod,name,result,r,a,pred,window,done,state:'Propuesto'});
export const wbs=[
 task('1.01','TRANSVERSAL','Conciliar alcance y GAPS','Baseline por capacidad con B1/B2/B3/pendiente, motivo y fuente','LZ','SP','','Preparación / G0','Cada capacidad tiene decisión o bloqueo explícito. No se interpreta silencio como aprobación.'),
 task('1.02','TRANSVERSAL','Nombrar sponsor y líder DIARCO','Acta con nombres, facultades y suplencias','LD','SP','1.01','Lunes 02/11 propuesto','Designaciones aceptadas por personas y jefaturas.'),
 task('1.03','TRANSVERSAL','Asignar titulares y suplentes por módulo','Fichas nominales y tiempo protegido','LD','SP','1.02','Lunes 02/11 propuesto','Cada módulo B1 tiene dueño, referente, suplente y horas autorizadas.'),
 task('1.04','TRANSVERSAL','Incorporar mesa de ayuda, IT y terceros','Mapa de servicios, contactos, horario y escalamiento','LD','SP','1.02','Semana 1','Responsables y suplentes aceptan cobertura y simulacro.'),
 task('1.05','TRANSVERSAL','Definir piloto, volumen y calendario','Lista de usuarios/sitios/proveedores/casos, duración y exclusiones','LD','SP','1.01;1.03;1.04','Semana 1','Población, cobertura de excepciones y fechas acordadas con capacidad disponible.'),
 task('1.06','TRANSVERSAL','Aprobar reglas de gobierno y G0','Acta de inicio y decisiones abiertas','LD','SP','1.01;1.02;1.03;1.04;1.05','Semana 1 / G0','Alcance, personas, capacidad, piloto y canal de decisiones registrados.'),
 task('2.01','TRANSVERSAL','Relevar proceso actual y futuro','Mapa extremo a extremo con cambios por rol','RF','DP','1.06','Antes de cada módulo','Cada actividad, control y excepción tiene dueño.'),
 task('2.02','TRANSVERSAL','Acordar maestría y convivencia SGM','Matriz entidad/operación/sistema autorizado por etapa','IT','DP','2.01','Antes de cada módulo','Un solo escritor autorizado por entidad y etapa. Emisor al proveedor definido.'),
 task('2.03','TRANSVERSAL','Preparar ambientes, roles y accesos','Accesos probados con segregación y versión identificada','IT','IT','1.06','Semana 1 y antes de cada prueba','Usuarios entran y permisos positivos/negativos funcionan.'),
 task('2.04','TRANSVERSAL','Fijar datos y resultados esperados','Dataset versionado y casos dorados aprobados','RF','DP','2.01;2.02;2.03','Antes de UAT','Cantidad/valor/regla esperados definidos por negocio, no sólo por el sistema.'),
 task('2.05','TRANSVERSAL','Configurar trazabilidad de pruebas y tickets','Repositorio, IDs y enlaces comunes','LZ','LZ','1.06','Semana 1','Un GAP se vincula a WBS, caso, defecto, evidencia y decisión.'),
 task('2.06','TRANSVERSAL','Acordar contingencia y recuperación','Runbook de corte/retorno y conciliación documental','IT','IT','2.02;2.03','Antes del piloto','Procedimiento practicable sin duplicar operaciones ni borrar historia.'),
 task('2.07','TRANSVERSAL','Acordar cobertura y objetivos de soporte','Acuerdo horario, prioridades y objetivos de atención','MD','SP','1.04','Antes del piloto','DIARCO y Zeetrex validan ventanas, contactos y objetivos. No hay SLA implícito.')
];

for(const m of modules){
 const n=m.id.slice(1), base=`3.${n}`;
 const steps=[
  ['01','Preparar casos y datos del módulo',m.do[0],'RF','DP','2.04;2.05','Casos representativos con entrada, esperado y responsable de dato.'],
  ['02','Validar reglas y configuración',m.do[1],'RF','DP',`${base}.01`,'Reglas aprobadas, configuración versionada y diferencias clasificadas.'],
  ['03','Formar titular y suplente',m.learn,'ZF','LZ',`${base}.02`,'Titular y suplente completan demostración y práctica individual.'],
  ['04','Ejecutar UAT y excepciones',m.do[2],'RF','DP',`${base}.03`,'Casos críticos pasan. Defectos y evidencia por ejecución. Reprueba después de correcciones.'],
  ['05','Aceptar UAT y preparación del módulo',m.accept,'RF','DP',`${base}.04`,'Dueño acepta versión y evidencia. Sin defectos críticos/altos abiertos del circuito.'],
  ['06','Ejecutar piloto controlado',m.do[3],'RF','DP',`${base}.05;2.06;2.07`,'Al menos dos ciclos completos propuestos, incluido uno con excepción. Resultado conciliado.'],
  ['07','Transferir a usuarios y L1',m.own,'RF','DP',`${base}.06`,'Usuarios demuestran tareas críticas. Mesa de ayuda y suplente resuelven un caso simulado.'],
  ['08','Cerrar paquete y recomendar expansión','Acta de módulo, pendientes y plan de oleada','RF','DP',`${base}.07`,'Evidencias completas, soporte habilitado y recomendación para G3.']
 ];
 for(const [s,name,result,r,a,pred,done] of steps)wbs.push(task(`${base}.${s}`,m.id,name,result,r,a,pred,'Secuencia por módulo, desde G1',done));
}
wbs.push(
 task('4.01','TRANSVERSAL','Consolidar UAT y G1','Actas de módulos incluidos en piloto','LD','SP',modules.map(m=>`3.${m.id.slice(1)}.05`).join(';'),'Antes del piloto','Sólo se exigen módulos seleccionados. Excluidos requieren decisión de alcance, nunca aprobación ficticia.'),
 task('4.02','TRANSVERSAL','Validar resultado piloto y G2','Informe de ciclos, incidencias y conciliación','LD','SP','4.01;2.06;2.07','Después del piloto','Criterios G2 cumplidos para el alcance seleccionado. Dependencias de módulos aplicables completas.'),
 task('4.03','TRANSVERSAL','Autorizar y ejecutar oleada G3','Acta go/no-go y bitácora de corte','LD','SP','4.02','Fecha condicionada a gates','Dueños aceptan operación, IT confirma contingencia y sponsor autoriza la oleada.'),
 task('4.04','TRANSVERSAL','Medir adopción y estabilizar','Tablero por módulo/rol/sitio y pendientes','LD','DP','4.03','Hypercare','Ciclos previstos ejecutados y tickets seguidos. Se investiga toda operación fuera del circuito acordado.'),
 task('4.05','TRANSVERSAL','Aceptar transferencia G4','Acta de operación DIARCO y cobertura L1/L2','LD','SP','4.04','Salida de hypercare','Cinco días operativos estables propuestos y evidencia de autonomía de titular/suplente.'),
 task('5.01','TRANSVERSAL','Cerrar y aprender','Informe esfuerzo real, resultados y desvíos','LZ','SP','4.05','Cierre','Desvíos clasificados y cada pendiente tiene dueño, fecha y bloque destino.'),
 task('5.02','TRANSVERSAL','Preparar mejora de metodología','Plantillas sin datos de cliente y propuesta de revisión','LZ','LZ','5.01','Después del cierre','Aprendizajes anonimizados. Publicación normativa sólo por propietario del estándar.')
);

export const decisions=[
 ['D01','Alcance B1 y GAPS diferidos','SP','30/10 preparación; 02/11 decisión','Sin decidir','Listado final versionado y dueño de cada decisión','S01; S04; S05; S06'],
 ['D02','Sponsor y líder DIARCO con facultades','SP','02/11','Sin decidir','Nombre, suplente y autoridad explícita','S01; S09'],
 ['D03','Titulares, suplentes y horas por módulo','SP','02/11','Sin decidir','Persona y jefatura aceptan dedicación protegida','S01; S09'],
 ['D04','Mesa de ayuda e IT con cobertura','SP','Semana 1','Sin decidir','Líderes, guardia por ventana y canal común','S01; S09'],
 ['D05','Piloto y criterio de expansión','SP','Semana 1','Sin decidir','Módulos, sitios, usuarios, proveedores, ciclos y exclusiones','S09'],
 ['D06','Maestría, convivencia y comunicación al proveedor','DP','Antes de UAT','Sin decidir','Escritor autorizado por entidad/etapa y emisor único','S05; S09'],
 ['D07','Reglas pendientes de compra y OC madre','DP','Antes del caso asociado','Sin decidir','Umbral automático, vigencia, cierre y saldo definidos. OC madre sólo si B1 la incluye.','S06'],
 ['D08','Cadencia, escalación y gates','SP','02/11','Sin decidir','Plazos de decisión, evidencia y responsables de go/no-go','S09'],
 ['D09','Horario y objetivos soporte L1/L2','SP','Antes del piloto','Sin decidir','Acuerdo DIARCO/Zeetrex, sin presumir servicio 24x7','S09']
];

export const gaps=[
 ['GAP-01','M03','Reglas y descuentos en listas por sitio/grupo','Pendiente','Semántica y casos dorados','S06'],
 ['GAP-02','M04','Aprobación automática por días de stock/monto','Pendiente','Umbral, autoridad y excepciones sin cerrar','S06'],
 ['GAP-03','M05','OC madre e hijas desde recepción','Pendiente','Validar B1, vigencia de lista, control de saldo y público Barrio/Mayorista','S06'],
 ['GAP-04','M08','Redespacho y retorno de Valkimia','Pendiente','Contrato disponible, responsabilidad y alcance por decidir','S06; S07'],
 ['GAP-05','M08','Viajes, camiones, cubicaje y optimización','Pendiente','PDD Fase 1 los excluye. Confirmar otro módulo o diferir; no imputar a PDD.','S06; S07'],
 ['GAP-06','M08','Cobertura Inventory para cálculo PDD','Pendiente','Revalidar ambiente/cobertura actual. No usar la foto del 29/10 como gate futuro.','S08'],
 ['GAP-07','TRANSVERSAL','Precio de venta, márgenes y costos avanzados','Pendiente','No confundir listas de compra con Pricing de venta. Confirmar bloque destino.','S04; S05'],
 ['GAP-08','M06','Recepciones y alcance de convivencia SGM','Pendiente','Confirmar etapa, pilotos y autoridad de stock/pendientes','S05; S06'],
 ['GAP-09','M01','Productos hermanos y sustitutos','Pendiente','Definir resultado observable, consumidor y bloque','S06']
];

export const uat=[];
for(const m of modules)for(let i=0;i<m.tests.length;i++){const [name,pre,steps,expect]=m.tests[i];uat.push([`UAT-${m.id}-${i+1}`,m.id,name,'Crítica',pre,steps,expect,'RF','DP',...Array(10).fill(''),'No ejecutado']);}
const add=(id,m,name,pre,steps,expected)=>uat.push([id,m,name,'Crítica',pre,steps,expected,'RF','DP',...Array(10).fill(''),'No ejecutado']);
add('UAT-E2E-01','TRANSVERSAL','Catálogo a OC conciliada','Módulos M01 a M05 incluidos, datos certificados y esperado aprobado','Aplicar dato, surtido, lista, propuesta y OC. Aprobar y verificar SGM','Identidad, elegibilidad, cantidad y valor coherentes de extremo a extremo. Una única OC vinculada.');
add('UAT-E2E-02','TRANSVERSAL','Contingencia y recuperación','Punto de interrupción controlado en TEST, autorización de IT y esperado','Interrumpir interfaz, abrir ticket, recuperar y conciliar documentos en vuelo','No hay pérdida ni duplicación. Saldo y documentos conciliados antes de reanudar.');
add('UAT-SEG-01','TRANSVERSAL','Permisos y segregación','Matriz de permisos aprobada, usuario autorizado y usuario sin facultad','Ejecutar alta/aprobación con ambos usuarios en el circuito incluido','Sólo el autorizado puede actuar. Intentos indebidos se rechazan y auditan.');
add('UAT-SOP-01','TRANSVERSAL','Simulacro de soporte','Mesa de ayuda, IT, referente y L2 identificados con horario acordado','Registrar problema, clasificar, derivar, comunicar y confirmar solución','Ticket conserva dueño, tiempos y evidencia. Usuario confirma recuperación y actualización de FAQ.');

export const risks=[
 ['R01','Personas sin tiempo protegido','SP','Alta','No se ejecutan pruebas en las ventanas pactadas','Asignar horas y suplentes. Reducir módulos concurrentes si falta capacidad.','D03'],
 ['R02','Alcance no conciliado entre septiembre y octubre','LZ','Alta','Se usa un pedido como compromiso confirmado','Cerrar D01 y registrar cualquier cambio con impacto.','D01'],
 ['R03','Doble carga o doble envío durante convivencia SGM','IT','Alta','Dos sistemas modifican la misma entidad o comunican una OC','Matriz de maestría, emisor único, reintento y conciliación.','D06'],
 ['R04','IT o mesa de ayuda ausentes hasta el corte','LD','Alta','No hay canal, suplente o runbook probado','Incluirlos desde G0 y exigir simulacro antes del piloto.','D04'],
 ['R05','Aceptación basada en demo/asistencia','DP','Alta','Casos sin esperado, ejecutor o evidencia','UAT independiente y práctica individual. Cerrar con firma del dueño.','D05'],
 ['R06','Proveedor externo bloquea el circuito','LZ','Alta','Interfaz/acuse no disponible en prueba','Nombrar responsable externo, pactar contrato y alternativa explícita o recortar oleada.','D05'],
 ['R07','Datos o parámetros incompletos','DP','Alta','Cálculo no explicable o exclusiones no revisadas','Certificar datos y remediar con dueño. Revalidar cobertura Inventory cuando aplique.','D01'],
 ['R08','Fechas históricas interpretadas como compromiso vigente','SP','Alta','Se exige corte SGM por fecha sin gates','Rebaselinar por evidencia y capacidad. No apagar por calendario.','D06'],
 ['R09','Capacitación no llega al resto de usuarios','DP','Media','Sólo referente puede operar','Formación en cascada, evaluación por rol y suplente probado.','D03']
];

// User steering supersedes historical dates, not the SGM authority of stage 1.
roles.splice(4,0,['SU','Suplente de referente por módulo','DIARCO','Practicar, sustituir al titular y demostrar autonomía.',3,5]);
decisions[0][1]='Detalle B1, GAPS y módulos que entran en paralelo el 04/11';
decisions[4][1]='Población, ciclos y duración del paralelo desde 04/11';
decisions[4][3]='Antes del 04/11';
decisions[5][1]='Control de paralelo: autoridad DIARCO/SGM y emisor único';
decisions[5][5]='SGM conserva validez. Definir cómo comparar/reconciliar sin doble efecto ni envío al proveedor.';
decisions.push(['D10','Criterio de aceptación OC valorizada y tolerancias','DP','Antes del 04/11','Sin decidir','Comparar campos y cálculo esperado independiente. Tolerancias aprobadas antes de ejecutar.','S13; S09']);
for(const g of gaps){
 if(g[0]==='GAP-05'){g[2]='Optimización avanzada TMS/cubicaje/camiones';g[3]='B2 propuesto';g[4]='La planificación básica de transferencias es B1 (M09). Optimización avanzada no se agrega a PDD.';}
 if(g[0]==='GAP-07'){g[3]='B2 según Estrategia';g[4]='Consolidación posterior: kardex, valorización y precios de venta. No confundir con lista de compra.';}
 if(g[0]==='GAP-06'||g[0]==='GAP-08')g[3]='B1 detalle pendiente';
}
const deps={M03:'3.01.02;3.02.02',M04:'3.03.02;3.10.02',M05:'3.03.02;3.04.04',M06:'3.05.04;3.10.02',M07:'3.10.02',M08:'3.02.02;3.10.02',M09:'3.08.04;3.02.02'};
for(const t of wbs){
 if(t.mod!=='TRANSVERSAL'&&t.id.endsWith('.01')&&deps[t.mod])t.pred+=';'+deps[t.mod];
 if(t.mod!=='TRANSVERSAL'&&t.id.endsWith('.06')){t.name='Ejecutar paralelo controlado y piloto';t.window='Desde 04/11, por módulo preparado';t.done='Smoke aprobado. Ciclos y excepción acordados. DIARCO/SGM conserva validez. Comparación y diferencias documentadas.';}
 if(t.mod!=='TRANSVERSAL'&&!t.id.endsWith('.06'))t.window=t.id.endsWith('.07')||t.id.endsWith('.08')?'Tras aceptación de módulo':'Preparar antes del paralelo de ese módulo';
}
wbs.push(
 task('2.08','TRANSVERSAL','Preparar módulos productivos para paralelo 04/11','Versión, ambiente, accesos y controles de efectos externos','ZT','LZ','2.02;2.03;2.05;2.06','Objetivo 04/11','Lista explícita de módulos habilitados. SGM válido. Emisor único y permisos de prueba controlados.'),
 task('2.09','TRANSVERSAL','Ejecutar smoke de flujo de trabajo','Evidencia de acceso, navegación, dato, cálculo y acuse del flujo mínimo','RF','DP','2.08','Desde 04/11 antes de cada paralelo','Flujo mínimo pasa sin duplicar efectos ni envíos. Si falla, no abrir ese circuito al paralelo.'),
 task('2.10','M05','Comparar OC valorizada Connexa vs DIARCO/SGM','Matriz campo a campo, cálculo esperado y diferencias con causa','RF','DP','2.09;3.05.04','Desde 04/11, cada ciclo','Identificadores vinculados, cantidades y componentes conciliados. Desvíos fuera de tolerancia bloquean aceptación.'),
 task('2.11','TRANSVERSAL','Decidir aceptación progresiva del paralelo','Acta por módulo/población/versión, pendientes y decisión de continuar','RF','DP','2.09','Desde 04/11 al cumplir criterios','Casos críticos y ciclos requeridos completos. Firmas/evidencias. No cambia autoridad SGM por sí sola.')
);
for(const t of wbs.filter(t=>t.id.startsWith('3.')&&t.id.endsWith('.06')))t.pred+=';2.09';
add('SMK-01','TRANSVERSAL','Smoke de flujo productivo controlado','Módulo incluido, versión y usuarios habilitados, control de efectos externos','Ingresar con rol, consultar dato vigente, recorrer flujo mínimo, calcular/guardar y verificar estado/acuse autorizado','Flujo mínimo operativo y trazable. No duplica documentos ni comunica al proveedor desde dos sistemas. No equivale a UAT completo.');
add('UAT-OC-PAR-01','M05','OC valorizada en Connexa y DIARCO/SGM','Misma OC vinculada, corte/lista/versiones y cálculo independiente aprobados','Comparar cabecera y cada línea: unidad, cantidad, precio, descuentos, internos, IVA, redondeos y total','Diferencia por campo registrada. Cumple tolerancias aprobadas. DIARCO/SGM sigue válido durante paralelo.');
add('UAT-OC-PAR-02','M05','Diferencia de valorización fuera de tolerancia','OC de prueba con desvío controlado, sin efecto sobre proveedor','Comparar, registrar causa/dueño, corregir configuración o dato y repetir','No se acepta el módulo por coincidencia parcial o por totales compensados. No se sobreescribe la información oficial para hacer coincidir resultados.');
risks.push(['R10','Confundir paralelo productivo con nueva autoridad','IT','Alta','Se cambia stock/pendiente o se duplica emisión al proveedor durante comparación','SGM válido. Identificación cruzada, emisor único y pruebas de no duplicación.','D06']);

sources.push(
 ['S14','Drive compartido / IMPLEMENTACION','Consultado 29/10/2026','Repositorio del equipo indicado por usuario. IMPLEMENTACION es la carpeta principal para el plan. Sólo lectura.','https://drive.google.com/drive/folders/16nz4aDlr91-vfIEMitnNC3J1JvD3MVd2'],
 ['S15','Plan_Connexa_20261016.pdf','Compartido 19/10/2026','Módulos, validadores e infraestructura AP/PDA. Fechas y corte total quedan subordinados a S10/S13 por instrucción del usuario.','https://drive.google.com/file/d/15phYIe_bxgcxKCC2tlU0dLbj8AQxeKlH/view'],
 ['S16','Resumen ejecutivo post reuniones 20/10','21/10/2026','Aprobación única OC, OC madre/PDA, gobierno de maestros y compromisos VKM. No prueba que acciones posteriores se cumplieron.','https://drive.google.com/file/d/12nzA5UzuvW4hFuwNvo7B9BM548QpNfdr/view'],
 ['S17','Resumen reuniones 20/10','Compartido 21/10/2026','Casos de compras/logística y conciliación de facturas B2. Compromisos históricos por verificar.','https://drive.google.com/file/d/1Lv8NQqOtdMPTBJGtMdPZ7aL9dbVM2H1D/view'],
 ['S18','Estrategia en IMPLEMENTACION','Compartido 19/10/2026','Versión PDF de la Estrategia rectora local. Convivencia gradual y separación disponibilidad/adopción.','https://drive.google.com/file/d/1Ef2XfwjCcZG5W82jWGe_biuLPYbcQVv8/view']
);
export const nominees={
 M01:'Auditoría / Administración de Datos Maestros (designar persona)',
 M02:"Liliana D'Amico (sugerida por antecedentes)",
 M03:'Sebastián, apellido a confirmar (sugerido por antecedentes)',
 M04:'Romina Garfi (sugerida por antecedentes)',
 M05:'Romina Garfi (sugerida por antecedentes)',
 M06:'Ureña / Pichinini (confirmar nombres y titular)',
 M07:'Auditoría (designar persona)',
 M08:'Christian Rojas / Compras (confirmar titular)',
 M09:'Liliana / Logística CD (confirmar titular)',
 M10:'IT + Control de Stock (designar personas)'
};
for(const m of modules){
 if(['M01','M02','M04','M05','M06','M07','M08','M09'].includes(m.id))m.source+='; S15; S16';
}
modules.find(m=>m.id==='M01').own='Administración de Datos Maestros asegura integridad. Auditoría valida controles/excepciones. Comercial decide surtido. Acordar persona por función y segregación.';
modules.find(m=>m.id==='M05').do[0]='Definir generación y aprobación única en Connexa, transmisión a SGM sin segunda autorización y cierre de pendientes.';
modules.find(m=>m.id==='M05').tests[0][3]+=' SGM no exige una segunda autorización de la OC ya aprobada en Connexa.';
modules.find(m=>m.id==='M05').tests.push(['OC madre e hija por recepción PDA','Madre aprobada, cantidades y reglas de vigencia/saldo definidas','Recibir parcialmente por PDA, generar hija, consultar saldo e intentar excederlo','Hija vinculada a madre con cantidades realmente recibidas. Saldo actualizado una vez. Exceso rechazado conforme a la regla acordada.']);
const gm=gaps.find(g=>g[0]==='GAP-03');gm[3]='B1 documentado, reglas por cerrar';gm[4]='S16 documenta validación OC madre/PDA. Confirmar vigencia/cambio de lista y saldo antes de aceptarla.';gm[5]+='; S16';
const gr=gaps.find(g=>g[0]==='GAP-04');gr[3]='B1 documentado, contrato pendiente';gr[4]='Redespacho prioritario documentado. Verificar devolución VKM comprometida 27/10 y distinguir preparado/despachado/no preparado.';gr[5]+='; S16; S17';
decisions[6][5]='Aprobación única documentada. Confirmar umbral automático, vigencia y cierre de OC madre/abierta según S16/S17.';
add('UAT-M05-3','M05','OC madre e hija por PDA','Madre y esperado de saldo/vigencia aprobados. Recepción y usuario autorizados','Recibir parcialmente, generar hija, conciliar saldo y probar sobre-recepción','Hija ligada a madre por cantidad recibida. Saldo consume una vez. Exceso bloqueado. Sin duplicar recepción.');
add('UAT-M09-3','M09','Redespacho prioritario sin doble preparación','Contrato VKM acordado para preparado/despachado/no preparado','Procesar retorno parcial y validar el pendiente/redespacho','La mercadería preparada no despachada conserva identidad y prioridad definida. No se vuelve a preparar por duplicación.');
wbs.push(
 task('2.12','M06','Confirmar AP, Wi-Fi y PDA por sucursal piloto','Inventario de equipos, red probada y responsable de disponibilidad','IT','IT','1.05;2.03','Antes del paralelo PDA','Recepción con lectura y comunicación probadas. Contacto histórico Jorge Borjas a confirmar, proveedor e Infra coordinados.'),
 task('2.13','M09','Verificar devolución Valkimia y elegir API/Excel','Contrato mínimo/plantilla validada, plazo y responsable externo','LZ','LZ','1.04;2.02','Antes del paralelo de distribución','No se presume cumplido el compromiso 27/10. Alternativa elegida y prueba de ida/retorno con CD/VKM.'),
 task('2.14','M05','Validar OC madre, hija y aprobación única','Caso PDA y política de vigencia/saldo con evidencia','RF','DP','2.04;3.05.04;2.12','Durante paralelo del circuito','Cantidades, valorización y pendientes conciliados. Sin reaprobar en SGM ni duplicar documento.'));
// Activities are sequenced in the workbook by WBS, not by the order of later steering additions.
wbs.sort((a,b)=>a.id.localeCompare(b.id,'en',{numeric:true}));
wbs.find(t=>t.id==='3.06.06').pred+=';2.12';
wbs.find(t=>t.id==='3.09.06').pred+=';2.13';
uat.find(r=>r[0]==='UAT-M05-1')[6]+=' SGM no requiere segunda autorización de una OC aprobada en Connexa.';

sources.push(
 ['S19','Relanzar Recepción e Inventarios','22/10/2026','Disponibilidad y confiabilidad de stock se validan por separado. Wi-Fi, PDA, tienda escuela y primeras sucursales pendientes.','https://drive.google.com/file/d/13gg2896DrzNJE-QJPVw9ZjxIwO77xM82/view'],
 ['S20','Equipo técnico SM-MO-EWE','22/10/2026','Pruebas parciales informadas; pendientes SGM, autorizaciones, remitos, túnel, maestros y PDA/QR. No acredita cierre del 26/10.','https://drive.google.com/file/d/1NJY0-0vUk1PjiCopLtRTub1ZE-hMo3Hx/view'],
 ['S21','Equipo técnico MO-EWE','21/10/2026','OC madre demostrada. Concurrencia de recepciones y cambio de lista todavía a validar.','https://drive.google.com/file/d/19o9Yfk5MbfNNvdoITYqZy0iqB2lQ-yw1/view'],
 ['S22','Auditoría','20/10/2026','Guillermo Alvez, interlocutor. Gobierno de datos y workflows requieren definición organizativa.','https://drive.google.com/file/d/12NzBdTsjvkwqv7ZnndETBb2hQuCScixH/view'],
 ['S23','Compradores','20/10/2026','Romina Garfi, Roxana Frutos, Paloma Romero y Diego Baldi, interlocutores. OC madre y descuentos requieren pruebas.','https://drive.google.com/file/d/1QRjn1y4a-0DLcG3nCLujM8VaB0FBFPzl/view'],
 ['S24','Logística y Valkimia','20/10/2026','Christian Rojas/Gastón en Logística. API/Excel y redespachos no son una especificación aprobada.','https://drive.google.com/file/d/1aY5pXBry83kI8Fs4pHE2cmezpGWFic3r/view'],
 ['S25','Listas de proveedores','13/10/2026','Sebastián Basconcelos según esta minuta. Reglas de netos, precedencia y bonificaciones a validar.','https://drive.google.com/file/d/14fA4uzvnh88GG3A8Puim1tiVch5RGl3A/view'],
 ['S26','Pendientes de implementación','19/10/2026','Identifica interlocutores y deja QX/reposición automática para después de estabilización, fin B2. Confirmar frontera.','https://drive.google.com/file/d/1UD6RZoactv23cY9J6RaK5-qGq5neW8DX/view'],
 ['S27','Informe ejecutivo 23/10','23/10/2026','Última evidencia de reuniones al 22/10. No acredita cierre posterior de recuperación, integración o aceptación B1.','https://drive.google.com/file/d/1MiOVTdg-nJS0WnxPQHmkiJBW_sF3PKtP/view'],
 ['S28','Clusters y segmentos','20/10/2026','Liliana D’Amico. Seis segmentos son propuesta, modelo definitivo pendiente de simulación de categoría.','https://drive.google.com/file/d/1aeoaYyiU3w15atsmD3zDT3W_ZMS2pfr0/view'],
 ['S29','Contratos Valkimia','20/10/2026','Gustavo Palacios y Fernando de Pedro. Excel sigue en evaluación. No asumir disponible.','https://drive.google.com/file/d/1Q5bV7YBnVGcCHOKnk8j_ZhWpfEJHOINn/view'],
 ['S30','Conciliación de facturas','20/10/2026','Walter Sosa y Guillermo Alvez. Triple control OC/recepción/factura corresponde a Bloque 2.','https://drive.google.com/file/d/1T297puOriKOsheglNGY-Sxj4W4aJKlM9/view']
);
nominees.M01='Guillermo Alvez (Auditoría); designar Administración de Datos Maestros';
nominees.M03='Sebastián Basconcelos (según minuta 13/10; confirmar designación)';
nominees.M06='Fernando Ureña / Cecilia Camus / Javier Dafonte / Rodolfo Herlein (elegir titular)';
nominees.M07='Guillermo Alvez / Auditoría (confirmar titular operativo)';
nominees.M08='Christian Rojas / Compras (separar demanda comercial de ejecución logística)';
nominees.M09='Christian Rojas / Gastón (Logística), enlace Comercial a designar';
nominees.M04='Romina Garfi, Carolina Tavernisse (Non-Food), Camila Klipauka (Perfumería), Marcelo Cingolani, Diego Baldi (Perecederos), Paloma Romero (Barrio)';
nominees.M05=nominees.M04;
nominees.M07='Guillermo Alvez / Javier Dafonte';
nominees.M08="Christian Rojas (Logística) / Liliana D'Amico, Carolina Tavernisse (Compras)";
nominees.M10='IT + Control de Stock + Hernán López (líder SGM DIARCO)';
for(const [id,s]of [['M01','S22'],['M02','S28'],['M03','S25'],['M04','S23; S26'],['M05','S20; S21; S23'],['M06','S19; S20'],['M07','S19; S20'],['M09','S24; S29'],['M10','S19; S20; S27']])modules.find(m=>m.id===id).source+='; '+s;
modules.find(m=>m.id==='M06').do[0]='Revisar cuadro de controles de tienda escuela, recepción, ajustes, decomisos y devoluciones, con autorización, remito y numeración SGM.';
modules.find(m=>m.id==='M07').do[0]='Preparar foto de stock SGM con movimientos pendientes regularizados, mapas/QR y validación PDA; distinguir toma y aplicación del resultado.';
gaps.push(
 ['GAP-10','M04','Migración QX y reposición automática','B2 según Pendientes, ratificar','No confundir uso del sugerido en B1 con cambio del motor/reposición automática legado.','S26'],
 ['GAP-11','M06','Recuperación integral posterior al incidente','B1 prerrequisito','Obtener evidencia de cierre de los compromisos 26–27/10. Autorización, remitos y numeración SGM.','S19; S20; S27'],
 ['GAP-12','M07','Confiabilidad del stock inicial','B1 prerrequisito','Regularizar movimientos antes de interpretar diferencias. Autoridad SGM no equivale a saldo ya conciliado.','S19; S27'],
 ['GAP-13','M02','Modelo final clusters/segmentos','B1 detalle pendiente','Simular categoría real con Liliana. Seis segmentos no son decisión definitiva.','S28']
);
decisions.push(
 ['D11','Evidencia de recuperación y calidad de stock','IT','Antes del paralelo afectado','Sin decidir','Obtener resultado de compromisos 26–27/10, pruebas tienda escuela y base conciliada.','S19; S20; S27'],
 ['D12','Secuencia de primeras sucursales, equipos y acompañamiento','LD','Antes de oleadas PDA','Sin decidir','Lista inicial, condición Wi-Fi/PDA por sitio, referentes y cobertura. Sin deducir 43 sucursales listas.','S19'],
 ['D13','Frontera QX/reposición automática y complejidad de reglas','DP','Antes de confirmar capacidad B1','Sin decidir','Conservar sugerido B1. No migrar QX/reposición automática ni acuerdos avanzados por inferencia.','S23; S26']
);
wbs.push(
 task('2.15','M06','Acreditar recuperación y cierre de movimientos en SGM','Evidencia de autorización, procesamiento, remito y numeración','ZT','LZ','2.03;2.05','Antes del paralelo de recepción/ajustes','Operaciones completas en SGM, no sólo registros en tabla. Bloqueos nominales y siguiente acción.'),
 task('2.16','M07','Certificar base y salida de inventario','Stock inicial, movimientos pendientes, mapa/QR y aplicación en SGM','RF','DP','2.04;2.12','Antes del inventario piloto','Fuente oficial y corte documentados. Diferencias no se atribuyen a merma sin revisar integridad de registros.'),
 task('2.17','M10','Confirmar sincronización y coordinación de cargas','Evidencia de OC/transferencias/pendientes actualizados, sin pisar datos','IT','IT','2.02;2.03','Antes del paralelo de cada consumidor','Conectividad/túnel probado y secuencia de CDC/cargas acordada. Tener servidor disponible no acredita interfaz.'),
 task('2.18','M02','Validar categoría piloto y propuesta de surtido','Simulación con Liliana y resolución de clasificaciones nulas','RF','DP','3.02.02','Antes de aceptar surtido de primera oleada','Reglas y segmentos aprobados sobre datos reales. No imponer seis segmentos sin acuerdo.'),
 task('2.19','M01','Definir función Datos Maestros y separación de control','RACI de solicitante/administrador/auditor/comercial y workflow de cambios','LD','DP','2.01','Antes de originar maestros en Connexa','Función operativa y control con personas/tiempo definidos. Auditoría no asume automáticamente administración cotidiana.')
);
wbs.find(t=>t.id==='3.06.06').pred+=';2.15;2.17';
wbs.find(t=>t.id==='3.07.06').pred+=';2.16';
wbs.find(t=>t.id==='3.01.05').pred+=';2.19';
wbs.find(t=>t.id==='3.02.05').pred+=';2.18';
add('UAT-M05-4','M05','Recepciones simultáneas contra OC madre','Madre con saldo limitado y dos sucursales/operadores de prueba','Intentar consumos simultáneos cuya suma supera saldo','Nunca se excede cantidad autorizada. Ganador/rechazo son trazables y reintentar no duplica consumo.');
add('UAT-M06-3','M06','Devolución/decomiso con autorización y remito SGM','Documento, causa, permisos y esperado aprobados','Registrar, autorizar, sincronizar y consultar procesamiento final SGM','Movimiento, remito y numeración completos una sola vez. Una fila en staging no se acepta como cierre.');
add('UAT-M07-3','M07','Foto inicial y salida de inventario','Movimientos pendientes regularizados, mapa/QR y stock SGM de corte','Cargar base, contar con PDA, cerrar, exportar y aplicar según procedimiento','Correspondencia de artículo/ubicación y diferencia explicable. Aplicación en SGM validada por rol autorizado.');
add('UAT-M10-3','M10','OC/transferencias actualizadas tras reconexión','Sincronización habilitada con ventana y latencia acordadas','Cambiar documento de prueba, observar destino y ejecutar carga periódica controlada','Destino se actualiza dentro del acuerdo. Carga posterior no pisa estado válido ni reabre pendientes cerrados.');
risks.push(['R11','Stock oficial con movimientos aún no incorporados','DP','Alta','Diferencia de inventario se atribuye a merma sin conciliar registros','Separar autoridad SGM de calidad de saldo. Certificar foto inicial y movimientos antes de concluir.','D11']);
wbs.sort((a,b)=>a.id.localeCompare(b.id,'en',{numeric:true}));

export const gates=[
 ['G0','Inicio comprometido','Alcance B1, roles nominales, tiempo autorizado, piloto y soporte asignados.','SP','Acta inicial y decisiones D01 a D05/D08'],
 ['G1','Preparación y UAT','Datos y permisos certificados. 100% casos críticos pasan. Sin defectos críticos/altos abiertos en el circuito.','DP','UAT, casos dorados y ficha de referente'],
 ['G2','Piloto aceptado','Dos ciclos completos propuestos, uno con excepción. Conciliación sin diferencias críticas. Contingencia y soporte ensayados.','SP','Informe piloto y actas de dueños'],
 ['G3','Oleada autorizada','Usuarios preparados, soporte cubierto, corte/retorno validado por IT y recomendación conjunta.','SP','Acta go/no-go y bitácora'],
 ['G4','Operación transferida','Cinco días operativos estables propuestos. L1/titular/suplente demuestran autonomía y pendientes asignados.','SP','Acta de transferencia y métricas']
];
