<style lang="scss" scoped>
$box: 240px;
$half: 120px;
$bandw: 58px;
$bandh: $box;
$lidh: 34px;

.gw {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 2147483000;
  cursor: pointer;
  background: linear-gradient(160deg, #0d0614 0%, #050208 55%, #07020c 100%);

  .gw__bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 42%, rgba(123, 47, 247, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }

  .gw__rays {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    pointer-events: none;

    &--b {
      background: repeating-conic-gradient(from 0deg, rgba(123, 47, 247, 0.14) 0deg 4deg, rgba(255, 46, 151, 0.05) 4deg 9deg, transparent 9deg 20deg)
      mask-image: radial-gradient(closest-side, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.35) 20%, rgba(0, 0, 0, 1) 62%)
      animation: gw-spin 90s linear infinite

      .gw--s1 & { background: repeating-conic-gradient(from 0deg, rgba(123, 47, 247, 0.28) 0deg 4deg, rgba(255, 46, 151, 0.1) 4deg 9deg, transparent 9deg 20deg) }
      .gw--s2 & { background: repeating-conic-gradient(from 0deg, rgba(123, 47, 247, 0.35) 0deg 3deg, rgba(255, 46, 151, 0.12) 3deg 6deg, transparent 6deg 16deg) }
      .gw--s3 & { background: repeating-conic-gradient(from 0deg, rgba(123, 47, 247, 0.42) 0deg 3deg, rgba(255, 46, 151, 0.14) 3deg 6deg, transparent 6deg 16deg) }
      .gw--s4 & { background: repeating-conic-gradient(from 0deg, rgba(123, 47, 247, 0.5) 0deg 3deg, rgba(255, 46, 151, 0.16) 3deg 6deg, transparent 6deg 16deg) }
      .gw--s5 & { background: repeating-conic-gradient(from 0deg, rgba(123, 47, 247, 0.6) 0deg 3deg, rgba(255, 46, 151, 0.2) 3deg 6deg, transparent 6deg 16deg) }
      .gw--s6 & { background: repeating-conic-gradient(from 0deg, rgba(123, 47, 247, 0.7) 0deg 3deg, rgba(255, 46, 151, 0.22) 3deg 6deg, transparent 6deg 16deg); animation-duration: 70s }
      .gw--s7 & { background: repeating-conic-gradient(from 0deg, rgba(123, 47, 247, 0.8) 0deg 3deg, rgba(255, 46, 151, 0.25) 3deg 6deg, transparent 6deg 16deg); animation-duration: 55s }
    }

    &--f {
      background: repeating-conic-gradient(from 12deg, rgba(255, 46, 151, 0.16) 0deg 3deg, rgba(123, 47, 247, 0.08) 3deg 8deg, transparent 8deg 16deg)
      mask-image: radial-gradient(closest-side, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.35) 20%, rgba(0, 0, 0, 1) 62%)
      animation: gw-spin 46s linear infinite reverse

      .gw--s1 & { background: repeating-conic-gradient(from 12deg, rgba(255, 46, 151, 0.28) 0deg 3deg, rgba(123, 47, 247, 0.12) 3deg 8deg, transparent 8deg 16deg) }
      .gw--s2 & { background: repeating-conic-gradient(from 12deg, rgba(255, 46, 151, 0.35) 0deg 3deg, rgba(123, 47, 247, 0.14) 3deg 8deg, transparent 8deg 16deg) }
      .gw--s3 & { background: repeating-conic-gradient(from 12deg, rgba(255, 46, 151, 0.42) 0deg 3deg, rgba(123, 47, 247, 0.16) 3deg 8deg, transparent 8deg 16deg) }
      .gw--s4 & { background: repeating-conic-gradient(from 12deg, rgba(255, 46, 151, 0.5) 0deg 3deg, rgba(123, 47, 247, 0.18) 3deg 8deg, transparent 8deg 16deg) }
      .gw--s5 & { background: repeating-conic-gradient(from 12deg, rgba(255, 46, 151, 0.6) 0deg 3deg, rgba(123, 47, 247, 0.2) 3deg 8deg, transparent 8deg 16deg) }
      .gw--s6 & { background: repeating-conic-gradient(from 12deg, rgba(255, 46, 151, 0.7) 0deg 3deg, rgba(123, 47, 247, 0.22) 3deg 8deg, transparent 8deg 16deg); animation-duration: 30s }
      .gw--s7 & { background: repeating-conic-gradient(from 12deg, rgba(255, 46, 151, 0.85) 0deg 3deg, rgba(123, 47, 247, 0.28) 3deg 8deg, transparent 8deg 16deg); animation-duration: 28s }
    }
  }

  .gw__canvas {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .gw__rings {
    position: absolute;
    inset: 0;
    pointer-events: none;

    .gw__ring {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 280px
      height: 280px
      margin-left;: -140px
      margin-top;: -140px
      border: 2px solid rgba(255, 46, 151, 0.5)
      border-radius: 50%
      transform: translate(-50%, -50%) scale(0.1)
      opacity: 0
      pointer-events: none;

      &--hot {
        border-color: rgba(255, 215, 0, 0.65)
        border-width: 3px
      }
    }
  }

  .gw__scene {
    position: absolute;
    left: 50%;
    top: 44%
    width: 560px
    height: 560px
    transform: translate(-50%, -50%)
    perspective: 1300px
    pointer-events: none;
  }

  .gw__wobble {
    position: absolute;
    inset: 0;
    animation: gw-float 5.6s ease-in-out infinite

    .gw--s6 .gw__wobble,
    .gw--s7 .gw__wobble {
      animation-duration: 8s
    }
  }

  .gw__pivot {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d
  }

  .gw__rotor {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d
    transform: rotateX(-16deg) rotateY(-34deg)
  }

  .gw__box,
  .gw__band3d,
  .gw__lid,
  .gw__bow,
  .gw__knot {
    position: absolute;
    left: 0
    top: 0
    width: 0
    height: 0
    transform-style: preserve-3d
  }

  .gw__box .gw__face {
    position: absolute;
    left: 50%;
    top: 50%;
    width: $box
    height: $box
    margin-left;: -$half
    margin-top;: -$half
    backface-visibility: hidden

    &--front {
      background: linear-gradient(160deg, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.4) 40%),
                  linear-gradient(200deg, #26202e 0%, #17121d 60%, #0a0710 100%)
      box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.28)

      .gw--s5 .gw__box .gw__face--front {
        box-shadow: inset 0 0 0 2px rgba(255, 140, 0, 0.35),
                    inset 0 0 60px rgba(255, 140, 0, 0.18)
      }
    }

    &--back {
      background: linear-gradient(180deg, #17121d 0%, #0a0710 100%)
      box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.12)
    }

    &--left {
      background: linear-gradient(20deg, #1a1622 0%, #0d0912 100%)
      box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.12)
    }

    &--right {
      background: linear-gradient(340deg, #1a1622 0%, #0d0912 100%)
      box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.12)
    }

    &--top {
      background: linear-gradient(160deg, #2a2332 0%, #17121d 50%, #0d0912 100%)
      box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.28)
    }

    &--bottom {
      background: #0d0912
      box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.08)
    }
  }

  .gw__band3d .gw__bandface {
    position: absolute;
    left: 50%;
    top: 50%;
    backface-visibility: hidden

    &--front {
      width: $bandw
      height: $bandh
      margin-left;: -($bandw / 2)
      margin-top;: -$bandh / 2
      background: linear-gradient(120deg, #3a3042 0%, #241d2b 55%, #17121d 100%)
      box-shadow: inset 0 0 0 1px rgba(255, 46, 151, 0.22), 0 8px 20px rgba(0, 0, 0, 0.5)

      .gw--s2 & {
        box-shadow: inset 0 0 0 1px rgba(255, 46, 151, 0.55), 0 0 18px rgba(255, 46, 151, 0.18)
      }

      .gw--s5 & {
        background: linear-gradient(120deg, #4a4052 0%, #3a3342 55%, #241d2b 100%)
        box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.6), 0 0 22px rgba(255, 140, 0, 0.35)
      }
    }

    &--back {
      width: $bandw
      height: $bandh
      margin-left;: -($bandw / 2)
      margin-top;: -$bandh / 2
      background: linear-gradient(60deg, #17121d 0%, #0d0912 55%, #3a3042 100%)
      box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.22)

      .gw--s2 & {
        box-shadow: inset 0 0 0 1px rgba(255, 46, 151, 0.55), 0 0 18px rgba(255, 46, 151, 0.18)
      }

      .gw--s5 & {
        background: linear-gradient(60deg, #0d0912 0%, #3a3342 55%, #4a4052 100%)
        box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.6), 0 0 22px rgba(255, 140, 0, 0.35)
      }
    }

    &--left {
      width: $box
      height: $bandh
      margin-left;: -($half)
      margin-top;: -$bandh / 2
      background: linear-gradient(150deg, #1a1622 0%, #0d0912 55%, #3a3042 100%)
      box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.22)

      .gw--s2 & {
        box-shadow: inset 0 0 0 1px rgba(255, 46, 151, 0.55), 0 0 18px rgba(255, 46, 151, 0.18)
      }

      .gw--s5 & {
        background: linear-gradient(150deg, #0d0912 0%, #3a3342 55%, #4a4052 100%)
        box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.6), 0 0 22px rgba(255, 140, 0, 0.35)
      }
    }

    &--right {
      width: $box
      height: $bandh
      margin-left;: -($half)
      margin-top;: -$bandh / 2
      background: linear-gradient(30deg, #1a1622 0%, #0d0912 55%, #3a3042 100%)
      box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.22)

      .gw--s2 & {
        box-shadow: inset 0 0 0 1px rgba(255, 46, 151, 0.55), 0 0 18px rgba(255, 46, 151, 0.18)
      }

      .gw--s5 & {
        background: linear-gradient(30deg, #0d0912 0%, #3a3342 55%, #4a4052 100%)
        box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.6), 0 0 22px rgba(255, 140, 0, 0.35)
      }
    }
  }

  .gw__lid {
    .gw__lidface {
      position: absolute;
      left: 50%;
      top: 50%;
      backface-visibility: hidden

      &--top {
        width: $box
        height: $box
        margin-left;: -$half
        margin-top;: -$half
        background: linear-gradient(160deg, #3a3042 0%, #241d2b 50%, #17121d 100%)
        box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.22)

        .gw--s5 & {
          background: linear-gradient(160deg, #4a4052 0%, #3a3342 50%, #241d2b 100%)
          box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.6), 0 0 22px rgba(255, 140, 0, 0.35)
        }
      }

      &--front {
        width: $box
        height: $lidh
        margin-left;: -$half
        margin-top;: -$lidh / 2
        background: linear-gradient(120deg, #2a2332 0%, #17121d 60%, #0d0912 100%)
        box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.22)

        .gw--s5 & {
          background: linear-gradient(120deg, #3a3342 0%, #241d2b 60%, #1a1622 100%)
          box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.6)
        }
      }

      &--back {
        width: $box
        height: $lidh
        margin-left;: -$half
        margin-top;: -$lidh / 2
        background: linear-gradient(60deg, #17121d 0%, #0d0912 60%, #2a2332 100%)
        box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.12)

        .gw--s5 & {
          background: linear-gradient(60deg, #0d0912 0%, #241d2b 60%, #3a3042 100%)
          box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.6)
        }
      }

      &--left {
        width: $box
        height: $lidh
        margin-left;: -$half
        margin-top;: -$lidh / 2
        background: linear-gradient(150deg, #1a1622 0%, #0d0912 60%, #3a3042 100%)
        box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.12)

        .gw--s5 & {
          background: linear-gradient(150deg, #0d0912 0%, #241d2b 60%, #4a4052 100%)
          box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.6)
        }
      }

      &--right {
        width: $box
        height: $lidh
        margin-left;: -$half
        margin-top;: -$lidh / 2
        background: linear-gradient(30deg, #1a1622 0%, #0d0912 60%, #3a3042 100%)
        box-shadow: inset 0 0 0 1px rgba(123, 47, 247, 0.12)

        .gw--s5 & {
          background: linear-gradient(30deg, #0d0912 0%, #241d2b 60%, #4a4052 100%)
          box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.6)
        }
      }
    }
  }

  .gw__bow {
    .gw__loop {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 78px
      height: 94px
      margin-left;: -39px
      margin-top;: -47px
      border-radius: 46% 46% 46% 46% / 40%
      background: linear-gradient(150deg, #463a4f 0%, #241d2b 55%, #120d17 100%)
      box-shadow: inset 0 0 0 1px rgba(255, 46, 151, 0.22), 0 6px 18px rgba(0, 0, 0, 0.55)

      .gw--s2 & {
        box-shadow: inset 0 0 0 1px rgba(255, 46, 151, 0.55), 0 0 18px rgba(255, 46, 151, 0.18)
      }

      .gw--s5 & {
        background: linear-gradient(150deg, #5a4a62 0%, #4a4052 55%, #2a2332 100%)
        box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.6), 0 0 22px rgba(255, 140, 0, 0.35)
      }
    }

    &--left .gw__loop--a {
      transform: translate3d(-46px, 0, -6px) rotateX(90deg) rotateZ(14deg)
    }
    &--left .gw__loop--b {
      transform: translate3d(-34px, 0, 24px) rotateX(90deg) rotateZ(-24deg)
    }

    &--right .gw__loop--a {
      transform: translate3d(46px, 0, -6px) rotateX(90deg) rotateZ(-14deg)
    }
    &--right .gw__loop--b {
      transform: translate3d(34px, 0, 24px) rotateX(90deg) rotateZ(24deg)
    }
  }

  .gw__knot {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 32px
    height: 32px
    margin-left;: -16px
    margin-top;: -16px
    border-radius: 42%
    background: linear-gradient(150deg, #3a3042 0%, #241d2b 55%, #17121d 100%)
    box-shadow: inset 0 0 0 1px rgba(255, 46, 151, 0.22), 0 4px 12px rgba(0, 0, 0, 0.5)

    .gw--s2 & {
      box-shadow: inset 0 0 0 1px rgba(255, 46, 151, 0.55), 0 0 14px rgba(255, 46, 151, 0.2)
    }

    .gw--s5 & {
      background: linear-gradient(150deg, #4a4052 0%, #3a3342 55%, #241d2b 100%)
      box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.6), 0 0 18px rgba(255, 140, 0, 0.3)
    }
  }

  .gw__glow2d {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 560px
    height: 560px
    margin-left;: -280px
    margin-top;: -280px
    border-radius: 50%
    background: radial-gradient(closest-side, rgba(255, 46, 151, 0.35) 0%, rgba(123, 47, 247, 0.22) 38%, transparent 72%)
    pointer-events: none;

    .gw--s5 & {
      background: radial-gradient(closest-side, rgba(255, 140, 0, 0.5) 0%, rgba(255, 215, 0, 0.25) 38%, transparent 72%)
    }
  }

  .gw__innerlight {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 180px
    height: 260px
    margin-left;: -90px
    margin-top;: -130px
    border-radius: 50% 50% 46% 46% / 60% 60% 40% 40%
    background: radial-gradient(closest-side, rgba(255, 215, 0, 0.5), rgba(255, 140, 0, 0.22) 55%, transparent 75%)
    pointer-events: none;
  }

  .gw__reward {
    position: absolute;
    left: 50%;
    bottom: 13%
    transform: translateX(-50%)
    text-align: center;
    pointer-events: none;

    > * {
      transform-origin: center center
      transform: scale(0.94)
      opacity: 0
    }

    .gw__reward-title {
      font-size;: 28px
      font-weight;: 700
      letter-spacing;: 1px
      color: #ffd700
      background: linear-gradient(135deg, #ffd700 0%, #ff8c00 50%, #ff2e97 100%)
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      background-clip: text
      margin: 0 0 8px 0
    }

    .gw__reward-subtitle {
      font-size;: 14px
      color: rgba(242, 242, 242, 0.72)
      margin: 0 0 6px 0
      letter-spacing;: 0.3px
    }

    .gw__reward-continue {
      font-size;: 11px
      color: rgba(242, 242, 242, 0.42)
      margin: 0
      letter-spacing;: 0.4px
    }
  }

  .gw__hint {
    position: absolute;
    bottom: 6%
    left: 50%;
    transform: translateX(-50%)
    text-align: center;

    .gw__hint-text {
      font-size;: 10px
      font-weight;: 500
      text-transform: uppercase
      letter-spacing;: 2px
      color: rgba(242, 242, 242, 0.72)
      text-shadow: 0 0 8px rgba(123, 47, 247, 0.28)
    }

    &--live .gw__hint-text {
      opacity: 0
    }
  }

  .gw__flash {
    position: fixed
    inset: 0;
    background: linear-gradient(180deg, #ffffff 0%, #fff4cc 50%, #ffd700 100%)
    opacity: 0
    pointer-events: none;
  }
}

@keyframes gw-float {
  0%, 100% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
}

@keyframes gw-spin {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
</style>
