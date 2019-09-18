<template>
  <div class="container-foodmenu">
    <Header/>
    <div class="title">
      <div class="long"><img src="../assets/sectionmark_along.svg"><div class="long-line"><p>当日について</p></div></div>
    </div>

    <div class="page-desc">
      <p>当日に関する、細かいながら重要な事柄をまとめました。ご来場前にご覧ください。</p>
    </div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>開成祭開門前の待機列について</p></div>
    <div class="text"></div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>講演会について</p></div>
    <div class="text">
      本年度は藤野社長「革新的ホンダジェットを成功させる技術力とリーダーシップ」にお越しいただき、講演会を開催いたします。
      詳しくは<nuxt-link to="lecture">講演会の詳細</nuxt-link>のページをご覧ください。
      注意事項
      ・チケット配布はA会場二階のチケット配布所にて行っています。
      無料で、席は指定席制です。
      12時ごろからテニスコートに並んでいただければと思います。
      ・一日目の12時半からであることを強調しておいてください。
      それと、添付ファイルも同時に掲載していただけませんか?</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>模擬店について</p></div>
    <div class="text">開成焼き、海鮮チーズチヂミの食券はテニスコート右の部室棟2階の券売機にて購入できます。券売機横の掲示板にて書かれた時間に中学中庭の引き換えに並んでいただき、商品を引き換えるようにお願いします。</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>中夜祭について</p></div>
    <div class="text">開成祭1日目16:20より、A会場2階本館ホールにて後夜祭を開催します。
      待機列の形成開始時刻は15:20からです。それ以前はお並び頂けません。
      企画
      ・バンド演奏
      ・特別パフォーマンス
      ・Ms.開成</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>後夜祭について</p></div>
    <div class="text">開成祭2日目15:20より、A会場2階本館ホールにて後夜祭を開催します。
      待機列の形成開始時刻は14:20からです。それ以前はお並び頂けません。
      企画
      ・バンド演奏
      ・特別パフォーマンス
      ・Mr.開成</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>Mr.開成、Ms.開成の投票について</p></div>
    <div class="text">写真による投票の結果、中後夜祭での投票の結果を合算して最終的に決定します。
      Ms.開成
      写真による投票は、1日目15時まで、A会場2階本館ホール前にて受け付けています。また、中夜祭の企画終了後、観客の皆様に投票していただき、写真による投票と合算して決定いたします。
      Ms.開成は1日目に決定します。

      Mr.開成
      写真による投票は、1日目は17時まで、2日目は14:30まで、A会場2階本館ホール前にて受け付けています。また、後夜祭の企画終了後、観客の皆様に投票していただき、写真による投票の結果と合算して決定いたします。
      Mr.開成は2日目に決定します。</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>バンドコンテストについて</p></div>
    <div class="text">開催日時・場所
      2日目 12:20〜13:50
      @本館ホール
      演奏順
      1.横恋慕
      2.ドラニクル5
      3.Peaslaves
      4.時に少年は嘘をつく
      5.リストラ回避

      事前に行われたオーディションで見事コンテスト出場権を獲得した上位5バンドによる演奏勝負！
      観客の皆さんの投票で2日目後夜祭の出演バンドが決まります！

      投票の注意点
      途中入退場でも投票することが出来ます！
      ただし、投票のみのご参加はできませんので予めご了承ください。</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p>参団グランプリの投票について</p></div>
    <div class="text">・開成祭では、お客様による投票で最も楽しんでいただけた参団を決める「参団グランプリ」を行っています。印象に残った、面白かったという参団にご投票ください。
      ・パンフレットに投票用のシールが挟まっています。A会場1階の休憩所前、又は中学視聴覚室前にある投票場所に貼ってください。</div>

    <div class="p-alone"><img src="../assets/sectionmark_alone.svg"><p></p></div>
    <div class="text"></div>


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
  .p-alone{
    position: relative;
    left: 5px;
    padding-top: 10px;
    padding-bottom: 5px;
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