import fs from 'node:fs/promises';
import path from 'node:path';
import {Workbook,SpreadsheetFile} from '@oai/artifact-tool';
import {sources,modules,roles,roleIds,raci,wbs,decisions,gaps,uat,risks,gates,people,nominees} from './model.mjs';
const root=path.resolve(import.meta.dirname,'..');
const out=path.join(root,'outputs/20261029');
const preview=path.join(root,'.build/previews');
await fs.mkdir(out,{recursive:true});await fs.mkdir(preview,{recursive:true});
const ids=new Set(wbs.map(x=>x.id));
if(ids.size!==wbs.length)throw Error('Duplicate WBS id');
for(const t of wbs)for(const d of t.pred.split(';').filter(Boolean))if(!ids.has(d))throw Error(`Missing dependency ${d}`);
const visiting=new Set(),visited=new Set();
function visit(id){if(visiting.has(id))throw Error('Cyclic WBS '+id);if(visited.has(id))return;visiting.add(id);for(const d of wbs.find(t=>t.id===id).pred.split(';').filter(Boolean))visit(d);visiting.delete(id);visited.add(id);}
for(const id of ids)visit(id);
for(const row of raci)if(row.slice(2).filter(v=>v.includes('A')).length!==1)throw Error('RACI must have one A');

let guide=`# Referentes, aprendizaje y guías por módulo\n\nVersión 0.1 propuesta. Marco B1: Estrategia de IMPLEMENTACION y actualización del usuario al 04/11. Los interlocutores históricos son candidatos a confirmar, no asignaciones aceptadas.\n\n## Acuerdo común del referente\n\nEl referente prepara casos y datos, aprende el circuito y sus límites, ejecuta UAT, registra problemas y capacita al resto. El dueño del proceso decide reglas y firma aceptación. El suplente practica y demuestra autonomía. Mesa de ayuda registra y sigue cada consulta; IT/L2 reciben los casos que exceden L1.\n\nCada referente debe saber ejecutar la tarea normal, reconocer un resultado incorrecto, manejar una excepción autorizada y abrir/escalar un ticket. No modifica bases, no fuerza aprobaciones y no repite documentos con estado incierto.\n\n## Plan de formación por audiencia\n\n| Audiencia | Aprendizaje | Material | Práctica y aceptación | Responsable |\n|---|---|---|---|---|\n| Dirección y dueños | Alcance, roles, gates, autoridad SGM y decisiones | Presentación y acta T01 | Explicitar facultades, recursos y aceptación | LD/LZ, valida SP |\n| Referente y suplente | Proceso completo, reglas, controles y excepciones | Guía rápida, casos dorados, FAQ y runbook | Demostración individual y una excepción, sin ayuda paso a paso | Forma ZF, valida DP |\n| Usuarios finales por rol | Tareas frecuentes, control final y pedido de ayuda | Guía breve por tarea y ejemplos verificados | Ejecutar todas sus tareas críticas con datos de práctica | Forma RF, valida DP |\n| Mesa de ayuda | Registro, impacto, prioridad, seguimiento y comunicación | Catálogo de servicios, FAQ y ticket T09 | Simulacro de principio a cierre validado por usuario | MD + ZF |\n| IT DIARCO | Accesos, interfaces, monitor, conciliación y recuperación | Matriz de interfaces y runbook técnico | Diagnóstico y recuperación controlada sin duplicar efectos | IT + ZT |\n\nSecuencia: explicación del objetivo y controles; demostración; práctica supervisada; práctica individual; evaluación; devolución; reprueba si hace falta. Duración inicial propuesta por módulo para RF/suplente: dos sesiones de 60–90 minutos más práctica y UAT. Confianza baja hasta revisar dificultad y experiencia. La asistencia no acredita competencia.\n\nAntes del paralelo del 04/11 se completa la formación mínima de los roles participantes. La formación masiva se programa por oleada y requiere que el referente haya demostrado el circuito que enseñará.\n\n## Paquete mínimo de material por módulo\n\nT03 ficha de capacidad, T05 guía de tareas verificadas con capturas de la versión real, T06 evaluación, T07 casos UAT, T08 FAQ/diagnóstico, T09 ticket y T11 transferencia. Cada material tiene versión, propietario, fecha de revisión y población. Usar enlaces únicos en el repositorio compartido, sin copias divergentes.\n\n`;
for(const m of modules){guide+=`## ${m.id} · ${m.name}\n\n**Resultado:** ${m.objective}\n\n**Dueño propuesto por función:** ${m.owner}. **RF por función:** ${m.ref}. **Interlocutor de antecedentes:** ${nominees[m.id]}. Confirmar persona, suplente, jefatura y horas. **Audiencia:** ${m.audience}.\n\n### Qué debe hacer\n\n${m.do.map((x,i)=>`${i+1}. ${x}`).join('\n')}\n5. Registrar resultados, defectos y repruebas con IDs y evidencia.\n6. Enseñar el circuito a usuarios de su alcance y transferir consultas frecuentes a L1.\n\n### Qué debe aprender y saber explicar\n\n${m.learn}\n\n### Qué responsabilidad debe asumir\n\n${m.own}\n\n### Cómo demostrar preparación y aceptación\n\n${m.accept} El RF ejecuta y DP acepta. Titular y suplente deben demostrar el flujo normal y una excepción. Para el paralelo se registra comparación con la fuente DIARCO/SGM válida y los resultados esperados acordados.\n\n| Caso inicial | Preparación | Ejecución | Resultado observable esperado |\n|---|---|---|---|\n${m.tests.map(t=>`| ${t.join(' | ')} |`).join('\n')}\n\n### Problemas frecuentes y respuesta inicial\n\nSíntomas a incluir en FAQ: ${m.errors} Consultar permisos, versión, corte de datos y documento/estado. Guardar evidencia y aplicar sólo el procedimiento conocido. Si el estado o resultado es incierto, detener el reintento y escalar a IT/L2 desde la mesa.\n\n**Fuentes:** ${m.source}. **WBS:** 3.${m.id.slice(1)}.01 a 3.${m.id.slice(1)}.08, más actividades transversales aplicables.\n\n`;}
guide+=`## Checklist de autonomía\n\n- [ ] Titular y suplente identifican sus facultades y quién acepta el proceso.\n- [ ] Ejecutan el circuito crítico y explican entradas, corte y salida.\n- [ ] Detectan un caso inválido y conservan evidencia.\n- [ ] Comparan contra DIARCO/SGM durante paralelo sin alterar su validez.\n- [ ] Atienden una consulta L1 y escalan un defecto por el canal correcto.\n- [ ] Capacitan a un usuario que luego demuestra la tarea.\n- [ ] Mantienen guía/FAQ y conocen quién los reemplaza.\n`;
await fs.writeFile(path.join(root,'documentacion/03_referentes_y_capacitacion.md'),guide);

const wb=Workbook.create();
const names=['Resumen','Asignaciones','WBS','RACI','GAPS','UAT','OC paralelo','Formacion','Decisiones','Gates','Riesgos','Capacidad','Gobierno','Fuentes'];
const sheets=Object.fromEntries(names.map(n=>[n,wb.worksheets.add(n)]));
const navy='#19334C',amber='#FFF2CC',ink='#203040',muted='#5E6B77';
const col=n=>{let s='';for(;n;n=Math.floor((n-1)/26))s=String.fromCharCode(65+(n-1)%26)+s;return s;};
const dims={};
function tab(name,title,headers,rows,widths,note=''){
 const s=sheets[name],end=col(headers.length),last=5+rows.length;
 s.showGridLines=false;
 s.getRange(`A1:${end}${last}`).format.font={name:'Arial',size:10,color:ink};
 s.getRange('A2').values=[[title]];s.getRange('A2').format.font={name:'Arial',size:15,bold:true,color:navy};
 s.getRange('A2').format.rowHeight=25;
 if(note){s.getRange('A3').values=[[note]];s.getRange('A3').format.font={name:'Arial',size:10,color:muted,italic:true};s.getRange('A3').format.rowHeight=20;}
 s.getRange(`A5:${end}${last}`).values=[headers,...rows];
 if(rows.length)s.tables.add(`A5:${end}${last}`,true,'T_'+name.replace(/[^a-zA-Z]/g,''));
 s.getRange(`A5:${end}5`).format={fill:navy,font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'},horizontalAlignment:'center',verticalAlignment:'center',wrapText:true,rowHeight:40};
 s.getRange(`A6:${end}${last}`).format.verticalAlignment='top';
 s.getRange(`A6:${end}${last}`).format.wrapText=true;
 for(let i=0;i<rows.length;i++){
  const lines=Math.max(...rows[i].map((v,j)=>String(v??'').split('\n').reduce((n,line)=>n+Math.max(1,Math.ceil(line.length/(widths[j]*0.95))),0)));
  s.getRange(`A${i+6}:${end}${i+6}`).format.rowHeight=Math.max(28,lines*13.5+8);
  s.getRange(`A${i+6}:${end}${i+6}`).format.fill=i%2?'#F1F4F7':'#FFFFFF';
 }
 widths.forEach((w,i)=>s.getRange(`${col(i+1)}5:${col(i+1)}${last}`).format.columnWidth=w);
 s.freezePanes.freezeRows(5);if(headers.length>7)s.freezePanes.freezeColumns(2);
 dims[name]={last,cols:headers.length};return s;
}
function inputs(s,range){s.getRange(range).format.fill=amber;}
function list(s,range,values){s.getRange(range).dataValidation={rule:{type:'list',values}};}
function formula(s,cell,value){s.getRange(cell).formulas=[[value]];}
function warning(s,range,word){s.getRange(range).conditionalFormats.add('containsText',{text:word,format:{fill:'#FCE4D6',font:{color:'#9C260F'}}});}
const assignRows=modules.map(m=>[m.id,m.name,'B1',m.owner,nominees[m.id],'','','',null,null,'','Sin confirmar','',null,'','','Sin confirmar']);
const as=tab('Asignaciones','Equipo por capacidad',['ID','Capacidad B1','Bloque','Dueño propuesto (función)','Interlocutor de antecedentes','Titular confirmado','Suplente confirmado','Jefatura que libera tiempo','h titular/semana','h suplente/semana','Ventanas de agenda','Compromiso','Acepta jefatura','Fecha aceptación','Preparación del equipo','Dueño nominal confirmado','Aceptación del dueño'],assignRows,[10,34,12,30,42,28,28,28,17,18,32,19,27,18,32,29,25],'Amarillo: completar. Los nombres de antecedentes no equivalen a una designación aceptada.');
inputs(as,'F6:N15');inputs(as,'P6:Q15');list(as,'C6:C15',['B1','B2','B3','Excluido']);list(as,'L6:L15',['Sin confirmar','Confirmado']);list(as,'Q6:Q15',['Sin confirmar','Confirmado']);as.getRange('N6:N15').setNumberFormat('dd/mm/yyyy');as.getRange('I6:J15').setNumberFormat('0.0');
for(let r=6;r<=15;r++)formula(as,`O${r}`,`=IF(C${r}<>"B1","Fuera de B1",IF(AND(F${r}<>"",G${r}<>"",H${r}<>"",ISNUMBER(I${r}),I${r}>0,ISNUMBER(J${r}),J${r}>0,K${r}<>"",L${r}="Confirmado",M${r}<>"",ISNUMBER(N${r}),P${r}<>"",Q${r}="Confirmado"),"Equipo confirmado","Falta compromiso nominal"))`);
warning(as,'O6:O15','Falta');

const ws=tab('WBS','Plan de ejecución del Bloque 1',['WBS','Módulo','Actividad','Entregable / acción concreta','R','A','Predecesoras','Ventana propuesta','Criterio de cierre','Estado','Nombre ejecutor R','Fecha objetivo','Evidencia','Aceptado por','Fecha aceptación','Control de cierre'],wbs.map(t=>[t.id,t.mod,t.name,t.result,t.r,t.a,t.pred,t.window,t.done,t.state,'',null,'','',null,'']),[13,19,43,66,9,9,35,34,70,20,27,17,38,27,18,33],'Filtrar por módulo/oleada. Fechas propuestas, sin ejecución acreditada. G1/G2 se instancian por población seleccionada.');
const wl=dims.WBS.last;inputs(ws,`J6:O${wl}`);list(ws,`J6:J${wl}`,['Propuesto','En curso','Bloqueado','Cerrado','Diferido']);ws.getRange(`L6:L${wl}`).setNumberFormat('dd/mm/yyyy');ws.getRange(`O6:O${wl}`).setNumberFormat('dd/mm/yyyy');
for(let r=6;r<=wl;r++)formula(ws,`P${r}`,`=IF(J${r}="Cerrado",IF(AND(K${r}<>"",M${r}<>"",N${r}<>"",ISNUMBER(O${r})),"Cierre documentado","Falta evidencia o aceptación"),"Pendiente")`);
warning(ws,`P6:P${wl}`,'Falta');warning(ws,`J6:J${wl}`,'Bloqueado');

tab('RACI','Responsabilidades por actividad',['ID','Actividad',...roleIds],raci,[12,51,...roleIds.map(()=>10)],'Un solo A por fila. DP/RF corresponden al módulo. Nombres y facultades deben confirmarse.').getRange(`C6:M${dims.RACI.last}`).format.horizontalAlignment='center';
const gs=tab('GAPS','GAPS y decisiones de alcance',['GAP','Módulo','Capacidad / pedido','Clasificación documentada','Condición / detalle pendiente','Fuentes','Decisión final','Dueño de decisión','Fecha','Motivo / impacto','Evidencia'],gaps.map(g=>[...g,'','',null,'','']),[14,18,49,34,76,22,22,27,17,55,35],'Clasificación inicial basada en antecedentes. Decisión final y evidencia a completar.');
inputs(gs,`G6:K${dims.GAPS.last}`);list(gs,`G6:G${dims.GAPS.last}`,['B1','B2','B3','Excluido','Pendiente']);gs.getRange(`I6:I${dims.GAPS.last}`).setNumberFormat('dd/mm/yyyy');

const uh=['Caso / ejecución','Módulo','Escenario','Criticidad','Precondiciones / dataset','Pasos','Resultado esperado a aprobar','R ejecuta','A acepta','Versión','Ambiente','Dataset / corte','Ejecutado por','Fecha ejecución','Resultado real','Evidencia','Defecto','Dictamen','Aceptado por','Estado ejecución','Control de evidencia'];
const us=tab('UAT','Pruebas de aceptación y smoke',['Caso / ejecución','Módulo',...uh.slice(2),'Fecha aceptación','Esperado aprobado por','Fecha validación esperado'],uat.map(r=>[...r,'',null,'',null]),[24,18,42,14,65,65,80,12,12,18,18,34,26,18,65,38,24,20,27,21,35,20,29,23],'Acordar esperado antes de ejecutar. Reprueba: nueva fila con ID propio, conservando la ejecución anterior.');
const ul=dims.UAT.last;inputs(us,`J6:T${ul}`);inputs(us,`V6:X${ul}`);list(us,`R6:R${ul}`,['Aprobado','Fallido','Bloqueado']);list(us,`T6:T${ul}`,['No ejecutado','Ejecutado']);us.getRange(`N6:N${ul}`).setNumberFormat('dd/mm/yyyy');us.getRange(`V6:V${ul}`).setNumberFormat('dd/mm/yyyy');us.getRange(`X6:X${ul}`).setNumberFormat('dd/mm/yyyy');
for(let r=6;r<=ul;r++)formula(us,`U${r}`,`=IF(T${r}<>"Ejecutado","Sin ejecutar",IF(AND(J${r}<>"",K${r}<>"",L${r}<>"",M${r}<>"",ISNUMBER(N${r}),O${r}<>"",P${r}<>"",R${r}<>"",S${r}<>"",ISNUMBER(V${r}),W${r}<>"",ISNUMBER(X${r})),IF(R${r}="Aprobado","Ejecución aceptada","Requiere acción"),"Falta evidencia o aceptación"))`);
warning(us,`U6:U${ul}`,'Falta');warning(us,`R6:R${ul}`,'Fallido');

const fields=['Proveedor','Sucursal','Fecha OC / corte','Lista / versión','Moneda','Unidad de compra','Artículo / línea','Cantidad','Precio lista','Descuento / orden de aplicación','Neto OC','Impuestos internos','IVA','Redondeo por línea','Subtotal / total','Estado aprobado','Identificador Connexa–SGM','Emisor único al proveedor'];
const os=tab('OC paralelo','Comparación de OC valorizada',['OC / ejecución','Línea / campo','Connexa','DIARCO / SGM (válido)','Esperado independiente','Tolerancia acordada','Diferencia / causa','Dictamen','Responsable','Evidencia','Fecha comparación'],fields.map(f=>['',f,'','','','','','Pendiente','','',null]),[26,40,35,35,42,34,58,21,28,40,20],'Duplicar el bloque por OC y línea. El total no compensa diferencias de detalle. DIARCO/SGM mantiene validez en paralelo.');
inputs(os,`A6:K${dims['OC paralelo'].last}`);list(os,`H6:H${dims['OC paralelo'].last}`,['Pendiente','Coincide','Dentro de tolerancia','Fuera de tolerancia']);os.getRange(`K6:K${dims['OC paralelo'].last}`).setNumberFormat('dd/mm/yyyy');warning(os,`H6:H${dims['OC paralelo'].last}`,'Fuera');

const training=modules.flatMap(m=>['Titular','Suplente'].map(role=>[m.id,role,'',m.learn,'',null,'No evaluado','','','','']));
const ft=tab('Formacion','Competencia y formación en cascada',['Módulo','Rol','Persona','Qué debe demostrar','Versión / material','Fecha evaluación','Resultado','Brecha / acción','Evaluador','Evidencia','Fecha reprueba'],training,[12,16,27,80,34,20,23,60,27,40,20],'Agregar usuarios finales por rol. Asistencia y aptitud son registros distintos.');
inputs(ft,`C6:K${dims.Formacion.last}`);list(ft,`G6:G${dims.Formacion.last}`,['No evaluado','Apto','Requiere práctica']);ft.getRange(`F6:F${dims.Formacion.last}`).setNumberFormat('dd/mm/yyyy');ft.getRange(`K6:K${dims.Formacion.last}`).setNumberFormat('dd/mm/yyyy');
const ds=tab('Decisiones','Decisiones del equipo y Dirección',['ID','Decisión requerida','A','Ventana propuesta','Estado','Criterio / contenido','Fuentes','Decisión registrada','Nombre decisor','Fecha decisión','Evidencia'],decisions.map(d=>[...d,'','',null,'']),[12,60,10,31,20,80,24,70,28,19,40],'El silencio no aprueba. Estado Resuelto requiere contenido, decisor, fecha y evidencia.');
inputs(ds,`E6:K${dims.Decisiones.last}`);list(ds,`E6:E${dims.Decisiones.last}`,['Sin decidir','En análisis','Resuelto']);ds.getRange(`J6:J${dims.Decisiones.last}`).setNumberFormat('dd/mm/yyyy');
const gate=tab('Gates','Autorización de avance por población',['Gate','Resultado','Criterio propuesto','A','Evidencia requerida','Módulo / oleada','Versión','Decisión','Nombre decisor','Fecha','Enlace / reservas'],gates.map(g=>[...g,'','','Pendiente','',null,'']),[12,34,95,10,50,30,20,20,28,18,60],'Duplicar gate por módulo/oleada. Validar umbrales. Smoke se exige antes del paralelo y no reemplaza UAT.');
inputs(gate,'F6:K10');list(gate,'H6:H10',['Pendiente','Go','No-go']);gate.getRange('J6:J10').setNumberFormat('dd/mm/yyyy');
const rs=tab('Riesgos','Riesgos y acciones de mitigación',['ID','Riesgo','Dueño rol','Impacto','Señal / disparador','Respuesta propuesta','Decisión vinculada','Dueño nominal','Fecha acción','Estado','Evidencia'],risks.map(r=>[...r,'',null,'Abierto','']),[12,57,14,14,65,85,20,28,18,20,40],'Revisar cada semana y antes de abrir paralelo/oleada.');inputs(rs,`H6:K${dims.Riesgos.last}`);rs.getRange(`I6:I${dims.Riesgos.last}`).setNumberFormat('dd/mm/yyyy');list(rs,`J6:J${dims.Riesgos.last}`,['Abierto','En tratamiento','Cerrado']);
const cs=tab('Capacidad','Reserva inicial de agenda por rol',['Código','Rol','Organización','Resultado del rol','h/sem mínimo','h/sem máximo','Cantidad personas','Reserva mínima h','Reserva máxima h','Nota'],roles.map(r=>[...r,null,'','','Propuesta no calibrada. Confirmar personas únicas y carga compartida.']),[12,43,22,80,19,19,22,22,22,68],'Rangos propuestos, confianza baja. No incluyen operación habitual, guardia ni desplazamiento. No suman personas con roles duplicados.');
const cl=dims.Capacidad.last;inputs(cs,`E6:G${cl}`);cs.getRange(`E6:I${cl}`).setNumberFormat('0.0');
for(let r=6;r<=cl;r++){formula(cs,`H${r}`,`=IF(OR(G${r}="",E${r}=""),"n.a.",G${r}*E${r})`);formula(cs,`I${r}`,`=IF(OR(G${r}="",F${r}=""),"n.a.",G${r}*F${r})`);}
tab('Gobierno','Equipo directivo y funciones propuestas',['Persona','Cargo informado','Función propuesta','Estado','Facultad por acordar'],people,[30,29,55,27,85],'Cargos informados por usuario. Las funciones de proyecto requieren acuerdo.');
const sourceTab=tab('Fuentes','Fuentes y precedencia',['ID','Fuente','Corte','Uso / límites','Ubicación'],sources,[12,43,32,100,100],'Precedencia: instrucciones del usuario (04/11 y convivencia), IMPLEMENTACION/Estrategia, detalle reuniones. Fechas históricas no certifican ejecución.');

const s=sheets.Resumen;s.showGridLines=false;
s.getRange('A1:F29').format.font={name:'Arial',size:11,color:ink};
s.getRange('A2').values=[['DIARCO · Implementación Bloque 1']];s.getRange('A2').format.font={name:'Arial',size:16,bold:true,color:navy};
s.getRange('A4').values=[['Objetivo vigente']];s.getRange('B4').values=[['Desde 04/11: módulos productivos, smoke y paralelo']];
s.getRange('A5').values=[['Autoridad en paralelo']];s.getRange('B5').values=[['La información DIARCO/SGM sigue siendo válida']];
s.getRange('A6').values=[['Estado del kit']];s.getRange('B6').values=[['Propuesta. Sin ejecución ni aceptación acreditadas']];
s.getRange('A8:B8').values=[['Indicador de preparación','Cantidad']];s.getRange('A8:B8').format={fill:navy,font:{name:'Arial',bold:true,color:'#FFFFFF'}};
const metrics=[['Frentes B1 planificados',`=COUNTA(Asignaciones!A6:A15)`],['Equipos con compromiso nominal',`=COUNTIF(Asignaciones!O6:O15,"Equipo confirmado")`],['Actividades WBS propuestas',`=COUNTA(WBS!A6:A${wl})`],['Actividades con cierre documentado',`=COUNTIF(WBS!P6:P${wl},"Cierre documentado")`],['Registros UAT/smoke',`=COUNTA(UAT!A6:A${ul})`],['Ejecuciones aceptadas con evidencia',`=COUNTIF(UAT!U6:U${ul},"Ejecución aceptada")`],['Registros RF/suplente por evaluar',`=COUNTIF(Formacion!G6:G${dims.Formacion.last},"No evaluado")`],['Decisiones aún sin resolver',`=COUNTIF(Decisiones!E6:E${dims.Decisiones.last},"Sin decidir")+COUNTIF(Decisiones!E6:E${dims.Decisiones.last},"En análisis")`]];
metrics.forEach(([label,f],i)=>{s.getRange(`A${i+9}`).values=[[label]];formula(s,`B${i+9}`,f);});
s.getRange('A19').values=[['Próximo paso de Dirección']];s.getRange('B19').values=[['Confirmar personas, horas y población del paralelo']];
s.getRange('A21').values=[['Uso del libro']];s.getRange('B21').values=[['Amarillo = entrada humana. Fórmulas = control documental, no aprobación automática.']];
s.getRange('B22').values=[['UAT: conservar ejecuciones y repruebas. OC paralelo: duplicar bloque por OC/línea.']];
s.getRange('B23').values=[['Nuevas filas: ampliar tablas y rangos de fórmulas/resumen. Revisar IDs y dependencias.']];
s.getRange('B24').values=[['Los indicadores iniciales muestran preparación pendiente, no porcentajes de avance histórico.']];
s.getRange('B25').values=[['Un gate requiere firma humana y evidencia, aunque los controles documentales estén completos.']];
s.getRange('A2:F25').format.rowHeight=25;s.getRange('A1:A25').format.columnWidth=43;s.getRange('B1:B25').format.columnWidth=100;s.getRange('C1:F25').format.columnWidth=12;
dims.Resumen={last:25,cols:2};

// Meaningful workflow checks: one prerequisite alone must not certify completion.
const assignStatus=()=>as.getRange('O6').values[0][0];
const initial=assignStatus();as.getRange('F6').values=[['Prueba temporal']];if(assignStatus()!=='Falta compromiso nominal')throw Error('Incomplete team incorrectly confirmed');as.getRange('F6').values=[['']];
ws.getRange('J6').values=[['Cerrado']];if(ws.getRange('P6').values[0][0]!=='Falta evidencia o aceptación')throw Error('Missing closure evidence not detected');ws.getRange('J6').values=[['Propuesto']];
us.getRange('T6').values=[['Ejecutado']];us.getRange('R6').values=[['Aprobado']];if(us.getRange('U6').values[0][0]!=='Falta evidencia o aceptación')throw Error('UAT approved without evidence');us.getRange('T6').values=[['No ejecutado']];us.getRange('R6').values=[['']];
cs.getRange('G6').values=[[2]];if(cs.getRange('H6').values[0][0]!==2)throw Error('Capacity calculation not live');cs.getRange('G6').values=[[null]];
wb.recalculate();
const scan=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:50},summary:'Final formula scan',maxChars:2000});
console.log(scan.ndjson);
const checks=await wb.inspect({kind:'table',range:'Resumen!A8:B16',include:'values,formulas',tableMaxRows:9,tableMaxCols:2,maxChars:2500});console.log(checks.ndjson);
console.log('Export XLSX start');
const built=await SpreadsheetFile.exportXlsx(wb);console.log('Export XLSX encoded');
await built.save(path.join(out,'DIARCO_Bloque1_Plan_v0.2.xlsx'));console.log('Export XLSX saved');
for(const n of names){const range=n==='Resumen'?'A1:B25':n==='RACI'?'A5:M10':n==='Gobierno'?'A5:E10':`A5:${col(Math.min(dims[n].cols,5))}${Math.min(dims[n].last,8)}`;try{const blob=await wb.render({sheetName:n,range,scale:1,format:'png'});await fs.writeFile(path.join(preview,`book_${n.replaceAll(' ','_')}.png`),new Uint8Array(await blob.arrayBuffer()));}catch(e){console.error('Render failed '+n+': '+e.message);throw e;}}
await fs.writeFile(path.join(root,'.build/validation_kit.json'),JSON.stringify({wbs:wbs.length,modules:modules.length,uat:uat.length,raci:raci.length,decisions:decisions.length,dependencyGraph:'acyclic; all predecessor IDs present',workflowChecks:'incomplete assignment, missing WBS evidence, missing UAT evidence, live capacity verified and restored',initialAssignment:initial,formulaScan:scan.ndjson},null,2));
console.log(JSON.stringify({output:path.join(out,'DIARCO_Bloque1_Plan_v0.2.xlsx'),wbs:wbs.length,uat:uat.length,sheets:names.length}));
