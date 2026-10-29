import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {Presentation,PresentationFile} from '@oai/artifact-tool';
import {people,sources,wbs} from './model.mjs';
const root=path.resolve(import.meta.dirname,'..');
const skill='C:/Users/eduar/.codex/plugins/cache/openai-primary-runtime/presentations/26.1025.11240/skills/presentations';
const python='C:/Users/eduar/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe';
process.env.RUNTIME_NODE_MODULES='C:/Users/eduar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
process.env.RUNTIME_NODE='C:/Users/eduar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe';
process.env.RUNTIME_PYTHON=python;
const finalPath=path.join(root,'outputs/20261029/DIARCO_Bloque1_Direccion_v0.2.pptx');
const stage=path.join(root,'.build/.codex-finalizer');await fs.mkdir(stage,{recursive:true});
const p=Presentation.create({slideSize:{width:1280,height:720}});
const navy='#19334C',blue='#26678D',ink='#253748',muted='#586B7A',white='#FFFFFF',pale='#F6F8FA',orange='#BA631A';
let page=0;
function text(s,str,x,y,w,h,size=25,color=ink,bold=false){const a=s.shapes.add({geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});a.text=str;a.text.style={typeface:'Arial',fontSize:size,color,bold,wrap:'square',autoFit:'none',insets:0};return a;}
function rect(s,x,y,w,h,fill){return s.shapes.add({geometry:'rect',position:{left:x,top:y,width:w,height:h},fill,line:{fill:'none',width:0}});}
function slide(title,notes='',refs=['S09','S10','S13']){const s=p.slides.add();page++;s.background.fill=pale;text(s,title,64,48,1152,100,39,navy,true);rect(s,64,151,1152,2,'#CFD9E0');text(s,String(page).padStart(2,'0'),1170,674,46,24,15,muted);s.speakerNotes.text=notes+'\n\nFuentes:\n'+refs.map(id=>{const f=sources.find(x=>x[0]===id);return f?`${id}. ${f[1]}. ${f[3]} ${f[4]}`:id;}).join('\n');return s;}
function lines(s,items,x=64,y=190,w=1140,step=88,size=26){items.forEach((v,i)=>text(s,v,x,y+i*step,w,step-12,size));}
function table(s,headers,rows,widths,{y=185,h=430,font=22}={}){const vals=[headers,...rows];const t=s.tables.add({rows:vals.length,columns:headers.length,left:64,top:y,width:1152,height:h,columnWidths:widths,values:vals});
 t.borders.assign({fill:'#D5DEE5',width:1,style:'solid'});
 for(let r=0;r<vals.length;r++)for(let c=0;c<headers.length;c++){const cell=t.getCell(r,c);cell.fill=r===0?navy:r%2?white:'#EBF0F4';cell.text.style={typeface:'Arial',fontSize:font,color:r===0?white:ink,bold:r===0,verticalAlignment:'middle',insets:{left:12,right:12,top:8,bottom:8},wrap:'square',autoFit:'none'};}
 return t;}

{
 const s=p.slides.add();page++;s.background.fill=navy;
 text(s,'DIARCO',64,65,1000,50,28,'#B9DBED',true);
 text(s,'Implementación\ndel Bloque 1',64,172,1100,170,66,white,true);
 text(s,'Equipo, paralelo y aceptación por módulo',68,390,1100,60,32,white);
 text(s,'Dirección DIARCO y Zeetrex\nLunes 02/11/2026 · Propuesta para acordar',68,536,1100,65,23,'#C7D8E5');
 s.speakerNotes.text='Objetivo de la reunión: compromiso nominal y tiempo protegido para ejecutar el plan. El usuario confirmó convivencia gradual y objetivo de módulos productivos, smoke y paralelo desde 04/11. La información DIARCO/SGM sigue válida. Documento propuesto, sin aceptaciones inferidas. Fuente: instrucciones del usuario, 29/10/2026.';
}
{
 const s=slide('El lunes debe quedar un equipo comprometido','No basta con recibir nombres. Cada jefatura confirma capacidad y qué tarea habitual se redistribuye. No hay aceptación tácita.', ['S01','S12','S13','S09']);
 lines(s,['Sponsor y líder operativo DIARCO con facultades claras.','Dueño, referente titular y suplente por módulo.','Horas protegidas y ventanas de prueba autorizadas.','IT y mesa de ayuda incorporados desde la preparación.','Población del paralelo y reglas de aceptación acordadas.'],64,184,1130,83,27);
}
{
 const s=slide('Gobierno propuesto con los nombres disponibles','Los cargos fueron informados por el usuario. Las funciones de proyecto son propuestas, pendientes de acuerdo. No asignar a estos directivos todas las tareas operativas. El líder DIARCO, referentes, suplentes, IT y mesa aún deben designarse.',['S12','S09']);
 table(s,['Persona','Cargo informado','Función propuesta'],people.map(r=>[r[0],r[1],r[2]]),[280,290,582],{h:390,font:22});
 text(s,'Falta designar el equipo operativo DIARCO y confirmar su dedicación.',64,605,1150,45,24,orange,true);
}
{
 const s=slide('Bloque 1 comercial: preparación y uso','Alcance macro según Estrategia elegida y IMPLEMENTACION. El cierre de GAPS fija el detalle de cada oleada. Precio de venta y kardex pertenecen a la consolidación posterior.',['S10','S15','S16','S22','S23','S25','S13']);
 table(s,['Frente','Qué debe demostrar DIARCO','Referente a confirmar'],[
 ['Catálogo y maestros','Datos correctos y cambio trazable en los destinos.','Guillermo Alvez / Datos Maestros'],
 ['Surtido y clusters','Elegibilidad y excepciones por artículo/sucursal.','Liliana D’Amico'],
 ['Listas y acuerdos de compra','Vigencias, descuentos y netos explicables.','Sebastián Basconcelos'],
 ['Abastecimiento','Propuesta revisada con entradas y motivos visibles.','Romina Garfi'],
 ['OC e integración','Aprobación única y valorización conciliada.','Compras / Romina Garfi']
 ],[265,585,302],{h:420,font:22});
 text(s,'Los interlocutores de las fuentes todavía deben aceptar función, suplencia y horas.',64,626,1140,35,20,muted);
}
{
 const s=slide('Bloque 1 operativo: convivencia con SGM','Separar necesidades PDD de planificación de transferencias/viajes. No asignar a PDD reservas, transporte o ejecución WMS que su contrato excluye. La planificación logística tiene su propio frente e integración.',['S10','S15','S16','S07','S19','S20','S24','S27','S13']);
 table(s,['Frente','Qué se valida','Condición operativa'],[
 ['Recepción PDA / WEB','Cantidades, diferencias y pendientes.','Stock y pendientes oficiales en SGM.'],
 ['Inventarios y ajustes','Conteo, autorización y ajuste una sola vez.','Impacto definitivo en SGM.'],
 ['PDD y necesidades','Parámetros, cálculo y backlog trazables.','Cobertura Inventory y contrato vigente.'],
 ['Transferencias / distribución','Intercambio y retorno con Valkimia.','API o Excel validado con CD/VKM.'],
 ['Stock y observabilidad','Conciliación, alertas y recuperación.','Dueños, cortes y latencias acordados.']
 ],[265,495,392],{h:430,font:22});
}
{
 const s=slide('Desde el 04/11: smoke, paralelo y aceptación','La instrucción del usuario sustituye las fechas anteriores de arranque 07/11 y 09/11. No se interpreta 04/11 como aceptación total. Algunos días de paralelo por módulo, con duración/ciclos acordados.',['S13','S10','S09']);
 const stages=[['1','Disponibilidad','Versión productiva, población y accesos controlados.'],['2','Smoke del flujo','El recorrido mínimo funciona y deja trazabilidad.'],['3','Paralelo','Comparación con DIARCO/SGM durante los ciclos acordados.'],['4','Aceptación','El dueño acepta evidencia y pendientes del módulo.']];
 stages.forEach((a,i)=>{let x=64+i*294;rect(s,x,206,250,4,blue);text(s,a[0],x,230,250,55,46,blue,true);text(s,a[1],x,302,260,72,29,navy,true);text(s,a[2],x,402,254,155,25);});
 text(s,'Durante el paralelo sigue valiendo la información DIARCO/SGM.',64,602,1150,50,28,orange,true);
}
{
 const s=slide('La OC valorizada se acepta con una comparación completa','Comparar la misma OC con identificadores vinculados. El resultado esperado se aprueba con negocio e Impuestos antes de ejecutar. La coincidencia entre dos sistemas no prueba por sí sola que la regla sea correcta. Evitar diferencias compensadas entre líneas. SGM conserva validez y el emisor al proveedor es único.',['S13','S16','S09']);
 table(s,['Grupo de control','Comparación requerida'],[
 ['Identidad y contexto','Proveedor, sucursal, fecha, moneda, lista y versión.'],
 ['Cada línea','Artículo, unidad, cantidad, precio y descuentos en su orden.'],
 ['Valorización','Neto, internos, IVA, redondeos y total.'],
 ['Autorización y destino','Una aprobación, números vinculados y acuse funcional.'],
 ['Cada diferencia','Connexa, DIARCO/SGM, esperado, tolerancia, causa y reprueba.']
 ],[300,852],{h:410,font:24});
 text(s,'Una sola comunicación al proveedor. Sin duplicar documentos para comparar.',64,620,1150,40,23,orange,true);
}
{
 const s=slide('Cada referente recibe un paquete concreto','Aplicar T02 compromiso individual y guía del módulo. Cada tarea tiene R/A, predecesoras y criterio de cierre. El dueño del proceso conserva la aceptación.',['S01','S09']);
 text(s,'Tiene que hacer',64,191,540,45,29,navy,true);
 lines(s,['Preparar datos y casos representativos.','Ejecutar UAT y guardar evidencia.','Formar usuarios y mantener las guías.','Resolver consultas L1 de su módulo.'],64,256,535,83,26);
 text(s,'Tiene que saber y asumir',662,191,550,45,29,navy,true);
 lines(s,['Explicar entradas, reglas y controles.','Detectar y escalar una excepción.','Trabajar con un suplente preparado.','Sostener el proceso después del proyecto.'],662,256,548,83,26);
}
{
 const s=slide('El WBS vincula tareas, responsables y evidencia',`Ejemplo de secuencia por módulo. El libro contiene ${wbs.length} actividades, con dependencias y campos para nombres, fechas, evidencia y aceptación. No presenta ejecución real.`,['S09','S13','S19','S20','S27']);
 table(s,['Secuencia del módulo','Ejecuta','Acepta / responde'],[
 ['Preparar casos y datos','Referente DIARCO','Dueño del proceso'],
 ['Validar reglas y configuración','Referente DIARCO','Dueño del proceso'],
 ['Formar titular y suplente','Funcional Zeetrex','Líder Zeetrex'],
 ['Ejecutar UAT y excepciones','Referente + usuarios','Dueño del proceso'],
 ['Comparar en paralelo y reprobar','DIARCO + Zeetrex','Dueño del proceso'],
 ['Transferir y recomendar expansión','Referente DIARCO','Dueño del proceso']
 ],[580,290,282],{h:440,font:23});
}
{
 const s=slide('La capacitación debe demostrar autonomía','La formación comienza con referentes y suplentes, luego se replica por rol/oleada. Material: ficha del proceso, guía rápida con capturas verificadas, dataset/casos dorados, FAQ, evaluación, runbook y ticket. Materiales específicos de pantalla se completan sobre la versión real.',['S01','S09']);
 lines(s,['1. Zeetrex demuestra el circuito y sus controles.','2. El referente y su suplente practican con casos reales.','3. Cada persona ejecuta las tareas críticas sin ayuda paso a paso.','4. El referente forma al resto y verifica la práctica.','5. Las dudas recurrentes actualizan la guía y la FAQ.'],64,190,1140,83,27);
}
{
 const s=slide('DIARCO sostiene L1 con Zeetrex como soporte especializado','La mesa mantiene el ticket principal hasta la confirmación de recuperación. Falla grave: escalar de inmediato a IT y L2 dentro de la cobertura acordada. Los objetivos de atención del documento son propuestas, sin asumir 24x7.',['S01','S09']);
 table(s,['Actor','Responsabilidad en el soporte'],[
 ['Mesa de ayuda DIARCO','Registrar impacto, clasificar, comunicar y seguir el caso.'],
 ['Referente funcional L1','Resolver uso y reglas conocidas. Escalar errores de producto.'],
 ['IT DIARCO','Accesos, conectividad, servicios y diagnóstico local autorizado.'],
 ['Zeetrex L2','Diagnóstico especializado, integración y corrección controlada.'],
 ['Usuario / dueño','Confirmar recuperación y conciliación del resultado.']
 ],[340,812],{h:415,font:24});
 text(s,'Antes del paralelo: canal, cobertura, suplentes y un simulacro de atención.',64,622,1150,40,24,orange,true);
}
{
 const s=slide('El avance requiere decisiones con evidencia','Umbrales metodológicos propuestos, pendientes de acuerdo: 100% casos críticos aplicables aprobados, cero defectos críticos/altos del circuito, al menos dos ciclos incluyendo una excepción, cinco días operativos estables para transferencia y ciclo completo si infrecuente. No se rebajan controles técnicos vigentes.',['S09','S13']);
 table(s,['Gate','Evidencia requerida','Quién decide'],[
 ['G0 · Compromiso','Alcance, personas, horas, población y soporte.','Sponsor DIARCO'],
 ['G1 · Preparación / UAT','Datos, permisos, aprendizaje y casos críticos.','Dueño del proceso'],
 ['G2 · Paralelo / piloto','Ciclos, excepciones y conciliación completa.','Sponsor con validaciones'],
 ['G3 · Expansión','Usuarios, soporte, corte y contingencia.','Sponsor DIARCO'],
 ['G4 · Transferencia','Estabilidad y autonomía de DIARCO/L1.','Sponsor con Operaciones']
 ],[265,610,277],{h:420,font:22});
}
{
 const s=slide('La primera semana se organiza alrededor del 04/11','Fechas objetivo de la propuesta. No hay aceptación por calendario. Si falta preparación de un módulo, registrar bloqueo y permitir avanzar a los módulos que sí cumplen las condiciones.',['S13','S09']);
 table(s,['Fecha','Trabajo prioritario','Salida'],[
 ['30/10','Cerrar GAPS, preparar datos y proponer asignaciones.','Material de decisión.'],
 ['02/11','Dirección confirma equipo, horas y población.','Acta y calendario operativo.'],
 ['03/11','Formación mínima, esperado, accesos y controles.','Módulos preparados para smoke.'],
 ['04/11','Disponibilidad controlada, smoke y primer paralelo.','Flujos mínimos y comparación OC.'],
 ['05–06/11','Continuar comparación, excepciones y repruebas.','Aceptación progresiva o acciones pendientes.']
 ],[150,650,352],{h:420,font:23});
}
{
 const s=slide('Compromisos que deben quedar en el acta','Cierre sugerido: leer nombres, horas, fecha y evidencia esperada en voz alta. Roberto Goldfarb brinda patrocinio institucional propuesto. Pablo Bertolissio asume sponsor operativo propuesto. Daniel Padin compromiso ejecutivo Zeetrex. Luciano/Eduardo funciones de coordinación y técnica propuestas. El líder operativo DIARCO sigue pendiente.',['S01','S12','S13','S09']);
 lines(s,['Quién lidera DIARCO y quién decide por cada proceso.','Quiénes serán titulares y suplentes, con horas liberadas.','Qué módulos y población empiezan el paralelo desde el 04/11.','Cómo se comparan resultados y quién firma aceptación.','Qué cobertura de IT, mesa y Zeetrex acompaña cada ventana.'],64,190,1140,84,28);
}

const candidate=path.join(stage,'candidate.pptx');await(await PresentationFile.exportPptx(p)).save(candidate);
const {finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
const owners=[3,4,5,7,9,11,12,13];
const result=await finalizePresentation({workspaceDir:root,candidatePath:candidate,finalPath,pythonExecutable:python,integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit',...owners.flatMap(n=>['--require-native-table-slide',String(n)])],requiredNativeTableOwnerSlides:owners,fontPolicy:{basis:'design',families:['Arial']},verifyArtifactToolImport:true,receiptPath:path.join(stage,'validation-v0.2-utf.json')});
console.log(JSON.stringify(result));
for(const [i,s]of p.slides.items.entries()){const png=await p.export({slide:s,format:'png',scale:1});await fs.writeFile(path.join(root,`.build/previews/slide_${String(i+1).padStart(2,'0')}.png`),new Uint8Array(await png.arrayBuffer()));}
console.log(JSON.stringify({slides:p.slides.items.length,output:finalPath}));



