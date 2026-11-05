import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const files=['db.js','lib.js','report.js','drive.js','app.js'];
const modules=files.map(file=>fs.readFileSync(path.join(root,file),'utf8')
  .replace(/^import[^;]+;\s*/gm,'')
  .replace(/^export\s+/gm,''));
const bundle=`(()=>{\n'use strict';\n${modules.join('\n\n')}\n})();\n`;
fs.writeFileSync(path.join(root,'app.bundle.js'),bundle);
console.log(`Built app.bundle.js (${Buffer.byteLength(bundle)} bytes)`);
