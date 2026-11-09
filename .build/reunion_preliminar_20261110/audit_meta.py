import openpyxl

path = r'C:\PROYECTOS\ETL\CNX_BLOQUE1\outputs\20261105\DIARCO_Bloque1_Plan_v0.5.xlsx'
wb = openpyxl.load_workbook(path, read_only=False, data_only=False)
for name in ['Asignaciones', 'Gobierno', 'Decisiones', 'Gates', 'Formacion circuitos', 'Aceptacion circuitos', 'Matriz circuitos']:
    ws = wb[name]
    print('\n' + name)
    for dv in ws.data_validations.dataValidation:
        print('validation', dv.sqref, dv.type, dv.formula1)
print('\nFormula Asignaciones!O13:', wb['Asignaciones']['O13'].value)
print('Formacion circuitos!I17:', wb['Formacion circuitos']['I17'].value)
print('Formacion circuitos!I18:', wb['Formacion circuitos']['I18'].value)
print('\nDirect Asignaciones references in derived sheets:')
for ws in wb.worksheets:
    if ws.title == 'Asignaciones':
        continue
    refs = []
    for row in ws:
        for cell in row:
            if cell.data_type == 'f' and 'Asignaciones!' in cell.value:
                refs.append((cell.coordinate, cell.value))
    if refs:
        print(ws.title, refs[:8], 'count=', len(refs))
