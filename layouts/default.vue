<template>
  <v-app dark>
    <navigation />
    <v-main>
      <v-container
        fluid
        class="pa-0"
      >
        <nuxt />

        <footer class="mt-12">
          <v-row>
            <v-col
              cols="12"
              sm="6"
              class="col-item"
            >
              <h4>关于从南到北游日本</h4>
              <p>该站点记录了我的 2014 年和 2016 年两次日本之行，南起冲绳，北至北海道。作为第一次的异国旅行，在两次分别 10 天左右的旅途中，经历了很多大概只能在日本经历的人和事。</p>
            </v-col>
            <v-col
              cols="12"
              sm="3"
              class="col-item"
            >
              <h4>关于作者</h4>
              <p>作为多年日本文化迷，终于在 2014 年实现了一个自己的人生愿望。作者作为一个前端程序员正在北京工作和生活。现在作者正在努力实现另一个人生愿望，能够在日本工作，在日本生活。</p>
            </v-col>
            <v-col
              cols="12"
              sm="3"
              class="col-item"
            >
              <h4>更多</h4>
              <p>欢迎更多志同道合的朋友们一起交流。也希望喜欢我作品的在日企业能够向我投出橄榄枝哦！</p>
            </v-col>
          </v-row>
        </footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './navigation'

export default {
  components: {
    Navigation
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
