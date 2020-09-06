<template>
  <travel-article :current-index="9">
    <p>
      今天去了太秦映画村和景点岚山。因为实在是希望珍惜在日本的每一分每一秒，这十天来几乎每天都是 1 点多才睡觉，今天实在熬不住了，下午早早就回到了青旅补觉。
    </p>

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143769/from-south-to-north-in-japan/south/10/toei-studio-city.jpg"
      caption="东映太秦映画村。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143768/from-south-to-north-in-japan/south/10/narration.jpg"
      caption="映画村里的讲解员。基本没听懂……"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143769/from-south-to-north-in-japan/south/10/visit.jpg"
      caption="这张照片虽然拍得完全看不出是什么，但在我心中却留下了及其深刻的印象。这是在一个小剧场里面，小剧场的演出刚刚结束，一个智力障碍的学生团体正在老师的带领下往出走，有个学生不小心差点儿摔倒，老师赶紧搀扶着一起走了出去。怎么说呢，和中国一样，像日本、美国这样的国家也不会没有穷人、没有病人、没有残疾人，但有个很重要区别是如何对待这些人，是尽我们所能去帮助他们，还是继续丛林法则，让他们当好一个工具人继续压榨他们，或者让他们自生自灭、选择遗忘掉他们。这次旅行给我带来了很多思考，而这也是相比度假我更喜欢旅行的原因之一。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143768/from-south-to-north-in-japan/south/10/view-from-hill.jpg"
      caption="岚山。和映画村离得并不是很远。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143771/from-south-to-north-in-japan/south/10/tap-water-in-park.jpg"
      caption="岚山的饮用自来水龙头。这种自然水龙头在日本的公园随处可见。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143772/from-south-to-north-in-japan/south/10/poem-on-stone.jpg"
      caption="周总理的雨中岚山。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143767/from-south-to-north-in-japan/south/10/dharma.jpg"
      caption="天龙寺的达摩画像。这个画风曾让我一度以为是漫画……"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143766/from-south-to-north-in-japan/south/10/ice-water.jpg"
      caption="午餐，王将饺子。无处不在的冰水，我的胃口不行啊！中国人的胃口不行啊！没想到后面到了冰天雪地的北海道……还是冰水！"
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
