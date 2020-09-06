<template>
  <section id="article-footer">
    <div v-if="prev">
      <nuxt-link :to="prev.link">
        <div>
          <h4>上一篇：</h4>
          <h3>{{ prev.day }}</h3>
          <h2>{{ prev.title }}</h2>
        </div>
      </nuxt-link>
      <v-img :src="prev.src" />
    </div>
    <div v-if="next">
      <nuxt-link :to="next.link">
        <div class="next">
          <h4>下一篇：</h4>
          <h3>{{ next.day }}</h3>
          <h2>{{ next.title }}</h2>
        </div>
      </nuxt-link>
      <v-img :src="next.src" />
    </div>
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
    return {
      prev: catalog[this.currentIndex - 1],
      next: catalog[this.currentIndex + 1]
    }
  }
}
</script>
