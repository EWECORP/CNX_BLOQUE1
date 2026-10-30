import fs from 'node:fs/promises';
import path from 'node:path';
import {FileBlob,SpreadsheetFile} from '@oai/artifact-tool';

const root=path.resolve(import.meta.dirname,'..');
const source=path.join(root,'outputs/20261029/DIARCO_Bloque1_Plan_v0.2.xlsx');
const target=path.join(root,'outputs/20261029/DIARCO_Bloque1_Plan_v0.4.xlsx');
const preview=path.join(root,'.build/previews_v03');
await fs.mkdir(preview,{recursive:true});
const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(source));
const sh=n=>wb.worksheets.getItem(n);
const put=(s,c,v)=>{s.getRange(c).values=[[v]];};
const row=(s,n,vals)=>{s.getRange(`A${n}:${column(vals.length)}${n}`).values=[vals];};
const column=n=>{let x='';while(n){x=String.fromCharCode(65+(n-1)%26)+x;n=Math.floor((n-1)/26);}return x;};
function extend(s,name,range){const t=s.tables.items.find(x=>x.name===name);if(!t)throw Error(`Missing table ${name}`);t.delete();s.tables.add(range,true,name);}
function cloneRow(s,from,to,last){s.getRange(`A${to}:${last}${to}`).copyFrom(s.getRange(`A${from}:${last}${from}`),'all');}
const navy='#19334C',amber='#FFF2CC';

// RACI: retain the existing 11 columns and add the IT direction link and change management.
{
 const s=sh('RACI');
 put(s,'N5','CIO');put(s,'O5','CMZ');
 s.getRange('N5:O5').format={fill:navy,font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'},horizontalAlignment:'center',verticalAlignment:'center',wrapText:true,rowHeight:40};
 s.getRange('N5:O29').format.columnWidth=12;
 s.getRange('N6:O29').format.horizontalAlignment='center';
 for(let r=6;r<=26;r++){s.getRange(`N${r}:O${r}`).format.fill=(r%2===0?'#FFFFFF':'#F1F4F7');}
 const assignments={
  RC01:['R','I'], RC02:['C','I'], RC03:['I','I'], RC04:['I','I'], RC05:['C','I'],
  RC06:['C','I'], RC07:['I','R'], RC08:['I','C'], RC09:['I','C'], RC10:['I','I'],
  RC11:['I','C'], RC12:['C','C'], RC13:['C','I'], RC14:['C','I'], RC15:['I','C'],
  RC16:['I','C'], RC17:['C','I'], RC18:['C','I'], RC19:['I','R'], RC20:['C','C'], RC21:['I','R']
 };
 for(let r=6;r<=26;r++){const id=s.getRange(`A${r}`).values[0][0];s.getRange(`N${r}:O${r}`).values=[assignments[id]];}
 const entries=[
  ['RC22','Asignar equipo IT DIARCO y cobertura','A','R','I','I','I','C','R','C','I','I','I','R','I'],
  ['RC23','Planificar formación, prácticas y adopción','I','C','C','C','I','C','I','A','R','I','I','I','R'],
  ['RC24','Acordar titular técnico L2 por circuito','I','C','I','I','I','C','C','A','I','R','C','C','I']
 ];
 entries.forEach((v,i)=>{const r=27+i;s.getRange(`A${r}:O${r}`).format.rowHeight=34;s.getRange(`A${r}:O${r}`).format.wrapText=true;s.getRange(`A${r}:O${r}`).format.fill=i%2?'#F1F4F7':'#FFFFFF';row(s,r,v);});
 extend(s,'T_RACI','A5:O29');
}

// WBS: append three specific commitments. Existing activity rows and user inputs stay in place.
{
 const s=sh('WBS');
 const items=[
  ['1.07','TRANSVERSAL','Acordar equipo IT DIARCO y cobertura','Enlace de Dirección confirma responsable operativo IT, suplente, horas y ventanas.','CIO','SP','1.02;1.04','Antes de G0','Nombre, facultades, disponibilidad y cobertura IT aceptados.','Propuesto','',null,'','',null,''],
  ['1.08','TRANSVERSAL','Asignar titular técnico L2 por circuito','Alejandro Ledesma / Eduardo Ettlin acuerdan titular y respaldo técnico por integración y ventana.','ZT','LZ','1.04','Antes de cada paralelo','Matriz de cobertura técnica y escalación validada por LZ.','Propuesto','',null,'','',null,''],
  ['2.20','TRANSVERSAL','Planificar formación y adopción por módulo','Pablo Duplessy coordina agenda, población, materiales, práctica y responsables de evaluación.','CMZ','LZ','1.03;1.05','Antes del paralelo de cada módulo','Plan por módulo con convocatoria, titular, suplente y práctica prevista.','Propuesto','',null,'','',null,''],
  ['2.21','TRANSVERSAL','Preparar seguimiento de competencia y adopción','Registro de aptitud, brechas, repruebas, consultas y acciones por población.','CMZ','LZ','2.20','Antes de G1 y por oleada','Instrumentos acordados; asistencia y competencia se registran por separado.','Propuesto','',null,'','',null,'']
 ];
 items.forEach((v,i)=>{const r=118+i;cloneRow(s,117,r,'P');s.getRange(`A${r}`).setNumberFormat('@');row(s,r,v);s.getRange(`P${r}`).formulas=[[`=IF(J${r}="Cerrado",IF(AND(K${r}<>"",M${r}<>"",N${r}<>"",ISNUMBER(O${r})),"Cierre documentado","Falta evidencia o aceptación"),"Pendiente")`]];});
 s.getRange('J118:O121').format.fill=amber;
 s.getRange('L118:L121').setNumberFormat('dd/mm/yyyy');s.getRange('O118:O121').setNumberFormat('dd/mm/yyyy');
 for(let r=31;r<=110;r++){const id=s.getRange(`A${r}`).values[0][0];if(/^3\.\d\d\.03$/.test(id)){const g=s.getRange(`G${r}`).values[0][0]||'';if(!g.includes('2.20'))put(s,`G${r}`,g+';2.20');}if(/^3\.\d\d\.07$/.test(id)){const g=s.getRange(`G${r}`).values[0][0]||'';if(!g.includes('2.21'))put(s,`G${r}`,g+';2.21');}}
 put(s,'E114','CMZ');
 extend(s,'T_WBS','A5:P121');
}

// Proposed capacity stays blank until hours and unique people are agreed.
{
 const s=sh('Capacidad');
 const rows=[
  ['CIO','Enlace de Dirección para IT DIARCO','DIARCO / provisto por Zeetrex','Conseguir responsable IT operativo, suplente, tiempo y cobertura por ventana.',null,null,null,null,null,'Guillermo Añaños, según Gobierno. Acordar dedicación; no equivale al rol IT operativo.'],
  ['CMZ','Gestión del Cambio Zeetrex','Zeetrex','Coordinar formación, práctica, ciclos de prueba y seguimiento de adopción.',null,null,null,null,null,'Pablo Duplessy, según Gobierno. Acordar dedicación con LZ.']
 ];
 rows.forEach((v,i)=>{const r=18+i;cloneRow(s,17,r,'J');row(s,r,v);s.getRange(`H${r}`).formulas=[[`=IF(OR(G${r}="",E${r}=""),"n.a.",G${r}*E${r})`]];s.getRange(`I${r}`).formulas=[[`=IF(OR(G${r}="",F${r}=""),"n.a.",G${r}*F${r})`]];});
 s.getRange('E18:G19').format.fill=amber;
 put(s,'J14','Eduardo Ettlin propuesto como LZ. Consolidar su carga con ZT si ocupa ambos roles.');
 put(s,'J16','Alejandro Ledesma / Eduardo Ettlin propuestos. Definir titular por circuito; no duplicar horas de Eduardo.');
 extend(s,'T_Capacidad','A5:J19');
}

// Preparation checks for the two new leadership profiles.
{
 const s=sh('Formacion');
 const rows=[
  ['TRANSVERSAL','CMZ','Pablo Duplessy (propuesto)','Planificar sesiones y práctica, seguir aptitud y brechas sin confundir asistencia con competencia.','',null,'No evaluado','','','',null],
  ['TRANSVERSAL','CIO','Guillermo Añaños (propuesto)','Acordar equipo IT operativo, cobertura y vía de escalación para cada ventana.','',null,'No evaluado','','','',null],
  ['TRANSVERSAL','ZT','Alejandro Ledesma / Eduardo Ettlin (propuestos)','Demostrar integración, diagnóstico L2, recuperación y titular técnico por circuito.','',null,'No evaluado','','','',null]
 ];
 rows.forEach((v,i)=>{const r=26+i;cloneRow(s,25,r,'K');row(s,r,v);});
 s.getRange('A5:A28').format.columnWidth=18;
 s.getRange('A26:K28').format.rowHeight=45;
 s.getRange('C26:K28').format.fill=amber;
 s.getRange('F26:F28').setNumberFormat('dd/mm/yyyy');s.getRange('K26:K28').setNumberFormat('dd/mm/yyyy');
 s.getRange('G26:G28').dataValidation={rule:{type:'list',values:['No evaluado','Apto','Requiere práctica']}};
 extend(s,'T_Formacion','A5:K28');
}

// One decision makes CMZ scope and IT linkage explicit; existing D04 remains the IT staffing decision.
{
 const s=sh('Decisiones');cloneRow(s,18,19,'K');
 row(s,19,['D14','Rol CMZ, plan de formación y responsables de adopción','LZ','02/11, antes de G0','Sin decidir','Confirmar Pablo Duplessy, agenda, RACI, seguimiento de aptitud y límites frente a DP/RF.','S31; S32','','',null,'']);
 s.getRange('H19:K19').format.fill=amber;s.getRange('J19').setNumberFormat('dd/mm/yyyy');
 put(s,'F9','Nombrar líder IT operativo, suplente, guardia por ventana y canal. Confirmar enlace CIO sin confundir ambos roles.');
 put(s,'G9','S01; S09; S31');
 extend(s,'T_Decisiones','A5:K19');
}

{
 const s=sh('Riesgos');
 const rows=[
  ['R12','Cambio sin agenda ni seguimiento de aptitud','CMZ','Media','Referentes asisten pero no demuestran autonomía; usuarios sin cobertura de formación.','Acordar D14 y registrar práctica, brechas y repruebas por población.','D14','',null,'Abierto',''],
  ['R13','Enlace CIO sin responsable IT operativo','CIO','Alta','No hay persona IT, suplente o ventana para acceso, interfaz y recuperación.','Cerrar D04 con nombres, horas y cobertura; verificar por circuito antes del paralelo.','D04','',null,'Abierto','']
 ];
 rows.forEach((v,i)=>{const r=17+i;cloneRow(s,16,r,'K');row(s,r,v);});
 s.getRange('H17:K18').format.fill=amber;s.getRange('I17:I18').setNumberFormat('dd/mm/yyyy');
 extend(s,'T_Riesgos','A5:K18');
}

{
 const s=sh('Gates');put(s,'C6','Alcance B1, roles nominales, tiempo autorizado, responsable IT operativo, coordinación CMZ, piloto y soporte asignados.');s.getRange('A6:K6').format.rowHeight=50;
}

{
 const s=sh('Fuentes');
 const rows=[
  ['S31','Gobierno editado por el usuario','30/10/2026','Siete perfiles propuestos; funciones y horas pendientes de aceptación.','Libro v0.2, Gobierno!A5:E12'],
  ['S32','Asignaciones editadas por el usuario','30/10/2026','Interlocutores ampliados por módulo; campos nominales aún vacíos.','Libro v0.2, Asignaciones!A5:Q15']
 ];
 rows.forEach((v,i)=>{const r=36+i;cloneRow(s,35,r,'E');row(s,r,v);});
 extend(s,'T_Fuentes','A5:E37');
}

{
 const s=sh('Resumen');
 put(s,'B23','Las nuevas tareas WBS están al final de la tabla; filtrar por ID/predecesoras para planificar.');
 s.getRange('B11').formulas=[['=COUNTA(WBS!A6:A121)']];
 s.getRange('B12').formulas=[['=COUNTIF(WBS!P6:P121,"Cierre documentado")']];
 s.getRange('B15').formulas=[['=COUNTIF(Formacion!G6:G28,"No evaluado")']];
 put(s,'A15','Registros de formación por evaluar');
 s.getRange('B16').formulas=[['=COUNTIF(Decisiones!E6:E19,"Sin decidir")+COUNTIF(Decisiones!E6:E19,"En análisis")']];
}

wb.recalculate();
const scan=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:100},summary:'Formula error scan',maxChars:2500});
console.log(scan.ndjson);
const renders=[['RACI','A5:O11'],['WBS','A116:P121'],['Capacidad','A13:J19'],['Formacion','A24:K28'],['Decisiones','A16:K19'],['Riesgos','A15:K18'],['Fuentes','A34:E37'],['Gobierno','A5:E12'],['Asignaciones','A5:E10'],['Resumen','A8:B16'],['Gates','A5:E7']];
for(const [name,range]of renders){const blob=await wb.render({sheetName:name,range,scale:1,format:'png'});await fs.writeFile(path.join(preview,`${name.replaceAll(' ','_')}.png`),new Uint8Array(await blob.arrayBuffer()));}
const out=await SpreadsheetFile.exportXlsx(wb);await out.save(target);
console.log(JSON.stringify({target,rendered:renders.length,scan:scan.ndjson}));
