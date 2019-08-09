<template>
  <div class="container">
      <div class="title">
        <p>タイムテーブル</p>
      </div>
      <div>
        <p>開成祭のタイムテーブル一覧です。時間限定で行う企画はすべてここに載っています。
          使い方・見方
          ・縦軸が時間です。
          ・１日目、２日目をタップすると日にち毎のタイムテーブルを切り替えられます。
          今表示されているのは小講堂ですが、この列を横にスクロールすると別の場所が出てきます。
          小講堂・本館ホール・中学視聴覚室・柔道場・第２グラウンド
        </p>
        <p>場所一覧
          小講堂・本館ホール・中学視聴覚室・柔道場・第２グラウンド
        </p>
      </div>
      <div class="timetable-container">
        <div class="day-select">
          <div class="day day1 selected"><p>1日目</p></div>
          <div class="day day2"><p>2日目</p></div>
        </div>
        <div class="place">
            <div class="place-p selected">小講堂</div>
            <div class="place-p">本館ホール</div>
            <div class="place-p">中学視聴覚室</div>
            <div class="place-p">柔道場</div>
            <div class="place-p">第２グラウンド</div>
        </div>
        <div class="grid-container">
          <div class="time nine">９</div>
          <div class="time ten">10</div>
          <div class="time eleven">11</div>
          <div class="time twelve">12</div>
          <div class="time thirteen">13</div>
          <div class="time fourteen">14</div>
          <div class="time fifteen">15</div>
          <div class="time sixteen">16</div>

            <div class="group1">開成管弦楽団 文化祭演奏会</div>
            <div class="group1-start">9:00</div>
            <div class="name"></div>
            <div class="endingtime">11:00</div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
  .container{
    padding: 0px 15px;
    background-color: #3F0E47;
    color: white;


  }
  .title{
    color: white;
    font-size: 32px;
    padding: 80px 0px;
  }
  .timetable-container{
      

  }
  .selected{
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-bottom:3px solid #912A55;
      color: #411445;
  }
  .day-select{
    display: flex;
    flex-direction: row;
    font-size: 18px;
  }
  .day1{
    border-radius: 10px 0px 0px 0px;
  }
  .day2{
      border-radius: 0px 10px 0px 0px;
  }
  .day{
    width: 50%;
    height: 40px;
    color: #7f7d7d;
    background: #EAEFF2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .place{
    height: 40px;
    display: grid;
    overflow-x: scroll;
    grid-template-columns: 160px 160px 160px 160px 160px;
  }
  .place-p{
    color: #411445;
    background: #EAEFF2;
    border-top: 0.5px solid #000000;
    border-left: 0.5px solid #000000;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid-container{
    background: rgba(221, 226, 229, 0.6);;
    width: 100%;
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 40px 15px 50px auto 15px;
    grid-template-rows: repeat(32, 32.5px);
    grid-auto-flow: column;
  }
  .time{
      background: #912A55;
      border-bottom: 0.5px solid #ffffff;
      grid-row:span 4;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  /*1日目小講堂*/
  .group1{
      font-size: 20px;
      color: #000000;
      padding: 5px;
      grid-column: 3/5;
      grid-row: 2/9;
      background: #F8F9FA;
      border: 1px solid #CCBD14;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .group1-start{
      color: black;
      grid-column: 3/4;
      grid-row: 2/3;
      display: flex;
      align-items: center;
      justify-content: center;

  }

</style>
