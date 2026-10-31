'use strict';
const fs=require('node:fs'),path=require('node:path'),{root,manifest}=require('./lib.cjs');
const result=manifest();fs.writeFileSync(path.join(root,'asset-manifest.json'),JSON.stringify(result,null,2)+'\n');console.log('Recorded SHA256 for '+result.files.length+' runtime assets and manifests.');
