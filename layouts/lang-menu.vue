<template>
  <v-speed-dial
    v-model="fab"
    direction="bottom"
    transition="slide-y-transition"
  >
    <template v-slot:activator>
      <v-btn
        v-model="fab"
        fab
        icon
        elevation="4"
      >
        <v-icon v-if="fab">
          mdi-close
        </v-icon>
        <v-icon v-else>
          mdi-translate
        </v-icon>
      </v-btn>
    </template>
    <v-btn
      v-for="(locale, index) in availableLocales"
      :key="index"
      fab
      small
      :to="switchLocalePath(locale.code)"
    >
      <v-img
        :src="require('@/assets/images/national-flags/' + locale.image)"
        width="40"
        height="40"
      />
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  data () {
    return {
      fab: false
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
.v-speed-dial {
  position: fixed;
  top: 16px;
  left: 80px;
}

.v-btn--floating {
  position: relative;
}
</style>
