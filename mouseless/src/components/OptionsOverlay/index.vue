<template>
  <div class="options-overlay" v-if="user.isVerified">
    <div class="options-overlay__header">
      <h2>
        Einstellungen
      </h2>
      <btn icon="close" @click.native="close" />
    </div>

    <div class="options-overlay__content">
      <div class="options-overlay__section" v-if="!isWebTarget">
        <div>
          Kürzel
        </div>
        <div>
          <template v-if="isListening">
            <span class="grey">
              Drücke ein beliebiges Kürzel…
            </span>
            <btn @click.native="cancelListening">
              Abbrechen
            </btn>
          </template>
          <template v-else>
            <span>
              <small-key
                v-for="key in shortcut"
                :key="key"
                :name="key"
              />
            </span>
            <btn @click.native="listenToNewShortcut">
              Ändern
            </btn>
          </template>
        </div>
      </div>

      <div class="options-overlay__section">
        <div>
          Esc als ⌘
        </div>
        <div>
          <label class="options-overlay__label">
            <input type="checkbox" v-model="escAsCmd">
            <span>
              Escape-Taste als ⌘ verwenden
            </span>
          </label>
        </div>
      </div>

      <div class="options-overlay__section" v-if="!isWebTarget">
        <div>
          Menüleiste
        </div>
        <div>
          <label class="options-overlay__label">
            <input type="checkbox" v-model="showMenubar">
            <span>
              In Menüleiste anzeigen
            </span>
            <btn @click.native="restart" is-red-text v-if="showMenubarRestartButton">
              App neu starten
            </btn>
          </label>
        </div>
      </div>

      <div class="options-overlay__section" v-if="!isWebTarget">
        <div>
          Dock-Symbol
        </div>
        <div>
          <label class="options-overlay__label">
            <input type="checkbox" v-model="showDockIcon">
            <span>
              Im Dock anzeigen
            </span>
            <btn @click.native="restart" is-red-text v-if="showDockIconRestartButton">
              App neu starten
            </btn>
          </label>
        </div>
      </div>

      <div class="options-overlay__section" v-if="!isWebTarget">
        <div>
          Autostart
        </div>
        <div>
          <label class="options-overlay__label">
            <input type="checkbox" v-model="autoStart">
            <span>
              App beim Anmelden starten
            </span>
          </label>
        </div>
      </div>

      <div class="options-overlay__section" v-if="user.email">
        <div>
          Lizenz
        </div>
        <div>
          Lizenziert für {{ user.email }}
        </div>
      </div>

      <div class="options-overlay__section" v-if="isWebTarget">
        <div>
          Apps
        </div>
        <div>
          <label class="options-overlay__label">
            <input
              type="checkbox"
              :checked="!hiddenApps.includes('gmail')"
              @change="toggleApp('gmail')"
            >
            <span>
              Gmail
            </span>
          </label>
          <label class="options-overlay__label">
            <input
              type="checkbox"
              :checked="!hiddenApps.includes('googledocs')"
              @change="toggleApp('googledocs')"
            >
            <span>
              Google Docs
            </span>
          </label>
        </div>
      </div>

      <div class="options-overlay__section">
        <div>
          Gift
        </div>
        <div>
          <btn @click.native="replayGift">
            Gift-Animation erneut ansehen
          </btn>
        </div>
      </div>

      <div class="options-overlay__section options-overlay__section--danger">
        <btn @click.native="resetProgress" is-red>
          Fortschritt zurücksetzen
        </btn>
        <btn @click.native="resetAll" is-red v-if="isDevelopment">
          Alles zurücksetzen
        </btn>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import { app } from '@electron/remote'
import Event from '@/services/Event'
import Keyboard from '@/services/Keyboard'
import User from '@/services/User'
import Btn from '@/components/Btn'
import Store from '@/services/Store'
import AutoStart from '@/services/AutoStart'
import SmallKey from '@/components/SmallKey'

export default {
  name: 'OptionsOverlay',

  components: {
    Btn,
    SmallKey,
  },

  data() {
    return {
      isDevelopment: process.env.NODE_ENV === 'development',
      isWebTarget: process.env.VUE_APP_TARGET === 'web',
      showDockIcon: Store.get('showDockIcon', true),
      showMenubar: Store.get('showMenubar', true),
      autoStart: Store.get('autoStart', true),
      showDockIconRestartButton: false,
      showMenubarRestartButton: false,
      keyboard: null,
      hiddenApps: Store.get('hiddenApps', ['gmail', 'googledocs']),
      shortcut: Store.get('shortcut'),
      escAsCmd: Store.get('escAsCmd', false),
      user: User,
    }
  },

  watch: {
    showDockIcon() {
      Store.set('showDockIcon', this.showDockIcon)
      this.showDockIconRestartButton = true
    },

    showMenubar() {
      Store.set('showMenubar', this.showMenubar)
      this.showMenubarRestartButton = true
    },

    autoStart() {
      Store.set('autoStart', this.autoStart)
      AutoStart.update()
    },

    escAsCmd() {
      Store.set('escAsCmd', this.escAsCmd)
    },
  },

  computed: {
    isListening() {
      return !!this.keyboard
    },
  },

  methods: {
    close() {
      Event.emit('hideOptions')
    },

    replayGift() {
      Event.emit('replayGift')
      this.close()
    },

    resetProgress() {
      if (confirm('Möchtest du deinen Fortschritt wirklich zurücksetzen?')) { // eslint-disable-line
        Store.delete('runs')
        window.location.reload()
      }
    },

    resetAll() {
      if (confirm('Möchtest du wirklich alles zurücksetzen?')) { // eslint-disable-line
        Store.clear()
        window.location.reload()
      }
    },

    restart() {
      app.relaunch()
      app.exit(0)
    },

    listenToNewShortcut() {
      this.keyboard = new Keyboard()

      this.keyboard.on('shortcut', event => {
        event.preventDefault()
        Store.set('shortcut', this.keyboard.resolvedKeys)
        ipcRenderer.send('shortcutChanged')
        this.shortcut = this.keyboard.resolvedKeys
        this.cancelListening()
      })
    },

    cancelListening() {
      this.keyboard.destroy()
      this.keyboard = null
    },

    toggleApp(id) {
      if (this.hiddenApps.includes(id)) {
        this.hiddenApps = this.hiddenApps.filter(hidden => hidden !== id)
      } else {
        this.hiddenApps = [...this.hiddenApps, id]
      }

      Store.set('hiddenApps', this.hiddenApps)
      Event.emit('appsChanged')
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
