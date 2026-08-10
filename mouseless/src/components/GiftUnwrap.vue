<template>
  <div
    class="gw"
    :class="{ 'gw--playing': playing, 'gw--done': done }"
    @click="onClick"
  >
    <p v-if="!playing" class="gw__hint">Klicken zum Öffnen</p>

    <video
      ref="video"
      class="gw__video"
      playsinline
      preload="auto"
      @ended="onEnded"
      @error="onError"
    >
      <source src="/gift.mp4" type="video/mp4" />
    </video>

    <div ref="flash" class="gw__flash"></div>
  </div>
</template>

<script>
const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)'

export default {
  name: 'GiftUnwrap',

  props: {
    rewardTitle: { type: String, default: 'Jetzt öffnen.' },
    rewardSubtitle: { type: String, default: '' },
    continueLabel: { type: String, default: 'Fortfahren' },
  },

  data() {
    return {
      playing: false,
      done: false,
    }
  },

  methods: {
    onClick() {
      if (this.playing || this.done) return

      const video = this.$refs.video

      this.playing = true
      this.$el.classList.add('gw--playing')

      try {
        const p = video.play()
        if (p && p.catch) p.catch(() => this.finish())
      } catch (e) {
        this.finish()
      }
    },

    onEnded() {
      this.finish()
    },

    onError() {
      this.finish()
    },

    finish() {
      if (this.done) return

      this.done = true
      const flash = this.$refs.flash
      const root = this.$el

      const a = flash.animate([
        { opacity: 0 },
        { opacity: 1, offset: 0.2 },
        { opacity: 1, offset: 0.5 },
      ], { duration: 420, easing: 'linear', fill: 'forwards' })

      a.onfinish = () => {
        const b = root.animate([
          { opacity: 1 },
          { opacity: 0 },
        ], { duration: 650, easing: EASE_OUT, fill: 'forwards' })

        b.onfinish = () => { this.$emit('complete') }
      }
    },
  },
}
</script>

<style lang="scss">
$ease-out: cubic-bezier(0.23, 1, 0.32, 1);

.gw {
  position: fixed;
  inset: 0;
  z-index: 2147483000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  cursor: pointer;
  overflow: hidden;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;

  .gw__video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gw__hint {
    position: absolute;
    bottom: 9vh;
    padding: 10px 22px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.45);
    color: rgba(255, 255, 255, 0.95);
    letter-spacing: 0.28em;
    text-transform: uppercase;
    font-size: 12px;
    animation: gw-hint 2.4s ease-in-out infinite;
  }

  &.gw--playing .gw__hint {
    opacity: 0;
    animation: none;
  }

  .gw__flash {
    position: absolute;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    background: radial-gradient(circle at 50% 45%, #fff 0%, #f4f0ff 45%, #e8e0ff 100%);
  }
}

@keyframes gw-hint {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}
</style>
