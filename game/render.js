/* BRASA — one raster rendering path shared by menus, previews and combat. */
(function(global){
  'use strict';
  function stage(ctx,data,width,height,time=0){
    if(!ctx)return false;
    if(global.BrasaStages?.draw(ctx,data,width,height,time))return true;
    ctx.save();ctx.fillStyle='#101122';ctx.fillRect(0,0,width,height);ctx.restore();return false;
  }
  function fighter(ctx,data,x,groundY,scale=2.5,pose='idle',face=1,time=0,options={}){
    return !!global.BrasaFighters?.draw(ctx,data,x,groundY,scale,pose,face,time,options);
  }
  function portrait(canvas,data,options={}){return !!global.BrasaFighters?.portrait(canvas,data,options);}
  global.BrasaRender=Object.freeze({stage,fighter,portrait});
})(typeof window!=='undefined'?window:globalThis);
