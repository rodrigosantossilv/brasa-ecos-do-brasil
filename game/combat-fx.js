/* BRASA 0.5 — readable objects, trajectories and techniques in the 960 × 540 combat space. */
(function (global) {
  'use strict';
  const GROUND = 455, TAU = Math.PI * 2;
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
  const number = (n, fallback = 0) => Number.isFinite(n) ? n : fallback;
  const anchors = new WeakMap();
  const known = new Set(['bento','ramiro','jana','caua','nara','tiao','breu','damiao','lia','iris','rosa','augusto','valter','serena','caio','davi','luz','ti']);
  const colors = {
    bento: ['#f46e2d','#ffe1a0'], ramiro: ['#76c9ed','#d7f7ff'], jana: ['#f1cf44','#fff5b2'],
    caua: ['#65b866','#e1c77c'], nara: ['#3faeb8','#c3f7ef'], tiao: ['#cbe7d9','#ef694b'],
    breu: ['#a77ac0','#e7c9ea'], damiao: ['#bbaa81','#f1d8a9'], lia: ['#59bdd5','#c4f6ff'],
    iris: ['#b5d2ca','#f3c28e'], rosa: ['#83bd55','#f2e0ab'], augusto: ['#bdabd0','#f4e2b9'],
    valter: ['#e2c878','#fff0bc'], serena: ['#60c0c8','#d2ede2'], caio: ['#72bdd7','#c9efff'],
    davi: ['#edf0dd','#87ddb0'], luz: ['#51d3da','#f0a3c4'], ti: ['#e6ba48','#8ac7e3']
  };
  for(const data of global.BRASA_DATA?.fighters||[]){known.add(data.id);if(!colors[data.id])colors[data.id]=[data.color||data.accent||'#dca75f',data.accent||'#fff1cc'];}

  function path(ctx, points, fill = false, close = false) {
    if (!points.length) return;
    ctx.beginPath(); ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1]);
    if (close || fill) ctx.closePath();
    if (fill) ctx.fill(); else ctx.stroke();
  }
  function curve(ctx, a, b, c) {
    ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.quadraticCurveTo(b[0], b[1], c[0], c[1]); ctx.stroke();
  }
  function ellipse(ctx, x, y, rx, ry, angle = 0, start = 0, end = TAU, fill = false) {
    ctx.beginPath(); ctx.ellipse(x, y, Math.max(.1, rx), Math.max(.1, ry), angle, start, end);
    if (fill) ctx.fill(); else ctx.stroke();
  }
  function crystal(ctx, x, y, width, height, bright) {
    const old = ctx.fillStyle;
    path(ctx, [[x-width/2,y],[x-width*.32,y-height*.7],[x,y-height],[x+width*.38,y-height*.65],[x+width/2,y]], true);
    ctx.fillStyle = bright;
    path(ctx, [[x,y-3],[x,y-height+4],[x+width*.29,y-height*.63]], true);
    ctx.fillStyle = old;
    path(ctx, [[x-width*.25,y-5],[x,y-height*.58],[x+width*.3,y-6]]);
  }
  function lightning(ctx, x1, y1, x2, y2, clock, width = 6) {
    const points = [[x1,y1]];
    for (let j = 1; j < 7; j++) {
      const t = j / 7;
      points.push([x1 + (x2-x1)*t + Math.sin(j*3.1+clock*27)*width, y1+(y2-y1)*t+(j%2?width:-width)]);
    }
    points.push([x2,y2]); path(ctx, points);
  }
  function leaf(ctx, x, y, size, sign = 1) {
    path(ctx, [[x,y],[x+sign*size*.65,y-size*.9],[x+sign*size,y-size*.15],[x,y]], true);
  }
  function branch(ctx, x, y, height, bends = 1) {
    path(ctx, [[x,y],[x-4*bends,y-height*.4],[x+7*bends,y-height*.68],[x+3*bends,y-height]]);
    path(ctx, [[x-3*bends,y-height*.36],[x-16*bends,y-height*.62],[x-19*bends,y-height*.75]]);
    path(ctx, [[x+6*bends,y-height*.66],[x+19*bends,y-height*.82]]);
    leaf(ctx,x+3*bends,y-height,10,bends); leaf(ctx,x-18*bends,y-height*.72,8,-bends);
  }
  function flower(ctx, x, y, radius, clock = 0) {
    for (let j=0;j<5;j++) {
      const a=j*TAU/5+clock*.15;
      ellipse(ctx,x+Math.cos(a)*radius*.62,y+Math.sin(a)*radius*.62,radius*.48,radius*.7,a,0,TAU,true);
    }
    const old=ctx.fillStyle; ctx.fillStyle='#ffe7a3'; ellipse(ctx,x,y,radius*.3,radius*.3,0,0,TAU,true); ctx.fillStyle=old;
  }
  function shield(ctx, x, y, width = 34, height = 85, tilt = 0) {
    ctx.save(); ctx.translate(x,y); ctx.rotate(tilt);
    path(ctx,[[-width/2,-height/2],[width/2,-height/2],[width*.57,height*.18],[0,height/2],[-width*.57,height*.18]],false,true);
    path(ctx,[[-width*.3,-height*.3],[width*.3,-height*.3],[width*.33,height*.12],[0,height*.32],[-width*.33,height*.12]],false,true);
    path(ctx,[[0,-height*.31],[0,height*.28]]); path(ctx,[[-width*.29,-height*.04],[width*.29,-height*.04]]);
    ctx.restore();
  }
  function frame(ctx, x, y, width, height, split = 0) {
    ctx.strokeRect(x-width/2,y-height/2,width,height);
    ctx.strokeRect(x-width/2+5,y-height/2+5,Math.max(1,width-10),Math.max(1,height-10));
    for(const sign of [-1,1]) { path(ctx,[[x+sign*width/2,y-height/2+12],[x+sign*(width/2-12),y-height/2]]); path(ctx,[[x+sign*width/2,y+height/2-12],[x+sign*(width/2-12),y+height/2]]); }
    if(split) path(ctx,[[x-5,y-height*.4],[x+7,y-height*.15],[x-9,y+height*.1],[x+split*14,y+height*.4]]);
  }
  function helmet(ctx, x, y, size) {
    ctx.beginPath(); ctx.moveTo(x-size,y+size*.4); ctx.quadraticCurveTo(x-size*1.15,y-size,x,y-size); ctx.quadraticCurveTo(x+size,y-size*.9,x+size,y+size*.4); ctx.lineTo(x+size*.22,y+size*.45); ctx.lineTo(x+size*.18,y+size*.03); ctx.lineTo(x-size*.5,y+size*.03); ctx.stroke();
    path(ctx,[[x-size*.65,y-size*.22],[x+size*.65,y-size*.22],[x+size*.85,y+size*.03]]);
  }
  function microphone(ctx,x,y,rotation=0) {
    ctx.save(); ctx.translate(x,y); ctx.rotate(rotation); ctx.strokeRect(-3,-1,6,24); ellipse(ctx,0,-7,9,12);
    path(ctx,[[-6,-10],[6,-10]]); path(ctx,[[-6,-5],[6,-5]]); ctx.restore();
  }
  function sound(ctx,x,y,radius,count=3,spread=.47) {
    for(let j=0;j<count;j++) { ctx.beginPath(); ctx.arc(x-j*9,y,Math.max(2,radius-j*7),-Math.PI*spread,Math.PI*spread); ctx.stroke(); }
  }
  function equalizer(ctx,x,y,width,height,clock,columns=7) {
    const step=width/columns;
    for(let j=0;j<columns;j++) { const h=height*(.28+.72*Math.abs(Math.sin(clock*11+j*.76))); ctx.fillRect(x+j*step,y-h,Math.max(2,step*.38),h); }
  }
  function ball(ctx,x,y,r,clock) {
    ctx.save(); ctx.translate(x,y); ctx.rotate(clock*4); const base=ctx.fillStyle;
    ctx.fillStyle='#eeefdf'; ellipse(ctx,0,0,r,r,0,0,TAU,true); ctx.stroke(); ctx.fillStyle='#1c3032';
    const p=[]; for(let j=0;j<5;j++) p.push([Math.cos(j*TAU/5-Math.PI/2)*r*.37,Math.sin(j*TAU/5-Math.PI/2)*r*.37]); path(ctx,p,true);
    for(let j=0;j<5;j++) { const a=j*TAU/5-Math.PI/2; path(ctx,[[Math.cos(a)*r*.37,Math.sin(a)*r*.37],[Math.cos(a+.15)*r*.82,Math.sin(a+.15)*r*.82]]); }
    ctx.fillStyle=base; ctx.restore();
  }
  function coin(ctx,x,y,r,clock) {
    ctx.save(); ctx.translate(x,y); const rx=Math.max(3,r*Math.abs(Math.cos(clock*9)));
    ctx.fillStyle='#dfb33f'; ellipse(ctx,0,0,rx,r,0,0,TAU,true); ctx.strokeStyle='#fff0ad'; ellipse(ctx,0,0,Math.max(1,rx-3),Math.max(1,r-3));
    path(ctx,[[-rx*.55,-4],[rx*.55,-4]]); path(ctx,[[0,-4],[0,5]]); ctx.restore();
  }
  function tire(ctx,x,y,r,start,end) {
    ellipse(ctx,x,y,r,r*.31,0,start,end);
    for(let j=0;j<6;j++){const t=start+(end-start)*j/5;const px=x+Math.cos(t)*r,py=y+Math.sin(t)*r*.31;path(ctx,[[px-3,py-3],[px+3,py+3]]);}
  }
  function puppet(ctx,x,y,scale=1) {
    ctx.save(); ctx.translate(x,y); ctx.scale(scale,scale); const old=ctx.fillStyle;
    ctx.fillStyle='#42324f'; ctx.fillRect(-10,-23,20,19); ctx.fillRect(-12,-3,24,26);
    path(ctx,[[-11,1],[-20,14],[-17,24]]); path(ctx,[[11,1],[21,11],[18,21]]); path(ctx,[[-6,23],[-9,37]]); path(ctx,[[6,23],[11,37]]);
    ctx.strokeStyle='#e1b9e8'; path(ctx,[[-5,-15],[-1,-11]]); path(ctx,[[-1,-15],[-5,-11]]); path(ctx,[[3,-14],[7,-14]]); path(ctx,[[-5,-6],[6,-6]]);
    for(let j=0;j<4;j++)path(ctx,[[j*4-6,1],[j*4-6,17]]);ctx.fillStyle=old;ctx.restore();
  }

  function setup(ctx, alpha, color) {
    ctx.globalAlpha=clamp(number(ctx.globalAlpha,1)*alpha,0,.85);
    ctx.globalCompositeOperation='source-over'; ctx.strokeStyle=color; ctx.fillStyle=color;
    ctx.lineWidth=3; ctx.lineCap='butt'; ctx.lineJoin='miter';
  }
  function attackWindow(a) {
    const t=number(a.time),startup=Math.max(.001,number(a.startup,.15)),active=Math.max(.001,number(a.active,.1));
    const tail=Math.min(.18,Math.max(0,number(a.recovery,.2))),end=startup+active;
    if(t<0||t>end+tail)return null;
    const charge=clamp(t/startup,0,1),contact=clamp((t-startup)/active,0,1);
    const alpha=t<startup?.22+.36*charge:t<=end?.82:.82*(1-(t-end)/Math.max(.001,tail));
    return { t,startup,active,charge,contact,alpha,ready:t>=startup,tail:t>end };
  }
  function variantOf(a) {
    if(Number.isInteger(a.variant))return clamp(a.variant,0,2);
    const match=String(a.token||'').match(/special([012])$/);if(match)return Number(match[1]);
    const id=String(a.moveId||a.id||'');
    for(const kit of Object.values(global.BRASA_MOVES?.fighters||{})){const v=kit.specials.findIndex(s=>s.id===id);if(v>=0)return v;}
    return 0;
  }

  function technique(ctx,id,v,s) {
    const { a,w,ground,clock,origin,enemy }=s, q=w.ready?1:.28+w.charge*.32, pulse=Math.sin(w.contact*Math.PI);
    const [color,light]=colors[id];ctx.strokeStyle=color;ctx.fillStyle=color;
    if(id==='bento') {
      if(v===0){
        const reach=Math.min(380,number(a.range,365)),length=reach*(w.ready?.24+.76*Math.min(1,w.contact*2.5):w.charge*.19);
        ctx.strokeStyle='#572c24';ctx.lineWidth=8;
        const points=[[origin+20,ground-2]];for(let x=32;x<=length;x+=17)points.push([origin+x,ground-3+(Math.floor(x/17)%2?5:-4)]);path(ctx,points);
        ctx.strokeStyle=color;ctx.lineWidth=3;path(ctx,points);
        if(w.ready)for(let x=37;x<length;x+=31){ctx.fillStyle=x%2?light:color;path(ctx,[[origin+x-5,ground],[origin+x+1,ground-22-(x%4)*6],[origin+x+7,ground-10],[origin+x+13,ground]],true);}
      } else if(v===1){
        const x=48+q*15;ctx.fillStyle='#87563a';path(ctx,[[x-13,-142],[x+16,-135],[x+20,-102],[x-11,-106]],true);ctx.strokeStyle=light;path(ctx,[[x-9,-135],[x+10,-131],[x+13,-111]]);
        for(let j=0;j<4;j++)path(ctx,[[x-13+j*8,-139],[x-11+j*8,-132]]);
        ctx.strokeStyle=color;path(ctx,[[origin-20,ground-2],[20,ground-2],[42,ground-8]]);
      } else {
        const x=55+q*17,y=-78-q*74;ctx.strokeStyle=color;ctx.lineWidth=7;curve(ctx,[34,-60],[102,-80],[x,y]);
        ctx.fillStyle='#8f563b';ctx.fillRect(x-14,y-15,30,25);ctx.strokeStyle=light;ctx.strokeRect(x-14,y-15,30,25);path(ctx,[[x-7,y-13],[x-7,y+5]]);path(ctx,[[x+3,y-13],[x+3,y+5]]);
      }
    } else if(id==='ramiro') {
      if(v===0){
        crystal(ctx,55,-98,20+12*w.charge,29+15*w.charge,light);ctx.strokeStyle=light;path(ctx,[[34,-124],[52,-109],[71,-111]]);
        for(let j=0;j<3;j++)path(ctx,[[40+j*8,-99],[50+j*9,-112],[54+j*9,-99]]);
      } else if(v===1){
        for(let j=0;j<4;j++){ctx.fillStyle=color;crystal(ctx,48+j*24,ground-2,18,20+q*(18+j%2*18),light);}
        ctx.strokeStyle=light;path(ctx,[[34,ground],[150,ground]]);
      } else {
        const x=Math.min(95,Math.max(58,enemy));ctx.strokeStyle=light;curve(ctx,[42,-120],[70,-156],[x,-103]);curve(ctx,[43,-115],[74,-88],[x,-103]);
        for(let j=0;j<3;j++)crystal(ctx,x-15+j*13,-80,13,32+q*14,light);
      }
    } else if(id==='jana') {
      if(v===0){
        const angle=-1.15+w.contact*4.8;const x=49+Math.cos(angle)*58,y=-65+Math.sin(angle)*57;
        ellipse(ctx,49,-65,59,57,0,angle-.8,angle+.5);lightning(ctx,12,-24,x,y,clock,4);lightning(ctx,x,y,89,-17,clock+.7,3);
      } else if(v===1){
        curve(ctx,[23,-21],[70,-40],[89,-95]);lightning(ctx,34,-28,68,-96,clock,4);
        if(a.triggered)lightning(ctx,68,-96,131,-121,clock,7);
      } else {
        curve(ctx,[25,-27],[72,-61],[130,-88]);lightning(ctx,45,-37,129,-88,clock,5);path(ctx,[[107,-80],[128,-88],[114,-95]]);
      }
    } else if(id==='caua') {
      if(v===0){
        for(let j=0;j<3;j++)branch(ctx,-28+j*23,ground,30+q*26,j%2?1:-1);
        ctx.strokeStyle=light;curve(ctx,[37,-72],[92,-114],[111,-61]);leaf(ctx,83,-94,16,1);
      } else if(v===1){
        branch(ctx,55,ground,26+q*45);branch(ctx,98,ground,23+q*34,-1);curve(ctx,[42,-111],[56,-60],[55,ground-5]);
      } else {
        const end=Math.min(-18,origin);path(ctx,[[end,ground-2],[-5,ground-6],[42,ground-2]]);
        for(let j=0;j<3;j++)leaf(ctx,end+j*20,ground-3,11,j%2?1:-1);
        ctx.fillStyle='#de8b4c';crystal(ctx,61,-35,13,27,light);
      }
    } else if(id==='nara') {
      if(v===0){
        ctx.fillStyle=color;path(ctx,[[35,-112],[56,-131],[84,-125],[106,-105],[77,-114],[58,-105]],true);ctx.strokeStyle=light;curve(ctx,[39,-111],[72,-140],[105,-105]);
      } else if(v===1){
        ctx.lineWidth=7;curve(ctx,[43,ground-5],[146,-85],[80,-180*q]);ctx.strokeStyle=light;ctx.lineWidth=3;curve(ctx,[55,ground-5],[160,-91],[92,-176*q]);
        for(let j=0;j<3;j++)path(ctx,[[90+j*8,-155*q],[98+j*8,-166*q],[108+j*7,-155*q]]);
      } else {
        ellipse(ctx,64,-123,20+8*w.charge,26+8*w.charge);ctx.strokeStyle=light;curve(ctx,[50,-132],[60,-147],[73,-143]);curve(ctx,[42,-104],[62,-94],[85,-105]);
      }
    } else if(id==='tiao') {
      if(v===0){
        for(let j=0;j<5;j++){const h=j*23;ellipse(ctx,8+Math.sin(j+clock*8)*6,-h,39-j*4,8+j*.7,.08,clock*4+j,clock*4+j+4.4);}
        ctx.strokeStyle=light;path(ctx,[[34,-120],[62,-148],[80,-131]]);
      } else if(v===1){
        ctx.fillStyle=light;path(ctx,[[43,-133],[56,-153],[73,-135],[85,-135],[74,-126],[48,-126]],true);ctx.strokeStyle=color;curve(ctx,[42,-123],[85,-147],[123,-118]);
      } else {
        for(let j=0;j<3;j++)ellipse(ctx,origin-j*9,ground-4,28+j*6,6+j*3,0,j*.7+clock*5,j*.7+clock*5+4.5);
        path(ctx,[[origin-32,ground-2],[5,ground-2]]);curve(ctx,[32,-23],[57,-7],[85,-29]);
      }
    } else if(id==='breu') {
      if(v===0){
        ellipse(ctx,49,-122,9,14);ctx.strokeStyle=light;path(ctx,[[48,-109],[58,-72],[92,ground-9],[126,ground-9]]);
        for(let j=0;j<5;j++)path(ctx,[[70+j*12,ground-14],[78+j*12,ground-3]]);
      } else if(v===1){
        for(let j=0;j<5;j++){const x=55+j*14;ctx.lineWidth=4;curve(ctx,[x,-73],[x+21,-109],[x+35+q*21,-137-j%2*13]);path(ctx,[[x+35+q*21,-137-j%2*13],[x+40+q*21,-125-j%2*13]]);}
      } else {
        const x=69,y=-77;puppet(ctx,x,y,.7);ctx.strokeStyle=light;for(const dx of [-12,0,13])path(ctx,[[39+dx*.2,-145],[x+dx,y-17]]);
      }
    } else if(id==='damiao') {
      if(v===0){
        for(let j=0;j<3;j++){ctx.lineWidth=4;curve(ctx,[origin-29,-134+j*13],[51,-146+j*14],[112,-110+j*15]);}
        path(ctx,[[38,-162],[52,-180],[61,-163],[82,-164],[96,-147],[77,-137],[83,-124],[55,-128]]);
      } else if(v===1){
        const x=Math.min(105,Math.max(66,enemy));path(ctx,[[x-30,-144],[x+29,-132],[x+19,-118],[x-24,-122]],false,true);path(ctx,[[x-27,-80],[x+22,-88],[x+28,-105],[x-22,-101]],false,true);
        for(let j=0;j<4;j++){path(ctx,[[x-19+j*10,-123],[x-15+j*10,-112],[x-10+j*10,-120]],true);path(ctx,[[x-18+j*10,-101],[x-14+j*10,-112],[x-9+j*10,-100]],true);}
      } else {
        path(ctx,[[30,-175],[52,-185],[69,-175],[57,-165],[44,-164]]);for(let j=0;j<4;j++)curve(ctx,[61+j*15,-173-j*4],[92+j*23,-119],[61+j*20,-67+j*6]);
      }
    } else if(id==='lia') {
      if(v===0){
        ctx.fillStyle=light;path(ctx,[[46,-58],[166+q*25,-101],[143+q*25,-29]],true);ctx.strokeStyle=color;path(ctx,[[origin-36,ground-6],[28,ground-6]]);
        for(let j=0;j<4;j++)ctx.fillRect(origin-j*28,ground-4,15,3);
      } else if(v===1){
        for(let j=0;j<3;j++)path(ctx,[[40+j*12,-143+j*13],[54+j*12,-133+j*13],[44+j*12,-123+j*13]]);
        for(let j=0;j<3;j++)path(ctx,[[origin-29-j*13,-105+j*17],[-5-j*9,-105+j*17]]);
      } else {
        helmet(ctx,65+q*20,-123,22);curve(ctx,[83,-141],[108,-109],[57,-83]);
      }
    } else if(id==='iris') {
      if(v===0){
        const length=w.ready?Math.min(425,number(a.range,430))*(.35+.65*Math.min(1,w.contact*3)):31+w.charge*24;
        for(let j=0;j<3;j++){const l=length*(1-j*.22);ctx.strokeRect(36,-132+j*5,l,31-j*9);}
        ctx.fillStyle='#6f8585';ctx.fillRect(36+length,-138,15,40);ctx.strokeStyle=light;ctx.strokeRect(36+length,-138,15,40);
        for(let j=0;j<4;j++)path(ctx,[[43+j*8,-132],[43+j*8,-101]]);
      } else if(v===1){
        const x=63+q*9;ctx.strokeRect(x-20,-157,51,16);ctx.strokeRect(x-20,-78,51,16);ctx.strokeRect(x+24,-145,14,77);path(ctx,[[x-12,-140],[x-12,-111],[x+13,-111]]);path(ctx,[[x-12,-79],[x-12,-99],[x+13,-99]]);
      } else {
        ctx.strokeRect(40,-124,19,27);for(let j=0;j<3;j++) { const x=72+j*23,y=-109+j%2*17;curve(ctx,[55,-111],[x,-145-j*7],[x+29,-123]);curve(ctx,[55,-103],[x,-70+j*8],[x+29,-91]); }
      }
    } else if(id==='rosa') {
      if(v===0){
        branch(ctx,47,-91,43);ctx.fillStyle='#e7a2a0';flower(ctx,50,-137,13,clock);ctx.strokeStyle=light;path(ctx,[[57,-126],[88,-146]]);path(ctx,[[61,-120],[99,-120]]);path(ctx,[[58,-113],[90,-96]]);
      } else if(v===1){
        for(let j=0;j<3;j++){branch(ctx,57+j*26,ground,30+q*21,j%2?1:-1);ctx.fillStyle='#dfacb1';flower(ctx,58+j*26,ground-34-q*20,8);ctx.fillStyle=color;}
      } else {
        const end=60+Math.min(200,number(a.range,250)-45)*q;ctx.lineWidth=5;curve(ctx,[36,-115],[(end+36)/2,-161+38*pulse],[end,-112+21*pulse]);ctx.lineWidth=2;
        for(let j=0;j<5;j++)leaf(ctx,53+j*(end-53)/5,-122-Math.sin(j/5*Math.PI)*24,10,j%2?1:-1);
      }
    } else if(id==='augusto') {
      if(v===0){
        // The frame announces the copy; its borrowed hit must still show the
        // real floor line, weapon or trajectory that the opponent must read.
        if(known.has(a.source)&&a.source!=='augusto'){
          ctx.save();ctx.globalAlpha*=.65;technique(ctx,a.source,0,s);ctx.restore();
        }
        frame(ctx,66,-119,48+q*10,75);ctx.strokeStyle=light;ellipse(ctx,66,-134,9,12);path(ctx,[[51,-104],[57,-118],[76,-118],[81,-104]]);
        if(a.source&&a.source!=='augusto'){ctx.fillStyle=colors[a.source]?.[0]||light;ctx.fillRect(51,-98,30,3);ctx.fillRect(52,-94,20,2);}
      } else if(v===1){
        frame(ctx,Math.min(100,Math.max(67,enemy)),-108,57,99,w.ready?1:0);path(ctx,[[38,-122],[65,-137]]);
      } else {
        frame(ctx,-30,-100,34,124);frame(ctx,55,-105,41,136);ctx.strokeStyle=light;path(ctx,[[-48,ground],[-12,ground]]);path(ctx,[[33,ground],[76,ground]]);
      }
    } else if(id==='valter') {
      if(v===0){
        microphone(ctx,43,-142,-.3);sound(ctx,75,-150,23+q*18,3,.39);for(let j=0;j<2;j++){ctx.save();ctx.translate(28+j*26,-73-j*16);ctx.rotate(-.15+j*.35);ctx.strokeRect(-7,-12,14,23);path(ctx,[[-4,-6],[4,-6]]);path(ctx,[[-4,0],[4,0]]);ctx.restore();}
      } else if(v===1){
        microphone(ctx,54,-130,-.15);path(ctx,[[74,-157],[64,-157],[64,-135],[72,-135]]);path(ctx,[[88,-157],[98,-157],[98,-135],[90,-135]]);if(a.triggered)sound(ctx,95,-134,42,3);
      } else {
        microphone(ctx,45,-139,.3);ctx.strokeRect(origin+25,-104,15,23);path(ctx,[[origin+29,-97],[origin+36,-97]]);curve(ctx,[origin+43,-118],[63,-150],[102,-111]);
      }
    } else if(id==='serena') {
      const x=57+q*(v===0?10:0),y=v===2?-82-q*77:-119;
      shield(ctx,x,y,v===1?30:38,v===1?75:91,v===1?-.28:v===2?-.4:.04);
      if(v===0){path(ctx,[[origin-25,ground-3],[24,ground-3]]);for(let j=0;j<3;j++)path(ctx,[[79+j*11,-137],[87+j*11,-120],[79+j*11,-103]]);}
      if(v===1)curve(ctx,[70,-150],[102,-113],[70,-83]);
      if(v===2)curve(ctx,[43,-65],[124,-109],[79,-188]);
    } else if(id==='caio') {
      if(v===0){
        ctx.lineWidth=6;path(ctx,[[37,-117],[112,-110]]);ctx.lineWidth=2;for(let j=0;j<3;j++)path(ctx,[[67+j*21,-150],[67+j*21,-76]]);path(ctx,[[48,-124],[63,-122]]);
      } else if(v===1){
        const angle=w.contact*TAU*1.4-.8;ctx.save();ctx.translate(68,-111);ctx.rotate(angle);ctx.lineWidth=6;path(ctx,[[-38,0],[42,0]]);ctx.lineWidth=2;path(ctx,[[-30,-4],[-30,4]]);ctx.restore();ellipse(ctx,68,-111,48,47,0,angle-.8,angle+.6);
      } else {
        ctx.lineWidth=5;path(ctx,[[36,-121],[154+q*18,-118]]);ctx.lineWidth=2;path(ctx,[[152,-122],[152,-114]]);path(ctx,[[origin-20,ground-4],[20,ground-4]]);
      }
    } else if(id==='davi') {
      if(v===0){
        curve(ctx,[31,-10],[57,-43],[99,-34]);path(ctx,[[79,-42],[99,-34],[80,-25]]);if(!w.ready)ball(ctx,49,-20,14,clock);
      } else if(v===1){
        path(ctx,[[origin+14,ground-2],[39,ground-2],[68,ground-18],[95,ground-4]]);ball(ctx,55+q*14,-17,12,clock);path(ctx,[[28,-28],[57,-46],[92,-27]]);
      } else {
        curve(ctx,[24,-14],[126,-236],[159,-80]);curve(ctx,[36,-11],[138,-220],[168,-88]);path(ctx,[[144,-95],[160,-80],[164,-105]]);
        ctx.lineWidth=2;ctx.strokeRect(148,-86,29,25);path(ctx,[[158,-86],[158,-61]]);path(ctx,[[168,-86],[168,-61]]);path(ctx,[[148,-74],[177,-74]]);
      }
    } else if(id==='luz') {
      if(v===0){
        equalizer(ctx,44,-53,110,64*q,clock,8);sound(ctx,84,-136,41+q*24,3,.38);microphone(ctx,40,-145,-.3);
      } else if(v===1){
        curve(ctx,[origin+34,ground-1],[origin+63,ground-42],[52,ground-3]);ctx.strokeRect(52,-84,27,51);ellipse(ctx,65,-62,9,9);ellipse(ctx,65,-42,5,5);sound(ctx,88,-75,23,2);
      } else {
        for(let j=0;j<3;j++)curve(ctx,[47,-99+j*7],[139,-130+j*7],[105,-184+j*7]);ellipse(ctx,109,-182,10,6,-.3,0,TAU,true);path(ctx,[[117,-183],[117,-216],[136,-208]]);
      }
    } else if(id==='ti') {
      if(v===0){
        ctx.fillStyle='#355970';ctx.fillRect(39,-137,33,27);ctx.strokeStyle=light;ctx.strokeRect(39,-137,33,27);ctx.fillStyle=color;
        for(let j=0;j<3;j++){ctx.fillRect(44+j*8,-131,5,2);ctx.fillRect(44+j*8,-121,5,2);ctx.fillRect(44+j*8,-126,5,2);}coin(ctx,82,-121,9,clock);
      } else if(v===1){
        path(ctx,[[41,-156],[74,-156],[83,-141],[42,-141]],false,true);ctx.fillRect(49,-152,4,4);ctx.fillRect(61,-152,4,4);ctx.fillRect(55,-148,4,4);ctx.fillRect(67,-148,4,4);
        for(let j=0;j<4;j++)ctx.fillRect(origin-21-j*27,ground-4,15,3);path(ctx,[[64,-113],[91,-101],[105,-113]]);
      } else {
        tire(ctx,origin+16,ground-5,37,Math.PI*.1,Math.PI*1.1);path(ctx,[[37,-129],[68,-106],[105,-120],[117,-112]]);path(ctx,[[101,-124],[113,-127],[121,-119]]);
      }
    }
  }

  // Concrete equipment and story objects. Geometry is drawn at fighting scale;
  // motion belongs to the authored move rather than a random fighter-id pattern.
  function storyObject(ctx,prop,t,v=0){
    const swing=Math.sin(t*6), circle=(x,y,r)=>ellipse(ctx,x,y,r,r,0,0,TAU,true);
    ctx.lineWidth=4;ctx.lineJoin='round';
    if(/katana|jian|rapier|broadsword|spear|scabbard/.test(prop)){
      const long=prop==='terracotta-spear'?155:prop==='broadsword'?118:100;
      path(ctx,[[-22,0],[long,0],[long-18,-8],[5,-9],[5,5]],true);path(ctx,[[-2,-22],[-2,22]]);path(ctx,[[-23,-3],[-3,-3]]);
      if(prop==='broken-katana'){path(ctx,[[69,-9],[61,-2],[70,4]]);}
    }else if(/shield|buckler|shoulderpads/.test(prop)){
      shield(ctx,20,0,80,110,0);if(prop==='broken-shield')path(ctx,[[-12,-54],[10,-20],[-3,4],[28,17]]);
    }else if(/gloves|fist|mecha-arm|piston|press/.test(prop)){
      ctx.fillRect(-35,-22,65,43);ctx.strokeRect(-35,-22,65,43);ctx.fillRect(30,-35,55,65);ctx.strokeRect(30,-35,55,65);
      for(let i=0;i<4;i++)ctx.strokeRect(37+i*11,-31,9,24);
      if(/piston|press|mecha/.test(prop)){ctx.strokeRect(-53,-28,28,56);for(let i=0;i<4;i++)path(ctx,[[-50+i*7,-24],[-50+i*7,24]]);}
    }else if(/baseball-bat|cricket-bat|pizza-peel|broom|lever/.test(prop)){
      path(ctx,[[-38,8],[88,-8]]);ctx.save();ctx.translate(70,-5);ctx.rotate(-.13);
      if(prop==='broom'){path(ctx,[[0,-10],[48,-23],[52,23],[0,10]],true);for(let i=0;i<5;i++)path(ctx,[[5,-7+i*4],[48,-18+i*9]]);}
      else {ctx.fillRect(0,-(prop==='pizza-peel'?28:13),prop==='pizza-peel'?50:65,prop==='pizza-peel'?56:26);ctx.strokeRect(0,-(prop==='pizza-peel'?28:13),prop==='pizza-peel'?50:65,prop==='pizza-peel'?56:26);}ctx.restore();
    }else if(prop==='space-helmet'){helmet(ctx,0,0,44);ellipse(ctx,0,10,54,18);
    }else if(/ball$|^baseball$|^pizza$|^dough$/.test(prop)){
      circle(0,0,prop==='pizza'?33:20);ctx.strokeStyle='#70402c';if(prop==='pizza'){for(let i=0;i<5;i++)ellipse(ctx,Math.cos(i*1.3)*18,Math.sin(i*1.3)*18,5,5,0,0,TAU,true);}else{curve(ctx,[-9,-18],[9,0],[-9,18]);curve(ctx,[9,-18],[-9,0],[9,18]);}
    }else if(/guitar|speaker|microphone|opera-note|music-notes|bronze-bell|spectral-bell/.test(prop)){
      if(prop==='guitar'){ellipse(ctx,0,10,28,37,0,0,TAU,true);ellipse(ctx,12,-15,20,22,0,0,TAU,true);path(ctx,[[8,0],[67,-59]]);ctx.strokeRect(56,-70,21,18);for(let i=0;i<4;i++)path(ctx,[[i*3-4,20],[65+i*2,-58]]);}
      else if(prop==='speaker'){ctx.fillRect(-30,-48,60,96);ctx.strokeRect(-30,-48,60,96);ellipse(ctx,0,-23,15,15);ellipse(ctx,0,20,24,24);}
      else if(prop==='bronze-bell'||prop==='spectral-bell'){path(ctx,[[-35,20],[-25,0],[-22,-36],[0,-50],[22,-36],[25,0],[35,20]],false,true);ellipse(ctx,0,20,35,9);circle(0,23,6);}
      else if(prop==='microphone')microphone(ctx,0,0,-.4);
      else{path(ctx,[[0,20],[0,-38],[30,-48],[30,8]]);ellipse(ctx,-9,20,12,8,0,0,TAU,true);ellipse(ctx,21,8,12,8,0,0,TAU,true);}
      sound(ctx,55,0,34+v*9,3,.6);
    }else if(/ribbon|lasso|winch|scales/.test(prop)){
      for(let i=0;i<3;i++)curve(ctx,[-35,-i*8],[35,-70+swing*20+i*9],[125,15-i*8]);
      if(prop==='lasso')ellipse(ctx,110,-10,24,43,.2);if(prop==='winch'){ellipse(ctx,-20,0,28,28);path(ctx,[[105,8],[105,30],[120,40],[130,25]]);}
    }else if(/letter|parcel|time-card|name-tablet|message-fragment|paper-seal|forehead-seal/.test(prop)){
      ctx.fillStyle='#f1e6c5';ctx.fillRect(-29,-20,58,40);ctx.strokeRect(-29,-20,58,40);
      if(/letter|parcel/.test(prop)){path(ctx,[[-29,-20],[0,3],[29,-20]]);path(ctx,[[-29,20],[-5,0],[0,3],[5,0],[29,20]]);}
      else for(let i=0;i<4;i++){path(ctx,[[-18,-12+i*8],[15-i*3,-12+i*8]]);}
    }else if(prop==='paper-crane'){
      path(ctx,[[-50,-34],[-7,-2],[-14,20],[8,7],[47,-40],[19,-3],[43,6],[16,10],[0,27],[-12,8]],true);path(ctx,[[-50,-34],[0,2],[47,-40]]);
    }else if(/mask|moth-eyes/.test(prop)){
      path(ctx,[[-33,-36],[0,-48],[33,-36],[28,24],[0,43],[-28,24]],false,true);ellipse(ctx,-14,-6,8,5);ellipse(ctx,14,-6,8,5);curve(ctx,[-15,18],[0,prop==='oni-mask'?0:31],[15,18]);
      if(prop==='oni-mask')for(const d of[-1,1])path(ctx,[[d*18,-40],[d*33,-67],[d*29,-29]],true);
    }else if(/watch|clock|gear|wheel|coil|orbit|ring|eclipse|moon/.test(prop)){
      const r=prop==='eclipse'?48:36;ellipse(ctx,0,0,r,r);ellipse(ctx,0,0,r-8,r-8);
      if(/clock|watch/.test(prop)){for(let i=0;i<12;i++){const a=i*TAU/12;path(ctx,[[Math.cos(a)*29,Math.sin(a)*29],[Math.cos(a)*34,Math.sin(a)*34]]);}path(ctx,[[0,-25],[0,0],[20*Math.cos(t),20*Math.sin(t)]]);}
      else if(prop==='eclipse'){ctx.fillStyle='#201b33';circle(0,0,r-5);}
      else for(let i=0;i<8;i++){const a=i*TAU/8+t;path(ctx,[[Math.cos(a)*10,Math.sin(a)*10],[Math.cos(a)*34,Math.sin(a)*34]]);}
    }else if(/drone|rifle|revolver|sensor|cufflink|rivet|hex-nut/.test(prop)){
      if(/drone/.test(prop)){ctx.fillRect(-20,-12,40,24);for(const d of[-1,1]){path(ctx,[[d*16,-4],[d*48,-17]]);ellipse(ctx,d*48,-19,25,5);path(ctx,[[d*12,10],[d*24,26]]);}circle(12,0,5);}
      else if(/rifle|revolver/.test(prop)){ctx.fillRect(-35,-10,100,16);ctx.fillRect(-10,2,16,27);ctx.strokeRect(-35,-10,100,16);path(ctx,[[10,5],[10,16],[25,16],[25,5]]);}
      else {path(ctx,[[-18,-10],[0,-22],[18,-10],[18,10],[0,22],[-18,10]],false,true);ellipse(ctx,0,0,8,8);}
    }else if(/wing|raven|wolf|hound|fox|jade-dragon/.test(prop)){
      if(/wing|raven/.test(prop)){for(const d of[-1,1])path(ctx,[[0,8],[d*30,-36],[d*70,-53],[d*57,-12],[d*37,-20],[d*30,8]],false,true);}
      else if(prop==='wolf-track'){for(let i=0;i<3;i++){ellipse(ctx,-20+i*32,i%2*10,9,6,0,0,TAU,true);for(let j=0;j<3;j++)circle(-26+i*32+j*6,-9+i%2*10,2);}}
      else if(prop==='fox-tails'){for(let i=0;i<5;i++)curve(ctx,[-20,35],[i*22-45,-80],[i*23-30,-35]);}
      else {path(ctx,[[-40,25],[-30,-20],[-16,-47],[-6,-17],[23,-34],[21,-10],[58,0],[41,23],[4,34]],false,true);circle(14,-7,4);for(let i=0;i<4;i++)path(ctx,[[10+i*8,24],[14+i*8,14],[18+i*8,24]]);}
    }else if(/oak|seed|house|key|bridge|door|gate|threshold|mirror|tunnel/.test(prop)){
      if(prop==='seed'){ellipse(ctx,0,0,17,25,.4,0,TAU,true);leaf(ctx,0,-18,20);}
      else if(/key/.test(prop)){ellipse(ctx,-20,0,15,15);path(ctx,[[-5,0],[55,0],[55,15],[42,15],[42,0]]);}
      else if(/oak-branches/.test(prop)){branch(ctx,-20,45,110);branch(ctx,30,45,90,-1);}
      else {frame(ctx,15,0,100,140,prop==='broken-bridge'?1:0);if(/house/.test(prop)){path(ctx,[[-43,-72],[15,-115],[73,-72]],false,true);path(ctx,[[-20,72],[-35,100],[-49,110]]);path(ctx,[[45,72],[58,100],[72,110]]);}if(/oak/.test(prop)){branch(ctx,-40,70,120);leaf(ctx,60,-70,21);}if(prop==='mirror')path(ctx,[[-20,35],[43,-42]]);}
    }else if(/umbrella|fan/.test(prop)){
      path(ctx,[[-55,-10],[-36,-40],[0,-56],[36,-40],[55,-10]],false,true);for(const x of[-36,0,36])path(ctx,[[0,-8],[x,x===0?-56:-40]]);path(ctx,[[0,-8],[0,50],[12,57],[21,48]]);
    }else if(/lantern|coal-gift/.test(prop)){
      ctx.strokeRect(-25,-34,50,65);path(ctx,[[-31,-34],[31,-34]]);path(ctx,[[0,-34],[0,-55]]);path(ctx,[[-29,31],[29,31]]);for(let x=-16;x<=16;x+=16)path(ctx,[[x,-30],[x,27]]);circle(0,0,9);
    }else if(/wok|table|plinth|basalt-wall/.test(prop)){
      if(prop==='wok'){curve(ctx,[-50,-12],[0,70],[50,-12]);path(ctx,[[-50,-12],[50,-12],[83,-22]]);}
      else{ctx.fillRect(-55,-10,110,22);path(ctx,[[-40,12],[-40,55]]);path(ctx,[[40,12],[40,55]]);}
    }else if(/volcano|lava|gold-vein|moon-dust/.test(prop)){
      path(ctx,[[-65,40],[-22,-15],[-7,-5],[6,-20],[55,40]],false,true);for(let i=0;i<6;i++){const x=-15+i*7;path(ctx,[[x,0],[x*2,-35-Math.sin(t*9+i)*18]]);}
    }else if(/prism|star-map|grid-map/.test(prop)){
      path(ctx,[[0,-55],[-40,30],[40,30],[0,-55],[0,30],[-40,30]],false,true);for(let i=0;i<3;i++)path(ctx,[[5,0],[95,-30+i*28]]);
    }else if(/field-line|brake-track|race-apex|dohyo|ramp|palm-wave|sambo-belt|sumo-belt/.test(prop)){
      if(/belt/.test(prop)){path(ctx,[[-40,-8],[40,-8],[40,8],[-40,8]],false,true);path(ctx,[[0,0],[-20,55],[0,35],[20,55],[0,0]]);}
      else {ellipse(ctx,20,0,90,18);for(let i=0;i<6;i++)path(ctx,[[-60+i*30,-20],[-60+i*30,20]]);}
    }else if(/cape|veil|curtain|scarf/.test(prop)){
      path(ctx,[[-45,-55],[20,-45],[65,55],[15,40],[-35,55],[-25,10]],false,true);for(let i=0;i<3;i++)curve(ctx,[-25+i*20,-40],[i*22,0],[-15+i*25,43]);
    }else if(/boot/.test(prop)){path(ctx,[[-24,-40],[9,-40],[9,12],[46,25],[46,40],[-24,40]],false,true);for(let i=0;i<4;i++)path(ctx,[[-17,-30+i*10],[6,-24+i*10]]);}
    else if(prop==='steam-valve'){ellipse(ctx,0,0,30,30);path(ctx,[[-30,0],[30,0]]);path(ctx,[[0,-30],[0,30]]);for(let i=0;i<3;i++)curve(ctx,[35+i*13,20],[18+i*13,-10],[40+i*13,-50]);}
    else if(prop==='camera-flash'||prop==='studio-frame'){frame(ctx,0,0,115,90);ellipse(ctx,0,0,24,24);for(let i=0;i<8;i++){const a=i*TAU/8;path(ctx,[[Math.cos(a)*30,Math.sin(a)*30],[Math.cos(a)*58,Math.sin(a)*58]]);}}
    else if(prop==='racing-gloves'){ctx.fillRect(-25,-12,46,25);path(ctx,[[-25,-12],[-17,-29],[16,-29],[27,-9],[21,13],[-25,13]],false,true);for(let i=0;i<3;i++)path(ctx,[[-12+i*10,-24],[-12+i*10,-13]]);}
    else if(prop==='bronze-bracelets'){ellipse(ctx,-15,0,24,34);ellipse(ctx,20,0,24,34);}
  }
  function internationalTechnique(ctx,id,variant,s){
    const {a,w,clock}=s, prop=a.storyProp||global.BRASA_MOVES?.fighters?.[id]?.specials?.[variant]?.storyProp;
    if(id==='vittoria'&&variant===0){
      if(w.ready){ctx.save();ctx.globalAlpha*=.42;ctx.fillStyle='#b15c50';for(let j=0;j<3;j++)ctx.fillRect(-40-j*13,-56-j*21,22+j*5,2);ctx.fillStyle='#bfa583';ctx.fillRect(-16,-4,7,3);ctx.fillRect(-28,-3,4,2);ctx.restore();}
      return;
    }
    const u=w.ready?clamp((a.time-a.startup)/Math.max(.05,a.active),0,1):w.charge;
    const mode=a.storyMotion||'strike',reach=Math.min(220,Math.max(70,a.range||100));
    let x=45,y=-112,angle=0;
    if(mode==='rise'){x=48+u*35;y=-70-u*120;angle=-u*.9;}
    else if(mode==='strike'){x=35+Math.sin(u*Math.PI)*reach*.55;angle=-.7+u*1.25;}
    else if(mode==='withdraw'){x=60-u*35;angle=u*.6;}
    else if(mode==='close'){x=55+Math.sin(u*Math.PI)*40;angle=-u*1.2;}
    else if(mode==='plant'){x=65;y=-20;}
    else if(mode==='arrival'){x=-25;y=-100;}
    else if(mode==='release'){x=48+u*30;}
    else if(mode==='travel'){x=65;angle=-.15;}
    ctx.save();ctx.translate(x,y);ctx.rotate(angle);storyObject(ctx,prop,clock,variant);ctx.restore();
    if(mode==='parry'&&a.triggered){for(let i=0;i<3;i++)path(ctx,[[70,-130+i*17],[105,-145+i*17]]);}
  }
  function defense(ctx,id,s) {
    const { a,w,clock }=s,style=colors[id],x=53,y=-122;ctx.strokeStyle=style[0];ctx.fillStyle=style[0];
    if(id==='bento'){ctx.fillStyle='#8d5e3b';ctx.fillRect(x-13,y-31,27,57);ctx.strokeStyle=style[1];ctx.strokeRect(x-13,y-31,27,57);for(let j=0;j<5;j++)path(ctx,[[x-9,y-25+j*11],[x-4,y-21+j*11]]);}
    else if(id==='ramiro')for(let j=0;j<3;j++)crystal(ctx,x-16+j*15,y+34,19,60+j%2*17,style[1]);
    else if(id==='jana'){lightning(ctx,x-7,y+32,x+4,y-32,clock,4);path(ctx,[[x-16,y+28],[x+13,y+11],[x+7,y-25]]);}
    else if(id==='caua'||id==='rosa'){branch(ctx,x,y+39,79);if(id==='rosa'){ctx.fillStyle='#e6b6b6';flower(ctx,x+3,y-41,9);}}
    else if(id==='nara'){curve(ctx,[x-9,y+38],[x+37,y],[x-9,y-38]);curve(ctx,[x-16,y+30],[x+24,y],[x-16,y-30]);}
    else if(id==='tiao'){for(let j=0;j<3;j++)ellipse(ctx,x,y+j*19-19,22,8,.35,clock*3+j,clock*3+j+4.2);}
    else if(id==='breu'){for(let j=0;j<4;j++){path(ctx,[[x-16+j*10,y-31],[x+14-j*8,y+33]]);path(ctx,[[x-16,y-27+j*19],[x+16,y-20+j*15]]);}}
    else if(id==='damiao'){path(ctx,[[x-16,y+30],[x-21,y-12],[x-12,y-31],[x+1,y-13],[x+10,y-34],[x+20,y-5],[x+14,y+28]],false,true);}
    else if(id==='lia')helmet(ctx,x,y,27);
    else if(id==='iris'){ctx.strokeRect(x-14,y-34,31,69);ctx.strokeRect(x-8,y-26,20,52);for(let j=0;j<4;j++)path(ctx,[[x-19,y-20+j*15],[x-12,y-20+j*15]]);}
    else if(id==='augusto')frame(ctx,x,y,38,81);
    else if(id==='valter'){microphone(ctx,x,y-9);path(ctx,[[x+16,y-34],[x+24,y-34],[x+24,y+25],[x+16,y+25]]);}
    else if(id==='serena')shield(ctx,x,y,38,88);
    else if(id==='caio'){ctx.lineWidth=7;path(ctx,[[x-5,y+33],[x+5,y-37]]);ctx.lineWidth=2;path(ctx,[[x-12,y+11],[x+10,y+11]]);}
    else if(id==='davi'){ctx.strokeRect(x-13,y-16,26,51);path(ctx,[[x-9,y-11],[x+9,y+29]]);ball(ctx,x,y-29,15,0);}
    else if(id==='luz'){microphone(ctx,x-9,y-5,.25);equalizer(ctx,x+8,y+28,23,57,clock,4);}
    else if(id==='ti'){path(ctx,[[x-16,y+28],[x-15,y-4],[x-10,y-7],[x-10,y-27],[x-5,y-27],[x-4,y-10],[x,y-32],[x+5,y-31],[x+5,y-9],[x+10,y-25],[x+15,y-22],[x+12,y+11],[x+4,y+28]],false,true);}
    if(!['bento','ramiro','jana','caua','nara','tiao','breu','damiao','lia','iris','rosa','augusto','valter','serena','caio','davi','luz','ti'].includes(id))internationalTechnique(ctx,id,0,s);
    if(a.triggered&&w.ready){ctx.strokeStyle=style[1];path(ctx,[[77,-137],[98,-122],[78,-108]]);}
  }

  function drawAttack(ctx,p,index,time,players) {
    const a=p?.attack,id=p?.data?.id;
    if(!a||!known.has(id)||(!a.special&&a.token!=='defense'&&a.pose!=='defenseStrike'))return false;
    const w=attackWindow(a);if(!w||w.alpha<=0)return true;
    const px=number(p.x),py=number(p.y),dir=a.direction===-1?-1:a.direction===1?1:p.facing===-1?-1:1;
    if(!anchors.has(a))anchors.set(a,{x:number(a.originX,number(a.startX,px)),y:number(a.originY,py)});
    const anchor=anchors.get(a),enemyPlayer=players?.[1-(index===1?1:0)];
    const s={a,w,clock:number(time),ground:py,origin:(anchor.x-px)*dir,enemy:enemyPlayer?clamp((number(enemyPlayer.x)-px)*dir,40,320):80};
    ctx.save();try{
      setup(ctx,w.alpha,colors[id][0]);ctx.translate(px,GROUND-py);ctx.scale(dir,1);
      if(a.token==='defense'||a.pose==='defenseStrike'||p.pose==='defenseStrike')defense(ctx,id,s);
      else if(['bento','ramiro','jana','caua','nara','tiao','breu','damiao','lia','iris','rosa','augusto','valter','serena','caio','davi','luz','ti'].includes(id))technique(ctx,id,variantOf(a),s);
      else internationalTechnique(ctx,id,variantOf(a),s);
    } finally {ctx.restore();}
    return true;
  }

  function projectileTrap(ctx,q,clock) {
    const r=clamp(number(q.radius,40),8,65),source=q.source;
    if(source==='ramiro'||q.effect==='ice'||q.freeze>0){
      ctx.fillStyle='#62b7db';ctx.strokeStyle='#cff7ff';for(let j=0;j<5;j++)crystal(ctx,-r+j*r*.5,7,17,24+(j%2)*18,'#dbfbff');path(ctx,[[-r-6,8],[r+6,8]]);
    } else if(source==='rosa'){
      ctx.strokeStyle='#83b86b';ctx.fillStyle='#83b86b';for(let j=0;j<4;j++){branch(ctx,-r+j*r*.66,7,25+j%2*13,j%2?1:-1);ctx.fillStyle='#e9b6b1';flower(ctx,-r+j*r*.66+3,-23-j%2*13,6);ctx.fillStyle='#83b86b';}
    } else if(source==='caua'){
      ctx.strokeStyle='#82bb74';ctx.fillStyle='#b4cb7a';for(let j=0;j<4;j++)branch(ctx,-r+j*r*.66,7,34+j%2*11,j%2?1:-1);
    } else {
      ctx.strokeStyle='#d3a3dc';for(let j=0;j<6;j++){const x=-r+j*r*.4;path(ctx,[[x,6],[x-7,-13],[x+3,-25],[x+9,-11]]);}
      path(ctx,[[-r-5,6],[r+5,6]]);for(let j=0;j<5;j++)path(ctx,[[-r+j*r*.5,-3],[-r+9+j*r*.5,10]]);
    }
    if(q.delay>0){ctx.lineWidth=2;ellipse(ctx,0,9,r+3,6);}
  }
  function drawProjectile(ctx,q,time) {
    const kind=q?.kind;
    if(!['ice','iceShard','trap','thorn','wave','bubble','wind','doll','voice','ball','token','taxiToken'].includes(kind)&&!known.has(q?.source))return false;
    if(q.cancelled||number(q.life,1)<=0)return true;
    const x=number(q.x),y=GROUND-number(q.y),r=clamp(number(q.radius,18),3,75),clock=number(time);
    const dir=number(q.vx)>0?1:number(q.vx)<0?-1:q.parentAttack?.direction===-1?-1:1;
    ctx.save();try{
      setup(ctx,q.delay>0?.27:.82,q.color||'#c8e6d9');ctx.translate(x,y);ctx.scale(dir,1);
      const story=q.parentAttack?.storyProp;
      const international=!['bento','ramiro','jana','caua','nara','tiao','breu','damiao','lia','iris','rosa','augusto','valter','serena','caio','davi','luz','ti'].includes(q.source);
      if(international&&story){ctx.scale(kind==='trap'?1:.62,kind==='trap'?1:.62);if(kind==='trap')ctx.translate(0,-45);storyObject(ctx,story,clock,q.variant||0);}
      else if(kind==='trap')projectileTrap(ctx,q,clock);
      else if(kind==='ice'||kind==='iceShard'){
        ctx.fillStyle='#5eaed5';ctx.strokeStyle='#d5faff';path(ctx,[[-r*.9,-r*.45],[r*.55,-r*.7],[r*1.25,0],[r*.55,r*.7],[-r*.9,r*.45],[-r*1.2,0]],true);
        path(ctx,[[-r*.9,-r*.45],[r*.55,-r*.7],[r*1.25,0],[r*.55,r*.7],[-r*.9,r*.45],[-r*1.2,0]],false,true);path(ctx,[[-r*.8,0],[r,0],[r*.4,-r*.5]]);path(ctx,[[0,0],[r*.4,r*.5]]);
        for(let j=0;j<3;j++)path(ctx,[[-r-8-j*11,-r*.35+j*7],[-r-19-j*11,-r*.35+j*7]]);
      } else if(kind==='thorn'){
        ctx.fillStyle=q.source==='caua'?'#d9864d':'#8cc36c';ctx.strokeStyle=q.source==='caua'?'#f2ce81':'#d9e7a0';path(ctx,[[-r*1.25,-r*.28],[r*1.65,0],[-r*1.25,r*.28],[-r*.6,0]],true);path(ctx,[[-r*.65,0],[r*1.35,0]]);leaf(ctx,-r*.5,-r*.1,r*.7,-1);
      } else if(kind==='wave'){
        ctx.fillStyle='#4ba6b8';ctx.strokeStyle='#c5f9ef';path(ctx,[[-r,-r*.5],[0,-r*.95],[r*.6,-r*.52],[r*1.05,0],[r*.55,r*.6],[-r,r*.55],[-r*.3,r*.05]],true);
        curve(ctx,[-r*.8,-r*.43],[r*.8,-r*1.15],[r*.87,0]);curve(ctx,[-r*.8,r*.5],[r*.7,r*.8],[r*.87,0]);path(ctx,[[r*.2,-r*.35],[r*.65,-r*.23],[r*.4,-r*.03]]);
      } else if(kind==='bubble'){
        ctx.strokeStyle='#b6f7ef';ellipse(ctx,0,0,r,r*.96);ctx.globalAlpha*=.26;ctx.fillStyle='#73cad4';ellipse(ctx,0,0,r-2,r*.96-2,0,0,TAU,true);ctx.globalAlpha=clamp(number(ctx.globalAlpha)*3.2,0,.82);
        ctx.strokeStyle='#e4ffff';curve(ctx,[-r*.65,-r*.25],[-r*.55,-r*.7],[-r*.17,-r*.75]);ctx.strokeStyle='#81d6df';curve(ctx,[-r*.9,r*.2],[0,r*.47],[r*.85,-r*.06]);
      } else if(kind==='wind'){
        ctx.strokeStyle='#d4eee4';for(let j=0;j<3;j++)curve(ctx,[-r*1.6,r*(j-1)*.55],[r*.9,-r*.8+j*r*.4],[r*.95,r*(j-1)*.27]);
        ellipse(ctx,r*.2,0,r*.77,r*.53,.2,-Math.PI*.65,Math.PI*.58);ctx.fillStyle='#d76c50';path(ctx,[[-r*.32,-r*.48],[r*.2,-r*.8],[r*.5,-r*.3],[-r*.2,-r*.2]],true);
      } else if(kind==='doll'){
        puppet(ctx,0,-3,.88);ctx.strokeStyle='#b28cc6';for(let j=0;j<3;j++)curve(ctx,[-r-18-j*7,-16+j*14],[-r-6,-29+j*14],[-r+2,-15+j*14]);
      } else if(kind==='voice'){
        const singer=q.source==='luz';ctx.strokeStyle=singer?'#7ae3e5':'#f4d99a';sound(ctx,0,0,r,3,singer?.44:.37);
        if(singer){ctx.fillStyle='#eb9bc6';equalizer(ctx,-r,Math.min(15,r*.7),r*1.25,r*1.15,clock,5);}
        else {ctx.strokeRect(-r*.7,-r*.48,r*.45,r*.8);path(ctx,[[-r*.6,-r*.25],[-r*.36,-r*.25]]);path(ctx,[[-r*.6,-r*.07],[-r*.36,-r*.07]]);}
      } else if(kind==='ball'){
        ctx.strokeStyle='#77bba6';for(let j=0;j<3;j++)path(ctx,[[-r-9-j*13,-r*.7+j*r*.7],[-r-22-j*13,-r*.7+j*r*.7]]);ctx.strokeStyle='#183b3a';ball(ctx,0,0,r,clock);
      } else if(kind==='token'||kind==='taxiToken'){
        ctx.strokeStyle='#f1d88d';for(let j=0;j<2;j++)path(ctx,[[-r-6-j*10,-5+j*10],[-r-17-j*10,-5+j*10]]);coin(ctx,0,0,r,clock);
      } else {
        const seed=Array.from(String(q.source)).reduce((v,c)=>v+c.charCodeAt(0),0);
        ctx.fillStyle=q.color||'#f5d492';
        for(let i=0;i<7;i++)for(let j=0;j<5;j++)if((i*3+j+seed)%4!==0&&Math.abs(j-2)+Math.abs(i-3)*.5<3.6)ctx.fillRect((i-3)*4,(j-2)*4,4,4);
        ctx.fillStyle=colors[q.source]?.[1]||'#fff2d3';ctx.fillRect(2,-2,9,4);
        for(let i=0;i<4;i++)ctx.fillRect(-22-i*10,(i%2?-6:6),6,2);
      }
    } finally {ctx.restore();}
    return true;
  }
  global.BrasaCombatFX={drawAttack,drawProjectile,storyObject};
}(typeof window!=='undefined'?window:globalThis));
