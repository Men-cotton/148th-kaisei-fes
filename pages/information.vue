<template>
<div class="container">
  <div class="containerH1">
    <div class="header1">来場時のご案内</div>
  </div>
  <div class="containerT1">
    <div class="header2">アクセス</div>
    <div class="text">
      <p>山手線・京浜東北線 西日暮里駅から徒歩1分</p>
      <p>開成学園校舎の建て替え工事の影響で、現在正門をご使用いただくことができません。お越しのお客様はお手数ですが、西門(正門を通り過ぎて右折したところ)までお回りください。もし、列の最後尾がわからないなどの事がございましたら、赤いTシャツを着た文化祭準備委員にお尋ねください。</p>
      <p>現在西日暮里駅が工事中のため駅の出口付近が一部通行止めとなっている箇所がございます。ご注意ください。</p>
    </div>
  </div>
  <div class="containerH2">
    <div class="header1">ご注意</div>
  </div>
  <div class="containerT2">
    <div class="header2">ベビーカーをお持ちのお客様へ</div>
    <div class="text">
      校門を入ってすぐのA会場受付にてベビーカー預かりサービスを実施しています。ベビーカーを持ちながら会場内を回るのは大変かと思われますので、このサービスをぜひご利用ください。 　また、授乳をしたいという方は赤いTシャツを着た文化祭委員にお声がけください。そうしていただければご案内することができます。また、オムツ替えについては衛生面と安全面の問題上、トイレでしていただくことをお願いいたします。
    </div>
    <div class="header2"小さなお子様をお連れのお客様へ></div>
    <div class="text">
      小さなお子様でも楽しめるような参団をピックアップしてまとめたリストをA会場受付またはB会場受付にてお配りしておりますので、ぜひご利用ください。
    </div>
    <div class="header2">道に迷ったら 赤い文化祭Tシャツを着た人へ！</div>
    <div class="text">
      道に迷ってしまったときや、道案内をしてもらいたいときは下図のイラスト１のような近くの赤い文化祭Tシャツを着ている者にお気軽にお申し付けください。目的地までご案内いたします。
    </div>
    <div class="header2">休憩所のご利用について</div>
    <div class="text">
      休憩所はパンフレットに記載された場所にございます。昼食を食べたい時や少し休みたい時にご利用ください。ただ、席には限りがございますので、他のお客様と譲り合ってご利用いただくことよろしくお願いいたします。
    </div>
    <div class="header2">お客様全員が楽しめる開成祭にするために</div>
    <div class="text">
      お客様全員にマナーを守っていただくことにより、お客様全員が開成祭を楽しんでいただけると考えております。マナーはしっかりと守り、他のお客様のご迷惑になるような行動はおやめください。マナー違反や迷惑行為をしているのではないかと思われるときは文化祭準備委員がお声がけさせていただくことがございますのでご了承ください。
    </div>
  </div>
</div>
</template>
<style>
.container{
  background-color: #411445;
  color: #FFFFFF;
  padding: 30px;
}
@media screen and (max-width:768px) {
  .header1{
    font-size: 36pt;
    font-family: "A-OTF Midashi Go MB31 Pr6N", Sans-Serif;
    margin: 0px 15px -10px 15px;
  }
  .header2{
    font-size: 16pt;
    font-family: "A-OTF Midashi Go MB31 Pr6N", Sans-Serif;
    margin: 10px 15px 0px 15px;
  }
  .text{
    margin: 0px 15px 5px 15px;
  }
}
@media screen and (min-width:768px) {
  .container{
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 30% auto;
  }
  .containerH1{
    grid-row: 1;
    grid-column: 1;
  }
  .containerT1{
    grid-row: 1;
    grid-column: 2;
  }
  .containerH2{
    grid-row: 2;
    grid-column: 1;
  }
  .containerT2{
    grid-row: 2;
    grid-column: 2;
  }
  .header1{
    text-align: center;
    font-size: 20pt;
    font-family: "A-OTF Midashi Go MB31 Pr6N", Sans-Serif;
  }
  .header2{
    font-size: 16pt;
    font-family: "A-OTF Midashi Go MB31 Pr6N", Sans-Serif;
    margin: 5px 15px 5px 15px;
  }
  .text{
    margin: 0px 15px 5px 15px;
  }
}
</style>