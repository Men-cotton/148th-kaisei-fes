<template>
  <div class="container-foodmenu">
    <Header/>
    <div class="title">
      <div class="long"><img src="../assets/sectionmark_along.svg"><div class="long-line"><p>当日について</p></div></div>
    </div>

    <div class="page-desc">
      <p>当日の各企画の注意点をまとめたページです。ご来場前にご覧ください。</p>
    </div>

    <div class="buttons">模擬店</div>
    <div class="menu-desc">　開成祭名物「開成焼き」や海鮮チヂミ、ドリンク、かき氷を販売しています。<br>運営：文化祭準備委員会模擬店係</div>
    <div class="buttons">喫茶 "令和"</div>
    <div class="menu-desc">　落ち着いた空間を。開成祭で本格的な喫茶店を楽しめます。Mr. & Ms.開成候補がウェイターとして働いています。<br>運営：文化祭準備委員会喫茶係</div>
    <div class="buttons">東洋食品サービス</div>
    <div class="menu-desc">　毎日営業している学校の食堂が、出店販売を行います。販売されているものは全てパック包装のため、休憩所に持ち運んで食事することができます。<br>
      販売場所:A会場1階 & B会場1階 中央階段横<br>
      運営： 学校食堂(東洋食品サービス)</div>
    <div class="buttons">ラスールリマーレ</div>
    <div class="menu-desc">　毎日開成で販売されているパンを文化祭で。様々な種類の美味しいパンを楽しむことができます。<br>
      販売場所:B会場1階 入り口付近<br>
      運営：ラ・スール・リマーレ</div>
  </div>
</template>

<script>
    import Header from '~/components/Myheader.vue'
    import Logo from '~/assets/mister_fujino.jpg'
    import Article from '~/components/FeatureArticle.vue'

    export default {
      components: {
        Header
      },
    }
</script>

<style scoped>
  a {
    color: #ccbd14
  }

  .container-foodmenu {
    padding: 0px 15px 30px;
    background-color: #411445;
    color: white;
  }

  .title {
    color: white;
    font-size: 32px;
    font-weight: bold;
    padding: 110px 0px 40px;
  }
  .long{
    border-left-style: revert;
    position: relative;
    font-size: 32px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    padding:  10px 0;
  }
  .long-line{
    width: 100%;
    border-bottom: #CCBD14 2px solid;
  }
  .long-line >p{
    position: relative;
    left: 7px;
  }

  .buttons{
    margin: 5px 0;
  }
  .menu-desc{
    margin: 0 5px 35px;
    padding: 20px 10px;
    background: rgba(226, 226, 226, 0.3);
    border: rgba(226, 226, 226, 0.3) double;
  }


</style>