import sys
import openpyxl

path = r'C:\PROYECTOS\ETL\CNX_BLOQUE1\outputs\20261105\DIARCO_Bloque1_Plan_v0.5.xlsx'
workbook = openpyxl.load_workbook(path, read_only=True, data_only=False)
for arg in sys.argv[1:]:
    if '@' in arg:
        name, span = arg.split('@', 1)
        first, last = map(int, span.split(':'))
    else:
        name, first, last = arg, 1, 10**9
    sheet = workbook[name]
    print(f'\n## {name} ({sheet.max_row} x {sheet.max_column})')
    for row_number, row in enumerate(sheet, 1):
        if not first <= row_number <= last:
            continue
        populated = [f'{cell.column_letter}={str(cell.value).replace(chr(10), " ")[:110]}' for cell in row if cell.value is not None]
        if populated:
            print(f'{row_number}: ' + ' | '.join(populated))
