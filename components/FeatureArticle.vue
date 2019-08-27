<template>
  <div class="container">
    <div class="thumbnail">

    </div>
    <div class="info">
      <div class="date">{{date}}</div>
      <div class="title">{{title}}</div>
      <div class="category" v-if="ispro">プロフェッショナル編</div>
      <div class="category" v-else>文化祭準備編</div>
    </div>
  </div>
</template>

<script>
    import Logo from '~/assets/mister_fujino.jpg'

    export default {
        name: "featureArticle",
        components: {
            Logo,
        },
        data() {
            return {
                date: "2019/08/25",
                title: "睡魔との戦い-睡眠研究会",
                ispro: true
            }
        }
    }
</script>

<style scoped>
  .container {
    position: absolute;
    top: 10px;
    left: 15px;
  }

  .thumbnail {
    position: absolute;
    width: 345px;
    height: 150px;

    background: #C4C4C4;
    border-radius: 10px 10px 0px 0px;
  }

  .info {
    position: absolute;
    width: 345px;
    height: 70px;
    top: 150px;

    /* white */
    background: #F8F9FA;
    border-radius: 0px 0px 10px 10px;


    font-family: Noto Sans JP;
    font-style: normal;
    font-weight: bold;

    display: flex;
    align-items: center;

    color: #000000;
  }

  .date {
    position: absolute;
    left: 10px;
    top: 5px;

    font-size: 12px;
    line-height: 17px;
  }

  .title {
    position: absolute;
    left: 10px;
    top: 22px;

    font-size: 18px;
    line-height: 26px;
  }

  .category {
    position: absolute;
    left: 10px;
    top: 48px;

    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
  }
</style>