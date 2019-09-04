<template>
  <div class="container-time">
    <Header/>
    <div class="title">
      <div class="long"><img src="../assets/sectionmark_along.svg"><div class="long-line"><p>タイムテーブル</p></div></div>
    </div>
    <div class="usage">
      <p>開成祭のタイムテーブル一覧です。時間限定で行う企画はすべてここに載っています。</p>
      <h2>使い方・見方</h2>
      <p>・縦軸が時間です。<br>
        ・１日目、２日目をタップすると日にちを切り替えることができます。 今表示されている小講堂の行を横にスクロールすると別の場所の場所が出てきます。それをタップするとタイムテーブルが切り替わります。
      <h2>ステージ場所一覧</h2>
        <p>小講堂・本館ホール・中学視聴覚室・柔道場・第２グラウンド</p>
    </div>
    <div class="timetable-container">
      <div class="day-row">
        <div v-on:click="show_day=1" v-bind:class="[{selected: show_day==1}, 'day day1']">
          <p v-bind:class="{'selected-text': show_day==1}">1日目</p>
        </div>
        <div v-on:click="show_day=2" v-bind:class="[{selected: show_day==2}, 'day day2']">
          <p v-bind:class="{'selected-text': show_day==2}">2日目</p>
        </div>
      </div>

      <div class="place-row">
        <div v-for="place in places_list">
          <div v-on:click="show_place=place.name" v-bind:class="[{ selected: show_place==place.name }, 'place-p']">
            <p v-bind:class="{ 'selected-text': show_place==place.name }">{{place.name}}</p>
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
</template>

<script>
    import Header from '~/components/Myheader.vue'

    function calcRow(begin, time) {
        var times = time.split(':');
        var hour = parseInt(times[0]) - 9;
        var minute = parseInt(times[1]);
        var clock = hour * 60 + minute;

        if (begin) {
            if (clock % 15 == 10) clock += 5;
        } else {
            if (clock % 15 == 5) clock -= 5;
            if (clock % 15 == 0) clock -= 0.1;
        }
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
                        start_row: calcRow(true, '9:15'),
                        end_time: '11:00',
                        end_row: calcRow(false, '10:55'),
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 1,
                        place: '小講堂',
                        start_time: '11:10',
                        start_row: calcRow(true, '11:10'),
                        end_time: '12:10',
                        end_row: calcRow(false, '12:10'),
                    },
                    {
                        name: '講演会',
                        day: 1,
                        place: '小講堂',
                        start_time: '12:30',
                        start_row: calcRow(true, '12:30'),
                        end_time: '14:10',
                        end_row: calcRow(false, '14:05'),
                    },
                    {
                        name: '出張！弁論文春',
                        day: 1,
                        place: '小講堂',
                        start_time: '14:25',
                        start_row: calcRow(true, '14:25'),
                        end_time: '15:10',
                        end_row: calcRow(false, '15:05'),
                    },
                    {
                        name: '折り紙研究部',
                        day: 1,
                        place: '小講堂',
                        start_time: '15:20',
                        start_row: calcRow(true, '15:20'),
                        end_time: '15:50',
                        end_row: calcRow(false, '15:45'),
                    },
                    {
                        name: '音楽部＠小講堂',
                        day: 1,
                        place: '小講堂',
                        start_time: '16:00',
                        start_row: calcRow(true, '16:00'),
                        end_time: '16:50',
                        end_row: calcRow(false, '16:45'),
                    },
                    {
                        name: '音楽部＠小講堂',
                        day: 2,
                        place: '小講堂',
                        start_time: '9:20',
                        start_row: calcRow(true, '9:20'),
                        end_time: '10:20',
                        end_row: calcRow(false, '10:15'),
                    },
                    {
                        name: '史上最強のクイ研',
                        day: 2,
                        place: '小講堂',
                        start_time: '10:35',
                        start_row: calcRow(true, '10:35'),
                        end_time: '11:45',
                        end_row: calcRow(false, '11:40'),
                    },
                    {
                        name: '出張！弁論文春',
                        day: 2,
                        place: '小講堂',
                        start_time: '11:55',
                        start_row: calcRow(true, '11:55'),
                        end_time: '12:40',
                        end_row: calcRow(false, '12:35'),
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 2,
                        place: '小講堂',
                        start_time: '12:50',
                        start_row: calcRow(true, '12:50'),
                        end_time: '13:50',
                        end_row: calcRow(false, '13:45'),
                    },
                    {
                        name: '折り紙研究部',
                        day: 2,
                        place: '小講堂',
                        start_time: '14:00',
                        start_row: calcRow(true, '14:00'),
                        end_time: '14:30',
                        end_row: calcRow(false, '14:25'),
                    },
                    {
                        name: '開成管弦楽団文化祭演奏会',
                        day: 2,
                        place: '小講堂',
                        start_time: '14:40',
                        start_row: calcRow(true, '14:40'),
                        end_time: '16:30',
                        end_row: calcRow(false, '16:25'),
                    },

                    {
                        name: 'フェンシング部部内試合',
                        day: 1,
                        place: '本館ホール',
                        start_time: '9:15',
                        start_row: calcRow(true, '9:15'),
                        end_time: '10:50',
                        end_row: calcRow(false, '10:45'),
                    },
                    {
                        name: 'パンピーズ 29th',
                        day: 1,
                        place: '本館ホール',
                        start_time: '11:05',
                        start_row: calcRow(true, '11:05'),
                        end_time: '11:55',
                        end_row: calcRow(false, '11:50'),
                    },
                    {
                        name: '彼女は手品好き♡',
                        day: 1,
                        place: '本館ホール',
                        start_time: '12:05',
                        start_row: calcRow(true, '12:05'),
                        end_time: '13:05',
                        end_row: calcRow(false, '13:00'),
                    },
                    {
                        name: '開成ピアノの会 第5回公演',
                        day: 1,
                        place: '本館ホール',
                        start_time: '13:15',
                        start_row: calcRow(true, '13:15'),
                        end_time: '14:45',
                        end_row: calcRow(false, '14:40'),
                    },
                    {
                        name: '開成王',
                        day: 1,
                        place: '本館ホール',
                        start_time: '15:00',
                        start_row: calcRow(true, '15:00'),
                        end_time: '16:10',
                        end_row: calcRow(false, '16:05'),
                    },
                    {
                        name: '中夜祭',
                        day: 1,
                        place: '本館ホール',
                        start_time: '16:30',
                        start_row: calcRow(true, '16:30'),
                        end_time: '18:00',
                        end_row: calcRow(false, '16:55'),
                    },
                    {
                        name: '彼女は手品好き♡',
                        day: 2,
                        place: '本館ホール',
                        start_time: '9:10',
                        start_row: calcRow(true, '9:10'),
                        end_time: '10:05',
                        end_row: calcRow(false, '10:00'),
                    },
                    {
                        name: '開成ピアノの会 第5回公演',
                        day: 2,
                        place: '本館ホール',
                        start_time: '10:15',
                        start_row: calcRow(true, '10:15'),
                        end_time: '12:10',
                        end_row: calcRow(false, '12:05'),
                    },
                    {
                        name: 'バンドコンテスト',
                        day: 2,
                        place: '本館ホール',
                        start_time: '12:20',
                        start_row: calcRow(true, '12:20'),
                        end_time: '13:50',
                        end_row: calcRow(false, '13:45'),
                    },
                    {
                        name: '彼女は手品好き♡',
                        day: 2,
                        place: '本館ホール',
                        start_time: '14:05',
                        start_row: calcRow(true, '14:05'),
                        end_time: '15:00',
                        end_row: calcRow(false, '14:55'),
                    },
                    {
                        name: '一般向け後夜祭',
                        day: 2,
                        place: '本館ホール',
                        start_time: '15:20',
                        start_row: calcRow(true, '15:20'),
                        end_time: '16:50',
                        end_row: calcRow(false, '16:45'),
                    },

                    {
                        name: '大道芸、自由自在。',
                        day: 1,
                        place: '中学視聴覚室',
                        start_time: '9:40',
                        start_row: calcRow(true, '9:40'),
                        end_time: '10:20',
                        end_row: calcRow(false, '10:15'),
                    },
                    {
                        name: 'クイズ！VS先生',
                        day: 1,
                        place: '中学視聴覚室',
                        start_time: '11:00',
                        start_row: calcRow(true, '11:00'),
                        end_time: '11:50',
                        end_row: calcRow(false, '11:45'),
                    },
                    {
                        name: '出張！弁論文春',
                        day: 1,
                        place: '中学視聴覚室',
                        start_time: '12:05',
                        start_row: calcRow(true, '12:05'),
                        end_time: '12:50',
                        end_row: calcRow(false, '12:45'),
                    },
                    {
                        name: '熱闘!俳句甲子園in開成',
                        day: 1,
                        place: '中学視聴覚室',
                        start_time: '13:00',
                        start_row: calcRow(true, '13:00'),
                        end_time: '16:50',
                        end_row: calcRow(false, '16:45'),
                    },
                    {
                        name: 'シャドバ天下統一秋の陣',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '9:15',
                        start_row: calcRow(true, '9:15'),
                        end_time: '10:45',
                        end_row: calcRow(false, '10:40'),
                    },
                    {
                        name: '開成生は告らせたい',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '10:55',
                        start_row: calcRow(true, '10:55'),
                        end_time: '12:35',
                        end_row: calcRow(false, '12:30'),
                    },
                    {
                        name: '開成ノーベル学会',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '12:45',
                        start_row: calcRow(true, '12:45'),
                        end_time: '13:55',
                        end_row: calcRow(false, '13:50'),
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '14:05',
                        start_row: calcRow(true, '14:05'),
                        end_time: '14:45',
                        end_row: calcRow(false, '14:40'),
                    },
                    {
                        name: '出張！弁論文春',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '14:55',
                        start_row: calcRow(true, '14:55'),
                        end_time: '15:40',
                        end_row: calcRow(false, '15:35'),
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '15:50',
                        start_row: calcRow(true, '15:50'),
                        end_time: '16:30',
                        end_row: calcRow(false, '16:25'),
                    },

                    {
                        name: '柔道部',
                        day: 1,
                        place: '柔道場',
                        start_time: '12:00',
                        start_row: calcRow(true, '12:00'),
                        end_time: '15:00',
                        end_row: calcRow(false, '14:55'),
                    },
                    {
                        name: '天道流合気道',
                        day: 1,
                        place: '柔道場',
                        start_time: '15:25',
                        start_row: calcRow(true, '15:25'),
                        end_time: '16:15',
                        end_row: calcRow(false, '16:10'),
                    },
                    {
                        name: '天道流合気道',
                        day: 2,
                        place: '柔道場',
                        start_time: '11:00',
                        start_row: calcRow(true, '11:00'),
                        end_time: '11:50',
                        end_row: calcRow(false, '11:45'),
                    },

                    {
                        name: '阿漕な奴ら',
                        day: 1,
                        place: '第２グラウンド',
                        start_time: '11:15',
                        start_row: calcRow(true, '11:15'),
                        end_time: '11:45',
                        end_row: calcRow(false, '11:40'),
                    },
                    {
                        name: 'ひぐらし坂46',
                        day: 1,
                        place: '第２グラウンド',
                        start_time: '13:00',
                        start_row: calcRow(true, '13:00'),
                        end_time: '13:40',
                        end_row: calcRow(false, '13:35'),
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 1,
                        place: '第２グラウンド',
                        start_time: '14:00',
                        start_row: calcRow(true, '14:00'),
                        end_time: '15:00',
                        end_row: calcRow(false, '14:55'),
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '9:50',
                        start_row: calcRow(true, '9:50'),
                        end_time: '10:30',
                        end_row: calcRow(false, '10:25'),
                    },
                    {
                        name: 'ひぐらし坂46',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '10:50',
                        start_row: calcRow(true, '10:50'),
                        end_time: '11:30',
                        end_row: calcRow(false, '11:25'),
                    },
                    {
                        name: '阿漕な奴ら',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '12:00',
                        start_row: calcRow(true, '12:00'),
                        end_time: '12:30',
                        end_row: calcRow(false, '12:25'),
                    },
                    {
                        name: 'ユニコーンがいた日',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '12:55',
                        start_row: calcRow(true, '12:40'), // m(_ _ )m
                        end_time: '13:00',
                        end_row: calcRow(false, '12:55'),
                    },
                    {
                        name: 'ひぐらし坂46',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '14:00',
                        start_row: calcRow(true, '14:00'),
                        end_time: '14:30',
                        end_row: calcRow(false, '14:25'),
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
    padding: 0px 15px 30px;
    background-color: #411445;
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

  .timetable-container {
  }

  .usage {
    color: white;
    margin: 10px 0;
  }
  .usage >p{
    margin: 3px 0;
  }

  .selected {
    color: #411445;
    box-shadow: inset 0px 8px 8px rgba(0, 0, 0, 0.25);
    border-bottom: 4px solid #912A55;
    background-color: #C4C4C4;
  }

  .selected-text {
    color: #411445;
  }

  .day-row {
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
    grid-template-columns: 20% 20% 20% 20% 20%;
  }

  @media screen and (max-width: 600px) {
    .place-row {
      overflow-x: scroll;
      scroll-behavior: smooth;
      grid-template-columns: 150px 150px 150px 150px 150px;

    }
  }

  .place-p {
    height: 40px;
    color: #7f7d7d;
    background: #EAEFF2;
    border-top: 0.5px solid #000000;
    border-left: 0.5px solid #000000;
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
    border-radius: 10px 0;
  }

  .event-container {
    position: absolute;
    left: 20px;
    width: calc(100% - 40px);
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 40px 1px 50px auto 1px;
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
    padding: 5px 5px 5px 25px;
    background: #F8F9FA;
    border: 1px solid #CCBD14;
    text-align: center;
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
