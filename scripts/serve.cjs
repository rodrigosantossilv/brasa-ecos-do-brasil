'use strict';
const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),{game}=require('./lib.cjs');
const host='127.0.0.1',port=Number(process.env.PORT||8943);
if(!Number.isInteger(port)||port<1||port>65535)throw Error('PORT must be an integer from 1 to 65535');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png'};
const realRoot=fs.realpathSync(game),prefix=realRoot+path.sep;
function respond(res,status,message){res.writeHead(status,{'Content-Type':'text/plain; charset=utf-8','X-Content-Type-Options':'nosniff'});res.end(message);}
function handler(req,res){try{if(!['GET','HEAD'].includes(req.method)){res.setHeader('Allow','GET, HEAD');return respond(res,405,'Method not allowed');}let name;try{name=decodeURIComponent((req.url||'/').split('?')[0]);}catch{return respond(res,400,'Invalid URL');}if(name.includes('\0')||name.includes('\\'))return respond(res,400,'Invalid path');if(name==='/')name='/index.html';const file=path.resolve(game,'.'+name);if(file!==realRoot&&!file.startsWith(prefix))return respond(res,403,'Forbidden');if(!fs.existsSync(file)||!fs.statSync(file).isFile())return respond(res,404,'Not found');const realFile=fs.realpathSync(file);if(!realFile.startsWith(prefix))return respond(res,403,'Forbidden');res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Content-Length':fs.statSync(file).size,'X-Content-Type-Options':'nosniff','Cache-Control':'no-cache'});if(req.method==='HEAD')res.end();else fs.createReadStream(file).pipe(res);}catch{return respond(res,500,'Unable to read file');}}
if(require.main===module){const server=http.createServer(handler);server.on('error',error=>{console.error('Server failed: '+error.message);process.exitCode=1;});server.listen(port,host,()=>console.log('BRASA: http://'+host+':'+port));}
module.exports={handler,host,port};
