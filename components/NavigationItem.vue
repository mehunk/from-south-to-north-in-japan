<template>
  <v-card
    tile
    flat
    class="mx-auto mb-2"
    max-width="200"
    :to="catalogItem.link"
  >
    <v-img
      class="white--text align-end"
      height="150px"
      :src="catalogItem.src"
    >
      <v-card-title>{{ catalogItem.title }}</v-card-title>
    </v-img>

    <v-card-subtitle>
      {{ catalogItem.day }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    catalogItem: {
      type: Object,
      required: true
    }
  }
}
</script>
