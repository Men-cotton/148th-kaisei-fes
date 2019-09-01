<template>
  <div class="container-time">
    <Header/>
    <div class="title">
      <p>タイムテーブル</p>
    </div>
    <div class="usage">
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
          <div v-bind:class="{selected: show_day==1}" class="day day1">
            <p v-bind:class="{'selected-text': show_day==1}">1日目</p>
          </div>
        </div>
        <div v-on:click="show_day=2" class="day-select">
          <div v-bind:class="{selected: show_day==2}" class="day day2">
            <p v-bind:class="{'selected-text': show_day==2}">2日目</p>
          </div>
        </div>
      </div>

      <div class="place-row">
        <div v-for="place in places_list">
          <div v-on:click="show_place=place.name">
            <div v-bind:class="[{ selected: show_place==place.name },'place-p']">
              <div v-bind:class="{ 'selected-text': show_place==place.name }">{{place.name}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-container-time">
        <div v-for="n in 8" class="time">{{ n + 8 }}</div>
        <div v-for="event in should_show_events" :key="event.id" class="event-container">
          <div class="group" v-bind:style="{'grid-row': event.start_row + '/' + (event.end_row + 1)}">{{event.name}}
          </div>
          <div class="group-time" v-bind:style="{'grid-row': event.start_row}">{{event.start_time}}</div>
          <!-- <div class="name"></div> -->
          <div class="group-time" v-bind:style="{'grid-row': event.end_row}">{{event.end_time}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    import Header from '~/components/Myheader.vue'

    function calcRow(time) {
        var times = time.split(':');
        var hour = parseInt(times[0]) - 9;
        var minute = parseInt(times[1]);
        var clock = hour * 60 + minute;
        return Math.floor(clock / 15) + 1;
    }

    export default {
        components: {
            Header
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
                        end_row: calcRow('10:55'),
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 1,
                        place: '小講堂',
                        start_time: '11:10',
                        start_row: calcRow('11:10'),
                        end_time: '12:10',
                        end_row: calcRow('12:10'),
                    },
                    {
                        name: '講演会',
                        day: 1,
                        place: '小講堂',
                        start_time: '12:30',
                        start_row: calcRow('12:30'),
                        end_time: '14:05',
                        end_row: calcRow('14:05'),
                    },
                    {
                        name: '出張！弁論文春',
                        day: 1,
                        place: '小講堂',
                        start_time: '14:25',
                        start_row: calcRow('14:25'),
                        end_time: '15:05',
                        end_row: calcRow('15:05'),
                    },
                    {
                        name: '折り紙研究部',
                        day: 1,
                        place: '小講堂',
                        start_time: '15:20',
                        start_row: calcRow('15:20'),
                        end_time: '15:45',
                        end_row: calcRow('15:45'),
                    },
                    {
                        name: '音楽部＠小講堂',
                        day: 1,
                        place: '小講堂',
                        start_time: '16:00',
                        start_row: calcRow('16:00'),
                        end_time: '16:45',
                        end_row: calcRow('16:45'),
                    },
                    {
                        name: '音楽部＠小講堂',
                        day: 2,
                        place: '小講堂',
                        start_time: '9:20',
                        start_row: calcRow('9:20'),
                        end_time: '10:15',
                        end_row: calcRow('10:15'),
                    },
                    {
                        name: '史上最強のクイ研',
                        day: 2,
                        place: '小講堂',
                        start_time: '10:35',
                        start_row: calcRow('10:35'),
                        end_time: '11:40',
                        end_row: calcRow('11:40'),
                    },
                    {
                        name: '出張！弁論文春',
                        day: 2,
                        place: '小講堂',
                        start_time: '11:55',
                        start_row: calcRow('11:55'),
                        end_time: '12:35',
                        end_row: calcRow('12:35'),
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 2,
                        place: '小講堂',
                        start_time: '12:50',
                        start_row: calcRow('12:50'),
                        end_time: '13:45',
                        end_row: calcRow('13:45'),
                    },
                    {
                        name: '折り紙研究部',
                        day: 2,
                        place: '小講堂',
                        start_time: '14:00',
                        start_row: calcRow('14:00'),
                        end_time: '14:25',
                        end_row: calcRow('14:25'),
                    },
                    {
                        name: '開成管弦楽団文化祭演奏会',
                        day: 2,
                        place: '小講堂',
                        start_time: '14:40',
                        start_row: calcRow('14:40'),
                        end_time: '16:25',
                        end_row: calcRow('16:25'),
                    },

                    {
                        name: 'フェンシング部部内試合',
                        day: 1,
                        place: '本館ホール',
                        start_time: '9:15',
                        start_row: calcRow('9:15'),
                        end_time: '10:45',
                        end_row: calcRow('10:45'),
                    },
                    {
                        name: 'パンピーズ 29th',
                        day: 1,
                        place: '本館ホール',
                        start_time: '11:05',
                        start_row: calcRow('11:05'),
                        end_time: '11:50',
                        end_row: calcRow('11:50'),
                    },
                    {
                        name: '彼女は手品好き♡',
                        day: 1,
                        place: '本館ホール',
                        start_time: '12:05',
                        start_row: calcRow('12:05'),
                        end_time: '13:00',
                        end_row: calcRow('13:00'),
                    },
                    {
                        name: '開成ピアノの会 第5回公演',
                        day: 1,
                        place: '本館ホール',
                        start_time: '13:15',
                        start_row: calcRow('13:15'),
                        end_time: '14:40',
                        end_row: calcRow('14:40'),
                    },
                    {
                        name: '開成王',
                        day: 1,
                        place: '本館ホール',
                        start_time: '15:00',
                        start_row: calcRow('15:00'),
                        end_time: '16:05',
                        end_row: calcRow('16:05'),
                    },
                    {
                        name: '中夜祭',
                        day: 1,
                        place: '本館ホール',
                        start_time: '16:30',
                        start_row: calcRow('16:30'),
                        end_time: '16:55',
                        end_row: calcRow('16:55'),
                    },
                    {
                        name: '彼女は手品好き♡',
                        day: 2,
                        place: '本館ホール',
                        start_time: '9:10',
                        start_row: calcRow('9:10'),
                        end_time: '10:00',
                        end_row: calcRow('10:00'),
                    },
                    {
                        name: '開成ピアノの会 第5回公演',
                        day: 2,
                        place: '本館ホール',
                        start_time: '10:15',
                        start_row: calcRow('10:15'),
                        end_time: '12:05',
                        end_row: calcRow('12:05'),
                    },
                    {
                        name: 'バンコン',
                        day: 2,
                        place: '本館ホール',
                        start_time: '12:20',
                        start_row: calcRow('12:20'),
                        end_time: '13:45',
                        end_row: calcRow('13:45'),
                    },
                    {
                        name: '彼女は手品好き♡',
                        day: 2,
                        place: '本館ホール',
                        start_time: '14:05',
                        start_row: calcRow('14:05'),
                        end_time: '14:55',
                        end_row: calcRow('14:55'),
                    },
                    {
                        name: '一般向け後夜祭',
                        day: 2,
                        place: '本館ホール',
                        start_time: '15:20',
                        start_row: calcRow('15:20'),
                        end_time: '16:45',
                        end_row: calcRow('16:45'),
                    },

                    {
                        name: '大道芸、自由自在。',
                        day: 1,
                        place: '中学視聴覚室',
                        start_time: '9:40',
                        start_row: calcRow('9:40'),
                        end_time: '10:15',
                        end_row: calcRow('10:15'),
                    },
                    {
                        name: 'クイズ！VS先生',
                        day: 1,
                        place: '中学視聴覚室',
                        start_time: '11:00',
                        start_row: calcRow('11:00'),
                        end_time: '11:45',
                        end_row: calcRow('11:45'),
                    },
                    {
                        name: '出張！弁論文春',
                        day: 1,
                        place: '中学視聴覚室',
                        start_time: '12:05',
                        start_row: calcRow('12:05'),
                        end_time: '12:45',
                        end_row: calcRow('12:45'),
                    },
                    {
                        name: '熱闘!俳句甲子園in開成',
                        day: 1,
                        place: '中学視聴覚室',
                        start_time: '13:00',
                        start_row: calcRow('13:00'),
                        end_time: '16:45',
                        end_row: calcRow('16:45'),
                    },
                    {
                        name: 'シャドバ天下統一秋の陣',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '9:15',
                        start_row: calcRow('9:15'),
                        end_time: '10:40',
                        end_row: calcRow('10:40'),
                    },
                    {
                        name: '開成生は告らせたい',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '10:55',
                        start_row: calcRow('10:55'),
                        end_time: '12:30',
                        end_row: calcRow('12:30'),
                    },
                    {
                        name: '開成ノーベル学会',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '12:45',
                        start_row: calcRow('12:45'),
                        end_time: '13:50',
                        end_row: calcRow('13:50'),
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '14:05',
                        start_row: calcRow('14:05'),
                        end_time: '14:40',
                        end_row: calcRow('14:40'),
                    },
                    {
                        name: '出張！弁論文春',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '14:55',
                        start_row: calcRow('14:55'),
                        end_time: '15:35',
                        end_row: calcRow('15:35'),
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '15:50',
                        start_row: calcRow('15:50'),
                        end_time: '16:25',
                        end_row: calcRow('16:25'),
                    },

                    {
                        name: '柔道部',
                        day: 1,
                        place: '柔道場',
                        start_time: '12:00',
                        start_row: calcRow('12:00'),
                        end_time: '14:55',
                        end_row: calcRow('14:55'),
                    },
                    {
                        name: '天道流合気道',
                        day: 1,
                        place: '柔道場',
                        start_time: '15:25',
                        start_row: calcRow('15:25'),
                        end_time: '16:10',
                        end_row: calcRow('16:10'),
                    },
                    {
                        name: '天道流合気道',
                        day: 2,
                        place: '柔道場',
                        start_time: '11:00',
                        start_row: calcRow('11:00'),
                        end_time: '11:45',
                        end_row: calcRow('11:45'),
                    },

                    {
                        name: '阿漕な奴ら',
                        day: 1,
                        place: '第２グラウンド',
                        start_time: '11:15',
                        start_row: calcRow('11:15'),
                        end_time: '11:40',
                        end_row: calcRow('11:40'),
                    },
                    {
                        name: 'ひぐらし坂46',
                        day: 1,
                        place: '第２グラウンド',
                        start_time: '13:00',
                        start_row: calcRow('13:00'),
                        end_time: '13:35',
                        end_row: calcRow('13:35'),
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 1,
                        place: '第２グラウンド',
                        start_time: '14:00',
                        start_row: calcRow('14:00'),
                        end_time: '14:55',
                        end_row: calcRow('14:55'),
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '9:50',
                        start_row: calcRow('9:50'),
                        end_time: '10:25',
                        end_row: calcRow('10:25'),
                    },
                    {
                        name: 'ひぐらし坂46',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '10:50',
                        start_row: calcRow('10:50'),
                        end_time: '11:25',
                        end_row: calcRow('11:25'),
                    },
                    {
                        name: '阿漕な奴ら',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '12:00',
                        start_row: calcRow('12:00'),
                        end_time: '12:25',
                        end_row: calcRow('12:25'),
                    },
                    {
                        name: 'ユニコーンがいた日',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '12:55',
                        start_row: calcRow('12:55'),
                        end_time: '12:55',
                        end_row: calcRow('12:55'),
                    },
                    {
                        name: 'ひぐらし坂46',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '14:00',
                        start_row: calcRow('14:00'),
                        end_time: '14:25',
                        end_row: calcRow('14:25'),
                    },
                ],
                places_list: [
                    {name: '小講堂'},
                    {name: '本館ホール'},
                    {name: '中学視聴覚室'},
                    {name: '柔道場'},
                    {name: '第２グラウンド'},
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
  .container-time {
    padding: 0px 15px;
    background-color: #411445;
  }

  .title {
    color: white;
    font-size: 32px;
    padding: 80px 0px;
  }

  .timetable-container {


  }

  .usage {
    color: white;
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

  .place-row {
    height: 40px;
    display: grid;
    overflow-x: scroll;
    grid-template-columns: 180px 180px 180px 180px 180px;
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

  .grid-container-time {
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
    color: white;
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
