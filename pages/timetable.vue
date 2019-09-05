<template>
  <div class="container-time">
    <Header/>
    <div class="title">
      <div class="long"><img src="../assets/sectionmark_along.svg">
        <div class="long-line"><p>タイムテーブル</p></div>
      </div>
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
      <div class="button-container">
        <div class="buttons-row day-row">
          <div v-on:click="show_day=1" v-bind:class="[{selected: show_day==1}, 'day day1 button']">
            <p>1日目</p>
          </div>
          <div v-on:click="show_day=2" v-bind:class="[{selected: show_day==2}, 'day day2 button']">
            <p>2日目</p>
          </div>
        </div>

        <div class="buttons-row place-row">
          <div v-for="place in places_list" v-bind:key="place.name">
            <div v-on:click="show_place=place.name"
                 v-bind:class="[{ selected: show_place==place.name }, 'place-p button']">
              <p v-bind:class="{ 'selected-text': show_place==place.name }">{{place.name}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-container-time">
        <div v-for="n in 8" class="time">{{ n + 8 }}</div>
        <TimetableCard v-for="event in should_show_events"
                       v-bind:key="event.id"
                       v-bind:event="event"
        />
      </div>
    </div>
  </div>
</template>

<script>
    import Header from '~/components/Myheader.vue';
    import TimetableCard from '~/components/timetablecard.vue';

    export default {
        components: {
            Header,
            TimetableCard,
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
                        end_time: '11:00',
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 1,
                        place: '小講堂',
                        start_time: '11:10',
                        end_time: '12:10',
                    },
                    {
                        name: '講演会',
                        day: 1,
                        place: '小講堂',
                        start_time: '12:30',
                        end_time: '14:10',
                    },
                    {
                        name: '出張！弁論文春',
                        day: 1,
                        place: '小講堂',
                        start_time: '14:25',
                        end_time: '15:10',
                    },
                    {
                        name: '折り紙研究部',
                        day: 1,
                        place: '小講堂',
                        start_time: '15:20',
                        end_time: '15:50',
                    },
                    {
                        name: '音楽部＠小講堂',
                        day: 1,
                        place: '小講堂',
                        start_time: '16:00',
                        end_time: '16:50',
                    },
                    {
                        name: '音楽部＠小講堂',
                        day: 2,
                        place: '小講堂',
                        start_time: '9:20',
                        end_time: '10:20',
                    },
                    {
                        name: '史上最強のクイ研',
                        day: 2,
                        place: '小講堂',
                        start_time: '10:35',
                        end_time: '11:45',
                    },
                    {
                        name: '出張！弁論文春',
                        day: 2,
                        place: '小講堂',
                        start_time: '11:55',
                        end_time: '12:40',
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 2,
                        place: '小講堂',
                        start_time: '12:50',
                        end_time: '13:50',
                    },
                    {
                        name: '折り紙研究部',
                        day: 2,
                        place: '小講堂',
                        start_time: '14:00',
                        end_time: '14:30',
                    },
                    {
                        name: '開成管弦楽団文化祭演奏会',
                        day: 2,
                        place: '小講堂',
                        start_time: '14:40',
                        end_time: '16:30',
                    },

                    {
                        name: 'フェンシング部部内試合',
                        day: 1,
                        place: '本館ホール',
                        start_time: '9:15',
                        end_time: '10:50',
                    },
                    {
                        name: 'パンピーズ 29th',
                        day: 1,
                        place: '本館ホール',
                        start_time: '11:05',
                        end_time: '11:55',
                    },
                    {
                        name: '彼女は手品好き♡',
                        day: 1,
                        place: '本館ホール',
                        start_time: '12:05',
                        end_time: '13:05',
                    },
                    {
                        name: '開成ピアノの会 第5回公演',
                        day: 1,
                        place: '本館ホール',
                        start_time: '13:15',
                        end_time: '14:45',
                    },
                    {
                        name: '開成王',
                        day: 1,
                        place: '本館ホール',
                        start_time: '15:00',
                        end_time: '16:10',
                    },
                    {
                        name: '中夜祭',
                        day: 1,
                        place: '本館ホール',
                        start_time: '16:30',
                        end_time: '18:00',
                    },
                    {
                        name: '彼女は手品好き♡',
                        day: 2,
                        place: '本館ホール',
                        start_time: '9:10',
                        end_time: '10:05',
                    },
                    {
                        name: '開成ピアノの会 第5回公演',
                        day: 2,
                        place: '本館ホール',
                        start_time: '10:15',
                        end_time: '12:10',
                    },
                    {
                        name: 'バンドコンテスト',
                        day: 2,
                        place: '本館ホール',
                        start_time: '12:20',
                        end_time: '13:50',
                    },
                    {
                        name: '彼女は手品好き♡',
                        day: 2,
                        place: '本館ホール',
                        start_time: '14:05',
                        end_time: '15:00',
                    },
                    {
                        name: '一般向け後夜祭',
                        day: 2,
                        place: '本館ホール',
                        start_time: '15:20',
                        end_time: '16:50',
                    },

                    {
                        name: '大道芸、自由自在。',
                        day: 1,
                        place: '中学視聴覚室',
                        start_time: '9:40',
                        end_time: '10:20',
                    },
                    {
                        name: 'クイズ！VS先生',
                        day: 1,
                        place: '中学視聴覚室',
                        start_time: '11:00',
                        end_time: '11:50',
                    },
                    {
                        name: '出張！弁論文春',
                        day: 1,
                        place: '中学視聴覚室',
                        start_time: '12:05',
                        end_time: '12:50',
                    },
                    {
                        name: '熱闘!俳句甲子園in開成',
                        day: 1,
                        place: '中学視聴覚室',
                        start_time: '13:00',
                        end_time: '16:50',
                    },
                    {
                        name: 'シャドバ天下統一秋の陣',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '9:15',
                        end_time: '10:45',
                    },
                    {
                        name: '開成生は告らせたい',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '10:55',
                        end_time: '12:35',
                    },
                    {
                        name: '開成ノーベル学会',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '12:45',
                        end_time: '13:55',
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '14:05',
                        end_time: '14:45',
                    },
                    {
                        name: '出張！弁論文春',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '14:55',
                        end_time: '15:40',
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 2,
                        place: '中学視聴覚室',
                        start_time: '15:50',
                        end_time: '16:30',
                    },

                    {
                        name: '柔道部',
                        day: 1,
                        place: '柔道場',
                        start_time: '12:00',
                        end_time: '15:00',
                    },
                    {
                        name: '天道流合気道',
                        day: 1,
                        place: '柔道場',
                        start_time: '15:25',
                        end_time: '16:15',
                    },
                    {
                        name: '天道流合気道',
                        day: 2,
                        place: '柔道場',
                        start_time: '11:00',
                        end_time: '11:50',
                    },

                    {
                        name: '阿漕な奴ら',
                        day: 1,
                        place: '第２グラウンド',
                        start_time: '11:15',
                        end_time: '11:45',
                    },
                    {
                        name: 'ひぐらし坂46',
                        day: 1,
                        place: '第２グラウンド',
                        start_time: '13:00',
                        end_time: '13:40',
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 1,
                        place: '第２グラウンド',
                        start_time: '14:00',
                        end_time: '15:00',
                    },
                    {
                        name: '大道芸、自由自在。',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '9:50',
                        end_time: '10:30',
                    },
                    {
                        name: 'ひぐらし坂46',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '10:50',
                        end_time: '11:30',
                    },
                    {
                        name: '阿漕な奴ら',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '12:00',
                        end_time: '12:30',
                    },
                    {
                        name: 'ユニコーンがいた日',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '12:55',
                        end_time: '13:00',
                    },
                    {
                        name: 'ひぐらし坂46',
                        day: 2,
                        place: '第２グラウンド',
                        start_time: '14:00',
                        end_time: '14:30',
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

  .long {
    border-left-style: revert;
    position: relative;
    font-size: 32px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    padding: 10px 0;
  }

  .long-line {
    width: 100%;
    border-bottom: #CCBD14 2px solid;
  }

  .long-line > p {
    position: relative;
    left: 7px;
  }

  .timetable-container {
    background: rgba(221, 226, 229, 0.6);
    border-radius: 10px 10px 0px 0px;
  }

  .button-container {
    background-color: #495057;
    border-radius: 10px 10px 0px 0px;
  }

  .usage {
    color: white;
    margin: 10px 0;
  }

  .usage > p {
    margin: 3px 0;
  }

  .selected {
    color: #411445;
    padding-bottom: 0px !important;
    border-bottom: 4px solid #912A55;
  }
  
  .buttons-row {
    margin-left: 40px;
    background-color: #EAEFF2;
    display: grid;
  }

  .day-row {
    grid-template-columns: auto auto;
    border-radius: 0px 10px 0px 0px;
  }

  .day1 {
  }

  .day2 {
    border-radius: 0px 10px 0px 0px;
  }

  .day {
    font-size: 18px;
  }

  .place-row {
    grid-template-columns: 20% 20% 20% 20% 20%;
  }

  @media screen and (max-width: 600px) {
    .place-row {
      overflow-x: scroll;
      scroll-behavior: smooth;
      grid-template-columns: 150px 150px 150px 150px 150px;
    }
  }

  .button {
    height: 40px;
    padding-bottom: 4px;
    color: #411445;
    background: #EAEFF2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button:hover {
    padding-bottom: 0px;
    border-bottom: 4px solid #a38390;
  }

  .grid-container-time {
    position: relative;
    width: 100%;
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 40px 15px 50px auto 15px;
    grid-template-rows: repeat(32, 32.5px);
    grid-auto-flow: column;
    border-radius: 10px 0;
  }

  .time {
    background: #912A55;
    color: white;
    border-top: 0.5px solid #ffffff;
    grid-row: span 4;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
