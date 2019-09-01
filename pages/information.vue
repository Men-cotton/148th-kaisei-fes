<template>
<div class="container-info">
  <Header></Header>
  <div class="containerH1">
    <div class="along"><img src="../assets/sectionmark_along.svg"><div class="along-line"><p>来場時ご案内</p></div></div>
  </div>
  <div class="containerT1">
    <div class="alone"><img src="../assets/sectionmark_alone.svg"><p>アクセス</p></div>
    <div class="text">
      <p>山手線・京浜東北線 西日暮里駅から徒歩1分。</p>
      <p>開成学園校舎の建て替え工事の影響で、現在正門をご使用いただくことができません。お越しのお客様はお手数ですが、西門(正門を通り過ぎて右折したところ)までお回りください。もし、列の最後尾がわからないなどの事がございましたら、赤いTシャツを着た文化祭準備委員にお尋ねください。</p>
      <p>現在西日暮里駅が工事中のため駅の出口付近が一部通行止めとなっている箇所がございます。ご注意ください。</p>
    </div>
  </div>
  <div class="containerH2">
    <div class="along"><img src="../assets/sectionmark_along.svg"><div class="along-line"><p>ご注意</p></div></div>
  </div>
  <div class="containerT2">
    <div class="alone"><img src="../assets/sectionmark_alone.svg"><p>ベビーカーをお持ちのお客様へ</p></div>
    <div class="text">
      <p>校門を入ってすぐのA会場インフォメーションセンターにてベビーカー預かりサービスを実施しています。ベビーカーを持ちながら会場内を回るのは大変かと思われますので、ぜひご利用ください。</p>
      <p>また、授乳をしたいという方は赤いTシャツを着た文化祭委員にお声がけください。ご案内いたします。また、オムツ替えの場所についてはトイレをご利用ください。</p>
    </div>
    <div class="alone"><img src="../assets/sectionmark_alone.svg"><p>小さなお子様をお連れのお客様へ</p></div>
    <div class="text">
      <p>小さなお子様でも楽しめるような参団をピックアップしてまとめたリストを、A会場インフォメーションセンターまたはB会場インフォメーションセンターにてお配りしておりますので、ぜひご利用ください。</p>
    </div>
    <div class="alone"><img src="../assets/sectionmark_alone.svg"><p>道に迷ったら赤い文化祭Tシャツを着た人へ！</p></div>
    <div class="text">
      <p>道に迷ってしまったときや道がわからないときは、近くの赤い文化祭Tシャツ（下図参照）を着ている者にお気軽にお申し付けください。目的地までご案内いたします。</p>
    </div>
    <div class="alone"><img src="../assets/sectionmark_alone.svg"><p>休憩所のご利用について</p></div>
    <div class="text">
      <p>休憩所はパンフレットに記載された場所にございます。昼食を食べたい時や少し休みたい時にご利用ください。ただ、席には限りがございますので、他のお客様と譲り合ってご利用いただくことよろしくお願いいたします。</p>
    </div>
    <div class="alone"><img src="../assets/sectionmark_alone.svg"><p>お客様全員が楽しめる開成祭にするために</p></div>
    <div class="text">
      <p>お客様全員にマナーを守っていただくことにより、お客様全員に開成祭を楽しんでいただけると考えております。
        マナーはしっかりと守り、他のお客様のご迷惑になるような行動はおやめください。マナー違反や迷惑行為をしているのではないかと思われるときは文化祭準備委員が声をかけさせていただくことがございますので ご了承ください。</p>
    </div>
  </div>
  <div class="containerH3">
    <div class="along"><img src="../assets/sectionmark_along.svg"><div class="along-line"><p>安全のために</p></div></div>
  </div>
  <div class="containerT3">
    <div class="alone"><img src="../assets/sectionmark_alone.svg"><p>ベビーカーをお持ちのお客様へ</p></div>
    <div class="text">
      <p>校門を入ってすぐのA会場インフォメーションセンターにてベビーカー預かりサービスを実施しています。ベビーカーを持ちながら会場内を回るのは大変かと思われますので、ぜひご利用ください。</p>
      <p>また、授乳をしたいという方は赤いTシャツを着た文化祭委員にお声がけください。ご案内いたします。また、オムツ替えの場所についてはトイレをご利用ください。</p>
    </div>
  </div>
  </div>
</template>
<script>
  import Header from '~/components/Myheader.vue'
  export default {
    components: {
      Header
    },
  }
</script>
<style>
  .along{
    border-left-style: revert;
    position: relative;
    font-size: 32px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    padding:  10px 0;

  }

  .along-line{
    width: 100%;
    border-bottom: #CCBD14 2px solid;
  }
  .alone{
    font-weight: bold;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .alone >p{
    position: relative;
    left: 7px;
  }
  .container-info {
    padding-top: ;
    background-color: #411445;
    color: #FFFFFF;
  }
@media screen and (max-width:960px) {
  .container-info{
    padding-top: 100px;
  }
  .containerH1{
  margin-top: 60px;
  }
  .container-info{
    padding: 10px 15px 30px;
  }
  .along{
    padding-top: 7px;
  }
  .along-line >p{
       position: relative;
       left: 7px;
       top: 2px;
     }
  .alone{
    position: relative;
    left: 5px;
  }
  .text{
    font-size: 15px;
    margin: 0px 5px 5px 5px;
  }

}
@media screen and (min-width:960px) {
  .container-info{
    padding: 65px 0 0;
    display: grid;
    grid-template-columns: 28% 72%;
    grid-template-rows: auto auto auto;
  }
  .containerH1 ,.containerH2 ,.containerH3{
    text-align: center;
    background-color: #912A55;

  }
  .containerT1 ,.containerT2 ,.containerT3{
    padding: 0 10px;
  }
  .containerH1{
    padding: 14px 0px 10px;
    grid-row: 1;
    grid-column: 1;
  }
  .containerT1{
    padding: 17px 10px 10px;
    grid-row: 1;
    grid-column: 2;
    position: relative;
  }
  .containerH2{
    padding: 14px 0px 10px;
    grid-row: 2;
    grid-column: 1;
  }
  .containerT2{
    padding: 17px 10px 30px;
    grid-row: 2;
    grid-column: 2;
  }
  .containerH3{
    padding: 14px 0 30px;
    grid-row: 3;
    grid-column: 1;

  }
  .containerT3{
    padding: 17px 10px 30px;
    grid-row: 3;
    grid-column: 2;
  }
  .text{
    font-size: 16px;
  }
  .along-line{
    border: none;
  }
  .along >img{
    display: none;
  }
}
</style>