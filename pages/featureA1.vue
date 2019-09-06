<template>
  <div class="container-feature">
    <Header/>
    <div class="ft-title">
      アーケードリズムゲーム<br>『LUXY（ルクシー）』紹介
    </div>
    <div class="ft-subtitle"></div>
    <p class="ft-text">
      物理部では高1の部員数人でゲームセンターにあるような本格的なリズムゲームを一から作りました。ここでは我々が夏休みに行った作業について紹介します。
      作業は大きく分けて、1.筐体作成 2.ハードウェア作成 3.ソフトウェア作成 4.譜面作成の四つです。
    </p>
    <div class="ft-text">
      1.筐体とは、ゲームを搭載する台のことです。<br>MDF（木の板）や角材をホームセンターで調達し、ノコギリなどで加工する。<br>・シーラー、ラッカーを用いて塗装する。<br>・木ネジで木材同士を固定して組み立てる<br><br>というのが主な作業工程です。
    <img src="../assets/feature-article/image01.jpg">
    <p class="ft-thumb">制作過程1</p>
    <img src="../assets/feature-article/image02.jpg">
    <p class="ft-thumb">制作過程2</p>
    <img src="../assets/feature-article/image03.jpg">
    <p class="ft-thumb">制作過程3</p>
    <img src="../assets/feature-article/image04.jpg">
    <p class="ft-thumb">制作過程4</p>
    </div>

    <div class="ft-text">
      2.ハードウェアは、パネルからの入力をPCに伝え、ソフトウェアで処理された出力を表示します。
      LUXYはディスプレイを直接触って操作するゲームなので、入力と出力は同じ場所で行います。そのため、ディスプレイに外付けのパネルをつけたものを使用しています。（ディスプレイやパネルは通販で購入しました。）また、音響関連のスピーカーやアンプもハードウェアです。
    </div>
    <div class="ft-text">
      3.ソフトウェアは、リズムゲームのシステムやグラフィックを司り、パネルからの入力を処理します。以下はソフトウェアの機能の一部です。
      <br>・4.で作られた譜面を流す。
      <br>・判定ラインにおいて、ノーツを叩いたタイミングが早いか遅いかの判定。
      <br>・スコアの計算。
    <img src="../assets/feature-article/image05.jpg">
    <p class="ft-thumb">プレイ画面</p>
  </div>

    <p class="ft-text">
      4.譜面とは、音楽に合わせて流れてくるノーツの集合体です。ノーツにも、判定ラインに重なる時に叩くもの、弾くもの、長押しするものなど、何種類かあります。
      譜面は自作した専用のソフトを用いて作成しました。
    </p>
    <p class="ft-text">
    文化祭が終わってもアプリ版の実装など、LUXYの活動は終わりませんので、最新情報は<a href="https://twitter.com/KPC_otoge"> Twitter(@KPC_otoge_)</a>でご確認ください。
    </p>

    <div class="ft-subtitle">

    </div>
  </div>
</template>

<script>
    import Header from '~/components/Myheader.vue'
    import Article from '~/components/FeatureArticle.vue'

    export default {
      head: {
        script: [{
          innerHTML: `{
  "name": "Pick Up! 文化祭① -148th開成祭",
  "description": "アーケードリズムゲーム 『LUXY（ルクシー）』 紹介",
  'og:type': 'website',
  'og:url': 'https://kaisei-fes.com',
  'og:title': 'Pick Up! 文化祭① -148th開成祭',
        'og:description': 'アーケードリズムゲーム 『LUXY（ルクシー）』 紹介   2019/9/21(土),22(日)開催　148th開成祭',
        }`,
        }],
      },

        name: "feature",
        components: {
            Article,
          Header
        },
        data() {

            return {
                message: "Hello"
            }
        }
    }
</script>

<style scoped>
  a:link {
    text-decoration: none;
  }

  .container-feature {
    padding: 0px 15px 30px;
    background-color: #411445;
    color: white;
  }
  .head-thumbnail >img{
    width: 100%;
    object-fit: cover;
  }

  .ft-title {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
    padding: 140px 0px 60px;
  }

  .ft-text{
    padding: 30px 5px;
    line-height: 1.7;
    letter-spacing: 0.05em;
    justify-content: center;

  }
  .ft-text >img {
    width: 80%;
    margin: 10px auto;
    display: flex;

  }
  .ft-thumb{
    font-size: 13px;
    text-align: center;
    margin: 20px auto;
  }

</style>