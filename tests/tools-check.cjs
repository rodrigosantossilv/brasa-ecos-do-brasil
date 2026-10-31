'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {Writable}=require('node:stream');
const {root}=require('../scripts/lib.cjs');
const {writeZip,verifyZip}=require('../scripts/zip.cjs');
const {handler,host}=require('../scripts/serve.cjs');

async function request(url,method='GET'){
  return new Promise((resolve,reject)=>{
    const chunks=[],headers={};
    const response=new Writable({write(chunk,encoding,done){chunks.push(Buffer.from(chunk));done();}});
    response.setHeader=(name,value)=>{headers[name.toLowerCase()]=value;};
    response.writeHead=(status,values)=>{response.statusCode=status;for(const [name,value] of Object.entries(values))response.setHeader(name,value);};
    response.on('error',reject);
    response.on('finish',()=>resolve({status:response.statusCode,headers,body:Buffer.concat(chunks)}));
    handler({url,method},response);
  });
}

async function main(){
  const dir=fs.mkdtempSync(path.join(root,'test-results/tooling-'));
  const rows=[{name:'pixel.png',data:Buffer.from([137,80,78,71,0,255,10])},{name:'document.txt',data:Buffer.from('Português — BRASA\n')}];
  const zip=path.join(dir,'fixture.zip');
  writeZip(zip,rows);
  assert.equal(verifyZip(zip,rows),2);
  const corrupted=fs.readFileSync(zip);
  corrupted[30+Buffer.byteLength(rows[0].name)]^=1;
  fs.writeFileSync(zip,corrupted);
  assert.throws(()=>verifyZip(zip,rows),/CRC mismatch/);
  console.log('PASS release ZIP round-trips stored and compressed entries and rejects corrupt CRC');

    // Exercise the real HTTP handler without requiring local socket permission.
    assert.equal(host,'127.0.0.1');
    const index=await request('/');
    assert.equal(index.status,200);
    assert(index.body.equals(fs.readFileSync(path.join(root,'game/index.html'))));
    assert.match(index.headers['content-type'],/^text\/html/);
    assert.equal((await request('/style.css','HEAD')).body.length,0);
    assert.equal((await request('/missing.png')).status,404);
    assert.equal((await request('/%2e%2e/README.md')).status,403);
    assert.equal((await request('/..%2fREADME.md')).status,403);
    assert.equal((await request('/%5c..%5cREADME.md')).status,400);
    assert.equal((await request('/%E0%A4%A')).status,400);
    assert.equal((await request('/','POST')).status,405);
    console.log('PASS loopback static server serves exact game bytes, HEAD and content types; blocks traversal, malformed paths and writes');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
