<template>
  <figure :class="{ full }">
    <v-img
      :src="src"
    />
    <figcaption>{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ''
    },
    full: {
      type: Boolean,
      default: false
    }
  }
}
</script>
