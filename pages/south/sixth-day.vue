<template>
  <travel-article :current-index="5">
    <p>
      台风的第二天。上午还是狂风大作，到了下午风就变得很小了，只剩下了微弱的降雨。于是我们终于能走出酒店，在那霸国际通和第一公社市场附近转了转。
    </p>

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143422/from-south-to-north-in-japan/south/6/tv-debate.jpg"
      caption="非常有意思的辩论节目。NHK 电视台举办的节目，辩论的双方是在野党派以及自民党和公明党组成的执政党派联盟，双方针对当前的形势和政策唇枪舌战，弄得公明党的大佬满头大汗，起码在这个节目上，并不因为你是当前的执政党就会对你礼让三分。对于从来没有看过这种节目的我来说，真是大呼过瘾。在后来看台湾选举辩论和美国大选辩论也是同样的感觉。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143421/from-south-to-north-in-japan/south/6/IMG_1860.jpg"
      caption="酒店附近的风俗街。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143422/from-south-to-north-in-japan/south/6/pharmacy.jpg"
      caption="这药店的名字起的，你敢卖，我也不敢吃啊，吃完上天堂了，哈哈哈。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143419/from-south-to-north-in-japan/south/6/icecream.jpg"
      caption="网红冰淇淋🍦，海盐口味的。在国际通旁边的小店买的。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143421/from-south-to-north-in-japan/south/6/octopus-balls.jpg"
      caption="第一次吃到发源地的章鱼烧。味道算是中规中矩吧。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143422/from-south-to-north-in-japan/south/6/bookstore.jpg"
      caption="书店一角。传说中的“赤本”，还是在《龙樱》中看到的。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143421/from-south-to-north-in-japan/south/6/dinner.jpg"
      caption="晚餐，鳗鱼饭。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143424/from-south-to-north-in-japan/south/6/washlet.jpg"
      caption="爆买品。话说这东西真挺舒服，日本的所有酒店都配了，又干净、又舒服，据说还降低痔疮的发病率。不过据说不太适合国内的环境，因为水质太差，会经常堵住，还需要加个软水才行。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143422/from-south-to-north-in-japan/south/6/supermarket.jpg"
      caption="穷人的百元店，东西的品质确实不太敢恭维。不过只是看起来一般，质量应该还是有保证的。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143421/from-south-to-north-in-japan/south/6/boxed-meal.jpg"
      caption="夜宵。晚上回去的时候饿了，在路边的便当店买了一份便当，前面还有几个排队的，看着像是体力劳动者。"
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
