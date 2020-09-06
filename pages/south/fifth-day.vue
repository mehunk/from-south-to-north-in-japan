<template>
  <travel-article :current-index="4">
    <p>
      原本当天的计划是去离岛的，结果遇见了人生中的第一次台风🌀。只好待在屋子里，听着屋外台风的咆哮，看着屋里的电视，吃着点小零食度过这一天。
    </p>

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143395/from-south-to-north-in-japan/south/5/typhoon.jpg"
      caption="屋外的风景。台风🌀真的是很壮观，把楼下的椰子树的树枝都已经吹平了，甚至让人有会把整栋楼都能吹跑的感觉。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143395/from-south-to-north-in-japan/south/5/on-balcony.jpg"
      caption="我在阳台上感受这台风的威力。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143396/from-south-to-north-in-japan/south/5/tv.jpg"
      caption="通过电视一直关注台风的走向。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143395/from-south-to-north-in-japan/south/5/snacks.jpg"
      caption="一天的小零食"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143395/from-south-to-north-in-japan/south/5/meal.jpg"
      caption="简餐。"
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
