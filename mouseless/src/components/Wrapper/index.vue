<template>
  <div class="wrapper" :class="{ 'is-loaded': isLoaded }">
    <div class="wrapper__content" :class="{ 'is-hidden': showOptions }">
      <transition :name="transitionName">
        <router-view class="route" />
      </transition>
      <div class="wrapper__content-overlay" />
    </div>

    <transition name="options">
      <options-overlay class="wrapper__overlay" v-if="showOptions" />
    </transition>

    <gift-unwrap
      v-if="showGift"
      @complete="onGiftComplete"
    />
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import SpatialNavigation from 'spatial-navigation-js'
import Event from '@/services/Event'
import GiftUnwrap from '@/components/GiftUnwrap'
import OptionsOverlay from '@/components/OptionsOverlay'

export default {
  name: 'Wrapper',

  components: {
    GiftUnwrap,
    OptionsOverlay,
  },

  data() {
    return {
      showGift: false,
      isLoaded: false,
      showOptions: false,
    }
  },

   created() {
    let seen = false
    try { seen = window.localStorage.getItem('giftUnwrapSeen') === '1' } catch (e) {}
    const forced = /[?&]gift=1/.test(window.location.search)
    this.showGift = forced || !seen
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

    onReplayGift() {
      this.showOptions = false
      this.showGift = true
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
    Event.on('replayGift', this.onReplayGift)

    ipcRenderer.on('showOptions', this.onShowOptions)
    ipcRenderer.on('log', this.onLog)
  },

  beforeDestroy() {
    Event.off('showOptions', this.onShowOptions)
    Event.off('hideOptions', this.onHideOptions)
    Event.off('replayGift', this.onReplayGift)

    ipcRenderer.removeListener('showOptions', this.onShowOptions)
    ipcRenderer.removeListener('log', this.onLog)
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./animations.scss"></style>
<style lang="scss" src="./style.scss" scoped></style>
