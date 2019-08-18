<template>
  <div class="container">
    <div clsss="containerX">
      <div class="titlebar">
        <p>講演会企画</p>
      </div>
    </div>
    <div clsss="containerY">
      <div class="description">
        <p>革新的ホンダジェットを成功させる技術力とリーダーシップ</p>
      </div>
    </div>
    <div class="containerA">
      <img src="../assets/mister_fujino.jpg" class="fujinosan"></img>
    </div>
    <div class="containerC">
      <div class="section">
        略歴
      </div>
      <div class="text">
        <p>1960年生。東京大学工学部航空学科卒業。工学博士。</p>
        <p>本田技研入社後、航空機の研究に携わり、主翼上面エンジン配置形態など様々な最先端技術を生み出し、世界的ベストセラーとなる小型ビジネスジェット機「HondaJet」を開発。</p>
        <p>革新的な航空機開発により、日本人として初めて米国航空宇宙学会より “Aircraft Design Award”、SAEインターナショナルより “ケリー・ジョンソン賞”を受賞。また 国際航空科学会議（ICAS）より”ジューコフスキー賞”も受賞。この３賞を同時に受賞した世界初の航空機設計者となった。米国での航空宇宙産業への貢献が認められ、イーロン・マスクやジェフ・ペゾスなどが受賞した”Living Legend of Aviation”を受賞し、殿堂入りも果たした。米国工学アカデミー会員にも選出される。</p>
        <p>日本においても日本産業技術大賞(内閣総理大臣賞)などを受賞するとともに、インダストリアル・デザイン分野においても高い評価を受け、グッドデザイン賞金賞、JIDAデザインミュージアムセレクションなどを受賞、現在は航空機のほか、腕時計など幅広い分野のデザインも手掛け、多方面で活躍している。</p>
      </div>
    </div>
    <div class="containerB">
      <div class="section">
        日時
      </div>
      <div class="important">
        <p>Day1 9月21日昼</p>
      </div>
      <div class="text">
        <p>【時刻】開場12時30分・開演12時40分</p>
        <p>【会場】小講堂</p>
        <p>【集合】B会場2階テニスコート</p>
      </div>
    </div>
    <div class="containerD">
      <div class="section">
        諸注意
      </div>
      <div class="text">
        <p>ご入場には指定席券が必要です。21日の9:00よりA会場のチケット配布所にて配布致します。先着順ですのでなくなり次第終了となります。キャンセル待ちは行いません。</p>
        <p>集合場所はB会場2階テニスコート（詳しくはパンフレットの地図を御覧ください）です。開演五分前には必ずお越しください。1階からの入場は出来ませんのでご注意ください。</p>
        <p>集合場所では混雑が予想されますので、係の生徒の誘導に従ってお並びください。</p>
        <p>公演中の入退場はご遠慮ください。</p>
        <p>ご不明な点などございましたら、お気軽に係の生徒にお声をおかけください。</p>
        </div>
      </div>
  </div>
</template>
<style>
.container{
  background-color: #EFEDE1;
}
@media screen and (max-width:768px) {
.titlebar{
    background-color: #C32121;
    color: #FFFFFF;
    padding: 10px 10px;
    margin: 0px 0px 10px 0px;
    font-size: 36pt;
    font-family: "A-OTF Midashi Go MB31 Pr6N", Sans-Serif;
}
.description{
    background-color: #4277BF;
    color: #FFFFFF;
    padding: 10px 10px;
    font-family: "A-OTF Midashi Go MB31 Pr6N", Sans-Serif;
    margin: 0px 0px 10px 0px;
    font-size: 20pt;
}
img.fujinosan{
    width: 80%;
    border-right: solid 5px #000000; 
}
.section{
    background-color: #4277BF;
    padding: 10px 15px;
    color: #FFFFFF;
    margin: 10px 50px 10px 0px;
    border-radius: 0px 10px 10px 0px;
    font-size: 18pt;
}
.text{
    color: #000000;
    padding: 15px;
}
.important{
    font-size: 28pt;
    color: #000000;
    font-family: "A-OTF Midashi Go MB31 Pr6N", Sans-Serif;
    padding: 10px 30px;
}
}
@media screen and (min-width:768px) {
.container{
  display: grid;
  grid-template-columns: 40% 30% 30%;
  grid-template-rows: 10% 30% 60%;
}
.containerX{
  grid-row: 1;
  grid-column: 1/2;
}
.containerY{
  grid-row: 1;
  grid-column: 2/4;
}
.containerA{
  grid-row: 2/4;
  grid-column: 1;
}
.containerB{
  grid-row: 2;
  grid-column: 2/4;
}
.containerC{
  grid-row: 3;
  grid-column: 2;
}
.containerD{
  grid-row: 3;
  grid-column: 3;
}
.titlebar{
    background-color: #C32121;
    color: #FFFFFF;
    padding: 10px 10px;
    margin: 0px 0px 10px 0px;
    font-size: 36pt;
    font-family: "A-OTF Midashi Go MB31 Pr6N", Sans-Serif;
}
.description{
    background-color: #4277BF;
    color: #FFFFFF;
    padding: 10px 10px;
    font-family: "A-OTF Midashi Go MB31 Pr6N", Sans-Serif;
    margin: 0px 0px 10px 0px;
    font-size: 20pt;
}
img.fujinosan{
    width: 97%;
    margin: 30px auto;
    border-right: solid 5px #000000; 
}
.section{
    background-color: #4277BF;
    padding: 10px 15px;
    color: #FFFFFF;
    border-radius: 0px 10px 10px 0px;
    margin: 10px;
    font-size: 18pt;
}
.text{
    color: #000000;
    padding: 8pt;
}
.important{
    font-size: 24pt;
    color: #000000;
    font-family: "A-OTF Midashi Go MB31 Pr6N", Sans-Serif;
    padding: 10px 30px;
}
}
</style>