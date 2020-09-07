<template>
  <v-card
    tile
    flat
    class="mx-auto mb-2"
    max-width="200"
    :to="localePath(catalogItem.link)"
  >
    <v-img
      class="white--text align-end"
      height="150px"
      :src="catalogItem.src"
    >
      <v-card-title>{{ $t(`catalog[${currentIndex}].title`) }}</v-card-title>
    </v-img>

    <v-card-subtitle>
      {{ $t(`catalog[${currentIndex}].day`) }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    currentIndex: {
      type: Number,
      required: true
    },
    catalogItem: {
      type: Object,
      required: true
    }
  }
}
</script>
