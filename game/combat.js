/* BRASA — deterministic, renderer-independent 60 Hz fighting prototype. */
(function (global) {
  'use strict';
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const KEYS = ['left', 'right', 'up', 'down', 'light', 'heavy', 'kick', 'special', 'special2', 'special3', 'grab', 'block', 'super'];
  const BUFFER_TIME = 6 / 60;
  const DASH = Object.freeze({tapWindow:.22,forwardDuration:.16,backDuration:.14,cooldown:.36});
  // One activation owns one budget, shared by its body hit and all projectiles.
  // Strong specials keep their character, without a volley draining a whole bar.
  const DAMAGE_LIMITS = Object.freeze({special:200,super:300,specialChip:24,superChip:36});
  const MOTION = Object.freeze({gravity:1190,floatGravity:175,
    takeoff:.04,apexSpeed:80,landing:.1,jumpBuffer:.12});
  // Legacy centre-based dimensions remain available to old standalone consumers.
  const BODY = Object.freeze({halfWidth:29,standingHeight:198,crouchingHeight:122,footInset:6});
  // Native opaque (alpha > 48) silhouette union across all 24 authored idle,
  // walk and backwalk frames: left, right, height above feet, below feet.
  // Atlas frame rectangles also contain transparent padding and faint sheet
  // glows; using those rectangles would stop fighters far outside contact.
  const REST_FOOTPRINTS = Object.freeze({
    caua:[60,55,130,1],tiao:[49,49,130,1],damiao:[57,56,130,0],lia:[61,51,129,1],iris:[57,55,129,1],augusto:[44,61,135,1],
    serena:[55,49,131,1],caio:[63,58,135,1],luz:[58,59,137,1],ti:[61,57,129,1],brick:[57,64,134,1],steele:[59,54,129,1],
    jack:[60,59,129,1],gloria:[83,60,134,1],roxy:[54,72,134,1],silas:[54,79,137,1],boris:[67,57,131,1],irina:[48,65,128,1],
    yuri:[67,67,131,1],vera:[50,69,131,1],maksim:[60,69,134,2],anya:[63,59,131,1],lev:[56,62,131,1],nikolai:[71,63,135,1],
    zoya:[50,54,131,1],aya:[61,61,130,1],tetsu:[52,77,130,1],mika:[55,61,132,1],shiori:[59,66,129,1],liang:[60,65,133,0],
    barro:[56,91,136,1],vittoria:[68,56,133,1],luca:[64,99,131,1],enzo:[63,58,130,1],rocco:[69,56,129,2],tenor:[52,68,133,0],
    lin:[82,69,132,2],qiao:[56,55,130,0],bianca:[51,67,131,1],akari:[57,61,131,1],goro:[64,66,131,1],ramiro:[54,76,130,0],
    nara:[61,64,129,0],breu:[55,51,129,1],valter:[55,54,128,1],daigo:[78,69,136,0],kitsune:[57,64,130,1],shen:[75,68,130,0],
    long:[60,72,130,1],marco:[72,55,131,1],jana:[56,66,129,1],arthur:[64,95,134,1],bento:[57,60,130,1],yan:[74,55,129,1],
    eleanor:[74,55,128,1],tommy:[65,55,132,1],dex:[62,63,129,1],grey:[57,83,131,1],morgan:[51,65,131,1],alfie:[71,51,131,1],
    regolith:[67,62,133,2],clockwork:[53,65,134,1],bram:[71,73,129,1],selene:[55,67,134,0],umbriel:[58,65,128,0],apogeu:[63,54,131,1],
    rosa:[59,56,129,2],davi:[61,61,129,1],voltx:[69,56,132,1],homer:[58,55,129,1],dusty:[51,61,132,1],ren:[52,68,133,1],
    mei:[60,59,131,2],bo:[81,69,129,1],belladonna:[49,111,132,2],nonna:[60,96,138,0]
  });
  const ATTACK_KEYS = ['special', 'grab', 'heavy', 'kick', 'light'];
  const MOBILITY = { valter: 195, serena: 208, caio: 235, davi: 260, luz: 225 };
  const NORMALS = {
    light: { startup: .075, active: .075, recovery: .16, range: 78, damage: 55, stun: .20, push: 36 },
    heavy: { startup: .19, active: .095, recovery: .29, range: 105, damage: 110, stun: .34, push: 70 },
    kick: { startup: .12, active: .10, recovery: .24, range: 133, damage: 80, stun: .27, push: 55 },
    grab: { startup: .12, active: .065, recovery: .37, range: 69, damage: 135, stun: .46, push: 95, throw: true }
  };
  const SPECIALS = {
    bento: { startup: .23, active: .11, recovery: .37, range: 365, damage: 125, stun: .37, push: 65, ground: true, effect: 'fissure' },
    ramiro: { startup: .19, active: .09, recovery: .34, range: 260, damage: 100, stun: .57, push: 0, pull: true, effect: 'electric' },
    jana: { startup: .13, active: .49, recovery: .24, range: 102, damage: 42, stun: .19, push: 18, multi: 3, move: 170, effect: 'spin' },
    caua: { startup: .20, active: .1, recovery: .36, range: 125, damage: 100, stun: .30, push: 12, root: .8, effect: 'roots' },
    nara: { startup: .12, active: .06, recovery: .29, range: 0, damage: 0, projectileOnly: true, effect: 'wave' },
    tiao: { startup: .16, active: .20, recovery: .32, range: 120, reachY: 190, damage: 140, stun: .43, push: 70, launch: 260, effect: 'spark' },
    breu: { startup: .18, active: .06, recovery: .31, range: 0, damage: 0, projectileOnly: true, effect: 'trap' },
    damiao: { startup: .13, active: .34, recovery: .32, range: 102, damage: 95, stun: .30, push: 85, move: 265, effect: 'beast' },
    lia: { startup: .06, active: .29, recovery: .29, range: 88, damage: 115, stun: .33, push: 45, move: 790, pass: true, effect: 'dash' },
    iris: { startup: .46, active: .10, recovery: .38, range: 430, damage: 165, stun: .43, push: 135, effect: 'beam' },
    rosa: { startup: .10, active: .25, recovery: .34, range: 0, damage: 0, projectileOnly: true, effect: 'thorns' },
    valter: { startup: .26, active: .06, recovery: .43, range: 0, damage: 0, projectileOnly: true, effect: 'wave' },
    serena: { startup: .19, active: .24, recovery: .37, range: 97, damage: 105, stun: .31, push: 110, move: 185, effect: 'block' },
    caio: { startup: .15, active: .23, recovery: .40, range: 107, damage: 95, stun: .28, push: 18, move: 430, root: .62, effect: 'electric' },
    davi: { startup: .20, active: .06, recovery: .32, range: 0, damage: 0, projectileOnly: true, effect: 'spark' },
    luz: { startup: .17, active: .48, recovery: .32, range: 190, damage: 36, stun: .19, push: 18, multi: 3, effect: 'wave' }
  };

  class BrasaCombat {
    constructor(options = {}) {
      this.options = options;
      this.mode = options.mode || 'cpu';
      this.difficulty = options.difficulty || 'normal';
      this.stage = options.stage || null;
      this.fighterScale = clamp(Number(options.fighterScale) || 1, .2, 2);
      this.scaledGeometry = options.visualGeometry === true || this.fighterScale !== 1;
      this.worldWidth = Math.max(960, Number(options.worldWidth ?? this.stage?.worldWidth) || 2880);
      this.worldMin = 55; this.worldMax = this.worldWidth - 55;
      this.viewport = null;
      this.onEvent = typeof options.onEvent === 'function' ? options.onEvent : () => {};
      this.seed = Number(options.seed) || 1729;
      this.clock = 0;
      this.simulationClock = 0;
      this.actionSequence = 0;
      this.rng = typeof options.rng === 'function' ? options.rng : () => {
        this.seed = (Math.imul(this.seed, 1664525) + 1013904223) >>> 0;
        return this.seed / 4294967296;
      };
      const fighters = options.fighters || [{ id: 'bento' }, { id: 'ramiro' }];
      this.players = [0, 1].map(i => this.makePlayer(fighters[i] || fighters[0], i));
      this.fighterMargin = this.scaledGeometry ? Math.ceil(Math.max(...this.players.map(p => p.visualHalfWidth))) + 3 : 55;
      this.worldMin = this.fighterMargin; this.worldMax = this.worldWidth - this.fighterMargin;
      this.round = 1;
      this.projectiles = [];
      this.effects = [];
      this.previous = [{}, {}];
      this.resetRound();
    }

    makePlayer(data, i) {
      const movement=this.catalog(data.id)?.movement, baseSpeed=155+clamp(Number(data.stats?.speed)||3,1,5)*20;
      const visualBounds = this.visualFootprint(data);
      return { data, x: this.worldWidth / 2 + (i ? 300 : -300), y: 0, vx: 0, vy: 0, facing: i ? -1 : 1,
        visualBounds, visualHalfWidth:Math.max(visualBounds.left,visualBounds.right),pushBounds:this.spriteFootprint(data,'idle',0)||visualBounds,
        walkDistance:0,walkVelocity:0,jumpBufferUntil:0,jumpPhase:'grounded',airTime:0,groundedTime:0,landingTime:0,
        motion:{jumpPhase:'grounded',phaseTime:0,airTime:0,groundedTime:0,landingTime:0,landingProgress:1,
          landingImpact:0,verticalSpeed:0,moveSpeed:0,walkSpeed:0,anticipation:0,apex:false,landing:false,jumpDirection:0,
          dashing:false,dashDirection:0,dashProgress:1},
        dashTime:0,dashDuration:0,dashDirection:0,dashSpeed:0,dashCooldown:0,dashQueued:0,lastTapDirection:0,lastTapAt:-Infinity,reaction:null,
        hp: 1000, maxHp: 1000, meter: 0, maxMeter: 100, rounds: 0, pose: 'idle',
        attack: null, stun: 0, blockStun: false, guard: false, crouching: false, grounded: true,
        specialCooldown: 0, specialCooldowns: [0, 0, 0], combo: 0, comboTime: 0, comboDamage: 0,
        comboName: '', lastComboName: '', lastComboDamage: 0, comboActions: [], comboTarget: null, comboActionIds: [], inputBuffer: null,
        lastMoveName: '', lastMoveId: '', armor: 0, invulnerable: 0, root: 0, frozen: 0, iceImmunity: 0, defenseCooldown: 0, revive: 0,
        guardAge: 99, counterWindow: 0, dodgeTime: 0, dodgeCooldown: 0, thrownTime: 0, float: 0, overheat: 0, buff: null, stance: 0,
        moveSpeed: MOBILITY[data.id] || (movement ? baseSpeed*clamp(Number(movement.walk)||1,.65,1.35) : 220),
        backSpeed: movement ? clamp((Number(movement.backwalk)||.73)/(Number(movement.walk)||1),.45,.95) : .73,
        jumpSpeed: 505*clamp(Number(movement?.jump)||1,.7,1.3) };
    }

    resetRound() {
      this.viewport = null;
      this.previousWorldPositions = null;
      this.players.forEach((p, i) => {
        const wins = p.rounds, meter = p.meter;
        Object.assign(p, this.makePlayer(p.data, i), { rounds: wins, meter });
      });
      this.timer = this.mode === 'training' ? Infinity : 60;
      this.introDuration = this.round === 1 ? Math.max(.1, Number(this.options.introDuration) || 1.7) : 1.7;
      this.phase = 'intro';
      this.phaseTime = 0;
      this.winner = null;
      this.finisherWinner = null;
      this.finisherLoser = null;
      this.finisher = null;
      this.finisherTime = 0;
      this.finishWindowDuration = 3;
      this.finisherDuration = 3.8;
      this.matchEventSent = false;
      this.superOwner = null; this.superTarget = null; this.superDefinition = null; this.superTime = 0; this.superDuration = 1.65; this.superConnected = false;
      this.freeze = 0;
      this.projectiles.length = 0;
      this.effects.length = 0;
      this.previous = [{}, {}];
      this.ai = { next: 0, pulse: 0, input: {} };
    }

    nextRound() {
      if (this.phase !== 'roundOver') return false;
      if (this.winner !== 'draw') this.round++;
      this.resetRound();
      return true;
    }

    rematch() {
      this.round = 1;
      this.players.forEach(p => { p.rounds = 0; p.meter = 0; });
      this.resetRound();
    }

    event(type, data = {}) { this.onEvent({ type, ...data }); }
    color(p) { return typeof p.data.color === 'string' ? p.data.color : '#ffb35a'; }
    effect(x, y, kind, color, text = '', life = .42) {
      this.effects.push({ x, y, kind, color, text, life, maxLife: life });
    }

    hitFreeze(attack, blocked, owner) {
      if (this.options.hitstop === false || !this.catalog(this.players[owner].data.id)) return 0;
      const duration = (blocked ? 2 : attack.special ? 10 : attack.kind === 'heavy' || attack.token === 'heavy' ? 8 : 6) / 60;
      this.freeze = Math.max(this.freeze, duration);
      this.event('impact', { player: owner, victim: 1 - owner, blocked, duration,
        strength: blocked ? .25 : attack.special ? 1 : attack.kind === 'heavy' || attack.token === 'heavy' ? .7 : .4 });
      return duration;
    }
    inputs(value) {
      return KEYS.reduce((out, key) => { out[key] = !!(value && value[key]); out.pressed[key] = !!value?.pressed?.[key]; return out; }, {pressed:{},directSpecial:!!value?.directSpecial});
    }

    catalog(id) { return global.BRASA_MOVES?.fighters?.[id] || null; }

    visualFootprint(data) {
      const authored = global.BRASA_ASSETS?.authoredFighters?.find(actor => actor.id === data.id);
      const bounds = REST_FOOTPRINTS[data.id];
      if (!bounds) return {left:BODY.halfWidth*this.fighterScale,right:BODY.halfWidth*this.fighterScale,
        top:BODY.standingHeight*this.fighterScale,bottom:0};
      const factor = 215 * this.fighterScale / (Number(authored?.standingHeight) || 128);
      return {left:bounds[0]*factor,right:bounds[1]*factor,top:bounds[2]*factor,bottom:bounds[3]*factor};
    }

    visualBox(p) {
      const shape=p.visualBounds,left=p.facing<0?shape.right:shape.left,right=p.facing<0?shape.left:shape.right;
      return {left:p.x-left,right:p.x+right,top:p.y+shape.top,bottom:p.y-shape.bottom};
    }

    spriteFootprint(data, pose, time, attack, options = {}) {
      const geometry=global.BrasaSpriteGeometry,definition=geometry?.get(data.id);
      if (!definition) return null;
      const native=geometry.bounds(data.id,pose,time,attack,options),factor=215*this.fighterScale/definition.standingHeight;
      return {left:native.left*factor,right:native.right*factor,top:native.top*factor,bottom:native.bottom*factor};
    }

    pushBox(p) {
      // Neutral opaque bodies give stable contact spacing. The full animation
      // envelope still contains hands/costumes at world and camera edges.
      const shape=p.pushBounds,left=p.facing<0?shape.right:shape.left,right=p.facing<0?shape.left:shape.right;
      return {left:p.x-left,right:p.x+right,top:p.y+shape.top,bottom:p.y-shape.bottom};
    }

    restDistance(a, b, direction = b.x >= a.x ? 1 : -1) {
      const boxA=this.visualBox(a),boxB=this.visualBox(b);
      return (direction>0?boxA.right-a.x:a.x-boxA.left)+(direction>0?b.x-boxB.left:boxB.right-b.x)+4;
    }

    minimumDistance(a, b, direction = b.x >= a.x ? 1 : -1) {
      if (!this.scaledGeometry) return 51;
      const boxA=this.pushBox(a),boxB=this.pushBox(b);
      return (direction>0?boxA.right-a.x:a.x-boxA.left)+(direction>0?b.x-boxB.left:boxB.right-b.x)+4;
    }

    normalContact(p, attack) {
      return this.scaledGeometry && !attack.special && !attack.throw && ['light','heavy','kick'].includes(attack.kind) ?
        global.BrasaSpriteGeometry?.normalContact(p.data.id,attack.kind) : null;
    }

    normalContactOffset(p, attack, contact = this.normalContact(p, attack)) {
      if (!contact) return 0;
      const definition=global.BrasaSpriteGeometry.get(p.data.id),factor=215*this.fighterScale/definition.standingHeight;
      return clamp(p.pushBounds.right+4-contact.forwardExtent*factor,0,24*this.fighterScale);
    }

    normalHurtbox(p) {
      const shape=this.spriteFootprint(p.data,p.pose,this.simulationClock,p.attack,{motion:p.motion,walkDistance:p.walkDistance});
      if (!shape) return this.hurtbox(p);
      const offset=global.BrasaSpriteGeometry.contactOffset(p.attack)||0,x=p.x+offset*p.facing;
      return {left:x-(p.facing<0?shape.right:shape.left),right:x+(p.facing<0?shape.left:shape.right),
        bottom:p.y-shape.bottom,top:p.y+shape.top};
    }

    attackReach(p, enemy, attack) {
      if (!this.scaledGeometry) return attack.range + (attack.throw ? 0 : BODY.halfWidth);
      const contact=this.normalContact(p,attack);
      if (contact) {
        const definition=global.BrasaSpriteGeometry.get(p.data.id),factor=215*this.fighterScale/definition.standingHeight,
          body=this.normalHurtbox(enemy),direction=attack.direction||p.facing;
        return contact.forwardExtent*factor*1.014+(attack.visualContactOffset??this.normalContactOffset(p,attack,contact))+
          (direction>0?enemy.x-body.left:body.right-enemy.x);
      }
      // Keep the legacy reach beyond resting contact, measured from the two
      // visible surfaces rather than a now much wider centre-to-centre gap.
      return this.restDistance(p,enemy,attack.direction || p.facing) +
        Math.max(0,(attack.range+(attack.throw?0:BODY.halfWidth)-51)*this.fighterScale);
    }

    setViewport(view) {
      if (!view || !Number.isFinite(view.x) || !(Number(view.zoom) > 0)) { this.viewport = null; return; }
      const width = Math.max(1, Number(view.width) || 960), zoom = Number(view.zoom);
      const visibleWidth = width / zoom;
      this.viewport = { ...view, width, zoom, visibleWidth,
        x: clamp(view.x, 0, Math.max(0, this.worldWidth - visibleWidth)),
        fighterMargin: Math.max(this.scaledGeometry?this.fighterMargin:29, Number(view.fighterMargin) || (this.scaledGeometry?this.fighterMargin:95)) };
      this.constrainToViewport(this.previousWorldPositions);
      return this.viewport;
    }

    arenaBounds() {
      if (!this.viewport) return [this.worldMin, this.worldMax];
      const view = this.viewport, margin = view.fighterMargin;
      return [Math.max(this.worldMin, view.x + margin),
        Math.min(this.worldMax, view.x + view.visibleWidth - margin)];
    }

    constrainToViewport(previousPositions = this.previousWorldPositions, separationOptions) {
      const [min, max] = this.arenaBounds();
      this.players.forEach((p, i) => {
        const before = p.x;
        p.x = clamp(Number.isFinite(p.x) ? p.x : this.worldWidth / 2, min, max);
        const blocked = p.x <= min && p.vx < 0 || p.x >= max && p.vx > 0;
        if (p.x !== before && p.walkVelocity) {
          const previous = previousPositions?.[i] ?? before;
          p.walkDistance = Math.max(0, p.walkDistance - Math.min(Math.abs(before - previous), Math.abs(before - p.x)));
        }
        if (blocked) {
          p.vx = 0; p.walkVelocity = 0;
          if (p.pose === 'walk' || p.pose === 'backwalk') p.pose = p.guard ? 'guard' : 'idle';
          this.updateMotion(p, 0);
        }
      });
      if (this.scaledGeometry) this.separatePlayers(previousPositions,separationOptions);
    }

    resolveReposition(mover){
      this.constrainToViewport(this.previousWorldPositions,{preserveOrder:false,mover});
      this.previousWorldPositions=this.players.map(p=>p.x);
    }

    hurtbox(p) {
      if(this.scaledGeometry){
        const box=this.visualBox(p),top=p.crouching?p.visualBounds.top*BODY.crouchingHeight/BODY.standingHeight:p.visualBounds.top;
        return {left:box.left,right:box.right,halfWidth:p.visualHalfWidth,
          bottom:p.y+BODY.footInset*this.fighterScale,top:p.y+top};
      }
      return {left:p.x-BODY.halfWidth,right:p.x+BODY.halfWidth,halfWidth:BODY.halfWidth,
        bottom:p.y+BODY.footInset,top:p.y+(p.crouching?BODY.crouchingHeight:BODY.standingHeight)};
    }

    clearCombo(p) {
      p.combo = 0; p.comboTime = 0; p.comboDamage = 0; p.comboName = '';
      p.comboActions = []; p.comboActionIds = []; p.comboTarget = null;
    }

    captureInput(p, i, input) {
      if (p.inputBuffer && p.inputBuffer.expires < this.simulationClock - 1e-9) p.inputBuffer = null;
      const edge = key => input.pressed?.[key] || input[key] && !this.previous[i][key];
      this.captureDash(p, i, input);
      if(edge('up')&&p.hp>0)p.jumpBufferUntil=this.simulationClock+MOTION.jumpBuffer;
      const directVariant=edge('special2')?1:edge('special3')?2:null;
      const kind = edge('super') || !input.directSpecial && input.heavy && input.special && (edge('heavy') || edge('special')) ? 'super' :
        directVariant!==null ? 'special' :
        input.block && input.kick && (edge('block') || edge('kick')) ? 'dodge' :
        input.block && input.heavy && (edge('block') || edge('heavy')) ? 'grab' :
        input.block && input.light && (edge('block') || edge('light')) ? 'defense' : ATTACK_KEYS.find(edge);
      if (!kind || p.hp <= 0) return;
      p.dashQueued = 0;
      const forward = p.facing > 0 ? input.right && !input.left : input.left && !input.right;
      p.inputBuffer = { kind, variant: directVariant!==null ? directVariant : input.directSpecial ? 0 : input.down ? 1 : forward ? 2 : 0,
        crouching: !!input.down, expires: this.simulationClock + BUFFER_TIME };
    }

    captureDash(p, i, input) {
      p.dashQueued = 0;
      if (this.phase !== 'fight' || this.freeze > 0 || !p.grounded || p.attack || p.hp <= 0 || p.stun > 0 ||
          p.frozen > 0 || p.root > 0 || p.overheat > 0 || p.dodgeTime > 0 || p.dashTime > 0 || p.dashCooldown > 0 ||
          input.block || input.down || input.up) {
        p.lastTapDirection = 0; p.lastTapAt = -Infinity; return;
      }
      const axis = Number(input.right) - Number(input.left);
      // A held direction never counts as another tap, including repeated pressed flags.
      const key = axis > 0 ? 'right' : 'left';
      if (!axis || this.previous[i][key]) return;
      if (p.lastTapDirection === axis && this.simulationClock - p.lastTapAt <= DASH.tapWindow) {
        p.dashQueued = axis; p.lastTapDirection = 0; p.lastTapAt = -Infinity;
      } else { p.lastTapDirection = axis; p.lastTapAt = this.simulationClock; }
    }

    beginDash(p, i) {
      if (!p.dashQueued || !p.grounded || p.attack || p.stun > 0 || p.dashCooldown > 0) return false;
      p.dashDirection = p.dashQueued; p.dashQueued = 0;
      p.dashDuration = p.dashDirection === p.facing ? DASH.forwardDuration : DASH.backDuration;
      p.dashSpeed = p.moveSpeed * (p.dashDirection === p.facing ? 2.35 : 1.95);
      p.dashTime = p.dashDuration; p.dashCooldown = DASH.cooldown;
      p.guard = false; p.crouching = false; p.jumpBufferUntil = 0; p.landingTime = 0; p.walkVelocity = 0;
      this.clearCombo(p);
      this.event('dash', { player:i,direction:p.dashDirection,duration:p.dashDuration });
      return true;
    }

    canCancel(p, command) {
      const a = p.attack;
      if(a&&command.kind==='super'&&a.kind==='heavy'&&!a.special&&!a.confirmed&&a.time<=.08&&p.meter>=100)return true;
      if (!a || !a.confirmed || a.special || a.throw || p.comboActions.length >= 3) return false;
      if (a.time < a.startup || a.time > a.startup + a.active + 1e-9) return false;
      const next = command.kind, current = a.token;
      if (!['light','heavy','kick','special'].includes(next)) return false;
      const nextToken = next === 'special' ? `special${command.variant || 0}` : next;
      const sequence = [...p.comboActions, nextToken];
      // A finite authored route can repeat a token (Jack's double jab), never
      // beyond the matching prefix or the shared three-action chain limit.
      if (this.catalog(p.data.id)?.combos?.some(combo => combo.sequence.length >= sequence.length && sequence.every((token,index)=>combo.sequence[index]===token))) return true;
      return nextToken !== current && !p.comboActions.includes(nextToken);
    }

    consumeInput(p, i) {
      const command = p.inputBuffer;
      if (!command || command.expires < this.simulationClock - 1e-9 || p.hp <= 0 || p.frozen > 0 || p.root > 0 || p.dodgeTime > 0 || p.dashTime > 0 || p.overheat > 0 ||
          (p.stun > 0 && !(command.kind === 'defense' && p.blockStun))) return false;
      const cancelling = !!p.attack;
      if (cancelling && !this.canCancel(p, command)) return false;
      const victim = this.players[1 - i];
      if (!cancelling && this.catalog(p.data.id) && p.comboActions.length >= 3 &&
          (victim.stun > 0 || victim.root > 0 || victim.frozen > 0 || !victim.grounded)) return false;
      if (command.kind === 'grab' && !p.grounded) return false;
      if (command.kind === 'super') {
        if (!this.beginSuper(p, i)) return false;
      } else if (command.kind === 'dodge') {
        if (!this.dodge(p, i, command)) return false;
      } else if (command.kind === 'defense') {
        if (!this.defenseStrike(p, i)) return false;
      } else if (command.kind === 'special') {
        if (p.specialCooldown > 0 || p.specialCooldowns[command.variant] > 0) return false;
        if (!this.special(p, i, p.data.id, false, command.variant)) return false;
      } else {
        const previousAttack = p.attack;
        this.startAttack(p, command.kind, this.normalDefinition(p, command.kind, command.crouching), { player: i });
        if (cancelling) p.attack.cancelledFrom = previousAttack.token;
      }
      p.inputBuffer = null;
      return true;
    }

    normalDefinition(p, kind, crouching) {
      const catalog = this.catalog(p.data.id), scale = catalog?.normalScale || {};
      const spec = { ...NORMALS[kind], ...catalog?.normalOverrides?.[kind] }, speed = clamp(Number(scale.speed) || 1, .65, 1.5);
      spec.damage *= clamp(Number(scale.damage) || 1, .65, 1.5);
      spec.damage *= p.buff?.damage || 1;
      spec.range *= clamp(Number(scale.range) || 1, .65, 1.5);
      if (kind !== 'grab') spec.recovery *= .72;
      ['startup', 'active', 'recovery'].forEach(key => { spec[key] /= speed; });
      spec.token = kind;
      spec.moveId = `${p.data.id}:${kind}`;
      spec.moveName = catalog?.normalNames?.[kind] || { light: 'Soco rápido', heavy: 'Soco forte', kick: 'Chute', grab: 'Agarrão' }[kind];
      if (catalog && kind !== 'grab') {
        // Confirmed cancels must fit inside hitstun, including a slow special startup.
        spec.stun = kind === 'light' ? .42 : .58;
        spec.push *= .38;
      }
      if (kind !== 'grab' && !p.grounded) {
        spec.hitHeight = 'overhead'; spec.reachY = 155; spec.damage *= 1.08;
        spec.moveName = { light: 'Soco aéreo', heavy: 'Martelo aéreo', kick: 'Voadora' }[kind];
        spec.moveId += ':air'; spec.pose = { light: 'airLight', heavy: 'airHeavy', kick: 'airKick' }[kind];
      } else if (kind !== 'grab' && crouching) {
        if (kind === 'light') { spec.hitHeight = 'low'; spec.range *= .92; spec.moveName = 'Jab baixo'; spec.pose = 'lowLight'; }
        if (kind === 'heavy') { spec.reachY = 205; spec.launch = 280; spec.range *= .88; spec.moveName = 'Uppercut'; spec.pose = 'uppercut'; }
        if (kind === 'kick') { spec.hitHeight = 'low'; spec.ground = true; spec.range *= 1.13; spec.launch = 110; spec.moveName = 'Rasteira'; spec.pose = 'sweep'; }
        spec.moveId += ':crouch';
      }
      return spec;
    }

    update(dt, input = []) {
      dt = clamp(Number(dt) || 0, 0, .05);
      if (!dt) return;
      this.previousWorldPositions = this.players.map(p => p.x);
      this.constrainToViewport();
      this.clock += dt;
      if (this.phase !== 'fight' || this.freeze <= 0) this.simulationClock += dt;
      if (this.phase !== 'fight') this.players.forEach(p => { p.lastTapDirection = 0; p.lastTapAt = -Infinity; p.dashQueued = 0; });
      this.effects.forEach(e => { e.life -= dt; });
      this.effects = this.effects.filter(e => e.life > 0);
      const controls = [this.inputs(input[0]), this.inputs(input[1])];
      if (this.mode === 'cpu') controls[1] = this.cpuInput(dt);
      if (this.mode === 'training') controls[1] = this.inputs(null);
      this.phaseTime += dt;
      if (this.phase === 'intro') {
        // Keep a last-moment tap and let a held command work when FIGHT appears.
        // Recording it only as previous input silently swallowed the first attack.
        if(this.phaseTime>=this.introDuration-BUFFER_TIME)this.players.forEach((p,i)=>this.captureInput(p,i,controls[i]));
        this.previous = controls;
        if (this.phaseTime >= this.introDuration) { this.phase = 'fight'; this.phaseTime = 0; this.previous=[{},{}]; this.event('round', { round: this.round }); }
        return;
      }
      if (this.phase === 'finishWindow') {
        const winner = this.finisherWinner;
        if (this.phaseTime >= this.finishWindowDuration) this.completeMatch(false);
        else if ((this.mode === 'cpu' && winner === 1 && this.phaseTime >= 1) ||
            (controls[winner]?.pressed?.special || controls[winner]?.special && !this.previous[winner]?.special)) this.beginFinisher();
        this.previous = controls;
        return;
      }
      if (this.phase === 'finisher') {
        this.finisherTime = this.phaseTime;
        if (this.phaseTime >= this.finisherDuration) this.completeMatch(true);
        this.previous = controls;
        return;
      }
      if (this.phase === 'super') {
        this.superTime = this.phaseTime;
        const target = this.players[this.superTarget], command = controls[this.superTarget];
        const back = target.facing > 0 ? command.left && !command.right : command.right && !command.left;
        target.crouching = target.grounded && command.down;
        target.guard = target.hp > 0 && target.grounded && target.stun <= 0 && target.frozen <= 0 && (command.block || back);
        if (!this.superResolved && this.phaseTime >= .74) this.resolveSuper();
        if (this.phaseTime >= this.superDuration) {
          this.phase = 'fight'; this.phaseTime = 0; this.freeze = 0;
          this.players[this.superOwner].stun = Math.max(this.players[this.superOwner].stun, .16);
          if (this.mode !== 'training' && this.players.some(p => p.hp <= 0)) this.endRound();
        }
        this.previous = controls;
        return;
      }
      if (this.phase !== 'fight') {
        if (this.phase === 'roundOver' && this.phaseTime >= 2.6) this.nextRound();
        this.previous = controls;
        return;
      }
      this.facePlayers();
      this.players.forEach((p, i) => this.captureInput(p, i, controls[i]));
      if (this.freeze > 0) { this.freeze = Math.max(0, this.freeze - dt); if (this.freeze < 1e-9) this.freeze = 0; this.previous = controls; return; }
      if (Number.isFinite(this.timer)) this.timer = Math.max(0, this.timer - dt);
      this.facePlayers();
      this.players.forEach((p, i) => {
        const victim = this.players[1 - i];
        if (p.combo && victim.stun <= 0 && victim.root <= 0 && victim.frozen <= 0 && victim.grounded) this.clearCombo(p);
      });
      this.players.forEach((p, i) => this.updatePlayer(p, i, controls[i], dt));
      if (this.phase !== 'fight') { this.previous = controls; return; }
      this.separatePlayers();
      this.constrainToViewport();
      this.players.forEach((p, i) => this.updateAttack(p, i, dt));
      this.updateProjectiles(dt);
      this.constrainToViewport();
      this.facePlayers();
      this.players.forEach(p => {
        p.hp = clamp(Number.isFinite(p.hp) ? p.hp : 0, 0, p.maxHp);
        p.meter = clamp(p.meter, 0, p.maxMeter);
      });
      this.previous = controls;
      if (this.mode !== 'training' && (this.timer <= 0 || this.players.some(p => p.hp <= 0))) this.endRound();
    }

    updatePlayer(p, i, input, dt) {
      if (this.phase !== 'fight') return;
      const opponent = this.players[1 - i];
      const wasFrozen = p.frozen > 0;
      const wasDashing = p.dashTime > 0;
      ['stun', 'specialCooldown', 'comboTime', 'armor', 'invulnerable', 'root', 'frozen', 'iceImmunity', 'defenseCooldown', 'counterWindow', 'dodgeTime', 'dodgeCooldown', 'dashTime', 'dashCooldown', 'thrownTime', 'float', 'overheat', 'landingTime'].forEach(k => { p[k] = Math.max(0, p[k] - dt); });
      if (p.reaction) { p.reaction.time = Math.min(p.reaction.duration, p.reaction.time + dt); if (p.reaction.time >= p.reaction.duration) p.reaction = null; }
      if (p.stun > 0 || p.frozen > 0 || p.root > 0 || p.hp <= 0) p.dashTime = 0;
      if (wasDashing && p.dashTime <= 0 && p.stun <= 0) p.vx = 0;
      if (p.buff) { p.buff.duration -= dt; if (p.buff.duration <= 0) p.buff = null; }
      if (wasFrozen && !p.frozen) {
        p.iceImmunity = Math.max(p.iceImmunity, .65);
        this.effect(p.x, p.y + 65, 'ice', '#b9f4ff', 'DEGELO', .3);
        this.event('thaw', { player: i, immunity: .65 });
      }
      p.specialCooldowns = p.specialCooldowns.map(value => Math.max(0, value - dt));
      if (p.revive > 0) {
        p.revive -= dt;
        if (p.revive <= 0) {
          p.hp = p.maxHp; p.stun = 0; p.root = 0; p.frozen = 0; p.iceImmunity = 0; p.attack = null; p.pose = 'idle'; p.inputBuffer = null;
          this.clearCombo(p); this.clearCombo(opponent);
        }
      }
      const back = p.facing > 0 ? input.left && !input.right : input.right && !input.left;
      const wasGuard = p.guard;
      p.guard = p.hp > 0 && p.frozen <= 0 && p.dodgeTime <= 0 && p.dashTime <= 0 && p.grounded && !p.attack && (p.stun <= 0 || p.blockStun) && (input.block || back);
      p.guardAge = p.guard ? wasGuard ? p.guardAge + dt : 0 : 99;
      if (p.frozen <= 0) p.crouching = p.hp > 0 && p.grounded && input.down;
      this.beginDash(p, i);
      const canAct = p.hp > 0 && p.frozen <= 0 && p.stun <= 0 && !p.attack && p.root <= 0 && p.dodgeTime <= 0 && p.dashTime <= 0 && p.overheat <= 0;
      const axis = Number(input.right) - Number(input.left);
      let walkingDisplacement = null;
      const incomingVx = p.vx;
      p.vx *= Math.exp(-dt * 18);
      if (p.hp > 0 && p.frozen <= 0 && (p.stun <= 0 || p.blockStun) && p.root <= 0) this.consumeInput(p, i);
      if (this.phase !== 'fight') return;
      const airNormal = !p.grounded && p.attack && !p.attack.special && !p.attack.throw && !p.attack.move &&
        p.hp > 0 && p.frozen <= 0 && p.stun <= 0 && p.root <= 0;
      const freeFlight = !p.grounded && !p.attack && p.hp > 0 && p.frozen <= 0 && p.stun <= 0 && p.root <= 0;
      // A normal jump commits to its launch direction. D-pad changes and aerial normals
      // do not bend or brake the arc; hit reactions and authored specials own their impulses.
      if (freeFlight || airNormal) p.vx = incomingVx;
      if (canAct) {
        p.crouching = p.grounded && input.down;
        p.guard = p.grounded && (input.block || back);
        if (input.block || input.down) p.jumpBufferUntil = 0;
        if (!p.attack && p.jumpBufferUntil >= this.simulationClock - 1e-9 && p.jumpBufferUntil > 0 && p.grounded && !input.block) {
          p.vy = p.jumpSpeed; p.grounded = false; p.guard = false; p.crouching = false;
          p.airTime = 0; p.groundedTime = 0; p.landingTime = 0; p.jumpBufferUntil = 0;
          p.motion.jumpDirection = axis * p.facing; p.motion.landingImpact = 0;
          p.vx = axis * p.moveSpeed * 180 / 220 * (p.buff?.speed || 1);
          p.walkVelocity = 0;
          this.event('jump', { player: i });
        }
        if (p.grounded && !p.attack && !input.block && !p.crouching && p.dodgeTime <= 0) {
          // Ground movement starts, reverses and stops on the same simulation tick.
          // Animation eases between poses; the controls never add unwanted skating.
          p.walkVelocity = axis * p.moveSpeed * (back ? p.backSpeed : 1) * (p.buff?.speed || 1);
          p.vx = p.walkVelocity;
          walkingDisplacement = p.vx * dt;
        } else p.walkVelocity = 0;
        if (p.grounded && !p.attack && (input.block || p.crouching)) { p.vx = 0; walkingDisplacement = 0; }
      } else p.walkVelocity = 0;
      // Stationary ground attacks plant the feet. Authored dash attacks keep their travel.
      if (p.grounded && p.attack && !p.attack.move && p.stun <= 0) p.vx = 0;
      if (p.attack || p.dodgeTime > 0 || p.dashTime > 0 || p.stun > 0 || p.root > 0 || p.frozen > 0) walkingDisplacement = null;
      if (p.grounded && (p.attack || input.block || input.down || axis)) p.landingTime = 0;
      if (p.attack || p.dashTime > 0 || input.block || input.down || p.hp <= 0) p.jumpBufferUntil = 0;
      if (p.dodgeTime > 0) { p.vx = p.dodgeDirection * 420; p.guard = false; }
      if (p.dashTime > 0) {
        p.vx = p.dashDirection * p.dashSpeed;
        p.guard = false; p.crouching = false;
      }
      if (p.attack) {
        p.guard = false;
        p.attack.time += dt;
        if (p.attack.moveDuringActive) {
          p.vx = p.attack.time >= p.attack.startup && p.attack.time < p.attack.startup + p.attack.active ? p.attack.move * p.attack.direction : 0;
        } else if (p.attack.move && p.attack.time < p.attack.startup + p.attack.active) p.vx = p.attack.move * p.attack.direction;
      }
      if (p.root > 0 || p.frozen > 0) p.vx = 0;
      const previousX = p.x;
      p.x = clamp(p.x + (walkingDisplacement === null ? p.vx * dt : walkingDisplacement), this.worldMin, this.worldMax);
      if (walkingDisplacement !== null && p.grounded && !p.attack && !p.crouching && !input.block && p.dodgeTime <= 0) p.walkDistance += Math.abs(p.x - previousX);
      if ((!p.grounded || p.y > 0) && p.frozen <= 0) {
        const gravity = p.float > 0 ? MOTION.floatGravity : MOTION.gravity;
        p.y += p.vy * dt - gravity * dt * dt * .5;
        p.vy -= gravity * dt;
        if (p.y <= 0) {
          p.motion.landingImpact = clamp(Math.abs(p.vy) / 650, 0, 1);
          p.y = 0; p.vy = 0; p.grounded = true; p.groundedTime = 0;
          p.landingTime = p.attack || input.block || input.down || axis ? 0 : MOTION.landing;
          this.event('land', { player: i, impact: p.motion.landingImpact });
        }
      }
      const backwalking = back && !input.block && p.grounded && !p.crouching && Math.abs(p.vx) > 40;
      p.pose = p.hp <= 0 ? 'ko' : p.frozen > 0 ? 'frozen' : p.thrownTime > 0 ? 'thrown' : p.dodgeTime > 0 ? 'dodge' : p.stun > 0 ? 'hurt' : p.attack ? p.attack.pose || p.attack.kind : !p.grounded ? 'jump' : p.dashTime > 0 ? p.dashDirection === p.facing ? 'walk' : 'backwalk' : backwalking ? 'backwalk' : p.guard ? 'guard' : p.crouching ? 'crouch' : Math.abs(p.vx) > 40 ? 'walk' : p.landingTime > 0 ? 'land' : 'idle';
      this.updateMotion(p, dt);
      // Keep an immobilized combatant facing the opponent without snapping attacks mid-swing.
      if (!p.attack && Math.abs(opponent.x - p.x) > 2) p.facing = opponent.x > p.x ? 1 : -1;
    }

    updateMotion(p, dt = 0) {
      const motion = p.motion;
      if (!p.frozen) { p.airTime = p.grounded ? 0 : p.airTime + dt; p.groundedTime = p.grounded ? p.groundedTime + dt : 0; }
      const phase = p.grounded ? p.landingTime > 0 ? 'land' : 'grounded' : p.airTime <= MOTION.takeoff && p.vy > 0 ? 'takeoff' : Math.abs(p.vy) <= MOTION.apexSpeed ? 'apex' : p.vy > 0 ? 'rise' : 'fall';
      motion.phaseTime = phase === motion.jumpPhase ? motion.phaseTime + (p.frozen ? 0 : dt) : 0;
      p.jumpPhase = motion.jumpPhase = phase; motion.airTime = p.airTime; motion.groundedTime = p.groundedTime;
      motion.landingTime = p.landingTime; motion.landingProgress = 1 - p.landingTime / MOTION.landing;
      motion.verticalSpeed = p.vy; motion.moveSpeed = p.walkVelocity; motion.walkSpeed = Math.abs(p.walkVelocity) / Math.max(1, p.moveSpeed);
      motion.anticipation = phase === 'takeoff' && !p.attack && p.stun <= 0 ? 1 - clamp(p.airTime / MOTION.takeoff, 0, 1) : 0;
      motion.apex = phase === 'apex'; motion.landing = phase === 'land' && !p.attack && p.stun <= 0;
      motion.dashing = p.dashTime > 0; motion.dashDirection = motion.dashing ? p.dashDirection * p.facing : 0;
      motion.dashProgress = motion.dashing ? 1 - p.dashTime / p.dashDuration : 1;
    }

    startAttack(p, kind, definition, options = {}) {
      const spec = definition || NORMALS[kind];
      const player = options.player ?? this.players.indexOf(p);
      p.attack = { ...spec, kind, token: spec.token || kind, actionToken: spec.token || kind,
        actionId: ++this.actionSequence, time: 0, direction: p.facing, hits: 0, confirmed: false,
        nextHit: spec.startup, targets: new Set(), comboFinished: false };
      if (this.normalContact(p,p.attack)) p.attack.visualContactOffset=this.normalContactOffset(p,p.attack);
      p.pose = spec.pose || kind;
      p.jumpBufferUntil = 0; p.landingTime = 0; p.motion.anticipation = 0; p.motion.landing = false;
      p.guard = false;
      p.lastMoveName = spec.moveName || spec.name || kind;
      p.lastMoveId = spec.moveId || `${p.data.id}:${kind}`;
      this.event('move', { player, name: p.lastMoveName, id: p.lastMoveId, kind, variant: spec.variant ?? null });
      return p.attack;
    }

    defenseStrike(p, i) {
      const cost = p.counterWindow > 0 ? 0 : 20, cooldown = p.counterWindow > 0 ? .9 : 2.2;
      if (!p.grounded || p.attack || p.frozen > 0 || p.root > 0 || (p.stun > 0 && !p.blockStun) ||
          p.defenseCooldown > 0 || p.meter < cost) return false;
      p.meter -= cost; p.defenseCooldown = cooldown; p.stun = 0; p.blockStun = false;
      p.counterWindow = 0;
      this.clearCombo(p);
      const name = this.catalog(p.data.id)?.defenseName || 'Resposta de Guarda';
      this.startAttack(p, 'special', { startup: .04, active: .23, recovery: .32, range: 118, damage: 66,
        stun: .30, push: 105, counter: true, counterWindow: .23, counterDamage: 66,
        special: true, projectileOnly: true, pose: 'defenseStrike', token: 'defense',
        moveId: `${p.data.id}:defense`, moveName: name, effect: 'block', source: p.data.id }, { player: i });
      p.inputBuffer = null;
      this.effect(p.x, p.y + 68, 'block', '#bdeaff', '', .3);
      this.event('defense', { player: i, name, cost, cooldown });
      return true;
    }

    dodge(p, i, command) {
      if (!p.grounded || p.attack || p.stun > 0 || p.dodgeCooldown > 0 || p.root > 0) return false;
      p.dodgeTime = .28; p.dodgeCooldown = 1.1; p.invulnerable = .15;
      p.dodgeDirection = command.variant === 2 ? p.facing : -p.facing;
      p.guard = false; p.pose = 'dodge'; p.inputBuffer = null;
      this.clearCombo(p);
      this.event('dodge', { player: i, direction: p.dodgeDirection, duration: .28 });
      return true;
    }

    beginSuper(p, i) {
      const warmupChord=p.attack?.kind==='heavy'&&!p.attack.special&&!p.attack.confirmed&&p.attack.time<=.08;
      if (this.phase !== 'fight' || p.meter < 100 || !p.grounded || (p.attack&&!warmupChord) || p.stun > 0 || p.dodgeTime > 0) return false;
      const kit = this.catalog(p.data.id), base = kit?.specials?.[0] || {};
      this.superDefinition = { name: base.name || 'Brasa Suprema', line: p.data.name || '',
        kind: base.effect || 'spark', damage: 285, range: 320, hitHeight: 'mid', ...kit?.super };
      this.superDefinition.damage = clamp(Number(this.superDefinition.damage) || 285, 240, DAMAGE_LIMITS.super);
      this.superDefinition.range = clamp(Number(this.superDefinition.range) || 320, 90, 900);
      this.superOwner = i; this.superTarget = 1 - i; this.superTime = 0;
      this.superResolved = false; this.superConnected = false; this.superBlocked = false;
      this.phase = 'super'; this.phaseTime = 0; p.meter -= 100;
      this.players.forEach(q => { q.attack = null; q.inputBuffer = null; q.vx = 0; this.clearCombo(q); });
      p.pose = 'special';
      this.event('super', { player: i, target: 1 - i, name: this.superDefinition.name, duration: this.superDuration });
      return true;
    }

    resolveSuper() {
      this.superResolved = true;
      const owner = this.superOwner, p = this.players[owner], target = this.players[this.superTarget], spec = this.superDefinition;
      const inRange = Math.abs(p.x - target.x) <= spec.range && Math.abs(p.y - target.y) < 145;
      if (inRange) {
        this.superBlocked = target.guard && (spec.hitHeight === 'low' ? target.crouching : spec.hitHeight === 'overhead' ? !target.crouching : true) && !spec.throw;
        this.superConnected = this.hit(p, target, owner, { ...spec, special: true, token: 'super',
          actionId: ++this.actionSequence, moveName: spec.name, moveId: `${p.data.id}:super`,
          stun: .52, push: 115, effect: spec.kind, source: p.data.id });
      }
      this.event('superHit', { player: owner, target: this.superTarget, connected: this.superConnected,
        blocked: this.superBlocked, name: spec.name });
    }

    special(p, i, requested, copied = false, variant = 0) {
      const catalog = this.catalog(requested);
      if (!catalog?.specials?.[variant]) { this.legacySpecial(p, i, requested, copied); return true; }
      if (p.specialCooldown > 0 || p.specialCooldowns[variant] > 0) return false;
      const own = catalog.specials[variant];
      if (p.meter < (Number(own.meterCost) || 0)) return false;
      p.meter -= Number(own.meterCost) || 0;
      const enemy = this.players[1 - i];
      let spec = { ...own }, source = requested;
      if (spec.type === 'copy') {
        const copiedCatalog = this.catalog(enemy.data.id);
        const primary = copiedCatalog?.specials?.[0];
        const target = primary?.type !== 'copy' ? primary : null;
        spec = { ...(target || SPECIALS.iris), ...{ name: own.name, id: own.id, cooldown: own.cooldown } };
        source = target ? enemy.data.id : 'iris';
        this.effect(p.x, p.y + 130, 'copy', '#c3b1ff', 'ECO', .65);
      }
      if (spec.groundedOnly && !p.grounded) return false;
      const projectileOnly = !!spec.projectile && ['projectile', 'trap', 'retreat'].includes(spec.type);
      const a = this.startAttack(p, 'special', { startup: .15, active: .1, recovery: .3, damage: 0, range: 0,
        stun: .3, push: 40, ...spec, projectileOnly, special: true, source, variant,
        token: `special${variant}`, moveId: own.id || `${requested}:special${variant}`, moveName: own.name }, { player: i });
      p.specialCooldowns[variant] = Math.max(.45, Number(own.cooldown) || 1.8);
      p.specialCooldown = .26;
      a.damage *= p.buff?.damage || 1;
      if (a.type === 'throw') a.throw = true;
      if (a.type === 'counter') { a.counter = true; a.projectileOnly = true; }
      if (a.type === 'retreat' && !a.move) a.move = -240;
      if (a.armor) p.armor = Math.max(p.armor, Number(a.armor));
      if (a.invulnerable) p.invulnerable = Math.max(p.invulnerable, Number(a.invulnerable));
      if (a.selfFloat) { p.float = Math.min(1.2, Number(a.selfFloat)); p.y = Math.max(p.y, 55); p.vy = 75; p.grounded = false; }
      if (a.buff) { p.buff = { ...a.buff, duration: Math.min(6, Number(a.buff.duration) || 4) }; }
      if (Array.isArray(a.stanceCycle) && a.stanceCycle.length) {
        const kind = a.stanceCycle[p.stance++ % a.stanceCycle.length];
        p.buff = { kind, duration: 4, ...(kind === 'power' ? { damage: 1.18 } : kind === 'speed' ? { speed: 1.12 } : { guard: .3 }) };
        this.event('stance', { player: i, kind });
      }
      if (a.teleport) {
        const t = a.teleport, oldX = p.x;
        const behind = t.side === 'behind';
        p.x = clamp(enemy.x + (behind ? -enemy.facing : enemy.facing) * (Number(t.distance) || 86), this.worldMin, this.worldMax);
        p.y = Math.max(0, Number(t.height) || 0); p.vy = Number(t.vy) || 0; p.grounded = p.y <= 0;
        p.facing = p.x < enemy.x ? 1 : -1; a.direction = p.facing;
        this.effect(oldX, 45, 'smoke', this.color(p), '', .35);
        this.resolveReposition(i);
      }
      if (a.projectile) {
        const q = a.projectile, count = clamp(Math.floor(q.count || 1), 1, 5);
        if (q.unique) this.projectiles = this.projectiles.filter(item => !(item.owner === i && item.kind === q.kind));
        for (let index = 0; index < count; index++) {
          const anchor = q.anchor === 'enemy' ? clamp(enemy.x, p.x - (q.maxRange || 310), p.x + (q.maxRange || 310)) : p.x + p.facing * 40*this.fighterScale;
          this.spawnProjectile(p, i, { ...q, x: anchor,
            y: p.y + (Number.isFinite(q.y) ? q.y : 50) + index * (q.spreadY || 0),
            vx: ((Number.isFinite(q.vx) ? q.vx : 340) + index * (q.spreadVx || 0)) * p.facing,
            delay: (q.delay ?? a.startup) + index * (q.stagger ?? q.spacing ?? .08),
            damage: (q.damage === undefined ? a.damage : q.damage * (p.buff?.damage || 1)) * (a.empowered ? 1.35 : 1),
            hitHeight: q.hitHeight || a.hitHeight || (q.kind === 'trap' ? 'low' : 'mid'),
            actionId: a.actionId, token: a.token, moveId: a.moveId, moveName: a.moveName,
            variant, parentAttack: a, source, special: true });
        }
      }
      this.effect(p.x, p.y + 70, a.effect || 'spark', this.color(p), '', .48);
      this.event('special', { player: i, id: source, variant, name: own.name, copied: own.type === 'copy', empowered: !!a.empowered });
      return true;
    }

    legacySpecial(p, i, requested, copied = false) {
      let id = requested;
      if (id === 'augusto') {
        id = this.players[1 - i].data.id;
        if (!SPECIALS[id]) id = 'iris';
        this.effect(p.x, p.y + 130, 'copy', '#c3b1ff', 'ECO', .65);
      }
      if (!SPECIALS[id]) id = 'bento';
      const enemy = this.players[1 - i], color = this.color(p);
      const a = this.startAttack(p, 'special', { ...SPECIALS[id], special: true, source: id });
      p.specialCooldown = id === 'damiao' ? 4 : id === 'iris' ? 2.7 : id === 'serena' ? 2.5 : id === 'caio' ? 2.1 : id === 'luz' ? 1.85 : 1.55;
      if (requested === 'augusto' || copied) p.specialCooldown += .35;
      // Meter is reserved for the explicit super command; ordinary specials never consume a full bar automatically.
      const projectileDamage = damage => damage * (a.empowered ? 1.35 : 1);
      if (id === 'caua') {
        p.x = clamp(enemy.x - enemy.facing * 91, this.worldMin + 10, this.worldMax - 10);
        p.facing = p.x < enemy.x ? 1 : -1; a.direction = p.facing;
        this.effect(p.x, 45, 'smoke', '#6db382', 'RAIZ', .55);
      } else if (id === 'tiao') {
        p.x = clamp(enemy.x - p.facing * 74, this.worldMin + 10, this.worldMax - 10);
        p.y = 145; p.vy = -250; p.grounded = false;
      } else if (id === 'damiao') {
        p.armor = 3.5;
      } else if (id === 'lia') {
        p.invulnerable = .29;
      } else if (id === 'nara') {
        this.spawnProjectile(p, i, { kind: 'wave', y: p.y + 48, vx: 365 * p.facing, radius: 26, damage: projectileDamage(105), push: 80, life: 2.5, delay: .12 });
      } else if (id === 'breu') {
        this.projectiles = this.projectiles.filter(q => !(q.owner === i && q.kind === 'trap'));
        this.spawnProjectile(p, i, { kind: 'trap', x: clamp(enemy.x, p.x - 310, p.x + 310), y: 10, vx: 0, radius: 45, damage: projectileDamage(105), root: .9, life: 3.1, delay: .44 });
      } else if (id === 'rosa') {
        [30, 65, 105].forEach((height, index) => this.spawnProjectile(p, i, { kind: 'thorn', y: p.y + height, vx: (390 + index * 22) * p.facing, radius: 12, damage: projectileDamage(43), push: 18, life: 2.3, delay: .10 + index * .10 }));
      } else if (id === 'valter') {
        this.spawnProjectile(p, i, { kind: 'voice', y: p.y + 72, vx: 240 * p.facing, radius: 38, damage: projectileDamage(110), push: 115, stun: .32, life: 3.3, delay: .26 });
      } else if (id === 'serena') {
        p.armor = .62;
      } else if (id === 'davi') {
        this.spawnProjectile(p, i, { kind: 'ball', y: p.y + 21, vx: 550 * p.facing, radius: 18, damage: projectileDamage(95), push: 48, launch: 245, life: 1.7, delay: .20 });
      }
      this.effect(p.x, p.y + 70, a.effect, color, '', .48);
      this.constrainToViewport();
      this.event('special', { player: i, id, copied: requested === 'augusto', empowered: !!a.empowered });
    }

    spawnProjectile(p, owner, values) {
      const a = p.attack;
      const projectile = { x: p.x + p.facing * 40*this.fighterScale, y: p.y + 50, vx: 340 * p.facing,
        owner, kind: 'wave', color: this.color(p), radius: 18, life: 2, maxLife: values.life || 2,
        delay: 0, damage: 100, push: 55, stun: .28, special: true,
        actionId: a?.actionId, token: a?.token, moveId: a?.moveId, moveName: a?.moveName, parentAttack: a, ...values };
      projectile.y=p.y+(projectile.y-p.y)*this.fighterScale;
      projectile.radius*=this.fighterScale;
      if(projectile.arcAmplitude)projectile.arcAmplitude*=this.fighterScale;
      this.projectiles.push(projectile);
    }

    updateAttack(p, i) {
      const a = p.attack;
      if (!a) return;
      const enemy = this.players[1 - i];
      const strike=global.BrasaMoveTiming?.sample(a),canContact=!strike||(strike.canHit&&!a.strikeContacts?.has(strike.index));
      if (!a.projectileOnly && canContact && a.time >= a.startup && a.time <= a.startup + a.active && a.time >= a.nextHit) {
        const dx = enemy.x - p.x, body=this.normalContact(p,a)?this.normalHurtbox(enemy):this.hurtbox(enemy);
        const strikeY=p.y+(Number.isFinite(a.strikeHeight)?a.strikeHeight:a.hitHeight==='low'?42:128)*this.fighterScale, halfReachY=(a.reachY||90)*.5*this.fighterScale;
        const overlapsBody=strikeY+halfReachY>=body.bottom&&strikeY-halfReachY<=body.top;
        const reach=this.attackReach(p,enemy,a);
        const facingTarget = dx * a.direction >= -22 || a.pass;
        if (facingTarget && Math.abs(dx) <= reach && overlapsBody && (!a.ground || enemy.grounded) && (!a.throw || (enemy.grounded && !enemy.crouching)) && (!a.targets.has(1 - i) || a.multi)) {
          if (this.hit(p, enemy, i, a)) {
            a.targets.add(1 - i); a.hits++;
            if(strike)(a.strikeContacts||(a.strikeContacts=new Set())).add(strike.index);
            a.nextHit = strike?strike.windowEnd:a.time + .16;
            if (!a.multi || a.hits >= a.multi) a.nextHit = Infinity;
          }
        }
      }
      if (a.time >= a.startup + a.active + a.recovery && p.attack === a) {
        if (a.overheat) p.overheat = Math.min(1.8, Math.max(.25, Number(a.overheat)));
        if (!a.confirmed && !this.projectiles.some(q => q.owner === i && q.actionId === a.actionId)) this.clearCombo(p);
        p.attack = null;
      }
    }

    hit(attacker, victim, owner, attack) {
      if (victim.hp <= 0 || victim.invulnerable > 0) return false;
      const impactFrame=global.BrasaSpriteGeometry?.sampleFrame(victim.data.id,victim.pose,this.simulationClock,victim.attack,
        {motion:victim.motion,walkDistance:victim.walkDistance});
      const direction = victim.x >= attacker.x ? 1 : -1;
      const body=this.hurtbox(victim), impactY=clamp(Number.isFinite(attack.y)?attack.y:attacker.y+(attack.hitHeight==='low'?42:128)*this.fighterScale,body.bottom+10*this.fighterScale,body.top-10*this.fighterScale);
      const front = (attacker.x - victim.x) * victim.facing >= -10;
      const counter = victim.attack;
      if (counter?.counter && !counter.triggered && front && !attack.throw && attack.hitHeight !== 'low' &&
          counter.time >= counter.startup && counter.time <= counter.startup + (counter.counterWindow || counter.active)) {
        counter.triggered = true; counter.counter = false; counter.projectileOnly = true;
        this.effect(victim.x, victim.y + 65, 'block', this.color(victim), 'RESPOSTA', .4);
        const connected = Math.abs(attacker.x - victim.x) <= this.attackReach(victim,attacker,counter) && Math.abs(attacker.y - victim.y) <= (counter.reachY || 150)*this.fighterScale;
        this.event('counter', { player: 1 - owner, attacker: owner, name: counter.moveName, connected });
        if (connected) this.hit(victim, attacker, 1 - owner, { ...counter, damage: counter.counterDamage || counter.damage,
          special: true, parentAttack: counter, effect: counter.effect || 'spark' });
        else this.hitFreeze(counter, true, 1 - owner);
        return true;
      }
      const heightBlocked = attack.hitHeight === 'low' ? victim.crouching : attack.hitHeight === 'overhead' ? !victim.crouching : true;
      const blocked = victim.guard && front && heightBlocked && !attack.throw && victim.grounded;
      const armor = victim.armor > 0 && !attack.throw;
      const a = attack.parentAttack || attack;
      const actionId = attack.actionId ?? a.actionId ?? ++this.actionSequence;
      if (attacker.combo && (attacker.comboTarget !== 1 - owner || (victim.stun <= 0 && victim.root <= 0 && victim.frozen <= 0 && victim.grounded))) this.clearCombo(attacker);
      const existingAction = attacker.comboActionIds.indexOf(actionId);
      const actionIndex = existingAction < 0 ? attacker.comboActions.length : existingAction;
      const exhaustedChain = !!this.catalog(attacker.data.id) && actionIndex >= 3;
      const scaling = this.catalog(attacker.data.id) ? Math.max(.35, 1 - actionIndex * .15) : 1;
      let bonus = null, matchedCombo = null;
      if (!blocked && existingAction < 0 && !a.comboFinished) {
        const sequence = [...attacker.comboActions, attack.token || a.token || a.kind];
        matchedCombo = this.catalog(attacker.data.id)?.combos?.find(combo =>
          combo.sequence?.length === sequence.length && combo.sequence.every((token, index) => token === sequence[index]));
        if (matchedCombo) bonus = matchedCombo.bonus || {};
      }
      let damage = Math.round(Number(attack.damage || 0) * scaling * (attacker.armor > 0 ? 1.12 : 1));
      if (bonus) damage += clamp(Number(bonus.damage) || 0, 0, 25);
      if (blocked) damage = attack.special ? Math.max(1, Math.round(damage * .12)) : 0;
      if (blocked && (victim.buff?.guard || victim.buff?.armor)) damage = Math.round(damage * (1 - Math.min(.5, victim.buff.guard || victim.buff.armor)));
      else if (armor) damage = Math.round(damage * .57);
      if(attack.special||a.special){
        const superMove=(attack.token||a.token)==='super';
        const limit=superMove?DAMAGE_LIMITS.super:DAMAGE_LIMITS.special;
        const chipLimit=superMove?DAMAGE_LIMITS.superChip:DAMAGE_LIMITS.specialChip;
        const budget=a.damageBudget||(a.damageBudget={total:0,chip:0});
        const remaining=Math.max(0,Math.min(limit-budget.total,blocked?chipLimit-budget.chip:Infinity));
        // Consume an exhausted projectile without granting another stun/freeze.
        if(remaining===0&&Number(attack.damage)>0)return true;
        damage=Math.min(Math.max(0,damage),remaining);
        budget.total+=damage;if(blocked)budget.chip+=damage;
      }
      victim.hp = Math.max(0, victim.hp - damage);
      victim.walkVelocity = 0;
      victim.vx = direction * (blocked ? 75 : (attack.push || 20) * 5);
      victim.dashTime = 0; victim.dashQueued = 0; victim.lastTapDirection = 0; victim.lastTapAt = -Infinity;
      victim.reaction = {time:0,duration:blocked ? .16 : attack.special ? .3 : .22,direction,
        strength:blocked ? .25 : attack.special ? 1 : attack.kind==='heavy'||attack.token==='heavy' ? .7 : .4,
        impactFrame:impactFrame?.index??null,impactMirror:!!impactFrame?.contactMirror,impactClock:this.simulationClock};
      if (blocked) {
        a.confirmed = false; this.clearCombo(attacker); victim.inputBuffer = null;
        victim.stun = Math.max(victim.stun, .13); victim.blockStun = true;
        victim.meter += 4;
        if (victim.guardAge <= .11) {
          victim.counterWindow = .4; victim.meter += 4;
          this.event('perfectBlock', { player: 1 - owner, attacker: owner, counterWindow: .4 });
          this.effect(victim.x, victim.y + 85, 'block', '#fff2b0', 'GUARDA PRECISA', .32);
        }
        this.effect(victim.x - direction * 25, impactY, 'block', '#8cc9ff', '', .20);
        const freeze = this.hitFreeze(attack, true, owner);
        this.event('block', { player: 1 - owner, attacker: owner, damage, freeze });
      } else {
        if (!armor) {
          const interrupted = victim.attack;
          if (interrupted && this.catalog(victim.data.id)) this.projectiles.forEach(q => {
            if (q.parentAttack === interrupted && q.delay > 0) q.cancelled = true;
          });
          victim.attack = null;
          // A manual fourth link may deal scaled damage, but cannot keep the defender trapped.
          if (!exhaustedChain) victim.stun = attack.stun || .30;
          victim.blockStun = false; victim.guard = false; victim.pose = victim.frozen > 0 ? 'frozen' : 'hurt';
        }
        victim.inputBuffer = null;
        if (attack.meterDrain) victim.meter = Math.max(0, victim.meter - Math.min(35, Number(attack.meterDrain)));
        this.clearCombo(victim);
        if (attack.throw) { victim.thrownTime = .44; victim.vy = Math.max(victim.vy, 230); victim.grounded = false; }
        if (attack.pull) victim.x = clamp(attacker.x + direction * 105, this.worldMin, this.worldMax);
        if (attack.swap && attack.throw) {
          const origin = attacker.x;
          attacker.x = clamp(victim.x + direction * 51, this.worldMin, this.worldMax);
          victim.x = clamp(origin, this.worldMin, this.worldMax);
        }
        if (!exhaustedChain && (attack.root || bonus?.root)) victim.root = Math.max(victim.root, attack.root || 0, clamp(bonus?.root || 0, 0, .45));
        if (!exhaustedChain && attack.freeze > 0 && victim.iceImmunity <= 0 && victim.frozen <= 0) {
          const duration = clamp(Number(attack.freeze) || 0, .1, .8);
          const interrupted = victim.attack;
          if (interrupted) this.projectiles.forEach(q => {
            if (q.parentAttack === interrupted && q.delay > 0) q.cancelled = true;
          });
          victim.frozen = duration; victim.stun = Math.max(victim.stun, duration);
          victim.attack = null; victim.inputBuffer = null; victim.guard = false; victim.vx = 0; victim.pose = 'frozen';
          this.effect(victim.x, victim.y + 66, 'ice', '#9fefff', 'GELO', duration);
          this.event('ice', { player: 1 - owner, attacker: owner, duration });
        }
        const launch = exhaustedChain ? 0 : Math.max(attack.launch || 0, clamp(bonus?.launch || 0, 0, 330));
        if (launch) { victim.vy = launch; victim.grounded = false; }
        if (!exhaustedChain && attack.float > 0) { victim.float = Math.min(.8, Number(attack.float)); victim.y = Math.max(5, victim.y); victim.vy = Math.max(75, victim.vy); victim.grounded = false; }
        if (bonus?.push) victim.vx += direction * clamp(bonus.push, 0, 90) * 5;
        a.confirmed = !armor || victim.stun > 0 || victim.root > 0 || victim.frozen > 0 || !victim.grounded;
        if (existingAction < 0) {
          attacker.comboActionIds.push(actionId);
          attacker.comboActions.push(attack.token || a.token || a.kind || 'special');
        }
        attacker.comboTarget = 1 - owner;
        attacker.combo++;
        attacker.comboDamage += damage;
        attacker.comboTime = 1.15;
        attacker.meter += 10;
        victim.meter += 7;
        this.effect(victim.x, impactY, attack.effect || 'hit', this.color(attacker), String(damage), .38);
        const freeze = this.hitFreeze(attack, false, owner);
        this.event('hit', { player: owner, victim: 1 - owner, damage, combo: attacker.combo, special: !!attack.special, freeze });
        if (matchedCombo) {
          a.comboFinished = true; attacker.comboName = matchedCombo.name;
          attacker.lastComboName = matchedCombo.name; attacker.lastComboDamage = attacker.comboDamage;
          this.effect(victim.x, victim.y + 145, 'spark', this.color(attacker), matchedCombo.name, .7);
          this.event('combo', { player: owner, name: matchedCombo.name, id: matchedCombo.id,
            hits: attacker.combo, damage: attacker.comboDamage });
        }
      }
      if (victim.hp <= 0) {
        victim.pose = 'ko'; victim.attack = null; victim.guard = false; victim.frozen = 0; victim.inputBuffer = null; attacker.inputBuffer = null;
        this.event('ko', { player: 1 - owner, attacker: owner });
        if (this.mode === 'training') victim.revive = 1.25;
      }
      this.updateMotion(victim, 0);
      if(attack.swap&&attack.throw)this.resolveReposition();else this.constrainToViewport();
      return true;
    }

    updateProjectiles(dt) {
      this.projectiles.forEach(q => {
        if (q.cancelled) return;
        if (q.delay > 0) { q.delay -= dt; return; }
        q.life -= dt; q.x += q.vx * dt;
        if(q.arcAmplitude && !q.bounce){
          if(!Number.isFinite(q.arcBaseY)) q.arcBaseY=q.y;
          q.arcTime=(q.arcTime||0)+dt;
          q.y=q.arcBaseY+Math.sin(q.arcTime*(q.arcFrequency||4))*q.arcAmplitude;
        }
        if(q.bounce){
          q.vy = (Number(q.vy)||0)-440*dt; q.y += q.vy*dt;
          const floor=Math.max(3,Math.min(20,q.radius));
          if(q.y<floor){q.y=floor;q.vy=Math.max(145,Math.abs(q.vy)*.82);q.bounces=(q.bounces||0)+1;}
          q.hitHeight=q.y>48?'mid':'low';
        }
        const target = this.players[1 - q.owner];
        const reflector = target.attack;
        if (reflector?.reflect && Math.abs(q.vx)>20 && q.vx*target.facing<0 && (q.x-target.x)*target.facing>=-15 && !q.unreflectable && q.kind!=='beam' && (q.reflections || 0) < 2 && reflector.time >= reflector.startup &&
            reflector.time <= reflector.startup + reflector.active && Math.abs(q.x - target.x) < q.radius + 56 && Math.abs(q.y - (target.y + 60)) < 105) {
          q.owner = 1 - q.owner; q.vx = -q.vx; q.x = target.x + target.facing * (q.radius + 58);
          q.reflections = (q.reflections || 0) + 1; q.color = this.color(target); q.source = target.data.id;
          q.actionId = reflector.actionId; q.token = reflector.token; q.parentAttack = reflector;
          this.event('reflect', { player: q.owner, count: q.reflections });
          return;
        }
        const body=this.hurtbox(target);
        if (q.x+q.radius>=body.left && q.x-q.radius<=body.right && q.y + q.radius >= body.bottom && q.y - q.radius <= body.top && (q.kind !== 'trap' || target.grounded)) {
          if (this.hit(this.players[q.owner], target, q.owner, q)) q.life = 0;
        }
      });
      this.projectiles = this.projectiles.filter(q => !q.cancelled && q.life > 0 && q.x > -80 && q.x < this.worldWidth + 80);
    }

    facePlayers() {
      const [a, b] = this.players;
      if (!a.attack && Math.abs(a.x - b.x) > 1) a.facing = a.x < b.x ? 1 : -1;
      if (!b.attack && Math.abs(a.x - b.x) > 1) b.facing = b.x < a.x ? 1 : -1;
    }

    separatePlayers(previousPositions = this.previousWorldPositions, {preserveOrder=true,mover}={}) {
      const [a, b] = this.players;
      if (this.scaledGeometry) {
        const artA=this.visualBox(a),artB=this.visualBox(b);
        if(artA.bottom>=artB.top||artB.bottom>=artA.top||a.attack?.pass||b.attack?.pass)return;
        const oldDelta=preserveOrder&&previousPositions?previousPositions[1]-previousPositions[0]:0;
        const sign=Math.abs(oldDelta)>1e-7?Math.sign(oldDelta):b.x>=a.x?1:-1;
        // A swept impulse can cross both centres before resolution. Restore
        // facing with the preserved order before measuring asymmetric art.
        if(!a.attack)a.facing=sign;
        if(!b.attack)b.facing=-sign;
        const minimum=this.minimumDistance(a,b,sign),distance=(b.x-a.x)*sign;
        if(distance>=minimum-1e-7)return;
        const before=[a.x,b.x],penetration=minimum-distance,[min,max]=this.arenaBounds();
        const closingA=Math.max(0,(a.x-(previousPositions?.[0]??a.x))*sign);
        const closingB=Math.max(0,-(b.x-(previousPositions?.[1]??b.x))*sign);
        const weight=mover===0?1:mover===1?0:closingA+closingB?closingA/(closingA+closingB):.5;
        a.x=clamp(a.x-sign*penetration*weight,min,max);
        b.x=clamp(b.x+sign*penetration*(1-weight),min,max);
        // Transfer correction lost to a world or viewport wall to the other body.
        let remaining=minimum-(b.x-a.x)*sign;
        if(remaining>1e-7){
          const availableA=sign>0?a.x-min:max-a.x,moveA=Math.min(remaining,availableA);
          a.x-=sign*moveA;remaining-=moveA;
          if(remaining>1e-7)b.x=clamp(b.x+sign*remaining,min,max);
        }
        [a,b].forEach((p,i)=>{
          const into=i===0?p.vx*sign>0:p.vx*sign<0;
          if(!into)return;
          if(p.walkVelocity){p.walkDistance=Math.max(0,p.walkDistance-Math.min(Math.abs(before[i]-p.x),Math.abs(before[i]-(previousPositions?.[i]??before[i]))));}
          p.vx=0;p.walkVelocity=0;
          if(p.pose==='walk'||p.pose==='backwalk')p.pose=p.guard?'guard':'idle';
          this.updateMotion(p,0);
        });
        return;
      }
      if (Math.abs(a.y - b.y) > 85 || a.attack?.pass || b.attack?.pass) return;
      const delta = b.x - a.x, distance = Math.abs(delta);
      if (distance >= 51) return;
      const sign = delta >= 0 ? 1 : -1, push = (51 - distance) / 2;
      const [min, max] = this.arenaBounds();
      a.x = clamp(a.x - sign * push, min, max);
      b.x = clamp(b.x + sign * push, min, max);
      if (Math.abs(b.x - a.x) < 50) {
        if (a.x === min || a.x === max) b.x = clamp(a.x + sign * 51, min, max);
        else a.x = clamp(b.x - sign * 51, min, max);
      }
    }

    endRound() {
      if (this.phase !== 'fight') return;
      const [a, b] = this.players;
      this.winner = a.hp === b.hp ? 'draw' : a.hp > b.hp ? 0 : 1;
      if (this.winner !== 'draw') this.players[this.winner].rounds++;
      this.players.forEach(p => {
        p.attack = null; p.guard = false; p.vx = 0; p.inputBuffer = null;
        p.dashTime = 0; p.dashQueued = 0; this.updateMotion(p, 0);
      });
      this.projectiles.length = 0;
      this.phaseTime = 0;
      const wonMatch = this.players.some(p => p.rounds >= 2);
      const finalKO = wonMatch && this.winner !== 'draw' && this.timer > 0 && this.players[1 - this.winner].hp <= 0;
      if (finalKO && this.options.finishers === true && this.mode !== 'training') {
        this.finisherWinner = this.winner;
        this.finisherLoser = 1 - this.winner;
        this.finisher = this.catalog(this.players[this.winner].data.id)?.finisher ||
          { name: 'Última Brasa', line: 'A lenda permanece.', kind: 'spark' };
        this.freeze = 0;
        this.players.forEach((p, i) => {
          p.stun = 0; p.root = 0; p.frozen = 0; p.armor = 0; p.invulnerable = 0;
          p.y = 0; p.vy = 0; p.grounded = true; p.pose = i === this.winner ? 'idle' : 'dazed';
        });
        this.phase = 'finishWindow';
        this.event('finishWindow', { winner: this.winner, loser: this.finisherLoser, round: this.round, duration: this.finishWindowDuration, finisher: this.finisher });
      } else if (wonMatch) this.completeMatch(false);
      else {
        this.phase = 'roundOver';
        this.event('round', { winner: this.winner, round: this.round, finished: true });
      }
    }

    beginFinisher() {
      if (this.phase !== 'finishWindow') return false;
      this.phase = 'finisher'; this.phaseTime = 0; this.finisherTime = 0;
      const winner = this.players[this.finisherWinner], loser = this.players[this.finisherLoser];
      winner.pose = 'special'; loser.pose = 'hurt';
      this.players.forEach(p => { p.attack = null; p.inputBuffer = null; p.vx = 0; });
      this.effect(loser.x, loser.y + 70, this.finisher.kind || 'spark', this.color(winner), '', this.finisherDuration);
      this.event('finisher', { winner: this.finisherWinner, loser: this.finisherLoser,
        round: this.round, duration: this.finisherDuration, finisher: this.finisher,
        name: this.finisher.name, kind: this.finisher.kind, line: this.finisher.line });
      return true;
    }

    completeMatch(finalized) {
      if (this.matchEventSent) return;
      this.matchEventSent = true; this.phase = 'matchOver'; this.phaseTime = 0;
      this.players.forEach((p, i) => { p.attack = null; p.inputBuffer = null; p.pose = i === this.winner ? 'victory' : 'ko'; });
      this.event('match', { winner: this.winner, round: this.round, finished: true, finalized: !!finalized });
    }

    cpuInput(dt) {
      const ai = this.ai;
      if (!ai) return this.inputs(null);
      ai.next -= dt; ai.pulse -= dt;
      if (ai.pulse <= 0) ['light', 'heavy', 'kick', 'special', 'grab', 'up'].forEach(key => { ai.input[key] = false; });
      const p = this.players[1], enemy = this.players[0];
      if (this.catalog(p.data.id) && p.attack?.confirmed && !p.attack.special && p.comboActions.length < 3 && this.phase === 'fight') {
        if (ai.reactionAction !== p.attack.actionId) {
          ai.reactionAction = p.attack.actionId;
          ai.comboSent = false;
          ai.reactionAt = this.clock + .045 + this.rng() * .05;
        }
        if (this.clock >= ai.reactionAt && !ai.comboSent) {
          const candidates = this.catalog(p.data.id).combos.filter(combo => p.comboActions.every((token, index) => combo.sequence[index] === token));
          const sequence = candidates[Math.floor(this.rng() * candidates.length)]?.sequence;
          const next = sequence?.[p.comboActions.length] || (p.attack.token === 'light' ? 'kick' : 'special0');
          ai.input = {};
          if (next.startsWith('special')) {
            const variant = Number(next.slice(7)) || 0;
            if (p.specialCooldowns[variant] <= 0 && p.specialCooldown <= 0) {
              ai.input.special = true;
              if (variant === 1) ai.input.down = true;
              if (variant === 2) ai.input[p.facing > 0 ? 'right' : 'left'] = true;
            }
          } else ai.input[next] = true;
          ai.comboSent = true; ai.pulse = .045; ai.next = .11;
          return this.inputs(ai.input);
        }
      }
      if (ai.reactionAction !== p.attack?.actionId) ai.comboSent = false;
      if (ai.next > 0 || this.phase !== 'fight') return this.inputs(ai.input);
      const dx = enemy.x - p.x, rawDistance = Math.abs(dx);
      const distance = this.scaledGeometry ? Math.max(0,(rawDistance-this.minimumDistance(p,enemy,dx>=0?1:-1))/this.fighterScale+51) : rawDistance;
      const level = this.difficulty === 'hard' ? 1 : this.difficulty === 'easy' ? .4 : .7;
      ai.next = .12 + this.rng() * .16;
      ai.input = {};
      const threat = enemy.attack && distance < 175 || this.projectiles.some(q => q.owner === 0 && Math.abs(q.x - p.x) < 180);
      if (threat && this.rng() < level * .72) {
        ai.input.block = true;
        if (distance < 118 && p.meter >= 20 && p.defenseCooldown <= 0 && this.rng() < level * .35) ai.input.light = true;
      }
      else if (distance > 92) ai.input[dx > 0 ? 'right' : 'left'] = true;
      else if (distance < 61 && this.rng() < .2) ai.input[dx > 0 ? 'left' : 'right'] = true;
      if (!ai.input.block && !p.attack && p.stun <= 0) {
        const roll = this.rng();
        if (p.meter >= 100 && distance < 290 && roll < .3 * level) { ai.input.heavy = true; ai.input.special = true; }
        else if (p.specialCooldown <= 0 && distance < 420 && roll < .20 * level) {
          const available = [0, 1, 2].filter(variant => p.specialCooldowns[variant] <= 0);
          if (available.length) {
            const variant = available[Math.floor(this.rng() * available.length)];
            ai.input.special = true; ai.input.left = false; ai.input.right = false;
            if (variant === 1) ai.input.down = true;
            if (variant === 2) ai.input[p.facing > 0 ? 'right' : 'left'] = true;
          }
        }
        else if (distance < 126 && roll < .83) ai.input[distance < 68 && roll < .16 ? 'grab' : roll < .40 ? 'light' : roll < .61 ? 'kick' : 'heavy'] = true;
        else if (distance > 140 && roll > .91) ai.input.up = true;
      }
      ai.pulse = .065;
      return this.inputs(ai.input);
    }

    snapshot() {
      return { phase: this.phase, round: this.round, timer: this.timer, winner: this.winner, worldWidth: this.worldWidth,
        introDuration: this.introDuration, finisherWinner: this.finisherWinner, finisherLoser: this.finisherLoser,
        finisherTime: this.finisherTime, finisher: this.finisher,
        superOwner: this.superOwner, superTarget: this.superTarget, superTime: this.superTime, superDefinition: this.superDefinition,
        players: this.players.map(({ data, attack, ...state }) => ({ ...state, id: data.id, attack: attack?.kind || null })),
        projectiles: this.projectiles.length };
    }
  }
  global.BrasaCombat = BrasaCombat;
})(typeof window !== 'undefined' ? window : globalThis);
