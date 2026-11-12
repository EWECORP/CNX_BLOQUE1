from pathlib import Path
from datetime import date
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.worksheet.table import Table, TableStyleInfo
from openpyxl.utils import get_column_letter
from openpyxl.workbook.properties import CalcProperties

root=Path(__file__).resolve().parents[1]
out=root/'outputs/20261112/DIARCO_Asistencia_y_Permisos_TEST.xlsx'
w=openpyxl.Workbook();w.remove(w.active)
navy='17365D';blue='DDEBF7';yellow='FFF2CC'
def make(name,title,note,headers):
 s=w.create_sheet(name);s.append([title]);s.append([note]);s.append([]);s.append(headers)
 for r in (1,2):s.merge_cells(start_row=r,start_column=1,end_row=r,end_column=min(len(headers),6))
 s['A1'].font=Font(size=17,bold=True,color=navy);s.row_dimensions[1].height=32;s.row_dimensions[2].height=55
 s['A2'].alignment=Alignment(wrap_text=True,vertical='top');s.freeze_panes='D5';s.sheet_view.zoomScale=80
 for c in s[4]:
  c.fill=PatternFill('solid',fgColor=navy);c.font=Font(bold=True,color='FFFFFF');c.alignment=Alignment(wrap_text=True,vertical='top')
 s.row_dimensions[4].height=45
 s.print_title_rows='1:4';s.page_setup.orientation='landscape';s.page_setup.paperSize=s.PAPERSIZE_A3
 s.sheet_properties.pageSetUpPr.fitToPage=True;s.page_setup.fitToWidth=1;s.page_setup.fitToHeight=0
 return s

a=make('Asistencia','DIARCO · Registro de asistencia y rol',
 'Completa cada participante: nombre, correo, área, circuito, rol de proyecto y función que necesita en TEST. Una fila por persona y circuito en la sesión. Sin contraseñas. Fecha y sesión se completan según convocatoria.',
 ['ID registro','Fecha sesión','Sesión / tema','Nombre y apellido','Correo corporativo','Área / sector','Circuito','Rol en el proyecto','Rol funcional / acciones solicitadas','Alcance: categorías / sucursales / CD','Usuario TEST, si ya existe','Asistencia'])
p=make('Permisos TEST','Control de entrega y verificación de permisos · TEST',
 'Completa coordinación/IT por ID de registro. Identidad y solicitud se leen de Asistencia. Asignar acceso, comunicarlo y comprobarlo son pasos distintos. Verificar ingreso, acción permitida y restricción; registrar evidencia.',
 ['ID registro','Nombre y apellido','Correo corporativo','Circuito','Función solicitada','Usuario TEST','Autorizado por','Fecha autorización','Rol / perfil asignado en TEST','Configurado por','Fecha configuración','Estado entrega','Ingreso a TEST','Acción permitida / resultado','Acción no permitida / resultado','Verificado con / por','Fecha verificación','Evidencia / enlace','Ticket / bloqueo','Responsable próxima acción','Fecha compromiso','Control de verificación'])

for r in range(5,55):
 a.append([f'REG-{r-4:03d}']+[None]*11)
 p.cell(r,1,f'REG-{r-4:03d}')
 for col,source in [(2,4),(3,5),(4,7),(5,9),(6,11)]:
  p.cell(r,col,f'=IFERROR(IF(VLOOKUP($A{r},Asistencia!$A$5:$L$1004,4,FALSE)="","",IF(VLOOKUP($A{r},Asistencia!$A$5:$L$1004,{source},FALSE)=0,"",VLOOKUP($A{r},Asistencia!$A$5:$L$1004,{source},FALSE))),"")')
 p.cell(r,22,f'=IF(B{r}="","",IF(AND(F{r}<>"",G{r}<>"",H{r}<>"",I{r}<>"",J{r}<>"",K{r}<>"",L{r}="Comunicado",M{r}="Correcto",N{r}<>"",O{r}<>"",P{r}<>"",Q{r}<>"",R{r}<>""),"Revisar evidencia y confirmar", "Pendiente de completar / verificar"))')
 for c in a[r]:
  c.alignment=Alignment(wrap_text=True,vertical='top');c.fill=PatternFill('solid',fgColor=yellow if c.column>1 else blue)
 for c in p[r]:
  c.alignment=Alignment(wrap_text=True,vertical='top');c.fill=PatternFill('solid',fgColor=blue if c.column<=6 or c.column==22 else yellow)
 a.cell(r,2).number_format='dd/mm/yyyy'
 for col in [8,11,17,21]:p.cell(r,col).number_format='dd/mm/yyyy'
 a.row_dimensions[r].height=38;p.row_dimensions[r].height=55

def dropdown(s,col,options):
 d=DataValidation(type='list',formula1='"'+','.join(options)+'"',allow_blank=True)
 d.showErrorMessage=True;d.error='Seleccionar una opción de la lista.';s.add_data_validation(d);d.add(f'{col}5:{col}1004')
dropdown(a,'H',['Titular','Suplente','Usuario operativo','Dueño funcional','Aprobador','Capacitador','Soporte / IT','Coordinación','Otro'])
dropdown(a,'L',['Presente','Ausente','Participación parcial'])
dropdown(p,'L',['Pendiente','Solicitado','Autorizado','Configurado','Comunicado','Bloqueado','No requiere'])
dropdown(p,'M',['Correcto','Falla','Sin probar'])
for s,tab in [(a,'TablaAsistencia'),(p,'TablaPermisosTEST')]:
 table=Table(displayName=tab,ref=f'A4:{get_column_letter(s.max_column)}54')
 table.tableStyleInfo=TableStyleInfo(name='TableStyleMedium2',showRowStripes=True);s.add_table(table)
 for col in range(1,s.max_column+1):s.column_dimensions[get_column_letter(col)].width=24
 s.column_dimensions['A'].width=15;s.column_dimensions['D' if s==a else 'B'].width=30
a.column_dimensions['I'].width=42;a.column_dimensions['J'].width=42
for col in ['E','I','N','O','R','S','V']:p.column_dimensions[col].width=38

g=make('Instrucciones','Cómo completar la planilla',
 'Formato preparado el 12/11/2026. El registro se utiliza para coordinar asistencia y accesos al ambiente TEST.',
 ['Paso','Responsable','Qué completar / verificar'])
rows=[
 ('1','Participante','En Asistencia completar nombre, correo, área, circuito, rol de proyecto, acciones necesarias y alcance. Indicar usuario TEST si existe. Fecha/sesión según convocatoria.'),
 ('2','Coordinación','Confirmar presencia. Si una persona representa varios circuitos, usar una fila por circuito con ID distinto; contar personas únicas por correo para el total de asistentes.'),
 ('3','Participante / dueño funcional','Titular o suplente describe su función en el proyecto. Rol funcional describe qué necesita hacer: consultar, preparar propuestas, cargar listas, crear OC, aprobar, recibir o contar. El administrador identifica luego el perfil exacto de Connexa.'),
 ('4','Dueño funcional / autorizador','Aprobar acciones y alcance antes de configurar. Registrar nombre y fecha en Permisos TEST; las restricciones y límites se describen en alcance/solicitud.'),
 ('5','IT / administrador','Identidad y solicitud se enlazan por ID. Registrar perfil asignado, quién configura, fecha y estado de entrega. Verificar que el perfil corresponda al alcance autorizado. No editar fórmulas azules.'),
 ('6','Usuario + IT','Registrar ingreso Correcto/Falla; describir una acción permitida con resultado y una acción restringida con resultado. Ejemplo: crea propuesta de su categoría; se bloquea aprobación fuera de facultad. Registrar persona, fecha y enlace a evidencia.'),
 ('7','Coordinación','Control de verificación indica campos pendientes o pide revisar evidencia; no declara automáticamente el permiso correcto. La revisión debe confirmar resultados y restricciones. Bloqueos llevan ticket, responsable y fecha compromiso.'),
 ('8','Todos','No registrar contraseñas. El alcance de esta planilla es TEST. La asistencia no demuestra aptitud ni autorización productiva. Mantener los resultados funcionales/UAT en el plan operativo.'),
 ('9','Coordinación','Hay 50 filas iniciales. Se puede ampliar hasta fila 1004: extender las tablas, copiar fórmulas/formato en Permisos TEST y crear IDs únicos en ambas hojas. No reutilizar un ID para otra persona o circuito.'),
 ('10','Ejemplo orientativo','Rol proyecto: Suplente. Función: revisar propuesta y crear OC. Circuito: C07 No Comestibles. El rol exacto de TEST y facultad de aprobar requieren validación; el ejemplo no otorga permiso.'),
]
for row in rows:g.append(row)
for row in g.iter_rows(min_row=5):
 g.row_dimensions[row[0].row].height=65
 for c in row:c.alignment=Alignment(wrap_text=True,vertical='top')
g.column_dimensions['A'].width=9;g.column_dimensions['B'].width=30;g.column_dimensions['C'].width=115
g.freeze_panes='C5'
from openpyxl.formatting.rule import FormulaRule
p.conditional_formatting.add('L5:V54',FormulaRule(formula=['$L5="Bloqueado"'],fill=PatternFill('solid',fgColor='FCE4D6')))
w.active=0;w.calculation=CalcProperties(fullCalcOnLoad=True)
out.parent.mkdir(parents=True,exist_ok=True);w.save(out)
v=openpyxl.load_workbook(out)
assert len(v['Asistencia'].tables)==1 and len(v['Permisos TEST'].tables)==1
assert all(v['Permisos TEST'].cell(r,2).data_type=='f' for r in range(5,55))
assert len({v['Asistencia'].cell(r,1).value for r in range(5,55)})==50
print(str(out))
