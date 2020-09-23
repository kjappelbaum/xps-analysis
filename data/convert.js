const Papa = require('papaparse');
const { readFileSync, writeFileSync, write } = require('fs');
const { join } = require('path');

const text = readFileSync(join(__dirname, 'references.tsv'), 'utf8');

const result = Papa.parse(text, { header: true, dynamicTyping: true }).data;

result.forEach((datum) => (datum.be = Number(datum.be)));

let data = `export const references=${JSON.stringify(result)}`;

writeFileSync(join(__dirname, '../src/references.js'), data, 'utf8');
