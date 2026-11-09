import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {Presentation, PresentationFile} from '@oai/artifact-tool';

const root = 'C:/PROYECTOS/ETL/CNX_BLOQUE1';
const build = path.join(root,'.build/reunion_preliminar_20261110');
const out = path.join(root,'outputs/20261109');
const finalPath = path.join(out,'DIARCO_Connexa_Migracion_Reunion_Referentes_20261110_v1.1.pptx');
const skill = 'C:/Users/eduar/.codex/plugins/cache/openai-primary-runtime/presentations/26.1105.12137/skills/presentations';
const font='Arial';
const C={navy:'#0D284B',teal:'#138FA5',cyan:'#1AAEC0',amber:'#E8A51C',ink:'#173553',muted:'#536779',pale:'#F2F6F8',line:'#D8E2E8',white:'#FFFFFF',gray:'#EBF0F3',green:'#278672'};
await fs.mkdir(build,{recursive:true}); await fs.mkdir(out,{recursive:true});
const deck=Presentation.create({slideSize:{width:1280,height:720}});

function rect(s,x,y,w,h,fill,line='none',lw=0){return s.shapes.add({geometry:'rect',position:{left:x,top:y,width:w,height:h},fill,line:{style:'solid',fill:line,width:lw}})}
function txt(s,value,x,y,w,h,size=24,color=C.ink,bold=false){const q=s.shapes.add({geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{style:'solid',fill:'none',width:0}});q.text=value;q.text.style={fontFamily:font,fontSize:size,color,bold};return q}
function slide(title,note=''){const s=deck.slides.add();s.background.fill=C.white;rect(s,0,0,1280,14,C.navy);txt(s,title,60,40,1160,72,37,C.navy,true);rect(s,60,635,1160,2,C.line);txt(s,`DIARCO  ·  Connexa  ·  Reunión de referentes`,60,652,800,28,14,C.muted);txt(s,String(deck.slides.items.length).padStart(2,'0'),1165,652,55,27,14,C.muted);s.speakerNotes.text=note;return s}
function label(s,text,x,y,w,fill=C.teal,color=C.white){rect(s,x,y,w,37,fill);txt(s,text,x+10,y+6,w-20,27,18,color,true)}
function panel(s,x,y,w,h,heading,body,accent=C.teal){rect(s,x,y,w,h,C.pale);rect(s,x,y,w,8,accent);txt(s,heading,x+18,y+21,w-36,44,24,C.navy,true);txt(s,body,x+18,y+76,w-36,h-88,20,C.ink)}
function bullet(s,x,y,head,body){rect(s,x,y+5,8,8,C.teal);txt(s,head,x+24,y-2,1040,31,22,C.navy,true);txt(s,body,x+24,y+31,1040,50,19,C.ink)}

// 1: portada
{
const s=deck.slides.add();s.background.fill=C.navy;rect(s,0,0,28,720,C.teal);rect(s,28,0,8,720,C.amber);
txt(s,'Migración a Connexa',72,116,1050,84,56,C.white,true);
txt(s,'Bloque 1 · reunión preliminar de referentes',74,212,1050,70,32,C.white);
txt(s,'DIARCO + Zeetrex  |  10 de noviembre de 2026',74,337,1050,43,25,C.white);
rect(s,74,472,1020,3,C.cyan);txt(s,'La transición se decide por proceso, datos y evidencia.',74,508,1060,58,29,C.white,true);
s.speakerNotes.text='Guion: documentacion/13_guion_y_prompt_reunion_migracion_20261110.md. Abrir con el propósito de alinear y obtener compromisos nominales. No se presume aceptación por asistencia.';
}

// 2: mapa visual primero
{
const s=slide('El camino de SGM a Connexa','Fuente rectora: documentacion/Plan de Despliegue - Estrategia.md. Guion diapositiva 2 en documentacion/13_guion_y_prompt_reunion_migracion_20261110.md. La transición es por dominio; no hay corte único aprobado.');
const xs=[62,465,868],w=345;
panel(s,xs[0],160,w,280,'SGM hoy','Sostiene la operación y los datos oficiales de stock y pendientes.',C.navy);
panel(s,xs[1],160,w,280,'Convivencia','Connexa inicia procesos habilitados y SGM recibe los datos necesarios para continuar.',C.amber);
panel(s,xs[2],160,w,280,'Connexa estable','Cada proceso y dato cambia de dueño al aprobar su prueba, conciliación y soporte.',C.teal);
txt(s,'→',414,263,45,62,43,C.teal,true);txt(s,'→',817,263,45,62,43,C.teal,true);
rect(s,63,486,1147,68,C.navy);txt(s,'Hito por circuito: un escritor, un emisor y una fecha de traspaso acordada.',82,504,1100,39,23,C.white,true);
}

// 3: por qué
{
const s=slide('Una decisión estratégica de DIARCO','Premisa comunicada por el usuario el 09/11/2026: obsolescencia técnica de SGM y decisión estratégica de migrar. Guion diapositiva 3. No atribuir un acta de aprobación específica inexistente en el expediente.');
txt(s,'Migrar es prioritario. La continuidad de la cadena define el ritmo.',61,145,1130,75,32,C.ink,true);
panel(s,62,262,350,250,'SGM','La obsolescencia técnica aumenta la dependencia del legado.',C.navy);
panel(s,465,262,350,250,'Connexa','Es la plataforma elegida para asumir gradualmente la gestión.',C.teal);
panel(s,868,262,345,250,'DIARCO','Los referentes aportan reglas, pruebas y aceptación para sostener el cambio.',C.amber);
}

// 4: alcance B1/B2
{
const s=slide('Bloque 1 y Bloque 2','B1: documentacion/01_estrategia_y_compromiso_direccion.md. B2: Plan_Connexa_20261016.pdf y Estrategia; es hoja de ruta orientativa, sin baseline final ni fecha. La interfaz mínima Valkimia C14 se prepara en B1; evolución logística puede seguir en B2.');
rect(s,62,153,563,425,C.pale);rect(s,62,153,563,54,C.navy);txt(s,'BLOQUE 1 · núcleo operativo',81,166,530,34,25,C.white,true);
txt(s,'Maestros y artículos\nSurtido por categoría, sujeto a diseño\nListas y condiciones de compra\nForecast, compras y OC\nRecepciones e inventarios\nPDD y transferencias con integración\nStock, conciliación y soporte',83,232,520,330,22,C.ink);
rect(s,654,153,563,425,C.pale);rect(s,654,153,563,54,C.teal);txt(s,'BLOQUE 2 · consolidación prevista',673,166,530,34,25,C.white,true);
txt(s,'Precios de venta y márgenes\nPublicación de precios y promociones\nKardex valorizado y costos\nConciliaciones de mayor alcance\nVisión centralizada de stock y BI\nEvoluciones logísticas y de terceros',675,232,520,330,22,C.ink);
txt(s,'El alcance fino y las fechas de B2 se acuerdan por separado.',64,596,1150,35,19,C.muted);
}

// 5: sentido del dato
{
const s=slide('El flujo cambia cuando cambia el dueño del dato','Fuentes: Estrategia y minutas S33, S39 en documentacion/06_minutas_y_preparacion_paralelo.md. La sincronización recurrente de listas SGM→Connexa está pendiente de implementar/probar; no darla por disponible.');
const data=[
['Listas mientras manda SGM','SGM  →  Connexa','Lectura recurrente a desarrollar y conciliar.'],
['Listas cuando manda Connexa','Connexa  →  SGM','Desactivar la lectura anterior y publicar la lista aprobada.'],
['OC habilitada','Connexa  →  SGM','SGM continúa recepción y envío único al proveedor.'],
['Stock y pendientes iniciales','SGM  →  Connexa','SGM conserva la autoridad hasta otro gate.']
];
data.forEach((d,i)=>{const y=150+i*108;rect(s,64,y,1150,94,i%2?C.white:C.pale,C.line,1);rect(s,64,y,12,94,i===1?C.amber:C.teal);txt(s,d[0],87,y+11,380,31,21,C.navy,true);txt(s,d[1],470,y+12,355,31,22,C.teal,true);txt(s,d[2],835,y+11,355,65,18,C.ink)});
}

// 6: gates
{
const s=slide('Las etapas de cada frente','Método: documentacion/02_metodo_gobierno_y_soporte.md. G1 acepta UAT en TEST, G2 observa paralelo productivo controlado, G3 expande, G4 transfiere operación.');
const steps=[['G0','Equipo y alcance'],['1','Formación y datos'],['G1','UAT aceptada'],['G2','Paralelo controlado'],['G3','Expansión'],['G4','Operación transferida']];
steps.forEach((d,i)=>{const x=60+i*201;rect(s,x,190,180,214,i===3?'#FFF4D9':C.pale);rect(s,x,190,180,50,i===3?C.amber:(i>=4?C.teal:C.navy));txt(s,d[0],x+19,202,140,32,27,i===3?C.navy:C.white,true);txt(s,d[1],x+17,266,148,104,21,C.ink,true);if(i<5)txt(s,'→',x+183,268,30,42,25,C.teal,true)});
rect(s,60,466,1156,80,C.navy);txt(s,'Disponibilidad técnica, permiso de operar y expansión son decisiones diferentes.',80,481,1110,57,24,C.white,true);
}

// 7: equipos
{
const s=slide('Qué hace cada equipo','Roles: documentacion/02_metodo_gobierno_y_soporte.md y 11_capacitacion_usuarios_y_accesos.md. Cada nombramiento, tiempo y facultad siguen sujetos a aceptación en Asignaciones.');
panel(s,62,155,270,394,'Referentes DIARCO','Entregan casos y datos reales. Aprenden, ejecutan UAT, registran evidencia y luego ayudan a los usuarios.',C.navy);
panel(s,353,155,270,394,'Dueños DIARCO','Aprueban reglas y esperados. Aceptan el circuito probado. Piden capacidad a sus jefaturas.',C.amber);
panel(s,644,155,270,394,'IT y mesa','Habilitan accesos, interfaces y soporte local. La mesa sigue tickets; IT cuida continuidad.',C.teal);
panel(s,935,155,280,394,'Zeetrex','Capacita y acompaña pruebas. Corrige defectos y da soporte especializado L2.',C.cyan);
}

// 8: piloto
{
const s=slide('Primer piloto: No Comestibles','Fuentes: documentacion/08_reunion_y_cronograma_piloto_no_comestibles.md y 12_lote_pruebas_y_evidencia_referentes.md. Liliana y Carolina figuran en M05 del Excel editado 09/11. Tres proveedores distintos.');
panel(s,62,153,354,285,'1 · Habitual','Lista vigente y compra frecuente. Verificar propuesta, OC, aprobación y llegada a SGM.',C.navy);
panel(s,463,153,354,285,'2 · Regla exigente','Precio por sucursal, descuento o impuesto particular. Comparar la valorización por línea.',C.amber);
panel(s,864,153,351,285,'3 · Excepción real','Campaña, bulto, rechazo o entrega parcial. Verificar respuesta y recuperación.',C.teal);
rect(s,62,486,1153,70,C.navy);txt(s,'Liliana y Carolina eligen datos; Compras aprueba el esperado; Zeetrex prepara TEST.',82,501,1105,48,22,C.white,true);
}

// 9: pruebas
{
const s=slide('La prueba termina con evidencia','Fuentes: documentacion/08_reunion_y_cronograma_piloto_no_comestibles.md y 06_minutas_y_preparacion_paralelo.md. D-01–D-08 no se consideran cerrados. Comparación OC por línea y estado.');
const steps=[['Ejecutar','Usuario DIARCO registra caso, ambiente y versión.'],['Comparar','Esperado aprobado, Connexa y SGM en el mismo corte.'],['Corregir','Desvío con ticket, impacto y dueño el mismo día.'],['Reprobar','Nueva ejecución; el dueño acepta o mantiene abierto.']];
steps.forEach((d,i)=>{const x=62+i*294;rect(s,x,174,274,265,C.pale);rect(s,x,174,274,9,i===2?C.amber:C.teal);txt(s,d[0],x+20,207,232,45,27,C.navy,true);txt(s,d[1],x+20,276,232,128,21,C.ink);if(i<3)txt(s,'→',x+276,278,23,45,22,C.teal,true)});
txt(s,'Antes de G1: listas vigentes, permisos y observaciones D-01 a D-08 con resolución o decisión registrada.',65,487,1148,78,22,C.ink,true);
}

// 10: M05
{
const s=slide('M05 · asignaciones de OC por frente','Fuente: DIARCO_Bloque1_Plan_v0.5.xlsx, hoja Asignaciones, filas 10–15, editado 09/11. L13 Confirmado sólo en Compromiso. H,K,M,N,P vacíos y Q Sin confirmar en las seis filas. Las parejas de Matriz circuitos C04/C06/C08 difieren; reconciliar M04 y M05.');
const cols=[64,421,791,1100];
rect(s,62,143,1153,49,C.navy);txt(s,'Frente',cols[0]+12,153,320,30,20,C.white,true);txt(s,'Titular propuesto',cols[1]+10,153,340,30,20,C.white,true);txt(s,'Suplente propuesto',cols[2]+10,153,285,30,20,C.white,true);txt(s,'Comp.',cols[3]+10,153,90,30,18,C.white,true);
const data=[['Food / OC madre','Sebastián Basconcelos','Marcelo Cingolani','Pend.'],['Perecederos','Roxana Frutos','Darwin Leon','Pend.'],['Carnes','Facundo Toledo','Cristian Escudero','Pend.'],['No Comestibles',"Liliana D'Amico",'Carolina Tavernisse','Conf.'],['Perfumería/Limpieza','Camila Klipauka','Romina Garfi','Pend.'],['Barrio','Paloma Romero','Suplente por precisar','Pend.']];
data.forEach((d,i)=>{const y=193+i*57;rect(s,62,y,1153,55,i%2?C.white:C.pale,C.line,1);txt(s,d[0],cols[0]+12,y+9,335,38,19,C.ink,true);txt(s,d[1],cols[1]+10,y+9,345,38,19,C.ink);txt(s,d[2],cols[2]+10,y+9,302,38,19,C.ink);txt(s,d[3],cols[3]+10,y+9,100,38,18,d[3]==='Conf.'?C.green:C.muted,true)});
txt(s,'En las seis filas faltan jefatura, agenda y aceptación del dueño. “Conf.” no equivale a equipo aprobado.',64,557,1138,57,19,C.navy,true);
}

// 11: gantt graphic
{
const s=slide('Gantt general · ventanas tentativas','Fuente: documentacion/09_gantt_integrado_tentativo_bloque1.md. Barras de trabajo, no fechas de producción. C02/C14 sin UAT aprobada. Restricción de cajas desde 15/12 es propuesta por ratificar.');
const x0=299,cw=175;const heads=['10–13 nov','16–27 nov','30 nov–11 dic','14–31 dic','enero'];
heads.forEach((h,i)=>{rect(s,x0+i*cw,147,cw-3,49,C.navy);txt(s,h,x0+i*cw+8,159,cw-16,30,17,C.white,true)});
const rows=[['C07 · No Comestibles',[[0,1,C.teal],[1,1,C.amber],[2,1,C.green]]],['C01/C03/C15 · base',[[0,1,C.teal],[1,1,C.teal]]],['Otros frentes de compra',[[1,1,C.teal],[2,1,C.amber],[3,1,C.green],[4,1,C.gray]]],['Recepción e inventarios',[[2,1,C.teal],[3,1,C.amber],[4,1,C.green]]],['C02 · diseño Menaje',[[2,1,C.teal],[3,1,C.teal]]],['C14 · contrato y prueba',[[0,1,C.teal],[1,1,C.teal],[2,1,C.teal],[3,1,C.teal]]]];
rows.forEach((row,i)=>{const y=205+i*63;rect(s,62,y,1153,58,i%2?C.white:C.pale,C.line,1);txt(s,row[0],75,y+14,214,36,18,C.ink,true);for(const [st,len,col] of row[1])rect(s,x0+st*cw+9,y+18,cw*len-23,22,col)});
txt(s,'Turquesa: preparación/prueba técnica   ·   Ámbar: UAT   ·   Verde: paralelo   ·   Gris: posterior',64,589,914,24,15,C.ink);
rect(s,995,587,217,29,C.amber);txt(s,'15/12 · resguardo cajas',1000,592,207,22,15,C.navy,true);
}

// 12: primera semana
{
const s=slide('Agenda inmediata','Fuentes: documentacion/10_reunion_inicio_referentes_20261110.md, 11_capacitacion_usuarios_y_accesos.md y 08_reunion_y_cronograma_piloto_no_comestibles.md. Fechas tentativas sujetas a agenda. 10/11 puede afectar asistencia por feriado regional; ofrecer recuperación.');
const data=[['10/11','Alineación de referentes','Nombres, responsabilidad y pedido de aprobación.'],['12 o 13/11','Base común Connexa y TEST','Una de dos sesiones; acceso y datos solicitados.'],['12/11','Reunión sectorial C07 propuesta','Tres proveedores, documentos y esperado por caso.'],['18–25/11','Práctica y UAT C07 tentativas','Registrar diferencias, corregir y pedir aceptación G1.']];
data.forEach((d,i)=>{const y=151+i*113;rect(s,63,y,1150,99,C.pale);rect(s,63,y,135,99,i===0?C.amber:C.teal);txt(s,d[0],76,y+22,115,53,23,i===0?C.navy:C.white,true);txt(s,d[1],224,y+12,410,37,23,C.navy,true);txt(s,d[2],224,y+53,940,35,19,C.ink)});
}

// 13: dependencias
{
const s=slide('Tres dependencias que condicionan el ritmo','Fuentes: Estrategia, documentacion/06_minutas_y_preparacion_paralelo.md y 09_gantt_integrado_tentativo_bloque1.md. No atribuir avances físicos o técnicos no verificados.');
panel(s,62,156,354,357,'Recepción de la cadena','AP, Wi-Fi y PDA por sitio. Probar recepción, pendientes e impacto en SGM antes de habilitar una sucursal.',C.navy);
panel(s,463,156,354,357,'Valkimia · Base 2','Faltan contrato, VPN y TEST. Una carga manual requiere retorno de estados y control de pendientes.',C.amber);
panel(s,864,156,351,357,'Surtido C02','DIARCO pidió grupos por categoría. Menaje será el caso para validar diseño y publicación.',C.teal);
txt(s,'Cada dependencia necesita responsable, evidencia y fecha de próxima decisión.',64,552,1150,42,22,C.ink,true);
}

// 14: fin de año
{
const s=slide('Resguardo de la operación de fin de año','Instrucción del usuario 09/11/2026: probablemente desde 15/12 no hacer cambios que afecten línea de cajas. Se presenta como propuesta a ratificar por IT y Operaciones, no regla ya aprobada.');
rect(s,63,160,245,300,C.amber);txt(s,'15/12',82,203,200,69,52,C.navy,true);txt(s,'Inicio propuesto del resguardo',82,299,200,92,24,C.navy,true);
rect(s,337,160,878,300,C.pale);bullet(s,358,186,'Puede continuar','Capacitación, datos, pruebas en TEST y correcciones aisladas.');bullet(s,358,297,'Requiere evaluación','Todo despliegue o integración que pueda afectar cajas, precios o disponibilidad de tienda.');
rect(s,63,493,1152,70,C.navy);txt(s,'IT y Operaciones DIARCO deben definir alcance, excepciones y autorizador.',83,506,1102,52,23,C.white,true);
}

// 15: soporte
{
const s=slide('Soporte y decisión por circuito','Fuente: documentacion/02_metodo_gobierno_y_soporte.md. L1, IT y L2 son roles propuestos; nombres/cobertura a confirmar. El dueño funcional firma aceptación, sponsor e IT autorizan expansión.');
const data=[['Usuario y referente','Uso, reglas conocidas y evidencia inicial'],['Mesa DIARCO · L1','Registra, prioriza, informa y sigue el ticket'],['IT DIARCO','Accesos, conectividad e interfaces locales'],['Zeetrex · L2','Diagnóstico, corrección y prueba técnica'],['Dueño / sponsor','Aceptación funcional y decisión de expansión']];
data.forEach((d,i)=>{const y=151+i*91;rect(s,64,y,1148,79,i%2?C.white:C.pale,C.line,1);rect(s,64,y,10,79,i===4?C.amber:C.teal);txt(s,d[0],90,y+17,394,40,21,C.navy,true);txt(s,d[1],495,y+17,685,46,21,C.ink)});
}

// 16: cierre
{
const s=slide('Compromisos para salir de la reunión','Fuente: libro v0.5, Asignaciones, columnas H–Q. Guion y campos: documentacion/13_guion_y_prompt_reunion_migracion_20261110.md. No llenar aprobaciones antes de recibir respuesta expresa.');
const data=[['1','Persona y rol','Titular, suplente, dueño y autorizador por frente.'],['2','Tiempo y agenda','Horas protegidas, jefatura que libera y ventanas de trabajo.'],['3','Aceptación expresa','Compromiso individual, aceptación de jefatura y facultad del dueño.'],['4','Próximo entregable','Lote, usuarios, capacitación, prueba y fecha de devolución.']];
data.forEach((d,i)=>{const y=144+i*113;rect(s,63,y,1152,98,C.pale);rect(s,63,y,67,98,i===3?C.amber:C.teal);txt(s,d[0],82,y+24,40,54,36,i===3?C.navy:C.white,true);txt(s,d[1],151,y+14,388,37,23,C.navy,true);txt(s,d[2],151,y+51,1004,40,20,C.ink)});
}

const draft=path.join(build,'draft.pptx');await(await PresentationFile.exportPptx(deck)).save(draft);
for(const [i,s] of deck.slides.items.entries()){const blob=await deck.export({slide:s,format:'png',scale:0.75});await fs.writeFile(path.join(build,`slide-${String(i+1).padStart(2,'0')}.png`),new Uint8Array(await blob.arrayBuffer()))}
const {finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
const result=await finalizePresentation({workspaceDir:root,candidatePath:draft,finalPath,pythonExecutable:'C:/Users/eduar/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe',integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-heading-fit'],requiredNativeTableOwnerSlides:[],fontPolicy:{basis:'design',families:[font]},verifyArtifactToolImport:true,receiptPath:path.join(build,'validation-v1.1.json')});
console.log(JSON.stringify({slides:deck.slides.items.length,finalPath,sha256:result.finalSha256,package:result.packageIntegrity.status,layout:result.presentationLayout.finding_count,import:result.firstPartyImport.passed}));
