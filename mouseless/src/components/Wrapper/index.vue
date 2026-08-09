<template>
  <div class="wrapper" :class="{ 'is-loaded': isLoaded }">
    <div class="wrapper__content" :class="{ 'is-hidden': showOptions || showLicense }">
      <transition :name="transitionName">
        <router-view class="route" />
      </transition>
      <div class="wrapper__content-overlay" />
    </div>

    <transition name="options">
      <options-overlay class="wrapper__overlay" v-if="showOptions" />
    </transition>

    <transition name="options">
      <license-overlay class="wrapper__overlay" v-if="showLicense" />
    </transition>

    <gift-unwrap
      v-if="showGift"
      :reward-title="'GESCHAFFT!'"
      :reward-subtitle="'Dein Abenteuer beginnt jetzt.'"
      :continue-label="'Klicken zum Fortfahren'"
      @complete="onGiftComplete"
    />

    <button v-if="!showGift" class="gw-replay" @click="showGift = true">
      Wiederholen
    </button>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import SpatialNavigation from 'spatial-navigation-js'
import Event from '@/services/Event'
import User from '@/services/User'
import GiftUnwrap from '@/components/GiftUnwrap'
import OptionsOverlay from '@/components/OptionsOverlay'
import LicenseOverlay from '@/components/LicenseOverlay'

export default {
  name: 'Wrapper',

  components: {
    GiftUnwrap,
    OptionsOverlay,
    LicenseOverlay,
  },

  data() {
    return {
      showGift: false,
      isLoaded: false,
      showOptions: false,
      showLicense: !User.isVerified,
    }
  },

  created() {
    const forced = typeof window !== 'undefined'
      && (new URLSearchParams(window.location.search).get('gift') === '1'
          || (this.$route && this.$route.query && this.$route.query.gift === '1'))
    let seen = false
    try { seen = window.localStorage.getItem('giftUnwrapSeen') === '1' } catch (e) {}
    if (forced || !seen) this.showGift = true
  },

  computed: {
    transitionName() {
      if (this.$route.name === 'shortcuts') {
        return null
      }

      return this.$route.name === 'apps' ? 'slide-right' : 'slide-left'
    },
  },

  methods: {
    onShowOptions() {
      if (this.$route.name === 'shortcuts') {
        ipcRenderer.send('showMainWindow')
        return
      }

      this.showOptions = true
    },

    onHideOptions() {
      this.showOptions = false
    },

    onShowLicense() {
      this.showLicense = true
    },

    onHideLicense() {
      this.showLicense = false
    },

    onLog(event, log) {
      // eslint-disable-next-line
      console.log(log)
    },
  },

  mounted() {
    setTimeout(() => {
      this.isLoaded = true
      document.body.classList.add('is-loaded')
    }, 0)

    SpatialNavigation.init()
    SpatialNavigation.add({ selector: '[data-focusable]' })
    SpatialNavigation.makeFocusable()

    Event.on('showOptions', this.onShowOptions)
    Event.on('hideOptions', this.onHideOptions)
    Event.on('showLicense', this.onShowLicense)
    Event.on('hideLicense', this.onHideLicense)

    ipcRenderer.on('showOptions', this.onShowOptions)
    ipcRenderer.on('log', this.onLog)
  },

  beforeDestroy() {
    Event.off('showOptions', this.onShowOptions)
    Event.off('hideOptions', this.onHideOptions)
    Event.off('showLicense', this.onShowLicense)
    Event.off('hideLicense', this.onHideLicense)

    ipcRenderer.removeListener('showOptions', this.onShowOptions)
    ipcRenderer.removeListener('log', this.onLog)
  },

  methods: {
    onGiftComplete() {
      this.showGift = false
      try { window.localStorage.setItem('giftUnwrapSeen', '1') } catch (e) {}
    },

    onShowOptions() {
      if (this.$route.name === 'shortcuts') {
        ipcRenderer.send('showMainWindow')
        return
      }
      this.showOptions = true
    },

    onHideOptions() {
      this.showOptions = false
    },

    onShowLicense() {
      this.showLicense = true
    },

    onHideLicense() {
      this.showLicense = false
    },

    onLog(event, log) {
      console.log(log)
    },
  },
}
</script>

<style lang="scss">
.gw-replay {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 2147483001;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 215, 0, 0.3);
  color: rgba(242, 242, 242, 0.7);
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease-out;
}
.gw-replay:hover {
  background: rgba(0, 0, 0, 0.7);
  border-color: rgba(255, 215, 0, 0.5);
  color: rgba(242, 242, 242, 0.9);
}
</style>
<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./animations.scss"></style>
<style lang="scss" src="./style.scss" scoped></style>
