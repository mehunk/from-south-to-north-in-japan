<template>
  <travel-article :current-index="7">
    <p>
      上午的行程主要是在大阪城公园，下午则去了附近的京都，和想象中的一派古老、庄重的由各种古刹、古建筑组成的城市不同，京都给我的第一印象却是精致，精致到了极致。
    </p>

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143537/from-south-to-north-in-japan/south/8/ticket.jpg"
      caption="去大阪城公园的 JR 车票。没想到如此现代化的日本的车票如此复古，和中国八、九十年代的火车票一样。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143535/from-south-to-north-in-japan/south/8/children.jpg"
      caption="大阪城公园内的小盆友。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143537/from-south-to-north-in-japan/south/8/osaka-castle.jpg"
      caption="大阪城。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143535/from-south-to-north-in-japan/south/8/on-osaka-castle.jpg"
      caption="大阪城上。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143533/from-south-to-north-in-japan/south/8/emblem.jpg"
      caption="德川和真田的家徽。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143537/from-south-to-north-in-japan/south/8/statue.jpg"
      caption="大阪城公园内的丰臣秀吉雕像。对于丰臣秀吉这个名字，只是在战国无双里见到过，直到后来看过了《德川家康》的小说和很多大河剧以后才逐渐了解起来。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143535/from-south-to-north-in-japan/south/8/lunch.jpg"
      caption="午餐，两份拉面🍜、一份煎饺🥟。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143541/from-south-to-north-in-japan/south/8/bookshelf.jpg"
      caption="机场里的哆啦 A 梦漫画。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143533/from-south-to-north-in-japan/south/8/kyoto-station.jpg"
      caption="京都 JR 站。到了京都天色已经黑了，但仍然给了我很大的震撼。来之前以为京都到处都是旧寺庙旧神社旧房子，没想到神社和寺庙是旧，但房子可一点也不旧，又现代又精致，真的是我见过的这些城市中古今完美结合的代表了。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143538/from-south-to-north-in-japan/south/8/real-estate-prices.jpg"
      caption="关心一下京都人民的房价。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143536/from-south-to-north-in-japan/south/8/hot-spring.jpg"
      caption="晚上住的是青年旅舍，没有什么洗澡的地方，找到了一个附近的澡堂，和电视剧里演的一模一样，哈哈哈哈。奢华程度自然比不上石家庄和北京的这些澡堂，但和老家澡堂的感觉很像，很平民，很生活。一开始迷路了，向巡夜的老大爷求助了，老大爷直接领着我找到这来，还夸我那半瓶水的日语水平好。然后还让我告诉澡堂的老板我的住址，万一找不到了可以帮忙。在洗完正穿衣服的时候，进来一个全身刺青的大哥，吓了我一条。"
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
