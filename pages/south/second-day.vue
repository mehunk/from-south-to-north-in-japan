<template>
  <travel-article :current-index="1">
    <p>
      <b>从大阪到冲绳</b>
      <br>
      在关西国际机场住了一晚以后，今天从机场继续飞往冲绳。到达了冲绳以后，为了第二天能够去海洋博公园方便，找了一个比较近的酒店，谁知道酒店的位置那么偏僻，竟然还要爬山。冲绳机场在那霸市，而海洋博公园是在名护市，从那霸到名护坐公交车花了有将近 2 个小时。这时候还没什么出来旅游的经验，也没有提前找好吃饭的地方，结果两个人饥肠辘辘的走了一天也没碰到什么小饭馆，最后就买了点饭团🍙吃。
    </p>

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143283/from-south-to-north-in-japan/south/2/fly-peach.jpg"
      caption="从大阪到冲绳乘坐的是廉价航空公司 Fly Peach 的飞机，一个人 200 块钱都不到，实在令人难以置信。而日航和 ANA 动辄要两三千。不过话说过来，那 Fly Peach 的网站做的也够 LCC 的，基本没啥功能，上来就查，查完就订，订完就发邮件，连用户体系都没有。对了，还有一个和国内有很大区别的地方是，日本乘坐飞机过安检时不检查饮品，随便带。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143283/from-south-to-north-in-japan/south/2/osaka-departure.jpg"
      caption="飞机离开了填海造的大阪关西国际机场，因此一下就飞向了大海。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143283/from-south-to-north-in-japan/south/2/bus.jpg"
      caption="到了冲绳那霸机场以后，除了机场直接上公交车去名护。图中显示的是让我十分懵逼的公交车计价方式。话说日本的公交车🚌是真的贵啊，不到 2 小时的路程，花了将近 100 元。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143282/from-south-to-north-in-japan/south/2/communist-party.jpg"
      caption="坐公交的途中看到的，没啥别的意思，啥别的意思也没有，咱啥也不敢说，啥也不敢问。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143282/from-south-to-north-in-japan/south/2/ocean.jpg"
      caption="去酒店的步行途中看到的大海。人生中终于第一次看到大海啦！"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143285/from-south-to-north-in-japan/south/2/bridge.jpg"
      caption="太太的背影。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143283/from-south-to-north-in-japan/south/2/stone-lion.jpg"
      caption="小石狮子。除了“石敢当”以外，另一个冲绳随处可见的小东东。"
    />

    <article-figure
      src="https://res.cloudinary.com/dtlqq6eze/image/upload/v1599143282/from-south-to-north-in-japan/south/2/hotel.jpg"
      caption="饥肠辘辘地走了一路，终于到达了山上的酒店。从地图上实在是没看出来这酒店所在的位置有这么偏僻。"
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
