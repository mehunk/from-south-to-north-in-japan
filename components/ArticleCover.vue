<template>
  <section id="article-cover">
    <div class="article-title">
      <h3>{{ day }}</h3>
      <h1>{{ title }}</h1>
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
      day: cover.day,
      title: cover.title,
      src: cover.src
    }
  }
}
</script>
