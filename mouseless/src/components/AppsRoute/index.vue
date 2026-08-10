<template>
  <page class="apps-route">
    <template v-slot>
      <apps-list :apps="sortedApps" />

      <div class="apps-route__actions">
        <button class="apps-route__button" @click="goToOverview">
          Übersicht
        </button>
        <button class="apps-route__button" @click="showOptions">
          <span class="apps-route__button-icon">⚙</span>
          Einstellungen
        </button>
      </div>
    </template>
  </page>
</template>

<script>
import Event from '@/services/Event'
import Page from '@/components/Page'
import AppsList from '@/components/AppsList'

export default {
  name: 'AppsRoute',

  components: {
    Page,
    AppsList,
  },

  data() {
    return {
      apps: this.$db.apps,
    }
  },

  created() {
    Event.on('appsChanged', this.refreshApps)
  },

  beforeDestroy() {
    Event.off('appsChanged', this.refreshApps)
  },

  computed: {
    sortedApps() {
      const apps = this.apps.slice()

      if (process.env.VUE_APP_TARGET === 'web') {
        const webOrder = ['macos', 'finder', 'safari', 'spotify']

        return apps.sort((a, b) => webOrder.indexOf(a.id) - webOrder.indexOf(b.id))
      }

      return apps.sort((a, b) => a.title.localeCompare(b.title, 'de'))
    },
  },

  methods: {
    refreshApps() {
      this.apps = this.$db.apps
    },

    goToOverview() {
      this.$router.push({ name: 'overview' })
    },

    showOptions() {
      Event.emit('showOptions')
    },
  },
}
</script>

<style lang="scss" src="./style.scss" ></style>
