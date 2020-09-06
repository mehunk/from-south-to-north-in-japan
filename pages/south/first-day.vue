<template>
  <travel-article :current-index="0">
    <p>
      <b>欢迎来到从南到北游日本</b>
      <br>
      在大学时代，受到日剧的影响，我就在学日语。从那时起，就一直有个梦想，希望能去日本走一走。通过自己的眼睛看一看日本的城市是什么样的，日剧中经常出现的拉面、荞麦面是什么味道的，剑道什么的好玩么，选举是怎么样的场面。由于我迟缓的行动力，一直到 2014 年才终于以新婚旅行为契机去了日本的冲绳、大阪和京都。然后在 2016 年的冬天，两人又一起去了北海道、名古屋、京都和奈良。这也是为什么网站的名字叫做从南到北游日本。
    </p>

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143137/from-south-to-north-in-japan/south/1/tianjin.jpg"
      caption="航班从天津出发，天津也是我上大学的城市。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143137/from-south-to-north-in-japan/south/1/tianjin-airport.jpg"
      caption="半夜在天津机场候机。在我看来，旅游前那种期待的心情是最美好的，甚至可能要比旅游本身还要美好。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143136/from-south-to-north-in-japan/south/1/customs-entry.jpg"
      caption="坐了近 3 个钟头的飞机✈️，终于达到了大阪关西国际机场。正在海关排队等待入境。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143136/from-south-to-north-in-japan/south/1/police-station.jpg"
      caption="大阪机场的“交番”，派出所的意思。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143136/from-south-to-north-in-japan/south/1/family-mart.jpg"
      caption="机场内的 FamilyMart。终于有点日本🇯🇵的感觉了。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143136/from-south-to-north-in-japan/south/1/osaka-airport.jpg"
      caption="到达时已经是第二天的凌晨了，赶紧出机场去酒店。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143136/from-south-to-north-in-japan/south/1/hotel-lobby.jpg"
      caption="酒店大厅，当时就知道是个铠甲。后来看了《真田丸》才知道这个是真田幸村的铠甲，通过六连钱的家纹和红色鹿角头盔其实很明显就能看出来。"
      :full="true"
    />

    <p>
      因为大阪机场是填海建的，距离市区很远，而第二天还要继续飞冲绳。因此当晚的酒店就定在了机场里的日航酒店。酒店前台是一个梳着油油大背头的小哥哥，操着一口日本口音向我要"クレジットカード"，我听了半天没听出来，还是我太太听出来的，哈哈哈。当然，可以归结为他的口音太浓重，其实主要也是我在之前一次国都没出国，太缺乏经验，嘿嘿。
    </p>

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143140/from-south-to-north-in-japan/south/1/hotel-room.jpg"
      caption="一晚 900 元的小房间。从此开始真正见识到了日本酒店房间的袖珍。"
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
