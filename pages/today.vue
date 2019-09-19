<template>
  <div class="container-today">
    <Header/>
    <div class="title">
      <div class="long"><img src="../assets/sectionmark_along.svg"><div class="long-line"><p>当日について</p></div></div>
    </div>

    <div class="page-desc">
      <p>当日に関する、細かいながら重要な事柄をまとめました。</p>

        <p style="text-align: center">
        目次
        <br>待機列について
        <br>講演会について
        <br>模擬店について
        <br>中後夜祭について
        <br>Mr.&Ms.開成の投票について
        <br>バンドコンテストについて
        <br>参団グランプリの投票について<br>
        </p>
    </div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>開成祭開門前の待機列について</p></div>
    <div class="text">
      開成祭が始まる9時以前は、校内に立ち入ることはできません。<br>
      待機列は下図の☆印から、歩道橋側に向かって伸びていきます。最後尾は係員の指示を聞いてください。
    </div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>講演会について</p></div>
    <div class="text">
      本年度はホンダエアクラフトカンパニー社長兼CEO　本田技研工業(株)常務執行役員　藤野道格氏にお越しいただき、講演会を開催いたします。
      詳しくは　<nuxt-link to="/lecture">講演会の詳細ページ</nuxt-link>　をご覧ください。
      <br>【注意事項】
      <br>・チケット配布はA会場二階のチケット配布所にて行っています。
      <br>・無料で、席は指定席制です。
      <br>・講演会に参加される方は12時ごろからテニスコートに並んでいただくようお願いします。
      <br>・<strong>1日目の12時半</strong>から始まります！
    </div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>模擬店について</p></div>
    <div class="text">開成焼き、海鮮チーズチヂミの食券はテニスコート右の部室棟2階の券売機にて購入できます。券売機横の掲示板にて書かれた時間に中学中庭の引き換えに並んでいただき、商品を引き換えるようにお願いします。</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>中夜祭について</p></div>
    <div class="text">開成祭1日目16:30より、A会場2階本館ホールにて中夜祭を開催します。
      待機列の形成開始時刻は15:30からです。それ以前はお並び頂けません。
      <br><strong>企画</strong>
      <br>・バンド演奏
      <br>・特別パフォーマンス
      <br>・Ms.開成</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>後夜祭について</p></div>
    <div class="text">
      開成祭2日目15:20より、A会場2階本館ホールにて後夜祭を開催します。
      <br>待機列の形成開始時刻は14:20からです。それ以前はお並び頂けません。
      <br><strong>企画</strong>
      <br>・バンド演奏
      <br>・特別パフォーマンス
      <br>・Mr.開成</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>Mr.開成、Ms.開成の投票について</p></div>
    <div class="text">
      写真による投票の結果、中後夜祭での投票の結果を合算して最終的に決定します。
      <br>Ms.開成
      <br>写真による投票は、1日目15時まで、A会場2階本館ホール前にて受け付けています。また、中夜祭の企画終了後、観客の皆様に投票していただき、写真による投票と合算して決定いたします。
      <br>Ms.開成は1日目に決定します。
      <br>
      <br>Mr.開成
      <br>写真による投票は、1日目は17時まで、2日目は14:30まで、A会場2階本館ホール前にて受け付けています。また、後夜祭の企画終了後、観客の皆様に投票していただき、写真による投票の結果と合算して決定いたします。
      <br>Mr.開成は2日目に決定します。</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>バンドコンテストについて</p></div>
    <div class="text"><strong>開催日時・場所</strong>
      <br>2日目 12:20〜13:50
      <br>@本館ホール
      <br>演奏順
      <br>1.横恋慕
      <br>2.ドラニクル5
      <br>3.Peaslaves
      <br>4.時に少年は嘘をつく
      <br>5.リストラ回避
      <br>
      <br>事前に行われたオーディションで見事コンテスト出場権を獲得した上位5バンドによる演奏勝負！
      <br>観客の皆さんの投票で2日目後夜祭の出演バンドが決まります！
      <br>
      <br><strong>投票の注意点</strong>
      <br>途中入退場でも投票することが出来ます！
      <br>ただし、投票のみのご参加はできませんので予めご了承ください。</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>参団グランプリの投票について</p></div>
    <div class="text">
      <br>・開成祭では、お客様による投票で最も楽しんでいただけた参団を決める「参団グランプリ」を行っています。印象に残った、面白かったという参団にご投票ください。
      <br>・パンフレットに投票用のシールが挟まっています。A会場1階の休憩所前、又は中学視聴覚室前にある投票場所に貼ってください。</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p></p></div>
    <div class="text"></div>


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
    color: #0096AE
  }

  .container-today {
    padding: 0px 15px 30px;
    background-color: #EFEDE1;
    color: #21282F;
  }

  .title {
    color: #21282F;
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
    border-bottom: #0096AE 2px solid;
  }
  .long-line >p{
    position: relative;
    left: 7px;
  }
  .p-alone{
    position: relative;
    left: 5px;
    padding-top: 10px;
    padding-bottom: 5px;
  }
  .p-alone{
    font-weight: bold;
    font-size: 19px;
    display: flex;
    flex-direction: row;
  }
  .p-alone >p{
    position: relative;
    left: 7px;
  }
  .text{
    color: #21282F;
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