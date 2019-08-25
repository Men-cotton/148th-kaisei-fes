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
      </p>
      <p>場所一覧
        小講堂・本館ホール・中学視聴覚室・柔道場・第２グラウンド
      </p>
    </div>
    <div class="timetable-container">
      <div class="days">
        <div v-on:click="show_day1=true" class="day-select">
          <div v-if="show_day1" class="selected day day1"><p>1日目</p></div>
          <div v-else class="day day1"><p>1日目</p></div>
        </div>
        <div v-on:click="show_day1=false" class="day-select">
          <div v-if="!show_day1" class="selected day day2"><p>2日目</p></div>
          <div v-else class="day day2"><p>2日目</p></div>
        </div>
      </div>

      <div class="place">
        <div v-on:click="show_place='小講堂'">
          <div v-if="show_place=='小講堂'" class="place-p selected">小講堂</div>
          <div class="place-p">小講堂</div>
        </div>
        <div v-on:click="show_place='本館ホール'">
          <div v-if="show_place=='本館ホール'" class="place-p selected">本館ホール</div>
          <div class="place-p">本館ホール</div>
        </div>
        <div v-on:click="show_place='中学視聴覚室'">
          <div v-if="show_place=='中学視聴覚室'" class="place-p selected">中学視聴覚室</div>
          <div class="place-p">中学視聴覚室</div>
        </div>
        <div v-on:click="show_place='柔道場'">
          <div v-if="show_place=='柔道場'" class="place-p selected">柔道場</div>
          <div class="place-p">柔道場</div>
        </div>
        <div v-on:click="show_place='第２グラウンド'">
          <div v-if="show_place=='第２グラウンド'" class="place-p selected">第２グラウンド</div>
          <div class="place-p">第２グラウンド</div>
        </div>
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

        <div class="group group1">開成管弦楽団 文化祭演奏会</div>
        <div class="group-time G1-start">9:00</div>
        <div class="name"></div>
        <div class="group-time G1-end">11:00</div>

        <div class="group group2">大道芸、自由自在。</div>
        <div class="group-time G2-start">11:10</div>
        <div class="name"></div>
        <div class="group-time G2-end">12:15</div>

        <div class="group1">開成管弦楽団 文化祭演奏会</div>
        <div class="group-time G3-start">9:00</div>
        <div class="name"></div>
        <div class="group-time G3-end">11:00</div>

        <div class="group1">開成管弦楽団 文化祭演奏会</div>
        <div class="group-time G4-start">9:00</div>
        <div class="name"></div>
        <div class="group-time G4-end">11:00</div>

      </div>
    </div>
  </div>
</template>

<script>

    export default {

        component: {},
        data() {
            return {
                show_day1: true,
                show_place: '小講堂',
            }
        }
    }
</script>

<style>
  .container {
    padding: 0px 15px;
    background-color: #3F0E47;
    color: white;


  }

  .title {
    color: white;
    font-size: 32px;
    padding: 80px 0px;
  }

  .timetable-container {


  }
  

  .selected {
    color: #411445;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-bottom: 3px solid #912A55;
  }

  .days {
    display: grid;
    grid-template-columns: auto auto;
  }

  .day1 {
    border-radius: 10px 0px 0px 0px;
  }

  .day2 {
    border-radius: 0px 10px 0px 0px;
  }

  .day {
    height: 40px;
    font-size: 18px;
    background: #EAEFF2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7f7d7d;

  }

  .place {
    height: 40px;
    display: grid;
    overflow-x: scroll;
    grid-template-columns: 160px 160px 160px 160px 160px;
  }

  .place-p {
    color: #411445;
    background: #EAEFF2;
    border-top: 0.5px solid #000000;
    border-left: 0.5px solid #000000;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid-container {
    background: rgba(221, 226, 229, 0.6);;
    width: 100%;
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 40px 15px 50px auto 15px;
    grid-template-rows: repeat(32, 32.5px);
    grid-auto-flow: column;
  }

  .time {
    background: #912A55;
    border-bottom: 0.5px solid #ffffff;
    grid-row: span 4;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /*1日目小講堂*/
  .group {
    font-size: 20px;
    color: #000000;
    padding: 5px;
    background: #F8F9FA;
    border: 1px solid #CCBD14;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .group-time {
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .group1 {
    grid-column: 3/5;
    grid-row: 2/9;
  }

  .G1-start {
    grid-column: 3/4;
    grid-row: 2/3;
  }

  .G1-end {
    grid-column: 3/4;
    grid-row: 8/9;
  }

  .group2 {
    grid-column: 3/5;
    grid-row: 10/14;
  }

  .G2-start {


  }
</style>
