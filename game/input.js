/* Keyboard + two independent gamepads. No dependencies or device driver installation. */
(function () {
  'use strict';
  const actions = ['left','right','up','down','light','heavy','kick','special','special2','special3','grab','block','super'];
  const defaults = [
    {left:'KeyA',right:'KeyD',up:'KeyW',down:'KeyS',light:'KeyF',heavy:'KeyG',kick:'KeyH',special:'KeyR',grab:'KeyT',block:'ShiftLeft'},
    {left:'ArrowLeft',right:'ArrowRight',up:'ArrowUp',down:'ArrowDown',light:'KeyJ',heavy:'KeyK',kick:'KeyL',special:'KeyO',grab:'KeyP',block:'ShiftRight'}
  ];
  const padDefaults = {left:{button:14},right:{button:15},up:{button:12},down:{button:13},light:{button:0},heavy:{button:2},kick:{button:1},special:{button:3},special2:{button:7},special3:{button:6},grab:{button:5},block:{button:4},super:{button:11}};
  const clone = value => JSON.parse(JSON.stringify(value));
  class BrasaInput {
    constructor() {
      this.keys = new Set(); this.pulses = new Set(); this.padPulses = [new Set(),new Set()]; this.binding = null; this.slots = [null,null]; this.lastButtons = new Map(); this.lastActions = new Map(); this.lastMenu = {}; this.onMenu = () => {}; this.onBind = () => {}; this.onDisconnect = () => {};
      this.config = {keyboard:clone(defaults),gamepad:[clone(padDefaults),clone(padDefaults)],reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches};
      try {
        const saved = JSON.parse(localStorage.getItem('brasa.controls.v1'));
        if (saved && Array.isArray(saved.keyboard) && saved.keyboard.length===2 && Array.isArray(saved.gamepad) && saved.gamepad.length===2) {
          for (let p=0;p<2;p++) for (const action of actions) {
            const code=saved.keyboard[p]?.[action];
            if (typeof code==='string' && /^(Key[A-Z]|Digit[0-9]|Numpad\w+|Arrow(?:Left|Right|Up|Down)|Shift(?:Left|Right)|Control(?:Left|Right)|[A-Z][A-Za-z0-9]+)$/.test(code) && !['Enter','Tab','Space','Escape'].includes(code)) this.config.keyboard[p][action]=code;
            const m=saved.gamepad[p]?.[action];
            if(m && Number.isInteger(m.button)&&m.button>=0&&m.button<64)this.config.gamepad[p][action]={button:m.button};
            else if(m && Number.isInteger(m.axis)&&m.axis>=0&&m.axis<16&&Math.abs(m.sign)===1)this.config.gamepad[p][action]={axis:m.axis,sign:m.sign};
          }
          // Older profiles may already use a trigger or R3 for a custom action.
          // Keep that choice and put a newly introduced shortcut on a free button.
          for(let p=0;p<2;p++)for(const action of ['special2','special3','super'])if(!saved.gamepad[p]?.[action]){
            const used=new Set(actions.filter(key=>key!==action).map(key=>this.config.gamepad[p][key]?.button));
            if(used.has(this.config.gamepad[p][action].button)){
              const free=[7,6,11,10,8,...Array.from({length:17},(_,i)=>i)].find(button=>button!==9&&!used.has(button));
              this.config.gamepad[p][action]={button:free};
            }
          }
          this.config.reducedMotion=Boolean(saved.reducedMotion);
        }
      } catch (_) {}
      document.addEventListener('keydown',event => this.keydown(event));
      document.addEventListener('keyup',event => this.keys.delete(event.code));
      window.addEventListener('blur',()=>this.clear());
      window.addEventListener('gamepaddisconnected',event=>this.disconnectPad(event.gamepad.index));
    }
    save(){try{localStorage.setItem('brasa.controls.v1',JSON.stringify(this.config));}catch(_) {}}
    clear(){this.keys.clear();this.consume();}
    consume(){this.pulses.clear();this.padPulses.forEach(p=>p.clear());}
    reset(){this.config.keyboard=clone(defaults);this.config.gamepad=[clone(padDefaults),clone(padDefaults)];this.binding=null;this.save();}
    keydown(event){
      if(event.ctrlKey||event.metaKey||event.altKey) return;
      if(this.binding){
        event.preventDefault();
        if(event.code==='Escape'){this.binding=null;this.onBind('cancel');return;}
        if(this.binding.type!=='keyboard')return;
        if(['Enter','Tab','Space'].includes(event.code)){this.onBind('reserved');return;}
        const {player,action}=this.binding;
        if(Object.values(this.config.keyboard[1-player]).includes(event.code)){this.onBind('conflict');return;}
        const old=this.config.keyboard[player][action];
        for(const key of actions) if(this.config.keyboard[player][key]===event.code) this.config.keyboard[player][key]=old;
        this.config.keyboard[player][action]=event.code;this.binding=null;this.save();this.keys.clear();this.onBind('saved');return;
      }
      if(!event.repeat&&!this.keys.has(event.code))this.pulses.add(event.code);
      this.keys.add(event.code);
      const menus={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right',KeyW:'up',KeyS:'down',KeyA:'left',KeyD:'right',Enter:'confirm',Space:'confirm',Escape:'back'};
      for(const action of ['left','right','up','down']) if(event.code===this.config.keyboard[0][action]) menus[event.code]=action;
      if(menus[event.code]){event.preventDefault();if(!event.repeat||!['confirm','back'].includes(menus[event.code]))this.onMenu(menus[event.code],'keyboard');}
      else if(defaults.some((_,p)=>Object.values(this.config.keyboard[p]).includes(event.code)))event.preventDefault();
    }
    beginBind(player,action,type){this.binding={player,action,type,since:performance.now(),armed:false};this.clear();}
    getPads(){try{return Array.from(navigator.getGamepads?.()||[]).filter(p=>p&&p.connected);}catch(_){return [];}}
    disconnectPad(index){
      const slot=this.slots.indexOf(index);
      if(slot>=0)this.slots[slot]=null;
      this.lastButtons.delete(index);
      this.lastActions.delete(index);
      if(slot>=0)this.padPulses[slot].clear();
      for(const direction of ['up','down','left','right'])delete this.lastMenu[index+direction];
      if(slot>=0)this.onDisconnect(slot);
    }
    poll(time){
      const pads=this.getPads();
      for(const index of this.slots.slice())if(index!==null&&!pads.some(p=>p.index===index))this.disconnectPad(index);
      for(const pad of pads)if(!this.slots.includes(pad.index)&&(pad.buttons.some(b=>b.pressed||b.value>.5)||pad.axes.slice(0,2).some(a=>Math.abs(a)>.45))){const empty=this.slots.indexOf(null);if(empty>=0)this.slots[empty]=pad.index;}
      for(const pad of pads){
        const slot=this.slots.indexOf(pad.index);if(slot<0)continue;
        const buttons=pad.buttons.map(b=>b.pressed||b.value>.5);
        const before=this.lastButtons.get(pad.index)||[];
        const currentActions={};
        for(const action of actions)currentActions[action]=this.padAction(pad,slot,action);
        currentActions.left ||=pad.axes[0]<-.25;currentActions.right ||=pad.axes[0]>.25;
        currentActions.up ||=pad.axes[1]<-.4;currentActions.down ||=pad.axes[1]>.4;
        const previousActions=this.lastActions.get(pad.index)||{};
        if(!this.binding)for(const action of actions)if(currentActions[action]&&!previousActions[action])this.padPulses[slot].add(action);
        this.lastActions.set(pad.index,currentActions);
        if(this.binding&&buttons[9]&&!before[9]){this.binding=null;this.onBind('cancel');this.lastButtons.set(pad.index,buttons);continue;}
        if(this.binding?.type==='gamepad'&&slot===this.binding.player){
          if(time-this.binding.since>250&&!buttons.some(Boolean)&&pad.axes.every(a=>Math.abs(a)<.4))this.binding.armed=true;
          if(this.binding.armed){
            let mapping=null;
            const b=buttons.findIndex((v,i)=>v&&!before[i]&&i!==9);
            if(b>=0)mapping={button:b};
            else{const a=pad.axes.findIndex(v=>Math.abs(v)>.7);if(a>=0)mapping={axis:a,sign:Math.sign(pad.axes[a])};}
            if(mapping){
              const {player,action}=this.binding;const old=this.config.gamepad[player][action];
              for(const key of actions)if(JSON.stringify(this.config.gamepad[player][key])===JSON.stringify(mapping))this.config.gamepad[player][key]=old;
              this.config.gamepad[player][action]=mapping;this.binding=null;this.save();this.onBind('saved');
            }
          }
        }else if(!this.binding){
          const directions={up:this.padAction(pad,slot,'up')||pad.axes[1]<-.45,down:this.padAction(pad,slot,'down')||pad.axes[1]>.45,left:this.padAction(pad,slot,'left')||pad.axes[0]<-.45,right:this.padAction(pad,slot,'right')||pad.axes[0]>.45};
          for(const direction in directions){const key=pad.index+direction;const last=this.lastMenu[key]??-1000;if(directions[direction]&&time-last>190){this.onMenu(direction,'gamepad');this.lastMenu[key]=time;}else if(!directions[direction])delete this.lastMenu[key];}
          if(buttons[0]&&!before[0])this.onMenu('confirm','gamepad');
          if(buttons[1]&&!before[1])this.onMenu('back','gamepad');
          if(buttons[9]&&!before[9])this.onMenu('start','gamepad');
        }
        this.lastButtons.set(pad.index,buttons);
      }
      return pads;
    }
    padAction(pad,player,action){const map=this.config.gamepad[player][action];if(!map)return false;return map.button!==undefined?Boolean(pad.buttons[map.button]?.pressed||pad.buttons[map.button]?.value>.5):Boolean(pad.axes[map.axis]*map.sign>.3);}
    states(){
      const pads=this.getPads();
      return [0,1].map(player=>{
        const pad=pads.find(p=>p.index===this.slots[player]);const state={};
        state.pressed={};
        for(const action of actions){
          const pressed=this.pulses.has(this.config.keyboard[player][action])||this.padPulses[player].has(action);
          state[action]=this.keys.has(this.config.keyboard[player][action])||pressed||Boolean(pad&&this.padAction(pad,player,action));
          state.pressed[action]=pressed;
        }
        // A pad face button always calls special 1, even while walking/crouching.
        // Keyboard special + direction remains available to existing players.
        state.directSpecial=this.padPulses[player].has('special')||Boolean(pad&&this.padAction(pad,player,'special'));
        if(pad){state.left ||=pad.axes[0]<-.25;state.right ||=pad.axes[0]>.25;state.up ||=pad.axes[1]<-.4;state.down ||=pad.axes[1]>.4;}
        return state;
      });
    }
    label(code){if(typeof code!=='string')return '—';return ({ArrowUp:'↑',ArrowDown:'↓',ArrowLeft:'←',ArrowRight:'→',ShiftLeft:'SHIFT E',ShiftRight:'SHIFT D'})[code]||code.replace('Key','').replace('Digit','').replace('Numpad','NUM ');}
    padLabel(player,action){const m=this.config.gamepad[player][action];if(!m)return '—';if(m.axis!==undefined)return 'EIXO '+m.axis+(m.sign>0?'+':'−');const labels={0:'× / A',1:'○ / B',2:'□ / X',3:'△ / Y',4:'L1 / LB',5:'R1 / RB',6:'L2 / LT',7:'R2 / RT',10:'L3 / LS',11:'R3 / RS',12:'↑',13:'↓',14:'←',15:'→'};return labels[m.button]||'B'+m.button;}
  }
  window.BrasaInput=BrasaInput;
})();
