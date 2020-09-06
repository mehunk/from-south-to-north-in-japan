<template>
  <v-sheet>
    <v-btn
      fab
      icon
      fixed
      :top="true"
      :left="true"
      @click.stop="drawer = !drawer"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-item
          v-for="(item, index) in catalog"
          :key="index"
        >
          <navigation-item :catalog-item="item" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
import catalog from '@/data/catalog.json'
import NavigationItem from '@/components/NavigationItem'

export default {
  components: {
    NavigationItem
  },
  data () {
    return {
      catalog,
      drawer: false
    }
  }
}
</script>
