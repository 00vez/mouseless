<template>
  <div
    class="gw"
    :class="[`s${Math.min(this.step, 7)}`, { 'gw--reward': rewardShown, 'gw--reveal': revealing }]"
    @click="onClick"
  >
    <div class="gw__rays"></div>
    <div class="gw__rays gw__rays--fast"></div>
    <div class="gw__glow"></div>
    <div class="gw__light"></div>

    <div class="gw__scene">
      <div ref="cam" class="gw__cam">
        <div ref="shake" class="gw__shake">
          <div ref="box" class="gw__box">
            <div class="gw__face gw__face--front"></div>
            <div class="gw__face gw__face--back"></div>
            <div class="gw__face gw__face--right"></div>
            <div class="gw__face gw__face--left"></div>
            <div class="gw__face gw__face--top"></div>
            <div class="gw__face gw__face--bottom"></div>
            <div ref="bandFront" class="gw__band gw__band--front"></div>
            <div ref="bandBack" class="gw__band gw__band--back"></div>
          </div>

          <div ref="lid" class="gw__lid">
            <div class="gw__lid-top">
              <div ref="lidBand" class="gw__lid-band"></div>
              <div class="gw__bow">
                <div ref="bowL" class="gw__bow-loop gw__bow--l"></div>
                <div ref="bowR" class="gw__bow-loop gw__bow--r"></div>
                <div ref="knot" class="gw__knot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="gw__hint">Klicken zum Öffnen</p>

    <div ref="rings" class="gw__rings"></div>

    <div class="gw__reward">
      <div class="gw__reward-title">{{ rewardTitle }}</div>
      <div class="gw__reward-sub">{{ rewardSubtitle }}</div>
      <div class="gw__reward-continue">{{ continueLabel }}</div>
    </div>

    <canvas ref="canvas" class="gw__canvas"></canvas>
    <div ref="flash" class="gw__flash"></div>
  </div>
</template>

<script>
const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)'
const EASE_IN_OUT = 'cubic-bezier(0.77, 0, 0.175, 1)'
const LID_BASE = 'translate(-50%,-50%) rotateX(-16deg) rotateY(-28deg)'

export default {
  name: 'GiftUnwrap',

  props: {
    rewardTitle: { type: String, default: 'GESCHAFFT!' },
    rewardSubtitle: { type: String, default: 'Dein Abenteuer beginnt jetzt.' },
    continueLabel: { type: String, default: 'Klicken zum Fortfahren' },
  },

  data() {
    return {
      step: 0,
      busy: false,
      rewardShown: false,
      revealing: false,
      particles: [],
      rafId: 0,
      canvas: null,
      ctx: null,
    }
  },

  mounted() {
    this.startCanvas()
  },

  beforeDestroy() {
    cancelAnimationFrame(this.rafId)
    window.removeEventListener('resize', this.resizeCanvas)
  },

  methods: {
    onClick() {
      if (this.busy || this.revealing) return

      if (this.step < 7) {
        this.busy = true
        this.step += 1
        this.runStage(this.step).then(() => { this.busy = false })
      } else if (this.rewardShown) {
        this.reveal()
      }
    },

    runStage(n) {
      const s = this.stageSets[n]
      const center = this.boxCenter()
      const jobs = [this.hit()]

      if (n === 1) jobs.push(this.stage1())
      if (n === 2) jobs.push(this.stage2())
      if (n === 3) jobs.push(this.stage3())
      if (n === 4) jobs.push(this.stage4())
      if (n === 5) jobs.push(this.stage5())
      if (n === 6) jobs.push(this.stage6())
      if (n === 7) jobs.push(this.stage7())

      this.burst(center.x, center.y, s.count, s.colors, s.power)
      if (s.waves) this.shockwave(s.waves)

      return Promise.all(jobs).then(() => this.wait(60))
    },

    stage1() {
      return this.anim(this.$refs.bowL, [
        { transform: 'rotate(-26deg)', opacity: 1 },
        { transform: 'rotate(-29deg) translateY(6px)', opacity: 1 },
        { transform: 'rotate(-25deg)', opacity: 1 },
        { transform: 'rotate(-26deg)', opacity: 1 },
      ], { duration: 220, easing: EASE_OUT })
    },

    stage2() {
      return this.anim(this.$refs.knot, [
        { transform: 'translate(0,0) translateZ(0) rotate(0)', opacity: 1 },
        { transform: 'translateY(-46px) translateZ(26px) rotate(38deg)', opacity: 0 },
      ], { duration: 430, easing: EASE_IN_OUT, fill: 'forwards' })
    },

    stage3() {
      return this.anim(this.$refs.bowL, [
        { transform: 'rotate(-26deg) translate(0,0)', opacity: 1 },
        { transform: 'rotate(-165deg) translate(-310px,-270px)', opacity: 0 },
      ], { duration: 470, easing: EASE_IN_OUT, fill: 'forwards' })
    },

    stage4() {
      return this.anim(this.$refs.bowR, [
        { transform: 'rotate(26deg) translate(0,0)', opacity: 1 },
        { transform: 'rotate(165deg) translate(310px,-270px)', opacity: 0 },
      ], { duration: 470, easing: EASE_IN_OUT, fill: 'forwards' })
    },

    stage5() {
      const front = this.anim(this.$refs.bandFront, [
        { transform: 'translateY(0) scaleY(1)', opacity: 1 },
        { transform: 'translateY(160px) scaleY(1.7) rotateX(-14deg)', opacity: 0 },
      ], { duration: 540, easing: EASE_IN_OUT, fill: 'forwards' })
      const back = this.anim(this.$refs.bandBack, [
        { opacity: 1 },
        { opacity: 0 },
      ], { duration: 400, easing: EASE_OUT, fill: 'forwards' })
      const top = this.anim(this.$refs.lidBand, [
        { opacity: 1 },
        { opacity: 0 },
      ], { duration: 420, easing: EASE_OUT, fill: 'forwards' })
      return Promise.all([front, back, top])
    },

    stage6() {
      const lid = this.anim(this.$refs.lid, [
        { transform: LID_BASE, opacity: 1 },
        { transform: `${LID_BASE} translateZ(80px) translateY(-250px) rotateX(-74deg) rotateY(28deg)`, opacity: 0 },
      ], { duration: 660, easing: EASE_IN_OUT, fill: 'forwards' })
      const light = this.anim(this.$refs.light, [
        { transform: 'translate(-50%,-50%) scaleY(0.5)', opacity: 0 },
        { transform: 'translate(-50%,-50%) scaleY(1)', opacity: 0.9 },
        { transform: 'translate(-50%,-62%) scaleY(1.15)', opacity: 0.9 },
        { transform: 'translate(-50%,-74%) scaleY(1.35)', opacity: 0 },
      ], { duration: 860, easing: EASE_IN_OUT, fill: 'forwards' })
      const cam = this.anim(this.$refs.cam, [
        { transform: 'translateZ(0)' },
        { transform: 'translateZ(44px)' },
        { transform: 'translateZ(0)' },
      ], { duration: 640, easing: EASE_IN_OUT })
      return Promise.all([lid, light, cam])
    },

    stage7() {
      const light = this.anim(this.$refs.light, [
        { transform: 'translate(-50%,-50%) scaleY(0.9)', opacity: 0.55 },
        { transform: 'translate(-50%,-56%) scaleY(1.25)', opacity: 0.85 },
        { transform: 'translate(-50%,-64%) scaleY(1.4)', opacity: 0 },
      ], { duration: 940, easing: EASE_IN_OUT, fill: 'forwards' })
      setTimeout(() => { this.rewardShown = true }, 560)
      return Promise.all([light]).then(() => this.wait(420))
    },

    hit() {
      const el = this.$refs.shake
      return this.anim(el, [
        { transform: 'translateZ(0) rotateX(0) rotateY(0)' },
        { transform: 'translateZ(-22px) rotateX(1.6deg) rotateY(-2.4deg)' },
        { transform: 'translateZ(0) rotateX(0) rotateY(0)' },
      ], { duration: 210, easing: EASE_OUT })
    },

    reveal() {
      this.revealing = true
      this.busy = true
      const flash = this.$refs.flash
      const a = flash.animate([
        { opacity: 0 },
        { opacity: 1, offset: 0.15 },
        { opacity: 1, offset: 0.45 },
        { opacity: 0, offset: 1 },
      ], { duration: 720, easing: 'linear' })
      a.onfinish = () => { this.$emit('complete') }
    },

    burst(x, y, count, colors, power) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = (0.3 + Math.random() * 0.7) * power
        this.particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.6,
          gravity: 0.12,
          drag: 0.985,
          size: 1.5 + Math.random() * 3,
          color: colors[i % colors.length],
          life: 1,
          decay: 0.012 + Math.random() * 0.02,
        })
      }
    },

    shockwave(n) {
      const c = this.boxCenter()
      const rings = this.$refs.rings
      for (let i = 0; i < n; i++) {
        const ring = document.createElement('div')
        ring.className = 'gw__ring'
        ring.style.left = `${c.x}px`
        ring.style.top = `${c.y}px`
        rings.appendChild(ring)
        setTimeout(() => {
          ring.animate([
            { transform: 'translate(-50%,-50%) scale(0.25)', opacity: 0.85 },
            { transform: 'translate(-50%,-50%) scale(1.6)', opacity: 0 },
          ], { duration: 640, easing: EASE_IN_OUT }).onfinish = () => ring.remove()
        }, i * 110)
      }
    },

    startCanvas() {
      this.canvas = this.$refs.canvas
      this.ctx = this.canvas.getContext('2d')
      this.resizeCanvas()
      window.addEventListener('resize', this.resizeCanvas)
      this.rafId = requestAnimationFrame(this.tick)
    },

    resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      this.canvas.width = Math.round(window.innerWidth * dpr)
      this.canvas.height = Math.round(window.innerHeight * dpr)
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      this.canvas.style.width = `${window.innerWidth}px`
      this.canvas.style.height = `${window.innerHeight}px`
    },

    tick() {
      this.rafId = requestAnimationFrame(this.tick)
      const ctx = this.ctx
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.globalCompositeOperation = 'lighter'
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += p.gravity
        p.vx *= p.drag
        p.life -= p.decay
        if (p.life <= 0) { this.particles.splice(i, 1); continue }
        ctx.globalAlpha = Math.max(0, p.life)
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * (0.4 + p.life * 0.6), 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'
    },

    boxCenter() {
      const el = this.$refs.box
      if (!el) return { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      const r = el.getBoundingClientRect()
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 }
    },

    anim(el, keyframes, options) {
      const a = el.animate(keyframes, options)
      return new Promise((resolve) => {
        a.onfinish = resolve
        a.oncancel = resolve
      })
    },

    wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
  },

  computed: {
    stageSets() {
      return {
        1: { count: 18, power: 2.2, colors: ['#ff2e97', '#7b2ff7'], waves: 0 },
        2: { count: 30, power: 3.0, colors: ['#ff2e97', '#7b2ff7', '#c44dff'], waves: 1 },
        3: { count: 42, power: 3.6, colors: ['#ff2e97', '#c44dff', '#7b2ff7'], waves: 1 },
        4: { count: 56, power: 4.2, colors: ['#ff2e97', '#c44dff', '#ff8c00'], waves: 1 },
        5: { count: 70, power: 4.8, colors: ['#ff8c00', '#ffd700', '#ff2e97'], waves: 2 },
        6: { count: 92, power: 5.4, colors: ['#ffd700', '#ff2e97', '#c44dff', '#7b2ff7'], waves: 2 },
        7: { count: 130, power: 6.4, colors: ['#ffd700', '#ff8c00', '#ff2e97', '#c44dff'], waves: 3 },
      }
    },
  },
}
</script>

<style lang="scss">
$ease-out: cubic-bezier(0.23, 1, 0.32, 1);
$ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
$lid-base: translate(-50%, -50%) rotateX(-16deg) rotateY(-28deg);

.gw {
  position: fixed;
  inset: 0;
  z-index: 2147483000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at 50% 42%, #0d0614 0%, #07030c 55%, #050208 100%);
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;

  .gw__rays {
    position: absolute;
    inset: -30%;
    background: conic-gradient(
      from 0deg,
      rgba(123, 47, 247, 0.28) 0deg, transparent 30deg,
      rgba(255, 46, 151, 0.2) 60deg, transparent 90deg,
      rgba(123, 47, 247, 0.28) 120deg, transparent 150deg,
      rgba(255, 46, 151, 0.2) 180deg, transparent 210deg,
      rgba(123, 47, 247, 0.28) 240deg, transparent 270deg,
      rgba(255, 46, 151, 0.2) 300deg, transparent 330deg
    );
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000 0%, rgba(0, 0, 0, 0.8) 30%, transparent 65%);
    mask-image: radial-gradient(circle at 50% 50%, #000 0%, rgba(0, 0, 0, 0.8) 30%, transparent 65%);
    opacity: 0.4;
    animation: gw-rays 60s linear infinite;
    transition: opacity 0.8s $ease-out;
    pointer-events: none;
  }

  .gw__rays--fast {
    background: conic-gradient(
      from 90deg,
      rgba(255, 46, 151, 0.3) 0deg, transparent 40deg,
      rgba(255, 215, 0, 0.22) 120deg, transparent 160deg,
      rgba(255, 46, 151, 0.3) 240deg, transparent 280deg
    );
    opacity: 0;
    animation-duration: 14s;
  }

  &.s2 .gw__rays { opacity: 0.55; }
  &.s4 .gw__rays { opacity: 0.75; }
  &.s6 .gw__rays,
  &.s7 .gw__rays { opacity: 0.95; }
  &.s6 .gw__rays--fast,
  &.s7 .gw__rays--fast { opacity: 0.65; }

  .gw__glow {
    position: absolute;
    left: 50%;
    top: 45%;
    width: 440px;
    height: 440px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 46, 151, 0.32) 0%, rgba(123, 47, 247, 0.22) 40%, rgba(123, 47, 247, 0) 70%);
    opacity: 0;
    transition: opacity 0.8s $ease-out;
    pointer-events: none;
  }

  &.s5 .gw__glow,
  &.s6 .gw__glow,
  &.s7 .gw__glow { opacity: 1; }

  .gw__light {
    position: absolute;
    left: 50%;
    top: 42%;
    width: 130px;
    height: 280px;
    transform: translate(-50%, -50%) scaleY(0.5);
    opacity: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 215, 0, 0) 0%,
      rgba(255, 215, 0, 0.8) 30%,
      rgba(255, 46, 151, 0.7) 65%,
      rgba(123, 47, 247, 0.1) 100%
    );
    filter: blur(5px);
    pointer-events: none;
  }

  .gw__scene {
    position: relative;
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }

  .gw__cam,
  .gw__shake {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
  }

  .gw__box {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 250px;
    height: 250px;
    transform: $lid-base;
    transform-style: preserve-3d;
  }

  &.s2 .gw__face { box-shadow: inset 0 0 26px rgba(123, 47, 247, 0.45); }
  &.s5 .gw__face,
  &.s6 .gw__face,
  &.s7 .gw__face {
    box-shadow: inset 0 0 30px rgba(255, 46, 151, 0.42);
  }

  .gw__face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border: 1px solid rgba(255, 46, 151, 0.08);
  }

  .gw__face--front {
    transform: translateZ(125px);
    background: linear-gradient(160deg, #241633, #140c20 55%, #0d0716);
    box-shadow: inset 0 0 22px rgba(123, 47, 247, 0.35);
  }

  .gw__face--back {
    transform: rotateY(180deg) translateZ(125px);
    background: linear-gradient(200deg, #1d1230, #0d0716);
  }

  .gw__face--right {
    transform: rotateY(90deg) translateZ(125px);
    background: linear-gradient(200deg, #2a1a40, #150d24);
    box-shadow: inset 0 0 22px rgba(255, 46, 151, 0.28);
  }

  .gw__face--left {
    transform: rotateY(-90deg) translateZ(125px);
    background: linear-gradient(160deg, #1a0f2a, #0e0818);
  }

  .gw__face--top {
    transform: rotateX(90deg) translateZ(125px);
    background: radial-gradient(circle at 50% 60%, #1a0f2a 0%, #0a0510 70%);
    box-shadow: inset 0 0 30px rgba(123, 47, 247, 0.5);
  }

  .gw__face--bottom {
    transform: rotateX(-90deg) translateZ(125px);
    background: #08040d;
  }

  .gw__band {
    position: absolute;
    left: 105px;
    top: 0;
    width: 40px;
    height: 250px;
    background: linear-gradient(180deg, #2b1c40, #170e28);
    box-shadow: 0 0 16px rgba(123, 47, 247, 0.4);
  }

  .gw__band--front {
    transform: translateZ(126px);
  }

  .gw__band--back {
    transform: rotateY(180deg) translateZ(126px);
    background: #140b22;
    box-shadow: none;
  }

  .gw__lid {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 250px;
    height: 250px;
    transform: $lid-base;
    transform-style: preserve-3d;
  }

  .gw__lid-top {
    position: absolute;
    inset: -12px;
    transform: rotateX(90deg) translateZ(126px);
    transform-style: preserve-3d;
    background: linear-gradient(140deg, #2b1c40, #160d26);
    box-shadow: 0 0 26px rgba(255, 46, 151, 0.28), inset 0 0 18px rgba(123, 47, 247, 0.35);
  }

  .gw__lid-band {
    position: absolute;
    left: 117px;
    top: 0;
    width: 40px;
    height: 274px;
    background: linear-gradient(180deg, #311f4a, #1a1030);
    box-shadow: 0 0 16px rgba(255, 46, 151, 0.45);
  }

  .gw__bow {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 0;
  }

  .gw__bow-loop {
    position: absolute;
    width: 86px;
    height: 58px;
    border-radius: 50%;
    background:
      radial-gradient(ellipse at 30% 30%, rgba(255, 46, 151, 0.55), rgba(60, 20, 90, 0) 60%),
      linear-gradient(135deg, #3a1f52, #120a1e);
    border: 1px solid rgba(255, 46, 151, 0.35);
    box-shadow: 0 0 14px rgba(255, 46, 151, 0.25);
  }

  .gw__bow--l {
    left: -82px;
    top: -52px;
    transform: rotate(-26deg);
    transform-origin: 100% 100%;
  }

  .gw__bow--r {
    left: -4px;
    top: -52px;
    transform: rotate(26deg);
    transform-origin: 0% 100%;
  }

  .gw__knot {
    position: absolute;
    left: -13px;
    top: -13px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #ff2e97, #7b2ff7 70%);
    box-shadow: 0 0 12px rgba(255, 46, 151, 0.5);
  }

  .gw__hint {
    position: absolute;
    left: 50%;
    bottom: 9vh;
    transform: translateX(-50%);
    color: #a98ed9;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    font-size: 11px;
    opacity: 0.85;
    animation: gw-hint 2.4s ease-in-out infinite;
  }

  &.s1 .gw__hint {
    opacity: 0;
    animation: none;
  }

  .gw__rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .gw__ring {
    position: fixed;
    width: 150px;
    height: 150px;
    transform: translate(-50%, -50%) scale(0.25);
    opacity: 0.85;
    border-radius: 50%;
    border: 2px solid rgba(255, 46, 151, 0.8);
    box-shadow: 0 0 24px rgba(255, 46, 151, 0.5), inset 0 0 18px rgba(255, 215, 0, 0.3);
    pointer-events: none;
  }

  .gw__reward {
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%) translateY(16px);
    opacity: 0;
    text-align: center;
    pointer-events: none;
    transition: transform 0.65s $ease-out, opacity 0.65s $ease-out;
  }

  &.gw--reward .gw__reward {
    transform: translate(-50%, -50%) translateY(0);
    opacity: 1;
  }

  .gw__reward-title {
    font-size: 34px;
    font-weight: 800;
    letter-spacing: 0.14em;
    background: linear-gradient(120deg, #ffd700, #ff8c00 55%, #ff2e97);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .gw__reward-sub {
    margin-top: 8px;
    font-size: 15px;
    color: #c7b3ea;
    letter-spacing: 0.06em;
  }

  .gw__reward-continue {
    margin-top: 22px;
    display: inline-block;
    font-size: 11px;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #ffd700;
    border: 1px solid rgba(255, 215, 0, 0.45);
    border-radius: 999px;
    padding: 9px 22px;
    animation: gw-hint 2.2s ease-in-out infinite;
  }

  .gw__canvas {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .gw__flash {
    position: absolute;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    background: radial-gradient(circle at 50% 45%, #fffdf5 0%, #ffd700 45%, #ff8c00 100%);
  }
}

@keyframes gw-rays {
  to { transform: rotate(360deg); }
}

@keyframes gw-hint {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}
</style>


