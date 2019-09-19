<template>
  <div class="container-foodmenu">
    <Header/>
    <div class="title">
      <div class="long"><img src="../assets/sectionmark_along.svg"><div class="long-line"><p>食品メニュー</p></div></div>
    </div>

    <div class="page-desc">
      <p>開成祭で行われる食品販売のメニューを確認できます。模擬店、喫茶については赤いボタンをクリックすると詳しいメニューが見られます。</p>
    </div>

    <nuxt-link to="booth"><div class="buttons">模擬店</div></nuxt-link>
    <div class="menu-desc">　開成祭名物「開成焼き」や海鮮チヂミ、ドリンク、かき氷を販売しています。<br>運営：文化祭準備委員会模擬店係</div>

    <nuxt-link to="cafe"><div class="buttons">喫茶 "令和"</div></nuxt-link>
    <div class="menu-desc">　落ち着いた空間を。開成祭で本格的な喫茶店を楽しめます。Mr. & Ms.開成候補がウェイターとして働いています。<br>運営：文化祭準備委員会喫茶係</div>

    <div class="buttons">古本喫茶</div>
    <div class="menu-desc">古本と古本と喫茶がコラボしました。本を選びながらオリジナルドリンクをお楽しみいただけます。古本市にてお待ちしています。<br><strong>Menu</strong><br>全部 150円<br>アイスコーヒー<br>アイスティー<br>オレンジジュース<br><br>運営：文化祭準備委員会喫茶係・古本係</div>

    <div class="buttons">東洋食品サービス</div>
    <div class="menu-desc">　毎日営業している学校の食堂が、出店販売を行います。販売されているものは全てパック包装のため、休憩所に持ち運んで食事することができます。<br>
      <strong>メニュー</strong><br>
      焼きそば　¥270<br>
      カレーライス　¥270<br>
      炒飯(唐揚げ付) ¥270<br>
      カツ丼　¥270<br>
      カツカレー　¥320<br>
      おにぎり(唐揚げ付) ¥320<br>
      フランクフルト　¥150<br>
      アメリカンドッグ　¥150<br>
      焼肉丼　¥270<br>
      ジュース各種　¥100〜130<br><br>
      販売場所:A会場1階 & B会場1階 中央階段横<br>
      運営： 学校食堂(東洋食品サービス)
    </div>


    <div class="buttons">ラスールリマーレ</div>
    <div class="menu-desc">　毎日開成で販売されているパンを文化祭で。様々な種類の美味しいパンを楽しむことができます。<br>
      <br><strong>メニュー</strong><br>
      カツサンド ¥600<br>
      ランチBOX ¥550<br>
      三角サンド ¥320<br>
      ロングウィンナー ¥300<br>
      シナモンロール ¥280<br>
      唐揚げドック ¥280<br>
      レモンデニッシュ ¥260<br>
      アップルパイ ¥250<br>
      チーズクーペ ¥250<br>
      ミネラルミルク ¥250<br>
      ベーコンエピ ¥250<br>
      チーズチーズ ¥250<br>
      チョリソーフランス ¥230<br>
      ベーコンチーズフランス ¥230<br>
      明太子フランス ¥230<br>
      ガーリックフランス ¥230<br>
      IQパン ¥220<br>
      メイプルプチケーキ ¥220<br>
      トルティーヤきのこ ¥220<br>
      バナナカップ ¥220 <br>チェロス ¥220<br>
      コーヒーあんぱん ¥200<br>
      とうもろこしカレーパン ¥200<br>
      スパイシーベーコンポテト ¥200<br>
      りんごぱん ¥180 コロネ ¥180<br>
      ジャムサンド ¥180<br>
      牛すじカレーパン ¥180<br>
      カレーパン ¥180<br>
      焼きそば・コロッケドック ¥170<br>
      レーズンシュガー ¥170<br>
      チーズドック ¥160<br>
      ピーナッツパン ¥150 <br>
      あんぱん・クリームパン ¥150<br>
      メロンパン ¥150 <br>
      コーンぱん ¥150<br>
      塩パン ¥130 ラスク ¥360 <br>
      コーヒーラスク ¥350 <br>
      メイプルスティックパイ ¥300<br>
      オリジナルクッキー ¥300 <br>
      マドレーヌ 2個入 ¥200<br>
      バナナブレット ¥750<br>
      バナナブレット 1/2 ¥380<br><br> 炭酸各種・アクエリアス ¥160<br> コーヒー・カフェラテ ¥160<br> お茶各種・いろはす ¥150 <br>森永ブリックパック ¥120<br><br>
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