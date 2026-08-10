<template>
  <page title="Übersicht">
    <template v-slot:left>
      <btn icon="arrow-left" @click.native="goBack">
        Apps
      </btn>
    </template>
    <template v-slot>
      <div class="overview-route">
        <div class="overview-route__app" v-for="app in apps" :key="app.id">
          <div class="overview-route__app-header">
            <img
              class="overview-route__logo"
              :data-theme-invert="app.id === 'macos'"
              :src="require(`@/assets/logos/${app.id}.svg`)"
            >
            <div class="overview-route__app-title">
              {{ app.title }}
            </div>
          </div>

          <div class="overview-route__set" v-for="set in app.sets" :key="set.id">
            <div class="overview-route__set-title">
              {{ set.title }}
            </div>
            <div
              class="overview-route__row"
              v-for="shortcut in app.shortcutsBySet(set.id)"
              :key="shortcut.id"
            >
              <div class="overview-route__definition">
                {{ shortcut.title }}
              </div>
              <div class="overview-route__keys">
                <small-key
                  v-for="key in shortcut.resolvedKeys"
                  :key="key"
                  :name="key"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </page>
</template>

<script>
import Btn from '@/components/Btn'
import Page from '@/components/Page'
import SmallKey from '@/components/SmallKey'

export default {
  name: 'OverviewRoute',

  components: {
    Btn,
    Page,
    SmallKey,
  },

  computed: {
    apps() {
      const apps = this.$db.apps.slice()

      if (process.env.VUE_APP_TARGET === 'web') {
        const webOrder = ['macos', 'finder', 'safari', 'spotify']

        return apps.sort((a, b) => webOrder.indexOf(a.id) - webOrder.indexOf(b.id))
      }

      return apps.sort((a, b) => a.title.localeCompare(b.title, 'de'))
    },
  },

  methods: {
    goBack() {
      this.$router.push({ name: 'apps' })
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
