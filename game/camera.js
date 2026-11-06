/* BRASA — world camera. Coordinates stay in the 960 x 540 virtual canvas. */
(function (global) {
  'use strict';
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const FIGHTER_MARGIN = 55;

  class BrasaCamera {
    constructor({ width = 960, height = 540, worldWidth = 2880, groundY = 464, fighterMargin = FIGHTER_MARGIN } = {}) {
      this.width = Math.max(1, Number(width) || 960);
      this.height = Math.max(1, Number(height) || 540);
      this.worldWidth = Math.max(this.width, Number(worldWidth) || 2880);
      this.groundY = Number.isFinite(groundY) ? groundY : 464;
      this.baseFighterMargin = Math.max(1, Number(fighterMargin) || FIGHTER_MARGIN);
      this.fighterMargin = this.baseFighterMargin;
      this.reset();
    }

    get visibleWidth() { return this.width / this.zoom; }

    reset(players = []) {
      this.zoom = 1;
      this.x = (this.worldWidth - this.width) / 2;
      this.shakeX = 0; this.shakeY = 0;
      this.measurePlayers(players);
      const positions = players.map(p => Number(p.x)).filter(Number.isFinite);
      if (positions.length) {
        this.x = (Math.min(...positions) + Math.max(...positions) - this.visibleWidth) / 2;
        this.contain();
      }
      return this.snapshot();
    }

    measurePlayers(players) {
      this.fighterMargin = Math.max(this.baseFighterMargin,
        ...players.map(p => Number(p.visualHalfWidth) > 0 ? Math.ceil(p.visualHalfWidth) + 3 : 0));
    }

    contain() {
      this.x = clamp(this.x, 0, Math.max(0, this.worldWidth - this.visibleWidth));
    }

    update(dt, players = []) {
      dt = Math.max(0, Number(dt) || 0);
      this.zoom = 1;
      this.measurePlayers(players);
      const positions = players.map(p => Number(p.x)).filter(Number.isFinite);
      if (positions.length && dt) {
        const left = Math.min(...positions), right = Math.max(...positions);
        const alpha = 1 - Math.pow(.9, dt * 60);
        const center = this.x + this.visibleWidth / 2;
        const nextCenter = center + ((left + right) / 2 - center) * alpha;
        this.x = nextCenter - this.visibleWidth / 2;
      }
      // Combat owns player containment. The camera itself only follows the
      // midpoint and clamps to the world; actor-edge correction caused snaps.
      this.contain();
      this.shakeX = 0; this.shakeY = 0;
      return this.snapshot();
    }

    // Existing impact callers may keep this API; the structure camera is still.
    shake() { this.shakeX = 0; this.shakeY = 0; }

    screenX(worldX) { return (worldX - this.x) * this.zoom; }
    screenY(worldY) { return this.groundY + (worldY - this.groundY) * this.zoom; }

    apply(ctx, { view = null } = {}) {
      const x = Number.isFinite(view?.x) ? view.x : this.x;
      const zoom = Number.isFinite(view?.zoom) ? view.zoom : this.zoom;
      const ground = Number.isFinite(view?.groundY) ? view.groundY : this.groundY;
      ctx.translate(0, ground);
      ctx.scale(zoom, zoom);
      ctx.translate(-x, -ground);
    }

    snapshot() {
      return { x: this.x, zoom: this.zoom, width: this.width, height: this.height,
        worldWidth: this.worldWidth, visibleWidth: this.visibleWidth, groundY: this.groundY,
        fighterMargin: this.fighterMargin, shakeX: this.shakeX, shakeY: this.shakeY };
    }
  }
  global.BrasaCamera = BrasaCamera;
})(typeof window !== 'undefined' ? window : globalThis);
