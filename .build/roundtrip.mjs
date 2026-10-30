import {FileBlob,SpreadsheetFile} from '@oai/artifact-tool';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const source=path.join(root,'outputs/20261029/DIARCO_Bloque1_Plan_v0.2.xlsx');
const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(source));
for(const name of ['RACI','WBS','Capacidad','Formacion','Gobierno']){
  const sh=wb.worksheets.getItem(name);
  console.log(name,sh.tables.items.map(x=>x.name),sh.getUsedRange().address);
}
const out=await SpreadsheetFile.exportXlsx(wb);
await out.save(path.join(root,'.build/roundtrip.xlsx'));
console.log('saved');
