"""Amplía el libro editado por el usuario sin modificar sus hojas originales."""
from pathlib import Path
from hashlib import sha256
import json
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.utils import get_column_letter
from openpyxl.workbook.properties import CalcProperties

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'outputs/20261029/DIARCO_Bloque1_Plan_v0.4.xlsx'
OUT = ROOT / 'outputs/20261105/DIARCO_Bloque1_Plan_v0.5.xlsx'
original_hash = sha256(SOURCE.read_bytes()).hexdigest()
w = openpyxl.load_workbook(SOURCE)
original_sheets = list(w.sheetnames)
assign = {w['Asignaciones'].cell(r, 1).value: r for r in range(6, 16)}
uat = {str(w['UAT'].cell(r, 1).value): r for r in range(6, 39)}
wbs = {str(w['WBS'].cell(r, 1).value): r for r in range(6, w['WBS'].max_row+1)}

def source_value(module, column):
    return w['Asignaciones'].cell(assign[module], column).value

def circuit(cid, area, module, modules, titular, suplente, focus, templates, note='', source_col='F'):
    return dict(id=cid, area=area, module=module, modules=modules, titular=titular,
                suplente=suplente, focus=focus, templates=templates, note=note,
                source=f'Asignaciones!{source_col}{assign[module]}')

C = []
def direct(cid, area, m, focus, templates, note=''):
    C.append(circuit(cid, area, m, [m], str(source_value(m, 6) or '').strip(),
                     str(source_value(m, 7) or '').strip(), focus, templates, note))

direct('C01','Datos Maestros','M01','Alta/cambio, unidades y duplicados; separación de administración y auditoría.',
       ['UAT-M01-1','UAT-M01-2'], 'Suplente no informado; no atribuir la administración cotidiana a Auditoría.')
direct('C02','Surtido transversal','M02','Categoría real: surtido básico/ampliado, artículo-sucursal, exclusión y vigencia.',
       ['UAT-M02-1','UAT-M02-2'])
direct('C03','Listas y acuerdos transversal','M03','Vigencias, precedencia por sucursal, FP/MP y descuentos aditivos/cascada. Separar liquidaciones posteriores en SGM.',
       ['UAT-M03-1','UAT-M03-2'])

# El usuario establece el orden titular / suplente. Conservar grafías originales.
sectors = [
 ('C04','Perfumería y Limpieza','Romina Garfi','Camila Klipauka',
  'Relevar presentaciones/bultos, descuentos FP/MP, promociones y variedad; conciliar neto de OC.', ''),
 ('C05','Carnes','Facundo Toledo','Cristian Escudero',
  'Confirmar pesables, unidad/peso/bulto, conversión, variación de cantidad y recepción; OC madre si aplica.', ''),
 ('C06','Perecederos','Roxana Furtos','Diego Baldi',
  'Confirmar frecuencia, vida útil, cobertura, pesables/conversiones y entregas parciales; OC madre si aplica.',
  'La fuente agrega (Darwin Leon). Su función está por precisar. Se conserva Roxana Furtos tal como figura en el Excel.'),
 ('C07','No Comestibles (Non-Food)',"Liliana D'Amico",'Carolina Tavernisse',
  'Confirmar estacionalidad/campaña, baja rotación, amplitud del surtido, mínimos y bultos de compra.', ''),
 ('C08','Barrio (formato)','Cecilia Camus','Paloma Romero',
  'Confirmar cobertura por tienda, surtido/unidades del formato y fraccionamiento; cruzar con categorías aplicables.',
  'Barrio es un formato: probar las categorías que incluya; no se presume equivalente a una categoría comercial.'),
]
for cid,area,t,s,focus,note in sectors:
    C.append(circuit(cid,area,'M04',['M03','M04','M05','M10'],t,s,focus,
                     ['UAT-E2E-01','UAT-OC-PAR-02','UAT-M05-2','UAT-M04-1'],
                     note+' Pareja repetida en M04/F9 y M05/F10; no duplicar horas por cada módulo.'))

C.append(circuit('C09','OC madre Mayorista','M05',['M05','M06','M10'],'','Marcelo Cingolani',
 'Saldo/vigencia madre-hija, recepción PDA parcial, concurrencia, cambio de lista y sobre-recepción.',
 ['UAT-M05-3','UAT-M05-4'],
 'Marcelo figura en G10 como suplente (OC Madre Mayorista); no se lo convierte en titular. Definir titular y articulación con Compras/Recepción.', 'G'))
C.append(circuit('C10','Recepción Mayorista','M06',['M06','M10'],'Fernando Ureña','Rodolfo Herlein',
 'Recepción parcial/diferencias, PDA, recuperación, autorización y procesamiento final de remito/movimiento en SGM.',
 ['UAT-M06-1','UAT-M06-2','UAT-M06-3'],
 'G11 agrega Leandro xxx: completar identidad, rol y cobertura; no sustituye la pareja Mayorista.'))
C.append(circuit('C11','Recepción Barrio','M06',['M06','M10'],'Pablo Pichinini','Cecilia Camus',
 'Recepción parcial/diferencias y recuperación PDA en sitio Barrio; conciliar documento y stock SGM.',
 ['UAT-M06-1','UAT-M06-2','UAT-M06-3'],
 'G11 agrega Leandro xxx: completar identidad, rol y cobertura; no sustituye la pareja Barrio.'))
C.append(circuit('C12','Inventarios y ajustes','M07',['M07','M10'],'Javier Dafonte','Fabio Basoler',
 'Foto inicial/corte, mapa/QR, conteo/recuento, autorización y aplicación del ajuste en SGM.',
 ['UAT-M07-1','UAT-M07-2','UAT-M07-3'],
 'F12 indica Javier Dafonte / Fabio Basoler; G12 agrega Diego Llañez. Conservar ambos respaldos y precisar alcance/orden, sin descartar G12.'))
direct('C13','PDD / planificación comercial','M08','Cobertura, prioridades/exclusiones, stock neto y backlog; validar con Logística, sin confundir necesidad con viaje.',
       ['UAT-M08-1','UAT-M08-2'], 'Christian Rojas / Logística participa por dependencia M09; no se lo reasigna como titular M08.')
direct('C14','Distribución / Valkimia','M09','Contrato y retorno preparado/despachado/no preparado, remito, cambio de destino y redespacho sin duplicación.',
       ['UAT-M09-1','UAT-M09-2','UAT-M09-3'], 'Interfaz/contingencia Valkimia y disponibilidad externa pendientes de evidencia; la matriz no habilita operación.')
direct('C15','Stock e integración SGM','M10','Corte/latencia, stock y pendientes, reconexión, alertas y recuperación sin pisar estados válidos.',
       ['UAT-M10-1','UAT-M10-2','UAT-M10-3'])

NAVY='17365D'; TEAL='DDEBF7'; YELLOW='FFF2CC'
def sheet(name, title, note, headers):
    s=w.create_sheet(name)
    s.append([title]); s.append([note]); s.append([]); s.append(headers)
    s.merge_cells(start_row=1,start_column=1,end_row=1,end_column=min(len(headers),7))
    s.merge_cells(start_row=2,start_column=1,end_row=2,end_column=min(len(headers),7))
    s.row_dimensions[1].height=28; s.row_dimensions[2].height=58
    s['A1'].font=Font(size=16,bold=True,color=NAVY)
    s['A2'].alignment=Alignment(wrap_text=True,vertical='top')
    s.freeze_panes='D5'; s.sheet_view.zoomScale=75
    s.sheet_properties.pageSetUpPr.fitToPage=True
    s.page_setup.orientation='landscape'; s.page_setup.paperSize=s.PAPERSIZE_A3
    s.page_setup.fitToWidth=1; s.page_setup.fitToHeight=0
    s.print_title_rows='1:4'
    return s

def finish(s, editable=()):
    for c in s[4]:
        c.fill=PatternFill('solid',fgColor=NAVY); c.font=Font(color='FFFFFF',bold=True)
        c.alignment=Alignment(wrap_text=True,vertical='top')
    s.row_dimensions[4].height=45
    for row in s.iter_rows(min_row=5):
        s.row_dimensions[row[0].row].height=100
        for c in row:
            c.alignment=Alignment(wrap_text=True,vertical='top')
            c.font=Font(size=10,color=NAVY if c.hyperlink else '222222')
            c.fill=PatternFill('solid',fgColor=YELLOW if c.column in editable else ('F0F5FA' if c.row%2 else 'FFFFFF'))
    for i in range(1,s.max_column+1):s.column_dimensions[get_column_letter(i)].width=26 if i>2 else 20
    s.auto_filter.ref=f'A4:{get_column_letter(s.max_column)}{s.max_row}'

def link(cell, name, row, col='A'):
    cell.hyperlink=f"#'{name}'!{col}{row}"
    cell.font=Font(color='0563C1',underline='single')

def choices(s,col,values):
    d=DataValidation(type='list',formula1='"'+','.join(values)+'"',allow_blank=True)
    d.errorTitle='Valor no válido'; d.error='Elegir un valor de la lista.'; d.showErrorMessage=True
    s.add_data_validation(d); d.add(f'{col}5:{col}1000')

guide=sheet('Guia matriz','Matriz por sector y circuito · 05/11/2026',
 'Extensión operativa del libro v0.4 editado por el usuario. Nombres y horas proceden de Asignaciones; los nuevos casos son propuestas sin ejecución ni aceptación acreditadas.',
 ['Paso','Hoja / referencia','Cómo utilizarla','Responsabilidad / control'])
for row in [
 ('1','Matriz circuitos','Filtrar sector/circuito y acordar población, particularidades y alcance. Los enlaces abren las hojas relacionadas.','Referente + dueño del proceso.'),
 ('2','Equipo circuitos','Titular / suplente se interpreta en ese orden; paréntesis indican área. Se conservan textos fuente y apoyos adicionales.','Resolver anotaciones de Darwin Leon, Leandro xxx, Diego Llañez y OC madre.'),
 ('3','Formacion circuitos','Completar material, agenda y evaluación individual. Formación común por módulo + taller del sector + práctica individual.','CMZ/ZF coordinan; RF y suplente demuestran. Asistencia no implica aptitud.'),
 ('4','Casos circuitos','Diseño de pruebas por circuito con plantilla UAT y WBS existentes. Acordar población/volumen/reglas antes de ejecutar.','Negocio aprueba esperado y tolerancias; sin ellos no se acepta el caso.'),
 ('5','Ejecuciones circuitos','Completar ejecución inicial precargada por caso. Agregar otra fila con nuevo ID para cada ciclo/reprueba/versión; conservar anteriores.','Resultado y evidencia sólo aquí para los casos CC-*; UAT mantiene casos genéricos e historia anterior.'),
 ('6','Aceptacion circuitos','Registrar dueño, alcance, versión, criterio aprobado y decisión por circuito; completar referencias a ejecuciones y aptitud.','No heredar aceptación de otro sector. Aceptación funcional no sustituye autorización productiva/Gates.'),
 ('7','WBS / Gates','Usar IDs existentes; G0/G1/G2/G3/G4 se aplican a la población autorizada. Registrar decisión productiva en Gates.','No hay nuevas fechas comprometidas. Verificar situación posterior al 04/11 antes de replanificar.'),
 ('8','Horas en Asignaciones','6 h titular y 4 h suplente por semana son valores cargados por módulo. No se multiplican por caso, circuito o persona sin acuerdo.','Consolidar personas únicas, roles cruzados y agenda; aprobación de jefaturas pendiente según campos fuente.'),
 ('9','Volumen y complejidad','Medir proveedores, artículos, líneas/OC, sucursales, frecuencia, concurrencia, picos, reglas y excepciones de cada sector.','Umbrales de tiempo, carga y conciliación quedan por acordar; sin inventar cifras.'),
 ('10','Asignaciones / UAT / Formacion','Las 14 hojas originales se preservan. Asignaciones es fuente nominal; las nuevas hojas detallan circuitos y nuevas ejecuciones.','Si cambia una asignación, actualizar Equipo/Matriz/Formacion; no editar textos fuente para borrar historia.'),
]:guide.append(row)

matrix=sheet('Matriz circuitos','Sector → circuito → equipo → formación → pruebas → aceptación',
 '15 circuitos iniciales. Particularidades propuestas para validar con el sector. Barrio es un formato y debe cruzarse con las categorías de su población. Ningún estado equivale a aprobación productiva.',
 ['ID circuito','Sector / formato','Módulos involucrados','Titular','Suplente','Particularidades a validar','Perfil de volumen / complejidad','Población y proveedores piloto','Equipo / fuente','Formación','Casos específicos','Ejecuciones','Aceptación','WBS vinculada','Dependencias / aclaraciones','Circuitos relacionados'])
team=sheet('Equipo circuitos','Asignaciones interpretadas por circuito',
 'Se conserva la grafía de origen. Una pareja repetida entre M04 y M05 no genera una segunda reserva de horas. Aclaraciones pendientes no invalidan las parejas explícitas.',
 ['ID circuito','Sector / formato','Módulo fuente','Titular interpretado','Suplente interpretado','Texto original F','Texto original G','Celda fuente','h titular fuente','h suplente fuente','Jefatura fuente','Compromiso fuente','Dueño nominal fuente','Aceptación dueño fuente','Aclaración / apoyo adicional','Confirmación interpretación'])
training=sheet('Formacion circuitos','Formación y aptitud individual por circuito',
 'Dos registros por circuito. Formación base de los módulos enlazada; práctica específica con datos del sector. Completar evaluaciones individualmente; no duplicar horas de Asignaciones.',
 ['ID formación','Circuito','Sector','Rol','Persona','Base común / Formacion','Taller específico','Qué debe demostrar','CMZ / coordinación propuesta','Facilitador / evaluador','Material / versión','Fecha sesión','Fecha evaluación','Resultado aptitud','Brecha / próxima acción','Evidencia','Reprueba prevista'])
cases=sheet('Casos circuitos','Diseño de casos específicos por sector y circuito',
 'Plantillas genéricas vinculadas a UAT. Preparación, resultados esperados y carga deben ser acordados con negocio. Esta hoja define casos; las ejecuciones se registran en Ejecuciones circuitos.',
 ['ID caso','Circuito','Sector','Tipo','Plantilla UAT','Escenario / pasos','Particularidad sectorial','Preparación requerida','Esperado propuesto / validar','Perfil de carga / volumen','Criticidad propuesta','WBS UAT','Primera ejecución'])
exe=sheet('Ejecuciones circuitos','Registro único de nuevas ejecuciones CC-*',
 'Una fila por ejecución. Las filas iniciales no acreditan prueba realizada. Para reprueba/ciclo agregar fila con ID único y referencia a la anterior; conservar casos, versión, población, corte y evidencia.',
 ['ID ejecución','ID caso','Circuito','Sector','Ambiente','Versión','Población / dataset / corte','Volumen y concurrencia reales','Esperado y tolerancia aprobados / enlace','Aprobador esperado','Fecha aprobación esperado','Ejecutor','Rol','Fecha ejecución','Observado / métricas','Resultado','Defecto / ticket','Evidencia','Ejecución anterior','Próxima acción / responsable / fecha'])
accept=sheet('Aceptacion circuitos','Aceptación funcional y alcance por circuito',
 'Registrar aceptación específica, sin extenderla a otros sectores. Consolidar formación, todas las ejecuciones aplicables y defectos. Gates conserva la autorización productiva. No hay decisiones automáticas.',
 ['ID aceptación','Circuito','Sector','Titular','Suplente','Dueño nominal que acepta','Alcance / exclusiones / población','Ambiente / versión','Criterio y tolerancias aprobados','Formación requerida','Casos requeridos','Ejecuciones / ciclos / evidencia','Defectos abiertos / tratamiento','Decisión funcional','Fecha decisión','Evidencia / acta','Gates / autorización productiva','Próxima acción / responsable / fecha'])

for i,c in enumerate(C,5):
    cid=c['id']; m=c['module']; ar=assign[m]; num=int(m[1:]); mods=c['modules']
    module_wbs=[f'3.{int(mm[1:]):02d}.{k:02d}' for mm in mods for k in (3,4,5,6)]
    assert all(x in wbs for x in module_wbs)
    extra = '2.10; 2.14' if cid=='C09' else '2.10' if cid in {x[0] for x in sectors} else '2.04'
    matrix.append([cid,c['area'],'; '.join(mods),c['titular'],c['suplente'],c['focus'],
       'Por relevar: proveedores, artículos, líneas/OC, sucursales, frecuencia, pico, concurrencia y excepciones.',
       '',cid,f'FC-{cid}-T / FC-{cid}-S',f'CC-{cid}-*',f'EJ-{cid}-*-01',f'AC-{cid}',
       '; '.join(module_wbs)+'; '+extra,c['note'],
       'C01; C02; C03; C15; C10/C11 según formato; C09 si aplica OC madre' if cid in {x[0] for x in sectors}
       else {'C01':'C02; C03; C04–C08','C02':'C01; C04–C08; C13',
             'C03':'C01; C04–C08; C15','C09':'C04–C08 según categoría; C10; C15',
             'C10':'C04–C08 según categoría; C09 si aplica; C15',
             'C11':'C08; C04–C07 según categoría; C15','C12':'C01; C15',
             'C13':'C01; C02; C14; C15','C14':'C13; C15; Valkimia/CD externo',
             'C15':'C04–C14 según alcance de interfaz'}[cid]])
    team.append([cid,c['area'],m,c['titular'],c['suplente'],source_value(m,6),source_value(m,7),c['source'],
       source_value(m,9),source_value(m,10),source_value(m,8),source_value(m,12),source_value(m,16),source_value(m,17),c['note'],
       'Interpretado del Excel; revisar aclaraciones' if c['note'] else 'Interpretado del Excel'])
    training_start=training.max_row+1; cases_start=cases.max_row+1; exe_start=exe.max_row+1
    for role,name,suffix,offset in [('Titular',c['titular'],'T',0),('Suplente',c['suplente'],'S',1)]:
        refs=[f'Formacion!A{6+2*(int(mm[1:])-1)+offset}' for mm in mods]
        training.append([f'FC-{cid}-{suffix}',cid,c['area'],role,name,'; '.join(refs),c['focus'],
           'Ejecutar caso normal y excepción, explicar cálculo/estado e integración y registrar/escalar una incidencia; demostrar práctica individual.',
           'Pablo Duplessy (según Gobierno, propuesta)','','','','','No evaluado',
           'Designar persona' if not name else 'Acordar agenda, material y práctica','',''])
        link(training.cell(training.max_row,6),'Formacion',int(refs[0].split('A')[-1]))
    # Cada sector de compras tiene caso normal, excepción, reintento y volumen propios.
    is_buy=cid in {x[0] for x in sectors}
    specs=[]
    for j,template in enumerate(c['templates']):
        assert template in uat
        r=uat[template]
        typ=('Normal integral','Excepción de regla/valor','Recuperación / reintento','Volumen y complejidad')[j] if is_buy else ('Funcional / integración' if j==0 else 'Excepción / control')
        steps=w['UAT'].cell(r,7).value
        expected=w['UAT'].cell(r,8).value
        if is_buy and j==3:
            steps='Ejecutar propuesta y OC sobre volumen representativo y pico acordado del sector, con concurrencia realista; medir tiempos, errores y conciliación.'
            expected='Cumple umbrales de tiempo/carga previamente acordados; cantidades/valores conciliados, trazabilidad completa y ausencia de pérdida/duplicación.'
        specs.append((template,typ,steps,expected))
    # Controles compartidos instanciados por circuito, evitando que un éxito ajeno lo habilite.
    specs.extend([
      ('UAT-SEG-01','Permisos / segregación',w['UAT'].cell(uat['UAT-SEG-01'],7).value,w['UAT'].cell(uat['UAT-SEG-01'],8).value),
      ('UAT-SOP-01','Soporte',w['UAT'].cell(uat['UAT-SOP-01'],7).value,w['UAT'].cell(uat['UAT-SOP-01'],8).value)])
    for j,(template,typ,steps,expected) in enumerate(specs,1):
        caseid=f'CC-{cid}-{j:02d}'; exid=f'EJ-{cid}-{j:02d}-01'
        prep='Población y dataset/corte reales, reglas/esperado/tolerancias aprobados, versión, permisos y control de efectos externos. '+str(w['UAT'].cell(uat[template],6).value or '')
        cases.append([caseid,cid,c['area'],typ,template,steps,c['focus'],prep,expected,
          'Acordar volumen habitual y pico del sector; medir líneas/documentos/sucursales, concurrencia y tiempo. No extrapolar desde otro sector.',
          'Crítica (validar)', '; '.join(f'3.{int(mm[1:]):02d}.04' for mm in mods),exid])
        exe.append([exid,caseid,cid,c['area'],'','','','','','','','','','','','No ejecutado','','','','Acordar datos, esperado, ejecutor y ventana'])
        link(cases.cell(cases.max_row,5),'UAT',uat[template]); link(cases.cell(cases.max_row,13),'Ejecuciones circuitos',exe.max_row)
        link(exe.cell(exe.max_row,2),'Casos circuitos',cases.max_row)
    case_ids=[f'CC-{cid}-{j:02d}' for j in range(1,len(specs)+1)]
    accept.append([f'AC-{cid}',cid,c['area'],c['titular'],c['suplente'],source_value(m,16),'','','',
       f'FC-{cid}-T; FC-{cid}-S','; '.join(case_ids),'','','Pendiente','','',
       'G1/G2 por población; G3 para expansión. Registrar versión, alcance, decisor, fecha y evidencia en Gates.',
       'Acordar dueño, alcance, datos/volumen, criterio, agenda y dependencias.'])
    for col,sname,row in [(9,team.title,i),(10,training.title,training_start),(11,cases.title,cases_start),(12,exe.title,exe_start),(13,accept.title,i)]:link(matrix.cell(i,col),sname,row)
    link(matrix.cell(i,1),team.title,i); link(team.cell(i,8),'Asignaciones',ar,c['source'].split('!')[1][0])
    link(accept.cell(i,10),training.title,training_start); link(accept.cell(i,11),cases.title,cases_start)
    link(accept.cell(i,17),'Gates',7)

for s,editable in [(guide,()),(matrix,(7,8)),(team,(16,)),(training,(10,11,12,13,14,15,16,17)),
                   (cases,(7,8,9,10,11)),(exe,tuple(range(5,21))),(accept,(6,7,8,9,12,13,14,15,16,18))]:finish(s,editable)
choices(training,'N',['No evaluado','Apto','Requiere práctica','No aplica justificado'])
choices(exe,'P',['No ejecutado','Pasa','Falla','Bloqueado','No aplica justificado'])
choices(accept,'N',['Pendiente','Aceptado','Aceptado con reservas','Rechazado'])
guide.column_dimensions['C'].width=85; guide.column_dimensions['D'].width=65
matrix.column_dimensions['F'].width=55; matrix.column_dimensions['O'].width=60
team.column_dimensions['F'].width=65; team.column_dimensions['G'].width=40; team.column_dimensions['O'].width=65
for col in ['F','G','H','I','J']:cases.column_dimensions[col].width=50
training.column_dimensions['G'].width=55; training.column_dimensions['H'].width=55
OUT.parent.mkdir(parents=True,exist_ok=True)
w.active=w.sheetnames.index('Matriz circuitos')
w.calculation=CalcProperties(calcId=191029,fullCalcOnLoad=True)
w.save(OUT)

# Verificación del artefacto: conservación de datos/estilos originales y enlaces/IDs.
old=openpyxl.load_workbook(SOURCE); new=openpyxl.load_workbook(OUT)
assert sha256(SOURCE.read_bytes()).hexdigest()==original_hash
for name in original_sheets:
    a,b=old[name],new[name]
    assert (a.max_row,a.max_column)==(b.max_row,b.max_column),name
    for row in a:
        for cell in row:
            target=b[cell.coordinate]
            assert cell.value==target.value,(name,cell.coordinate,cell.value,target.value)
            assert cell.number_format==target.number_format,(name,cell.coordinate)
            assert cell._style==target._style,(name,cell.coordinate,'style')
    assert str(a.merged_cells)==str(b.merged_cells),name
ids={}
for name in ['Matriz circuitos','Equipo circuitos','Formacion circuitos','Casos circuitos','Ejecuciones circuitos','Aceptacion circuitos']:
    vals=[new[name].cell(r,1).value for r in range(5,new[name].max_row+1)]
    assert len(vals)==len(set(vals)),name
    ids[name]=set(vals)
assert ids['Matriz circuitos']==ids['Equipo circuitos']
for row in new['Casos circuitos'].iter_rows(min_row=5,values_only=True):
    assert row[1] in ids['Matriz circuitos'] and row[4] in uat and row[12] in ids['Ejecuciones circuitos']
for row in new['Ejecuciones circuitos'].iter_rows(min_row=5,values_only=True):
    assert row[1] in ids['Casos circuitos'] and row[2] in ids['Matriz circuitos']
for s in new:
    for row in s:
        for cell in row:
            if cell.hyperlink and cell.hyperlink.target and cell.hyperlink.target.startswith("#'"):
                target=cell.hyperlink.target[2:]; name,address=target.split("'!")
                assert name in new.sheetnames,(s.title,cell.coordinate,name)
                assert new[name][address].value is not None,(s.title,cell.coordinate,address)
report=dict(source=str(SOURCE),source_sha256=original_hash,output=str(OUT),
            original_sheets_preserved=len(original_sheets),circuits=len(C),
            training=len(ids['Formacion circuitos']),cases=len(ids['Casos circuitos']),
            initial_executions=len(ids['Ejecuciones circuitos']),acceptances=len(ids['Aceptacion circuitos']),
            checks='Original values, formulas, number formats, styles and merges preserved; IDs, references and internal hyperlinks verified.')
(OUT.parent/'validacion_matriz_v05.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(report,ensure_ascii=True,indent=2))
