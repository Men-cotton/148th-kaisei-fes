<template>
  <div class="container-feature">
    <Header/>
    <div class="title">
      <div class="long"><img src="../assets/sectionmark_along.svg"><div class="long-line"><p>食品メニュー</p></div></div>
    </div>

    <div class="page-desc">
      <p>開成祭で行われる食品販売のメニューを確認できます。喫茶、</p>
    </div>

    <n-link to="booth"><div class="buttons">模擬店</div></n-link>
    <div class="menu-desc">開成祭名物「開成焼き」や海鮮チヂミ、ドリンク、かき氷を販売しています。<br>運営：文化祭準備委員会模擬店係</div>
    <div class="buttons">喫茶 "令和"</div>
    <div class="menu-desc">落ち着いた空間を。開成祭で本格的な喫茶店を楽しめます。Mr. & Ms.開成候補がウェイターとして働いています。<br>運営：文化祭準備委員会喫茶係</div>
    <div class="buttons">東洋食品サービス</div>
    <div class="menu-desc">学校食堂<br>運営：学校食堂</div>
    <div class="buttons">ラスールリマーレ</div>
    <div class="menu-desc">　毎日開成で販売されているパンを文化祭で。様々な種類の美味しいパンを楽しむことができます。<br>運営：ラ・スール・リマーレ</div>
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

  .container-feature {
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
    margin: 10px 0;
  }
  .menu-desc{
    margin: 0 5px;
    padding: 20px 10px;
    background: rgba(226, 226, 226, 0.6);
  }


</style>