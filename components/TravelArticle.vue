<template>
  <article>
    <article-cover :current-index="currentIndex" />
    <section
      id="article-body"
      class="d-flex flex-column align-center"
    >
      <slot />
    </section>
    <article-footer :current-index="currentIndex" />
  </article>
</template>

<script>
import ArticleCover from '@/components/ArticleCover'
import ArticleFooter from '@/components/ArticleFooter'

export default {
  components: {
    ArticleFooter,
    ArticleCover
  },
  props: {
    currentIndex: {
      type: Number,
      required: true
    }
  }
}
</script>
