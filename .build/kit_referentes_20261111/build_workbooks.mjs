import fs from 'node:fs/promises';
import path from 'node:path';
import {FileBlob, SpreadsheetFile, Workbook} from '@oai/artifact-tool';

const root='C:/PROYECTOS/ETL/CNX_BLOQUE1';
const build=path.join(root,'.build/kit_referentes_20261111');
const out=path.join(root,'outputs/20261110');
await fs.mkdir(out,{recursive:true});
const minute='https://drive.google.com/file/d/1wL4BTWbnnzcz03bo_aF6JV7SFlqf_dw_/view';
const input=await FileBlob.load(path.join(build,'fuente_20261110.xlsx'));
const wb=await SpreadsheetFile.importXlsx(input);
function put(sheet,cell,value){wb.worksheets.getItem(sheet).getRange(cell).values=[[value]]}
// Preserve the user's 10/11 designations and recorded commitments. Add only traceable status.
put('Gobierno','C8','Líder de Implementación DIARCO (LD)');
put('Gobierno','E8','Coordina referentes, plan y bloqueos internos; facultad de gates y suplencia por acordar.');
put('Asignaciones','A3','Nómina y compromiso cargados el 10/11. Ratificar persona, jefatura real, horas y agenda; la aceptación funcional y productiva se registran por circuito.');
put('Resumen','A9','Filas de asignación B1');
put('Resumen','A10','Equipos completos según control');
put('Decisiones','E7','En análisis');
put('Decisiones','H7','Eduardo Mañe confirmado como líder DIARCO el 10/11. Suplencia y facultades por precisar; sponsor según Gobierno.');
put('Decisiones','K7',minute);
put('Decisiones','E8','En análisis');
put('Decisiones','H8','La planilla contiene titulares/suplentes y compromiso cargado. Falta ratificación individual, dueños funcionales y capacidad protegida por frente.');
put('Decisiones','K8',minute);
put('Decisiones','E19','En análisis');
put('Decisiones','H19','Pablo Duplessy figura confirmado como CMZ en Gobierno; convocatorias, materiales, práctica y aptitud por circuito requieren agenda y evidencia.');
put('Decisiones','K19',minute);
for(const [row,owner] of [[7,'Eduardo Mañe'],[8,'Eduardo Mañe'],[120,'Pablo Duplessy'],[121,'Pablo Duplessy']]){
  put('WBS',`J${row}`,'En curso');put('WBS',`K${row}`,owner);
}
put('WBS','M7',minute);put('WBS','M8',minute);
put('WBS','M120',minute);
// Source row is informational; no closing decision is inferred from the minute.
wb.worksheets.getItem('Fuentes').tables.items[0].rows.add(null,[['S42','Confirmación de referentes DIARCO–Connexa','10/11/2026','Eduardo Mañe confirmado LD. Nombres/roles de frentes parcialmente mencionados; horas, aceptaciones y gates requieren validación.',minute]]);
// Textual source pointers were not formulas and became stale when M05 was split.
const eq=wb.worksheets.getItem('Equipo circuitos');
const refs={5:'Asignaciones!F6:G6',6:'Asignaciones!F7:G7',7:'Asignaciones!F8:G8',8:'Asignaciones!F9:G9; M05 F14:G14',9:'Asignaciones!F9:G9; M05 F12:G12',10:'Asignaciones!F9:G9; M05 F11:G11',11:'Asignaciones!F9:G9; M05 F13:G13',12:'Asignaciones!F9:G9; M05 F15:G15',13:'Asignaciones!F10:G10',14:'Asignaciones!F16:G16',15:'Asignaciones!F16:G16',16:'Asignaciones!F17:G17',17:'Asignaciones!F18:G18',18:'Asignaciones!F19:G19',19:'Asignaciones!F20:G20'};
for(const [r,ref] of Object.entries(refs))eq.getRange(`H${r}`).values=[[ref]];
put('Equipo circuitos','E7','Christian Escudero');
put('Matriz circuitos','E7','Christian Escudero');
put('Formacion circuitos','E10','Christian Escudero');
put('Aceptacion circuitos','E7','Christian Escudero');
put('Equipo circuitos','O11','M04 tiene Carolina/Liliana; M05 F13/G13 tiene Liliana/Carolina. Ratificar roles por módulo y no duplicar horas.');
put('Equipo circuitos','O12','M04 y M05 tienen parejas distintas para Barrio. Ratificar responsabilidades por módulo; suplente M05 figura sólo como Nahuel.');
for(const r of [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]){
  const s=wb.worksheets.getItem('Formacion circuitos');
  s.getRange(`I${r}`).values=[['Pablo Duplessy (CMZ; agenda y aptitud por registrar)']];
}
for(const [name,rows,cols] of [['Asignaciones',10,2],['Capacidad',6,2],['Guia matriz',4,14]]){
  const pane=wb.worksheets.getItem(name).freezePanes;
  pane.freezeRows(rows);pane.freezeColumns(cols);
}
wb.recalculate();
for(const [sheet,range,file] of [['Gobierno','A5:E13','gobierno.png'],['Asignaciones','A10:Q15','m05.png'],['Decisiones','A5:K9','decisiones.png']]){
  const p=await wb.render({sheetName:sheet,range,scale:1.2,format:'png'});
  await fs.writeFile(path.join(build,file),new Uint8Array(await p.arrayBuffer()));
}
const planOutput=path.join(out,'DIARCO_Bloque1_Plan_v0.6_20261110.xlsx');
const plan=await SpreadsheetFile.exportXlsx(wb);await plan.save(planOutput);

// Action tracker for the group leads: source names are proposals to ratify on 11/11.
const fronts=[
['C01','Datos Maestros','M01','Antoni Serrano','Guillermo Alvez Pinheiro','Maestro: depuración, alta/cambio, duplicados y validación logística','Dueño del maestro y fuente prevalente por atributo'],
['C02','Surtido transversal','M02',"Liliana D'Amico",'Carolina Tavernisse','Modelo inicial por categoría, asociación artículo–sucursal y ejemplo Menaje','Diseño funcional inicial y criterio de publicación'],
['C03','Listas y acuerdos','M03','Sebastián Basconcelos','Christian Escudero','Lista vigente, cambios pendientes, vigencias, descuentos y condiciones de compra','Cálculo esperado por línea y aprobación comercial/fiscal'],
['C04','Perfumería y Limpieza','M04/M05','Romina Garfi / Camila Klipauka','Camila Klipauka / Romina Garfi','Tres proveedores; bultos, descuentos y OC valorizada','Ratificar titulares distintos de M04 y M05'],
['C05','Carnes','M04/M05','Facundo Toledo','Cristian Escudero','Tres proveedores; pesables, unidades, recepción parcial y OC','Reglas de cantidad/peso y autorizaciones'],
['C06','Perecederos','M04/M05','Roxana Furtos / Roxana Frutos','Diego Baldi / Darwin Leon','Tres proveedores; frecuencia, vida útil, cobertura y entregas parciales','Corregir grafía y suplente por módulo'],
['C07','No Comestibles','M03/M04/M05/M10',"Liliana D'Amico / Carolina Tavernisse",'Carolina Tavernisse / Liliana D’Amico','Tres proveedores; lista, sugerido, aprobación, OC y SGM','Ratificar inversión de roles M04/M05 y lote piloto'],
['C08','Barrio','M04/M05','Paloma Romero / Cecilia Camus','Cecilia Camus / Nahuel','Formato/sitios, categorías, tres proveedores y OC','Nombre completo de Nahuel y roles por módulo'],
['C09','OC madre Mayorista','M05/M06','Por designar','Marcelo Cingolani','Saldo/vigencia madre-hija, PDA, concurrencia y sobre-recepción','Nombrar titular y aprobar reglas de OC madre'],
['C10','Recepción Mayorista','M06','Fernando Ureña','Rodolfo Herlein','Documento, recepción parcial, PDA, remito y efecto final en SGM','Hardware/Wi-Fi por sitio y aceptación de operación'],
['C11','Recepción Barrio','M06','Pablo Pichinini','Cecilia Camus','Recepción parcial, conectividad, recuperación y stock SGM','Sitios, PDA y validación de usuarios'],
['C12','Inventarios y planos','M07','Javier Dafonte / Diego Barrese','Fabio Basoler / Diego Llañez','Planos, toma offline, recuento, reportes y ajuste SGM','Separar dueño de planos, toma y Auditoría'],
['C13','PDD / planificación comercial','M08',"Liliana D'Amico",'Carolina Tavernisse','Necesidad, cobertura, prioridades, stock neto y backlog','Acordar enlace y validación de Logística'],
['C14','Distribución / Valkimia','M09','Christian Rojas','Gaston Galiano','Transferencia, carga transitoria y retorno de estados','Contrato/VPN/TEST; carga manual aún sin aprobación'],
['C15','Stock e integración SGM','M10','Hernan López / equipo stock','Christian Rechtman / Yahiris Moreno','Stock oficial, pendientes, conciliación y reconexión','Responsable IT y control de cambios de dueño de dato']
];
const tracker=Workbook.create();
const guide=tracker.worksheets.add('Inicio');
const front=tracker.worksheets.add('Frentes');
const tasks=tracker.worksheets.add('Tareas');
for(const s of [guide,front,tasks])s.showGridLines=false;
const navy='#102B4D',teal='#168DA4',pale='#EEF4F6',amber='#F0AC1E',ink='#18324D';
guide.getRange('A1:H1').merge();guide.getRange('A1').values=[['DIARCO · Trabajo de referentes Bloque 1']];
guide.getRange('A2:H2').merge();guide.getRange('A2').values=[['Reunión miércoles 11/11/2026 14:00 · Primera capacitación jueves 12/11/2026 10:00']];
guide.getRange('A4:B11').values=[
 ['1. Confirmar','Ratificar titular, suplente, dueño funcional, dedicación y jefatura por módulo.'],
 ['2. Elegir lote','Definir población, tres proveedores en compras o documentos/sitios equivalentes.'],
 ['3. Preparar','Entregar datos reales SGM, reglas, autorizadores, usuarios y esperado aprobado.'],
 ['4. Aprender','Participar en la capacitación y demostrar caso normal y excepción.'],
 ['5. Probar','Ejecutar en TEST con versión, corte, resultados y capturas; abrir tickets.'],
 ['6. Reprobar','Verificar corrección en otra ejecución sin borrar la anterior.'],
 ['7. Aceptar','El dueño funcional acepta el alcance probado; gate productivo es separado.'],
 ['8. Operar','Paralelo controlado con SGM vigente; expandir sólo con autorización.']
];
guide.getRange('A13:H13').merge();guide.getRange('A13').values=[['Cómo usar las hojas']];
guide.getRange('A14:H14').merge();guide.getRange('A14').values=[['Frentes: confirmar personas y próximo entregable. Tareas: filtrar el circuito, asignar ejecutor y fecha, registrar estado y evidencia.']];
guide.getRange('A16:H16').merge();guide.getRange('A16').values=[['La designación de Dirección no equivale a aceptación individual, aptitud, UAT ni autorización productiva.']];
guide.getRange('A18:H18').merge();guide.getRange('A18').values=[['Fuente: minuta de confirmación 10/11 + plan DIARCO v0.5 editado por el usuario. Nombres ambiguos se ratifican el 11/11.']];
guide.getRange('A1:H1').format={fill:navy,font:{name:'Aptos',size:20,bold:true,color:'#FFFFFF'}};
guide.getRange('A2:H2').format={fill:teal,font:{name:'Aptos',size:12,bold:true,color:'#FFFFFF'}};
guide.getRange('A1:H1').format.rowHeight=43;
guide.getRange('A2:H2').format.rowHeight=30;
guide.getRange('A13:H13').format={fill:navy,font:{name:'Aptos',size:13,bold:true,color:'#FFFFFF'}};
guide.getRange('A16:H16').format={fill:'#FFF1CD',font:{name:'Aptos',size:11,bold:true,color:ink}};
guide.getRange('A4:B11').format.font={name:'Aptos',size:11,color:ink};
guide.getRange('A4:A11').format.font={name:'Aptos',size:11,bold:true,color:ink};
guide.getRange('A4:A18').format.rowHeight=29;
guide.getRange('A1:H1').format.rowHeight=43;
guide.getRange('A2:H2').format.rowHeight=30;
guide.getRange('A:A').format.columnWidth=27;guide.getRange('B:B').format.columnWidth=92;
guide.getRange('C:H').format.columnWidth=13;
const fHeaders=['Circuito','Frente','Módulos','Titular/es propuestos','Suplente/s propuestos','Pedido específico','Definición pendiente','Dueño funcional','Jefatura','Horas confirmadas','Agenda próxima','Estado designación','Próximo entregable','Responsable','Fecha objetivo','Evidencia / acta'];
front.getRange('A1:P1').values=[fHeaders];
const frontRows=fronts.map(x=>[...x,'','','','11/11 14:00 (reunión)','Por ratificar individualmente','Ratificar roles y acordar lote/casos','',null,'']);
front.getRange('A2:P16').values=frontRows;
front.getRange('A1:P1').format={fill:navy,font:{name:'Aptos',size:11,bold:true,color:'#FFFFFF'},wrapText:true};
front.getRange('A2:P16').format.font={name:'Aptos',size:10,color:ink};
front.getRange('A2:P16').format.wrapText=true;
front.getRange('A1:P1').format.rowHeight=35;
front.getRange('A2:P16').format.rowHeight=43;
const fWidths=[13,27,20,30,30,56,46,22,20,19,26,25,39,24,18,40];
fWidths.forEach((w,i)=>front.getRangeByIndexes(0,i,17,1).format.columnWidth=w);
front.freezePanes.freezeRows(1);
front.getRange('L2:L100').dataValidation={rule:{type:'list',values:['Por ratificar individualmente','Confirmado','Pendiente','En trabajo','No aplica']}};
front.tables.add('A1:P16',true,'T_Frentes');
const tHeaders=['ID','Circuito','Frente','Etapa','Tarea del grupo','Entregable / criterio','Responsable rol','Persona asignada','Fecha objetivo','Estado','Evidencia / enlace','Bloqueo / próxima acción'];
tasks.getRange('A1:L1').values=[tHeaders];
const all=[];
for(const [id,name,mods,ts,ss,specific,pending] of fronts){
 const defs=[
 ['G0','Ratificar titular, suplente, jefatura, dueño, horas y agenda','Compromiso individual y liberación de tiempo registrados','Líder DIARCO / jefatura'],
 ['Datos','Delimitar población y elegir lote/documentos reales',specific,'Referente titular'],
 ['Datos','Entregar fuentes SGM y reglas con corte y versión','Datos reproducibles y responsable de su validez','Referente / IT'],
 ['Accesos','Entregar usuarios, roles y autorizadores de TEST y Producción','Matriz nominal; permisos positivos/negativos a probar','Dueño funcional / IT'],
 ['Formación','Asistir a formación y demostrar caso normal y excepción','Aptitud de titular y suplente con evidencia','Titular / suplente'],
 ['UAT','Aprobar esperado y ejecutar casos normales, complejos y de excepción','Cada caso tiene esperado, resultado real, versión y capturas','Dueño / ejecutores'],
 ['Corrección','Registrar desvíos y ejecutar reprueba nueva','Ticket, corrección y nueva ejecución vinculada','Referente / Zeetrex'],
 ['G1','Solicitar aceptación funcional del alcance probado','Acta de dueño con versión, población, reservas y evidencia','Dueño funcional'],
 ['G2','Preparar paralelo y soporte antes de operar','Emisor único, conciliación SGM, L1/L2 y go/no-go','Líder DIARCO / IT']
 ];
 defs.forEach((d,i)=>all.push([`${id}-${String(i+1).padStart(2,'0')}`,id,name,d[0],d[1],d[2],d[3],'',null,'Pendiente','','']));
}
tasks.getRange(`A2:L${all.length+1}`).values=all;
tasks.getRange('A1:L1').format={fill:navy,font:{name:'Aptos',size:11,bold:true,color:'#FFFFFF'},wrapText:true};
tasks.getRange(`A2:L${all.length+1}`).format.font={name:'Aptos',size:10,color:ink};
tasks.getRange(`A2:L${all.length+1}`).format.wrapText=true;
tasks.getRange(`A2:L${all.length+1}`).format.rowHeight=33;
const tWidths=[14,12,28,15,50,60,27,25,18,17,35,43];
tWidths.forEach((w,i)=>tasks.getRangeByIndexes(0,i,all.length+1,1).format.columnWidth=w);
tasks.getRange(`J2:J${all.length+1}`).dataValidation={rule:{type:'list',values:['Pendiente','En curso','Bloqueado','Hecho','No aplica']}};
tasks.freezePanes.freezeRows(1);
tasks.tables.add(`A1:L${all.length+1}`,true,'T_Tareas');
tracker.recalculate();
for(const [sheet,range,file] of [['Inicio','A1:H18','tracker-inicio.png'],['Frentes','A1:H8','tracker-frentes.png'],['Tareas','A1:H10','tracker-tareas.png']]){
 const p=await tracker.render({sheetName:sheet,range,scale:1.2,format:'png'});
 await fs.writeFile(path.join(build,file),new Uint8Array(await p.arrayBuffer()));
}
const trackerOutput=path.join(out,'DIARCO_Kit_Referentes_Trabajo_por_Frente_20261111.xlsx');
const xt=await SpreadsheetFile.exportXlsx(tracker);await xt.save(trackerOutput);
console.log(JSON.stringify({planOutput,trackerOutput,fronts:fronts.length,tasks:all.length,minute}));
