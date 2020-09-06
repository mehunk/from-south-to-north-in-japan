<template>
  <travel-article :current-index="6">
    <p>
      台风造成的影响终于已经消失，航班也开始恢复了。于是今天乘飞机返回了大阪。
    </p>

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143491/from-south-to-north-in-japan/south/7/naha-airport.jpg"
      caption="那霸机场。因为台风，前两天的航班全部取消了，所以今天机场的人格外多。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143484/from-south-to-north-in-japan/south/7/jetstar.jpg"
      caption="一个总部在澳大利亚的叫做 Jet Star 的 LCC。不知道为什么在中国都没有航班，只有本土的春秋、吉祥之类的。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143485/from-south-to-north-in-japan/south/7/warcraft.jpg"
      caption="那霸机场的军用飞机。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143484/from-south-to-north-in-japan/south/7/thick-cloud.jpg"
      caption="因为台风的缘故，天空上厚厚的云层☁️，像是棉花糖一样。亲身验证了日本飞机的准时程度，上了飞机以后基本没有等，开上了跑道以后直接加速、起飞，动作一气呵成。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143484/from-south-to-north-in-japan/south/7/resturant.jpg"
      caption="酒店对面的小吃店。从穿着打扮来说，冲绳和大阪这样的地方还是有城乡差距的。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143485/from-south-to-north-in-japan/south/7/supper.jpg"
      caption="晚餐，我点的是寿喜锅。还另外给了一碗生鸡蛋，看了半天不知道怎么吃，然后直接倒进了锅里。很久以后才知道应该使用锅里的菜和肉蘸着生鸡蛋吃的。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143484/from-south-to-north-in-japan/south/7/noodle-bread.jpg"
      caption="我们和台风是几乎一起到的大阪，不过到了大阪以后台风的威力就小多了，只是带来了大量的降水。吃完晚饭，趁着雨下了一点，我们在附近转了转，然后发现了日本的黑暗料理，面包夹炒面，也是醉了。"
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
