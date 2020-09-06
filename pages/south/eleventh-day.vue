<template>
  <travel-article :current-index="10">
    <p>
      今天的主题是返程。从大阪回到了天津以后，在天津机场找不到去地铁的路，于是咨询了一下服务台，服务台小姑娘告诉我，“地铁在地下。”。我听到这个回答以后对于还自己停留在日本人的那种谦逊、热情的服务态度的落后思想进行了深刻的反省。
    </p>

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143673/from-south-to-north-in-japan/south/11/budogu.jpg"
      caption="武道具店。因为下午就要返回大阪坐飞机返程，所以今天只规划了一个行程，就是去参观一下武道具店。在这家店买了一柄木刀。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143673/from-south-to-north-in-japan/south/11/conveyor-belt-sushi.jpg"
      caption="临走前，在大阪机场吃的回转寿司。相比国内机场、火车站的餐厅而言，日本这些地方的餐馆价格很良心。一开始我并不知道每个人前面都摆放着的小盒子是什么，后来才知道是腌制的姜片，还挺好吃的。"
    />
  </travel-article>
</template>

<script>
import ArticleFigure from '@/components/ArticleFigure'
import TravelArticle from '@/components/TravelArticle'

export default {
  components: {
    TravelArticle,
    ArticleFigure
  }
}
</script>
