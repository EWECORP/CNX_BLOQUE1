import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

const workspaceDir = 'C:/PROYECTOS/ETL/CNX_BLOQUE1';
const skillDir = 'C:/Users/eduar/.codex/plugins/cache/openai-primary-runtime/presentations/26.1105.12137/skills/presentations';
const buildDir = path.join(workspaceDir, '.build/kickoff_20261110');
const outputDir = path.join(workspaceDir, 'outputs/20261107');
const finalPath = path.join(outputDir, 'DIARCO_Bloque1_Inicio_Referentes_20261110_v1.0.pptx');
const navy = '#17365D';
const teal = '#007A87';
const ink = '#18334F';
const gray = '#4E6274';
const pale = '#F7FAFC';
const white = '#FFFFFF';
const font = 'Arial';

await fs.mkdir(buildDir, {recursive: true});
await fs.mkdir(outputDir, {recursive: true});
const deck = Presentation.create({slideSize: {width: 1280, height: 720}});

function textbox(slide, value, x, y, w, h, size, color = ink, bold = false) {
  const s = slide.shapes.add({
    geometry: 'textbox',
    position: {left: x, top: y, width: w, height: h},
    fill: 'none',
    line: {style: 'solid', fill: 'none', width: 0},
  });
  s.text = value;
  s.text.style = {fontFamily: font, fontSize: size, color, bold};
  return s;
}

function base(title, note = '') {
  const s = deck.slides.add();
  s.background.fill = white;
  textbox(s, title, 64, 48, 1130, 82, 39, navy, true);
  textbox(s, `DIARCO + Zeetrex  ·  Bloque 1                                      ${String(deck.slides.items.length).padStart(2,'0')}`, 64, 668, 1130, 26, 13, gray);
  s.speakerNotes.text = note;
  return s;
}

function rows(title, data, note = '') {
  const s = base(title, note);
  const n = data.length;
  const gap = n >= 5 ? 10 : 15;
  const rowH = n >= 5 ? 91 : n === 4 ? 111 : 139;
  const start = 157;
  data.forEach((d,i) => {
    const y = start + i * (rowH + gap);
    textbox(s, d[0], 67, y, 1080, 35, n >= 5 ? 23 : 26, teal, true);
    textbox(s, d[1], 68, y + 33, 1080, rowH - 32, n >= 5 ? 19 : 22, ink);
  });
  return s;
}

function columns(title, data, note = '') {
  const s = base(title, note);
  const xs = [68, 459, 850];
  data.forEach((d,i) => {
    textbox(s, d[0], xs[i], 176, 340, 76, 30, teal, true);
    textbox(s, d[1], xs[i], 267, 340, 335, 22, ink);
  });
  return s;
}

{
  const s = deck.slides.add();
  s.background.fill = navy;
  textbox(s, 'Inicio del despliegue\nConnexa · Bloque 1', 70, 138, 1080, 188, 55, white, true);
  textbox(s, 'Reunión de referentes  ·  10 de noviembre de 2026', 72, 382, 1080, 66, 27, white);
  textbox(s, 'DIARCO + Zeetrex', 72, 624, 780, 36, 19, white);
  s.speakerNotes.text = 'Abrir con la intención de iniciar el trabajo por circuito. El 10/11 es feriado en CABA y Córdoba; material y recuperación para ausentes. Fuente calendario: https://www.argentina.gob.ar/normativa/nacional/norma-430580/texto';
}

rows('Qué acordamos en esta reunión', [
  ['Personas y tiempo', 'Cada circuito confirma dueño de proceso, referente, suplente, autorizadores y horas protegidas.'],
  ['Datos y usuarios', 'Cada equipo recibe el pedido de datos y entrega su nómina de usuarios con roles y alcance.'],
  ['Próxima práctica', 'Elegimos una sesión común, reservamos taller del circuito y fijamos fecha de devolución.'],
], 'Guion y acta: documentacion/10_reunion_inicio_referentes_20261110.md');

rows('Circuitos que participan', [
  ['Datos y reglas', 'C01 Maestros · C02 Surtido · C03 Listas y acuerdos · C15 Integración SGM.'],
  ['Compras', 'C07 No Comestibles inicia el piloto; C04 Perfumería/Limpieza, C05 Carnes, C06 Perecederos y C08 Barrio preparan sus lotes.'],
  ['Operación', 'C09 OC madre · C10/C11 Recepción · C12 Inventarios · C13 Planificación · C14 Distribución.'],
  ['Apoyo continuo', 'IT DIARCO, mesa de ayuda, gestión del cambio, funcionales y soporte técnico Zeetrex.'],
], 'Fuente: documentacion/07_matriz_sector_circuito.md. La participación y las horas siguen pendientes de confirmación.');

rows('Primera etapa: aprender y preparar', [
  ['1. Inducción', 'Zeetrex muestra el flujo. DIARCO nombra dueño, referente y suplente. La sesión termina con un pedido de datos y fecha de devolución.'],
  ['2. Lote de prueba', 'Compras elige tres proveedores reales. Otros circuitos eligen tres documentos o situaciones equivalentes.'],
  ['3. Usuarios', 'DIARCO define personas, roles, autorizadores, sucursales y segregación. IT y el administrador configuran TEST.'],
  ['4. Práctica individual', 'Titular y suplente ejecutan un caso normal y una excepción con apoyo Zeetrex. Se registra aptitud y evidencia.'],
], 'Detalle: documentacion/11_capacitacion_usuarios_y_accesos.md y 12_lote_pruebas_y_evidencia_referentes.md');

rows('Segunda etapa: probar y operar', [
  ['5. UAT asistida', 'DIARCO ejecuta casos con esperado aprobado. Zeetrex acompaña. Cada resultado conserva versión, dato, documento y evidencia.'],
  ['6. Desvío y reprueba', 'El referente informa el error el mismo día. Zeetrex corrige. DIARCO repite el caso con una ejecución nueva.'],
  ['7. Paralelo y aceptación', 'Comparamos con SGM durante ciclos reales. El dueño acepta el circuito probado; la habilitación productiva se decide por población.'],
], 'Gates G1-G4: documentacion/02_metodo_gobierno_y_soporte.md');

rows('Capacitación con dos horarios', [
  ['Inicio de referentes', 'Martes 10/11. Material y segunda instancia de preguntas para quienes no puedan asistir por el feriado regional.'],
  ['Base común y TEST', 'Jueves 12/11, 10:00. Repetición viernes 13/11, 15:00. Cada persona asiste a una de las dos.'],
  ['Compras, listas y OC', 'Lunes 16/11, 10:00. Repetición jueves 19/11, 15:00. Taller sectorial después de recibir los datos.'],
  ['Operación y surtido', 'Recepción/stock: 24 o 26/11. Surtido/PDD: 01 o 03/12. C14 se agenda cuando exista solución acordada.'],
], 'Agenda propuesta: documentacion/11_capacitacion_usuarios_y_accesos.md. Feriado 09-11/11: https://www.argentina.gob.ar/normativa/nacional/norma-430580/texto');

columns('Tres proveedores para compras', [
  ['Habitual', 'Compra frecuente y lista vigente.\n\nDemuestra propuesta, ajuste, OC, aprobación y traslado a SGM.'],
  ['Regla exigente', 'Precio por sucursal, descuento, volumen o impuesto particular si aplica.\n\nDemuestra cálculo por línea y vigencias.'],
  ['Excepción real', 'Campaña, mínimo, bulto, rechazo, entrega parcial o dato faltante.\n\nDemuestra control y recuperación.'],
], 'Guía: documentacion/12_lote_pruebas_y_evidencia_referentes.md. Elegir tres proveedores distintos; uno puede cubrir varios perfiles.');

rows('Qué entrega cada referente', [
  ['Identidad y población', 'Código SGM y razón social; comprador, SKU, sucursales o CD, volumen normal y pico.'],
  ['Reglas vigentes', 'Lista de precios, fechas, descuentos, impuestos, unidades, bultos, mínimos y condiciones de pago.'],
  ['Documento de referencia', 'Una OC SGM real con líneas y estado, o el documento equivalente de recepción, inventario o distribución.'],
  ['Esperado y aprobación', 'Resultado esperado por paso, dueño que lo aprueba, tolerancia y excepción que se probará.'],
], 'La ficha completa está en documentacion/12_lote_pruebas_y_evidencia_referentes.md.');

rows('Usuarios, roles y autorizadores', [
  ['Nómina nominal', 'Nombre, correo/legajo, jefatura, circuito y alcance por proveedor, artículo, sucursal o CD.'],
  ['Facultades', 'Consultar, cargar, proponer, crear OC, aprobar, rechazar, recibir, ajustar o administrar; límites y suplencias.'],
  ['Segregación', 'Definir quién puede aprobar su propia operación y quién valida cambios de permisos. Probar una acción permitida y una denegada.'],
  ['Dos ambientes', 'Autorizar y comprobar TEST primero. Producción requiere aprobación y evidencia de acceso propias.'],
], 'Formulario: documentacion/11_capacitacion_usuarios_y_accesos.md. No se han configurado usuarios por esta presentación.');

rows('Acceso a TEST y práctica', [
  ['Antes de entrar', 'IT valida identidad. El dueño del proceso aprueba el rol y su alcance. El administrador registra el alta.'],
  ['Primer acceso', 'Cada usuario confirma ingreso con su cuenta y prueba una acción habilitada y otra que debe quedar bloqueada.'],
  ['Taller de circuito', 'Titular y suplente ejecutan con el lote real. Zeetrex acompaña y explica el resultado de cada paso.'],
  ['Evidencia', 'Guardar fecha, ambiente, versión, usuario, caso y capturas o exportaciones sin credenciales.'],
], 'Guías: documentacion/11_capacitacion_usuarios_y_accesos.md y 12_lote_pruebas_y_evidencia_referentes.md');

rows('Desvíos y correcciones', [
  ['Registrar el mismo día', 'Caso, pasos, esperado, observado, impacto, versión y documentos afectados. Abrir ticket por el canal acordado.'],
  ['Decidir el tratamiento', 'Negocio clasifica regla o diferencia; IT revisa integración; Zeetrex diagnostica y corrige defectos.'],
  ['Reprobar', 'DIARCO ejecuta de nuevo y conserva la evidencia anterior. La corrección verbal no cierra el caso.'],
  ['Detener si hay riesgo', 'Duplicación, autorización indebida o diferencia crítica sin explicar detienen nuevas operaciones del circuito.'],
], 'Método y soporte: documentacion/02_metodo_gobierno_y_soporte.md');

rows('Convivencia con SGM', [
  ['Autoridad vigente', 'SGM conserva stock y pendientes oficiales durante la etapa inicial. DIARCO compara contra esa referencia.'],
  ['OC habilitada', 'Connexa la origina y autoriza. SGM la incorpora para recepción y comunicación al proveedor cuando el contrato esté certificado.'],
  ['Un emisor', 'Definir por circuito quién envía al proveedor y verificar que un reintento no duplique OC ni mensaje.'],
  ['Control diario', 'Conciliar identificadores, estados, cantidades y valores. Registrar fallas y activar contingencia acordada.'],
], 'Fuentes: documentacion/02_metodo_gobierno_y_soporte.md y 06_minutas_y_preparacion_paralelo.md.');

rows('Producción gradual', [
  ['Alrededor del 17/11', 'Objetivo propuesto de disponibilidad técnica de los módulos acordados, una semana después de esta reunión.'],
  ['Ingreso por circuito', 'Cada población necesita permisos productivos aprobados, formación, UAT, dos ciclos y decisión de habilitación.'],
  ['Expansión', 'Se amplían proveedores, sucursales y usuarios con evidencia. El dueño funcional acepta; sponsor e IT autorizan el gate operativo.'],
], 'Fuente: documentacion/02_metodo_gobierno_y_soporte.md y 10_reunion_inicio_referentes_20261110.md. La fecha es supuesto de planificación.');

rows('Próximos pasos del equipo', [
  ['10/11 · referentes y dueños', 'Confirmar circuito, titular/suplente, dueños de aceptación y responsables de la nómina de usuarios.'],
  ['12–16/11 · DIARCO', 'Asistir a una sesión común, entregar lote de datos, reglas, OC de referencia y roles/autorizadores.'],
  ['17–24/11 · DIARCO + Zeetrex', 'Practicar, comprobar accesos, ejecutar primeros casos C07 y registrar diferencias con SGM.'],
  ['Cada jueves · líderes', 'Revisar datos pendientes, defectos, capacidad, siguiente prueba y gate por circuito.'],
], 'Calendario detallado: documentacion/09_gantt_integrado_tentativo_bloque1.md. El 10/11 es feriado regional; 09/11 nacional.');

rows('Compromisos que cerramos hoy', [
  ['Quién', 'Dueño, referente, suplente, aprobador de OC, responsable IT y mesa de ayuda por circuito.'],
  ['Qué entrega', 'Lote de tres proveedores o tres casos equivalentes, nómina de usuarios, reglas y documento de referencia.'],
  ['Cuándo y dónde', 'Fecha de devolución, sesión de capacitación elegida, acceso TEST y lugar único para resultados y defectos.'],
], 'Completar el acta de documentacion/10_reunion_inicio_referentes_20261110.md en vivo. No inferir aprobación por asistencia.');

const draftPath = path.join(buildDir, 'draft.pptx');
await (await PresentationFile.exportPptx(deck)).save(draftPath);
for (const [i, slide] of deck.slides.items.entries()) {
  const blob = await deck.export({slide, format: 'png', scale: 0.75});
  await fs.writeFile(path.join(buildDir, `slide-${String(i+1).padStart(2,'0')}.png`), new Uint8Array(await blob.arrayBuffer()));
}
const {finalizePresentation} = await import(pathToFileURL(path.join(skillDir, 'container_tools/artifact_tool_utils.mjs')).href);
const result = await finalizePresentation({
  workspaceDir,
  candidatePath: draftPath,
  finalPath,
  pythonExecutable: 'C:/Users/eduar/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe',
  integrityValidatorPath: path.join(skillDir, 'container_tools/inspect_presentation_package_integrity.py'),
  layoutValidatorPath: path.join(skillDir, 'container_tools/inspect_presentation_layout_geometry.py'),
  layoutArgs: ['--expected-slide-size-emu', '12192000,6858000', '--validate-heading-fit'],
  requiredNativeTableOwnerSlides: [],
  fontPolicy: {basis: 'design', families: [font]},
  verifyArtifactToolImport: true,
  receiptPath: path.join(buildDir, 'validation-v1.0.json'),
});
console.log(JSON.stringify({slides: deck.slides.items.length, finalPath, result}, null, 2));
