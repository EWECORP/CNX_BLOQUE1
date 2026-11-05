"""Registrar la prioridad del piloto sin cambiar asignaciones ni resultados."""
from pathlib import Path
from copy import copy
import json
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment

root=Path(__file__).resolve().parents[1]
path=root/'outputs/20261105/DIARCO_Bloque1_Plan_v0.5.xlsx'
w=openpyxl.load_workbook(path)
before={s.title:{c.coordinate:c.value for row in s for c in row} for s in w}
m=w['Matriz circuitos']
r=next(i for i in range(5,m.max_row+1) if m.cell(i,1).value=='C07')
m['Q4']='Prioridad de preparación';m['Q4']._style=copy(m['P4']._style)
m.column_dimensions['Q'].width=44
for i in range(5,m.max_row+1):
 m.cell(i,17,'Primer sector piloto: indicado por el usuario el 05/11/2026 por compromiso y colaboración.' if i==r else 'Secuencia posterior por acordar.')
 m.cell(i,17).alignment=Alignment(wrap_text=True,vertical='top')
m.cell(r,17).hyperlink="#'Piloto No Comestibles'!A1"
m.cell(r,17).fill=PatternFill('solid',fgColor='E2F0D9')
m.auto_filter.ref=f'A4:Q{m.max_row}'
name='Piloto No Comestibles'
if name in w:del w[name]
s=w.create_sheet(name,0)
s.append(['Primer sector piloto · No Comestibles · C07'])
s.append(["Selección del usuario, 05/11/2026. Titular: Liliana D'Amico. Suplente: Carolina Tavernisse. Motivo: compromiso y colaboración del sector."])
s.append(['Prioridad de preparación registrada. Población, volumen, agenda, dueño de aceptación y habilitación se acuerdan en los registros vinculados.'])
s.append(['Paso','Actividad / resultado','Participación propuesta','Registro a completar','Referencia'])
steps=[
 ('Elegir proveedor(es), artículos y sucursales. Ejemplo pequeño inicial y posterior muestra representativa.', 'Liliana y Carolina + funcional Zeetrex','Matriz: población y proveedores piloto','Matriz circuitos',f'H{r}'),
 ('Precisar campaña/estacionalidad, rotación, surtido, mínimos, bultos y condiciones que apliquen. Medir volumen habitual/pico y concurrencia.', 'Liliana y Carolina; Listas/Stock según necesidad','Matriz: perfil de carga; Casos: reglas/esperado','Matriz circuitos',f'G{r}'),
 ('Designar dueño que acepta y acordar criterios/tolerancias. Confirmar disponibilidad consolidando horas con Surtido y PDD.', 'Dueño DIARCO por designar; jefatura, Liliana y Carolina','Aceptacion: dueño/criterios; Asignaciones: agenda/compromiso','Aceptacion circuitos',f'F{r}'),
 ('Preparar datos reales SGM, precios/descuentos y esperado independiente. Verificar permisos, versión y único emisor al proveedor; Recepción si integra el alcance.', 'Referentes + Listas, IT/SGM y Zeetrex','Casos circuitos: preparación y esperado','Casos circuitos',None),
 ('Taller: propuesta → revisión → OC valorizada/aprobada → registro SGM. Práctica individual de titular y suplente con una excepción.', 'Liliana y Carolina; CMZ/ZF según gobierno propuesto','Formacion circuitos: agenda, material, aptitud y evidencia','Formacion circuitos',None),
 ('Ejecutar seis casos C07: integral, desvío de valorización, reintento, volumen/complejidad, permisos y soporte. Conservar métricas, diferencias y repruebas.', 'Ejecutores a acordar; IT/Zeetrex acompañan','Ejecuciones circuitos: observado, defectos y evidencia','Ejecuciones circuitos',None),
 ('Revisar aptitud, pruebas, conciliación y defectos. Dueño acepta alcance/versión; registrar autorización correspondiente en Gates.', 'Dueño DIARCO + referentes, IT y responsables de Gates','Aceptacion circuitos y Gates: decisión y evidencia','Aceptacion circuitos',f'A{r}'),
 ('Aplicar aprendizajes al siguiente sector revisando sus diferencias antes de ampliar.', 'Referentes + coordinación funcional/gestión del cambio','Matriz circuitos: secuencia posterior por acordar','Matriz circuitos','A4'),
]
for i,(activity,people,record,target,address) in enumerate(steps,1):
 if address is None:
  col=3 if target=='Ejecuciones circuitos' else 2
  rr=next(j for j in range(5,w[target].max_row+1) if w[target].cell(j,col).value=='C07')
  address=f'A{rr}'
 s.append([i,activity,people,record,f'{target}!{address}'])
 s.cell(s.max_row,5).hyperlink=f"#'{target}'!{address}"
for rr in (1,2,3):s.merge_cells(start_row=rr,start_column=1,end_row=rr,end_column=5)
for row in s:
 for c in row:c.alignment=Alignment(wrap_text=True,vertical='top')
s['A1'].font=Font(size=16,bold=True,color='17365D')
for c in s[4]:c.fill=PatternFill('solid',fgColor='17365D');c.font=Font(bold=True,color='FFFFFF')
for col,width in {'A':9,'B':80,'C':48,'D':65,'E':38}.items():s.column_dimensions[col].width=width
for rr in range(1,s.max_row+1):s.row_dimensions[rr].height=80 if rr>4 else 42
s.freeze_panes='B5';s.auto_filter.ref=f'A4:E{s.max_row}';s.sheet_view.zoomScale=80
s.page_setup.orientation='landscape';s.page_setup.paperSize=s.PAPERSIZE_A3
s.sheet_properties.pageSetUpPr.fitToPage=True;s.page_setup.fitToWidth=1;s.page_setup.fitToHeight=0;s.print_title_rows='1:4'
w.active=0;w.save(path)
v=openpyxl.load_workbook(path)
for title,cells in before.items():
 if title==name:continue
 for coord,value in cells.items():
  if title=='Matriz circuitos' and coord.startswith('Q'):continue
  assert v[title][coord].value==value,(title,coord)
for row in v[name].iter_rows(min_row=5):
 title,address=row[4].value.split('!');assert title in v.sheetnames
 cell=v[title][address];assert cell.row<=v[title].max_row and cell.column<=v[title].max_column
report={'pilot':'C07','sector':'No Comestibles','source':'Usuario, 05/11/2026','sheets':len(v.sheetnames),'checks':'Valores previos preservados; enlaces del piloto verificados; sin cambio de resultados o aceptación.'}
(path.parent/'validacion_piloto_c07.json').write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding='utf-8')
doc=root/'documentacion/07_matriz_sector_circuito.md'
text=doc.read_text(encoding='utf-8')
old='Elegir sector y población piloto; resolver sus aclaraciones nominales y dueño; acordar perfil de carga y particularidades; preparar datos/esperados; fijar práctica y pruebas con agendas reales. Completar decisiones y evidencias en el libro. La matriz no exige ejecutar simultáneamente los 75 casos ni iniciar todos los circuitos: la selección debe justificar inclusiones y exclusiones.'
new="**Primer sector piloto: C07, No Comestibles, con Liliana D'Amico como titular y Carolina Tavernisse como suplente.** El usuario lo identificó el 05/11/2026 como el sector más comprometido y colaborativo. La prioridad se registra en Matriz circuitos y en la hoja inicial Piloto No Comestibles, con ocho pasos enlazados.\n\nLa próxima sesión debe definir proveedores, artículos, sucursales, perfil de carga, particularidades y dueño que acepta, y acordar disponibilidad. Luego preparar datos/esperados, realizar práctica individual y ejecutar los seis casos CC-C07-01 a CC-C07-06. Los otros sectores mantienen su secuencia por acordar. La selección no acredita capacitación, pruebas ni habilitación productiva."
text=text.replace(old,new).replace('La v0.5 agrega siete hojas','La v0.5 agrega ocho hojas (incluida Piloto No Comestibles)')
text=text.replace('Verificación reproducible: `.build/build_matrix_v05.py`; reporte en `outputs/20261105/validacion_matriz_v05.json`.', 'Reconstrucción: ejecutar `.build/build_matrix_v05.py` y después `.build/select_pilot_c07.py`. Reportes en `outputs/20261105/validacion_matriz_v05.json` y `validacion_piloto_c07.json`.')
doc.write_text(text,encoding='utf-8')
readme=root/'README.md';text=readme.read_text(encoding='utf-8')
text=text.replace('agrega siete: guía, matriz','agrega ocho: piloto, guía, matriz')
marker='## Actualización operativa del 05/11/2026\n'
addition="\n**Primer sector piloto: No Comestibles (C07), con Liliana D'Amico y Carolina Tavernisse**, por indicación del usuario del 05/11. Abrir **Piloto No Comestibles** para seguir la preparación y sus enlaces a capacitación, pruebas y aceptación.\n"
if addition not in text:text=text.replace(marker,marker+addition)
readme.write_text(text,encoding='utf-8')
print(json.dumps(report,ensure_ascii=True))
