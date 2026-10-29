import {Workbook} from '@oai/artifact-tool';
const w=Workbook.create();w.worksheets.add('Probe');
console.log(w.help('worksheet',{search:'freeze|gridline',include:'index,examples,notes',maxChars:3000}).ndjson);
