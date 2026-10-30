import path from 'node:path';
import {FileBlob,SpreadsheetFile} from '@oai/artifact-tool';
const root=path.resolve(import.meta.dirname,'..');
const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(path.join(root,'outputs/20261029/DIARCO_Bloque1_Plan_v0.3.xlsx')));
const s=wb.worksheets.getItem('WBS');
s.getRange('A120').setNumberFormat('@');
s.getRange('A120').values=[['2.20']];
const f=await SpreadsheetFile.exportXlsx(wb);await f.save(path.join(root,'.build/test_text.xlsx'));
