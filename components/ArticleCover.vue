<template>
  <section id="article-cover">
    <div class="article-title">
      <h3>{{ $t(`catalog[${currentIndex}].day`) }}</h3>
      <h1>{{ $t(`catalog[${currentIndex}].title`) }}</h1>
    </div>
    <v-img
      :src="src"
      class="cover"
    />
  </section>
</template>

<script>
import catalog from '@/data/catalog.json'

export default {
  props: {
    currentIndex: {
      type: Number,
      required: true
    }
  },
  data () {
    const cover = catalog[this.currentIndex]
    return {
      src: cover.src
    }
  }
}
</script>
