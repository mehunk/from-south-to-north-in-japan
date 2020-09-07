<template>
  <v-app dark>
    <navigation />
    <lang-menu />
    <v-main>
      <v-container
        fluid
        class="pa-0"
      >
        <nuxt />

        <site-footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './navigation'
import LangMenu from './lang-menu'
import SiteFooter from './site-footer'

export default {
  components: {
    LangMenu,
    Navigation,
    SiteFooter
  },
  data () {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ]
    }
  }
}
</script>
