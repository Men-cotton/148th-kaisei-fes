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
        <div v-on:click="show_day=1" class="day-select">
          <div v-if="show_day==1" class="selected day day1"><p class="selected-text">1日目</p></div>
          <div v-else class="day day1"><p>1日目</p></div>
        </div>
        <div v-on:click="show_day=2" class="day-select">
          <div v-if="show_day==2" class="selected day day2"><p class="selected-text">2日目</p></div>
          <div v-else class="day day2"><p>2日目</p></div>
        </div>
      </div>

      <div class="place">
        <div v-on:click="show_place='小講堂'">
          <div v-if="show_place=='小講堂'" class="place-p selected">
            <div class="selected-text">小講堂</div>
          </div>
          <div v-else class="place-p">小講堂</div>
        </div>
        <div v-on:click="show_place='本館ホール'">
          <div v-if="show_place=='本館ホール'" class="place-p selected">
            <div class="selected-text">本館ホール</div>
          </div>
          <div v-else class="place-p">本館ホール</div>
        </div>
        <div v-on:click="show_place='中学視聴覚室'">
          <div v-if="show_place=='中学視聴覚室'" class="place-p selected">
            <div class="selected-text">中学視聴覚室</div>
          </div>
          <div v-else class="place-p">中学視聴覚室</div>
        </div>
        <div v-on:click="show_place='柔道場'">
          <div v-if="show_place=='柔道場'" class="place-p selected">
            <div class="selected-text">柔道場</div>
          </div>
          <div v-else class="place-p">柔道場</div>
        </div>
        <div v-on:click="show_place='第２グラウンド'">
          <div v-if="show_place=='第２グラウンド'" class="place-p selected">
            <div class="selected-text">第２グラウンド</div>
          </div>
          <div v-else class="place-p">第２グラウンド</div>
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
        <div v-for="event in should_show_events" :key="event.id" class="event-container">
          <div class="group" v-bind:style="{'grid-row': event.start_row + '/' + (event.end_row + 1)}">{{event.name}}</div>
          <div class="group-time" v-bind:style="{'grid-row': event.start_row}">{{event.start_time}}</div>
          <div class="name"></div>
          <div class="group-time" v-bind:style="{'grid-row': event.end_row}">{{event.end_time}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

    function calcRow(time) {
        var times = time.split(':');
        var minute = (parseInt(times[0]) - 9) * 60 + parseInt(times[1]);
        return Math.floor(minute / 15) + 1;
    }

    export default {
        components: {
        },
        data() {
            return {
                show_day: 1,
                show_place: '小講堂',
                events_list: [
                    {
                        name: '開成管弦楽団 文化祭演奏会',
                        day: 1,
                        place: '小講堂',
                        start_time: '9:15',
                        start_row: calcRow('9:15'),
                        end_time: '10:55',
                        end_row: 8,
                    },
                    {
                        name: 'うし',
                        day: 1,
                        place: '本館ホール',
                        start_time: '9:15',
                        start_row: 2,
                        end_time: '10:55',
                        end_row: 8,
                    },
                    {
                        name: 'たぷ',
                        day: 2,
                        place: '小講堂',
                        start_time: '9:15',
                        start_row: 2,
                        end_time: '10:55',
                        end_row: 8,
                    },
                ],
            }
        },
        computed: {
            should_show_events: function () {
                var show_day = this.show_day;
                var show_place = this.show_place;
                return this.events_list.filter(function (event) {
                    return (event.day == show_day) && (event.place == show_place)
                })
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
    background-color: #D6DBDE;
  }

  .selected-text {
    color: #411445;
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
    height: 100%;
    color: #7f7d7d;
    background: #EAEFF2;
    border-top: 0.5px solid #000000;
    border-left: 0.5px solid #000000;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid-container {
    position: relative;
    background: rgba(221, 226, 229, 0.6);
    width: 100%;
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 40px 15px 50px auto 15px;
    grid-template-rows: repeat(32, 32.5px);
    grid-auto-flow: column;
  }

  .event-container {
    position: absolute;
    left: 25px;
    width: calc(100% - 50px);
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
    grid-column: 3/5;
  }

  .group-time {
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 3/4;
  }

</style>
